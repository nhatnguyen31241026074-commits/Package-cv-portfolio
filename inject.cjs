const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'expandedCvData.ts');
let content = fs.readFileSync(filePath, 'utf8');

const defaultAwards = `      "awards": [
        {
          "name": "Excellence Award",
          "issuer": "Industry Tech Conference",
          "date": "2023",
          "description": "Recognized for outstanding contributions and technical leadership within the domain."
        }
      ],`;

const defaultActivities = `      "activities": [
        {
          "organisation": "Tech Community Vietnam",
          "role": "Active Member & Contributor",
          "dates": "Jan 2022–Present",
          "bullets": [
            "Participated in monthly meetups to discuss emerging technologies and best practices",
            "Mentored junior professionals entering the industry"
          ]
        }
      ]`;

// We look for the closing bracket of the "projects" array at the end of a level
// which looks exactly like:
//       ]
//     },
// or
//       ]
//     }
// We will replace it with:
//       ],
//       "awards": [...],
//       "activities": [...]
//     },

// Let's use a regex to find the end of the projects array for a level.
// Structure:
// "projects": [
//   ...
// ]
// }

let newContent = content.replace(/(      "projects":\s*\[[\s\S]*?)\n      \]\n    \}/g, (match, p1) => {
  return `${p1}\n      ],\n${defaultAwards}\n${defaultActivities}\n    }`;
});

newContent = newContent.replace(/(      "projects":\s*\[[\s\S]*?)\n      \]\n    \},/g, (match, p1) => {
  return `${p1}\n      ],\n${defaultAwards}\n${defaultActivities}\n    },`;
});

fs.writeFileSync(filePath, newContent, 'utf8');
console.log('Injection complete.');
