/* eslint-disable */

const express = require('express');
const amakamyoController = require('../controllers/amakamyoControler');
// const authController = require('../controllers/authController');
// const reviewRouter = require('../routes/reviewRoutes');

const router = express.Router();

router.route('/').get(amakamyoController.amakamyoYose).post(amakamyoController.remaIkamyo);

router
	.route('/:id')
	.get(amakamyoController.ikamyoRimwe)
	.patch(amakamyoController.hinduraIkamyo)
	.delete(amakamyoController.sibaIkamyo);

module.exports = router;
