import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation } from 'react-router-dom'
import {
    faTasks,
    faUsd,
    faUsers,
    faProjectDiagram,
    faEllipsisVertical

} from '@fortawesome/free-solid-svg-icons';
import "../css/Main.css";

export default function Home() {
    return (
        <div className="home-container">
            <div>
                <h2>Welcome Admin!</h2>
                <h3 className="current-path">Dashboard</h3>
            </div>
            <div className="counter-div">
                <div className="counter-div-child">
                    <div className="counter-icon">
                        <FontAwesomeIcon icon={faTasks} />
                    </div>
                    <div>
                        <h2>10</h2>
                        <h3>Projects</h3>
                    </div>
                </div>
                <div className="counter-div-child">
                    <div className="counter-icon">
                        <FontAwesomeIcon icon={faProjectDiagram} />
                    </div>
                    <div>
                        <h2>20</h2>
                        <h3>Tasks</h3>
                    </div>
                </div>
                <div className="counter-div-child">
                    <div className="counter-icon">
                        <FontAwesomeIcon icon={faUsd} />
                    </div>
                    <div>
                        <h2>30</h2>
                        <h3>Clients</h3>
                    </div>
                </div>
                <div className="counter-div-child">
                    <div className="counter-icon">
                        <FontAwesomeIcon icon={faUsers} />
                    </div>
                    <div>
                        <h2>40</h2>
                        <h3>Employees</h3>
                    </div>
                </div>
            </div>
            <div className="counter-div">
                <div className="graph-container">
                    <h3>Total Revenue</h3>
                    <img
                        src="../assets/images/chartbar-right.png"
                        width={"480px"}
                        height={"250px"}
                        alt="left chart" />
                </div>
                <div className="graph-container">
                    <h3>Sales Overview</h3>
                    <img
                        src="../assets/images/chartbar-left.png"
                        width={"480px"}
                        height={"250px"}
                        alt="right chart" />
                </div>
            </div>
            <div className="monthly-status">
                <div className="monthly-status-child">
                    <div className="monthly-sub-child">
                        <p>New Employees</p>
                        <p className="monthly-count">+10%</p>
                    </div>
                    <p>100</p>
                    <div class="status-bar">
                        <div class="status-fill"></div>
                    </div>
                    <p className="monthly-p">Overall Employees 218</p>
                </div>
                <div className="monthly-status-child">
                    <div className="monthly-sub-child">
                        <p>Earnings</p>
                        <p className="monthly-count">+10%</p>
                    </div>
                    <p>100</p>
                    <div class="status-bar">
                        <div class="status-fill"></div>
                    </div>
                    <p className="monthly-p">Previous Month $1,15,852</p>
                </div>
                <div className="monthly-status-child">
                    <div className="monthly-sub-child">
                        <p>Expenses</p>
                        <p className="monthly-count">+10%</p>
                    </div>
                    <p>100</p>
                    <div class="status-bar">
                        <div class="status-fill"></div>
                    </div>
                    <p className="monthly-p">Previous Month $1,15,852</p>
                </div>
                <div className="monthly-status-child">
                    <div className="monthly-sub-child">
                        <p>Profit</p>
                        <p className="monthly-count">+10%</p>
                    </div>
                    <p>100</p>
                    <div class="status-bar">
                        <div class="status-fill"></div>
                    </div>
                    <p className="monthly-p">Previous Month $1,15,852</p>
                </div>
            </div>
            <div className="counter-div">
                <div className="counter-div-child stat">
                    <p>Stastics</p>
                    <div className="stat-state">
                        <div className="status-holder">
                            <p className="stat-p">Today Leave</p>
                            <p className="stat-p-ratio">10/20</p>
                        </div>
                        <div class="status-bar">
                            <div class="status-fill"></div>
                        </div>
                    </div>
                    <div className="stat-state">
                        <div className="status-holder">
                            <p className="stat-p">Pending Invoice</p>
                            <p className="stat-p-ratio">10/20</p>
                        </div>
                        <div class="status-bar">
                            <div class="status-fill yellow" ></div>
                        </div>
                    </div>
                    <div className="stat-state">
                        <div className="status-holder">
                            <p className="stat-p">Complted Projects</p>
                            <p className="stat-p-ratio">10/20</p>
                        </div>
                        <div class="status-bar">
                            <div class="status-fill green"></div>
                        </div>
                    </div>
                    <div className="stat-state">
                        <div className="status-holder">
                            <p className="stat-p">Open Tickets</p>
                            <p className="stat-p-ratio">10/20</p>
                        </div>
                        <div class="status-bar">
                            <div class="status-fill pink"></div>
                        </div>
                    </div>
                    <div className="stat-state">
                        <div className="status-holder">
                            <p className="stat-p">Closed Tickets</p>
                            <p className="stat-p-ratio">10/20</p>
                        </div>
                        <div class="status-bar">
                            <div class="status-fill blue"></div>
                        </div>
                    </div>
                </div>
                <div className="counter-div-child-middle">
                    <div className="task-stat-div">
                        <p>Task Stastics</p>
                        <div className="tasks-list">
                            <div className="task-li">
                                <div className="color-dot-completed">
                                    <div className="dot">
                                    </div>
                                </div>
                                <p>Completed Tasks</p>
                                <p className="task-count">166</p>
                            </div>

                            <div className="task-li">
                                <div className="color-dot-inprog">
                                    <div className="dot">
                                    </div>
                                </div>
                                <p>Inprogress Tasks</p>
                                <p className="task-count">19</p>
                            </div>

                            <div className="task-li">
                                <div className="color-dot-hold">
                                    <div className="dot">
                                    </div>
                                </div>
                                <p>On Hold Tasks</p>
                                <p className="task-count">53</p>
                            </div>

                            <div className="task-li">
                                <div className="color-dot-review">
                                    <div className="dot">
                                    </div>
                                </div>
                                <p>Review Tasks</p>
                                <p className="task-count">29</p>
                            </div>

                        </div>
                    </div>


                </div>
                <div className="absent-div">
                    <div className="absent-div-header">
                        <p>Today Absenet</p>
                        <div className="absent-count">
                            5
                        </div>
                    </div>

                    <div className="absent-list-container">
                        <div className="absent-info">
                            <div className="absent-avater-name">
                                <img
                                    src="../assets/images/admin.jpg"
                                    alt="Admin Avatar"
                                    className="employee-avatar-img"
                                />
                                <p className="monthly-p">Yerga Dagnaw</p>
                            </div>
                            <div className="absent-leave-stat">
                                <div className="absent-status">
                                    <p className="date-of-leave">Sep 30, 2023</p>
                                    <p className="leave-date">Leave Date</p>
                                </div>
                                <p className="leave-status-pending">Pending</p>
                            </div>
                        </div>
                        <div className="absent-info">
                            <div className="absent-avater-name">
                                <img
                                    src="../assets/images/admin.jpg"
                                    alt="Admin Avatar"
                                    className="employee-avatar-img"
                                />
                                <p className="monthly-p">Mekonen Gebeye</p>
                            </div>
                            <div className="absent-leave-stat">
                                <div className="absent-status">
                                    <p className="date-of-leave">Sep 30, 2023</p>
                                    <p className="leave-date">Leave Date</p>
                                </div>
                                <p className="leave-status-approved">Approved</p>
                            </div>
                        </div>
                    </div>
                    <button className="btn-more">Load More</button>
                </div>
            </div>
            <div className="invoice-payment">
                <div className="invoice">
                    <p className="invoice-p">Invoices</p>
                    <div className="table-container">
                        <table className="table-invoice">
                            <tr>
                                <th>Invoice ID</th>
                                <th>Client</th>
                                <th>Due Date</th>
                                <th>Totoal</th>
                                <th>Status</th>
                            </tr>
                            <tr>
                                <td>#INV-0001</td>
                                <td>Global </td>
                                <td>11 Mar 2023</td>
                                <td>$380</td>
                                <td className="status-payed">Paid</td>
                            </tr>
                            <tr>
                                <td>#INV-0001</td>
                                <td>Global Technologies</td>
                                <td>11 Mar 2023</td>
                                <td>$380</td>
                                <td className="status-partial">Partially Paid</td>
                            </tr> <tr>
                                <td>#INV-0001</td>
                                <td>Global Technologies</td>
                                <td>11 Mar 2023</td>
                                <td>$380</td>
                                <td className="status-unpaid">Unpaid</td>
                            </tr>
                        </table>
                    </div>
                    <Link to="/invoices">
                    <p className="table-btn-more">View All invoices</p>
                    </Link>
                </div>
                <div className="invoice">
                    <p className="invoice-p">Payments</p>
                    <div className="table-container">
                        <table className="table-invoice">
                            <tr>
                                <th>Invoice ID</th>
                                <th>Client</th>
                                <th>Payment Type</th>
                                <th>Paid Date</th>
                                <th>Paid Amount</th>
                            </tr>
                            <tr>
                                <td>#INV-0001</td>
                                <td>Global Technologies</td>
                                <td>Paypal</td>
                                <td>11 Mar 2023</td>
                                <td>$380</td>
                            </tr>
                            <tr>
                                <td>#INV-0001</td>
                                <td>Global Technologies</td>
                                <td>Paypal</td>
                                <td>11 Mar 2023</td>
                                <td>$380</td>
                            </tr>
                            <tr>
                                <td>#INV-0001</td>
                                <td>Global TechnologiesGlobal Technologies</td>
                                <td>Paypal</td>
                                <td>11 Mar 2023</td>
                                <td>$380</td>
                            </tr>
                        </table>
                    </div>

                    <p className="table-btn-more">View all Payments</p>
                </div>
            </div>
            <div className="invoice-payment">
                <div className="invoice">
                    <p className="invoice-p">Clients</p>
                    <div className="table-container">
                        <table className="table-invoice">
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                            <tr>
                                <td>
                                    <img
                                        src="../assets/images/admin.jpg"
                                        alt="Admin Avatar"
                                        className="employee-avatar-img" />
                                    Barry Cuda CEO</td>
                                <td>barrycuda@example.com</td>
                                <td>Active</td>
                                <td><button class="edit-button">
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button></td>
                            </tr>
                            <tr>
                                <td><img
                                    src="../assets/images/admin.jpg"
                                    alt="Admin Avatar"
                                    className="employee-avatar-img" />Barry Cuda CEO</td>
                                <td>barrycuda@example.com</td>
                                <td>Active</td>
                                <td><button class="edit-button">
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button></td>
                            </tr>
                            <tr>
                                <td><img
                                    src="../assets/images/admin.jpg"
                                    alt="Admin Avatar"
                                    className="employee-avatar-img" />Barry Cuda CEO</td>
                                <td>barrycuda@example.com</td>
                                <td>Active</td>
                                <td><button class="edit-button">
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button></td>
                            </tr>
                            <tr>
                                <td><img
                                    src="../assets/images/admin.jpg"
                                    alt="Admin Avatar"
                                    className="employee-avatar-img" />Barry Cuda CEO</td>
                                <td>barrycuda@example.com</td>
                                <td>Active</td>
                                <td><button class="edit-button">
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button></td>
                            </tr>
                        </table>
                    </div>
                    <Link to="/client">
                    <p className="table-btn-more">View all Clients</p>
                    </Link>
                </div>
                <div className="invoice">
                    <p className="invoice-p">Recent Projects</p>
                    <div className="table-container">
                        <table className="table-invoice">
                            <tr>
                                <th>Project Name</th>
                                <th>Progress</th>
                                <th>Action</th>
                            </tr>
                            <tr>
                                <td className="project">
                                    <p>Office Management</p>
                                    <p><b>1</b> open tasks, <b>9</b> tasks completed</p>
                                </td>
                                <td><div class="status-bar">
                                    <div class="status-fill"></div>
                                </div></td>
                                <td><button class="edit-button">
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button></td>
                            </tr>
                            <tr>
                                <td className="project">
                                    <p>Office Management</p>
                                    <p><b>1</b> open tasks, <b>9</b> tasks completed</p>
                                </td>
                                <td><div class="status-bar">
                                    <div class="status-fill"></div>
                                </div></td>
                                <td><button class="edit-button">
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button></td>
                            </tr>
                            <tr>
                                <td className="project">
                                    <p>Office Management</p>
                                    <p><b>1</b> open tasks, <b>9</b> tasks completed</p>
                                </td>
                                <td><div class="status-bar">
                                    <div class="status-fill"></div>
                                </div></td>
                                <td><button class="edit-button">
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button></td>
                            </tr>

                        </table>
                    </div>
                    <Link to="/project">
                    <p className="table-btn-more">View all Projects</p>
                    </Link>
                </div>
            </div>

        </div>
    )
};