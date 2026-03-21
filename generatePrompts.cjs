const fs = require('fs');

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
  "Other (Please Specify)"
];

const PROMPTS_DATA = {};

function getCoreMindset(role) {
  if (role.includes("SWE")) return "Focus intensely on technical depth, system metrics, latency improvements, and production readiness. Emphasize testing, CI/CD, and specific technologies mapped to their business impact (e.g. Big-O, scalability).";
  if (role.includes("AI") || role.includes("ML")) return "Focus on deploying models, optimizing inference speed, handling data scale, and real-world results. Emphasize MLOps, edge cases, and feature engineering rather than just Jupyter Notebooks.";
  if (role.includes("BI") || role.includes("Data Analytics")) return "Deliver actionable business insights, not just dashboards. Prove how your data models influenced product decisions, saved operational hours, or increased enterprise revenue.";
  if (role.includes("Data Engineering")) return "Focus on pipeline reliability, massive system scale, and ETL efficiency. Reduce processing times, ensure rigorous data quality, and architect cloud data warehouse integrations.";
  if (role.includes("Cloud") || role.includes("DevOps")) return "Focus on automation, infrastructure as code (IaC), and strict system uptime. Highlight reduced CI/CD build times, cloud cost optimizations (FinOps), and observability.";
  
  if (role.includes("Product Management") && !role.includes("Growth")) return "Outcomes over outputs. Focus on cross-functional leadership, full-product lifecycle management, roadmap prioritization, and core metrics (DAU, Retention, MRR).";
  if (role.includes("Growth")) return "Demonstrate capability in running strict A/B experiments, optimizing user funnels, and directly moving growth metrics like acquisition cost (CAC), activation rate, and viral loops.";
  if (role.includes("Business Analytics")) return "Bridge the gap between engineering and the C-suite. Focus on stakeholder management, clear product requirements, financial modeling, and process optimizations.";
  if (role.includes("Design") || role.includes("UX")) return "Show the 'why' behind designs. Emphasize deep user research metrics, usability heuristic improvements, and how design choices improved task success rates or conversion.";
  
  if (role.includes("Project")) return "Delivery and alignment. Emphasize managing resources, mitigating risks, handling complex cross-functional timelines, and keeping technical squads aligned with business deadlines.";
  if (role.includes("Business Development")) return "Deal closure and strategic impact. Highlight hard revenue generated, massive strategic partnerships, total contract values (TCV), and the enterprise scale of the accounts managed.";
  if (role.includes("Marketing")) return "ROI and data-driven marketing. Focus on ROAS, CAC reduction, rigorous conversion rate optimizations, and the sheer scale and effectiveness of multi-channel lifecycle campaigns.";
  if (role.includes("Operations")) return "Process optimization and massive scale. Highlight automated workflows, reduction in critical manual errors, logistics SLAs, and significant operational cost and time savings.";
  
  return "Focus on clear communication of value, quantifiable achievements, and demonstrating direct positive impact on business goals or technical stability.";
}

