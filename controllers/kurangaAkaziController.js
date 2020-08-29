/* eslint-disable */

const KurangaAkazi = require('../models/kurangaAkaziModel');
const factory = require('./handlerFactory');

exports.kurangaAkaziKose = factory.getAll(KurangaAkazi);
exports.akaziKamwe = factory.getOne(KurangaAkazi, { path: 'reviews' });
exports.remaImenyesaAkazi = factory.createOne(KurangaAkazi);
exports.hinduraImenyeshaAkazi = factory.updateOne(KurangaAkazi);
exports.sibaImenyeshaAkazi = factory.deleteOne(KurangaAkazi);
