/* eslint-disable */

const Inzuri = require('../models/inzuriModel');
const factory = require('./handlerFactory');

exports.InzuriZose = factory.getAll(Inzuri);
exports.urwuriRumwe = factory.getOne(Inzuri, { path: 'reviews' });
exports.remaUrwuri = factory.createOne(Inzuri);
exports.hinduraUrwuri = factory.updateOne(Inzuri);
exports.sibaUrwuri = factory.deleteOne(Inzuri);
