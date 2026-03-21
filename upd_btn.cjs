const fs = require("fs");
let p =
  "landing-page-repo/app/sfp2026/cv-builder/src/app/components/Screen3Workspace.tsx";
let c = fs.readFileSync(p, "utf8");

const anchor = `<div style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>`;
const endAnchor = `</button>\n        </div>`;

let start = c.indexOf(anchor);
if (start !== -1) {
  let end = c.indexOf(endAnchor, start) + endAnchor.length;
  c = c.slice(0, start) + `<div style={{ flex: 1 }}></div>` + c.slice(end);
  fs.writeFileSync(p, c);
  console.log("Removed top-right button.");
} else {
  console.log("Could not find button header.");
}
