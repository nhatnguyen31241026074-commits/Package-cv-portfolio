const fs = require('fs');
let content = fs.readFileSync('src/app/components/Screen3Workspace.tsx', 'utf-8');
content = content.replace(/hrCompany:\s*["'](shopee|google|scaleup|vng|grab|startup)["']/gi, 'hrCompany: "expert"');
fs.writeFileSync('src/app/components/Screen3Workspace.tsx', content);
