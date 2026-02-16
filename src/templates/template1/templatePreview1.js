const fs = require("fs");
const path = require("path");

const css = fs.readFileSync(
  path.join(__dirname, "base.css"),
  "utf8"
);

const printCss = fs.readFileSync(
  path.join(__dirname, "print.css"),
  "utf8"
);

exports.TemplatePreview1 = function templatePreview1(data = {}) {

  const {
    contactInfo = {},
    professionalSummary = "",
    experience = [],
    skills = [],
    projects = [],
    education = [],
    certifications = [],
    softSkills = [],
    blogs = [],
    awards = [],
    spokenLanguages = [],
    __layout = [],
    __customSectionMeta = [],
    ...customValues
  } = data;

  /* ================= HEADER ================= */

  const headerHTML = `
  <div class="header">
    <h1>${contactInfo.fullName || ""}</h1>
    <p>
      ${contactInfo.email || ""} | ${contactInfo.phone || ""}
      ${contactInfo.location ? ` | ${contactInfo.location}` : ""}
    </p>
    <p class="links">
      ${contactInfo.github || ""}
      ${contactInfo.linkedin ? ` | ${contactInfo.linkedin}` : ""}
      ${contactInfo.portfolio ? ` | ${contactInfo.portfolio}` : ""}
    </p>
  </div>
  `;

  /* ================= DYNAMIC SECTIONS ================= */

  let sectionsHTML = "";

  (__layout || [])
    .filter(section => section.visible)
    .forEach(section => {

      /* SUMMARY */
      if (section.key === "professionalSummary" && professionalSummary) {
        sectionsHTML += `
        <div class="section">
          <h2>Professional Summary</h2>
          <p>${professionalSummary}</p>
        </div>
        `;
      }

      /* SKILLS */
      if (section.key === "skills" && skills.length) {
        sectionsHTML += `
        <div class="section">
          <h2>Technical Skills</h2>
          ${skills.map(s => `
            <div class="item">
              <strong>${s.title || ""}</strong>
              ${s.description || ""}
            </div>
          `).join("")}
        </div>
        `;
      }

      /* EXPERIENCE */
      if (section.key === "experience" && experience.length) {
        sectionsHTML += `
        <div class="section">
          <h2>Work Experience</h2>
          ${experience.map(e => `
            <div class="item">
              <strong>${e.role || ""}</strong> — ${e.organization || ""}
              <div class="date">${e.startDate || ""} – ${e.endDate || "Present"}</div>
              <p>${e.description || ""}</p>
            </div>
          `).join("")}
        </div>
        `;
      }

      /* PROJECTS */
      if (section.key === "projects" && projects.length) {
        sectionsHTML += `
        <div class="section">
          <h2>Projects</h2>
          ${projects.map(p => `
            <div class="item">
              <strong>${p.title || ""}</strong>
              ${p.description || ""}
            </div>
          `).join("")}
        </div>
        `;
      }

      /* EDUCATION */
      if (section.key === "education" && education.length) {
        sectionsHTML += `
        <div class="section">
          <h2>Education</h2>
          ${education.map(e => `
            <div class="item">
              <strong>${e.degree || ""}</strong> — ${e.field || ""}
              <div>${e.institution || ""}</div>
              <div class="date">${e.startDate || ""} – ${e.endDate || "Present"}</div>
            </div>
          `).join("")}
        </div>
        `;
      }

      /* CERTIFICATIONS */
      if (section.key === "certifications" && certifications.length) {
        sectionsHTML += `
        <div class="section">
          <h2>Certifications</h2>
          ${certifications.map(c => `
            <div class="item">
              <strong>${c.name || ""}</strong> — ${c.issuer || ""}
              <div class="date">${c.issueDate || ""}</div>
            </div>
          `).join("")}
        </div>
        `;
      }

      /* SOFT SKILLS */
      if (section.key === "softSkills" && softSkills.length) {
        sectionsHTML += `
        <div class="section">
          <h2>Soft Skills</h2>
          ${softSkills.map(s => `
            <div class="item">
              <strong>${s.title || ""}</strong>
              ${s.description || ""}
            </div>
          `).join("")}
        </div>
        `;
      }

      /* BLOGS */
      if (section.key === "blogs" && blogs.length) {
        sectionsHTML += `
        <div class="section">
          <h2>Blogs / Publications</h2>
          ${blogs.map(b => `
            <div class="item">
              <strong>${b.title || ""}</strong>
              ${b.description || ""}
            </div>
          `).join("")}
        </div>
        `;
      }

      /* AWARDS */
      if (section.key === "awards" && awards.length) {
        sectionsHTML += `
        <div class="section">
          <h2>Achievements</h2>
          ${awards.map(a => `
            <div class="item">
              <strong>${a.title || ""}</strong>
              ${a.description || ""}
            </div>
          `).join("")}
        </div>
        `;
      }

      /* LANGUAGES */
      if (section.key === "spokenLanguages" && spokenLanguages.length) {
        sectionsHTML += `
        <div class="section">
          <h2>Languages</h2>
          <ul class="tags">
            ${spokenLanguages.map(l => `<li>${l}</li>`).join("")}
          </ul>
        </div>
        `;
      }

      /* CUSTOM SECTIONS */
      if (customValues[section.key]?.length) {
        const meta = __customSectionMeta.find(m => m.key === section.key);

        sectionsHTML += `
        <div class="section">
          <h2>${meta?.label || ""}</h2>
          ${customValues[section.key].map(item => `
            <div class="item">
              <strong>${item.title || ""}</strong>
              ${item.description || ""}
            </div>
          `).join("")}
        </div>
        `;
      }

    });

  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8" />
    <style>${css}</style>
    <style>${printCss}</style>
  </head>
  <body>
    ${headerHTML}
    ${sectionsHTML}
  </body>
  </html>
  `;
};
