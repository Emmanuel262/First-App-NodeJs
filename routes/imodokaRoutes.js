/* eslint-disable */

const express = require('express');
const imodokaController = require('../controllers/imodokaController');
// const authController = require('../controllers/authController');
// const reviewRouter = require('../routes/reviewRoutes');

const router = express.Router();

router.route('/').get(imodokaController.imodokaZose).post(imodokaController.remaImodoka);

router
	.route('/:id')
	.get(imodokaController.imodokaImwe)
	.patch(imodokaController.hinduraImodoka)
	.delete(imodokaController.sibaImodoka);

module.exports = router;
