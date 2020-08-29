/* eslint-disable */

const Akazi = require('../models/akaziModel');
const factory = require('./handlerFactory');

exports.akaziKose = factory.getAll(Akazi);
exports.akaziKamwe = factory.getOne(Akazi, { path: 'reviews' });
exports.remaAkazi = factory.createOne(Akazi);
exports.hinduraAkazi = factory.updateOne(Akazi);
exports.sibaAkazi = factory.deleteOne(Akazi);
