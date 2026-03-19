const fs = require("fs");
let p =
  "landing-page-repo/app/sfp2026/cv-builder/src/app/components/Screen3Workspace.tsx";
let content = fs.readFileSync(p, "utf8");

const anchor = `<motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={(e) => {
                        trackEvent("prompt_copied");
                        handleCopy();
                      }}`;

const newText =
  `<p style={{ fontSize: 13, color: "#1e293b", fontWeight: 600, lineHeight: 1.5, margin: "0 0 14px" }}>
                      Paste this prompt into ChatGPT along with your current CV bullet to get a recruiter-ready rewrite instantly.
                    </p>
                    ` + anchor;

content = content.replace(anchor, newText);
content = content.replace(
  'display: "flex", alignItems: "center", gap: 7, padding: "9px 18px",',
  'display: "flex", alignItems: "center", justifyContent: "center", width: "100%", gap: 7, padding: "12px 18px",',
);

fs.writeFileSync(p, content);
