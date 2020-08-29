/* eslint-disable */

const Amashyamba = require('../models/amashyambaModel');
const factory = require('./handlerFactory');

exports.amashyambaYose = factory.getAll(Amashyamba);
exports.ishyambaRimwe = factory.getOne(Amashyamba, { path: 'reviews' });
exports.remaIshyamba = factory.createOne(Amashyamba);
exports.hinduraIshyamba = factory.updateOne(Amashyamba);
exports.sibaIshyamba = factory.deleteOne(Amashyamba);
