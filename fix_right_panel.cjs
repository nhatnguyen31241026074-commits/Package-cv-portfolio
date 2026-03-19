const fs = require('fs');
const filePath = 'landing-page-repo/app/sfp2026/cv-builder/src/app/components/Screen3Workspace.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// The Breadcrumb was not fully matching the previous regex. Let's do it right.
content = content.replace(
  /<div\s*style=\{\{\s*display:\s*"flex",\s*alignItems:\s*"center",\s*gap:\s*12,\s*marginBottom:\s*16,\s*\}\}\s*>\s*<div\s*style=\{\{\s*display:\s*"flex",\s*alignItems:\s*"center",\s*gap:\s*8,\s*\}\}\s*>[\s\S]*?<\/div>\s*<\/div>/,
  ''
);

// The Header was rendered dynamically: Mastering {SECTION_LABEL[section]} ({LEVEL_LABEL[level]})
content = content.replace(
  /Mastering \{SECTION_LABEL\[section\]\} \(\{LEVEL_LABEL\[level\]\}\)/,
  'Mastering {SECTION_LABEL[section]}'
);

// Remove Block 1: HR Quote. We'll search explicitly for "Block 1:"
content = content.replace(
  /\{\/\*\s*──\s*Block 1: HR Quote[\s\S]*?\{\/\*\s*──\s*Block 1: Checkmarks \*/,
  '{/* ── Block 1: Checkmarks *'
);

// Second attempt at removing Block 1 (because some files use different comments)
content = content.replace(
  /\{\/\*\s*──\s*Block 1: HR Quote[\s\S]*?\{\/\*\s*──\s*Block 2: Self-Audit Checklist \*/,
  '{/* ── Block 2: Self-Audit Checklist *'
);

fs.writeFileSync(filePath, content);
console.log('Fixed Bubble Fixed Position + cleaned up Right panel! (Attempt 2)');
