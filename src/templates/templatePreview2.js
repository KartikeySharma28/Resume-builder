exports.TemplatePreview2 = function templatePreview2(data = {}) {
  const {
    contactInfo = {},
    professionalSummary = "",
    experience = [],
    skills = [],
    projects = [],
    education = [],
    certifications = [],
    softSkills = [],
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
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;600;700&family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet">
<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
    color: #2c2c2c;
    font-size: 10.5pt;
    line-height: 1.6;
  }

  .page {
    display: flex;
    width: 210mm;
    min-height: 297mm;
    margin: auto;
    background: #fff;
    position: relative;
    overflow: hidden;
  }

  /* ===== SIDEBAR ===== */
  .sidebar {
    width: 35%;
    background: linear-gradient(165deg, #1a1a2e 0%, #16213e 100%);
    padding: 28mm 14mm;
    box-sizing: border-box;
    color: #ffffff;
    position: relative;
  }

  .sidebar::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: 
      radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.03) 0%, transparent 50%);
    pointer-events: none;
  }

  .sidebar > * {
    position: relative;
    z-index: 1;
  }

  .sidebar h1 {
    font-family: 'Crimson Pro', Georgia, serif;
    font-size: 26pt;
    font-weight: 700;
    margin-bottom: 6px;
    line-height: 1.2;
    letter-spacing: -0.02em;
    color: #ffffff;
  }

  .sidebar p {
    font-size: 9.5pt;
    margin: 3px 0;
    color: rgba(255, 255, 255, 0.85);
    line-height: 1.5;
  }

  .sidebar .links {
    margin-top: 16px;
    padding-top: 14px;
    border-top: 1px solid rgba(255, 255, 255, 0.15);
  }

  .sidebar .links p {
    margin: 6px 0;
    font-size: 9pt;
    color: rgba(255, 255, 255, 0.75);
    word-break: break-word;
  }

  .sidebar h3 {
    margin-top: 24px;
    margin-bottom: 12px;
    font-size: 11.5pt;
    font-weight: 700;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    border-bottom: 2px solid rgba(255, 255, 255, 0.2);
    padding-bottom: 6px;
    color: #ffffff;
  }

  .sidebar ul {
    list-style: none;
    padding-left: 0;
    margin: 8px 0;
  }

  .sidebar ul li {
    margin: 6px 0;
    font-size: 9.5pt;
    color: rgba(255, 255, 255, 0.85);
    position: relative;
    padding-left: 12px;
  }

  .sidebar ul li::before {
    content: '▹';
    position: absolute;
    left: 0;
    color: rgba(255, 255, 255, 0.5);
  }

  /* ===== MAIN ===== */
  .main {
    width: 65%;
    padding: 28mm 22mm;
    box-sizing: border-box;
    background: #ffffff;
  }

  .section {
    margin-bottom: 20px;
    break-inside: avoid;
    page-break-inside: avoid;
  }

  .section:last-child {
    margin-bottom: 0;
  }

  .section h2 {
    font-family: 'Crimson Pro', Georgia, serif;
    font-size: 14pt;
    font-weight: 700;
    color: #1a1a2e;
    border-bottom: 2px solid #1a1a2e;
    margin-bottom: 12px;
    padding-bottom: 4px;
    letter-spacing: -0.01em;
  }

  .section > p {
    margin: 0 0 10px;
    font-size: 10pt;
    line-height: 1.7;
    color: #2c2c2c;
    text-align: justify;
  }

  .item {
    margin-bottom: 14px;
    padding-left: 2px;
    font-size: 9.5pt;
  }

  .item:last-child {
    margin-bottom: 0;
  }

  .item strong {
    display: block;
    font-size: 11pt;
    font-weight: 600;
    color: #1a1a2e;
    margin-bottom: 2px;
    line-height: 1.4;
  }

  .item p,
  .item div {
    margin: 4px 0 0;
    font-size: 9.5pt;
    line-height: 1.65;
    color: #3c3c3c;
  }

  .date {
    font-size: 9pt;
    font-style: italic;
    color: #666;
    margin-top: 2px;
    font-weight: 400;
  }

  /* Experience/Education items with separators */
  .section > .exp-item {
    margin-bottom: 16px;
    padding-bottom: 14px;
    border-bottom: 1px solid #e8e8e8;
  }

  .section > .exp-item:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  .section > .exp-item > strong {
    font-size: 11.5pt;
    font-weight: 600;
    color: #1a1a2e;
    line-height: 1.3;
    display: block;
  }

  .section > .exp-item > p {
    margin: 6px 0 0;
    font-size: 9.5pt;
    line-height: 1.65;
    color: #3c3c3c;
  }

  ul {
    margin: 6px 0;
    padding-left: 20px;
  }

  li {
    margin: 3px 0;
    font-size: 9.5pt;
    line-height: 1.65;
    color: #3c3c3c;
  }

  ul ul {
    margin-top: 3px;
    padding-left: 18px;
  }

  @media print {
    body {
      margin: 0;
    }
    .page {
      margin: 0;
      box-shadow: none;
    }
    .sidebar {
      print-color-adjust: exact;
      -webkit-print-color-adjust: exact;
    }
  }