for (const role of roles) {
  const mindset = getCoreMindset(role);

  PROMPTS_DATA[role] = {
    header: "ACTION REQUIRED: Format my contact details for a [ " + role + " ] CV.\n" +
            "Take my raw contact string and return ONE clean, professional header line.\n" +
            "Format exactly as: [Full Name] | [Phone] | [Email] | [LinkedIn] | [Optional Link] | [City, Country]\n\n" +
            "STRICT RULES:\n" +
            "1. Strip words like 'Email:' or 'Phone:'.\n" +
            "2. No full street addresses, ONLY City and Country.\n" +
            "3. Keep it minimalist, no markdown formatting.",
            
    summary: "OBJECTIVE: Draft an aggressive, highly-targeted Professional Summary for a [ " + role + " ].\n" +
             "Context: " + mindset + "\n\n" +
             "Write exactly 2-3 flowing sentences. Do NOT use bullet points.\n" +
             "RULES:\n" +
             "1. No personal pronouns ('I', 'my', 'we').\n" +
             "2. End the first sentence with your top technical/domain strengths.\n" +
             "3. The second sentence MUST contain a massive, quantified achievement from your career.\n" +
             "4. Ensure the tone is extremely confident and strictly professional.",
             
    experience: "TASK: Convert my raw work experience into 3-5 elite HR-ready bullet points.\n" +
                "Target Role: [ " + role + " ]\n" +
                "Mindset to adopt: " + mindset + "\n\n" +
                "APPLY THE GOLDEN FORMULA:\n" +
                "'Achieved X, as measured by Y, by doing Z' (Action Verb -> Context -> Quantified Outcome)\n\n" +
                "MANDATORY CHECKS:\n" +
                "1. DO NOT use personal pronouns. Start every bullet with a strong past-tense action verb.\n" +
                "2. Force at least one strict metric (%, $, hours saved, latency reduced) into EVERY single bullet point.\n" +
                "3. Weave the exact tools and frameworks relevant to the role naturally into the sentences.\n" +
                "4. Delete generic responsibilities like 'attended meetings' or 'helped team'.",
                
    projects: "GOAL: Write a professional CV project entry based on my raw notes.\n" +
              "Target Role: [ " + role + " ]\n" +
              "Strategic Angle: " + mindset + "\n\n" +
              "FORMAT REQUIRED:\n" +
              "Project Name | [Live Demo / GitHub Link]\n" +
              "- Bullet 1: The core architecture/strategy and the primary tools used.\n" +
              "- Bullet 2: The most impressive technical or business challenge overcome.\n" +
              "- Bullet 3: The measurable outcome or key learning.\n\n" +
              "RULES:\n" +
              "No pronouns. Highlight decisions over mere implementations.",
              
    achievements: "FORMATTING TASK: Clean up my raw list of awards and achievements.\n" +
                  "Target Role: [ " + role + " ]\n\n" +
                  "Output a clean, 1-line format per item:\n" +
                  "[Award Name] — [Issuing Organization], [Date] ([Brief Context/Metric])\n\n" +
                  "RULES:\n" +
                  "1. Sort chronologically (newest first).\n" +
                  "2. Be brutal: delete basic participation certificates. Keep only merit-based or competitive awards.\n" +
                  "3. If a competition had 10,000 people and I came in 10th, explicitly highlight 'Top 0.1%'.",
                  
    activities: "REVIEW: Convert my volunteer/extracurricular experience into 1-2 powerful bullet points.\n" +
                "Context: Applying for [ " + role + " ] roles.\n\n" +
                "Even for volunteering, apply the Golden Formula (Action Verb -> Context -> Measured Outcome).\n" +
                "Focus on leadership, initiative, team size managed, or funds raised rather than basic participation.",

    skills: "CATEGORIZATION: Organize my raw skills list into logical, comma-separated categories.\n" +
            "Target Role: [ " + role + " ]\n\n" +
            "RULES:\n" +
            "1. Put the most critical tech/business categories FIRST based on the role.\n" +
            "2. Completely DELETE subjective soft skills (e.g. communication, leadership, hard worker).\n" +
            "3. Only include proficiency levels for spoken languages (e.g., Spanish (Fluent)), NOT for programming languages."
  };
}

let output = "export interface SectionPrompts {\n" +
  "  header: string;\n" +
  "  summary: string;\n" +
  "  experience: string;\n" +
  "  projects: string;\n" +
  "  achievements: string;\n" +
  "  activities: string;\n" +
  "  skills: string;\n" +
  "}\n\n" +
  "export const PROMPTS_DATA: Record<string, SectionPrompts> = " + JSON.stringify(PROMPTS_DATA, null, 2) + ";\n";

fs.writeFileSync('src/data/promptsData.ts', output, 'utf8');
console.log('Successfully generated totally diverse promptsData.ts');
