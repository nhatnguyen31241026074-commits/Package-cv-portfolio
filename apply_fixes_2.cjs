const fs = require("fs");
let code = fs.readFileSync("src/app/components/Screen3Workspace.tsx", "utf8");

// Fix 5 (Wrap continue)
const searchStr = `{/* ── Continue ── */}
            <div
              style={{
                marginTop: "auto",`;
const replaceStr = `{/* ── Continue ── */}
            {allChecked && (
            <div
              style={{
                marginTop: "auto",`;

if (code.includes(searchStr)) {
  code = code.replace(searchStr, replaceStr);
  const endSearch = `<ArrowRight size={13} strokeWidth={2.5} />
              </motion.button>
            </div>`;
  const endReplace = `<ArrowRight size={13} strokeWidth={2.5} />
              </motion.button>
            </div>
            )}`;
  code = code.replace(endSearch, endReplace);
}

// Clean up ChatGPT globally
code = code.replace(/ChatGPT/gi, "your AI");

fs.writeFileSync("src/app/components/Screen3Workspace.tsx", code);
