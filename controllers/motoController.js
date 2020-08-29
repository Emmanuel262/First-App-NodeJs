/* eslint-disable */

const Moto = require('../models/motoModel');
const factory = require('./handlerFactory');

exports.motoZose = factory.getAll(Moto);
exports.motoImwe = factory.getOne(Moto, { path: 'reviews' });
exports.remaMoto = factory.createOne(Moto);
exports.hinduraMoto = factory.updateOne(Moto);
exports.sibaMoto = factory.deleteOne(Moto);
