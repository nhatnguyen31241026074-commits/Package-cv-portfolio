const fs = require('fs');

const roles = [
  'Software Engineering (SWE)',
  'Artificial Intelligence (AI) / Machine Learning (ML)',
  'Data Analytics (DA) & Business Intelligence (BI)',
  'Data Engineering',
  'Cloud Engineering / DevOps',
  'Product Management (PM)',
  'Product Growth / Growth PM',
  'Business Analytics (BA)',
  'UI/UX / Product Design',
  'Project Management (Tech Projects)',
  'Business Development (Tech Industry)',
  'Digital Marketing (Tech-focused)',
  'Operations (Tech Operations / Process Automation)'
];

const sections = {
  header: role => `You are an expert CV consultant specializing in ${role} roles in the tech industry.

I will now give you my personal contact details. Your job is to format them into a clean, professional contact header for the top of my Harvard-style CV.

Format the output as a single clean line or two lines maximum. Include: full name, phone number, email, LinkedIn URL, GitHub or portfolio URL (if I provide one), and city/country. Separate each item with a vertical bar (|) or a bullet point.

Rules:
- Do not include my full home address — city and country only
- Do not add any labels like "Email:" or "Phone:" — just the values
- If I do not provide a GitHub or portfolio, leave it out
- Keep it clean and scannable

Here are my details:
- Full name: [YOUR FULL NAME]
- Phone: [YOUR PHONE NUMBER]
- Email: [YOUR EMAIL ADDRESS]
- LinkedIn: [YOUR LINKEDIN URL]
- GitHub / Portfolio / Behance: [YOUR LINK OR WRITE "none"]
- City, Country: [YOUR CITY, COUNTRY]`,

  summary: role => `You are an expert CV consultant specializing in ${role} roles in the tech industry.

Write a Professional Summary for my CV. It must be exactly 2–3 sentences. No personal pronouns (do not use "I", "my", or "we"). Start with my experience level or key strength, include one quantifiable result if I provide one, and end with my career direction.

Make it specific to ${role}. Avoid generic filler phrases like "passionate about", "team player", "results-driven", or "dynamic professional".

Here is my background:
- Current status: [e.g. "Final-year student", "1 year of internship experience", "2 years as a data analyst"]
- Top 1–2 strengths relevant to ${role}: [YOUR STRENGTHS]
- One achievement or result you are proud of (include numbers if possible): [YOUR ACHIEVEMENT]
- Type of role or company you are targeting: [YOUR TARGET e.g. "PM role at a Series B startup" or "SWE role at a product-led tech company"]`,

  experience: role => `You are an expert CV consultant specializing in ${role} roles in the tech industry.

I will give you one work experience entry. Transform it into 3–5 strong bullet points for my CV using the ACE formula:
Action Verb → Context (what, how, with whom, at what scale) → End Result (quantified outcome)

Rules:
- No personal pronouns
- Past tense for completed roles, present tense for current roles
- Start each bullet with a strong action verb
- Include at least one number per bullet (%, headcount, revenue, time saved, volume)
- Highlight skills and tools relevant to ${role}
- Do not list responsibilities — show impact and ownership

Here is my experience entry:

Company name: [COMPANY NAME]
Role title: [YOUR TITLE]
Duration: [e.g. Jun 2024 – Aug 2024]
What I did day-to-day: [DESCRIBE FREELY — no formatting needed, just tell me what you actually did]
Tools / methods / frameworks I used: [LIST TOOLS]
Results or metrics I remember (rough estimates are fine): [ANY NUMBERS OR OUTCOMES]

---
If you have more than one experience, paste additional entries below in the same format, separated by "---".`,

  projects: role => `You are an expert CV consultant specializing in ${role} roles in the tech industry.

I will describe one of my projects. Write a CV project entry that includes:
1. A one-line project title and description (what it is and what problem it solves)
2. 2–3 bullet points covering: what I built, how I built it, and the result or outcome

Make the entry relevant to ${role}. Emphasize technical decisions, product thinking, or measurable outcomes depending on the role.

Rules:
- No personal pronouns
- Include tools, technologies, or methods used
- If I give you a GitHub or demo link, include it next to the title
- If the project is unfinished, frame it around what was built and what was learned

Here is my project:

Project name: [PROJECT NAME]
Type: [e.g. personal, academic, hackathon, open-source, freelance]
What it does / what problem it solves: [DESCRIBE]
Technologies / tools / methods used: [LIST]
Result, outcome, or key learning: [e.g. "200 users onboarded", "won 2nd place", "grade A", "reduced processing time by 40%"]
GitHub / Demo link: [LINK OR WRITE "none"]

---
If you have more than one project, paste additional entries below in the same format, separated by "---".`,

  achievements: role => `You are an expert CV consultant specializing in ${role} roles in the tech industry.

I will give you a list of my achievements and awards. Format each one as a single clean line for the Achievements & Awards section of my CV.

Each line should include: Award name — Issuing organization, Date (and a brief context note in parentheses if relevant).

Rules:
- Most recent first
- Keep each entry to one line
- Only include competitive or merit-based recognition — skip participation certificates
- Add context if it makes the award more impressive (e.g. "out of 500 teams", "top 5% of cohort")

Here are my awards:
[PASTE EACH AWARD ON A NEW LINE — include name, organization, date, and any context you remember]

Example format to follow:
- Top 10 Finalist — Google Solution Challenge 2024 (out of 6,500+ global teams)
- Dean's List — School of Business, RMIT Vietnam, Semester 1 2023`,

  activities: role => `You are an expert CV consultant specializing in ${role} roles in the tech industry.

I will describe one or more of my extracurricular activities or volunteer experiences. Write 1–2 bullet points per activity for the Activities & Leadership section of my CV.

Use the ACE formula: Action Verb → Context (what, with whom, at what scale) → End Result (impact or outcome).

Rules:
- No personal pronouns
- Highlight leadership, ownership, and transferable skills relevant to ${role}
- Include numbers where possible (members led, events organized, funds raised, participants reached)
- Past tense for completed roles, present tense for current ones

Here are my activities:

Organization name: [ORGANIZATION NAME]
My role / title: [e.g. "Head of Events", "Volunteer Coordinator", "Member"]
Duration: [e.g. Sep 2022 – May 2023]
What I did: [DESCRIBE — events organized, people led, programs run, etc.]
Any outcome or result: [e.g. "150 attendees", "VND 12M raised", "30 new members recruited"]

---
Paste additional activities below in the same format, separated by "---".`,

  skills: role => `You are an expert CV consultant specializing in ${role} roles in the tech industry.

I will give you a raw list of everything I know — tools, languages, platforms, certifications. Organize them into a clean, grouped Skills section for my CV, prioritized for ${role}.

Rules:
- Group into relevant categories (e.g. Technical Skills, Tools & Platforms, Languages, Certifications)
- Put the most relevant categories for ${role} first
- Remove soft skills (communication, teamwork, etc.) — those belong in bullet points, not here
- For spoken languages, include proficiency level (Native, Fluent, Intermediate, Basic)
- Only include things I can speak to in an interview

Here is everything I know:
[PASTE YOUR SKILLS, TOOLS, LANGUAGES, AND CERTIFICATIONS — no formatting needed, just list them out]`
};

let out = `export interface SectionPrompts {
  header: string;
  summary: string;
  experience: string;
  projects: string;
  achievements: string;
  activities: string;
  skills: string;
}

export const PROMPTS_DATA: Record<string, SectionPrompts> = {
`;

for (const r of roles) {
  out += `  "${r}": {\n`;
  out += `    header: ` + JSON.stringify(sections.header(r)) + `,\n`;
  out += `    summary: ` + JSON.stringify(sections.summary(r)) + `,\n`;
  out += `    experience: ` + JSON.stringify(sections.experience(r)) + `,\n`;
  out += `    projects: ` + JSON.stringify(sections.projects(r)) + `,\n`;
  out += `    achievements: ` + JSON.stringify(sections.achievements(r)) + `,\n`;
  out += `    activities: ` + JSON.stringify(sections.activities(r)) + `,\n`;
  out += `    skills: ` + JSON.stringify(sections.skills(r)) + `\n`;
  out += `  },\n`;
}
out += `};\n`;

fs.writeFileSync('D:/ProjectX_Package-CV/landing-page-repo/app/sfp2026/cv-builder/src/data/promptsData.ts', out);
console.log('Done!');
