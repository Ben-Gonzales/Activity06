const express = require('express');

const VehicleController = require('../controllers/vehicle');

const router = express.Router();

router.get('/vehicles', (req, res) => {
    VehicleController.getVehicles(req, res);
})

router.get('/vehicles/:id', (req, res) => {
    VehicleController.getVehicle(req, res);
})

router.post('/vehicles', (req,res) => {
    VehicleController.createVehicle(req,res);
})

module.exports = router;