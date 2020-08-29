/* eslint-disable */

const express = require('express');
const inzuriController = require('../controllers/inzuriController');
// const authController = require('../controllers/authController');
// const reviewRouter = require('../routes/reviewRoutes');

const router = express.Router();

router.route('/').get(inzuriController.InzuriZose).post(inzuriController.remaUrwuri);

router
	.route('/:id')
	.get(inzuriController.urwuriRumwe)
	.patch(inzuriController.hinduraUrwuri)
	.delete(inzuriController.sibaUrwuri);

module.exports = router;
