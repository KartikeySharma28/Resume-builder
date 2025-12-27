const Resume = require('../models/resumeModel');
const mongoose = require('mongoose');
const cloudinary = require('../config/cloudinary');

/**
 * CREATE Resume
 */
const createResume = async (data, file) => {
  if (file) {
    // CloudinaryStorage already uploads the file and sets file.path to the URL
    data.attachment = file.path;
  }

  const newResume = await Resume.create(data);
  return newResume;
};

/**
 * READ All Resumes
 */
const getAllResumes = async () => {
  return await Resume.find({});
};

/**
 * READ Resume by ID
 */
const getResumeById = async (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error('Invalid resume ID');
  }

  const resume = await Resume.findById(id);
  if (!resume) {
    throw new Error('Resume not found');
  }

  return resume;
};

/**
 * UPDATE Resume
 */
const updateResume = async (id, data, file) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error('Invalid resume ID');
  }

  const existingResume = await Resume.findById(id);
  if (!existingResume) {
    throw new Error('Resume not found');
  }

  // If new file uploaded → delete old one from Cloudinary
  if (file) {
    if (existingResume.attachment) {
      const publicId = existingResume.attachment
        .split('/')
        .pop()
        .split('.')[0];

      await cloudinary.uploader.destroy(`resumes/${publicId}`, {
        resource_type: 'auto',
      });
    }

    data.attachment = file.path;
  }

  const updatedResume = await Resume.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });

  return updatedResume;
};

/**
 * DELETE Resume
 */
const deleteResume = async (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error('Invalid resume ID');
  }

  const resume = await Resume.findById(id);
  if (!resume) {
    throw new Error('Resume not found');
  }

  // Delete file from Cloudinary
  if (resume.attachment) {
    const publicId = resume.attachment
      .split('/')
      .pop()
      .split('.')[0];

    await cloudinary.uploader.destroy(`resumes/${publicId}`, {
      resource_type: 'auto',
    });
  }

  await resume.deleteOne();
  return resume;
};

module.exports = {
  createResume,
  getAllResumes,
  getResumeById,
  updateResume,
  deleteResume,
};
