exports.TemplatePreview3 = function (data = {}) {
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
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;900&family=Work+Sans:wght@400;500;600&display=swap" rel="stylesheet">
<style>
body {
  margin: 0;
  font-family: 'Work Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  color: #1a1a1a;
}

.page {
  width: 210mm;
  min-height: 297mm;
  margin: auto;
  background: #ffffff;
}

/* ===== TOP ===== */
.top {
  background: linear-gradient(135deg, #0f766e 0%, #14b8a6 100%);
  color: #fff;
  padding: 24mm 22mm;
  position: relative;
  overflow: hidden;
}

.top::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -10%;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
  border-radius: 50%;
}

.top::after {
  content: '';
  position: absolute;
  bottom: -30%;
  left: -5%;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%);
  border-radius: 50%;
}

.top > * {
  position: relative;
  z-index: 1;
}

.top h1 {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 36pt;
  font-weight: 900;
  margin-bottom: 12px;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: #ffffff;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.top p {
  font-size: 11pt;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.95);
  max-width: 85%;
  font-weight: 400;
}

/* ===== MAIN LAYOUT ===== */
.main {
  display: flex;
  min-height: 180mm;
}

/* LEFT SIDEBAR */
.left {
  width: 32%;
  padding: 20mm 14mm;
  box-sizing: border-box;
  background: #f8fafc;
  border-right: 1px solid #e2e8f0;
}

.left h3 {
  font-size: 12pt;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #0f766e;
  margin: 22px 0 12px;
  padding-bottom: 6px;
  border-bottom: 2px solid #14b8a6;
}

.left h3:first-child {
  margin-top: 0;
}

.left > div {
  font-size: 9.5pt;
  line-height: 1.6;
  color: #334155;
  margin: 6px 0;
  word-break: break-word;
}

.tag-container {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 10px;
}

.tag {
  display: inline-block;
  background: linear-gradient(135deg, #0f766e 0%, #14b8a6 100%);
  color: #fff;
  padding: 5px 12px;
  border-radius: 4px;
  font-size: 9pt;
  font-weight: 500;
  letter-spacing: 0.02em;
  box-shadow: 0 2px 4px rgba(15, 118, 110, 0.2);
  margin: 0;
}

/* RIGHT CONTENT */
.right {
  width: 68%;
  padding: 20mm 22mm;
  box-sizing: border-box;
}

.section {
  margin-bottom: 24px;
}

.section:last-child {
  margin-bottom: 0;
}

.section h2 {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 15pt;
  font-weight: 700;
  color: #0f766e;
  border-bottom: 2px solid #14b8a6;
  margin-bottom: 14px;
  padding-bottom: 6px;
  letter-spacing: -0.02em;
}

.item {
  font-size: 10pt;
  margin-bottom: 16px;
  padding-left: 14px;
  position: relative;
}

.item:last-child {
  margin-bottom: 0;
}

.item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 6px;
  width: 6px;
  height: 6px;
  background: #14b8a6;
  border-radius: 50%;
}

.item strong {
  display: block;
  font-size: 11pt;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 4px;
  line-height: 1.4;
}

.item p,
.item div {
  font-size: 9.5pt;
  line-height: 1.7;
  color: #475569;
  margin: 4px 0 0;
}

.item ul {
  margin: 6px 0;
  padding-left: 20px;
}

.item li {
  margin: 3px 0;
  line-height: 1.65;
  color: #475569;
}

.date {
  font-size: 9pt;
  font-style: italic;
  color: #64748b;
  margin-top: 3px;
  font-weight: 400;
}

/* ===== PAGE SAFETY RULES ===== */

/* Never cut sections */
.section {
  break-inside: avoid;
  page-break-inside: avoid;
}

/* Never cut individual items */
.item {
  break-inside: avoid;
  page-break-inside: avoid;
}

/* Avoid breaking right after headings */
.section h2 {
  break-after: avoid;
  page-break-after: avoid;
}

/* Force new page ONLY when needed */
.force-page-break {
  break-before: page;
  page-break-before: always;
}

/* Print optimization */
@media print {
  body {
    margin: 0;
  }
  .page {
    margin: 0;
    box-shadow: none;
  }
  .top,
  .left,
  .tag {
    print-color-adjust: exact;
    -webkit-print-color-adjust: exact;
  }
}

</style>
</head>

<body>
<div class="page">

<!-- TOP -->
<div class="top">
  <h1>${contactInfo.fullName || ""}</h1>
  <p>${professionalSummary}</p>
</div>

<!-- MAIN -->
<div class="main">

  <!-- LEFT -->
  <aside class="left">
    <h3>Contact</h3>
    <div>${contactInfo.email || ""}</div>
    <div>${contactInfo.phone || ""}</div>
    <div>${contactInfo.location || ""}</div>
    <div>${contactInfo.linkedin || ""}</div>
    <div>${contactInfo.github || ""}</div>
    <div>${contactInfo.portfolio || ""}</div>

    <h3>Languages</h3>
    <div class="tag-container">
    ${spokenLanguages.map(l => `<span class="tag">${l}</span>`).join("")}
    </div>
  </aside>

  <!-- RIGHT -->
  <main class="right">

    <div class="section">
      <h2>Technical Skills</h2>
      ${skills.map(s => `
        <div class="item">
          <strong>${s.title}</strong>
          ${s.description || ""}
        </div>`).join("")}
    </div>

    <div class="section">
      <h2>Work Experience</h2>
      ${experience.map(e => `
        <div class="item">
          <strong>${e.role}</strong> — ${e.organization}
          <div class="date">${e.startDate} – ${e.endDate || "Present"}</div>
          <p>${e.description || ""}</p>
        </div>`).join("")}
    </div>

    <div class="section">
      <h2>Projects</h2>
      ${projects.map(p => `
        <div class="item">
          <strong>${p.title}</strong>
          ${p.description || ""}
        </div>`).join("")}
    </div>

    <div class="section">
      <h2>Education</h2>
      ${education.map(e => `
        <div class="item">
          <strong>${e.degree}</strong> — ${e.field}
          <div>${e.institution}</div>
          <div class="date">${e.startDate} – ${e.endDate || "Present"}</div>
        </div>`).join("")}
    </div>

    <div class="section">
      <h2>Certifications</h2>
      ${certifications.map(c => `
        <div class="item">
          <strong>${c.name}</strong> — ${c.issuer}
        </div>`).join("")}
    </div>

    <div class="section">
      <h2>Soft Skills</h2>
      ${softSkills.map(s => `
        <div class="item">
          <strong>${s.title}</strong>
          ${s.description || ""}
        </div>`).join("")}
    </div>

    <div class="section">
      <h2>Blogs / Publications</h2>
      ${blogs.map(b => `
        <div class="item">
          <strong>${b.title}</strong>
          ${b.description || ""}
        </div>`).join("")}
    </div>

    <div class="section">
      <h2>Achievements</h2>
      ${awards.map(a => `
        <div class="item">
          <strong>${a.title}</strong>
          ${a.description || ""}
        </div>`).join("")}
    </div>
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
  `
    )
    .join("")}
</div>
`;
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