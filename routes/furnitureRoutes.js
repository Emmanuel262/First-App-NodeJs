/* eslint-disable */

const express = require('express');
const furnitureController = require('../controllers/furnitureController');
// const authController = require('../controllers/authController');
// const reviewRouter = require('../routes/reviewRoutes');

const router = express.Router();

router.route('/').get(furnitureController.furnitureZose).post(furnitureController.remaFurniture);

router
	.route('/:id')
	.get(furnitureController.furnitureImwe)
	.patch(furnitureController.hinduraFurniture)
	.delete(furnitureController.sibaFurniture);

module.exports = router;
