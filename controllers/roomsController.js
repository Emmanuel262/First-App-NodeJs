/* eslint-disable */

const Rooms = require('../models/roomsModel');
const factory = require('./handlerFactory');

exports.roomsZose = factory.getAll(Rooms);
exports.roomImwe = factory.getOne(Rooms, { path: 'reviews' });
exports.remaRoom = factory.createOne(Rooms);
exports.hinduraRoom = factory.updateOne(Rooms);
exports.sibaRoom = factory.deleteOne(Rooms);
