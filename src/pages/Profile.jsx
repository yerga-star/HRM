import React from "react";
import {NavLink, Outlet} from "react-router-dom"
import { IMAGE_BASE_URL } from "../src/config";

export default function Profile() {
    const activeStyles = {
        borderBottom : "2px solid chocolate",
        color: "#161616"
    }
    const image_source = `${IMAGE_BASE_URL}/admin.jpg`
    console.log(image_source)
    return (
        <>
            <div className="container-div">
                <div className="child-container">
                    <div className="container-header">
                        <h2>Employee Profile</h2>
                        <h4>Dashboard / Profile</h4>
                    </div>
                </div>
                <div className="emp-profile child-container ">
                    <div className="child-container profile-child">
                        <div className="image-container">
                            <img src={image_source} />
                        </div>
                        <div className="main-detail">
                            <p>Yerga Dagnaw</p>
                            <p className="light-p">Auxilury Team</p>
                            <p className="light-p">System Admin</p>
                            <p className="id-p">Employee ID : boa/089/23</p>
                            <p className="light-p">Date of Join : 1st Jan 2023</p>
                            <button className="edit-btn">Edit</button>
                        </div>
                    </div>
                    <div className="profile-child detail-d">
                        <div className="id-p">
                        <p >Email:</p>
                        <p >Phone:</p>
                        <p >Date of birth:</p>
                        <p >Address:</p>
                        <p >Gender:</p>
                        <p >Manager:</p>
                        </div>
                        <div className="id-p lighted">
                            <p>  yerga@gmail.com</p>
                            <p> 987654321</p>
                            <p>  08th Aug 1997</p>
                            <p>  Bole sub city woreda 04</p>
                            <p>  Male</p>
                            <p>  Wudneh Alebgn</p>
                        </div>
                       
                    </div>

                </div>
                <div className="profile-nav">
                    <NavLink to="." 
                    end
                    style={({ isActive }) => isActive ? activeStyles : null}><p>Profile</p></NavLink>
                    <NavLink to="projects" style={({ isActive }) => isActive ? activeStyles : null}><p>Projects</p></NavLink>
                    <NavLink to="assets" style={({ isActive }) => isActive ? activeStyles : null}><p>Assets</p></NavLink>
                </div>
                <Outlet />
            </div>

        </>
    )
}