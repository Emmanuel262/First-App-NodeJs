/* eslint-disable */

const express = require('express');
const kumenyekanishaImpugukeController = require('../controllers/kumenyekanishaImpugukeController');
// const authController = require('../controllers/authController');
// const reviewRouter = require('../routes/reviewRoutes');

const router = express.Router();

router
	.route('/')
	.get(kumenyekanishaImpugukeController.kumenyekanishaImpugukeZose)
	.post(kumenyekanishaImpugukeController.remaImpuguke);

router
	.route('/:id')
	.get(kumenyekanishaImpugukeController.impugukeImwe)
	.patch(kumenyekanishaImpugukeController.hinduraImpuguke)
	.delete(kumenyekanishaImpugukeController.sibaImpuguke);

module.exports = router;
