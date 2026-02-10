const mongoose = require("mongoose");

const ResumeSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    index: true,
  },

  title: {
    type: String,
    required: true,
  },

  schemaVersion: {
    type: Number,
    default: 1,
  },
  selectedTemplate: {
    type: String, // e.g. "TemplatePreview3"
    required: true,
  },
  resumeData: {
    type: Object, // YOUR JSON schema goes here
    required: true,
  },

  meta: {
    downloadedCount: {
      type: Number,
      default: 0,
    },
    lastDownloadedAt: {
      type: Date,
    },
  },
}, {
  timestamps: true
});

module.exports = mongoose.model("Resume", ResumeSchema);