/* eslint-disable */

const Abikorera = require('../models/abikoreraModel');
const factory = require('./handlerFactory');

exports.abikoreraBose = factory.getAll(Abikorera);
exports.Uwikorera = factory.getOne(Abikorera, { path: 'reviews' });
exports.remaUwikorera = factory.createOne(Abikorera);
exports.hinduraUwikorera = factory.updateOne(Abikorera);
exports.sibaUwikorera = factory.deleteOne(Abikorera);
