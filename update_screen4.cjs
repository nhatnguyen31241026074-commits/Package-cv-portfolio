const fs = require("fs");
const path =
  "landing-page-repo/app/sfp2026/cv-builder/src/app/components/Screen4Finish.tsx";
let content = fs.readFileSync(path, "utf8");

// Change 4: Redesign the final screen
content = content.replace(
  /Your CV is\s*<br \/>\s*<span style=\{\{ color: "#0E56FA" \}\}>recruiter-ready\.<\/span>/g,
  'Now rewrite your CV<br />\n            <span style={{ color: "#0E56FA" }}>bullet with AI →</span>',
);

content = content.replace(
  /You've applied the XYZ formula across your CV sections\. Time to take\s*the next step with your full application kit\./g,
  "Copy the optimized bullet below → paste into ChatGPT → get a recruiter-ready version in seconds.",
);

content = content.replace(/padding: "20px 24px"/g, 'padding: "32px 32px"');
content = content.replace(
  />\s*Your Optimized Bullet\s*<\/span>/g,
  ">YOUR OPTIMIZED BULLET</span>",
);

content = content.replace(
  /background: copied \? "#F0FDF4" : "#FAFBFF",/g,
  'background: copied ? "#16a34a" : "#0E56FA",',
);

content = content.replace(
  /color: copied \? "#16a34a" : "#94a3b8",/g,
  'color: "white",',
);

content = content.replace(/padding: "11px",/g, 'padding: "16px",');

content = content.replace(
  /"Click to copy bullet"/g,
  '"Copy Your Optimized Bullet ✓"',
);

// Reorder buttons
// We have two buttons inside "Action Buttons", Ghost first, Primary second.
// Let's match them exactly.
const btnSection = content.match(
  /\{\/\* Ghost button \*\/\}.*?(?=\{\/\* Restart \*\/})/s,
)[0];

const ghostBtn = btnSection.match(
  /\{\/\* Ghost button \*\/\}.*?(?=\{\/\* Primary CTA \*\/\})/s,
)[0];
const primaryBtn = btnSection.match(/\{\/\* Primary CTA \*\/\}.*/s)[0];

if (ghostBtn && primaryBtn) {
  const newBtnSection =
    primaryBtn.trim() +
    "\n\n          " +
    ghostBtn.trim() +
    "\n        </motion.div>\n\n        ";
  content = content.replace(btnSection, newBtnSection);
}

fs.writeFileSync(path, content);
console.log("Updated Screen4Finish.tsx");
