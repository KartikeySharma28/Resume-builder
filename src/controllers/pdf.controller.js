const puppeteer = require("puppeteer");
const {
    TemplatePreview1
} = require("../templates/templatePreview1");
const {
    TemplatePreview2
} = require("../templates/templatePreview2");
const {
    TemplatePreview3
} = require("../templates/templatePreview3");

const {
    TemplatePreview4
} = require("../templates/templatePreview4");
 
const generatePDF = async (req, res) => {
    console.log(
  resumeData?.contactInfo?.photo?.slice(0, 50)
);
    try {
        const {
            resumeData,
            selectedTemplate
        } = req.body;
        const templateMap = {
            TemplatePreview1,
            TemplatePreview2,
            TemplatePreview3,
            TemplatePreview4,
        };

        const html = templateMap[selectedTemplate]?.(resumeData);

        if (!html) {
            return res.status(400).json({
                error: "Invalid template"
            });
        }


        // 2️⃣ Launch headless Chrome
        const browser = await puppeteer.launch({
            headless: "new",
            args: ["--no-sandbox", "--disable-setuid-sandbox"],
        });

        const page = await browser.newPage();

        // 3️⃣ Load HTML into Chrome
        await page.setContent(html, {
            waitUntil: "networkidle0"
        });

        // 4️⃣ Generate PDF
        const pdfBuffer = await page.pdf({
            format: "A4",
            printBackground: true,
            

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