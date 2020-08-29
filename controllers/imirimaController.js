/* eslint-disable */

const Imirima = require('../models/imirimaModel');
const factory = require('./handlerFactory');

exports.imirimaYose = factory.getAll(Imirima);
exports.UmurimaUmwe = factory.getOne(Imirima, { path: 'reviews' });
exports.remaUmurima = factory.createOne(Imirima);
exports.hinduraUmurima = factory.updateOne(Imirima);
exports.sibaUmurima = factory.deleteOne(Imirima);
