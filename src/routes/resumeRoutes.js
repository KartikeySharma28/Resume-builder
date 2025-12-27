const router = require('express').Router();
const {
  createResume,
  getAllResume,
  getResumeById,
  updateResume,
  deleteResume,
} = require('../controllers/resumeController');

const upload = require('../middlewares/resumeUpload');

// CREATE (with file)
router.post('/', upload.single('attachment'), createResume);

// READ
router.get('/', getAllResume);
router.get('/:id', getResumeById);

// UPDATE (with file)
router.put('/:id', upload.single('attachment'), updateResume);

// DELETE
router.delete('/:id', deleteResume);

module.exports = router;
