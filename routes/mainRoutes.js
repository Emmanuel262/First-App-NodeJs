/* eslint-disable */

const express = require('express');
const mainController = require('../controllers/mainController');
// const authController = require('../controllers/authController');
// const reviewRouter = require('../routes/reviewRoutes');

const router = express.Router();

router.route('/').get(mainController.listYose).post(mainController.remaList);

router.route('/:id').get(mainController.listImwe).patch(mainController.hinduraList).delete(mainController.sibaList);

module.exports = router;
