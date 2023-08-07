const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({
    brand:{
        type: String
    },
    deviceType:{
        type: String
    },
    model:{
        type: String
    }
})

module.exports = mongoose.model('device', deviceSchema);