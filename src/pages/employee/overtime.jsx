import React, { useState } from "react"
import "../../css/employee.css"
import {
    useLoaderData,
    defer, 
    Await
} from "react-router-dom"
import { getOvertime } from "../../src/api"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { PacmanLoader } from "react-spinners";
import Table from './Table';

export function loader() {
    return defer({ overtimes: getOvertime() })
}

export default function Overtime() {
    const dataPromise = useLoaderData()
   
    const [rowsPerPage, setRowsPerPage] = useState(10)

    const columns = [
        {
            Header: '#',
            accessor: 'num',
        },
        {
            Header: 'Name',
            accessor: 'employee',
        },
        {
            Header: 'OT Date',
            accessor: 'date',
        },
        {
            Header: 'OT Hours',
            accessor: 'hour',
        },
        {
            Header: 'OT Type',
            accessor: 'type',
        },
        {
            Header: 'Description',
            accessor: 'description',
        },
        {
            Header: 'Satus',
            accessor: 'status',
        },
        {
            Header: 'Approved by',
            accessor: 'by',
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
   
    function handleRowsPerPageChange(event) {
        setRowsPerPage(event.target.value)
    }

    function renderOvertimes(overtimes) {
        const overtimeElements = <Table data={overtimes} columns={columns} />
        return (
            <div className="container-div">
                <div className="child-container">
                    <div className="container-header">
                        <h2>Overtime</h2>
                        <h4>Dashboard / Overtime</h4>
                    </div>
                    <div className="btn-new">
                        <p>+ Add Overtime</p>
                    </div>
                </div>
                <div className="day-count-container">
                    <div className="sub-count-container">
                        <p className="count-title">Overtime Employee</p>
                        <p className="day-count">12 this month</p>
                    </div>
                    <div className="sub-count-container">
                        <p className="count-title">Overtime Hours</p>
                        <p className="day-count">8 this month</p>
                    </div>
                    <div className="sub-count-container">
                        <p className="count-title">Pending Request</p>
                        <p className="day-count">0</p>
                    </div>
                    <div className="sub-count-container">
                        <p className="count-title">Rejected</p>
                        <p className="day-count">12</p>
                    </div>
                </div>
                {overtimeElements}
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

            <Await resolve={dataPromise.overtimes}>
                {renderOvertimes}
            </Await>

        </React.Suspense>
    )
};