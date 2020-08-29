/* eslint-disable */

const Ubuconco = require('../models/ubuconcoModel');
const factory = require('./handlerFactory');

exports.ubuconcoBwose = factory.getAll(Ubuconco);
exports.UbuconcoKamwe = factory.getOne(Ubuconco, { path: 'reviews' });
exports.remaUbuconco = factory.createOne(Ubuconco);
exports.hinduraUbuconco = factory.updateOne(Ubuconco);
exports.sibaUbuconco = factory.deleteOne(Ubuconco);
