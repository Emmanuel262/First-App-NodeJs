/* eslint-disable */

const Ibikoresho = require('../models/ibikoreshoModel');
const factory = require('./handlerFactory');

exports.ibikoreshoByose = factory.getAll(Ibikoresho);
exports.igikoreshoKimwe = factory.getOne(Ibikoresho, { path: 'reviews' });
exports.remaIgikoresho = factory.createOne(Ibikoresho);
exports.hinduraIgikoresho = factory.updateOne(Ibikoresho);
exports.sibaIgikoresho = factory.deleteOne(Ibikoresho);
