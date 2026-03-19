const { execSync } = require("child_process");
console.log('grep -r "Mid-Level" src/ --include="*.tsx" --include="*.ts" -l');
try {
  console.log(
    execSync('git grep -l "Mid-Level" -- "src/**/*.tsx" "src/**/*.ts"')
      .toString()
      .trim(),
  );
} catch (e) {}

console.log(
  '\ngrep -r "3 of 4\\|3 OF 4\\|Step 3" src/ --include="*.tsx" --include="*.ts" -l',
);
try {
  console.log(
    execSync(
      'git grep -l -E "3 of 4|3 OF 4|Step 3" -- "src/**/*.tsx" "src/**/*.ts"',
    )
      .toString()
      .trim(),
  );
} catch (e) {}

console.log('\ngrep -r "ChatGPT" src/ --include="*.tsx" --include="*.ts" -l');
try {
  console.log(
    execSync('git grep -l "ChatGPT" -- "src/**/*.tsx" "src/**/*.ts"')
      .toString()
      .trim(),
  );
} catch (e) {}

console.log(
  '\ngrep -r "Beginner\\|Expert\\|beginner\\|expert" src/ --include="*.tsx" --include="*.ts" -l',
);
try {
  console.log(
    execSync(
      'git grep -l -i -E "Beginner|Expert" -- "src/**/*.tsx" "src/**/*.ts"',
    )
      .toString()
      .trim(),
  );
} catch (e) {}
