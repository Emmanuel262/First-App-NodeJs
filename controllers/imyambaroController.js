/* eslint-disable */

const Imyambaro = require('../models/imyambaroModel');
const factory = require('./handlerFactory');

exports.imyambaroYose = factory.getAll(Imyambaro);
exports.umwambaroUmwe = factory.getOne(Imyambaro, { path: 'reviews' });
exports.remaUmwambaro = factory.createOne(Imyambaro);
exports.hinduraUmwambaro = factory.updateOne(Imyambaro);
exports.sibaUmwambaro = factory.deleteOne(Imyambaro);
