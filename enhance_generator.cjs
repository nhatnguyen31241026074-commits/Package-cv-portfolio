const fs = require("fs");

const roles = [
  "Software Engineering (SWE)",
  "Artificial Intelligence (AI) / Machine Learning (ML)",
  "Data Analytics (DA) & Business Intelligence (BI)",
  "Data Engineering",
  "Cloud Engineering / DevOps",
  "Product Management (PM)",
  "Product Growth / Growth PM",
  "Business Analytics (BA)",
  "UI/UX / Product Design",
  "Project Management (Tech Projects)",
  "Business Development (Tech Industry)",
  "Digital Marketing (Tech-focused)",
  "Operations (Tech Operations / Process Automation)",
];

const roleMindsets = {
  "Software Engineering (SWE)":
    "Core Mindset: Show, don't tell — highlight technical depth, system metrics, latency improvements, and production readiness. Emphasize testing/CI/CD, architecture design, and specific technologies mapped to their impact.",
  "Artificial Intelligence (AI) / Machine Learning (ML)":
    "Core Mindset: Focus on deploying models, optimizing inference, and real-world results. Show you do more than run Jupyter notebooks; highlight MLOps, edge cases, and accuracy enhancements.",
  "Data Analytics (DA) & Business Intelligence (BI)":
    "Core Mindset: Deliver insights, not just dashboards. Focus on how your analysis directly influenced product/business decisions, saved time, or increased revenue.",
  "Data Engineering":
    "Core Mindset: Focus on data pipeline reliability, system scale, and ETL efficiency. Emphasize reducing processing times, ensuring data quality, and architecting robust cloud integrations.",
  "Cloud Engineering / DevOps":
    "Core Mindset: Focus on automation, infrastructure as code, and system uptime. Highlight reduced CI/CD times, cloud cost optimizations, and robust monitoring setups.",
  "Product Management (PM)":
    "Core Mindset: Outcomes over outputs. Focus on cross-functional leadership, full-product lifecycle management, and core metrics (DAU, Retention, Revenue).",
  "Product Growth / Growth PM":
    "Core Mindset: Demonstrate capability in running experiments, optimizing funnels, and directly moving growth metrics like acquisition, activation, and monetization.",
  "Business Analytics (BA)":
    "Core Mindset: Bridge the gap between engineering and business. Focus on stakeholder management, clear requirements definition, and how process optimizations drove efficiency.",
  "UI/UX / Product Design":
    "Core Mindset: Show the 'why' behind designs. Emphasize user research metrics, usability improvements, and how design choices improved task success rates or business KPIs.",
  "Project Management (Tech Projects)":
    "Core Mindset: Delivery and alignment. Emphasize managing resources, mitigating risks, handling complex timelines, and keeping technical teams aligned with business goals.",
  "Business Development (Tech Industry)":
    "Core Mindset: Deal closure and strategic impact. Highlight revenue generated, strategic partnerships established, and the scale of the accounts managed.",
  "Digital Marketing (Tech-focused)":
    "Core Mindset: ROI and data-driven marketing. Focus on ROAS, CAC reduction, conversion rate optimizations, and multi-channel campaign effectiveness.",
  "Operations (Tech Operations / Process Automation)":
    "Core Mindset: Process optimization and scale. Highlight automated workflows, reduction in manual errors, and significant cost/time savings.",
};

const getRoleMindset = (role) =>
  roleMindsets[role] ||
  "Core Mindset: Focus on clear communication of impact, cross-functional collaboration, and delivering tangible business or technical value.";

