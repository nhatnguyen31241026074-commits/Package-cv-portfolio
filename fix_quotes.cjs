const fs = require('fs');
let txt = fs.readFileSync('landing-page-repo/app/sfp2026/cv-builder/src/app/components/Screen3Workspace.tsx', 'utf8');

// Condition rendering for Continue to iterate
txt = txt.replace(
  `            {/* ── Continue ── */}\n            <div\n              style={{\n                borderTop: "1px solid #F1F5F9",\n                paddingTop: 18,\n                display: "flex",\n                justifyContent: "flex-end",\n              }}\n            >\n              <motion.button\n                whileHover={{ scale: 1.02, x: 2 }}\n                whileTap={{ scale: 0.97 }}\n                onClick={onContinue}`,
  `            {/* ── Continue ── */}\n            <AnimatePresence>\n             {allChecked && (\n            <motion.div\n              initial={{ opacity: 0, height: 0, marginTop: 0 }}\n              animate={{ opacity: 1, height: "auto", marginTop: 18 }}\n              exit={{ opacity: 0, height: 0 }}\n              style={{\n                borderTop: "1px solid #F1F5F9",\n                paddingTop: 18,\n                display: "flex",\n                justifyContent: "flex-end",\n                overflow: "hidden"\n              }}\n            >\n              <motion.button\n                whileHover={{ scale: 1.02, x: 2 }}\n                whileTap={{ scale: 0.97 }}\n                onClick={onContinue}`
);

txt = txt.replace(
  `                Continue to iterate?\n                <ArrowRight size={13} strokeWidth={2.5} />\n              </motion.button>\n            </div>\n          </motion.div>\n        </AnimatePresence>\n      </div>\n    </>\n  );\n}`,
  `                Continue to iterate?\n                <ArrowRight size={13} strokeWidth={2.5} />\n              </motion.button>\n            </motion.div>\n            )}\n            </AnimatePresence>\n          </motion.div>\n        </AnimatePresence>\n      </div>\n    </>\n  );\n}`
);

fs.writeFileSync('landing-page-repo/app/sfp2026/cv-builder/src/app/components/Screen3Workspace.tsx', txt);
