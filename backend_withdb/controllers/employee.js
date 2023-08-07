const employeeModel = require('../models/Employee');

const getEmployees = (req, res) => {
    employeeModel.find()
    .then(data => {
        res.send(data);
    })
}

const getEmployee = (req, res) => {
    employeeModel.findOne({_id: req.params.id})
    .then(data => { res.send(data);
    })
}

const createEmployee = (req,res) => {
    const newEmployee = new employeeModel({
        employeeName: req.body.employeeName,
        occupation: req.body.occupation,
        salary: req.body.salary,
    });
    newEmployee.save();
}
module.exports = {
    getEmployees,
    getEmployee,
    createEmployee,
}