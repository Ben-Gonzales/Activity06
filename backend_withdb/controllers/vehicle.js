const vehicleModel = require('../models/Vehicle');

const getVehicles = (req, res) => {
    vehicleModel.find()
    .then(data => {
        res.send(data);
    })
}

const getVehicle = (req, res) => {
    vehicleModel.findOne()
    .then(data => { res.send(data);
    })
}

const createVehicle = (req,res) => {
    const newVehicle = new vehicleModel({
        company: req.body.company,
        yearModel: req.body.yearModel,
        modelType: req.body.modelType,
    });
    newVehicle.save();
}
module.exports = {
    getVehicles,
    getVehicle,
    createVehicle,
}