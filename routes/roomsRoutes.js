/* eslint-disable */

const express = require('express');
const roomsController = require('../controllers/roomsController');
// const authController = require('../controllers/authController');
// const reviewRouter = require('../routes/reviewRoutes');

const router = express.Router();

router.route('/').get(roomsController.roomsZose).post(roomsController.remaRoom);

router.route('/:id').get(roomsController.roomImwe).patch(roomsController.hinduraRoom).delete(roomsController.sibaRoom);

module.exports = router;
