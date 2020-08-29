/* eslint-disable */

const Izina = require('../models/ahindura-izinaModel');
const factory = require('./handlerFactory');

exports.amazinaYose = factory.getAll(Izina);
exports.izinaRimwe = factory.getOne(Izina, { path: 'reviews' });
exports.remaIzina = factory.createOne(Izina);
exports.hinduraIzina = factory.updateOne(Izina);
exports.sibaIzina = factory.deleteOne(Izina);
