/* eslint-disable */

const Apartment = require('../models/apartment');
const factory = require('./handlerFactory');

exports.apartmentZose = factory.getAll(Apartment);
exports.apartmentImwe = factory.getOne(Apartment, { path: 'reviews' });
exports.remaApartment = factory.createOne(Apartment);
exports.hinduraApartment = factory.updateOne(Apartment);
exports.sibaApartment = factory.deleteOne(Apartment);
