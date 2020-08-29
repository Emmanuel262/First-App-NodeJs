/* eslint-disable */

const express = require('express');
const amenyeshaController = require('../controllers/amenyeshaController');
// const authController = require('../controllers/authController');
// const reviewRouter = require('../routes/reviewRoutes');

const router = express.Router();

router.route('/').get(amenyeshaController.amenyeshaYose).post(amenyeshaController.remaImenyesha);

router
	.route('/:id')
	.get(amenyeshaController.itangazoRimwe)
	.patch(amenyeshaController.hinduraImenyesha)
	.delete(amenyeshaController.sibaImenyesha);

module.exports = router;
