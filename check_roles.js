import fs from 'fs';

const code = fs.readFileSync('src/data/roleData.ts', 'utf8');

const tracks = [
  "Frontend Engineer", "Backend Engineer", "Full Stack", "DevOps / Platform", "Mobile Engineer", "Systems Engineer",
  "Product Manager", "Business Analyst", "Growth Analyst", "UX Researcher", "Strategy Lead", "Data PM",
  "Business Development", "Consulting", "Operations", "FinTech Associate", "EdTech Lead", "Partnerships",
  "ML Engineer", "Data Scientist", "AI Researcher", "Prompt Engineer", "AI Product Manager", "MLOps Engineer"
];

const missing = [];
for (const role of tracks) {
  if (!code.includes('"' + role + '": {') && !code.includes("'" + role + "': {")) {
    missing.push(role);
  }
}

console.log('Missing roles:', missing);
