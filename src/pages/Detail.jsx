import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical

} from '@fortawesome/free-solid-svg-icons';

export default function Detail() {
    return (
        <>
            <div className="profile-detail">
                <div className="profile-detail-child">
                    <p>Personal Informations</p>
                    <div className="personal-info">
                        <div className="id-p">
                            <p>ID No.</p>
                            <p>Id exp Date.</p>
                            <p>Tel</p>
                            <p>Nationality</p>
                            <p>Religion</p>
                            <p>Marital Status</p>
                            <p>Employment of spouse</p>
                            <p>No of children</p>
                        </div>
                        <div className="id-p lighted">
                            <p>987654</p>
                            <p>13/13/2027</p>
                            <p>987654321</p>
                            <p>Ethiopian</p>
                            <p>Orthodox</p>
                            <p>Married</p>
                            <p>No</p>
                            <p>2</p>
                        </div>
                    </div>
                    <button className="edit-btn">Edit</button>
                </div>
                <div className="profile-detail-child">
                    <p>Emergency contact</p>
                    <div className="personal-info">
                        <div className="id-p">
                            <p>Primary</p>
                            <p>Name</p>
                            <p>Relationship</p>
                            <p>Phone</p>
                            <p>Secondary</p>
                            <hr></hr>
                            <p>Name</p>
                            <p>Relationship</p>
                            <p>Phone</p>
                        </div>
                        <div className="id-p lighted">
                            <p>&nbsp;</p>
                            <p>Dagnaw Birhane</p>
                            <p>Father</p>
                            <p>987654321,789654123</p>
                            <p>&nbsp; </p>
                            <hr></hr>
                            <p>Mulken Birhane</p>
                            <p>Mother</p>
                            <p>987654321,789654123</p>
                        </div>
                    </div>
                    <button className="edit-btn">Edit</button>
                </div>

            </div>
            <div className="profile-detail">
                <div className="profile-detail-child">
                    <p>Bank Information</p>
                    <div className="personal-info">
                        <div className="id-p">
                            <p>Bank name</p>
                            <p>Bank account No.</p>
                            <p>PAN No</p>
                        </div>
                        <div className="id-p lighted">
                            <p>Bank of abyssinia</p>
                            <p>98625771222568847</p>
                            <p>CD8799PL3</p>
                        </div>
                    </div>
                    <button className="edit-btn">Edit</button>
                </div>
                <div className="profile-detail-child">
                    <p>Family Informations</p>
                    <div className="personal-info">
                        <div className="table-container">
                            <table className="table-invoice">
                                <tr>
                                    <th>Name</th>
                                    <th>Relationship</th>
                                    <th>Date of birth</th>
                                    <th>Phone</th>
                                </tr>
                                <tr>
                                    <td>Dagnaw Birhanu </td>
                                    <td>Father </td>
                                    <td> 08/08/1977</td>
                                    <td>9685321475 </td>
                                    <td><button class="edit-button">
                                        <FontAwesomeIcon icon={faEllipsisVertical} />
                                    </button></td>
                                </tr>
                                <tr>
                                    <td>Ayehu alem </td>
                                    <td>Sister </td>
                                    <td> 08/08/1998</td>
                                    <td>9685321475 </td>
                                    <td><button class="edit-button">
                                        <FontAwesomeIcon icon={faEllipsisVertical} />
                                    </button></td>
                                </tr>
                                <tr>
                                    <td>Muluken Birhan </td>
                                    <td>Mother </td>
                                    <td> 08/08/1987</td>
                                    <td>9685321475 </td>
                                    <td><button class="edit-button">
                                        <FontAwesomeIcon icon={faEllipsisVertical} />
                                    </button></td>
                                </tr>

                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}