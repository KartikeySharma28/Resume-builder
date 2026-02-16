const fs = require("fs");
const path = require("path");

const baseCss = fs.readFileSync(path.join(__dirname, "base.css"), "utf8");
const printCss = fs.readFileSync(path.join(__dirname, "print.css"), "utf8");

exports.TemplatePreview3 = function TemplatePreview3(data = {}) {
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
    __customSectionMeta = [],
    ...customValues
  } = data;

  /* ===== SIDEBAR CONTENT ===== */

  const sidebarHTML = `
    <h3>Contact</h3>
    ${contactInfo.email     ? `<div>${contactInfo.email}</div>`     : ""}
    ${contactInfo.phone     ? `<div>${contactInfo.phone}</div>`     : ""}
    ${contactInfo.location  ? `<div>${contactInfo.location}</div>`  : ""}
    ${contactInfo.linkedin  ? `<div>${contactInfo.linkedin}</div>`  : ""}
    ${contactInfo.github    ? `<div>${contactInfo.github}</div>`    : ""}
    ${contactInfo.portfolio ? `<div>${contactInfo.portfolio}</div>` : ""}

    ${spokenLanguages.length ? `
    <h3>Languages</h3>
    <div class="tag-container">
      ${spokenLanguages.map(l => `<span class="tag">${l}</span>`).join("")}
    </div>` : ""}

    ${softSkills.length ? `
    <h3>Soft Skills</h3>
    <div class="tag-container">
      ${softSkills.map(s => `<span class="tag">${s.title || s}</span>`).join("")}
    </div>` : ""}
  `;

  /* ===== BUILD RIGHT SIDE SECTIONS ===== */

  let rightHTML = "";

  function addSection(title, contentHTML) {
    if (!contentHTML) return;
    rightHTML += `
      <div class="section">
        <h2>${title}</h2>
        ${contentHTML}
      </div>
    `;
  }

  if (experience.length) {
    addSection(
      "Work Experience",
      experience.map(e => `
        <div class="item">
          <strong>${e.role || ""} &ndash; ${e.organization || ""}</strong>
          <div class="date">${e.startDate || ""} &ndash; ${e.endDate || "Present"}</div>
          ${e.description ? `<div class="desc">${e.description}</div>` : ""}
        </div>
      `).join("")
    );
  }

  if (skills.length) {
    addSection(
      "Technical Skills",
      skills.map(s => `
        <div class="item">
          <strong>${s.title || ""}</strong>
          ${s.description ? `<div class="desc">${s.description}</div>` : ""}
        </div>
      `).join("")
    );
  }

  if (projects.length) {
    addSection(
      "Projects",
      projects.map(p => `
        <div class="item">
          <strong>${p.title || ""}</strong>
          ${p.description ? `<div class="desc">${p.description}</div>` : ""}
        </div>
      `).join("")
    );
  }

  if (education.length) {
    addSection(
      "Education",
      education.map(e => `
        <div class="item">
          <strong>${e.degree || ""} &ndash; ${e.field || ""}</strong>
          <div>${e.institution || ""}</div>
          <div class="date">${e.startDate || ""} &ndash; ${e.endDate || "Present"}</div>
        </div>
      `).join("")
    );
  }

  if (certifications.length) {
    addSection(
      "Certifications",
      certifications.map(c => `
        <div class="item">
          <strong>${c.name || ""}</strong>
          ${c.issuer ? `<div>Issued by ${c.issuer}</div>` : ""}
        </div>
      `).join("")
    );
  }

  if (blogs.length) {
    addSection(
      "Publications & Writing",
      blogs.map(b => `
        <div class="item">
          <strong>${b.title || ""}</strong>
          ${b.description ? `<div class="desc">${b.description}</div>` : ""}
        </div>
      `).join("")
    );
  }

  if (awards.length) {
    addSection(
      "Awards & Achievements",
      awards.map(a => `
        <div class="item">
          <strong>${a.title || ""}</strong>
          ${a.description ? `<div class="desc">${a.description}</div>` : ""}
        </div>
      `).join("")
    );
  }

  // Custom sections
  if (Array.isArray(__customSectionMeta)) {
    __customSectionMeta.forEach(meta => {
      const items = customValues[meta.key];
      if (!items || !items.length) return;
      addSection(
        meta.label,
        items.map(item => `
          <div class="item">
            <strong>${item.title || ""}</strong>
            ${item.description ? `<div class="desc">${item.description}</div>` : ""}
          </div>
        `).join("")
      );
    });
  }

  /* ===== FINAL HTML ===== */

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <style>${baseCss}</style>
  <style>${printCss}</style>
</head>
<body>
  <!-- These fixed divs repeat on every Puppeteer printed page automatically -->
  <div class="sidebar-bg"></div>
  <div class="right-bg"></div>

  <div class="page">
    <div class="top1">
      <h1>${contactInfo.fullName || "Your Name"}</h1>
      ${professionalSummary ? `<p>${professionalSummary}</p>` : ""}
    </div>
    <div class="main">
      <aside class="left">
        ${sidebarHTML}
      </aside>
      <main class="right">
        ${rightHTML}
      </main>
    </div>
  </div>
</body>
</html>
`;
};