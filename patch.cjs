const fs = require("fs");

let code = fs.readFileSync(
  "landing-page-repo/app/sfp2026/cv-builder/src/app/components/Screen3Workspace.tsx",
  "utf8",
);

// Header Logo Block
code = code.replace(
  /<div\n\s+style={{\n\s+width: 28,\n\s+height: 28,\n\s+borderRadius: 9,\n\s+background: "#020818",/,
  '<button onClick={onBack} style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 28, height: 28, borderRadius: "50%", background: "white", border: "1px solid #E2E8F0", cursor: "pointer", boxShadow: "0 1px 3px rgba(0,0,0,0.05)", marginRight: 4 }}><ArrowLeft size={16} color="#64748b" /></button><div style={{ width: 28, height: 28, borderRadius: 9, background: "#020818",',
);

// Continue Button wrapping
code = code.replace(
  /\{\/\* ── Continue ── \*\/\}\s*<div\s*style=\{\{\s*borderTop: "1px solid #F1F5F9",\s*paddingTop: 18,\s*display: "flex",\s*justifyContent: "flex-end",\s*\}\}\s*>\s*<motion\.button[\s\S]*?Continue to iterate\?[\s\S]*?<\/motion\.button>\s*<\/div>/,
  `{/* ── Continue ── */}
            <AnimatePresence mode="wait">
              {allChecked && (
                <motion.div
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: "auto", marginTop: 18 }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  style={{
                    borderTop: "1px solid #F1F5F9",
                    paddingTop: 18,
                    display: "flex",
                    justifyContent: "flex-end",
                    overflow: "hidden"
                  }}
                >
                  <motion.button
                    whileHover={{ scale: 1.02, x: 2 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={onContinue}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "8px 18px",
                      borderRadius: 9,
                      background: "#020818",
                      border: "none",
                      color: "white",
                      fontSize: 12,
                      fontWeight: 700,
                      cursor: "pointer",
                      boxShadow: "0 2px 10px rgba(2,8,24,0.18)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    Continue to iterate?
                    <ArrowRight size={13} strokeWidth={2.5} />
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>`,
);

// Quote Content
code = code.replace(
  /"At mid-level, your CV should show impact.*?"/g,
  `"As an intern/fresher, I don't expect you to have led a 50-person team. I want to see hunger, clear logic, and ownership."`,
);
code = code.replace(
  /"Your summary should be an elevator pitch\. Tell me your years of experience, core expertise, and a key highlight\."/g,
  `"Your summary should be an elevator pitch. For freshers, highlight your education, core tech stack, and your unique perspective."`,
);
code = code.replace(
  /"Projects are underrated by mid-level candidates.*?"/g,
  `"For freshers, projects are your real experience. Tell me the problem you tackled, your specific role, and the outcome."`,
);

// Quote Bubble Styling
code = code.replace(/width: 440,/g, "width: 300,");
code = code.replace(/padding: "20px 22px",/g, 'padding: "16px 18px",');
code = code.replace(
  /bottom: 24,\s*left: 24,/g,
  "bottom: 40,\n        left: -80,",
);
code = code.replace(/fontSize: 13\.5,/g, "fontSize: 12.5,");

fs.writeFileSync(
  "landing-page-repo/app/sfp2026/cv-builder/src/app/components/Screen3Workspace.tsx",
  code,
);
console.log("Success");
