/* eslint-disable */
const cloudinary = require('cloudinary');
const factory = require('../controllers/handlerFactory');
const Tour = require('../models/tourModel');
const Main = require('../models/mainModel');
const Booking = require('../models/bookingModel');
const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const adminFactory = require('../controllers/adminFactory');

const Data = require('../models/dataModel');

exports.getAmazuAdmin = catchAsync(async (req, res, next) => {
  const identifier = 'amazu';
  const amazu = await Data.find({ identifier: 'amazu' }).sort({
    createdAt: 'desc',
  });
  if (!amazu) {
    return next(new AppError('Nta mazu ahari.', 404));
  }

  res.status(200).render('admin/show', {
    title: 'Amazu Ahari',
    amazu,
  });
});

exports.addData = catchAsync(async (req, res) => {
  res.render('admin/new', { data: new Data() });
});

exports.createInzu = catchAsync(async (req, res, next) => {
  putData('new');
});
exports.updateInzu = catchAsync(async (req, res, next) => {
  EditData('edit');
});

function EditData(path) {
  Data.findById(req.params.id, async function (err, data) {
    if (err) {
      console.log(err);
      return res.redirect('/admin');
    }
    try {
      let ids = data.imageIds;
      console.log(ids);
      for (let i = 0; i < ids.length; i++) {
        await cloudinary.v2.uploader.destroy(ids[i]);
      }
    } catch (err) {
      console.log(err);
      return res.redirect('/admin');
    }
  });
}

function putData(path) {
  return catchAsync(async (req, res) => {
    Data.findById(req.params.id, async function (err, data) {
      const urls = [];
      let ids = [];
      let files = req.files;
      // let data = req.data;
      const realUlrs = [];

      for (const file of files) {
        const { path } = file;
        const newPath = await uploaders(path);
        urls.push(newPath);
        fs.unlinkSync(path);
      }
      for (let i = 0; i < urls.length; i++) {
        ids.push(urls[i].id);
      }
      for (let i = 0; i < urls.length; i++) {
        realUrls.push(urls[i].url);
      }
      if (err) {
        console.log(err);
        res.render(`admin/${path}`, { data });
      } else {
        if (req.file) {
          try {
            let idss = data.imageIds;
            for (let i = 0; i < idss.length; i++) {
              await cloudinary.v2.uploader.destroy(idss[i]);
            }
            var results = await cloudinary.v2.uploader.upload(req.file.path);
            data.images = results.secure_url;
            data.imageIds = results.public_id;
          } catch (err) {
            console.log(err);
            res.send(err);
          }
        }
        data.name = req.body.name;
        data.summary = req.body.summary;
        data.description = req.body.description;
        data.cost = req.body.cost;
        data.size = req.body.size;
        data.nationality = req.body.nationality;
        data.intara = req.body.intara;
        data.identifier = req.body.identifier;
        data.akarere = req.body.akarere;
        data.umurenge = req.body.umurenge;
        data.owner = req.body.owner;
        data.akagari = req.body.akagari;
        data.videoLink = req.body.videoLink;
        if (req.body.visibility) {
          data.visibility = req.body.visibility;
        }

        try {
          data = await data.save();
          res.redirect(`/admin`);
        } catch (err) {
          console.log(err);
          res.render(`admin/${path}`, { data });
        }
      }
    });
  });
}
