/* eslint-disable */

const Amakamyo = require('../models/amakamyoModel');
const factory = require('./handlerFactory');

exports.amakamyoYose = factory.getAll(Amakamyo);
exports.ikamyoRimwe = factory.getOne(Amakamyo, { path: 'reviews' });
exports.remaIkamyo = factory.createOne(Amakamyo);
exports.hinduraIkamyo = factory.updateOne(Amakamyo);
exports.sibaIkamyo = factory.deleteOne(Amakamyo);