</style>
</head>

<body>
<div class="page">

  <!-- SIDEBAR -->
  <aside class="sidebar">
    <h1>${contactInfo.fullName || "Your Name"}</h1>
    ${contactInfo.email ? `<p>${contactInfo.email}</p>` : ""}
    ${contactInfo.phone ? `<p>${contactInfo.phone}</p>` : ""}
    ${contactInfo.location ? `<p>${contactInfo.location}</p>` : ""}

    ${
      contactInfo.github || contactInfo.linkedin || contactInfo.portfolio
        ? `
    <div class="links">
      ${contactInfo.github ? `<p>${contactInfo.github}</p>` : ""}
      ${contactInfo.linkedin ? `<p>${contactInfo.linkedin}</p>` : ""}
      ${contactInfo.portfolio ? `<p>${contactInfo.portfolio}</p>` : ""}
    </div>
    `
        : ""
    }

    ${
      spokenLanguages.length
        ? `
    <h3>Languages</h3>
    <ul>
      ${spokenLanguages.map((l) => `<li>${l}</li>`).join("")}
    </ul>
    `
        : ""
    }

    ${
      softSkills.length
        ? `
    <h3>Soft Skills</h3>
    <ul>
      ${softSkills.map((s) => `<li>${s.title || s}</li>`).join("")}
    </ul>
    `
        : ""
    }
  </aside>

  <!-- MAIN CONTENT -->
  <main class="main">

    ${
      professionalSummary
        ? `
    <div class="section">
      <h2>Professional Summary</h2>
      <p>${professionalSummary}</p>
    </div>
    `
        : ""
    }

    ${
      experience.length
        ? `
    <div class="section">
      <h2>Experience</h2>
      ${experience
        .map(
          (e) => `
        <div class="exp-item">
          <strong>${e.role || ""} — ${e.organization || ""}</strong>
          <div class="date">${e.startDate || ""} — ${e.endDate || "Present"}</div>
          ${e.description ? `<p>${e.description}</p>` : ""}
        </div>
      `,
        )
        .join("")}
    </div>
    `
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
        </div>
      `,
        )
        .join("")}
    </div>
    `
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
        </div>
      `,
        )
        .join("")}
    </div>
    `
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
        <div class="exp-item">
          <strong>${e.degree || ""} — ${e.field || ""}</strong>
          <div>${e.institution || ""}</div>
          <div class="date">${e.startDate || ""} — ${e.endDate || "Present"}</div>
        </div>
      `,
        )
        .join("")}
    </div>
    `
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
        </div>
      `,
        )
        .join("")}
    </div>
    `
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
        </div>
      `,
        )
        .join("")}
    </div>
    `
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
        </div>
      `,
        )
        .join("")}
    </div>
    `
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
          </div>
        `,
          )
          .join("")}
      </div>`;
            })
            .join("")
        : ""
    }

    ${
      openSource.length
        ? `
    <div class="section">
      <h2>Open Source Contributions</h2>
      ${openSource
        .map(
          (s) => `
        <div class="item">
          <strong>${s.title || ""}</strong>
          <div>${s.description || ""}</div>
        </div>
      `,
        )
        .join("")}
    </div>
    `
        : ""
    }

  </main>
</div>
</body>
</html>
`;
};