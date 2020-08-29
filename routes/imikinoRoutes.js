/* eslint-disable */

const express = require('express');
const imikinoController = require('../controllers/imikinoController');
// const authController = require('../controllers/authController');
// const reviewRouter = require('../routes/reviewRoutes');

const router = express.Router();

router.route('/').get(imikinoController.imikinoYose).post(imikinoController.remaUmukino);

router
	.route('/:id')
	.get(imikinoController.umukinoUmwe)
	.patch(imikinoController.hinduraUmukino)
	.delete(imikinoController.sibaUmukino);

module.exports = router;
