/* eslint-disable */

const Ibiribwa = require('../models/ibiribwaModel');
const factory = require('./handlerFactory');

exports.IbiribwaByose = factory.getAll(Ibiribwa);
exports.ikiribwaKimwe = factory.getOne(Ibiribwa, { path: 'reviews' });
exports.remaIkiribwa = factory.createOne(Ibiribwa);
exports.hinduraIkiribwa = factory.updateOne(Ibiribwa);
exports.sibaIkiribwa = factory.deleteOne(Ibiribwa);
