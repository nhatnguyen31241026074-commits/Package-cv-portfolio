const fs = require('fs');
const filePath = 'landing-page-repo/app/sfp2026/cv-builder/src/app/components/Screen3Workspace.tsx';
let content = fs.readFileSync(filePath, 'utf8');

const sStr = '{/* ' + String.fromCharCode(9472) + String.fromCharCode(9472) + ' Block 1: HR Quote with Company Logo ' + String.fromCharCode(9472) + String.fromCharCode(9472) + ' */}';
const sIdx = content.indexOf(sStr);

const quoteEnd = content.indexOf('Was this insight helpful?', sIdx);
if (quoteEnd !== -1) {
  let eIdx = content.indexOf('<div', quoteEnd + 50); // Skipping past the buttons
  // fast forward past remaining closing divs for the hr block.
  let furtherDiv = content.indexOf('<div', eIdx + 1);
  if(furtherDiv !== -1 && content.indexOf('Self-Audit Checklist', furtherDiv) < furtherDiv + 300) {
     eIdx = furtherDiv; // The wrapper block for self-audit.
  }

  if (sIdx !== -1 && eIdx !== -1 && eIdx > sIdx) {
      content = content.substring(0, sIdx) + content.substring(content.lastIndexOf('<div', eIdx-1) !== -1 ? content.lastIndexOf('<div', eIdx-1) : eIdx);
      fs.writeFileSync(filePath, content);
      console.log('Removed HR quote from panel successfully via 3rd fallback!');
  }
}
