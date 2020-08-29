/* eslint-disable */

const express = require('express');
const ImirimaController = require('../controllers/imirimaController');
// const authController = require('../controllers/authController');
// const reviewRouter = require('../routes/reviewRoutes');

const router = express.Router();

router.route('/').get(ImirimaController.imirimaYose).post(ImirimaController.remaUmurima);

router
	.route('/:id')
	.get(ImirimaController.UmurimaUmwe)
	.patch(ImirimaController.hinduraUmurima)
	.delete(ImirimaController.sibaUmurima);

module.exports = router;
