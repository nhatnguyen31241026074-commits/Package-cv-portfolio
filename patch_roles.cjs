const fs = require(s);
const p = landing-page-repo/app/sfp2026/cv-builder/src/data/roleData.ts;
let c = fs.readFileSync(p, utf8);
c = c.replace(/hrQuotes:\s*\{[^}]*\}/g, () => hrQuotes: {\n        header: \Keep your header clean. Link your LinkedIn and relevant portfolios.\,\n        summary: \Pitch your strongest traits in 2 lines.\,\n        experience: \Focus on outcomes and value shipped, not tasks.\,\n        projects: \Detail the tech stack and the problem you solved.\\n      });
fs.writeFileSync(p, c); console.log(done);