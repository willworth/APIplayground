const express = require('express');
const router = express.Router();
const bitcoinController = require('../controllers/bitcoinController');

router.get('/', (req, res) => res.render('index', {
    pageTitle : 'API TESTER'
}));



router.get('/bitcoin', bitcoinController.getBitcoin);
router.post('/bitcoin', bitcoinController.postBitcoin);







module.exports = router;