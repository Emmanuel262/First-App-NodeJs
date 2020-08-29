/* eslint-disable */

const express = require('express');
const apartmentController = require('../controllers/apartmentController');
// const authController = require('../controllers/authController');
// const reviewRouter = require('../routes/reviewRoutes');

const router = express.Router();

router.route('/').get(apartmentController.apartmentZose).post(apartmentController.remaApartment);

router
	.route('/:id')
	.get(apartmentController.apartmentImwe)
	.patch(apartmentController.hinduraApartment)
	.delete(apartmentController.sibaApartment);

module.exports = router;
