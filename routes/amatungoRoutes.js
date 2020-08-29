/* eslint-disable */

const express = require('express');
const amatungoController = require('../controllers/amatungoController');
// const authController = require('../controllers/authController');
// const reviewRouter = require('../routes/reviewRoutes');

const router = express.Router();

router.route('/').get(amatungoController.amatungoYose).post(amatungoController.remaItungo);

router
	.route('/:id')
	.get(amatungoController.ItungoRimwe)
	.patch(amatungoController.hinduraItungo)
	.delete(amatungoController.sibaItungo);

module.exports = router;
