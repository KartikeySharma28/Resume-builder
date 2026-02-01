const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema(
  {
    // Basic info
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
      // you can add: match: [/^https?:\/\/github\.com\//, 'Invalid GitHub URL'] if you want
    },
    linkedin: {
      type: String,
      trim: true,
    },

    // ── New / changed fields ───────────────────────────────────────
    skills: {
      type: [String],                   // ← now array of strings
      required: [true, 'Skills are required'],
      default: [],
      minlength: [1, 'At least one skill is required'],
    },

    summary: {
      type: String,
      trim: true,
      maxlength: [600, 'Summary is too long (max 600 characters)'],
    },

    languages: [
      {
        language: {
          type: String,
          required: true,
          trim: true,
        },
        proficiency: {
          type: String,
          required: true,
          enum: ['Native', 'Fluent', 'Advanced', 'Intermediate', 'Basic', 'Beginner'],
          default: 'Intermediate',
        },
      },
    ],

    experience: [
      {
        position: { type: String, required: true, trim: true },
        company: { type: String, required: true, trim: true },
        location: { type: String, trim: true },
        startDate: { type: String, required: true }, // keep String for flexibility (e.g. "Aug 2025")
        endDate: { type: String },
        responsibilities: [{ type: String, trim: true }],
      },
    ],

    education: [
      {
        degree: { type: String, required: true, trim: true },
        university: { type: String, required: true, trim: true },
        startDate: { type: String },
        endDate: { type: String },
        description: { type: String, trim: true },
      },
    ],

    certifications: [
      {
        name: { type: String, required: true, trim: true },
        issuer: { type: String, trim: true },
        year: { type: String },
      },
    ],

    template: {
      type: String,
      enum: ['modern', 'classic', 'minimal', 'creative', 'professional',`elegant`],
      default: 'modern',
      lowercase: true,
    },

    // Keep your PDF upload fields
    attachment: {
      type: String, // Cloudinary secure_url
    },
    attachmentPublicId: {
      type: String,
    },

    // Optional: link resume to a user
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'User',
    //   required: true,
    // },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Resume', resumeSchema);