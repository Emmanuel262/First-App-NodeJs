/* eslint-disable */

const express = require('express');
const ibikoreshoController = require('../controllers/ibikoreshoController');
// const authController = require('../controllers/authController');
// const reviewRouter = require('../routes/reviewRoutes');

const router = express.Router();

router.route('/').get(ibikoreshoController.ibikoreshoByose).post(ibikoreshoController.remaIgikoresho);

router
	.route('/:id')
	.get(ibikoreshoController.igikoreshoKimwe)
	.patch(ibikoreshoController.hinduraIgikoresho)
	.delete(ibikoreshoController.sibaIgikoresho);

module.exports = router;
