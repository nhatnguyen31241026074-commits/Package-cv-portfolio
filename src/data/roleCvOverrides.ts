import { DiagnosticLevel } from "../app/types";
import { CVData, ExperienceEntry } from "./cvTemplates";

type CvOverride = Partial<Pick<CVData, "title" | "summary" | "experience" | "projects">>;

const LEVEL_ROLE_SUFFIX: Record<DiagnosticLevel, string> = {
  starter: "Intern",
  developing: "Fresher",
  ready: "Trainee",
};

const CANONICAL_ROLE_LABEL: Record<string, string> = {
  "Software Engineering (SWE)": "Software Engineer",
  "Artificial Intelligence (AI) / Machine Learning (ML)": "ML Engineer",
  "Data Analytics (DA) & Business Intelligence (BI)": "Data Analyst",
  "Data Engineering": "Data Engineer",
  "Cloud Engineering / DevOps": "Cloud / DevOps Engineer",
  "Product Management (PM)": "Product Manager",
  "Product Growth / Growth PM": "Growth PM",
  "Business Analytics (BA)": "Business Analyst",
  "UI/UX / Product Design": "Product Designer",
  "Project Management (Tech Projects)": "Project Manager (Tech Projects)",
  "Business Development (Tech Industry)": "Business Development Associate",
  "Digital Marketing (Tech-focused)": "Digital Marketer",
  "Operations (Tech Operations / Process Automation)": "Operations Associate",
};

const SENIORITY_MARKERS = /(intern|fresher|trainee|junior|early-career)/i;
const CONFLICTING_SENIORITY_PREFIX = /^(senior|sr\.?|lead|principal|staff|mid-level|mid)\s+/i;

function getRoleLabel(selectedRole: string | null, canonicalRole: string): string {
  if (selectedRole === "AI Product Manager" || selectedRole === "AI Product Management") {
    return "AI Product Manager";
  }
  return CANONICAL_ROLE_LABEL[canonicalRole] ?? canonicalRole;
}

function withLevelSuffix(roleLabel: string, level: DiagnosticLevel): string {
  const normalized = roleLabel.replace(CONFLICTING_SENIORITY_PREFIX, "").trim();
  if (SENIORITY_MARKERS.test(normalized)) return normalized;
  return `${normalized} ${LEVEL_ROLE_SUFFIX[level]}`;
}

function normalizeExperienceRoles(
  base: ExperienceEntry[] | undefined,
  selectedRole: string | null,
  canonicalRole: string,
  level: DiagnosticLevel
): ExperienceEntry[] | undefined {
  if (!base || base.length === 0) return base;
  const normalizedRole = withLevelSuffix(getRoleLabel(selectedRole, canonicalRole), level);
  return base.map((entry, idx) => {
    if (idx !== 0) return entry;
    return {
      ...entry,
      role: normalizedRole,
    };
  });
}

