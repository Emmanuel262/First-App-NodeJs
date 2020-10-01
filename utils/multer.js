/* eslint-disable */

const multer = require('multer');

// specify the storage engine

const storage = multer.diskStorage({
  // destination: function (req, file, cb) {
  //   cb(null, './public/img/uploads/');
  // },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

// file validation
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/jpeg'
  ) {
    cb(null, true);
  } else {
    // no event to upload
    cb({ message: 'Unsupported File Format' }, false);
  }
};

const upload = multer({
  storage,
  limits: { fileSize: 1024 * 1024 },
  fileFilter,
});

module.exports = upload;
