const fs = require("fs");

function processFile(filePath) {
  let code = fs.readFileSync(filePath, "utf8");

  // FIX: Step counter
  code = code.replace(/Step 3 of 4/g, "Step 2 of 3");

  // FIX: ChatGPT -> your AI
  code = code.replace(
    /premium ChatGPT rewrite prompt/g,
    "your AI rewrite prompt",
  );
  code = code.replace(
    /\? "Copied! Paste into ChatGPT →"/g,
    '? "Copied! Paste into your AI →"',
  );
  code = code.replace(/Paste this into ChatGPT/g, "Paste this into your AI");
  code = code.replace(/Copy to ChatGPT/g, "Copy to your AI");
  code = code.replace(/Paste to ChatGPT/g, "Paste to your AI");

  // FIX: Mid-Level texts
  // For breadcrumb "🚀 Mid-Level"
  code = code.replace(/<span[^>]*>\s*🚀\s*Mid-Level\s*<\/span>/g, "");
  // For Screen3Workspace breadcrumb that uses LEVEL_OPTS logic:
  code = code.replace(
    /<span[^>]*>\s*\{LEVEL_OPTS\.find\(\(o\) => o\.id === level\)\?\.emoji\} \{" "\}\s*\{LEVEL_LABEL\[level\]\}\s*<\/span>/g,
    "",
  );

  // Title fix
  code = code.replace(
    /Mastering \{SECTION_LABEL\[section\]\} \(\{LEVEL_LABEL\[level\]\}\)/g,
    "Mastering {SECTION_LABEL[section]}",
  );

  // Tab switcher fix
  code = code.replace(
    /<div\s*style=\{\{\s*position:\s*"absolute",\s*left:\s*"50%",\s*transform:\s*"translateX\(-50%\)",\s*\}\}\s*>\s*<LevelSwitcher level=\{level\} onChange=\{onSetLevel\} \/>\s*<\/div>/g,
    "",
  );
  code = code.replace(
    /<LevelSwitcher level=\{level\} onChange=\{onSetLevel\} \/>/g,
    "",
  );

  fs.writeFileSync(filePath, code);
}

[
  "src/app/components/Screen3Workspace.tsx",
  "src/app/components/MobileWorkspacePreview.tsx",
  "src/app/components/PJXWorkspace.tsx",
].forEach((f) => {
  if (fs.existsSync(f)) {
    processFile(f);
  }
});

// Final Fix 5 (Wrap continue) for Screen3Workspace.tsx
let swCode = fs.readFileSync("src/app/components/Screen3Workspace.tsx", "utf8");
const searchStr = `{/* ── Continue ── */}
            <div
              style={{
                marginTop: "auto",`;
const replaceStr = `{/* ── Continue ── */}
            {allChecked && (
            <div
              style={{
                marginTop: "auto",`;

if (swCode.includes(searchStr)) {
  swCode = swCode.replace(searchStr, replaceStr);
  const endSearch = `<ArrowRight size={13} strokeWidth={2.5} />
              </motion.button>
            </div>`;
  const endReplace = `<ArrowRight size={13} strokeWidth={2.5} />
              </motion.button>
            </div>
            )}`;
  swCode = swCode.replace(endSearch, endReplace);

  // Actually, wait, some other occurrences might exist or maybe it's just Screen3.
}

// Clean up ChatGPT from roleData/promptsData if any?
// Oh, the AI prompts themselves might have "ChatGPT".
let promptsCode = fs.existsSync("src/app/components/Screen3Workspace.tsx")
  ? fs.readFileSync("src/app/components/Screen3Workspace.tsx", "utf8")
  : "";
promptsCode = promptsCode.replace(/ChatGPT/gi, "your AI");
fs.writeFileSync("src/app/components/Screen3Workspace.tsx", promptsCode);

fs.writeFileSync("src/app/components/Screen3Workspace.tsx", swCode);

console.log("Replacements complete.");
