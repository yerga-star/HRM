export async function getEmployees(id) {
    const url = id ? `/api/employees/${id}` : "/api/employees"
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch employees",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.employees
}
export async function getLeaves(id) {
    const url = id ? `/api/employees/leave/${id}` : "/api/employees/leave"
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch leaves",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.leaves
}

export async function getAtendance(id) {
    // const url = id ? `/api/employees/atendance/${id}` : "/api/employees/atendance"
    const res = await fetch("/api/employees/atendance")
    if (!res.ok) {
        throw {
            message: "Failed to fetch atendance",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.atendances
}
export async function getDepartment(id) {
    // const url = id ? `/api/employees/atendance/${id}` : "/api/employees/atendance"
    const res = await fetch("/api/employees/department")
    if (!res.ok) {
        throw {
            message: "Failed to fetch department",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.departments
}
export async function getDesignation(id) {
    // const url = id ? `/api/employees/atendance/${id}` : "/api/employees/atendance"
    const res = await fetch("/api/employees/designation")
    if (!res.ok) {
        throw {
            message: "Failed to fetch designation",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.designations
}
export async function getOvertime(id) {
    // const url = id ? `/api/employees/atendance/${id}` : "/api/employees/atendance"
    const res = await fetch("/api/employees/overtime")
    if (!res.ok) {
        throw {
            message: "Failed to fetch overtime",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.overtimes
}
export async function getClients(id) {
    // const url = id ? `/api/employees/atendance/${id}` : "/api/employees/atendance"
    const res = await fetch("/api/client")
    if (!res.ok) {
        throw {
            message: "Failed to fetch clients",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.clients
}
export async function  getProjects(id){
    const res = await fetch("/api/project")
    if (!res.ok){
        throw{
            message: "Failed to fetch projects",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.projects
}
export async function getLeads(id){
const res = await fetch("/api/lead")
if (!res.ok){
    throw{
        message: "Failed to load lelads",
        statusText: res.statusText,
        status: res.status
    }
}
const data = await res.json()
return data.leads
}
export async function getTickets(){
    const res = await fetch("/api/ticket")
    if (!res.ok){
        throw{
            message: "Failed to load tickets",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.tickets
}
export async function getSalaries(){
    const res = await fetch("/api/payroll/salary")
    if (!res.ok){
        throw{
            message: "Failed to load salary",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.salaries
}
export async function getDeduction(){
    const res = await fetch("/api/payroll/deduction")
    if(!res.ok){
        throw{
            message: "Failed to load data",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.deductions
}

export async function getInvoices(){
    const res = await fetch("/api/invoices")
    if(!res.ok){
        throw{
            message: "Failed to load data",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.invoices
}
export async function loginUser(creds) {
    const res = await fetch("/api/users",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}