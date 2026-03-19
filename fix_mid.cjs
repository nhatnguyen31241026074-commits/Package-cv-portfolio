const fs = require("fs");
let p =
  "landing-page-repo/app/sfp2026/cv-builder/src/app/components/Screen3Workspace.tsx";
let c = fs.readFileSync(p, "utf8");

c = c.replace(
  /getRoleLevelData\(selectedRole, "mid"\)/g,
  'getRoleLevelData(selectedRole, "developing")',
);
c = c.replace(
  /PANEL_DATA\[sectionId\]\['mid'\]/g,
  "PANEL_DATA[sectionId]['developing']",
);
c = c.replace(
  /PANEL_DATA\[sectionId\]\["mid"\]/g,
  'PANEL_DATA[sectionId]["developing"]',
);

fs.writeFileSync(p, c);
console.log("Done");
