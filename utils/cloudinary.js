/* eslint-disable */
const cloudinary = require('cloudinary');
const dotenv = require('dotenv');

dotenv.config();

cloudinary.config({
  cloud_name: 'university-of-rwanda',
  api_key: '164946218657611',
  api_secret: 'Yq2cCRDqmzGuJnRl5klFJHycIQs',
});

exports.uploads = (file, folder) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      file,
      (results) => {
        resolve({
          url: results.url,
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
