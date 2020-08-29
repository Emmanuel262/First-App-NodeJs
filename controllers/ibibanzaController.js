/* eslint-disable */

const Ibibanza = require('../models/ibibanzaModel');
const factory = require('./handlerFactory');

exports.ibibanzaByose = factory.getAll(Ibibanza);
exports.ikibanzaKimwe = factory.getOne(Ibibanza, { path: 'reviews' });
exports.remaIkibanza = factory.createOne(Ibibanza);
exports.hinduraIkibanza = factory.updateOne(Ibibanza);
exports.sibaIkibanza = factory.deleteOne(Ibibanza);
