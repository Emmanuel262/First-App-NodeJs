/* eslint-disable */

const express = require('express');
const amashyambaController = require('../controllers/amashyambaController');
// const authController = require('../controllers/authController');
// const reviewRouter = require('../routes/reviewRoutes');

const router = express.Router();

router.route('/').get(amashyambaController.amashyambaYose).post(amashyambaController.remaIshyamba);

router
	.route('/:id')
	.get(amashyambaController.ishyambaRimwe)
	.patch(amashyambaController.hinduraIshyamba)
	.delete(amashyambaController.sibaIshyamba);

module.exports = router;
