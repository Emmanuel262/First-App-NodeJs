/* eslint-disable */

const KumenyekanishaImpuguke = require('../models/kumenyekanishaImpugukeModel');
const factory = require('./handlerFactory');

exports.kumenyekanishaImpugukeZose = factory.getAll(KumenyekanishaImpuguke);
exports.impugukeImwe = factory.getOne(KumenyekanishaImpuguke, { path: 'reviews' });
exports.remaImpuguke = factory.createOne(KumenyekanishaImpuguke);
exports.hinduraImpuguke = factory.updateOne(KumenyekanishaImpuguke);
exports.sibaImpuguke = factory.deleteOne(KumenyekanishaImpuguke);
