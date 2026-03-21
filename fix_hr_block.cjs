const fs = require('fs');
const filePath = 'landing-page-repo/app/sfp2026/cv-builder/src/app/components/Screen3Workspace.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// The Block removing didn't match perfectly. Doing it explicitly now.
// Block 1 HR Quote starts with "{/* ── Block 1: HR Quote" and ends before "Block 2: Self-Audit"
content = content.replace(
  /\{\/\* ── Block 1: HR Quote with Company Logo ── \*\/\}[\s\S]*?\{\/\* ── Block 2: Self-Audit Checklist ── \*\/\}/u,
  '{/* ── Block 2: Self-Audit Checklist ── */}'
);

fs.writeFileSync(filePath, content);
console.log('Fixed HR quote block deletion');
