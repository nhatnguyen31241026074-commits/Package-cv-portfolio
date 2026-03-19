const fs = require("fs");
let file =
  "landing-page-repo/app/sfp2026/cv-builder/src/app/components/Screen3Workspace.tsx";
let content = fs.readFileSync(file, "utf8");

// The floating quote bubble gets cut off and is redundant since the HR Quote is already displayed
// fully inside the new right glassmorphic panel! So we will completely remove the floating bubble JSX.

content = content.replace(
  /\{\/\* Desktop floating bubble \*\/\}[\s\S]*?<\/div>[\s\S]*?\{\/\* Mobile bottom sheet \*\/\}[\s\S]*?<\/div>\s*<\/div>\s*<\/motion\.div>/g,
  "",
);

content = content.replace(
  /\{\/\* \[UX FIX - Change 3\] - Speech Bubble Display \*\/\}\s*<AnimatePresence>\s*\{\s*isActive && bubbleData && \([\s\S]*?<\/AnimatePresence>/,
  "",
);

content = content.replace(
  /const \[showBubble, setShowBubble\] = useState\(false\);[\s\S]*?\}, \[isActive\]\);/,
  "",
);

// Fix any leftover empty AnimatePresence tags
content = content.replace(
  /<AnimatePresence>\s*\{\s*showBubble && bubbleData && \(\s*\)\s*\}\s*<\/AnimatePresence>/g,
  "",
);

fs.writeFileSync(file, content);
console.log("Removed redundant floating speech bubbles!");
