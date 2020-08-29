/* eslint-disable */

const express = require('express');
const bookingContrroller = require('../controllers/bookingController');
const authController = require('../controllers/authController');

const router = express.Router();
router.use(authController.protect);

router.get('/checkout-session/:tourId', bookingContrroller.getCheckoutSession);

router.use(authController.restrictTo('admin', 'lead-guide'));
router.route('/').get(bookingContrroller.getAllBooking).post(bookingContrroller.createBooking);

router
	.route('/:id')
	.get(bookingContrroller.getBooking)
	.patch(bookingContrroller.updateBooking)
	.delete(bookingContrroller.deleteBooking);

module.exports = router;