const OVERRIDES_BY_ROLE: Record<string, Partial<Record<DiagnosticLevel, CvOverride>>> = {
  "Product Management (PM)": {
    starter: {
      title: "Product Manager Intern",
      summary:
        "Product Manager intern focused on structured discovery and sprint delivery. Wrote clear user stories, aligned design + engineering, and shipped scoped improvements with measurable learning.",
      experience: [{ company: "Consumer App Co", role: "Product Manager Intern", dates: "May 2023–Present", bullets: [] }],
    },
    developing: {
      title: "Product Manager (Fresher)",
      summary:
        "Early-career product manager with internship + fresher-level ownership in onboarding and activation. Uses evidence from funnels and user interviews to prioritise and ship focused features.",
      experience: [{ company: "Tiki E-Commerce", role: "Product Manager", dates: "Jan 2023–Present", bullets: [] }],
    },
  },
  "Data Analytics (DA) & Business Intelligence (BI)": {
    starter: {
      title: "Data Analyst Intern",
      summary:
        "Data Analyst intern using SQL, Python, and BI dashboards to answer business questions. Turns messy records into decision-ready insights and communicates findings clearly to non-technical teams.",
      experience: [{ company: "National Retail Chain", role: "Data Analyst Intern", dates: "May–Aug 2024", bullets: [] }],
    },
    developing: {
      title: "Data Analyst Fresher",
      summary:
        "Data analyst fresher partnering with product and marketing on KPI tracking, cohort analysis, and experiment reporting. Focused on analytics clarity, dashboard reliability, and practical business impact.",
      experience: [{ company: "Tech Product Co", role: "Data Analyst", dates: "Jan 2023–Present", bullets: [] }],
    },
    ready: {
      title: "Data Analyst (early-career)",
      summary:
        "Early-career data analyst owning recurring business reports and exploratory deep-dives. Builds trustworthy datasets and translates trends into clear actions for product and growth teams.",
      experience: [{ company: "FinTech Unicorn", role: "Senior Data Analyst", dates: "Mar 2018–Present", bullets: [] }],
    },
  },
  "Data Engineering": {
    starter: {
      title: "Data Engineering Intern",
      summary:
        "Data engineering intern building clean ETL flows and schema-consistent tables for analytics teams. Focused on reliability, freshness, and reproducible pipeline runs.",
      experience: [{ company: "Data Platform Team", role: "Data Engineering Intern", dates: "Feb 2025–May 2025", bullets: [] }],
    },
    developing: {
      title: "Data Engineer Fresher",
      summary:
        "Data engineer fresher working with Airflow, SQL, and warehouse modeling to automate reporting pipelines. Prioritizes data quality checks and dependable orchestration.",
      experience: [{ company: "Student Data Platform", role: "Data Engineer", dates: "Jan 2024–Present", bullets: [] }],
    },
    ready: {
      title: "Data Engineer (early-career)",
      summary:
        "Early-career data engineer improving pipeline observability and warehouse consistency. Delivers stable ingestion and transformation layers that support analytics and experimentation.",
      experience: [{ company: "Analytics Infrastructure Team", role: "Data Engineer", dates: "Mar 2023–Present", bullets: [] }],
    },
  },
  "Cloud Engineering / DevOps": {
    starter: {
      experience: [{ company: "CloudTech VN", role: "Cloud / DevOps Intern", dates: "Jun 2024–Aug 2024", bullets: [] }],
    },
    developing: {
      experience: [{ company: "CloudTech VN", role: "DevOps Trainee", dates: "Jan 2023–Present", bullets: [] }],
    },
    ready: {
      experience: [{ company: "VNG Cloud", role: "Cloud / DevOps Trainee", dates: "Apr 2020–Present", bullets: [] }],
    },
  },
  "Product Growth / Growth PM": {
    starter: {
      experience: [{ company: "E-Commerce Startup", role: "Growth PM Intern / Trainee", dates: "Jun–Sep 2024", bullets: [] }],
    },
    developing: {
      experience: [{ company: "FinTech App", role: "Growth PM Trainee", dates: "Feb 2023–Present", bullets: [] }],
    },
    ready: {
      title: "Growth PM (strong fresher)",
      summary:
        "Strong-fresher growth PM profile focused on experiment rigor, activation levers, and retention improvements in student or early-career contexts.",
      experience: [{ company: "SaaS Scaleup", role: "Growth PM Trainee", dates: "Aug 2019–Present", bullets: [] }],
    },
  },
  "UI/UX / Product Design": {
    starter: {
      title: "Product Designer Intern",
      experience: [{ company: "HealthTech App", role: "Product Designer Intern", dates: "May–Aug 2024", bullets: [] }],
    },
    developing: {
      title: "Product Designer Fresher",
      experience: [{ company: "SaaS Design Team", role: "Product Designer", dates: "Jan 2023–Present", bullets: [] }],
    },
    ready: {
      title: "Product Designer (strong fresher)",
      summary:
        "Strong-fresher product designer with internship-to-junior trajectory in UX research, prototyping, and design handoff quality.",
      experience: [{ company: "Product Design Studio", role: "Product Designer Intern", dates: "Mar 2021–Present", bullets: [] }],
    },
  },
  "Project Management (Tech Projects)": {
    starter: {
      title: "Project Management Intern (Tech Projects)",
      summary:
        "Project management intern coordinating cross-team tasks, timelines, and blockers in tech delivery contexts. Keeps scope visible and milestones on track through clear status rhythms.",
      experience: [
        {
          company: "Campus Product Launch Team",
          role: "Project Management Intern",
          dates: "Jul 2024–Oct 2024",
          bullets: [
            "Coordinated a 10-week launch across 4 workstreams and 14 members with 91% on-time milestone delivery",
            "Introduced Agile rituals across 5 sprints and reduced average ticket cycle time from 6.2 to 3.8 days",
            "Maintained a risk matrix that surfaced 3 delay risks early enough for stakeholder mitigation",
          ],
        },
      ],
    },
    developing: {
      title: "Project Manager (Tech Projects) Fresher",
      summary:
        "Project manager fresher coordinating sprint execution, dependency tracking, and stakeholder updates for cross-functional delivery teams.",
      experience: [
        {
          company: "Product Delivery Squad",
          role: "Project Manager (Tech Projects)",
          dates: "Jan 2023–Present",
          bullets: [],
        },
      ],
    },
    ready: {
      title: "Project Manager (Tech Projects) (early-career)",
      summary:
        "Early-career project manager driving predictable delivery across engineering, product, and operations with clear risk management and milestone governance.",
      experience: [
        {
          company: "Regional Tech Program Office",
          role: "Project Manager (Tech Projects)",
          dates: "Mar 2021–Present",
          bullets: [],
        },
      ],
    },
  },
  "Digital Marketing (Tech-focused)": {
    starter: {
      title: "Digital Marketing Intern (Tech-focused)",
      summary:
        "Digital marketing intern focused on acquisition and conversion for tech products. Runs channel tests, tracks campaign metrics, and iterates creative based on measurable outcomes.",
      experience: [
        {
          company: "Student SaaS Product",
          role: "Digital Marketing Intern",
          dates: "Nov 2024–Feb 2025",
          bullets: [
            "Executed a multi-channel campaign on a limited budget, acquiring 320+ sign-ups at efficient CPA",
            "A/B tested ad creatives and landing variants to improve conversion and repeatable campaign learnings",
            "Built a unified dashboard for weekly decision-making across paid, lifecycle, and social channels",
          ],
        },
      ],
    },
    developing: {
      title: "Digital Marketing Fresher (Tech-focused)",
      summary:
        "Digital marketing fresher running campaign experiments across paid, content, and lifecycle channels with KPI-first reporting and iterative optimisation.",
      experience: [
        {
          company: "Campus SaaS Team",
          role: "Digital Marketing Specialist",
          dates: "Jan 2023–Present",
          bullets: [],
        },
      ],
    },
    ready: {
      title: "Digital Marketing (Tech-focused) (early-career)",
      summary:
        "Early-career digital marketer scaling acquisition and retention loops for tech products through performance analysis, creative testing, and channel orchestration.",
      experience: [
        {
          company: "Growth Marketing Team",
          role: "Digital Marketing Lead",
          dates: "Mar 2021–Present",
          bullets: [],
        },
      ],
    },
  },
  "AI Product Manager": {
    starter: {
      summary:
        "AI Product Manager intern bridging model capabilities with user needs. Defines AI-assisted workflows, evaluates UX risk, and helps teams ship practical AI features responsibly.",
    },
    developing: {
      summary:
        "AI product manager fresher owning scoped AI features from problem framing to experiment readouts. Focuses on user value, guardrails, and measurable product outcomes.",
    },
    ready: {
      summary:
        "Strong-fresher AI product manager profile: leads scoped AI feature delivery with clear success criteria, responsible rollout checks, and user-facing value proof.",
    },
  },
  "AI Product Management": {
    starter: {
      summary:
        "AI Product Manager intern bridging model capabilities with user needs. Defines AI-assisted workflows, evaluates UX risk, and helps teams ship practical AI features responsibly.",
    },
    developing: {
      summary:
        "AI product manager fresher owning scoped AI features from problem framing to experiment readouts. Focuses on user value, guardrails, and measurable product outcomes.",
    },
    ready: {
      summary:
        "Strong-fresher AI product manager profile: leads scoped AI feature delivery with clear success criteria, responsible rollout checks, and user-facing value proof.",
    },
  },
};

