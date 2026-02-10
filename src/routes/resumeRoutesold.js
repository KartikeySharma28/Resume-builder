const router = require('express').Router();
const {
  createResume,
  getAllResume,
  getResumeById,
  updateResume,
  deleteResume,
} = require('../controllers/resumeControllerold');

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


router.get('/test-cloudinary', async (req, res) => {
  try {
    const test = await cloudinary.api.ping();
    res.json({ connected: true, account: test });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
