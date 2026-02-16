    const UploadToCloudinary = require("../utils/uploadToCloudinary");

    const puppeteer = require("puppeteer");
    const {
        TemplatePreview1
    } = require("../templates/template1/templatePreview1");
    const {
        TemplatePreview2
    } = require("../templates/template2/templatePreview2");
    const {
        TemplatePreview3
    } = require("../templates/template3/templatePreview3");

    const {
        TemplatePreview4
    } = require("../templates/template4/templatePreview4");

    const {
        TemplatePreview5
    } = require("../templates/template5/templatePreview5");

    const generatePDF = async (req, res) => {
        debugger
        try {

            const templateMap = {
                TemplatePreview1,
                TemplatePreview2,
                TemplatePreview3,
                TemplatePreview4,
                TemplatePreview5,
            };
            let imageUrl = null;
            if (req.file) {
                const uploadResult = await UploadToCloudinary(req.file.buffer);
                imageUrl = uploadResult.secure_url;
            }
            const rawData = req.body.data;

            const parsed = JSON.parse(rawData);

            const {
                resumeData,
                selectedTemplate
            } = parsed;

            const html = templateMap[selectedTemplate]?.(resumeData, imageUrl);
            if (!html) {
                return res.status(400).json({
                    error: "Invalid template"
                });
            }
            const browser = await puppeteer.launch({
                headless: "new",
                args: ["--no-sandbox", "--disable-setuid-sandbox"],
            });

            const page = await browser.newPage();

            // 3️⃣ Load HTML into Chrome
            await page.setContent(html, {
                waitUntil: "networkidle0"
            });

            await page.emulateMediaType("print");

            const pdfBuffer = await page.pdf({
                format: "A4",
                printBackground: true,
                preferCSSPageSize: true,
            });



            await browser.close();

            // 5️⃣ Send PDF correctly (IMPORTANT)
            res.setHeader("Content-Type", "application/pdf");
            res.setHeader(
                "Content-Disposition",
                "attachment; filename=resume.pdf",
            );

            res.end(pdfBuffer); // 🔥 DO NOT use res.send here
        } catch (error) {
            console.error("PDF GENERATION ERROR:", error);
            res.status(500).json({
                message: "Failed to generate PDF"
            });
        }
    };

    module.exports = {
        generatePDF
    };