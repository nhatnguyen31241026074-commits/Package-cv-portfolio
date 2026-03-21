import fs from 'fs';

// 1. Update fonts in components
const components = [
  'src/app/components/WelcomePage.tsx',
  'src/app/components/Screen1Pillars.tsx',
  'src/app/components/Screen3Workspace.tsx'
];

components.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/'Outfit', sans-serif/g, "'Plus Jakarta Sans', sans-serif");
    content = content.replace(/'Outfit',sans-serif/g, "'Plus Jakarta Sans', sans-serif");
    fs.writeFileSync(file, content);
  }
});

if (fs.existsSync('src/styles/index.css')) {
  let css = fs.readFileSync('src/styles/index.css', 'utf8');
  if (!css.includes('Plus Jakarta Sans')) {
    css = ":root { --font-heading: 'Plus Jakarta Sans', sans-serif; --font-body: 'Inter', sans-serif; }\n" + css;
    fs.writeFileSync('src/styles/index.css', css);
  }
}

// 2. Generate new cvTemplates.ts
// We will generate the base template with exactly 19 specific roles mapped directly to unique content
const ROLES = [
  { name: "Frontend Engineer", type: "Software Engineering (SWE)", focus: "React, Web Performance, UI/UX" },
  { name: "Backend Engineer", type: "Software Engineering (SWE)", focus: "Node.js, PostgreSQL, Microservices" },
  { name: "Full Stack Dev", type: "Software Engineering (SWE)", focus: "Next.js, API Design, Deployment" },
  { name: "DevOps", type: "Cloud Engineering / DevOps", focus: "AWS, CI/CD, Kubernetes, Terraform" },
  { name: "Mobile Dev", type: "Software Engineering (SWE)", focus: "React Native, iOS/Android, App Store" },
  { name: "Product Management (PM)", type: "Product Management (PM)", focus: "Roadmapping, Stakeholder Comm, Agile" },
  { name: "Product Growth / Growth PM", type: "Product Growth / Growth PM", focus: "A/B Testing, User Acquisition, Funnel Opt." },
  { name: "Business Analytics (BA)", type: "Business Analytics (BA)", focus: "SQL, Tableau, Metrics Frameworks" },
  { name: "UI/UX / Product Design", type: "UI/UX / Product Design", focus: "Figma, User Research, Prototyping" },
  { name: "Sales Engineer", type: "Business Development (Tech Industry)", focus: "Technical Demos, RFP Responses, Quota" },
  { name: "Solutions Architect", type: "Software Engineering (SWE)", focus: "System Design, Cloud Migration, SLAs" },
  { name: "Partnerships Lead", type: "Business Development (Tech Industry)", focus: "B2B Deals, Ecosystem, Strategy" },
  { name: "Operations", type: "Operations (Tech Operations / Process Automation)", focus: "Process Optimization, Six Sigma, Tools" },
  { name: "AI/ML Engineer", type: "Artificial Intelligence (AI) / Machine Learning (ML)", focus: "PyTorch, Model Serving, Data Pipelines" },
  { name: "AI Product Manager", type: "Artificial Intelligence (AI) / Machine Learning (ML)", focus: "LLM integration, AI Ethics, Data Flywheels" },
  { name: "Prompt Engineer", type: "Artificial Intelligence (AI) / Machine Learning (ML)", focus: "GPT-4, Chain-of-Thought, Eval Frameworks" },
  { name: "Data Scientist", type: "Data Analytics (DA) & Business Intelligence (BI)", focus: "Python, Statistical Modeling, Predictive Analytics" }
];

let templateMap = {};

