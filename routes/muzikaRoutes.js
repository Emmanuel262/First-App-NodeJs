/* eslint-disable */

const express = require('express');
const muzikaController = require('../controllers/muzikaController');
// const authController = require('../controllers/authController');
// const reviewRouter = require('../routes/reviewRoutes');

const router = express.Router();

router.route('/').get(muzikaController.muzikaZose).post(muzikaController.remaMuzika);

router
	.route('/:id')
	.get(muzikaController.muzikaImwe)
	.patch(muzikaController.hinduraMuzika)
	.delete(muzikaController.sibaMuzika);

module.exports = router;
