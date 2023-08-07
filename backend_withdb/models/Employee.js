const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    employeeName:{
        type: String
    },
    occupation:{
        type: String
    },
    salary:{
        type: String
    }
})

module.exports = mongoose.model('employee', employeeSchema);