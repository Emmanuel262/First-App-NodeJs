/* eslint-disable */

const Imodoka = require('../models/imodokaModel');
const factory = require('./handlerFactory');

exports.imodokaZose = factory.getAll(Imodoka);
exports.imodokaImwe = factory.getOne(Imodoka, { path: 'reviews' });
exports.remaImodoka = factory.createOne(Imodoka);
exports.hinduraImodoka = factory.updateOne(Imodoka);
exports.sibaImodoka = factory.deleteOne(Imodoka);
