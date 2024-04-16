import React, { useState } from "react"
import {
  useLoaderData,
  defer,
  Await
} from "react-router-dom"
import { getInvoices } from "../src/api"
import Table from './employee/Table';
import "../css/employee.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { PacmanLoader } from "react-spinners";

export function loader() {
  return defer({ invoices: getInvoices() })
}

export default function Invoice() {

  const dataPromise = useLoaderData()
  const [emp_name, setEmp_name] = useState('')
  const [fromDate, setEmp_id] = useState('')
  const [toDate, setDesignataion] = useState('')
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const columns = [
   
    {
      Header: 'Invoice number',
      accessor: 'number',
    },
    {
      Header: 'Client',
      accessor: 'client',
    },
    {
      Header: 'Created date',
      accessor: 'created',
    },
    {
      Header: 'Due date',
      accessor: 'duedate',
    },
    {
        Header: 'Amount',
        accessor: 'amount',
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
    fromDate: setEmp_id,
    emp_name: setEmp_name,
    toDate: setDesignataion,
  };

  function handleEdit(id) {
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

  function renderClinets(invoices) {
    console.log(invoices)
    const clientElements = <Table data={invoices} columns={columns} />

    return (
      <>
        <div className="container-div">
          <div className="child-container">
            <div className="container-header">
              <h2>Invoice</h2>
              <h4>Dashboard / Invoice</h4>

            </div>
            <div className="btn-new">
              <p>+ Add Invoice</p>
            </div>
          </div>
          <div className="search-input">
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
           
            <input
              name="emp_name"
              type="text"
              placeholder="Clinet Name"
              value={emp_name}
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
      <Await resolve={dataPromise.invoices}>
        {renderClinets}
      </Await>
    </React.Suspense>
  )
};