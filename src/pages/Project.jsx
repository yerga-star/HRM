import React, { useState } from "react";
import { getProjects } from "../src/api";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import "../css/Page.css"
import {
    useLoaderData,
    defer,
    Await
} from "react-router-dom"

export function loader() {
    return defer({ projects: getProjects() })
}

export default function Project() {
    const [title, setTitle] = useState('')

    function handleChange(event) {
        setTitle(event.target.value)
    }

    return (
        <div className="container-div">
            <div className="child-container">
                <div className="container-header">
                    <h2>Project</h2>
                    <h4>Dashboard / Project</h4>

                </div>
                <div className="btn-new">
                    <p>+ Create Project</p>
                </div>
            </div>
            <div className="search-input project">
                <input
                    name="title"
                    type="text"
                    placeholder="Project Name"
                    value={title}
                    onChange={handleChange}
                />
                <button
                    name="search">Search
                </button>
            </div>
            <div className="project-container">
                <div className="project-child">
                    <div className="project-sub-child">
                        <p>Office Managment</p>
                        <button className="edit-button" onClick={() => handleEdit(row.original.id)}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </div>
                    <p className="description-p">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a galley of type and scrambled it Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a galley of type and scrambled it...
                    </p>
                    <p className="deadline-p">Deadline:</p>
                    <p className="description-p">
                        17 Apr 2023
                    </p>
                    <p className="deadline-p">Project Leader:</p>
                    <p className="description-p">
                        Yerga Dagnaw
                    </p>
                    <p className="deadline-p">Team:</p>
                    <p className="description-p">
                        Abel Dagnaw
                    </p>
                    <p className="description-p">
                        Hiwot Dagnaw
                    </p>
                    <div className="project-stat-bar">
                        <p className="deadline-p">Progress</p>
                        <p className="deadline-p green-p">70%</p>
                    </div>
                    <div class="status-bar stat-b">
                        <div class="status-fill green"></div>
                    </div>
                </div>
                <div className="project-child">
                    <div className="project-sub-child">
                        <p>Project Managment</p>
                        <button className="edit-button" onClick={() => handleEdit(row.original.id)}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </div>
                    <p className="description-p">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a galley of type and scrambled it Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a galley of type and scrambled it...
                    </p>
                    <p className="deadline-p">Deadline:</p>
                    <p className="description-p">
                        17 Apr 2023
                    </p>
                    <p className="deadline-p">Project Leader:</p>
                    <p className="description-p">
                        Yerga Dagnaw
                    </p>
                    <p className="deadline-p">Team:</p>
                    <p className="description-p">
                        Abel Dagnaw
                    </p>
                    <p className="description-p">
                        Hiwot Dagnaw
                    </p>
                    <div className="project-stat-bar">
                        <p className="deadline-p">Progress</p>
                        <p className="deadline-p green-p">70%</p>
                    </div>
                    <div class="status-bar stat-b">
                        <div class="status-fill green"></div>
                    </div>
                </div>
                <div className="project-child">
                    <div className="project-sub-child">
                        <p>School Managment</p>
                        <button className="edit-button" onClick={() => handleEdit(row.original.id)}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </div>
                    <p className="description-p">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a galley of type and scrambled it Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a galley of type and scrambled it...
                    </p>
                    <p className="deadline-p">Deadline:</p>
                    <p className="description-p">
                        17 Apr 2023
                    </p>
                    <p className="deadline-p">Project Leader:</p>
                    <p className="description-p">
                        Yerga Dagnaw
                    </p>
                    <p className="deadline-p">Team:</p>
                    <p className="description-p">
                        Abel Dagnaw
                    </p>
                    <p className="description-p">
                        Hiwot Dagnaw
                    </p>
                    <div className="project-stat-bar">
                        <p className="deadline-p">Progress</p>
                        <p className="deadline-p green-p">70%</p>
                    </div>
                    <div class="status-bar stat-b">
                        <div class="status-fill green"></div>
                    </div>
                </div>
                <div className="project-child">
                    <div className="project-sub-child">
                        <p>Hospital Managment</p>
                        <button className="edit-button" onClick={() => handleEdit(row.original.id)}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </div>
                    <p className="description-p">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a galley of type and scrambled it Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a galley of type and scrambled it...
                    </p>
                    <p className="deadline-p">Deadline:</p>
                    <p className="description-p">
                        17 Apr 2023
                    </p>
                    <p className="deadline-p">Project Leader:</p>
                    <p className="description-p">
                        Yerga Dagnaw
                    </p>
                    <p className="deadline-p">Team:</p>
                    <p className="description-p">
                        Abel Dagnaw
                    </p>
                    <p className="description-p">
                        Hiwot Dagnaw
                    </p>
                    <div className="project-stat-bar">
                        <p className="deadline-p">Progress</p>
                        <p className="deadline-p green-p">70%</p>
                    </div>
                    <div class="status-bar stat-b">
                        <div class="status-fill green"></div>
                    </div>
                </div>
                <div className="project-child">
                    <div className="project-sub-child">
                        <p>Bank HRM</p>
                        <button className="edit-button" onClick={() => handleEdit(row.original.id)}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </div>
                    <p className="description-p">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a galley of type and scrambled it Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a galley of type and scrambled it...
                    </p>
                    <p className="deadline-p">Deadline:</p>
                    <p className="description-p">
                        17 Apr 2023
                    </p>
                    <p className="deadline-p">Project Leader:</p>
                    <p className="description-p">
                        Yerga Dagnaw
                    </p>
                    <p className="deadline-p">Team:</p>
                    <p className="description-p">
                        Abel Dagnaw
                    </p>
                    <p className="description-p">
                        Hiwot Dagnaw
                    </p>
                    <div className="project-stat-bar">
                        <p className="deadline-p">Progress</p>
                        <p className="deadline-p green-p">70%</p>
                    </div>
                    <div class="status-bar stat-b">
                        <div class="status-fill green"></div>
                    </div>
                </div>
                <div className="project-child">
                    <div className="project-sub-child">
                        <p>Bank HRM</p>
                        <button className="edit-button" onClick={() => handleEdit(row.original.id)}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </div>
                    <p className="description-p">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a galley of type and scrambled it Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a galley of type and scrambled it...
                    </p>
                    <p className="deadline-p">Deadline:</p>
                    <p className="description-p">
                        17 Apr 2023
                    </p>
                    <p className="deadline-p">Project Leader:</p>
                    <p className="description-p">
                        Yerga Dagnaw
                    </p>
                    <p className="deadline-p">Team:</p>
                    <p className="description-p">
                        Abel Dagnaw
                    </p>
                    <p className="description-p">
                        Hiwot Dagnaw
                    </p>
                    <div className="project-stat-bar">
                        <p className="deadline-p">Progress</p>
                        <p className="deadline-p green-p">70%</p>
                    </div>
                    <div class="status-bar stat-b">
                        <div class="status-fill green"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}