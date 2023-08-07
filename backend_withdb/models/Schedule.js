const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
    courseCode:{
        type: String
    },
    start:{
        type: String
    },
    end:{
        type: String
    },
    daySchedule:{
        type: [String]
    }
})

module.exports = mongoose.model('schedule', scheduleSchema);