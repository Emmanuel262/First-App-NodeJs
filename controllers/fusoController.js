/* eslint-disable */

const Fuso = require('../models/fusoModel');
const factory = require('./handlerFactory');

exports.fusoZose = factory.getAll(Fuso);
exports.fusoImwe = factory.getOne(Fuso, { path: 'reviews' });
exports.remaFuso = factory.createOne(Fuso);
exports.hinduraFuso = factory.updateOne(Fuso);
exports.sibaFuso = factory.deleteOne(Fuso);
