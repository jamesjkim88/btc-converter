const express = require('express');
const router = express.Router();
const btcCtrl = require('../../controllers/BTCRate');

router.get('/', btcCtrl.getBTCRate);

module.exports = router;