const express = require('express');

const StoreController = require('../controllers/store');

const router = express.Router();

router.get('/stores', (req, res) => {
    StoreController.getStores(req, res);
})

router.get('/stores/:id', (req, res) => {
    StoreController.getStore(req, res);
})

router.post('/stores', (req,res) => {
    StoreController.createStore(req,res);
})

module.exports = router;