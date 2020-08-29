/* eslint-disable */

const express = require('express');
const ngoController = require('../controllers/ngoController');
// const authController = require('../controllers/authController');
// const reviewRouter = require('../routes/reviewRoutes');

const router = express.Router();

router.route('/').get(ngoController.ngoYose).post(ngoController.remaNgo);

router.route('/:id').get(ngoController.ngoImwe).patch(ngoController.hinduraNgo).delete(ngoController.sibaNgo);

module.exports = router;
