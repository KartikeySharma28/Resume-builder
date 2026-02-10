const Resume = require("../models/Resume");

/**
 * GET /api/resumes
 * Get all resumes for logged-in user
 */
exports.getAllResumes = async (req, res) => {
  try {
    const resumes = await Resume.find({ userId: req.userId })
      .select("title selectedTemplate createdAt meta ")
      .sort({ createdAt: -1 });

    res.json(resumes);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch resumes" });
  }
};

/**
 * GET /api/resumes/:id
 * Get single resume (for View / Edit)
 */
exports.getResumeById = async (req, res) => {
  try {
    const resume = await Resume.findOne({
      _id: req.params.id,
      userId: req.userId,
    });

    if (!resume) {
      return res.status(404).json({ message: "Resume not found" });
    }

    res.json(resume);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch resume" });
  }
};

/**
 * POST /api/resumes
 * Create new resume
 */
exports.createResume = async (req, res) => {
  try {
    const { title, resumeData, selectedTemplate } = req.body;

    if (!resumeData || !selectedTemplate) {
      return res.status(400).json({
        message: "resumeData and selectedTemplate are required",
      });
    }

    const resume = await Resume.create({
      userId: req.userId,
      title: title || "Untitled Resume",
      resumeData,
      selectedTemplate,
    });

    res.status(201).json(resume);
  } catch (error) {
    res.status(500).json({ message: "Failed to create resume" });
  }
};

/**
 * PUT /api/resumes/:id
 * Update existing resume
 */
exports.updateResume = async (req, res) => {
  try {
    const { resumeData, selectedTemplate, title } = req.body;

    const updated = await Resume.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId },
      {
        resumeData,
        selectedTemplate,
        title,
      },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Resume not found" });
    }

    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: "Failed to update resume" });
  }
};

/**
 * DELETE /api/resumes/:id
 * Delete resume
 */
exports.deleteResume = async (req, res) => {
  try {
    const deleted = await Resume.findOneAndDelete({
      _id: req.params.id,
      userId: req.userId,
    });

    if (!deleted) {
      return res.status(404).json({ message: "Resume not found" });
    }

    res.json({ message: "Resume deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete resume" });
  }
};
