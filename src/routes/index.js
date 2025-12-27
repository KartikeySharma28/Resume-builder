const express = require('express');
const router = express.Router();

const categoryRoutes = require('./categoryRoutes');
const resumeRoutes = require('./resumeRoutes');

router.use('/resumes', resumeRoutes);
router.use('/categories', categoryRoutes);

module.exports = router;
