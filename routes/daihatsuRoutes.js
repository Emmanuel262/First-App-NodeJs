/* eslint-disable */

const express = require('express');
const daihatsuController = require('../controllers/daihatsuController');
// const authController = require('../controllers/authController');
// const reviewRouter = require('../routes/reviewRoutes');

const router = express.Router();

router.route('/').get(daihatsuController.daihatsuZose).post(daihatsuController.remaDaihatsu);

router
	.route('/:id')
	.get(daihatsuController.daihatsuImwe)
	.patch(daihatsuController.hinduraDaihatsu)
	.delete(daihatsuController.sibaDaihatsu);

module.exports = router;
