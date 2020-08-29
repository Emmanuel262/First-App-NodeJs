/* eslint-disable */

const Amatungo = require('../models/amatungoModel');
const factory = require('./handlerFactory');

exports.amatungoYose = factory.getAll(Amatungo);
exports.ItungoRimwe = factory.getOne(Amatungo, { path: 'reviews' });
exports.remaItungo = factory.createOne(Amatungo);
exports.hinduraItungo = factory.updateOne(Amatungo);
exports.sibaItungo = factory.deleteOne(Amatungo);