const sections = {
  header: (role) => `You are an expert tech CV consultant.
Role: ${role}

I will provide my personal contact details. Your job is to format them into a clean, professional contact header line.
Format: [Full Name] | [Phone] | [Email] | [LinkedIn] | [Optional: GitHub/Portfolio] | [City, Country]

Rules:
- No full addresses (city/country only).
- Strip out labels like "Email:" or "Phone:" completely.
- Keep the output extremely clean, single line or two lines max.

My details:
- Name: [NAME]
- Phone: [PHONE]
- Email: [EMAIL]
- LinkedIn: [LINKEDIN]
- Portfolio/GitHub: [LINK OR "none"]
- Location: [CITY, COUNTRY]`,

  summary: (role) => `You are an expert tech CV consultant.
Role: ${role}
${getRoleMindset(role)}

Write a highly targeted Professional Summary (exactly 2-3 sentences).
Rules:
- No personal pronouns ("I", "my", "we").
- No generic fluff ("dynamic professional", "team player").
- Sentence 1: Start with experience level and top relevant strengths.
- Sentence 2: Include one heavy-hitting, quantified achievement.
- Sentence 3: State your immediate career intent.

My background for context:
- Current Status: [STATUS]
- Top Strengths: [STRENGTHS]
- Best Achievement: [ACHIEVEMENT]
- Target Role: [TARGET]`,

  experience: (role) => `You are an expert tech CV consultant.
Role: ${role}
${getRoleMindset(role)}

Convert the following work experience into 3-5 powerful, HR-ready bullet points using the Golden Formula: 
"Achieved X, as measured by Y, by doing Z." (Action Verb → Context → Quantified Outcome)

Rules for Bullets:
- No personal pronouns. Use past tense (completed) or present tense (current).
- Start with a strong action verb (Spearheaded, Architected, Led, Optimized).
- Every single bullet must contain at least one number/metric (%, $, headcount, latency).
- Explicitly integrate relevant tools, frameworks, or skills.
- Show ownership — do NOT list generic responsibilities.

My raw experience entry:
Company: [COMPANY]
Title: [TITLE]
Duration: [DURATION]
What I did: [RAW RESP]
Tools Used: [TOOLS]
Metrics / Results: [ROUGH METRICS]`,

  projects: (role) => `You are an expert tech CV consultant.
Role: ${role}
${getRoleMindset(role)}

Write a professional CV project entry from my raw details.
Format:
Project Name | [Demo/GitHub Link]
- 2-3 bullet points explaining the core architecture, tools used, and the measurable outcome. 

Apply the Golden Formula: "Achieved X, as measured by Y, by doing Z."

Rules:
- No pronouns.
- Highly emphasize technical/analytical decisions.
- Even if unfinished, emphasize the architecture or what was learned.

My project details:
Name: [NAME]
Type: [TYPE]
Description: [DESC]
Tech Stack: [TOOLS]
Outcome: [RESULTS]
Link: [LINK]`,

  achievements: (role) => `You are an expert tech CV consultant.
Role: ${role}

Format my raw list of awards/achievements into a clean, 1-line format for my CV.
Format: Award Name — Issuing Organization, Date (Brief Context)

Rules:
- Chronological order (newest first).
- Strictly one line per item.
- Exclude participation certificates; only keep merit-based awards.
- Highlight metrics of competition (e.g., "Top 1% of 10,000").

My raw list:
[AWARDS]`,

  activities: (role) => `You are an expert tech CV consultant.
Role: ${role}

Convert my volunteer experience into 1-2 bullet points highlighting leadership.
Rules:
- Use the Golden Formula (Action Verb → Context/Scale → Measured Outcome).
- Include metrics (e.g. attendees, funds, team size).

My raw activity details:
Organization: [ORG]
Title: [TITLE]
Duration: [DURATION]
What I did: [ACTIVITIES]
Outcome: [RESULTS]`,

  skills: (role) => `You are an expert tech CV consultant.
Role: ${role}

Organize my raw skills into logical, comma-separated categories tailored to my role.
Rules:
- Most critical categories first.
- Completely remove subjective soft skills (communication, leadership, etc.).
- Add proficiency for spoken languages ONLY.

My raw skills list:
[LIST]`,
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
  out +=
    `    achievements: ` + JSON.stringify(sections.achievements(r)) + `,\n`;
  out += `    activities: ` + JSON.stringify(sections.activities(r)) + `,\n`;
  out += `    skills: ` + JSON.stringify(sections.skills(r)) + `\n`;
  out += `  },\n`;
}
out += `};\n`;

fs.writeFileSync("src/data/promptsData.ts", out);
fs.writeFileSync(
  "landing-page-repo/app/sfp2026/cv-builder/src/data/promptsData.ts",
  out,
);
console.log("Saved newly enhanced prompts!");
