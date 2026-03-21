import fs from 'fs';

let code = fs.readFileSync('src/data/roleData.ts', 'utf8');

const roles = [
  'ML Engineer',
  'Data Scientist',
  'AI Researcher',
  'Prompt Engineer',
  'AI Product Manager',
  'MLOps Engineer'
];

roles.forEach(role => {
  const marker = '  "' + role + '": {';
  let firstIdx = code.indexOf(marker);
  if (firstIdx !== -1) {
    let secondIdx = code.indexOf(marker, firstIdx + 1);
    while (secondIdx !== -1) {
      let nextRoleIdx = code.indexOf('\n  "', secondIdx + marker.length);
      if (nextRoleIdx === -1) nextRoleIdx = code.indexOf('\n};', secondIdx);
      
      console.log('Removing duplicate for', role, 'from', secondIdx, 'to', nextRoleIdx);
      code = code.substring(0, secondIdx) + code.substring(nextRoleIdx);
      secondIdx = code.indexOf(marker, firstIdx + 1);
    }
  }
});

fs.writeFileSync('src/data/roleData.ts', code, 'utf8');
console.log('Fixed duplicates.');
