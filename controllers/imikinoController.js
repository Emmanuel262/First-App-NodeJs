/* eslint-disable */

const Imikino = require('../models/imikinoModel');
const factory = require('./handlerFactory');

exports.imikinoYose = factory.getAll(Imikino);
exports.umukinoUmwe = factory.getOne(Imikino, { path: 'reviews' });
exports.remaUmukino = factory.createOne(Imikino);
exports.hinduraUmukino = factory.updateOne(Imikino);
exports.sibaUmukino = factory.deleteOne(Imikino);
