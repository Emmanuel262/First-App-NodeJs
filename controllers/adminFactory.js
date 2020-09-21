/* eslint-disable */
const fs = require('fs');
const cloudinary = require('cloudinary');

const upload = require('../utils/multer');
const cloudinaries = require('../utils/cloudinary');
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
  Data.findById(req.params.id, async function (err, data) {
    if (err) {
      console.log(err);
      return res.redirect('/admin');
    }
    try {
      let ids = data.imageIds;
      for (let i = 0; i < ids.length; i++) {
        await cloudinary.v2.uploader.destroy(ids[i]);
      }
      data.remove();
      res.redirect('/admin');
    } catch (err) {
      console.log(err);
      return res.redirect('/admin');
    }
  });
};
