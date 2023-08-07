const deviceModel = require('../models/Device');

const getDevices = (req, res) => {
    deviceModel.find()
    .then(data => {
        res.send(data);
    })
}

const getDevice = (req, res) => {
    deviceModel.findOne({_id: req.params.id})
    .then(data => { res.send(data);
    })
}

const createDevice = (req, res) => {
    const newDevice = new deviceModel({
        brand: req.body.brand,
        deviceType: req.body.deviceType,
        model: req.body.model,
    });
    newDevice.save();
}
module.exports = {
    getDevices,
    getDevice,
    createDevice,
}