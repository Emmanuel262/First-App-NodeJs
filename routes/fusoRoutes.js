/* eslint-disable */

const express = require('express');
const fusoController = require('../controllers/fusoController');
// const authController = require('../controllers/authController');
// const reviewRouter = require('../routes/reviewRoutes');

const router = express.Router();

router.route('/').get(fusoController.fusoZose).post(fusoController.remaFuso);

router.route('/:id').get(fusoController.fusoImwe).patch(fusoController.hinduraFuso).delete(fusoController.sibaFuso);

module.exports = router;
