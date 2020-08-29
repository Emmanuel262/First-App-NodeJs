/* eslint-disable */

const Ngo = require('../models/ngoModel');
const factory = require('./handlerFactory');

exports.ngoYose = factory.getAll(Ngo);
exports.ngoImwe = factory.getOne(Ngo, { path: 'reviews' });
exports.remaNgo = factory.createOne(Ngo);
exports.hinduraNgo = factory.updateOne(Ngo);
exports.sibaNgo = factory.deleteOne(Ngo);
