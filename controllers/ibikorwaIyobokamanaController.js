/* eslint-disable */

const Iyobokamana = require('../models/ibikorwaIyobokamanaModel');
const factory = require('./handlerFactory');

exports.IyobokamanaRyose = factory.getAll(Iyobokamana);
exports.IyobokamanaRimwe = factory.getOne(Iyobokamana, { path: 'reviews' });
exports.remaIyobokamana = factory.createOne(Iyobokamana);
exports.hinduraIyobokamana = factory.updateOne(Iyobokamana);
exports.sibaIyobokamana = factory.deleteOne(Iyobokamana);
