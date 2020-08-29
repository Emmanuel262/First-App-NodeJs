/* eslint-disable */

const express = require('express');
const IbibanzaController = require('../controllers/ibibanzaController');
// const authController = require('../controllers/authController');
// const reviewRouter = require('../routes/reviewRoutes');

const router = express.Router();

router.route('/').get(IbibanzaController.ibibanzaByose).post(IbibanzaController.remaIkibanza);

router
	.route('/:id')
	.get(IbibanzaController.ikibanzaKimwe)
	.patch(IbibanzaController.hinduraIkibanza)
	.delete(IbibanzaController.sibaIkibanza);

module.exports = router;
