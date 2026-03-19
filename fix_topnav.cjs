const fs = require("fs");

const path =
  "landing-page-repo/app/sfp2026/cv-builder/src/app/components/TopNav.tsx";
let content = fs.readFileSync(path, "utf8");

// 1. Add onBack to Props
content = content.replace(
  /export function TopNav\(\{\n  level,\n  onSetLevel,\n\}: \{\n  level: DiagnosticLevel;\n  onSetLevel: \(l: DiagnosticLevel\) => void;\n\}\)/g,
  `export function TopNav({\n  level,\n  onSetLevel,\n  onBack\n}: {\n  level: DiagnosticLevel;\n  onSetLevel: (l: DiagnosticLevel) => void;\n  onBack?: () => void;\n})`,
);

// 2. Replace Logo with Back Button
const logoBlockRegex =
  /\{\/\*\s*Logo\s*\*\/\}.*?<div.*?<div.*?SK<\/div>\s*<\/div>\s*<\/div>/s;
const backButtonBlock = `{/* Ghost Back Button */}
      <button 
        onClick={onBack}
        style={{ 
          background: 'transparent', 
          border: 'none', 
          cursor: 'pointer',
          padding: '8px 12px',
          display: 'flex',
          alignItems: 'center',
          color: '#6B7280',
          fontWeight: 600,
          fontSize: 14,
          gap: 6
        }}
      >
        <span>←</span> Back
      </button>`;

content = content.replace(logoBlockRegex, backButtonBlock);

// 3. Remove the rendered LevelSwitcher in TopNav
const levelSwitcherRenderRegex =
  /<LevelSwitcher level=\{level\} onSetLevel=\{onSetLevel\} \/>/s;
content = content.replace(
  levelSwitcherRenderRegex,
  `{/* LevelSwitcher Removed */}`,
);

fs.writeFileSync(path, content);
console.log("TopNav updated");
