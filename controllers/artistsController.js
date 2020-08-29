/* eslint-disable */

const Artists = require('../models/artistsModel');
const factory = require('./handlerFactory');

exports.artistsZose = factory.getAll(Artists);
exports.artistsImwe = factory.getOne(Artists, { path: 'reviews' });
exports.remaArtists = factory.createOne(Artists);
exports.hinduraArtists = factory.updateOne(Artists);
exports.sibaArtists = factory.deleteOne(Artists);
