const Resume = require('../models/Resume');
const mongoose = require('mongoose');
const cloudinary = require('../config/cloudinary');


const uploadToCloudinary = (fileBuffer) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: 'resumes',
      },
      (error, result) => {
        console.log(' Cloudinary callback:', error || result);  
        if (error) return reject(error);
        resolve(result);
      }
    );
        console.log(' Sending buffer to stream...');  
    stream.end(fileBuffer);
  });
};

const createResume = async (data, file) => {
  console.log('Service - createResume data:----------->', file   );
  if (file) {
    const uploadResult = await uploadToCloudinary(file.buffer);
    console.log('Cloudinary upload result:-------------------------30', uploadResult);
    data.attachment = uploadResult.secure_url;
    data.attachmentPublicId = uploadResult.public_id;
  }

  const newResume = await Resume.create(data);
  return newResume;
};

const getAllResumes = async () => {
  return await Resume.find({});
};

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

const updateResume = async (id, data, file) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error('Invalid resume ID');
  }

  const existingResume = await Resume.findById(id);
  if (!existingResume) {
    throw new Error('Resume not found');
  }

  if (file) {
    if (existingResume.attachmentPublicId) {
      await cloudinary.uploader.destroy(
        existingResume.attachmentPublicId,
        { resource_type: 'raw' }
      );
    }

    const uploadResult = await uploadToCloudinary(file.buffer);

    data.attachment = uploadResult.secure_url;
    data.attachmentPublicId = uploadResult.public_id;
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
