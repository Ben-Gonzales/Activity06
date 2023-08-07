const scheduleModel = require('../models/Schedule');

const getSchedules = (req, res) => {
    scheduleModel.find()
    .then(data => {
        res.send(data);
    })
}

const getSchedule = (req, res) => {
    scheduleModel.findOne({_id: req.params.id})
    .then(data => { res.send(data);
    })
}

const createSchedule = (req,res) => {
    const newSchedule = new scheduleModel({
        courseCode: req.body.courseCode,
        start: req.body.start,
        end: req.body.end,
        daySchedule: req.body.daySchedule,
    });
    newSchedule.save();
}
module.exports = {
    getSchedules,
    getSchedule,
    createSchedule,
}