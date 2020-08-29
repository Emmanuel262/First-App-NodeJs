/* eslint-disable */

const express = require('express');
const ibiribwaController = require('../controllers/ibiribwaController');
// const authController = require('../controllers/authController');
// const reviewRouter = require('../routes/reviewRoutes');

const router = express.Router();

router.route('/').get(ibiribwaController.IbiribwaByose).post(ibiribwaController.remaIkiribwa);

router
	.route('/:id')
	.get(ibiribwaController.ikiribwaKimwe)
	.patch(ibiribwaController.hinduraIkiribwa)
	.delete(ibiribwaController.sibaIkiribwa);

module.exports = router;
