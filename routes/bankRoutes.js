/* eslint-disable */

const express = require('express');
const bankController = require('../controllers/bankController');
// const authController = require('../controllers/authController');
// const reviewRouter = require('../routes/reviewRoutes');

const router = express.Router();

router.route('/').get(bankController.BankZose).post(bankController.remaBank);

router.route('/:id').get(bankController.BankImwe).patch(bankController.hinduraBank).delete(bankController.sibaBank);

module.exports = router;
