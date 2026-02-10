const fs = require("fs");
const path = require("path");

const baseCss = fs.readFileSync(
  path.join(__dirname, "template2/base.css"),
  "utf8"
);

const printCss = fs.readFileSync(
  path.join(__dirname, "template2/print.css"),
  "utf8"
);

exports.TemplatePreview2 = function TemplatePreview2(data = {}) {
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
<div class="resume-2">

  <!-- LEFT SIDEBAR -->
  <aside class="sidebar">
    <h1>${contactInfo.fullName || "Your Name"}</h1>
    ${contactInfo.email ? `<p>${contactInfo.email}</p>` : ""}
    ${contactInfo.phone ? `<p>${contactInfo.phone}</p>` : ""}
    ${contactInfo.location ? `<p>${contactInfo.location}</p>` : ""}

    ${
      contactInfo.github || contactInfo.linkedin || contactInfo.portfolio
        ? `
    <div class="links">
      ${contactInfo.github ? `<div>${contactInfo.github}</div>` : ""}
      ${contactInfo.linkedin ? `<div>${contactInfo.linkedin}</div>` : ""}
      ${contactInfo.portfolio ? `<div>${contactInfo.portfolio}</div>` : ""}
    </div>`
        : ""
    }

    ${
      spokenLanguages.length
        ? `
    <h3>Languages</h3>
    <ul>
      ${spokenLanguages.map((l) => `<li>${l}</li>`).join("")}
    </ul>`
        : ""
    }

    ${
      softSkills.length
        ? `
    <h3>Soft Skills</h3>
    <ul>
      ${softSkills.map((s) => `<li>${s.title || s}</li>`).join("")}
    </ul>`
        : ""
    }
  </aside>

  <!-- MAIN CONTENT -->
  <main class="content">

    ${
      professionalSummary
        ? `
    <section>
      <h2>Professional Summary</h2>
      <p>${professionalSummary}</p>
    </section>`
        : ""
    }

    ${
      experience.length
        ? `
    <section>
      <h2>Experience</h2>
      ${experience
        .map(
          (e) => `
      <div>
        <strong>${e.role || ""} — ${e.organization || ""}</strong>
        <div class="date">${e.startDate || ""} — ${e.endDate || "Present"}</div>
        ${e.description ? `<p>${e.description}</p>` : ""}
      </div>`
        )
        .join("")}
    </section>`
        : ""
    }

    ${
      skills.length
        ? `
    <section>
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
    </section>`
        : ""
    }

    ${
      projects.length
        ? `
    <section>
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
    </section>`
        : ""
    }

    ${
      education.length
        ? `
    <section>
      <h2>Education</h2>
      ${education
        .map(
          (e) => `
      <div>
        <strong>${e.degree || ""} — ${e.field || ""}</strong>
        <div>${e.institution || ""}</div>
        <div class="date">${e.startDate || ""} — ${e.endDate || "Present"}</div>
      </div>`
        )
        .join("")}
    </section>`
        : ""
    }

    ${
      certifications.length
        ? `
    <section>
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
    </section>`
        : ""
    }

    ${
      blogs.length
        ? `
    <section>
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
    </section>`
        : ""
    }

    ${
      awards.length
        ? `
    <section>
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
    <section>
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
    </section>`;
            })
            .join("")
        : ""
    }

  </main>
</div>
</body>
</html>
`;
};