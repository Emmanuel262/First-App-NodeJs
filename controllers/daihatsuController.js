/* eslint-disable */

const Daihatsu = require('../models/daihatsuModel');
const factory = require('./handlerFactory');

exports.daihatsuZose = factory.getAll(Daihatsu);
exports.daihatsuImwe = factory.getOne(Daihatsu, { path: 'reviews' });
exports.remaDaihatsu = factory.createOne(Daihatsu);
exports.hinduraDaihatsu = factory.updateOne(Daihatsu);
exports.sibaDaihatsu = factory.deleteOne(Daihatsu);
