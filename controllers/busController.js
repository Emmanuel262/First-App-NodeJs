/* eslint-disable */

const Bus = require('../models/busModel');
const factory = require('./handlerFactory');

exports.busZose = factory.getAll(Bus);
exports.busImwe = factory.getOne(Bus, { path: 'reviews' });
exports.remaBus = factory.createOne(Bus);
exports.hinduraBus = factory.updateOne(Bus);
exports.sibaBus = factory.deleteOne(Bus);
