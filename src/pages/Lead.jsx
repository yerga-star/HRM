import React, {useState} from "react";
import { Await, defer, useLoaderData } from "react-router-dom";
import { getLeads } from "../src/api";
import Table from "./employee/Table";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { PacmanLoader } from "react-spinners";

export function loader(){
   return defer({leads : getLeads()})
}

export default function Lead(){
    const dataPromise = useLoaderData()
    const [rowsPerPage, setRowsPerPage] = useState(10)
    const columns = [
        {
          Header: 'Lead Name',
          accessor: 'leadName',
        },
        {
          Header: 'Email',
          accessor: 'email',
        },
        {
          Header: 'Mobile',
          accessor: 'phone',
        },
        {
          Header: 'Project',
          accessor: 'project',
        },
        {
          Header: 'Asssigned Staff',
          accessor: 'team',
        },
        {
            Header: 'Created at',
            accessor: 'created',
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

    function renderLeads(leads){
        const leadElements = <Table data={leads} columns={columns} />

        return(
            <div className="container-div">
          <div className="child-container">
            <div className="container-header">
              <h2>Leads</h2>
              <h4>Dashboard / Leads</h4>

            </div>
            <div className="btn-new">
              <p>+ Add Lead</p>
            </div>
          
          </div>
          {leadElements}
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

    return(
        <React.Suspense fallback={
            <div className="spinner">
                <PacmanLoader color={"#e98d24"} size={25} />
            </div>}>
            <Await resolve={dataPromise.leads}>
                {renderLeads}
            </Await>
        </React.Suspense>
    )
}