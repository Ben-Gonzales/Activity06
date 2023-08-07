const avatarModel = require('../models/Avatar');

const getAvatars = (req, res) => {
    avatarModel.find()
    .then(data => {
        res.send(data);
    })
}

const getAvatar = (req, res) => {
    avatarModel.findOne({_id: req.params.id})
    .then(data => { res.send(data);
    })
}

const createAvatar = (req,res) => {
    const newAvatar = new avatarModel({
        class: req.body.class,
        intelligence: req.body.intelligence,
        dexterity: req.body.dexterity,
        wisdom: req.body.wisdom,
        charisma: req.body.charisma,
        strength: req.body.strength,
        constitution: req.body.constitution,
    })
    newAvatar.save();
}
module.exports = {
    getAvatars,
    getAvatar,
    createAvatar,
}