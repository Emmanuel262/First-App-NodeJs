/* eslint-disable */

const Bank = require('../models/bankModel');
const factory = require('./handlerFactory');

exports.BankZose = factory.getAll(Bank);
exports.BankImwe = factory.getOne(Bank, { path: 'reviews' });
exports.remaBank = factory.createOne(Bank);
exports.hinduraBank = factory.updateOne(Bank);
exports.sibaBank = factory.deleteOne(Bank);
