const express = require("express");
const { generatePDF } = require("../controllers/pdf.controller");
const upload = require('../middlewares/resumeUpload');


const router = express.Router();
    

router.post("/generate",upload.single('attachment'), generatePDF);

module.exports = router;
