const express = require('express');
const router = express.Router();

const categoryRoutes = require('./categoryRoutes');
// const resumeRoutes = require('./resumeRoutesold');
const resumeRoutes = require('./resumesRoutes');
const userRoutes = require('./userRoutes');
const pdfRoutes = require('./pdfRoutes');
const authRoutes = require('./auth.routes');

router.use('/auth', authRoutes);
router.use('/pdf', pdfRoutes);

router.use('/resumes', resumeRoutes);
router.use('/categories', categoryRoutes);
router.use('/users', userRoutes);
module.exports = router;
