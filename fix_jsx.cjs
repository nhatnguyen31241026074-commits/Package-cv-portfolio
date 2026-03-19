const fs = require('fs');
const filePath = 'landing-page-repo/app/sfp2026/cv-builder/src/app/components/Screen3Workspace.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// The code currently has this broken structure:
// h2> Mastering {SECTION_LABEL[section]}
// </h2>
// </div>
// <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}> 

const startStr = '              <h2\n                style={{\n                  fontSize: 20,\n                  fontWeight: 800,\n                  color: "#020818",\n                  letterSpacing: "-0.04em",\n                  margin: 0,\n                  lineHeight: 1.2,\n                }}\n              >\n                Mastering {SECTION_LABEL[section]}\n              </h2>\n            </div>';
// It seems the issue is that we forgot to remove the feedback buttons when we removed the glass-card that was holding it.
const brokenCodeStart = `<div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 10,
                  }}
                >
                  <span`;

// Let's find exactly what to remove
const sIdx = content.indexOf('<div\n                  style={{\n                    display: "flex",\n                    alignItems: "center",\n                    justifyContent: "space-between",\n                    gap: 10,\n                  }}\n                >\n                  <span');

if (sIdx !== -1) {
  // We want to delete all the way down to where the Step Checklist starts.
  const eIdx = content.indexOf('{/* ── Block 2: Step Checklist ── */}');
  if (eIdx !== -1) {
    content = content.substring(0, sIdx) + content.substring(eIdx);
    fs.writeFileSync(filePath, content);
    console.log('Fixed broken dangling block!');
  }
}

