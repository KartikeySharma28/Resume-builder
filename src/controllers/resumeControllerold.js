const resumeService = require('../services/resumeService');

// CREATE
const createResume = async (req, res) => {
  try {
    console.log('Create resume request body:', req.body);
    console.log('Create resume request file:', req.file);
    const resume = await resumeService.createResume(req.body, req.file);
    res.status(201).json(resume);
  } catch (error) {
    console.error('Create resume error:', error);
    res.status(400).json({ message: error.message });
  } 
};

// READ all
const getAllResume = async (req, res) => {
  try {
    const resumes = await resumeService.getAllResumes();
    res.status(200).json(resumes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// READ one
const getResumeById = async (req, res) => {
  try {
    const resume = await resumeService.getResumeById(req.params.id);
    res.status(200).json(resume);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// UPDATE
const updateResume = async (req, res) => {
  try {
    const resume = await resumeService.updateResume(
      req.params.id,
      req.body,
      req.file
    );
    res.status(200).json(resume);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE
const deleteResume = async (req, res) => {
  try {
    await resumeService.deleteResume(req.params.id);
    res.status(200).json({ message: 'Resume deleted successfully' });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  createResume,
  getAllResume,
  getResumeById,
  updateResume,
  deleteResume,
};
