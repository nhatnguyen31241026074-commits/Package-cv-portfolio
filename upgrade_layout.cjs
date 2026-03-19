const fs = require("fs");
let file =
  "landing-page-repo/app/sfp2026/cv-builder/src/app/components/Screen3Workspace.tsx";
let content = fs.readFileSync(file, "utf8");

// 1. In Screen3Workspace main container, update the flex layout to support the sliding Right Panel
content = content.replace(
  /<div style=\{\{\s*flex:\s*1,\s*display:\s*"flex",\s*overflow:\s*"hidden"\s*\}\}>/,
  `<div style={{ flex: 1, display: "flex", overflow: "hidden", position: "relative", backgroundColor: "#FAFBFF", backgroundImage: "radial-gradient(#CBD5E1 1px, transparent 1px)", backgroundSize: "24px 24px" }}>`,
);

// 2. Modify LeftCVColumn to remove width: 50% and background F1F5F9, making it dynamic and expanding
content = content.replace(
  /className="cv-left-scroll"\s*style=\{\{\s*width:\s*"50%",\s*overflowY:\s*"auto",\s*background:\s*"#F1F5F9",\s*borderRight:\s*"1px solid #E2E8F0",\s*padding:\s*"28px 24px 60px",\s*display:\s*"flex",\s*flexDirection:\s*"column",\s*alignItems:\s*"center",\s*\}\}/g,
  `className="cv-left-scroll"
          style={{
            width: activeSection ? "60%" : "100%",
            transition: "width 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
            overflowY: "auto",
            background: "transparent",
            padding: "40px 24px 80px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}`,
);

// 3. Make A4 Paper inside LeftCVColumn wider
content = content.replace(
  /maxWidth:\s*520,\s*border:\s*"1px solid #E2E8F0"/g,
  `maxWidth: 720,\n            border: "1px solid rgba(226,232,240,0.8)"`,
);

// 4. Modify RightInsightPanel to act as a glassmorphic sliding panel OVER the right side
content = content.replace(
  /className="cv-right-scroll"\s*onScroll=\{\(e\) =>\s*handleScrollDepthTracking\(e,\s*"Screen3Workspace_HRPanel"\)\s*\}\s*style=\{\{\s*width:\s*"50%",\s*overflowY:\s*"auto",\s*background:\s*"white",\s*display:\s*"flex",\s*flexDirection:\s*"column",\s*\}\}/g,
  `className="cv-right-scroll"
        onScroll={(e) =>
          handleScrollDepthTracking(e, "Screen3Workspace_HRPanel")
        }
        style={{
          width: "40%",
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          transform: section ? "translateX(0)" : "translateX(100%)",
          opacity: section ? 1 : 0,
          pointerEvents: section ? "auto" : "none",
          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          overflowY: "auto",
          background: "rgba(255, 255, 255, 0.85)",
          backdropFilter: "blur(24px)",
          borderLeft: "1px solid rgba(226, 232, 240, 0.8)",
          boxShadow: "-20px 0 40px rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          zIndex: 50,
        }}`,
);

// 5. Turn off the old buggy speech-bubble-desktop entirely (since we have this awesome popup panel now)
content = content.replace(
  /\.speech-bubble-desktop \{\s*display:\s*flex\s*!important;\s*position:\s*absolute;/,
  `.speech-bubble-desktop { display: none !important; position: absolute;`,
);

fs.writeFileSync(file, content);
console.log('Layout updated to "mother site" theme with sliding popup!');
