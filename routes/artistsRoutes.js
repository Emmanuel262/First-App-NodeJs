/* eslint-disable */

const express = require('express');
const artistsController = require('../controllers/artistsController');
// const authController = require('../controllers/authController');
// const reviewRouter = require('../routes/reviewRoutes');

const router = express.Router();

router.route('/').get(artistsController.artistsZose).post(artistsController.remaArtists);

router
	.route('/:id')
	.get(artistsController.artistsImwe)
	.patch(artistsController.hinduraArtists)
	.delete(artistsController.sibaArtists);

module.exports = router;
