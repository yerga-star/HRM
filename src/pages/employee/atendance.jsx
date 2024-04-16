import React, { useState } from "react"
import Select from "react-select";
import "../../css/employee.css"
import {
    useLoaderData,
    defer,
    Await
} from "react-router-dom"
import { getAtendance } from "../../src/api"
import { PacmanLoader } from "react-spinners";
import Table from './Table';

export function loader() {
    return defer({ atendances: getAtendance() })
}

export default function Atendance() {
    const dataPromise = useLoaderData()
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')
    const [empName, setEmpName] = useState('')
    const [rowsPerPage, setRowsPerPage] = useState(10)
    const monthOptions = [
        { value: "Jan", label: "Jan" },
        { value: "Feb", label: "Feb" },
        { value: "Mar", label: "Mar" },
        { value: "Apr", label: "Apr" },
        { value: "May", label: "May" },
        { value: "Jun", label: "Jun" },
        { value: "Aug", label: "Aug" },
        { value: "Sep", label: "Sep" },
        { value: "Nov", label: "Nov" },
        { value: "Oct", label: "Oct" },
        { value: "Dec", label: "Dec" },

    ];
    const yearOptions = [
        { value: "2022", label: "2022" },
        { value: "2023", label: "2023" },
        { value: "2024", label: "2024" },
        { value: "2025", label: "2025" },
        { value: "2026", label: "2026" },
        { value: "2027", label: "2027" },
        { value: "2028", label: "2028" },
        { value: "2029", label: "2029" }
    ];

    const columns = [
        {
            Header: 'Employee',
            accessor: 'employee',
            Cell: ({ cell }) => (
                <div style={{ paddingLeft: '8px' }}>{cell.value}</div>
              ),
        },
        {
          accessor: '1',
          Header: '1',
        },
        {
          accessor: '2',
          Header: '2',
        },
        {
          accessor: '3',
          Header: '3',
        },
        {
          accessor: '4',
          Header: '4',
        },
        {
          accessor: '5',
          Header: '5',
        },
        {
          accessor: '6',
          Header: '6',
        },
        {
          accessor: '7',
          Header: '7',
        },
        {
          accessor: '8',
          Header: '8',
        },
        {
          accessor: '9',
          Header: '9',
        },
        {
          accessor: '10',
          Header: '10',
        },
        {
          accessor: '11',
          Header: '11',
        },
        {
          accessor: '12',
          Header: '12',
        },
        {
          accessor: '13',
          Header: '13',
        },
        {
          accessor: '14',
          Header: '14',
        },
        {
          accessor: '15',
          Header: '15',
        },
        {
          accessor: '16',
          Header: '16',
        },
        {
          accessor: '17',
          Header: '17',
        },
        {
          accessor: '18',
          Header: '18',
        },
        {
          accessor: '19',
          Header: '19',
        },
        {
          accessor: '20',
          Header: '20',
        },
        {
          accessor: '21',
          Header: '21',
        },
        {
          accessor: '22',
          Header: '22',
        },
        {
          accessor: '23',
          Header: '23',
        },
        {
          accessor: '24',
          Header: '24',
        },
        {
          accessor: '25',
          Header: '25',
        },
        {
          accessor: '26',
          Header: '26',
        },
        {
          accessor: '27',
          Header: '27',
        },
        {
          accessor: '28',
          Header: '28',
        },
        {
          accessor: '29',
          Header: '29',
        },
        {
          accessor: '30',
          Header: '30',
        },
      ];
      
    const handleMonthChange = (selectedOption) => {
        setMonth(selectedOption);
    };

    const handleYearChange = (selectedOption) => {
        setYear(selectedOption);
    };
    function handleChange(event) {
        setEmpName(event.target.value)
    }
    function handleRowsPerPageChange(event) {
        setRowsPerPage(event.target.value)
    }
    function renderAtendance(atendances) {
        const atendanceElements = <Table data={atendances} columns={columns} />
        return (

            <div className="container-div">
                <div className="child-container">
                    <div className="container-header">
                        <h2>Atendance</h2>
                        <h4>Dashboard / Atendance</h4>
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
                        name="month"
                        options={monthOptions}
                        className="react-select-container atendance-select"
                        classNamePrefix="react-select"
                        value={month}
                        onChange={handleMonthChange}
                        placeholder="Select an option"
                    />
                    <Select
                        name="leaveStatus"
                        options={yearOptions}
                        className="react-select-container atendance-select"
                        classNamePrefix="react-select"
                        value={year}
                        onChange={handleYearChange}
                        placeholder="Select an option"
                    />

                    <button
                        name="search">Search
                    </button>
                </div>
                <div className="atendance">
                    {atendanceElements} 
                </div>
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
            <Await resolve={dataPromise.atendances}>
                {renderAtendance}
            </Await>
        </React.Suspense>
    )
};