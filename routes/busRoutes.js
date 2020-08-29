/* eslint-disable */

const express = require('express');
const busController = require('../controllers/busController');
// const authController = require('../controllers/authController');
// const reviewRouter = require('../routes/reviewRoutes');

const router = express.Router();

router.route('/').get(busController.busZose).post(busController.remaBus);

router.route('/:id').get(busController.busImwe).patch(busController.hinduraBus).delete(busController.sibaBus);

module.exports = router;
