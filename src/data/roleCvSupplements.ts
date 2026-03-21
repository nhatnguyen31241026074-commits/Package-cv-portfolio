import { DiagnosticLevel } from "../app/types";
import { ActivityEntry, AwardEntry } from "./cvTemplates";

export type SkillGroup = {
  category: string;
  items: string[];
};

export type RoleCvSupplement = {
  skills: SkillGroup[];
  awards: AwardEntry[];
  activities: ActivityEntry[];
};

const COMMON_ACTIVITIES: ActivityEntry[] = [
  {
    organisation: "TechBridge Vietnam",
    role: "Director / Product Lead",
    dates: "mm/yyyy - mm/yyyy",
    bullets: [
      "Led a 12-member team to ship a career toolkit used by 500+ students across 4 universities",
      "Coordinated hackathon, workshop series, and demo day with 300+ participants across 5 functional groups",
    ],
  },
  {
    organisation: "Code for Vietnam",
    role: "Volunteer Mentor",
    dates: "mm/yyyy - mm/yyyy",
    bullets: [
      "Taught introductory Python to 40+ high-school students through a 6-week hands-on curriculum",
      "Mentored 3 capstone teams; all were selected to present at the closing showcase",
    ],
  },
];

const COMMON_AWARDS: AwardEntry[] = [
  {
    name: "1st Place, University Startup Pitch Competition",
    issuer: "X University",
    date: "mm/yyyy",
    description: "Won top prize with a student productivity product pitch and validated go-to-market plan",
  },
  {
    name: "Top 2, National Data Analytics Case Competition",
    issuer: "National Student League",
    date: "mm/yyyy",
    description: "Recognized for analytical rigor and decision-ready recommendation framework",
  },
  {
    name: "Best Community Impact Award",
    issuer: "Code for Vietnam Summer Program",
    date: "mm/yyyy",
    description: "Awarded for high-coverage mentorship and practical curriculum quality",
  },
];