function mergeExperienceRoleOnly(
  base: ExperienceEntry[] | undefined,
  rolePatch: ExperienceEntry[] | undefined
): ExperienceEntry[] | undefined {
  if (!base || !rolePatch || rolePatch.length === 0) return rolePatch ?? base;
  return base.map((entry, idx) => {
    const patch = rolePatch[idx];
    if (!patch) return entry;
    return {
      ...entry,
      company: patch.company || entry.company,
      role: patch.role || entry.role,
      dates: patch.dates || entry.dates,
      bullets: patch.bullets && patch.bullets.length > 0 ? patch.bullets : entry.bullets,
    };
  });
}

export function getRoleCvOverride(
  selectedRole: string | null,
  canonicalRole: string,
  level: DiagnosticLevel,
  base: CVData
): CvOverride | null {
  const baseExperience = normalizeExperienceRoles(base.experience, selectedRole, canonicalRole, level);
  const bySelected = selectedRole ? OVERRIDES_BY_ROLE[selectedRole]?.[level] : null;
  const byCanonical = OVERRIDES_BY_ROLE[canonicalRole]?.[level];
  const override = bySelected ?? byCanonical ?? null;
  if (!override) return { experience: baseExperience };

  return {
    ...override,
    experience: mergeExperienceRoleOnly(baseExperience, override.experience)?.map((entry, idx) =>
      idx === 0
        ? {
            ...entry,
            role: withLevelSuffix(entry.role, level),
          }
        : entry
    ),
  };
}
