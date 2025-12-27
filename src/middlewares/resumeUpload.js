const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../config/cloudinary');

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'resumes',
    resource_type: 'auto    ', // IMPORTANT for PDF/DOC
    allowed_formats: ['pdf', 'doc', 'docx','jpg', 'png', 'jpeg' ],
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});

module.exports = upload;
