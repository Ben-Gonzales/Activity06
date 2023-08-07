const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
    storeName:{
        type: String
    },
    location:{
        type: String
    },
    openHours:{
        type: String
    },
    closingHours:{
        type: String
    },
    businessDays:{
        type: [String]
    }
})

module.exports = mongoose.model('store', storeSchema);