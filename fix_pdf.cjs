const fs = require('fs');
let c = fs.readFileSync('landing-page-repo/app/sfp2026/cv-builder/src/app/components/Screen4Finish.tsx', 'utf8');
c = c.replace(/cv-checklist\.pdf/, 'PJX_CV_Guide_2026.pdf');
c = c.replace(/Career-Survival-Kit-Checklist\.pdf/, 'PJX_CV_Guide_2026.pdf');
c = c.replace(/Download CV Checklist \\(PDF\\)/, 'Download CV Guide (PDF)');
fs.writeFileSync('landing-page-repo/app/sfp2026/cv-builder/src/app/components/Screen4Finish.tsx', c);
console.log('PDF updated');
