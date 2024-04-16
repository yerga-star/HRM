import React, {useState} from "react";
import {
    defer,
    Await,
    useLoaderData
} from "react-router-dom"
import Table from '../employee/Table';
import "../../css/employee.css"
import { getDeduction } from "../../src/api";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { PacmanLoader } from "react-spinners";

export function loader(){
    return defer({deductions: getDeduction()})
}

export default function OverT(){
    const dataPromise = useLoaderData()

    const [rowsPerPage, setRowsPerPage] = useState('')
    
    const columns = [
        {
            Header: 'Name',
            accessor: 'name',
        },
        {
            Header: 'Category',
            accessor: 'category',
        }
        ,
        {
            Header: 'Unit',
            accessor: 'unit',
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

    function renderDeduction(deductions){
        const deductionElement = <Table data={deductions} columns={columns} />
        
        return (
        <div className="container-div">
                <div className="child-container">
                   
                    <div className="btn-new">
                        <p>+ Add Deduction</p>
                    </div>
                </div>
                
                {deductionElement}
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
            <Await resolve={dataPromise.deductions}>
                {renderDeduction}
            </Await>
        </React.Suspense>
     )
}