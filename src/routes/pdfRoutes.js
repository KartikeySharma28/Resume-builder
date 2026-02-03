const express = require("express");
const { generatePDF } = require("../controllers/pdf.controller");

const router = express.Router();

router.post("/generate", generatePDF);

module.exports = router;
