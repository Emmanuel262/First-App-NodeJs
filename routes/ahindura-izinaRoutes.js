/* eslint-disable */

const express = require('express');
const izinaController = require('../controllers/ahindura-izinaController');
// const authController = require('../controllers/authController');
// const reviewRouter = require('../routes/reviewRoutes');

const router = express.Router();

router.route('/').get(izinaController.amazinaYose).post(izinaController.remaIzina);

router
	.route('/:id')
	.get(izinaController.izinaRimwe)
	.patch(izinaController.hinduraIzina)
	.delete(izinaController.sibaIzina);

module.exports = router;
