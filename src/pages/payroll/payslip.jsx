import React from "react";


export default function Payslip() {
    return (
        <div className="container-div">
            <div className="child-container">
                <div className="container-header">
                    <h2>Payslip</h2>
                    <h4>Dashboard / Payslip</h4>
                </div>
                <div className="as-format">
                    <p>PDF</p>
                    <p>CSV</p>
                    <p>Print</p>
                </div>

            </div>
            <div className="payslip-div">
                <div className="payslip-p">
                    <b>PAYSLIP FOR THE MONTH OF FEB 2023</b>
                </div>
                <div className="payslip-detail">
                    <div>
                        <p>Netsebraq Technologies</p>
                        <p>3864 Addis Abeba,</p>
                        <p>Bole Bul, ET, 91403</p>
                        <hr></hr>
                        <p className="emp-name">John Doe</p>
                        <p>Web Designer</p>
                        <p>Employee ID: boa-0009</p>
                        <p>Joining Date: 1 Jan 2023</p>
                    </div>
                    <div>
                        <p className="emp-name">PAYSLIP #49029</p>
                        <p>Salary Month: March, 2023</p>
                    </div>
                </div>
                <div className="earning">
                    <div>
                        <p>Earnings</p>
                        <table className="earning-table">
                            <tr>
                                <td>Basic Salery</td>
                                <td>6500</td>
                            </tr>
                            <tr>
                                <td>House Rent Allowance (H.R.A.)</td>
                                <td>55</td>
                            </tr>
                            <tr>
                                <td>Conveyance</td>
                                <td>55</td>
                            </tr>
                            <tr>
                                <td>Other Allowance</td>
                                <td>55</td>
                            </tr>
                            <tr>
                                <td>Total Earnings</td>
                                <td>5550</td>
                            </tr>
                        </table>
                    </div>
                    <div>
                        <p>Deductions</p>
                        <table className="earning-table">
                            <tr>
                                <td>Tax Deducted at Source (T.D.S.)</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>Provident Fund</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>ESI</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>Loan</td>
                                <td>300</td>
                            </tr>
                            <tr>
                                <td>Total Deductions</td>
                                <td>59650</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <p className="net-p"><p className="net">Net Salary: $59698</p> (Fifty nine thousand six hundred and ninety eight only.)</p>
            </div>
        </div>
    )
}