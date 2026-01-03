const router = require('express').Router();
const {
  createResume,
  getAllResume,
  getResumeById,
  updateResume,
  deleteResume,
} = require('../controllers/resumeController');

const upload = require('../middlewares/resumeUpload');

const test = ()=>{
    console.log('Uploading resume...--------------------------------------------->>');
}

// CREATE
router.post('/', upload.single('attachment'), createResume);

// READ
router.get('/', getAllResume);
router.get('/:id', getResumeById);

// UPDATE
router.put('/:id', upload.single('attachment'), updateResume);

// DELETE
router.delete('/:id', deleteResume);

module.exports = router;
