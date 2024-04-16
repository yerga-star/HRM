import React, { useState } from "react";
import {
    defer,
    Await,
    useLoaderData
} from "react-router-dom"
import { getTickets } from "../src/api";
import Table from "./employee/Table";
import "../css/employee.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { PacmanLoader } from "react-spinners";

export function loader() {
    return defer({ tickets: getTickets() })
}

export default function Ticket() {
    const dataPromise = useLoaderData()
    const [rowsPerPage, setRowsPerPage] = useState('')

    const columns = [
        {
            Header: 'ID',
            accessor: 'ticketId',
        },
        {
            Header: 'Agent',
            accessor: 'agent',
        },
        {
            Header: 'Created Date',
            accessor: 'created',
        },
        {
            Header: 'Last Replayed',
            accessor: 'lastly',
        },
        {
            Header: 'Priority',
            accessor: 'priority',
        },
        {
            Header: 'Status',
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

    function handleRowsPerPageChange(event) {
        setRowsPerPage(event.target.value)
    }

    function renderTickets(tickets) {
        const ticketElements = <Table data={tickets} columns={columns} />

        return (
            <div className="container-div">
                <div className="child-container">
                    <div className="container-header">
                        <h2>Tickets</h2>
                        <h4>Dashboard / Tickets</h4>

                    </div>
                    <div className="btn-new">
                        <p>+ Add Ticket</p>
                    </div>
                </div>
                <div className="monthly-status">
                <div className="monthly-status-child">
                    <div className="monthly-sub-child">
                        <p>New Tickets</p>
                        <p className="monthly-count">+10%</p>
                    </div>
                    <p>100</p>
                    <div class="status-bar">
                        <div class="status-fill"></div>
                    </div>
                </div>
                <div className="monthly-status-child">
                    <div className="monthly-sub-child">
                        <p>Solved Tickets</p>
                        <p className="monthly-count">+10%</p>
                    </div>
                    <p>100</p>
                    <div class="status-bar">
                        <div class="status-fill"></div>
                    </div>
                </div>
                <div className="monthly-status-child">
                    <div className="monthly-sub-child">
                        <p>Pending Tickets</p>
                        <p className="monthly-count">+10%</p>
                    </div>
                    <p>100</p>
                    <div class="status-bar">
                        <div class="status-fill"></div>
                    </div>
                </div>
                <div className="monthly-status-child">
                    <div className="monthly-sub-child">
                        <p>Open Tickets</p>
                        <p className="monthly-count">+10%</p>
                    </div>
                    <p>100</p>
                    <div class="status-bar">
                        <div class="status-fill"></div>
                    </div>
                </div>
            </div>


                {ticketElements}
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
            <Await resolve={dataPromise.tickets}>
                {renderTickets}
            </Await>
        </React.Suspense>

    )
}