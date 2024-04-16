import React, { useState } from "react";
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faBell } from "@fortawesome/free-solid-svg-icons";
import { IMAGE_BASE_URL } from "../src/config";


export default function Header() {

    const [keyWord, setKeyWord] = useState('')
    const messageCount = 3;
    const notificationCount = 5;
    const image = `${IMAGE_BASE_URL}`

    function handleChange(event) {
        setKeyWord(event.target.value)
    }

    return (
        <header>
            <div className="header-left">
                <Link className="site-logo" to="/">
                    <img
                        src={`${image}/logo.svg`}
                        alt="My Logo"
                        className="logo-img"
                    />
                    <h3>Addis Abeba City HRM</h3>
                </Link>
            </div>
            <div className="header-right">
                <div className="header-box">
                    <input
                        name="keyWord"
                        type="text"
                        placeholder="Search here"
                        value={keyWord}
                        onChange={handleChange}
                    />
                </div>
                <div className="header-icons">
                    <div className="header-icon">
                        <span>{messageCount}</span>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <div className="header-icon">
                        <span>{notificationCount}</span>
                        <FontAwesomeIcon icon={faBell} />
                    </div>
                </div>
                <div className="admin-avatar">
                    <img
                        src={`${image}/admin.jpg`}
                        alt="Admin Avatar"
                        className="admin-avatar-img"
                    />
                </div>
            </div>
        </header>
    );
}