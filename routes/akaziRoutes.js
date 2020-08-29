/* eslint-disable */

const express = require('express');
const akaziController = require('../controllers/akaziController');
// const authController = require('../controllers/authController');
// const reviewRouter = require('../routes/reviewRoutes');

const router = express.Router();

router.route('/').get(akaziController.akaziKose).post(akaziController.remaAkazi);

router
	.route('/:id')
	.get(akaziController.akaziKamwe)
	.patch(akaziController.hinduraAkazi)
	.delete(akaziController.sibaAkazi);

module.exports = router;
