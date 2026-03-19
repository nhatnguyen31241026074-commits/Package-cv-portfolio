const fs = require('fs');
let txt = fs.readFileSync('landing-page-repo/app/sfp2026/cv-builder/src/app/components/Screen3Workspace.tsx', 'utf8');

txt = txt.replace(
\  export function Screen3Workspace({
    level,
    onSetLevel,\,
\  export function Screen3Workspace({
    level,
    onSetLevel,
    onBack,\
);

txt = txt.replace(
\          <span
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: "#020818",\,
\          <button
            onClick={onBack}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "6px",
              marginRight: "6px",
              borderRadius: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 0.2s",
            }}
          >
            <ArrowRight size={18} style={{ transform: "rotate(180deg)", color: "#64748B" }} />
          </button>
          <span
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: "#020818",\
);

fs.writeFileSync('landing-page-repo/app/sfp2026/cv-builder/src/app/components/Screen3Workspace.tsx', txt);
