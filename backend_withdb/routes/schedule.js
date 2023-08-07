const express = require('express');

const ScheduleController = require('../controllers/schedule');

const router = express.Router();

router.get('/schedules', (req, res) => {
    ScheduleController.getSchedules(req, res);
})

router.get('/schedules/:id', (req, res) => {
    ScheduleController.getSchedule(req, res);
})

router.post('/schedules', (req,res) => {
    ScheduleController.createSchedule(req,res);
})

module.exports = router;