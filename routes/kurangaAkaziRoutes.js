/* eslint-disable */

const express = require('express');
const kurangaAkaziController = require('../controllers/kurangaAkaziController');
// const authController = require('../controllers/authController');
// const reviewRouter = require('../routes/reviewRoutes');

const router = express.Router();

router.route('/').get(kurangaAkaziController.kurangaAkaziKose).post(kurangaAkaziController.remaImenyesaAkazi);

router
	.route('/:id')
	.get(kurangaAkaziController.akaziKamwe)
	.patch(kurangaAkaziController.hinduraImenyeshaAkazi)
	.delete(kurangaAkaziController.sibaImenyeshaAkazi);

module.exports = router;
