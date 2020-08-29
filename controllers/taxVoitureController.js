/* eslint-disable */

const TaxVoiture = require('../models/taxVoitureModel');
const factory = require('./handlerFactory');

exports.taxZose = factory.getAll(TaxVoiture);
exports.TaxVoitureImwe = factory.getOne(TaxVoiture, { path: 'reviews' });
exports.remaTaxVoiture = factory.createOne(TaxVoiture);
exports.hinduraTaxVoiture = factory.updateOne(TaxVoiture);
exports.sibaTaxVoiture = factory.deleteOne(TaxVoiture);
