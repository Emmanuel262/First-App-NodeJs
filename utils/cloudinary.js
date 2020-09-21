/* eslint-disable */
const cloudinary = require('cloudinary');
const dotenv = require('dotenv');

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

exports.uploads = (file, folder) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      file,
      (results) => {
        resolve({
          url: results.secure_url,
          id: results.public_id,
        });
      },
      {
        resource_type: 'auto',
        folder,
      }
    );
  });
};
