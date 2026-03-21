const fs = require("fs");
let file =
  "D:/ProjectX_Package-CV/landing-page-repo/app/sfp2026/cv-builder/src/app/components/Screen3Workspace.tsx";
let content = fs.readFileSync(file, "utf8");

// Fix the mangled AnimatePresence block
content = content.replace(
  /<AnimatePresence>\s*\{\s*showBubble && bubbleData && \(\s*<motion\.div\s*initial=\{\{\s*opacity:\s*0,\s*scale:\s*0\.9\s*\}\}\s*animate=\{\{\s*opacity:\s*1,\s*scale:\s*1\s*\}\}\s*exit=\{\{\s*opacity:\s*0,\s*scale:\s*0\.9\s*\}\}\s*transition=\{\{\s*duration:\s*0\.18,\s*ease:\s*"easeOut"\s*\}\}\s*>\s*\)\}\s*<\/AnimatePresence>/g,
  "",
);

fs.writeFileSync(file, content);
