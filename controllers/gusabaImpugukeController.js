/* eslint-disable */

const GusabaImpuguke = require('../models/gusabaImpugukeModel');
const factory = require('./handlerFactory');

exports.gusabaImpugukeZose = factory.getAll(GusabaImpuguke);
exports.impuguke = factory.getOne(GusabaImpuguke, { path: 'reviews' });
exports.remaImpuguke = factory.createOne(GusabaImpuguke);
exports.hinduraImpuguke = factory.updateOne(GusabaImpuguke);
exports.sibaImpuguke = factory.deleteOne(GusabaImpuguke);
