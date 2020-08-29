/* eslint-disable */

const express = require('express');
const ibigoController = require('../controllers/ibigoController');
// const authController = require('../controllers/authController');
// const reviewRouter = require('../routes/reviewRoutes');

const router = express.Router();

router.route('/').get(ibigoController.ibigoByose).post(ibigoController.remaIkigo);

router
	.route('/:id')
	.get(ibigoController.ikigoKimwe)
	.patch(ibigoController.hinduraIkigo)
	.delete(ibigoController.sibaIkigo);

module.exports = router;
