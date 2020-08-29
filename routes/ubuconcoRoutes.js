/* eslint-disable */

const express = require('express');
const ubuconcoController = require('../controllers/ubuconcoController');
// const authController = require('../controllers/authController');
// const reviewRouter = require('../routes/reviewRoutes');

const router = express.Router();

router.route('/').get(ubuconcoController.ubuconcoBwose).post(ubuconcoController.remaUbuconco);

router
	.route('/:id')
	.get(ubuconcoController.UbuconcoKamwe)
	.patch(ubuconcoController.hinduraUbuconco)
	.delete(ubuconcoController.sibaUbuconco);

module.exports = router;
