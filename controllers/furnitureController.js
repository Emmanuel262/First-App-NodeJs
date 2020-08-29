/* eslint-disable */

const Furniture = require('../models/furnitureModel');
const factory = require('./handlerFactory');

exports.furnitureZose = factory.getAll(Furniture);
exports.furnitureImwe = factory.getOne(Furniture, { path: 'reviews' });
exports.remaFurniture = factory.createOne(Furniture);
exports.hinduraFurniture = factory.updateOne(Furniture);
exports.sibaFurniture = factory.deleteOne(Furniture);
