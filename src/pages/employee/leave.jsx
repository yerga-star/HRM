import React, { useState } from "react"
import Select from "react-select";
import "../../css/employee.css"
import {
    useLoaderData,
    defer, 
    Await
} from "react-router-dom"
import { getLeaves } from "../../src/api"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { PacmanLoader } from "react-spinners";
import Table from './Table';

export function loader() {
    return defer({ leaves: getLeaves() })
}

export default function Leaves() {
    const dataPromise = useLoaderData()
    const [empName, setEmpName] = useState('')
    const [leaveType, setLeaveType] = useState('')
    const [leaveStatus, setLeaveStatus] = useState('')
    const [fromDate, setFromDate] = useState(new Date())
    const [toDate, setToDate] = useState(new Date())
    const [rowsPerPage, setRowsPerPage] = useState(10)

    const columns = [
        {
            Header: 'Employee',
            accessor: 'employee',
        },
        {
            Header: 'Leave Type',
            accessor: 'type',
        },
        {
            Header: 'From',
            accessor: 'from',
        },
        {
            Header: 'To',
            accessor: 'to',
        },
        {
            Header: 'No of Days',
            accessor: 'days',
        },
        {
            Header: 'Satus',
            accessor: 'status',
        },
        {
            Header: 'Action',
            accessor: 'id',
            disableSortBy: true,
            Cell: ({ row }) => (
                <button className="edit-button" onClick={() => handleEdit(row.original.id)}>
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                </button>
            ),
        },
    ];
    const stateSetterMap = {
        empName: setEmpName,
        fromDate: setFromDate,
        toDate: setToDate
    };

    const typeOptions = [
        { value: "Annual Leave", label: "Annual Leave" },
        { value: "Medical Leave", label: "Medical Leave" },
        { value: "Maternity Leave", label: "Maternity Leave" }
    ];
    const statusOptions = [
        { value: "Pending", label: "Pending" },
        { value: "Approved", label: "Approved" },
        { value: "Rejected", label: "Rejected" }
    ];

    const handleLeaveTypeChange = (selectedOption) => {
        setLeaveType(selectedOption);
    };

    const handleLeaveStatusChange = (selectedOption) => {
        setLeaveStatus(selectedOption);
    };
    function handleChange(event) {
        const { name, value } = event.target;
        const setState = stateSetterMap[name];
        if (setState) {
            setState(value);
        }

    }
    function handleRowsPerPageChange(event) {
        setRowsPerPage(event.target.value)
    }


    function renderLeaves(leaves) {
        const leaveElements = <Table data={leaves} columns={columns} />
        return (
            <div className="container-div">
                <div className="child-container">
                    <div className="container-header">
                        <h2>Leave</h2>
                        <h4>Dashboard / Leave</h4>
                    </div>
                    <div className="btn-new">
                        <p>+ Add Leave</p>
                    </div>
                </div>
                <div className="day-count-container">
                    <div className="sub-count-container">
                        <p className="count-title">Today Presnets</p>
                        <p className="day-count">12 / 60</p>
                    </div>
                    <div className="sub-count-container">
                        <p className="count-title">Planned Leaves</p>
                        <p className="day-count">8</p>
                    </div>
                    <div className="sub-count-container">
                        <p className="count-title">Unlanned Leaves</p>
                        <p className="day-count">0</p>
                    </div>
                    <div className="sub-count-container">
                        <p className="count-title">Pending Requests</p>
                        <p className="day-count">12</p>
                    </div>
                </div>
                <div className="search-input">

                    <input
                        name="empName"
                        type="text"
                        placeholder="Employee Name"
                        value={empName}
                        onChange={handleChange}

                    />
                    <Select
                        name="leaveType"
                        options={typeOptions}
                        className="react-select-container"
                        classNamePrefix="react-select"
                        value={leaveType}
                        onChange={handleLeaveTypeChange}
                        placeholder="Select an option"
                    />
                    <Select
                        name="leaveStatus"
                        options={statusOptions}
                        className="react-select-container"
                        classNamePrefix="react-select"
                        value={leaveStatus}
                        onChange={handleLeaveStatusChange}
                        placeholder="Select an option"
                    />
                    <input
                        name="fromDate"
                        type="date"
                        placeholder="From Date"
                        value={fromDate}
                        onChange={handleChange}
                        max={new Date().toISOString().slice(0, 10)} // Set max date to today
                        min="1000-01-01"
                    />
                    <input
                        name="toDate"
                        type="date"
                        placeholder="To Date"
                        value={toDate}
                        onChange={handleChange}
                        max={new Date().toISOString().slice(0, 10)} // Set max date to today
                        min="1000-01-01"
                    />
                    <button
                        name="search">Search
                    </button>
                </div>
                {leaveElements}
                <div className="bottom-counter">
                    <p >Showing 1 - 7 of 7 entries</p>
                    <div className="prev-next">
                        <button disabled={true}>Previous</button>
                    </div>
                    <div className="page-count">
                        <p>1</p>
                    </div>
                    <div className="prev-next">
                        <button disabled={true}> Next</button>
                    </div>
                    <div className="prev-next">
                        <select
                            value={rowsPerPage}
                            onChange={handleRowsPerPageChange}
                            className="rows-per-page"
                        >
                            <option value={10}>10</option>
                            <option value={20}>20</option>
                            <option value={50}>50</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <React.Suspense
            fallback={
                <div className="spinner">
                    <PacmanLoader color={"#e98d24"} size={25} />
                </div>}>

            <Await resolve={dataPromise.leaves}>
                {renderLeaves}
            </Await>

        </React.Suspense>
    )
};