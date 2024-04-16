import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../css/Sidebar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus,
    faBars,
    faHome,
    faChartBar,
    faUsers,
    faFileAlt,
    faCog,
    faBuilding,
    faTasks,
    faUserFriends,
    faBriefcase,
    faClipboard,
    faTicketAlt,
    faUsersCog,
    faHandshake,
    faMoneyBillWave,
    faList,
    faFileInvoice,
    faUserShield,
    faTrophy,
    faTrain,
    faStar,
    faUserCheck,
    faUserTimes,
    faCogs,
    faUser,
    faSignInAlt,
    faAngleDown, // Icon for collapsing submenus
    faAngleUp,
} from '@fortawesome/free-solid-svg-icons';

export default function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);
    const [userCollapsed, setUserCollapsed] = useState(false);
    const [subMenuStates, setSubMenuStates] = useState({
        payroll: true,
        employees: true,
       
    });

    const location = useLocation();
    const isMenuItemSelected = (path) => {
        return location.pathname === path;
      };

    const handleMouseEnter = () => {
        if (userCollapsed) {
            setCollapsed(false);
          }
      };
    
      const handleMouseLeave = () => {
        if (userCollapsed) {
            setCollapsed(true);
          }
      };
   
    const toggleSubMenu = (submenuKey) => {
        setSubMenuStates((prevState) => ({
            ...prevState,
            [submenuKey]: !prevState[submenuKey],
        }));
    };

    // Toggle function to expand/collapse the sidebar
    const toggleSidebar = () => {
        if(collapsed){
        setCollapsed(!collapsed);
        setUserCollapsed(false);
        }
        else{
            setCollapsed(!collapsed)
            setUserCollapsed(!userCollapsed)
        }
    };


    return (
        <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`} onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
            <button className="toggle-button" onClick={toggleSidebar}>
                {collapsed ? (
                    <>
                        <FontAwesomeIcon icon={faPlus} />
                    </>
                ) : (
                    <>
                        <FontAwesomeIcon icon={faBars} />
                    </>
                )}
            </button>

            <ul className="menu">
                <li className={`menu-li ${location.pathname === '/' ? 'selected' : ''}`}>
                    <Link to="/">
                        <FontAwesomeIcon icon={faChartBar} />
                        <span>Dashboard</span>
                    </Link>

                </li>
                <li className="menu-li"  onClick={() => toggleSubMenu('employees')}>

                    <FontAwesomeIcon icon={faUsers} />
                    <span>Employees</span>
                    <FontAwesomeIcon className="fa-dropdowns" icon={subMenuStates.employees ? faAngleUp : faAngleDown} />
                    <ul className={`sub-menu ${subMenuStates.employees ? 'collapsed' : ''}`}>
                        <Link to="/employees/all"  onClick={(e) => {e.stopPropagation()}}>
                            <li className={`${isMenuItemSelected('/employees/all') ? 'selected' : '' }`}>
                                <span>All employees</span>
                            </li>
                        </Link>
                        <Link to="/employees/leave" onClick={(e) => {e.stopPropagation()}}>
                            <li className={`${isMenuItemSelected('/employees/leave') ? 'selected' : '' }`}>
                                <span>Leaves</span>
                            </li>
                        </Link>
                        <Link to="/employees/atendance" onClick={(e) => {e.stopPropagation()}}>
                            <li className={`${isMenuItemSelected('/employees/atendance') ? 'selected' : '' }`}>
                                <span>Atendance</span>
                            </li>
                        </Link>
                        <Link to="/employees/departments" onClick={(e) => {e.stopPropagation()}}>
                            <li className={`${isMenuItemSelected('/employees/departments') ? 'selected' : '' }`}>
                                <span>Departments</span>
                            </li>
                        </Link>
                        <Link to="/employees/designation" onClick={(e) => {e.stopPropagation()}}>
                            <li className={`${isMenuItemSelected('/employees/designation') ? 'selected' : '' }`}>
                                <span>Designation</span>
                            </li>
                        </Link>
                        <Link to="/employees/overtime" onClick={(e) => {e.stopPropagation()}}>
                            <li className={`${isMenuItemSelected('/employees/overtime') ? 'selected' : '' }`}>
                                <span>Overtime</span>
                            </li>
                        </Link>
                    </ul>
                </li>
                <li className={`menu-li ${location.pathname === '/client' ? 'selected' : ''}`}>
                    <Link to="/client">
                        <FontAwesomeIcon icon={faFileAlt} />
                        <span className={collapsed ? 'hidden' : ''}>Clients</span>
                    </Link>
                </li>
                <li className={`menu-li ${location.pathname === '/project' ? 'selected' : ''}`}>
                    <Link to="/project">
                        <FontAwesomeIcon icon={faBriefcase} />
                        <span className={collapsed ? 'hidden' : ''}>Projects</span>
                    </Link>
                </li>
                <li className={`menu-li ${location.pathname === '/lead' ? 'selected' : ''}`}>
                    <Link to="/lead">
                        <FontAwesomeIcon icon={faClipboard} />
                        <span className={collapsed ? 'hidden' : ''}>Leads</span>
                    </Link>
                </li>
                <li className={`menu-li ${location.pathname === '/ticket' ? 'selected' : ''}`}>
                    <Link to="/ticket">
                        <FontAwesomeIcon icon={faTicketAlt} />
                        <span className={collapsed ? 'hidden' : ''}>Tickets</span>
                    </Link>
                </li>
               
                <li className="menu-li"  onClick={() => toggleSubMenu('payroll')}>

                    <FontAwesomeIcon icon={faList} />
                    <span>Payroll</span>
                    <FontAwesomeIcon className="fa-dropdowns" icon={subMenuStates.payroll ? faAngleUp : faAngleDown} />
                    <ul className={`sub-menu ${subMenuStates.payroll ? 'collapsed' : ''}`}>
                        <Link to="/payroll/salary"  onClick={(e) => {e.stopPropagation()}}>
                            <li className={`${isMenuItemSelected('/payroll/salary') ? 'selected' : '' }`}>
                                <span>Employee Salery</span>
                            </li>
                        </Link>
                        <Link to="/payroll/payslip" onClick={(e) => {e.stopPropagation()}}>
                            <li className={`${isMenuItemSelected('/payroll/payslip') ? 'selected' : '' }`}>
                                <span>Payslip</span>
                            </li>
                        </Link>
                        <Link to="/payroll/items" onClick={(e) => {e.stopPropagation()}}>
                            <li className={`${isMenuItemSelected('/payroll/items') ? 'selected' : '' }`}>
                                <span>Payroll items</span>
                            </li>
                        </Link>                        
                    </ul>
                </li>
                <li className={`menu-li ${location.pathname === '/invoices' ? 'selected' : ''}`}>
                    <Link to="/invoices">
                        <FontAwesomeIcon icon={faTicketAlt} />
                        <span className={collapsed ? 'hidden' : ''}>Invoices</span>
                    </Link>
                </li>
                <li className={`menu-li ${location.pathname === '/profile' ? 'selected' : ''}`}>
                    <Link to="/profile">
                        <FontAwesomeIcon icon={faUser} />
                        <span className={collapsed ? 'hidden' : ''}>Profile</span>
                    </Link>
                </li>
                <li className={`menu-li ${location.pathname === '/path' ? 'selected' : ''}`}>
                    <Link to="/underConstruction">
                        <FontAwesomeIcon icon={faFileAlt} />
                        <span className={collapsed ? 'hidden' : ''}>Reports</span>
                    </Link>
                </li>
                <li className={`menu-li ${location.pathname === '/path' ? 'selected' : ''}`}>
                    <Link to="/underConstruction">
                        <FontAwesomeIcon icon={faUserShield} />
                        <span className={collapsed ? 'hidden' : ''}>Performance</span>
                    </Link>
                </li>
                <li className={`menu-li ${location.pathname === '/path' ? 'selected' : ''}`}>
                    <Link to="/underConstruction">
                        <FontAwesomeIcon icon={faTrophy} />
                        <span className={collapsed ? 'hidden' : ''}>Goals</span>
                    </Link>
                </li>
                <li className={`menu-li ${location.pathname === '/path' ? 'selected' : ''}`}>
                    <Link to="/underConstruction">
                        <FontAwesomeIcon icon={faTrain} />
                        <span className={collapsed ? 'hidden' : ''}>Training</span>
                    </Link>
                </li>
                <li className={`menu-li ${location.pathname === '/path' ? 'selected' : ''}`}>
                    <Link to="/underConstruction">
                        <FontAwesomeIcon icon={faStar} />
                        <span className={collapsed ? 'hidden' : ''}>Promotion</span>
                    </Link>
                </li>
                <li className={`menu-li ${location.pathname === '/path' ? 'selected' : ''}`}>
                    <Link to="/underConstruction">
                        <FontAwesomeIcon icon={faUserCheck} />
                        <span className={collapsed ? 'hidden' : ''}>Resignation</span>
                    </Link>
                </li>
                <li className={`menu-li ${location.pathname === '/path' ? 'selected' : ''}`}>
                    <Link to="/underConstruction">
                        <FontAwesomeIcon icon={faUserTimes} />
                        <span className={collapsed ? 'hidden' : ''}>Termination</span>
                    </Link>
                </li>
                <li className={`menu-li ${location.pathname === '/path' ? 'selected' : ''}`}>
                    <Link to="/underConstruction">
                        <FontAwesomeIcon icon={faCogs} />
                        <span className={collapsed ? 'hidden' : ''}>Administration</span>
                    </Link>
                </li>
                <li className={`menu-li ${location.pathname === '/path' ? 'selected' : ''}`}>
                    <Link to="/underConstruction">
                        <FontAwesomeIcon icon={faBuilding} />
                        <span className={collapsed ? 'hidden' : ''}>Assets</span>
                    </Link>
                </li>
                <li className={`menu-li ${location.pathname === '/path' ? 'selected' : ''}`}>
                    <Link to="/underConstruction">
                        <FontAwesomeIcon icon={faBriefcase} />
                        <span className={collapsed ? 'hidden' : ''}>Jobs</span>
                    </Link>
                </li>
                <li className={`menu-li ${location.pathname === '/path' ? 'selected' : ''}`}>
                    <Link to="/underConstruction">
                        <FontAwesomeIcon icon={faBriefcase} />
                        <span className={collapsed ? 'hidden' : ''}>Knowledgebase</span>
                    </Link>
                </li>
                <li className={`menu-li ${location.pathname === '/path' ? 'selected' : ''}`}>
                    <Link to="/underConstruction">
                        <FontAwesomeIcon icon={faTasks} />
                        <span className={collapsed ? 'hidden' : ''}>Activities</span>
                    </Link>
                </li>
                <li className={`menu-li ${location.pathname === '/path' ? 'selected' : ''}`}>
                    <Link to="/underConstruction">
                        <FontAwesomeIcon icon={faUser} />
                        <span className={collapsed ? 'hidden' : ''}>Users</span>
                    </Link>
                </li>
                <li className={`menu-li ${location.pathname === '/path' ? 'selected' : ''}`}>
                    <Link to="/underConstruction">
                        <FontAwesomeIcon icon={faCog} />
                        <span className={collapsed ? 'hidden' : ''}>Settings</span>
                    </Link>
                </li>
               
            </ul>
        </aside>
    );
}
