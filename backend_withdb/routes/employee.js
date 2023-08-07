const express = require('express');

const EmployeeController = require('../controllers/employee');

const router = express.Router();

router.get('/employees', (req, res) => {
    EmployeeController.getEmployees(req, res);
})

router.get('/employees/:id', (req, res) => {
    EmployeeController.getEmployee(req, res);
})

router.post('/employees', (req,res) => {
    EmployeeController.createEmployee(req,res);
})

module.exports = router;