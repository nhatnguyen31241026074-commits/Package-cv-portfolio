const fs = require("fs");
let file =
  "landing-page-repo/app/sfp2026/cv-builder/src/app/components/Screen3Workspace.tsx";
let content = fs.readFileSync(file, "utf8");

// 1. Add onBack to props
content = content.replace(
  /function TopNav\(\{\s*level,\s*onSetLevel,\s*onDownload,\s*\}\:\s*\{\s*level:\s*DiagnosticLevel;\s*onSetLevel:\s*\(l:\s*DiagnosticLevel\)\s*=>\s*void;\s*onDownload:\s*\(\)\s*=>\s*void;\s*\}\)\s*\{/,
  `function TopNav({\n  level,\n  onSetLevel,\n  onDownload,\n  onBack,\n}: {\n  level: DiagnosticLevel;\n  onSetLevel: (l: DiagnosticLevel) => void;\n  onDownload: () => void;\n  onBack?: () => void;\n}) {`,
);

// 2. Remove LevelSwitcher
content = content.replace(
  /<LevelSwitcher level=\{level\} onChange=\{onSetLevel\} \/>/,
  `{/* LevelSwitcher Removed [UX Change - Fix 8] */}`,
);

// 3. Inject Back button
content = content.replace(
  /<div style=\{\{\s*display:\s*"flex",\s*alignItems:\s*"center",\s*gap:\s*10,\s*flex:\s*1\s*\}\}>/,
  `<div style={{ display: "flex", alignItems: "center", gap: 10, flex: 1 }}>
        <button
          onClick={onBack}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            width: 32,
            height: 32,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 8,
            marginRight: 4,
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#f1f5f9")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "none")}
          title="Go Back"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#64748B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>`,
);

fs.writeFileSync(file, content);
console.log("TopNav inside workspace updated");
