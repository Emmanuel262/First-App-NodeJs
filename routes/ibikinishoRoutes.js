/* eslint-disable */

const express = require('express');
const ibikinishoController = require('../controllers/ibikinishoController');
// const authController = require('../controllers/authController');
// const reviewRouter = require('../routes/reviewRoutes');

const router = express.Router();

router.route('/').get(ibikinishoController.IbikinishoByose).post(ibikinishoController.remaIgikinisho);

router
	.route('/:id')
	.get(ibikinishoController.igikinishoKimwe)
	.patch(ibikinishoController.hinduraIkiginisho)
	.delete(ibikinishoController.sibaIkiginisho);

module.exports = router;
