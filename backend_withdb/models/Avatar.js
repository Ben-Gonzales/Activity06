const mongoose = require('mongoose');

const avatarSchema = new mongoose.Schema({
    class:{
        type: String
    },
    intelligence:{
        type: Number
    },
    dexterity:{
        type: Number
    },
    wisdom:{
        type: Number
    },
    charisma:{
        type: Number
    },
    strength:{
        type: Number
    },
    constitution:{
        type: Number
    }
})

module.exports = mongoose.model('avatar', avatarSchema);