const fs = require("fs");
const file =
  "d:\\ProjectX_Package-CV\\src\\app\\components\\Screen3Workspace.tsx";
let code = fs.readFileSync(file, "utf8");

const s1 = code.indexOf("HR Quote with Company Logo");
if (s1 !== -1) {
  let toReplaceStart = code.lastIndexOf("{/*", s1);

  let s2 = code.indexOf("Step Checklist", s1);
  let toReplaceEnd = code.lastIndexOf("{/*", s2);

  if (toReplaceStart !== -1 && toReplaceEnd !== -1) {
    code = code.substring(0, toReplaceStart) + code.substring(toReplaceEnd);
    fs.writeFileSync(file, code);
    console.log("Removed Block 1");
  } else {
    console.log("Could not properly bounds", toReplaceStart, toReplaceEnd);
  }
} else {
  console.log("not found hr quote");
}