const ROLE_SUPPLEMENTS: Record<string, RoleCvSupplement> = {
  "Software Engineering (SWE)": {
    skills: [
      { category: "Programming", items: ["TypeScript", "Python", "SQL", "HTML/CSS"] },
      { category: "Frameworks", items: ["React", "Node.js", "Express", "Next.js"] },
      { category: "Data", items: ["PostgreSQL", "Redis", "Prisma"] },
      { category: "Quality", items: ["Jest", "Supertest", "Playwright"] },
      { category: "Cloud & DevOps", items: ["Docker", "GitHub Actions", "AWS (EC2, S3)"] },
      { category: "Collaboration", items: ["Git", "Jira", "Notion"] },
    ],
    awards: [
      {
        name: "Regional Finalist, ICPC Asia Hanoi",
        issuer: "ICPC",
        date: "mm/yyyy",
        description: "Competed in algorithmic problem-solving under strict time constraints",
      },
      ...COMMON_AWARDS.slice(0, 2),
    ],
    activities: COMMON_ACTIVITIES,
  },
  "Artificial Intelligence (AI) / Machine Learning (ML)": {
    skills: [
      { category: "ML Core", items: ["PyTorch", "Scikit-learn", "Hugging Face Transformers", "PhoBERT"] },
      { category: "Data", items: ["Python", "Pandas", "NumPy", "SQL"] },
      { category: "MLOps", items: ["MLflow", "Docker", "FastAPI", "Weights & Biases"] },
      { category: "Cloud", items: ["AWS EC2", "S3", "Lambda"] },
      { category: "Visualization", items: ["Streamlit", "Jupyter Notebook"] },
      { category: "Collaboration", items: ["Git", "Notion"] },
    ],
    awards: [
      {
        name: "Top 5, National AI Challenge",
        issuer: "Vietnam AI Alliance",
        date: "mm/yyyy",
        description: "Placed top 5 with a Vietnamese NLP modeling pipeline and robust evaluation protocol",
      },
      ...COMMON_AWARDS.slice(1, 3),
    ],
    activities: COMMON_ACTIVITIES,
  },
  "Data Analytics (DA) & Business Intelligence (BI)": {
    skills: [
      { category: "Analytics", items: ["SQL", "Python", "R", "Excel (advanced)"] },
      { category: "BI", items: ["Power BI", "Tableau", "Looker Studio"] },
      { category: "Data Prep", items: ["Pandas", "NumPy", "Data Cleaning", "Data Validation"] },
      { category: "Experimentation", items: ["A/B Testing", "Cohort Analysis", "RFM Segmentation"] },
      { category: "Data Stores", items: ["PostgreSQL", "BigQuery"] },
      { category: "Communication", items: ["Notion", "Google Slides", "Stakeholder Readouts"] },
    ],
    awards: COMMON_AWARDS,
    activities: COMMON_ACTIVITIES,
  },
  "Data Engineering": {
    skills: [
      { category: "Data Engineering", items: ["Apache Airflow", "dbt", "ETL/ELT Design", "Data Quality Checks"] },
      { category: "Programming", items: ["Python", "SQL", "Bash"] },
      { category: "Warehousing", items: ["Redshift", "BigQuery", "PostgreSQL"] },
      { category: "Cloud", items: ["AWS S3", "Lambda", "IAM"] },
      { category: "Reliability", items: ["SLA Monitoring", "Backfill Strategy", "Schema Versioning"] },
      { category: "DevOps", items: ["Docker", "GitHub Actions", "Git"] },
    ],
    awards: [
      {
        name: "Top 2, National Data Analytics Case Competition",
        issuer: "National Student League",
        date: "mm/yyyy",
        description: "Recognized for strong pipeline-backed analysis and business interpretation",
      },
      {
        name: "Best Data Platform Project",
        issuer: "University Tech Showcase",
        date: "mm/yyyy",
        description: "Awarded for building a reliable automated ETL workflow with measurable uptime",
      },
      COMMON_AWARDS[2],
    ],
    activities: COMMON_ACTIVITIES,
  },
  "Cloud Engineering / DevOps": {
    skills: [
      { category: "Cloud", items: ["AWS (EC2, ECS, S3, RDS)", "IAM", "VPC Basics"] },
      { category: "Infrastructure as Code", items: ["Terraform", "Reusable Modules", "State Management"] },
      { category: "CI/CD", items: ["GitHub Actions", "Build/Test/Deploy Pipelines"] },
      { category: "Containers", items: ["Docker", "Nginx", "ECS"] },
      { category: "Observability", items: ["CloudWatch", "Logging", "Basic Incident Response"] },
      { category: "Scripting", items: ["Bash", "Python"] },
    ],
    awards: [
      {
        name: "Best DevOps Automation Project",
        issuer: "Campus Engineering Expo",
        date: "mm/yyyy",
        description: "Recognized for reducing environment setup time from hours to minutes",
      },
      ...COMMON_AWARDS.slice(0, 2),
    ],
    activities: COMMON_ACTIVITIES,
  },
  "Product Management (PM)": {
    skills: [
      { category: "Product", items: ["Roadmapping", "PRD Writing", "Backlog Prioritization", "RICE"] },
      { category: "Research", items: ["User Interviews", "Survey Design", "JTBD Framing"] },
      { category: "Analytics", items: ["Mixpanel", "Google Analytics", "SQL Basics"] },
      { category: "Execution", items: ["Jira", "Notion", "Sprint Planning"] },
      { category: "Design Collaboration", items: ["Figma", "Miro"] },
      { category: "Communication", items: ["Stakeholder Alignment", "Product Reviews"] },
    ],
    awards: COMMON_AWARDS,
    activities: COMMON_ACTIVITIES,
  },
  "Product Growth / Growth PM": {
    skills: [
      { category: "Growth", items: ["Funnel Analysis", "Activation Strategy", "Retention Loops"] },
      { category: "Experimentation", items: ["A/B Testing", "Hypothesis Design", "Experiment Readouts"] },
      { category: "Analytics", items: ["Mixpanel", "Amplitude", "SQL", "Google Sheets"] },
      { category: "Lifecycle", items: ["Push Campaigns", "Email Journey", "Cohort Tracking"] },
      { category: "Execution", items: ["Notion", "Jira", "Cross-functional Rituals"] },
      { category: "Design", items: ["Figma", "Landing Page Testing"] },
    ],
    awards: COMMON_AWARDS,
    activities: COMMON_ACTIVITIES,
  },
  "Business Analytics (BA)": {
    skills: [
      { category: "Business Analysis", items: ["Requirements Gathering", "Process Modeling", "Stakeholder Interviews"] },
      { category: "Modeling", items: ["Financial Modeling", "Market Sizing", "Scenario Planning"] },
      { category: "Analytics", items: ["Excel", "SQL", "Power BI", "Python"] },
      { category: "Documentation", items: ["BRD/FRD", "Jira", "Confluence"] },
      { category: "Automation", items: ["Google Sheets", "Apps Script", "Notion"] },
      { category: "Communication", items: ["Executive Summaries", "Workshop Facilitation"] },
    ],
    awards: COMMON_AWARDS,
    activities: COMMON_ACTIVITIES,
  },
  "UI/UX / Product Design": {
    skills: [
      { category: "Design", items: ["Figma", "FigJam", "Design Systems", "Prototyping"] },
      { category: "Research", items: ["User Interviews", "Usability Testing", "SUS Scoring"] },
      { category: "Interaction", items: ["Information Architecture", "Wireframing", "Microinteractions"] },
      { category: "Accessibility", items: ["WCAG 2.1", "Contrast & Readability"] },
      { category: "Handoff", items: ["Design Tokens", "Dev-ready Specs", "Lottie"] },
      { category: "Tools", items: ["Maze", "Notion", "Adobe Illustrator"] },
    ],
    awards: COMMON_AWARDS,
    activities: COMMON_ACTIVITIES,
  },
  "Project Management (Tech Projects)": {
    skills: [
      { category: "Project Delivery", items: ["Milestone Planning", "Dependency Mapping", "Risk Tracking"] },
      { category: "Agile", items: ["Sprint Cadence", "Standups", "Retro Facilitation"] },
      { category: "Tooling", items: ["Jira", "Confluence", "MS Project", "Notion"] },
      { category: "Reporting", items: ["KPI Dashboards", "Status Communication", "Escalation Workflows"] },
      { category: "Collaboration", items: ["Cross-team Coordination", "Stakeholder Alignment"] },
      { category: "Operations", items: ["Google Sheets", "Slack", "Miro"] },
    ],
    awards: COMMON_AWARDS,
    activities: COMMON_ACTIVITIES,
  },
  "Business Development (Tech Industry)": {
    skills: [
      { category: "Business Development", items: ["Partner Sourcing", "Deal Qualification", "Pipeline Management"] },
      { category: "Commercial", items: ["Negotiation", "Sponsorship Packaging", "MOU Coordination"] },
      { category: "Tooling", items: ["HubSpot CRM", "LinkedIn Sales Navigator", "Notion"] },
      { category: "Analysis", items: ["Opportunity Scoring", "Revenue Tracking", "Proposal Evaluation"] },
      { category: "Communication", items: ["Pitching", "Relationship Management", "Event Coordination"] },
      { category: "Operations", items: ["Google Sheets", "Canva", "Slack"] },
    ],
    awards: COMMON_AWARDS,
    activities: COMMON_ACTIVITIES,
  },
  "Digital Marketing (Tech-focused)": {
    skills: [
      { category: "Performance Marketing", items: ["Meta Ads", "Campaign Setup", "Budget Allocation"] },
      { category: "Analytics", items: ["Google Analytics", "Attribution Basics", "Conversion Reporting"] },
      { category: "Experimentation", items: ["Creative A/B Testing", "Landing Page Testing"] },
      { category: "Automation", items: ["Zapier", "Mailchimp", "Weekly Reporting"] },
      { category: "Content", items: ["Canva", "CapCut", "Lifecycle Messaging"] },
      { category: "Planning", items: ["Notion", "Channel Prioritization", "Growth Calendar"] },
    ],
    awards: COMMON_AWARDS,
    activities: COMMON_ACTIVITIES,
  },
  "Operations (Tech Operations / Process Automation)": {
    skills: [
      { category: "Operations", items: ["Workflow Audits", "SOP Design", "Process Mapping"] },
      { category: "Automation", items: ["Zapier", "Google Apps Script", "Notion Databases"] },
      { category: "Data", items: ["Google Sheets", "Airtable", "Operational KPI Tracking"] },
      { category: "Execution", items: ["Cross-team Coordination", "Issue Triage", "Service SLAs"] },
      { category: "Systems", items: ["Slack Integrations", "Form-to-Workflow Pipelines"] },
      { category: "Documentation", items: ["Runbooks", "Training Guides", "Loom"] },
    ],
    awards: COMMON_AWARDS,
    activities: COMMON_ACTIVITIES,
  },
};

export function getRoleCvSupplement(
  canonicalRole: string,
  _level: DiagnosticLevel
): RoleCvSupplement | null {
  return ROLE_SUPPLEMENTS[canonicalRole] ?? null;
}
