const mongoose=require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    name: String,
    dob: Date,
    email: String,
    password: String
})

const EmployeeSchema = mongoose.model("employees", EmployeeSchema)
module.exports = EmployeeSchema
