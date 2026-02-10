const fs = require("fs");
const path = require("path");

const baseCss = fs.readFileSync(
  path.join(__dirname, "template5/base.css"),
  "utf8"
);

const printCss = fs.readFileSync(
  path.join(__dirname, "template5/print.css"),
  "utf8"
);

exports.TemplatePreview5 = function TemplatePreview5(data = {}, imagePreview) {
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
  <!-- HEADER -->
  <header class="header">
    <div class="headerText">
      <h1>${contactInfo.fullName || "Your Name"}</h1>
      ${professionalSummary ? `<p class="summary">${professionalSummary}</p>` : ""}
    </div>

    <div class="photo">
      ${
        imagePreview
          ? `<img src="${imagePreview}" alt="Profile" />`
          : `<div class="photoPlaceholder">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="8" r="4" strokeWidth="2"/>
                <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" strokeWidth="2"/>
              </svg>
            </div>`
      }
    </div>
  </header>

  <!-- BODY -->
  <div class="body">
    <!-- LEFT - MAIN CONTENT -->
    <main class="left">
      ${
        experience.length
          ? `
      <section class="section">
        <h2>Work Experience</h2>
        <div class="sectionContent">
          ${experience
            .map(
              (e) => `
          <div class="entry">
            <div class="entryHeader">
              <strong>${e.role || ""} — ${e.organization || ""}</strong>
              <span class="meta">${e.startDate || ""} — ${e.endDate || "Present"}</span>
            </div>
            ${e.description ? `<div class="entryDescription">${e.description}</div>` : ""}
          </div>`
            )
            .join("")}
        </div>
      </section>`
          : ""
      }

      ${
        skills.length
          ? `
      <section class="section">
        <h2>Technical Skills</h2>
        <div class="sectionContent">
          ${skills
            .map(
              (s) => `
          <div class="entry">
            <div class="entryHeader">
              <strong>${s.title || ""}</strong>
            </div>
            ${s.description ? `<div class="entryDescription">${s.description}</div>` : ""}
          </div>`
            )
            .join("")}
        </div>
      </section>`
          : ""
      }

      ${
        projects.length
          ? `
      <section class="section">
        <h2>Projects</h2>
        <div class="sectionContent">
          ${projects
            .map(
              (p) => `
          <div class="entry">
            <div class="entryHeader">
              <strong>${p.title || ""}</strong>
            </div>
            ${p.description ? `<div class="entryDescription">${p.description}</div>` : ""}
          </div>`
            )
            .join("")}
        </div>
      </section>`
          : ""
      }

      ${
        education.length
          ? `
      <section class="section">
        <h2>Education</h2>
        <div class="sectionContent">
          ${education
            .map(
              (e) => `
          <div class="entry">
            <div class="entryHeader">
              <strong>${e.degree || ""} — ${e.field || ""}</strong>
              <span class="meta">${e.institution || ""} (${e.startDate || ""} — ${e.endDate || "Present"})</span>
            </div>
          </div>`
            )
            .join("")}
        </div>
      </section>`
          : ""
      }

      ${
        certifications.length
          ? `
      <section class="section">
        <h2>Certifications</h2>
        <div class="sectionContent">
          ${certifications
            .map(
              (c) => `
          <div class="entry">
            <div class="entryHeader">
              <strong>${c.name || ""}</strong>
              ${c.issuer ? `<span class="meta">Issued by ${c.issuer}</span>` : ""}
            </div>
          </div>`
            )
            .join("")}
        </div>
      </section>`
          : ""
      }

      ${
        blogs.length
          ? `
      <section class="section">
        <h2>Publications & Writing</h2>
        <div class="sectionContent">
          ${blogs
            .map(
              (b) => `
          <div class="entry">
            <div class="entryHeader">
              <strong>${b.title || ""}</strong>
            </div>
            ${b.description ? `<div class="entryDescription">${b.description}</div>` : ""}
          </div>`
            )
            .join("")}
        </div>
      </section>`
          : ""
      }

      ${
        awards.length
          ? `
      <section class="section">
        <h2>Awards & Achievements</h2>
        <div class="sectionContent">
          ${awards
            .map(
              (a) => `
          <div class="entry">
            <div class="entryHeader">
              <strong>${a.title || ""}</strong>
            </div>
            ${a.description ? `<div class="entryDescription">${a.description}</div>` : ""}
          </div>`
            )
            .join("")}
        </div>
      </section>`
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
        <div class="sectionContent">
          ${sectionData
            .map(
              (item) => `
          <div class="entry">
            <div class="entryHeader">
              <strong>${item.title || ""}</strong>
            </div>
            ${item.description ? `<div class="entryDescription">${item.description}</div>` : ""}
          </div>`
            )
            .join("")}
        </div>
      </section>`;
              })
              .join("")
          : ""
      }
    </main>

    <!-- RIGHT - SIDEBAR -->
    <aside class="right">
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
        <div class="blockContent">
          ${
            contactInfo.email
              ? `<div class="contactItem">
            <span>${contactInfo.email}</span>
          </div>`
              : ""
          }
          ${
            contactInfo.phone
              ? `<div class="contactItem">
            <span>${contactInfo.phone}</span>
          </div>`
              : ""
          }
          ${
            contactInfo.location
              ? `<div class="contactItem">
            <span>${contactInfo.location}</span>
          </div>`
              : ""
          }
          ${
            contactInfo.linkedin
              ? `<div class="contactItem">
            <span>${contactInfo.linkedin}</span>
          </div>`
              : ""
          }
          ${
            contactInfo.github
              ? `<div class="contactItem">
            <span>${contactInfo.github}</span>
          </div>`
              : ""
          }
          ${
            contactInfo.portfolio
              ? `<div class="contactItem">
            <span>${contactInfo.portfolio}</span>
          </div>`
              : ""
          }
        </div>
      </div>`
          : ""
      }

      ${
        spokenLanguages.length
          ? `
      <div class="block">
        <h3>Languages</h3>
        <div class="blockContent">
          <div class="tags">
            ${spokenLanguages.map((l) => `<span class="tag">${l}</span>`).join("")}
          </div>
        </div>
      </div>`
          : ""
      }

      ${
        softSkills.length
          ? `
      <div class="block">
        <h3>Soft Skills</h3>
        <div class="blockContent">
          <div class="tags">
            ${softSkills.map((s) => `<span class="tag">${s.title || s}</span>`).join("")}
          </div>
        </div>
      </div>`
          : ""
      }
    </aside>
  </div>
</div>
</body>
</html>
`;
};