const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    number: {type: String, required: true},
    GitHub: {type: String, },
    linkedin: {type: String, required: true},
    skills: {type: String, required: true},
    attachment: { type: String }
})

const Resume = mongoose.model('Resume', resumeSchema);

module.exports = Resume;