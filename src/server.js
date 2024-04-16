import { createServer, Model, Response } from "miragejs"


createServer({
    models: {
        employees: Model,
        clients: Model,
        leaves: Model,
        atendances: Model,
        departments: Model,
        designations: Model,
        overtimes: Model,
        projects: Model,
        leads: Model,
        tickets: Model,
        salaries: Model,
        deductions: Model,
        invoices: Model,
        users: Model
    },

    seeds(server) {
        server.create("user", { id: "123", email: "b@b.com", password: "p123", name: "Bob" })

        server.create("employee", { id: "1", name: "Yerga Daganw", emp_id: "boa/123", email: "yerga@gmail.com", phone: 251943590196, join_date: "1 Jan 2022" , role: "Front end developer"})
        server.create("employee", { id: "2", name: "Mekonene Gebeye", emp_id: "boa/875", email: "mekonen@gmail.com", phone: 251998657425, join_date: "1 Feb 2012" , role: "Back end developer"})
        server.create("employee", { id: "3", name: "Daniel W/hawariyat", emp_id: "boa/986", email: "daniel@gmail.com", phone: 251978965425, join_date: "1 Mar 2023" , role: "Server admin"})
        server.create("employee", { id: "4", name: "Gedion Teshome", emp_id: "boa/866", email: "gedion@gmail.com", phone: 251985645896, join_date: "1 Jun 2023" , role: "Network engineer"})
        server.create("employee", { id: "5", name: "Hiwot Amare", emp_id: "boa/785", email: "hiwot@gmail.com", phone: 251912348678, join_date: "1 Sep 2023" , role: "UI/UX designer"})
        server.create("employee", { id: "6", name: "Rediet Endale", emp_id: "boa/895", email: "rediet@gmail.com", phone: 251978456987, join_date: "1 Oct 2023" , role: "Security expert"})
        server.create("employee", { id: "7", name: "Tadiyos Endale", emp_id: "boa/895", email: "tadiyos@gmail.com", phone: 251977845632, join_date: "1 Nov 2023" , role: "Trainee"})
       
        server.create("client", { id: "1", name: "Websprix IT", cid: "client/784",contact_person:"Minale Taye", email: "minale@gmail.com", phone: 251979945632, status: "Active" })
        server.create("client", { id: "2", name: "Comercial bank", cid: "cleint/986",contact_person:"Abebaw Asres", email: "abebaw@gmail.com", phone: 251973345632, status: "Active" })
        server.create("client", { id: "3", name: "Minab IT solution", cid: "cleint/895",contact_person:"Jemal Husen", email: "jemal@gmail.com", phone: 251977845677, status: "Active" })
        server.create("client", { id: "4", name: "Heilco college", cid: "client/325",contact_person:"Abreham Tiruye", email: "abreham@gmail.com", phone: 251977845442, status: "Active" })
        server.create("client", { id: "5", name: "AA university", cid: "client/175",contact_person:"Fekadu Abye", email: "fekadu@gmail.com", phone: 251977848772, status: "Inactive" })
        server.create("client", { id: "6", name: "Yega PLC", cid: "client/777",contact_person:"Yerga Dagnaw", email: "yerga@gmail.com", phone: 251977849963, status: "Active" })
        server.create("client", { id: "7", name: "Girma and his freind", cid: "clent/367",contact_person:"Delila Musse", email: "delila@gmail.com", phone: 251977878632, status: "Active" })
       
        server.create("leave", { id: "1", employee: "Yerga Dagnaw", type: "Annual Leave",from:"27 Feb 2022", to: "30 Feb 2022", days: 8, status: "Approved" })
        server.create("leave", { id: "2", employee: "Tadiyos Hailu", type: "Medical Leave",from:"27 Feb 2022", to: "30 Feb 2022", days: 8, status: "Rejected" })
        server.create("leave", { id: "3", employee: "Daniel Hawariyat", type: "Medical Leave",from:"27 Feb 2022", to: "30 Feb 2022", days: 8, status: "Approved" })
        server.create("leave", { id: "4", employee: "Hiwot Amare", type: "Medical Leave",from:"27 Feb 2022", to: "30 Feb 2022", days: 8, status: "Active" })
        server.create("leave", { id: "5", employee: "Teninet Getaw", type: "Annula Leave",from:"27 Feb 2022", to: "30 Feb 2022", days: 8, status: "Approved" })
        server.create("leave", { id: "6", employee: "Tigist Amare", type: "Maternity Leave",from:"27 Feb 2022", to: "30 Feb 2022", days: 8, status: "Active" })
        server.create("leave", { id: "7", employee: "Bereket Axum", type: "Medical Leave",from:"27 Feb 2022", to: "30 Feb 2022", days: 8, status: "Approved" })
        
        server.create("atendance", { id: "1", employee: "Yerga Axum", 1:"y",2: "n", 3:"y",4: "n", 5:"y",6: "n", 7:"y",8: "n", 9:"y",10: "n", 11:"y",12: "n", 13:"y",14: "n", 15:"y",16: "n", 17:"y",18: "n", 19:"y",20: "n", 21:"y",22: "n", 23:"y",24: "n", 25:"y",26: "n", 27:"y",28: "n", 29:"y",30: "n"})
        server.create("atendance", { id: "2", employee: "Dainel Axum", 1:"y",2: "n", 3:"y",4: "n", 5:"y",6: "n", 7:"y",8: "n", 9:"y",10: "n", 11:"y",12: "n", 13:"y",14: "n", 15:"y",16: "n", 17:"y",18: "n", 19:"y",20: "n", 21:"y",22: "n", 23:"y",24: "n", 25:"y",26: "n", 27:"y",28: "n", 29:"y",30: "n"})
        server.create("atendance", { id: "3", employee: "Zebene Axum", 1:"y",2: "n", 3:"y",4: "n", 5:"y",6: "n", 7:"y",8: "n", 9:"y",10: "n", 11:"y",12: "n", 13:"y",14: "n", 15:"y",16: "n", 17:"y",18: "n", 19:"y",20: "n", 21:"y",22: "n", 23:"y",24: "n", 25:"y",26: "n", 27:"y",28: "n", 29:"y",30: "n"})
        server.create("atendance", { id: "4", employee: "Alemtsehay Axum", 1:"y",2: "n", 3:"y",4: "n", 5:"y",6: "n", 7:"y",8: "n", 9:"y",10: "n", 11:"y",12: "n", 13:"y",14: "n", 15:"y",16: "n", 17:"y",18: "n", 19:"y",20: "n", 21:"y",22: "n", 23:"y",24: "n", 25:"y",26: "n", 27:"y",28: "n", 29:"y",30: "n"})
        server.create("atendance", { id: "5", employee: "Yihun Belay", 1:"y",2: "n", 3:"y",4: "n", 5:"y",6: "n", 7:"y",8: "n", 9:"y",10: "n", 11:"y",12: "n", 13:"y",14: "n", 15:"y",16: "n", 17:"y",18: "n", 19:"y",20: "n", 21:"y",22: "n", 23:"y",24: "n", 25:"y",26: "n", 27:"y",28: "n", 29:"y",30: "n"})
        server.create("atendance", { id: "6", employee: "Teddy Afro", 1:"y",2: "n", 3:"y",4: "n", 5:"y",6: "n", 7:"y",8: "n", 9:"y",10: "n", 11:"y",12: "n", 13:"y",14: "n", 15:"y",16: "n", 17:"y",18: "n", 19:"y",20: "n", 21:"y",22: "n", 23:"y",24: "n", 25:"y",26: "n", 27:"y",28: "n", 29:"y",30: "n"})
        server.create("atendance", { id: "7", employee: "Girmawineto Jah", 1:"y",2: "n", 3:"y",4: "n", 5:"y",6: "n", 7:"y",8: "n", 9:"y",10: "n", 11:"y",12: "n", 13:"y",14: "n", 15:"y",16: "n", 17:"y",18: "n", 19:"y",20: "n", 21:"y",22: "n", 23:"y",24: "n", 25:"y",26: "n", 27:"y",28: "n", 29:"y",30: "n"})
        
        server.create("department", { id: "1",num: "1", department: "Web Development"})
        server.create("department", { id: "2",num: "2", department: "Application Development"})
        server.create("department", { id: "3",num: "3", department: "IT Management"})
        server.create("department", { id: "4",num: "4", department: "Accounts Management"})
        server.create("department", { id: "5",num: "5", department: "Support Management"})
        server.create("department", { id: "6",num: "6", department: "Marketing"})
        server.create("department", { id: "7",num: "7", department: "Risk and compliance"})

        server.create("designation", { id: "1",num: "1", designation: "Web Developer", department: "Web Development"})
        server.create("designation", { id: "2",num: "2", designation: "Application Developer", department: "Application Development"})
        server.create("designation", { id: "3",num: "3", designation: "Application Developer", department: "IT Management"})
        server.create("designation", { id: "4",num: "4", designation: "Web Developer", department: "	IT Technician"})
        server.create("designation", { id: "5",num: "5", designation: "Web Developer", department: "Support Management"})
        server.create("designation", { id: "6",num: "6", designation: "Web Developer", department: "	SEO Analyst"})
        server.create("designation", { id: "7",num: "7", designation: "Web Developer", department: "IOS Developer"})
        server.create("designation", { id: "8",num: "8", designation: "Web Developer", department: "Support Management"})
        server.create("designation", { id: "9",num: "9", designation: "Web Developer", department: "Front End Designer"})
        server.create("designation", { id: "10",num: "10", designation: "Application Developer", department: "Android Developer"})

        server.create("overtime", { id: "1", num: "1", employee: "Yerga Dagnaw",hour: 8, date:"27 Feb 2022", type: "Normal Day OT", description: "Reason of OT", status: "Approved", by: "Yerga Dagnaw" })
        server.create("overtime", { id: "2", num: "2", employee: "Tadiyos Hailu", hour: 8, date:"27 Feb 2022", type: "Normal Day OT", description: "Reason of OT", status: "Rejected", by: "Yerga Dagnaw" })
        server.create("overtime", { id: "3", num: "3", employee: "Daniel Hawariyat", hour: 8, date:"27 Feb 2022", type: "Normal Day OT", description: "Reason of OT", status: "Approved", by: "Yerga Dagnaw" })
        server.create("overtime", { id: "4", num: "4", employee: "Hiwot Amare", hour: 8, date:"27 Feb 2022", type: "Normal Day OT", description: "Reason of OT", status: "Active", by: "Yerga Dagnaw" })
        server.create("overtime", { id: "5", num: "5", employee: "Teninet Getaw",hour: 8, date:"27 Feb 2022", type: "Normal Day OT", description: "Reason of OT", status: "Approved", by: "Yerga Dagnaw" })
        server.create("overtime", { id: "6", num: "6", employee: "Tigist Amare", hour: 8, date:"27 Feb 2022", type: "Normal Day OT", description: "Reason of OT", status: "Active", by: "Yerga Dagnaw" })
        server.create("overtime", { id: "7", num: "7", employee: "Bereket Axum", hour: 8, date:"27 Feb 2022", type: "Normal Day OT", description: "Reason of OT", status: "Approved", by: "Yerga Dagnaw" })

        server.create("project", { id: "1", title: "School Managment"})
        server.create("project", { id: "1", title: "Project Managment"})
        server.create("project", { id: "1", title: "Human Resource Managment"})

        server.create("lead", { id: "1", leadName: "Yerga Daganw", email: "yerga@gmail.com", phone: 251943590196, project: "Hospital Administration" , team: "yerga, daniel", created: "4:00 12 Jan 2023",status: "Working" })
        server.create("lead", { id: "2", leadName: "Mekonene Gebeye", email: "mekonen@gmail.com", phone: 251998657425, project: "Video Calling App" , team: "yerga, daniel", created: "4:00 12 Jan 2023",status: "Working" })
        server.create("lead", { id: "3", leadName: "Daniel W/hawariyat", email: "daniel@gmail.com", phone: 251978965425, project:  "Office Management" , team: "yerga, daniel", created: "4:00 12 Jan 2023",status: "Working" })
        server.create("lead", { id: "4", leadName: "Gedion Teshome", email: "gedion@gmail.com", phone: 251985645896, project: "Hospital Administration" , team: "yerga, daniel", created: "4:00 12 Jan 2023",status: "Working" })
        server.create("lead", { id: "5", leadName: "Hiwot Amare", email: "hiwot@gmail.com", phone: 251912348678, project: "Hospital Administration" , team: "yerga, daniel", created: "4:00 12 Jan 2023",status: "Working" })
        server.create("lead", { id: "6", leadName: "Rediet Endale", email: "rediet@gmail.com", phone: 251978456987, project: "Office Management" , team: "yerga, daniel", created: "4:00 12 Jan 2023",status: "Working" })
        server.create("lead", { id: "7", leadName: "Tadiyos Endale", email: "tadiyos@gmail.com", phone: 251977845632, project: "Office Management" , team: "yerga, daniel", created: "4:00 12 Jan 2023",status: "Working" })

        server.create("ticket", { id: "1", ticketId: "TKT-02-63-23", agent: "Yerga Daganw", lastly: "4:00 12 Jan 2023", priority: "High" ,  created: "4:00 12 Jan 2023",status: "Active" })
        server.create("ticket", { id: "2", ticketId: "TKT-02-85-23", agent: "Mekonene Gebeye", lastly: "4:00 12 Jan 2023", priority: "Low" ,  created: "4:00 12 Jan 2023",status: "Resolved" })
        server.create("ticket", { id: "3", ticketId: "TKT-02-79-23", agent: "Daniel W/hawariyat", lastly: "4:00 12 Jan 2023", priority:  "Medium" ,  created: "4:00 12 Jan 2023",status: "Active" })
        server.create("ticket", { id: "4", ticketId: "TKT-02-89-23", agent: "Gedion Teshome", lastly: "4:00 12 Jan 2023", priority: "High" ,  created: "4:00 12 Jan 2023",status: "Active" })
        server.create("ticket", { id: "5", ticketId: "TKT-02-33-23", agent: "Hiwot Amare", lastly: "4:00 12 Jan 2023", priority: "High" ,  created: "4:00 12 Jan 2023",status: "Pending" })
        server.create("ticket", { id: "6", ticketId: "TKT-02-77-23", agent: "Rediet Endale", lastly: "4:00 12 Jan 2023", priority: "Low" ,  created: "4:00 12 Jan 2023",status: "Active" })
        server.create("ticket", { id: "7", ticketId: "TKT-02-42-23", agent: "Tadiyos Endale", lastly: "4:00 12 Jan 2023", priority: "High" ,  created: "4:00 12 Jan 2023",status: "Active" })

        server.create("salary", { id: "1", name: "Yerga Daganw", emp_id: "boa/123", email: "yerga@gmail.com",  join_date: "1 Jan 2022" , role: "Front end developer", salary: "125500"})
        server.create("salary", { id: "2", name: "Mekonene Gebeye", emp_id: "boa/875", email: "mekonen@gmail.com",  join_date: "1 Feb 2012" , role: "Back end developer", salary: "125500"})
        server.create("salary", { id: "3", name: "Daniel W/hawariyat", emp_id: "boa/986", email: "daniel@gmail.com",  join_date: "1 Mar 2023" , role: "Server admin", salary: "125500"})
        server.create("salary", { id: "4", name: "Gedion Teshome", emp_id: "boa/866", email: "gedion@gmail.com",  join_date: "1 Jun 2023" , role: "Network engineer", salary: "125500"})
        server.create("salary", { id: "5", name: "Hiwot Amare", emp_id: "boa/785", email: "hiwot@gmail.com",  join_date: "1 Sep 2023" , role: "UI/UX designer", salary: "125500"})
        server.create("salary", { id: "6", name: "Rediet Endale", emp_id: "boa/895", email: "rediet@gmail.com",  join_date: "1 Oct 2023" , role: "Security expert", salary: "125500"})
        server.create("salary", { id: "7", name: "Tadiyos Endale", emp_id: "boa/895", email: "tadiyos@gmail.com",  join_date: "1 Nov 2023" , role: "Trainee", salary: "125500"})

        server.create("deduction", { id: "1",name: "1", category: "Web Development", unit: "$5"})
        server.create("deduction", { id: "2",name: "2", category: "Application Development", unit: "$5"})
        server.create("deduction", { id: "3",name: "3", category: "IT Management", unit: "$5"})
        server.create("deduction", { id: "4",name: "4", category: "Accounts Management", unit: "$5"})
        server.create("deduction", { id: "5",name: "5", category: "Support Management", unit: "$5"})
        server.create("deduction", { id: "6",name: "6", category: "Marketing", unit: "$5"})
        server.create("deduction", { id: "7",name: "7", category: "Risk and compliance", unit: "$5"})

        server.create("invoice", { id: "1",number: "#INV-1", created: "1 Jan 2023", duedate: "30 Jan 2023", status: "sent", client: "Web Development", amount: "$385"})
        server.create("invoice", { id: "2",number: "#INV-2", created: "1 Jan 2023", duedate: "30 Jan 2023", status: "sent", client: "Application Development", amount: "$385"})
        server.create("invoice", { id: "3",number: "#INV-3", created: "1 Jan 2023", duedate: "30 Jan 2023", status: "sent", client: "IT Management", amount: "$385"})
        server.create("invoice", { id: "4",number: "#INV-4", created: "1 Jan 2023", duedate: "30 Jan 2023", status: "sent", client: "Accounts Management", amount: "$385"})
        server.create("invoice", { id: "5",number: "#INV-5", created: "1 Jan 2023", duedate: "30 Jan 2023", status: "sent", client: "Support Management", amount: "$385"})
        server.create("invoice", { id: "6",number: "#INV-6", created: "1 Jan 2023", duedate: "30 Jan 2023", status: "sent", client: "Marketing", amount: "$385"})
        server.create("invoice", { id: "7",number: "#INV-7", created: "1 Jan 2023", duedate: "30 Jan 2023", status: "sent", client: "Risk and compliance", amount: "$385"})
    },

    routes() {
        this.namespace = "api"
        this.logging = false
        this.timing = 1000

        this.get("/employees", (schema, request) => {
            // return new Response(400, {}, {error: "Error fetching data"})
            return schema.employees.all()
        })

        this.get("/employees/:id", (schema, request) => {
            const id = request.params.id
            return schema.employees.find(id)
        })

        this.get("/employees/leave", (schema, request) =>{
            return schema.leaves.all()
        })
        this.get("/employees/atendance", (schema, request) =>{
            return schema.atendances.all()
        })
       
        this.get("/employees/department", (schema, request) => {
            return schema.departments.all()
        })
        this.get("/employees/designation", (schema, request) => {
            return schema.designations.all()
        })
        this.get("/employees/overtime", (schema, request) => {
            return schema.overtimes.all()
        })
        this.get("/client", (schema, request) => {
            return schema.clients.all()
        })
        this.get("/lead", (schema, request) =>{
            return schema.leads.all()
        })
        this.get("/ticket", (schema, request)=>{
            return schema.tickets.all()
        })
        this.get("/payroll/salary", (schema, request)=>{
            return schema.salaries.all()
        })
        this.get("/payroll/deduction", (schema, result) =>{
            return schema.deductions.all()
        })
        this.get("/invoices", (schema, result) =>{
            return schema.invoices.all()
        })
        this.post("/users", (schema, request) => {
            const { email, password } = JSON.parse(request.requestBody)
            // This is an extremely naive version of authentication. Please don't
            // do this in the real world, and never save raw text passwords
            // in your database 😇
            const foundUser = schema.users.findBy({ email, password })
            if (!foundUser) {
                return new Response(401, {}, { message: "No user with those credentials found!" })
            }

            // At the very least, don't send the password back to the client 😅
            foundUser.password = undefined
            return {
                user: foundUser,
                token: "Enjoy your pizza, here's your tokens."
            }
        })
        // this.get("/host/vans", (schema, request) => {
        //     // Hard-code the hostId for now
        //     return schema.vans.where({ hostId: "123" })
        // })

        // this.get("/host/vans/:id", (schema, request) => {
        //     // Hard-code the hostId for now
        //     const id = request.params.id
        //     return schema.vans.findBy({ id, hostId: "123" })
        // })

        // this.post("/login", (schema, request) => {
        //     const { email, password } = JSON.parse(request.requestBody)
        //     // This is an extremely naive version of authentication. Please don't
        //     // do this in the real world, and never save raw text passwords
        //     // in your database 😇
        //     const foundUser = schema.users.findBy({ email, password })
        //     if (!foundUser) {
        //         return new Response(401, {}, { message: "No user with those credentials found!" })
        //     }

        //     // At the very least, don't send the password back to the client 😅
        //     foundUser.password = undefined
        //     return {
        //         user: foundUser,
        //         token: "Enjoy your pizza, here's your tokens."
        //     }
        // })
    }
})