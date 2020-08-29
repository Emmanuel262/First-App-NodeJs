/* eslint-disable */

const Ibigo = require('../models/ibigoModel');
const factory = require('./handlerFactory');

exports.ibigoByose = factory.getAll(Ibigo);
exports.ikigoKimwe = factory.getOne(Ibigo, { path: 'reviews' });
exports.remaIkigo = factory.createOne(Ibigo);
exports.hinduraIkigo = factory.updateOne(Ibigo);
exports.sibaIkigo = factory.deleteOne(Ibigo);
