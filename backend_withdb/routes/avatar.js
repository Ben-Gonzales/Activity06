const express = require('express');

const AvatarController = require('../controllers/avatar');

const router = express.Router();

router.get('/avatars', (req, res) => {
    AvatarController.getAvatars(req, res);
})

router.get('/avatars/:id', (req, res) => {
    AvatarController.getAvatar(req, res);
})

router.post('/avatars', (req,res) => {
    AvatarController.createAvatar(req,res);
})

module.exports = router;