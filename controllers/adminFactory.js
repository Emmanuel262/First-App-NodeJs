/* eslint-disable */
const fs = require('fs');
const cloudinary = require('cloudinary');

const upload = require('../utils/multer');
const cloudinaries = require('../utils/cloudinary');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const APIFeatures = require('../utils/apiFeatures');
const Data = require('../models/dataModel');

// exports.updateData = async (req, res, next) => {
//   req.data = await Data.findById(req.params.id);
//   next();
// };
exports.updateData = async (req, res, next) => {
  Data.findById(req.params.id, async function (err, data) {
    if (err) {
      console.log('Find Error:', err);
    } else {
      let requiredImage = [];
      let requiredImageIds = [];
      if (req.files) {
        console.log('file available');
        console.log(req.files);
        if (req.files.length < 1) {
          requiredImage = data.image;
          requiredImageIds = data.imageIds;
        } else {
          let idss = data.imageIds;
          for (let i = 0; i < idss.length; i++) {
            await cloudinary.v2.uploader.destroy(idss[i]);
            console.log('destroying');
          }
          const uploaders = async (path) =>
            await cloudinaries.uploads(path, 'Image');
          const urls = [];
          const ids = [];
          let files = req.files;
          // let data = req.data;
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
          requiredImage = realUrls;
          requiredImageIds = ids;
        }
      }
      data.image = requiredImage;
      data.imageIds = requiredImageIds;
      // if (req.files) {
      //   let paths = [];
      //   req.files.forEach((pat) => paths.push(pat.path));
      //   const uploaders = async (path) =>
      //     await cloudinaries.uploads(path, 'Image');
      //   const urls = [];
      //   const ids = [];
      //   const realUrls = [];
      //   let result = [];
      //   let results = [];
      //   let idToPass = [];

      //   try {
      //     for (const file of req.files) {
      //       const { path } = file;
      //       idToPass.push(path);
      //       const newPath = await uploaders(path);
      //       urls.push(newPath);
      //     }

      //     for (let i = 0; i < urls.length; i++) {
      //       ids.push(urls[i].id);
      //     }
      //     for (let i = 0; i < urls.length; i++) {
      //       realUrls.push(urls[i].url);
      //     }
      //     console.log('pre saving...');
      //     console.log(data.image);
      //     console.log(data.imageIds);
      //     let neededId = data.imageIds;
      //     for (let i = 0; i < neededId.length; i++) {
      //       await cloudinary.v2.uploader.destroy(neededId[i]);
      //       console.log('Data Destroyed');
      //     }

      //     for (let i = 0; i < idToPass.length; i++) {
      //       result = await cloudinary.v2.uploader.upload(idToPass[i]);
      //       results.push(result);
      //     }
      //     for (let i = 0; i < idToPass.length; i++) {
      //       fs.unlinkSync(idToPass[i]);
      //     }

      //     console.log('saving...');
      //     let image = [];
      //     let imageIdss = [];
      //     for (let i = 0; i < results.length; i++) {
      //       image.push(results[i].secure_url);
      //       imageIdss.push(results[i].public_id);
      //     }
      //     data.image = image;
      //     data.imageIds = imageIdss;
      //     console.log(data.image);
      //     console.log(data.imageIds);

      //     // console.log('Upload data');
      //   } catch (err) {
      //     console.log('Try Error:', err);
      //   }
      // } else {
      //   data.image = data.image;
      //   data.imageIds = data.imageIds;
      // }

      console.log('Finishing upload data');
      console.log(data.image);
      console.log(data.imageIds);
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
        res.render(`admin/edit`, { data });
      }
    }
  });
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
exports.renderNewAll = async (req, res) => {
  res.render('everyone/newForAll');
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
