// const multer = require('multer');
// const { CloudinaryStorage } = require('multer-storage-cloudinary');
// const cloudinary = require('../config/cloudinary');

// // const storage = new CloudinaryStorage({
// //   cloudinary,
// //   params: async (req, file) => {
// //     const isImage = file.mimetype.startsWith('image/');
// //     const isDoc =
// //     file.mimetype === 'application/pdf' ||
// //     file.mimetype.includes('word');
    
// //     if (!isImage && !isDoc) {
// //       throw new Error('Unsupported file type');
// //     }
    
// //     console.log('File received in middleware:-------', isImage, isDoc);
// //     return {
// //       folder: 'resumes',
// //       resource_type: isImage ? 'image' : 'raw',
// //       public_id: `resume_${Date.now()}`,
// //     };
// //   },
// // });

// const storage = new CloudinaryStorage({
//   cloudinary,
//   params: {
//     folder: 'resumes',
//     resource_type: 'raw', // Use 'raw' for all non-image files
//     public_id: (req, file) => `resume_${Date.now()}`,
//   },
// });

// const fileFilter = (req, file, cb) => {
//   const isImage = file.mimetype.startsWith('image/');
//   const isDoc = file.mimetype === 'application/pdf' || 
//                 file.mimetype.includes('word');
  
//   if (isImage || isDoc) {
//     cb(null, true);
//   } else {
//     cb(new Error('Only PDF, Word documents, and images are allowed'), false);
//   }
// };

// const upload = multer({
//   storage,
//   fileFilter,
//   limits: { fileSize: 5 * 1024 * 1024 }, // Uncomment this!
// });

// // const upload = multer({
// //   storage,
// //   // limits: { fileSize: 5 * 1024 * 1024 },
// // });

// module.exports = upload;


// Temporarily replace your resumeUpload.js with this:
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../config/cloudinary');

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'resumes',
    resource_type: 'raw',
    allowed_formats: ['pdf', 'doc', 'docx', 'jpg', 'png'],
  },
});

const upload = multer({ storage });

module.exports = upload;