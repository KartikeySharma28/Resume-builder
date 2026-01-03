const Resume = require('../models/resumeModel');
const mongoose = require('mongoose');
const cloudinary = require('../config/cloudinary');

// CREATE
const createResume = async (data, file) => {
  if (file) {
    data.attachment = file.path;           // Cloudinary URL
    data.attachmentPublicId = file.filename; // Cloudinary public_id
  }

  const newResume = await Resume.create(data);
  return newResume;
};

// READ all
const getAllResumes = async () => {
  return await Resume.find({});
};

// READ one
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

// UPDATE
const updateResume = async (id, data, file) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error('Invalid resume ID');
  }

  const existingResume = await Resume.findById(id);
  if (!existingResume) {
    throw new Error('Resume not found');
  }

  // If new file uploaded → delete old file from Cloudinary
  if (file) {
    if (existingResume.attachmentPublicId) {
      await cloudinary.uploader.destroy(
        existingResume.attachmentPublicId,
        { resource_type: 'raw' }
      );
    }

    data.attachment = file.path;
    data.attachmentPublicId = file.filename;
  }

  const updatedResume = await Resume.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });

  return updatedResume;
};

// DELETE
const deleteResume = async (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error('Invalid resume ID');
  }

  const resume = await Resume.findById(id);
  if (!resume) {
    throw new Error('Resume not found');
  }

  // Delete from Cloudinary
  if (resume.attachmentPublicId) {
    await cloudinary.uploader.destroy(
      resume.attachmentPublicId,
      { resource_type: 'raw' }
    );
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
