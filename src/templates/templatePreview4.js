
exports.TemplatePreview4 = function templatePreview4(data = {}) {
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
    imagePreview = "",
    __customSectionMeta = [],
    ...customValues
  } = data;

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      margin: 0;
      font-family: 'Segoe UI', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      color: #1a1a1a;
    }

    .page {
      width: 210mm;
      min-height: 297mm;
      background: #fff;
      margin: auto;
    }

    /* ===== HEADER ===== */
    .header {
      display: flex;
      gap: 28px;
      padding: 36px 40px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: #fff;
      position: relative;
      overflow: hidden;
    }

    .header::before {
      content: '';
      position: absolute;
      top: -50%;
      right: -10%;
      width: 400px;
      height: 400px;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
      border-radius: 50%;
    }

    .photo {
      width: 140px;
      height: 140px;
      border-radius: 50%;
      overflow: hidden;
      border: 4px solid rgba(255, 255, 255, 0.3);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
      flex-shrink: 0;
      position: relative;
      z-index: 1;
    }

    .photo img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .photo-placeholder {
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(10px);
      display: flex;
      align-items: center;
      justify-content: center;
      color: rgba(255, 255, 255, 0.6);
      font-size: 14px;
    }

    .header-text {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;
      z-index: 1;
    }

    .header-text h1 {
      margin: 0 0 12px 0;
      font-size: 32px;
      font-weight: 700;
      letter-spacing: -0.5px;
      text-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .summary {
      margin: 0;
      font-size: 15px;
      line-height: 1.6;
      color: rgba(255, 255, 255, 0.95);
      font-weight: 400;
    }

    /* ===== BODY ===== */
    .body {
      display: flex;
    }

    /* ===== LEFT SIDEBAR ===== */
    .left {
      width: 280px;
      background: linear-gradient(180deg, #f8f9fa 0%, #e9ecef 100%);
      padding: 32px 24px;
      border-right: 1px solid #dee2e6;
    }

    .block {
      margin-bottom: 28px;
    }

    .block:last-child {
      margin-bottom: 0;
    }

    .block h3 {
      margin: 0 0 14px 0;
      font-size: 14px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #667eea;
      padding-bottom: 8px;
      border-bottom: 2px solid #667eea;
    }

    .block-content {
      font-size: 13px;
      line-height: 1.6;
      color: #495057;
    }

    .contact-item {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      margin-bottom: 10px;
      padding: 8px;
      border-radius: 6px;
      word-break: break-word;
    }

    .contact-item .icon {
      font-size: 16px;
      flex-shrink: 0;
      opacity: 0.7;
    }

    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 8px;
    }

    .tag {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: #fff;
      padding: 6px 12px;
      font-size: 11px;
      font-weight: 600;
      border-radius: 6px;
      letter-spacing: 0.3px;
      box-shadow: 0 2px 6px rgba(102, 126, 234, 0.25);
    }

    /* ===== RIGHT CONTENT ===== */
    .right {
      flex: 1;
      padding: 32px 40px;
      background: #fff;
    }

    .section {
      margin-bottom: 32px;
      break-inside: avoid;
      page-break-inside: avoid;
    }

    .section:last-child {
      margin-bottom: 0;
    }

    .section h2 {
      font-size: 20px;
      font-weight: 700;
      color: #667eea;
      border-bottom: 2px solid #667eea;
      padding-bottom: 8px;
      margin-bottom: 16px;
      letter-spacing: -0.3px;
      break-after: avoid;
      page-break-after: avoid;
    }

    .section-content {
      padding-left: 4px;
    }

    .entry {
      margin-bottom: 18px;
      padding-bottom: 16px;
      border-bottom: 1px solid #f1f3f5;
      break-inside: avoid;
      page-break-inside: avoid;
    }

    .entry:last-child {
      border-bottom: none;
      padding-bottom: 0;
    }

    .entry-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 12px;
      margin-bottom: 6px;
    }

    .entry strong {
      font-size: 15px;
      font-weight: 600;
      color: #212529;
      line-height: 1.4;
    }

    .meta {
      font-size: 12px;
      color: #6c757d;
      font-style: italic;
      white-space: nowrap;
      flex-shrink: 0;
    }

    .entry-description {
      font-size: 14px;
      line-height: 1.7;
      color: #495057;
      margin-top: 8px;
    }

    /* ===== PRINT STYLES ===== */
    @media print {
      .page {
        box-shadow: none;
        margin: 0;
      }
      
      .header,
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
    <!-- HEADER -->
    <header class="header">
      <div class="photo">
        ${
          imagePreview
            ? `<img src="${imagePreview}" alt="Profile" />`
            : '<div class="photo-placeholder">Photo</div>'
        }
      </div>

      <div class="header-text">
        <h1>${contactInfo.fullName || "Your Name"}</h1>
        ${professionalSummary ? `<p class="summary">${professionalSummary}</p>` : ""}
      </div>
    </header>

    <!-- BODY -->
    <div class="body">
      <!-- LEFT -->
      <aside class="left">
        ${
          contactInfo.email ||
          contactInfo.phone ||
          contactInfo.location ||
          contactInfo.linkedin ||
          contactInfo.github ||
          contactInfo.portfolio
            ? `
        <div class="block">
          <h3>Contact</h3>
          <div class="block-content">
            ${
              contactInfo.email
                ? `
            <div class="contact-item">
              <span class="icon">✉</span>
              <span>${contactInfo.email}</span>
            </div>
            `
                : ""
            }
            ${
              contactInfo.phone
                ? `
            <div class="contact-item">
              <span class="icon">📱</span>
              <span>${contactInfo.phone}</span>
            </div>
            `
                : ""
            }
            ${
              contactInfo.location
                ? `
            <div class="contact-item">
              <span class="icon">📍</span>
              <span>${contactInfo.location}</span>
            </div>
            `
                : ""
            }
            ${
              contactInfo.linkedin
                ? `
            <div class="contact-item">
              <span class="icon">💼</span>
              <span>${contactInfo.linkedin}</span>
            </div>
            `
                : ""
            }
            ${
              contactInfo.github
                ? `
            <div class="contact-item">
              <span class="icon">💻</span>
              <span>${contactInfo.github}</span>
            </div>
            `
                : ""
            }
            ${
              contactInfo.portfolio
                ? `
            <div class="contact-item">
              <span class="icon">🌐</span>
              <span>${contactInfo.portfolio}</span>
            </div>
            `
                : ""
            }
          </div>
        </div>
        `
            : ""
        }

        ${
          spokenLanguages.length
            ? `
        <div class="block">
          <h3>Languages</h3>
          <div class="tags">
            ${spokenLanguages.map((l) => `<span class="tag">${l}</span>`).join("")}
          </div>
        </div>
        `
            : ""
        }

        ${
          softSkills.length
            ? `
        <div class="block">
          <h3>Soft Skills</h3>
          <div class="tags">
            ${softSkills.map((s) => `<span class="tag">${s.title || s}</span>`).join("")}
          </div>
        </div>
        `
            : ""
        }
      </aside>

      <!-- RIGHT -->
      <main class="right">
        ${
          experience.length
            ? `
        <section class="section">
          <h2>Work Experience</h2>
          <div class="section-content">
            ${experience
              .map(
                (e) => `
            <div class="entry">
              <div class="entry-header">
                <strong>${e.role || ""} — ${e.organization || ""}</strong>
                <span class="meta">${e.startDate || ""} — ${e.endDate || "Present"}</span>
              </div>
              ${e.description ? `<div class="entry-description">${e.description}</div>` : ""}
            </div>
            `
              )
              .join("")}
          </div>
        </section>
        `
            : ""
        }

        ${
          skills.length
            ? `
        <section class="section">
          <h2>Technical Skills</h2>
          <div class="section-content">
            ${skills
              .map(
                (s) => `
            <div class="entry">
              <strong>${s.title || ""}</strong>
              ${s.description ? `<div class="entry-description">${s.description}</div>` : ""}
            </div>
            `
              )
              .join("")}
          </div>
        </section>
        `
            : ""
        }

        ${
          projects.length
            ? `
        <section class="section">
          <h2>Projects</h2>
          <div class="section-content">
            ${projects
              .map(
                (p) => `
            <div class="entry">
              <strong>${p.title || ""}</strong>
              ${p.description ? `<div class="entry-description">${p.description}</div>` : ""}
            </div>
            `
              )
              .join("")}
          </div>
        </section>
        `
            : ""
        }

        ${
          education.length
            ? `
        <section class="section">
          <h2>Education</h2>
          <div class="section-content">
            ${education
              .map(
                (e) => `
            <div class="entry">
              <div class="entry-header">
                <strong>${e.degree || ""} — ${e.field || ""}</strong>
                <span class="meta">${e.institution || ""} (${e.startDate || ""} — ${e.endDate || "Present"})</span>
              </div>
            </div>
            `
              )
              .join("")}
          </div>
        </section>
        `
            : ""
        }

        ${
          certifications.length
            ? `
        <section class="section">
          <h2>Certifications</h2>
          <div class="section-content">
            ${certifications
              .map(
                (c) => `
            <div class="entry">
              <div class="entry-header">
                <strong>${c.name || ""}</strong>
                ${c.issuer ? `<span class="meta">Issued by ${c.issuer}</span>` : ""}
              </div>
            </div>
            `
              )
              .join("")}
          </div>
        </section>
        `
            : ""
        }

        ${
          blogs.length
            ? `
        <section class="section">
          <h2>Publications & Writing</h2>
          <div class="section-content">
            ${blogs
              .map(
                (b) => `
            <div class="entry">
              <strong>${b.title || ""}</strong>
              ${b.description ? `<div class="entry-description">${b.description}</div>` : ""}
            </div>
            `
              )
              .join("")}
          </div>
        </section>
        `
            : ""
        }

        ${
          awards.length
            ? `
        <section class="section">
          <h2>Awards & Achievements</h2>
          <div class="section-content">
            ${awards
              .map(
                (a) => `
            <div class="entry">
              <strong>${a.title || ""}</strong>
              ${a.description ? `<div class="entry-description">${a.description}</div>` : ""}
            </div>
            `
              )
              .join("")}
          </div>
        </section>
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
        <section class="section">
          <h2>${meta.label}</h2>
          <div class="section-content">
            ${sectionData
              .map(
                (item) => `
            <div class="entry">
              <strong>${item.title || ""}</strong>
              ${item.description ? `<div class="entry-description">${item.description}</div>` : ""}
            </div>
            `
              )
              .join("")}
          </div>
        </section>
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