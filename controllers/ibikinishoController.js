/* eslint-disable */

const Ibikinisho = require('../models/ibikinishoModel');
const factory = require('./handlerFactory');

exports.IbikinishoByose = factory.getAll(Ibikinisho);
exports.igikinishoKimwe = factory.getOne(Ibikinisho, { path: 'reviews' });
exports.remaIgikinisho = factory.createOne(Ibikinisho);
exports.hinduraIkiginisho = factory.updateOne(Ibikinisho);
exports.sibaIkiginisho = factory.deleteOne(Ibikinisho);
