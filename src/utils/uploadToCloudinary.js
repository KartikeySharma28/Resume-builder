const cloudinary = require('../config/cloudinary');

function UploadToCloudinary(fileBuffer) {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: 'resumes',
      },
      (error, result) => {
        console.log(' Cloudinary callback:', error || result);  
        if (error) return reject(error);
        resolve(result);
      }
    );
        console.log(' Sending buffer to stream...');  
    stream.end(fileBuffer);
  });
};

module.exports = UploadToCloudinary;