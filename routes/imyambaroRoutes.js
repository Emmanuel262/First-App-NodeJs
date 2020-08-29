/* eslint-disable */

const express = require('express');
const imyambaroController = require('../controllers/imyambaroController');
// const authController = require('../controllers/authController');
// const reviewRouter = require('../routes/reviewRoutes');

const router = express.Router();

router.route('/').get(imyambaroController.imyambaroYose).post(imyambaroController.remaUmwambaro);

router
	.route('/:id')
	.get(imyambaroController.umwambaroUmwe)
	.patch(imyambaroController.hinduraUmwambaro)
	.delete(imyambaroController.sibaUmwambaro);

module.exports = router;
