/* eslint-disable */

const express = require('express');
const reviewContrroller = require('../controllers/reviewController');
const authController = require('../controllers/authController');

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route('/')
  .get(reviewContrroller.getAllReviews)
  .post(
    authController.restrictTo('user'),
    reviewContrroller.setTourUserId,
    reviewContrroller.createReview
  );

router
  .route('/:id')
  .get(reviewContrroller.getReview)
  .patch(
    authController.restrictTo('user', 'admin'),
    reviewContrroller.updateReview
  )
  .delete(
    authController.restrictTo('user', 'admin'),
    reviewContrroller.deleteReview
  );

module.exports = router;
