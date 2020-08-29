/* eslint-disable */

const express = require('express');
const gusabaImpugukeController = require('../controllers/gusabaImpugukeController');
// const authController = require('../controllers/authController');
// const reviewRouter = require('../routes/reviewRoutes');

const router = express.Router();

router.route('/').get(gusabaImpugukeController.gusabaImpugukeZose).post(gusabaImpugukeController.remaImpuguke);

router
	.route('/:id')
	.get(gusabaImpugukeController.impuguke)
	.patch(gusabaImpugukeController.hinduraImpuguke)
	.delete(gusabaImpugukeController.sibaImpuguke);

module.exports = router;
