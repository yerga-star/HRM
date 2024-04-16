import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import "../../css/employee.css"
import {
    useLoaderData,
    defer,
    Await
} from "react-router-dom"
import { getDepartment } from "../../src/api"
import { PacmanLoader } from "react-spinners";
import Table from './Table';

export function loader() {
    return defer({ departments: getDepartment() })
}
export default function Departments() {
    const dataPromise = useLoaderData()
    const [rowsPerPage, setRowsPerPage] = useState(10)

    const columns = [
        {
          Header: '#',
          accessor: 'num',
        },
    {
        Header: 'Department',
        accessor: 'department',
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

    function renderDepartment(departments) {
        const departmentElements = <Table data={departments} columns={columns} />
        return (
            <div className="container-div">
                <div className="child-container">
                    <div className="container-header">
                        <h2>Departments</h2>
                        <h4>Dashboard / Departments</h4>
                    </div>
                    <div className="btn-new">
                        <p>+ Add Department</p>
                    </div>
                    
                </div>
                {departmentElements}
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
            <Await resolve={dataPromise.departments}>
                {renderDepartment}
            </Await>
        </React.Suspense>
    )
};