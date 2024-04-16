import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

export default function ProjectD(){

    return (
        <>
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
                
                </div>
        </>
    )
}