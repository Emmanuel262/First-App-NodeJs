/* eslint-disable */

const express = require('express');
const motoController = require('../controllers/motoController');
// const authController = require('../controllers/authController');
// const reviewRouter = require('../routes/reviewRoutes');

const router = express.Router();

router.route('/').get(motoController.motoZose).post(motoController.remaMoto);

router.route('/:id').get(motoController.motoImwe).patch(motoController.hinduraMoto).delete(motoController.sibaMoto);

module.exports = router;
