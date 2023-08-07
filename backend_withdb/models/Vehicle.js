const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    company:{
        type: String
    },
    yearModel:{
        type: String
    },
    modelType:{
        type: String
    }
})

module.exports = mongoose.model('vehicle', vehicleSchema);