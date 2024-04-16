import React from "react";
import { NavLink, Outlet } from "react-router-dom";


export default function PayItem() {

    const activeStyles = {
        borderBottom : "2px solid chocolate",
        color: "#161616"
    }

    return (
        <div className="container-div">
            <div className="child-container">
                <div className="container-header">
                    <h2>Payroll Items</h2>
                    <h4>Dashboard / Payroll Items</h4>
                </div>

            </div> 
            <div className="pay-sub-route">
            <NavLink
                        to="/payroll/items"
                        end
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                         Additions 
                    </NavLink>
                    <NavLink
                        to="/payroll/items/overtime"
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                         Overtime 
                    </NavLink>
                    <NavLink
                        to="/payroll/items/deduction"
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                         Deductions 
                    </NavLink>
            
            </div>
            <hr/>
            <Outlet />
        </div>
    )
}