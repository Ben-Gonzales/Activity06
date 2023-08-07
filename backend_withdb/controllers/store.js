const storeModel = require('../models/Store');

const getStores = (req, res) => {
    storeModel.find()
    .then(data => {
        res.send(data);
    })
}

const getStore = (req, res) => {
    storeModel.findOne({_id: req.params.id})
    .then(data => { res.send(data);
    })
}

const createStore = (req,res) => {
    const newStore = new storeModel({
        storeName: req.body.storeName,
        location: req.body.location,
        openHours: req.body.openHours,
        closingHours: req.body.closingHours,
        businessDays: req.body.businessDays,
    });
    newStore.save();
}
module.exports = {
    getStores,
    getStore,
    createStore,
}