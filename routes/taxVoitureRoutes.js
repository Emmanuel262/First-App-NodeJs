/* eslint-disable */

const express = require('express');
const taxVoitureController = require('../controllers/taxVoitureController');
// const authController = require('../controllers/authController');
// const reviewRouter = require('../routes/reviewRoutes');

const router = express.Router();

router.route('/').get(taxVoitureController.taxZose).post(taxVoitureController.remaTaxVoiture);

router
	.route('/:id')
	.get(taxVoitureController.TaxVoitureImwe)
	.patch(taxVoitureController.hinduraTaxVoiture)
	.delete(taxVoitureController.sibaTaxVoiture);

module.exports = router;
