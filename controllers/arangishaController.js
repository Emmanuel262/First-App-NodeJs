/* eslint-disable */

const Arangisha = require('../models/arangishaModel');
const factory = require('./handlerFactory');

exports.arangishaYose = factory.getAll(Arangisha);
exports.itangazo = factory.getOne(Arangisha, { path: 'reviews' });
exports.remaItangazo = factory.createOne(Arangisha);
exports.hinduraItangazo = factory.updateOne(Arangisha);
exports.sibaItangazo = factory.deleteOne(Arangisha);
