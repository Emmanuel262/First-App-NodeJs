/* eslint-disable */

const Muzika = require('../models/muzikaModel');
const factory = require('./handlerFactory');

exports.muzikaZose = factory.getAll(Muzika);
exports.muzikaImwe = factory.getOne(Muzika, { path: 'reviews' });
exports.remaMuzika = factory.createOne(Muzika);
exports.hinduraMuzika = factory.updateOne(Muzika);
exports.sibaMuzika = factory.deleteOne(Muzika);
