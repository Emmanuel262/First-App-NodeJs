/* eslint-disable */

const express = require('express');
const ibikorwaIyobokamanaController = require('../controllers/ibikorwaIyobokamanaController');
// const authController = require('../controllers/authController');
// const reviewRouter = require('../routes/reviewRoutes');

const router = express.Router();

router
	.route('/')
	.get(ibikorwaIyobokamanaController.IyobokamanaRyose)
	.post(ibikorwaIyobokamanaController.remaIyobokamana);

router
	.route('/:id')
	.get(ibikorwaIyobokamanaController.IyobokamanaRimwe)
	.patch(ibikorwaIyobokamanaController.hinduraIyobokamana)
	.delete(ibikorwaIyobokamanaController.sibaIyobokamana);

module.exports = router;
