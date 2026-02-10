const fs = require("fs");
const path = require("path");

const css = fs.readFileSync(
  path.join(__dirname, "template1/base.css"),
  "utf8"
);
const printCss = fs.readFileSync(
  path.join(__dirname, "template1/print.css"),
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
            openSource = [],
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
    <style>${css}</style>

</head>

<body>

  <!-- ================= HEADER ================= -->
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

  <!-- ================= SUMMARY ================= -->
  <div class="section">
    <h2>Professional Summary</h2>
    <p>${professionalSummary}</p>
  </div>

  <!-- ================= SKILLS ================= -->
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
        ${s.description || ""}
      </div>
    `,
      )
      .join("")}
  </div>
  `
      : ""
  }

  <!-- ================= EXPERIENCE ================= -->
  ${
    experience.length
      ? `
  <div class="section force-page-break">
    <h2>Work Experience</h2>
    ${experience
      .map(
        (e) => `
      <div class="item">
        <strong>${e.role || ""}</strong> — ${e.organization || ""}
        <div class="date">${e.startDate || ""} – ${e.endDate || "Present"}</div>
        <p>${e.description || ""}</p>
      </div>
    `,
      )
      .join("")}
  </div>
  `
      : ""
  }

  <!-- ================= PROJECTS ================= -->
  ${
    projects.length
      ? `
  <div class="section force-page-break">
    <h2>Projects</h2>
    ${projects
      .map(
        (p) => `
      <div class="item">
        <strong>${p.title || ""}</strong>
        ${p.description || ""}
      </div>
    `,
      )
      .join("")}
  </div>
  `
      : ""
  }

  <!-- ================= EDUCATION ================= -->
  ${
    education.length
      ? `
  <div class="section">
    <h2>Education</h2>
    ${education
      .map(
        (e) => `
      <div class="item">
        <strong>${e.degree || ""}</strong> — ${e.field || ""}
        <div>${e.institution || ""}</div>
        <div class="date">${e.startDate || ""} – ${e.endDate || "Present"}</div>
      </div>
    `,
      )
      .join("")}
  </div>
  `
      : ""
  }

  <!-- ================= CERTIFICATIONS ================= -->
  ${
    certifications.length
      ? `
  <div class="section">
    <h2>Certifications</h2>
    ${certifications
      .map(
        (c) => `
      <div class="item">
        <strong>${c.name || ""}</strong> — ${c.issuer || ""}
        <div class="date">${c.issueDate || ""}</div>
      </div>
    `,
      )
      .join("")}
  </div>
  `
      : ""
  }

  <!-- ================= SOFT SKILLS ================= -->
  ${
    openSource.length
      ? `
  <div class="section">
    <h2>Soft Skills</h2>
    ${openSource
      .map(
        (s) => `
      <div class="item">
        <strong>${s.title || ""}</strong>
        ${s.description || ""}
      </div>
    `,
      )
      .join("")}
  </div>
  `
      : ""
  }

  <!-- ================= BLOGS ================= -->
  ${
    blogs.length
      ? `
  <div class="section force-page-break">
    <h2>Blogs / Publications</h2>
    ${blogs
      .map(
        (b) => `
      <div class="item">
        <strong>${b.title || ""}</strong>
        ${b.description || ""}
      </div>
    `,
      )
      .join("")}
  </div>
  `
      : ""
  }

  <!-- ================= ACHIEVEMENTS ================= -->
  ${
    awards.length
      ? `
  <div class="section">
    <h2>Achievements</h2>
    ${awards
      .map(
        (a) => `
      <div class="item">
        <strong>${a.title || ""}</strong>
        ${a.description || ""}
      </div>
    `,
      )
      .join("")}
  </div>
  `
      : ""
  }

  <!-- ================= LANGUAGES ================= -->
  ${
    spokenLanguages.length
      ? `
  <div class="section">
    <h2>Languages</h2>
    <ul class="tags">
      ${spokenLanguages.map((l) => `<li>${l}</li>`).join("")}
    </ul>
  </div>
  `
      : ""
  }

  <!-- ================= CUSTOM SECTIONS ================= -->
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
            ${item.description || ""}
          </div>
        `,
          )
          .join("")}
      </div>
      `;
          })
          .join("")
      : ""
  }

</body>
</html>
`;
};