const fs = require("fs");
const path = require("path");

const baseCss = fs.readFileSync(
  path.join(__dirname, "template3/base.css"),
  "utf8"
);

const printCss = fs.readFileSync(
  path.join(__dirname, "template3/print.css"),
  "utf8"
);

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

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <style>${baseCss}</style>
  <style>${printCss}</style>
</head>

<body>
<div class="page">

  <!-- TOP HEADER -->
  <div class="top">
    <h1>${contactInfo.fullName || "Your Name"}</h1>
    ${professionalSummary ? `<p>${professionalSummary}</p>` : ""}
  </div>

  <!-- MAIN LAYOUT -->
  <div class="main">

    <!-- LEFT SIDEBAR -->
    <aside class="left">
      <h3>Contact</h3>
      ${contactInfo.email ? `<div>${contactInfo.email}</div>` : ""}
      ${contactInfo.phone ? `<div>${contactInfo.phone}</div>` : ""}
      ${contactInfo.location ? `<div>${contactInfo.location}</div>` : ""}
      ${contactInfo.linkedin ? `<div>${contactInfo.linkedin}</div>` : ""}
      ${contactInfo.github ? `<div>${contactInfo.github}</div>` : ""}
      ${contactInfo.portfolio ? `<div>${contactInfo.portfolio}</div>` : ""}

      ${
        spokenLanguages.length
          ? `
      <h3>Languages</h3>
      <div class="tag-container">
        ${spokenLanguages.map((l) => `<span class="tag">${l}</span>`).join("")}
      </div>`
          : ""
      }

      ${
        softSkills.length
          ? `
      <h3>Soft Skills</h3>
      <div class="tag-container">
        ${softSkills.map((s) => `<span class="tag">${s.title || s}</span>`).join("")}
      </div>`
          : ""
      }
    </aside>

    <!-- RIGHT CONTENT -->
    <main class="right">

      ${
        experience.length
          ? `
      <div class="section">
        <h2>Work Experience</h2>
        ${experience
          .map(
            (e) => `
        <div class="item">
          <strong>${e.role || ""} — ${e.organization || ""}</strong>
          <div class="date">${e.startDate || ""} — ${e.endDate || "Present"}</div>
          ${e.description ? `<p>${e.description}</p>` : ""}
        </div>`
          )
          .join("")}
      </div>`
          : ""
      }

      ${
        skills.length
          ? `
      <div class="section">
        <h2>Technical Skills</h2>
        ${skills
          .map(
            (s) => `
        <div class="item">
          <strong>${s.title || ""}</strong>
          <div>${s.description || ""}</div>
        </div>`
          )
          .join("")}
      </div>`
          : ""
      }

      ${
        projects.length
          ? `
      <div class="section">
        <h2>Projects</h2>
        ${projects
          .map(
            (p) => `
        <div class="item">
          <strong>${p.title || ""}</strong>
          <div>${p.description || ""}</div>
        </div>`
          )
          .join("")}
      </div>`
          : ""
      }

      ${
        education.length
          ? `
      <div class="section">
        <h2>Education</h2>
        ${education
          .map(
            (e) => `
        <div class="item">
          <strong>${e.degree || ""} — ${e.field || ""}</strong>
          <div>${e.institution || ""}</div>
          <div class="date">${e.startDate || ""} — ${e.endDate || "Present"}</div>
        </div>`
          )
          .join("")}
      </div>`
          : ""
      }

      ${
        certifications.length
          ? `
      <div class="section">
        <h2>Certifications</h2>
        ${certifications
          .map(
            (c) => `
        <div class="item">
          <strong>${c.name || ""}</strong>
          ${c.issuer ? `<div>Issued by ${c.issuer}</div>` : ""}
        </div>`
          )
          .join("")}
      </div>`
          : ""
      }

      ${
        blogs.length
          ? `
      <div class="section">
        <h2>Publications & Writing</h2>
        ${blogs
          .map(
            (b) => `
        <div class="item">
          <strong>${b.title || ""}</strong>
          <div>${b.description || ""}</div>
        </div>`
          )
          .join("")}
      </div>`
          : ""
      }

      ${
        awards.length
          ? `
      <div class="section">
        <h2>Awards & Achievements</h2>
        ${awards
          .map(
            (a) => `
        <div class="item">
          <strong>${a.title || ""}</strong>
          <div>${a.description || ""}</div>
        </div>`
          )
          .join("")}
      </div>`
          : ""
      }

      ${
        __customSectionMeta.length
          ? __customSectionMeta
              .map((meta) => {
                const sectionData = customValues[meta.key] || [];
                if (!sectionData.length) return "";

                return `
      <div class="section">
        <h2>${meta.label}</h2>
        ${sectionData
          .map(
            (item) => `
        <div class="item">
          <strong>${item.title || ""}</strong>
          <div>${item.description || ""}</div>
        </div>`
          )
          .join("")}
      </div>`;
              })
              .join("")
          : ""
      }

    </main>
  </div>
</div>
</body>
</html>
`;
};