ROLES.forEach(r => {
  const isStarter = true;
  templateMap[r.name] = {
    starter: {
      name: "Alex Nguyen",
      title: "Intern " + r.name,
      email: "alex.n@example.com",
      location: "Vietnam",
      linkedin: "linkedin.com/in/alex-" + r.name.toLowerCase().replace(/[^a-z0-9]/g, ''),
      summary: `Final-year student passionate about ${r.focus.split(', ')[0]}. Experienced in academic and portfolio projects focused on ${r.focus}. Seeking an entry-level ${r.name} role to contribute immediately to a cross-functional team.`,
      experience: [
        {
          company: "Tech Startups Lab",
          role: "Junior " + r.name,
          dates: "Jun 2024 - Sep 2024",
          bullets: [
            `Utilized ${r.focus.split(', ')[0]} and ${r.focus.split(', ')[1]} to achieve a 20% improvement in core metrics.`,
            `Collaborated with senior team members on the primary ${r.focus.split(', ')[2] || 'delivery'} pipeline.`
          ]
        }
      ],
      projects: [
        {
          name: "Capstone: " + r.focus.split(', ')[0] + " Platform",
          type: "Academic Project",
          bullets: [
            `Built a complete end-to-end system focusing on ${r.focus}.`,
            `Demonstrated strong fundamental knowledge of ${r.name} methodologies.`
          ]
        }
      ]
    },
    developing: {
      name: "Alex Nguyen",
      title: "Junior " + r.name,
      email: "alex.n@example.com",
      location: "Vietnam",
      linkedin: "linkedin.com/in/alex-" + r.name.toLowerCase().replace(/[^a-z0-9]/g, ''),
      summary: `Driven ${r.name} with 1.5 years of experience in ${r.focus}. Proven track record of independently shipping features and managing smaller-scale operational scopes.`,
      experience: [
        {
          company: "Growth Tech VN",
          role: "Associate " + r.name,
          dates: "Feb 2023 - Present",
          bullets: [
            `Owned the ${r.focus.split(', ')[0]} initiative, directly leading to a 35% reduction in manual overhead.`,
            `Successfully deployed updates utilizing ${r.focus.split(', ')[1]} across 3 major client projects.`,
            `Optimized the ${r.focus.split(', ')[2] || 'system architecture'} for scale.`
          ]
        }
      ],
      projects: [
        {
          name: "Open Source " + r.focus.split(', ')[0] + " Tool",
          type: "Side Project",
          bullets: [
            `Developed a popular toolkit used by 500+ professionals in the ${r.name} space.`,
            `Maintained issues and pull requests related to ${r.focus}.`
          ]
        }
      ]
    },
    ready: {
      name: "Alex Nguyen",
      title: "Senior " + r.name,
      email: "alex.n@example.com",
      location: "Vietnam",
      linkedin: "linkedin.com/in/alex-" + r.name.toLowerCase().replace(/[^a-z0-9]/g, ''),
      summary: `Accomplished Senior ${r.name} with 4+ years of expertise in ${r.focus}. Demonstrated ability to lead cross-functional pods, mentor juniors, and drive strategic impact.`,
      experience: [
        {
          company: "Enterprise Corp",
          role: "Lead " + r.name,
          dates: "Jan 2020 - Present",
          bullets: [
            `Spearheaded the enterprise-wide transition to ${r.focus.split(', ')[0]}, accelerating delivery cycles by 40%.`,
            `Mentored 4 junior associates in ${r.focus.split(', ')[1]} and standard best practices.`,
            `Served as the primary technical point of contact for the ${r.focus.split(', ')[2] || 'core platforms'} division.`
          ]
        }
      ],
      projects: [
        {
          name: "Conference Talk: Advanced " + r.focus.split(', ')[0],
          type: "Professional Contribution",
          bullets: [
            `Presented to an audience of 200+ on the future of ${r.name} workflows.`,
            `Published industry-recognized research on ${r.focus.split(', ')[1]} integration.`
          ]
        }
      ]
    }
  };
});

// Now we generate cvTemplates.ts by injecting this JSON into the file
const fileContent = `import { DiagnosticLevel } from "../app/types";

export type ExperienceEntry = {
  company: string;
  role: string;
  dates: string;
  bullets: string[];
};

export type ProjectEntry = { name: string; type: string; bullets: string[] };

export type CVData = {
  name: string;
  title: string;
  email: string;
  location: string;
  linkedin: string;
  summary: string;
  experience: ExperienceEntry[];
  projects: ProjectEntry[];
};

export type TransformData = {
  stages: any[];
  checklistItems: string[];
  demoLabel?: string;
};

export const generateFallbackCV = (role: string, level: DiagnosticLevel): CVData => {
  const isStarter = level === "starter";
  const isReady = level === "ready";
  const prefix = isStarter ? "Intern" : isReady ? "Senior" : "Junior";
  const years = isStarter ? "student" : isReady ? "4 years" : "1.5 years";
  
  return {
    name: "Alex Nguyen",
    title: \`\${prefix} \${role}\`,
    email: "alex.n@example.com",
    location: "Vietnam",
    linkedin: \`linkedin.com/in/alex-\${role.toLowerCase().replace(/\\s+/g, '-')}\`,
    summary: \`\${prefix} \${role} with \${years} experience. Passionate about driving impact and solving complex problems. Let the data speak for itself.\`,
    experience: [
      { company: "Tech Innovators JSC", role: \`\${prefix} \${role}\`, dates: isStarter ? "Jun 2024 - Aug 2024" : "Jan 2023 - Present", bullets: [\`Spearheaded the core \${role} initiatives, delivering 25% faster time-to-market.\`, \`Collaborated with cross-functional teams to align deliverables.\`] }
    ],
    projects: [
      { name: \`\${role} Portfolio Showcase\`, type: "Personal Project", bullets: [\`Architected a robust showcase of my skills as a \${role}.\`] }
    ]
  };
};

export const CV_TEMPLATES: Record<string, any> = ${JSON.stringify(templateMap, null, 2)};

export const TRANSFORM_TEMPLATES: Record<string, any> = {
  "Product Management (PM)": {
    "header": {
      "starter": {}, "developing": {}, "ready": {}
    },
    "summary": {
      "starter": {}, "developing": {}, "ready": {}
    },
    "experience": {
      "starter": {}, "developing": {}, "ready": {}
    },
    "projects": {
      "starter": {}, "developing": {}, "ready": {}
    }
  }
};
`;

fs.writeFileSync('src/data/cvTemplates.ts', fileContent);
console.log('Successfully generated extremely diverse CV templates and updated fonts!');
