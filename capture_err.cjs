const { execSync } = require('child_process');
try {
  execSync('npm run build', { stdio: 'pipe', encoding: 'utf8' });
  console.log('Build succeeded.');
} catch (e) {
  const fs = require('fs');
  fs.writeFileSync('build_output.txt', e.stdout + '\n' + e.stderr);
  console.log('Build failed. Wrote output to build_output.txt');
}
