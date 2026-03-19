const fs = require("fs");
let code = fs.readFileSync("src/app/components/Screen3Workspace.tsx", "utf8");

// FIX 1: Breadcrumb
code = code.replace(
  /<span.*?\{LEVEL_OPTS\.find\(\(o\) => o\.id === level\)\?\.emoji.*?\n.*?\{LEVEL_LABEL\[level\]\}\n\s*<\/span>/,
  "",
);

// FIX 1: Title
code = code.replace(
  /Mastering \{SECTION_LABEL\[section\]\} \(\{LEVEL_LABEL\[level\]\}\)/g,
  "Mastering {SECTION_LABEL[section]}",
);

// FIX 2: LevelSwitcher removal
code = code.replace(
  /<div\s*style=\{\{\s*position: "absolute",\s*left: "50%",\s*transform: "translateX\(-50%\)",\s*\}\}\s*>\s*<LevelSwitcher level=\{level\} onChange=\{onSetLevel\} \/>\s*<\/div>/g,
  "",
);
code = code.replace(
  /<LevelSwitcher level=\{level\} onChange=\{onSetLevel\} \/>/g,
  "",
);

// FIX 3: Step
code = code.replace(/Step 3 of 4/g, "Step 2 of 3");

// FIX 4: ChatGPT removal
code = code.replace(
  /premium ChatGPT rewrite prompt/g,
  "your AI rewrite prompt",
);
code = code.replace(
  /\? "Copied! Paste into ChatGPT →"/g,
  '? "Copied! Paste into your AI →"',
);
code = code.replace(/Paste this into ChatGPT/g, "Paste this into your AI");

// FIX 5: Wrap Continue button
const searchStr = `{/* ── Continue ── */}
            <div
              style={{
                marginTop: "auto",`;
const replaceStr = `{/* ── Continue ── */}
            {allChecked && (
            <div
              style={{
                marginTop: "auto",`;
code = code.replace(searchStr, replaceStr);

const endSearch = `<ArrowRight size={13} strokeWidth={2.5} />
              </motion.button>
            </div>`;
const endReplace = `<ArrowRight size={13} strokeWidth={2.5} />
              </motion.button>
            </div>
            )}`;
code = code.replace(endSearch, endReplace);

fs.writeFileSync("src/app/components/Screen3Workspace.tsx", code);
console.log("Fixed Screen3Workspace.tsx");
