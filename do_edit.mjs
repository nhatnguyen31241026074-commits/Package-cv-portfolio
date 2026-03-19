import fs from 'fs';
let file = 'landing-page-repo/app/sfp2026/cv-builder/src/app/components/Screen3Workspace.tsx';
let t = fs.readFileSync(file, 'utf8');
t = t.replace(\Career Survival Kit <ArrowRight size={18} />\, \Career Survival Kit\);
t = t.replace(\          <span\\n            style={{\\n              fontSize: 13,\\n              fontWeight: 600,\\n              color: \\\
