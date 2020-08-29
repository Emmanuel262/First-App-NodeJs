/* eslint-disable */

const express = require('express');
const arangishaController = require('../controllers/arangishaController');
// const authController = require('../controllers/authController');
// const reviewRouter = require('../routes/reviewRoutes');

const router = express.Router();

router.route('/').get(arangishaController.arangishaYose).post(arangishaController.remaItangazo);

router
	.route('/:id')
	.get(arangishaController.itangazo)
	.patch(arangishaController.hinduraItangazo)
	.delete(arangishaController.sibaItangazo);

module.exports = router;
