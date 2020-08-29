/* eslint-disable */

const express = require('express');
const amazuController = require('../controllers/amazuController');
// const authController = require('../controllers/authController');
// const reviewRouter = require('../routes/reviewRoutes');

const router = express.Router();

router.route('/').get(amazuController.amazuYose).post(amazuController.remaInzu);

router.route('/:id').get(amazuController.inzuImwe).patch(amazuController.hinduraInzu).delete(amazuController.sibaInzu);

module.exports = router;
