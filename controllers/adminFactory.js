/* eslint-disable */

const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const APIFeatures = require('../utils/apiFeatures');
const Data = require('../models/dataModel');

exports.updateData = async (req, res, next) => {
  req.data = await Data.findById(req.params.id);
  next();
};

exports.createData = async (req, res, next) => {
  req.data = new Data();
  next();
};

exports.renderEdit = async (req, res) => {
  const data = await Data.findById(req.params.id);
  res.render('admin/edit', { data });
};
exports.renderNew = async (req, res) => {
  res.render('admin/new');
};

exports.getOneData = async (req, res) => {
  const data = await Data.findOne({ slug: req.params.slug });
  if (data === null) {
    res.redirect('/admin');
  }
  res.render('admin/show', { data });
};

exports.deleteData = async (req, res) => {
  await Data.findByIdAndDelete(req.params.id);
  res.redirect('/admin');
};
