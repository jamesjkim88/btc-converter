const express = require('express');
const router = express.Router();
const btcCtrl = require('../../controllers/BTCRate');

router.get('/:crypto/:currency', btcCtrl.getBTCRate);

module.exports = router;