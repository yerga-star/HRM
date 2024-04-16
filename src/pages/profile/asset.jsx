import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

export default function AssetsD(){

    return(
        <>
        <div className="table-container">
                            <table className="table-invoice">
                                <tr>
                                    <th>Name</th>
                                    <th>Asset ID</th>
                                    <th>Assigned Date</th>
                                    <th>Assignee</th>
                                    <th>Action</th>
                                </tr>
                                <tr>
                                    <td>Laptop </td>
                                    <td>boa-pc-lenovo-987 </td>
                                    <td> 08/08/1977</td>
                                    <td>Abreham Tiruye </td>
                                    <td><button class="edit-button">
                                        <FontAwesomeIcon icon={faEllipsisVertical} />
                                    </button></td>
                                </tr>
                                <tr>
                                    <td>Keyboard </td>
                                    <td>boa-key-956 </td>
                                    <td> 08/08/1998</td>
                                    <td>Abreham Tiruye </td>
                                    <td><button class="edit-button">
                                        <FontAwesomeIcon icon={faEllipsisVertical} />
                                    </button></td>
                                </tr>
                                <tr>
                                    <td>Mouse </td>
                                    <td>boa-tech-logic-466 </td>
                                    <td> 08/08/1987</td>
                                    <td>Abreham Tiruye </td>
                                    <td><button class="edit-button">
                                        <FontAwesomeIcon icon={faEllipsisVertical} />
                                    </button></td>
                                </tr>

                            </table>
                        </div>
        </>
    )
}