const express = require('express');
const router = express.Router();

const categoryRoutes = require('./categoryRoutes');
const resumeRoutes = require('./resumeRoutes');
const userRoutes = require('./userRoutes');
const pdfRoutes = require('./pdfRoutes');

router.use('/pdf', pdfRoutes);

router.use('/resumes', resumeRoutes);
router.use('/categories', categoryRoutes);
router.use('/users', userRoutes);
module.exports = router;
