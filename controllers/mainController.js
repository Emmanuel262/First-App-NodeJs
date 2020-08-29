/* eslint-disable */
// const Tour = require('../models/tourModel');
const Main = require('../models/mainModel');
const APIFeatures = require('../utils/apiFeatures');
const AppError = require('../utils/appError');
const factory = require('./handlerFactory');

exports.listYose = factory.getAll(Main);
exports.listImwe = factory.getOne(Main, { path: 'reviews' });
exports.remaList = factory.createOne(Main);
exports.hinduraList = factory.updateOne(Main);
exports.sibaList = factory.deleteOne(Main);
