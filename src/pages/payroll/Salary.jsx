import React, {useState} from "react";
import Select from "react-select";
import {
    defer,
    Await,
    useLoaderData
} from "react-router-dom"
import Table from '../employee/Table';
import "../../css/employee.css"
import { getSalaries } from "../../src/api";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { PacmanLoader } from "react-spinners";

export function loader(){
    return defer({salaries: getSalaries()})
}

export default function Salary(){
    const dataPromise = useLoaderData()
    const [role, setRole] = useState('')
    const [empName, setEmpName] = useState('')
    const [fromDate, setFromDate] = useState('')
    const [toDate, setToDate] = useState('')
    const [rowsPerPage, setRowsPerPage] = useState('')
    const roleOptions = [
        { value: "Employee", label: "Employee" },
        { value: "Manager", label: "Manager" }
    ];
    const columns = [
        {
          Header: 'Name',
          accessor: 'name',
        },
        {
          Header: 'ID',
          accessor: 'emp_id',
        },
        {
          Header: 'Email',
          accessor: 'email',
        },
        {
          Header: 'Join Date',
          accessor: 'join_date',
        },
        {
          Header: 'Role',
          accessor: 'role',
        },
        {
          Header: 'Salary',
          accessor: 'salary',
        },
        {
            Header: 'Payslip',
            disableSortBy: true,
          Cell: ({ row }) => (
            <button className="slip-button" onClick={() => handleEdit(row.original.id)}>
              Generate slip
            </button>
          ),
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
    function handleChange(event) {
        const { name, value } = event.target;
        const setState = stateSetterMap[name];
        if (setState) {
            setState(value);
        }

    }
    function handelRoleChange(selectedOption){
        setRole(selectedOption)
    }
    function handleRowsPerPageChange(event) {
        setRowsPerPage(event.target.value)
      }

    function renderSalary(salaries){
        const salaryElements = <Table data={salaries} columns={columns} />
        
        return (
        <div className="container-div">
                <div className="child-container">
                    <div className="container-header">
                        <h2>Employee Salary</h2>
                        <h4>Dashboard / Salary</h4>
                    </div>
                    <div className="btn-new">
                        <p>+ Add Salary</p>
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
                        name="role"
                        options={roleOptions}
                        className="react-select-container"
                        classNamePrefix="react-select"
                        value={role}
                        onChange={handelRoleChange}
                        placeholder="Select Role"
                    />
                   <label className="date-lable">
                    From date                   
                    <input
                        name="fromDate"
                        type="date"
                        placeholder="From Date"
                        value={fromDate}
                        onChange={handleChange}
                        max={new Date().toISOString().slice(0, 10)} // Set max date to today
                        min="1000-01-01"
                    />
                    </label>
                    <label className="date-lable">
                    To date    
                    <input
                        name="toDate"
                        type="date"
                        placeholder="To Date"
                        value={toDate}
                        onChange={handleChange}
                        max={new Date().toISOString().slice(0, 10)} // Set max date to today
                        min="1000-01-01"
                    />
                    </label>
                    <button
                        name="search">Search
                    </button>
                </div>
                {salaryElements}
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
        <React.Suspense fallback={
            <div className="spinner">
              <PacmanLoader color={"#e98d24"} size={25} />
            </div>}>
            <Await resolve={dataPromise.salaries}>
                {renderSalary}
            </Await>
        </React.Suspense>
     )
}