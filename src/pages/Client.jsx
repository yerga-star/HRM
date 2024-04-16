import React, { useState } from "react"
import {
  useLoaderData,
  defer,
  Await
} from "react-router-dom"
import { getClients } from "../src/api"
import Table from './employee/Table';
import "../css/employee.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { PacmanLoader } from "react-spinners";

export function loader() {
  return defer({ clients: getClients() })
}

export default function Client() {

  const dataPromise = useLoaderData()
  const [emp_name, setEmp_name] = useState('')
  const [emp_id, setEmp_id] = useState('')
  const [designation, setDesignataion] = useState('')
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const columns = [
    {
      Header: 'Name',
      accessor: 'name',
    },
    {
      Header: 'Client ID',
      accessor: 'cid',
    },
    {
      Header: 'Contact Person',
      accessor: 'contact_person',
    },
    {
      Header: 'Email',
      accessor: 'email',
    },
    {
      Header: 'Phone',
      accessor: 'phone',
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

  const stateSetterMap = {
    emp_id: setEmp_id,
    emp_name: setEmp_name,
    designation: setDesignataion,
  };

  function handleEdit(id) {
    console.log(id)
  }
  function handleRowsPerPageChange(event) {
    setRowsPerPage(event.target.value)
  }
  function handleChange(event) {
    const { name, value } = event.target;
    const setState = stateSetterMap[name];
    if (setState) {
      setState(value);
    }

  }

  function renderClinets(clients) {
    console.log(clients)
    const clientElements = <Table data={clients} columns={columns} />

    return (
      <>
        <div className="container-div">
          <div className="child-container">
            <div className="container-header">
              <h2>Client</h2>
              <h4>Dashboard / Clinet</h4>

            </div>
            <div className="btn-new">
              <p>+ Add Client</p>
            </div>
          </div>
          <div className="search-input">
            <input
              name="emp_id"
              type="text"
              placeholder="Client ID"
              value={emp_id}
              onChange={handleChange}

            />
            <input
              name="emp_name"
              type="text"
              placeholder="Clinet Name"
              value={emp_name}
              onChange={handleChange}
            />
            <input
              name="designation"
              type="text"
              placeholder="Company"
              value={designation}
              onChange={handleChange}
            />
            <button
              name="search">Search
            </button>
          </div>
          <div>
          </div>
          {clientElements}
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

      </>
    )
  }
  return (
    <React.Suspense fallback={
      <div className="spinner">
        <PacmanLoader color={"#e98d24"} size={25} />
      </div>}>
      <Await resolve={dataPromise.clients}>
        {renderClinets}
      </Await>
    </React.Suspense>
  )
};