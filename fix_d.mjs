import fs from 'fs';
const p = 'landing-page-repo/app/sfp2026/cv-builder/src/app/components/Screen3Workspace.tsx';
let c = fs.readFileSync(p, 'utf8');

c = c.replace(/top: rect \\\? rect\.top \\\+ 20 : "50%",/, 'top: rect ? rect.bottom + 8 : "50%",');
c = c.replace(/left: rect \\\?.+:/, 'left: rect ? `min(${rect.right - 340}px, 60vw)` : "-356px",');
fs.writeFileSync(p, c);
console.log('Fixed');
