import React from 'react'
import ReactDOM from 'react-dom/client'

import Layout from '../components/Layout'
import PageNotFound from '../pages/PageNotFound'
import Dashboard from '../pages/Dashboard'
import All, { loader as employeeLoader } from '../pages/employee/all'
import Atendance, { loader as atendanceLoader } from '../pages/employee/atendance'
import Deapartments, { loader as departmentsLoader } from '../pages/employee/departments'
import Leave, { loader as leaveLoader } from '../pages/employee/leave'
import Designation, { loader as designationLoader } from '../pages/employee/designation'
import Overtime, { loader as overtimeLoader } from '../pages/employee/overtime'
import Client, { loader as clientLoader, loader } from '../pages/Client'
import Project, { loader as projectLoader } from '../pages/Project'
import Lead, { loader as leadLoader } from '../pages/Lead'
import Ticket, { loader as ticketLoader } from '../pages/Ticket'
import Salary, { loader as salaryLoader } from '../pages/payroll/Salary'
import Payslip from '../pages/payroll/payslip'
import PayItem from '../pages/payroll/payItem'
import Deductions, { loader as deductionLoader } from '../pages/payroll/deduction'
import Addition, { loader as additionLoader } from '../pages/payroll/addition'
import OverT, { loader as overLoader } from '../pages/payroll/overtime'
import Invoice, { loader as invoiceLoader } from '../pages/Invoice'
import Profile from '../pages/Profile'
import ProjectD from '../pages/profile/project'
import AssetsD from '../pages/profile/asset'
import Detail from '../pages/Detail'
import UnderCon from '../pages/UnderConstruction'
import Login from '../Login'
import {
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from 'react-router-dom'
import "../server"
import { UserProvider } from '../UserContext'
import LoginTest from '../loginTest'

const router = createBrowserRouter(createRoutesFromElements(
    
    <Route path="/" element={<Layout />} >
        <Route index element={<Dashboard />} />
        <Route path="employees" >
            <Route
                path="all"
                element={<All />}
                loader={employeeLoader} />
            <Route
                path="departments"
                element={<Deapartments />}
                loader={departmentsLoader}
            />
            <Route
                path="leave"
                element={<Leave />}
                loader={leaveLoader}
            />
            <Route
                path="atendance"
                element={<Atendance />}
                loader={atendanceLoader} />
            <Route
                path="overtime"
                element={<Overtime />}
                loader={overtimeLoader}
            />
            <Route
                path="designation"
                element={<Designation />}
                loader={designationLoader}
            />
        </Route>

        <Route
            path="client"
            element={<Client />}
            loader={clientLoader}
        />
        <Route
            path="invoices"
            element={<Invoice />}
            loader={invoiceLoader}
        />
        <Route
            path="project"
            element={<Project />}
            loader={projectLoader}
        />
        <Route
            path="lead"
            element={<Lead />}
            loader={leadLoader}
        />
        <Route
            path="ticket"
            element={<Ticket />}
            loader={ticketLoader}
        />
        <Route path="payroll">
            <Route
                path="salary"
                element={<Salary />}
                loader={salaryLoader}
            />
            <Route
                path="payslip"
                element={<Payslip />}
            />
            <Route
                path="items"
                element={<PayItem />}
            >
                <Route
                    index
                    element={<Addition />}
                    loader={additionLoader}
                />
                <Route
                    path="deduction"
                    element={<Deductions />}
                    loader={deductionLoader}
                />
                <Route
                    path="/payroll/items/overtime"
                    element={<OverT />}
                    loader={overLoader}
                />
            </Route>
        </Route>
        <Route
            path="profile"
            element={<Profile />}
        >
            <Route
                index
                element={<Detail />}
            />
            <Route
            path="projects"
            element={<ProjectD />}
            />
            <Route
            path="assets"
            element={<AssetsD />}
            />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="loginTest" element={<LoginTest />} />
        <Route
            path="/underConstruction"
            element={<UnderCon />}
        />
        <Route path="*" element={<PageNotFound />} />

    </Route>
))

function App() {
    return (
        <UserProvider>
            <RouterProvider router={router} />
        </UserProvider>
        
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
