const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },

    email: {
      type: String,
      required: [true, 'Email is required'],
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address'],
    },

    number: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true,
    },

    github: {
      type: String,
      trim: true,
    },

    linkedin: {
      type: String,
      required: [true, 'LinkedIn profile is required'],
      trim: true,
    },

    skills: {
      type: String,
      required: [true, 'Skills are required'],
      trim: true,
    },

    attachment: {
      type: String, // Cloudinary secure URL
    },

    attachmentPublicId: {
      type: String, // Cloudinary public_id (used for delete/update)
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Resume', resumeSchema);
