const fs = require("fs");
let data = fs.readFileSync(
  "landing-page-repo/app/sfp2026/cv-builder/src/data/roleData.ts",
  "utf8",
);

data = data.replace(
  "hrQuote: string;",
  "hrQuotes: { header?: string; summary?: string; experience: string; projects?: string; }",
);

data = data.replace(/hrQuote:\s*`([^`]+)`/g, (match, quote) => {
  return `hrQuotes: {
    header: "Keep your header clean and scannable. Include your LinkedIn and GitHub/Portfolio links.",
    summary: "Your summary should be an elevator pitch. Tell me your years of experience, core expertise, and a key highlight.",
    experience: \`${quote.trim()}\`,
    projects: "Highlight 1-2 impactful projects. What problem did you solve? What stack did you use?"
  }`;
});

data = data.replace(/hrQuote:\s*"([^"]+)"/g, (match, quote) => {
  return `hrQuotes: {
    header: "Keep your header clean and scannable. Include your LinkedIn and GitHub/Portfolio links.",
    summary: "Your summary should be an elevator pitch. Tell me your years of experience, core expertise, and a key highlight.",
    experience: "${quote.trim()}",
    projects: "Highlight 1-2 impactful projects. What problem did you solve? What stack did you use?"
  }`;
});

fs.writeFileSync(
  "landing-page-repo/app/sfp2026/cv-builder/src/data/roleData.ts",
  data,
);
console.log("Fixed roleData!");
