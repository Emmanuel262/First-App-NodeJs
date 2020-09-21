/* eslint-disable */

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
  req.data = new Data();

  next();
}, saveDataAndRedirect('new'));

exports.updateInzu = catchAsync(async (req, res, next) => {
  req.data = await Data.findById(req.params.id);

  next();
}, saveDataAndRedirect('edit'));

function saveDataAndRedirect(path) {
  return catchAsync(async (req, res) => {
    const uploaders = async (path) => await cloudinaries.uploads(path, 'Image');
    const urls = [];
    const ids = [];
    let files = req.files;
    let data = req.data;
    const realUrls = [];

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

    if (req.file) {
      try {
        for (let i = 0; i < ids.length; i++) {
          await cloudinary.v2.uploader.destroy(ids[i]);
        }
        files = await cloudinaries.v2.uploader.upload(req.file.path);
        data.images = files.secure_url;
        data.imageIds = files.public_id;
      } catch (err) {
        console.log(err);
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
    data.image = realUrls;
    data.imageIds = ids;

    try {
      data = await data.save();
      res.redirect(`/admin`);
    } catch (err) {
      console.log(err);
      res.render(`admin/${path}`, { data });
    }
  });
}

// function saveDataAndRedirect(path) {
//   return catchAsync(async (req, res) => {
//     let data = req.data;
//     data.name = req.body.name;
//     data.summary = req.body.summary;
//     data.description = req.body.description;
//     data.cost = req.body.cost;
//     data.size = req.body.size;
//     req.nationality = req.body.nationality;
//     req.intara = req.body.intara;
//     req.identifier = req.body.identifier;
//     data.akarere = req.body.akarere;
//     data.umurenge = req.body.umurenge;
//     data.owner = req.body.owner;
//     data.akagari = req.body.akagari;
//     data.videoLink = req.body.videoLink;

//     try {
//       data = await Data.save();
//       res.redirect(`/`);
//     } catch (err) {
//       console.log(err);
//       res.render(`/admin/${path}`, { data });
//     }
//   });
// }

// exports.deleteOne = adminFactory.deleteOne('amazu');
