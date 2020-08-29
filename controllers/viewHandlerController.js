/* eslint-disable */

const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const APIFeatures = require('../utils/apiFeatures');

exports.goGetForm = (Model) => {
  catchAsync(async (req, res) => {
    res.render('management/mainLayout', {
      viewTitle: 'Manage Your Data',
    });
  });
};
