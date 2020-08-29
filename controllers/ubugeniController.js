/* eslint-disable */

const Ubugeni = require('../models/ubugeniModel');
const factory = require('./handlerFactory');

exports.ubugeniBwose = factory.getAll(Ubugeni);
exports.ubugeniBumwe = factory.getOne(Ubugeni, { path: 'reviews' });
exports.remaUbugeni = factory.createOne(Ubugeni);
exports.hinduraUbugeni = factory.updateOne(Ubugeni);
exports.sibaUbugeni = factory.deleteOne(Ubugeni);
