const { execSync } = require('child_process');
try {
  const out = execSync('npm run build', { encoding: 'utf8', stdio: 'pipe' });
  console.log('SUCCESS');
} catch (e) {
  console.log('ERROR:');
  console.log(e.stdout);
  console.log(e.stderr);
}
