const express = require('express');

const DeviceController = require('../controllers/device');

const router = express.Router();

router.get('/devices', (req, res) => {
    DeviceController.getDevices(req, res);
})

router.get('/devices/:id', (req, res) => {
    DeviceController.getDevice(req, res);
})

router.post('/devices', (req,res) => {
    DeviceController.createDevice(req,res);
})

module.exports = router;