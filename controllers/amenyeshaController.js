/* eslint-disable */

const Amenyesha = require('../models/amenyeshaModel');
const factory = require('./handlerFactory');

exports.amenyeshaYose = factory.getAll(Amenyesha);
exports.itangazoRimwe = factory.getOne(Amenyesha, { path: 'reviews' });
exports.remaImenyesha = factory.createOne(Amenyesha);
exports.hinduraImenyesha = factory.updateOne(Amenyesha);
exports.sibaImenyesha = factory.deleteOne(Amenyesha);
