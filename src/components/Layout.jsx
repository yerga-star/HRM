import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout() {
    return (
        <div className="layout-container">
            <div className="header-container">
                <Header />
            </div>
            <div className="body-container">
                <Sidebar />
                <main>
                    <Outlet />              
                </main>
            </div>
        </div>
    )
}
