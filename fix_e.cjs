const fs = require('fs');
let lines = fs.readFileSync('landing-page-repo/app/sfp2026/cv-builder/src/app/components/Screen3Workspace.tsx', 'utf8').split('\n');
for(let i=0; i<lines.length; i++) {
  if(lines[i].includes('top: rect ? rect.top + 20 :')) lines[i] = '                  top: rect ? rect.bottom + 12 : "50%",';
  if(lines[i].includes('left: rect ? `max(16px, px)` :')) lines[i] = '                  left: rect ? `max(16px, px)` : "auto",';
  if(lines[i].includes('right: -8px;')) lines[i] = '              right: auto; left: 32px;';
  if(lines[i].includes('top: 50%;') && i > lines.findIndex(l => l.includes('.speech-bubble-desktop::before'))) lines[i] = '              top: -8px;';
  if(lines[i].includes('transform: translateY(-50%);') && i > lines.findIndex(l => l.includes('.speech-bubble-desktop::before'))) lines[i] = '              transform: none;';
  if(lines[i].includes('border-top: 8px solid transparent;')) lines[i] = '              border-top: none;';
  if(lines[i].includes('border-bottom: 8px solid transparent;')) lines[i] = '              border-bottom: 8px solid white;';
  if(lines[i].includes('border-left: 8px solid white;')) lines[i] = '              border-left: 8px solid transparent; border-right: 8px solid transparent;';
}
fs.writeFileSync('landing-page-repo/app/sfp2026/cv-builder/src/app/components/Screen3Workspace.tsx', lines.join('\n'));
console.log('Fixed block');
