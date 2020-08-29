/* eslint-disable */

const express = require('express');
const ubugeniController = require('../controllers/ubugeniController');
// const authController = require('../controllers/authController');
// const reviewRouter = require('../routes/reviewRoutes');

const router = express.Router();

router.route('/').get(ubugeniController.ubugeniBwose).post(ubugeniController.remaUbugeni);

router
	.route('/:id')
	.get(ubugeniController.ubugeniBumwe)
	.patch(ubugeniController.hinduraUbugeni)
	.delete(ubugeniController.sibaUbugeni);

module.exports = router;
