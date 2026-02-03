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
  <style>
    body {
      max-width: 820px;
      margin: 10px auto;
      padding: 10px;
      background: #fff;
      color: #000;
      font-family: Arial, Helvetica, sans-serif;
    }

    .header {
      text-align: center;
      border-bottom: 2px solid #000;
      padding-bottom: 12px;
    }

    .header h1 {
      margin: 0;
      font-size: 30px;
    }

    .header p {
      margin: 4px 0;
      font-size: 14px;
    }

    .links {
      font-size: 13px;
    }

    .section {
      margin-top: 26px;
      margin-button: 16px;
      break-inside: avoid;
  page-break-inside: avoid;
  page-break-before: auto;
    }
    .section h2 {
      font-size: 18px;
      border-bottom: 1px solid #000;
      margin-bottom: 10px;
      break-after: avoid;
  page-break-after: avoid;
    }

    .item {
      margin-bottom: 14px;
      font-size: 14px;
       break-inside: avoid;
  page-break-inside: avoid;
    }

    .date {
      font-size: 13px;
      color: #333;
    }

    .tags {
      list-style: none;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }

    .tags li {
      padding: 4px 8px;
      font-size: 13px;

      .force-page-break {
  break-before: page;
  page-break-before: always;
}
    }
  </style>
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