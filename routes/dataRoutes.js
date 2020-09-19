/* eslint-disable */

const express = require('express');
const abikoreraController = require('../controllers/abikoreraController');
// const authController = require('../controllers/authController');
// const reviewRouter = require('../routes/reviewRoutes');

const router = express.Router();

router
  .route('/')
  .get(abikoreraController.abikoreraBose)
  .post(abikoreraController.remaUwikorera);

router
  .route('/:id')
  .get(abikoreraController.Uwikorera)
  .patch(abikoreraController.hinduraUwikorera)
  .delete(abikoreraController.sibaUwikorera);

module.exports = router;
