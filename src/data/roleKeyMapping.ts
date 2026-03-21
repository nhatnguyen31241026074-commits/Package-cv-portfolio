/**
 * Maps UI role labels (from Screen1Pillars) to canonical keys used in
 * ROLE_DATA, CV_TEMPLATES, EXPANDED_CV_TEMPLATES, and TRANSFORM_TEMPLATES.
 */
/** Full labels from the role picker map to themselves. */
const CANONICAL_ROLE_KEYS: readonly string[] = [
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

const EXPLICIT_UI_TO_CANONICAL: Record<string, string> = Object.fromEntries(
  CANONICAL_ROLE_KEYS.map((k) => [k, k])
) as Record<string, string>;

Object.assign(EXPLICIT_UI_TO_CANONICAL, {
  "Frontend Engineer": "Software Engineering (SWE)",
  "Backend Engineer": "Software Engineering (SWE)",
  "Full Stack Dev": "Software Engineering (SWE)",
  "Full-Stack Dev": "Software Engineering (SWE)",
  "Mobile Dev": "Software Engineering (SWE)",
  DevOps: "Cloud Engineering / DevOps",
  "Sales Engineer": "Business Development (Tech Industry)",
  "Solutions Architect": "Software Engineering (SWE)",
  "Partnerships Lead": "Business Development (Tech Industry)",
  Operations: "Operations (Tech Operations / Process Automation)",
  "AI/ML Engineer": "Artificial Intelligence (AI) / Machine Learning (ML)",
  "AI Product Manager": "Artificial Intelligence (AI) / Machine Learning (ML)",
  "AI Product Management": "Artificial Intelligence (AI) / Machine Learning (ML)",
  "Prompt Engineer": "Artificial Intelligence (AI) / Machine Learning (ML)",
  "Data Scientist": "Data Analytics (DA) & Business Intelligence (BI)",
});

/**
 * Returns the canonical content key for CV / checklist / transform data.
 * Matches previous logic in Screen3Workspace.getCVTemplateKey.
 */
export function getCanonicalTrackKey(role: string | null): string {
  const safeRole = role || "";
  if (EXPLICIT_UI_TO_CANONICAL[safeRole]) return EXPLICIT_UI_TO_CANONICAL[safeRole];

  if (safeRole.includes("Data Engineering")) return "Data Engineering";
  if (safeRole.includes("AI") || safeRole.includes("Machine Learning"))
    return "Artificial Intelligence (AI) / Machine Learning (ML)";
  if (
    safeRole.includes("Data Analytics") ||
    safeRole.includes("Business Intelligence")
  )
    return "Data Analytics (DA) & Business Intelligence (BI)";
  if (safeRole.includes("Data") || safeRole.includes("Analytics"))
    return "Data Analytics (DA) & Business Intelligence (BI)";
  if (safeRole.includes("Cloud") || safeRole.includes("DevOps"))
    return "Cloud Engineering / DevOps";
  if (
    safeRole.includes("Engineer") ||
    safeRole.includes("SWE") ||
    safeRole.includes("Developer") ||
    safeRole.includes("Dev")
  )
    return "Software Engineering (SWE)";
  if (safeRole.includes("Growth")) return "Product Growth / Growth PM";
  if (safeRole.includes("UI") || safeRole.includes("UX") || safeRole.includes("Design"))
    return "UI/UX / Product Design";
  if (safeRole.includes("Business Development"))
    return "Business Development (Tech Industry)";
  if (safeRole.includes("Marketing")) return "Digital Marketing (Tech-focused)";
  if (safeRole.includes("Operations") || safeRole.includes("Process"))
    return "Operations (Tech Operations / Process Automation)";
  if (safeRole.includes("Project")) return "Project Management (Tech Projects)";
  if (safeRole.includes("Business Analytics") || safeRole.includes("BA"))
    return "Business Analytics (BA)";
  return "Product Management (PM)";
}

/** Keys that exist in EXPANDED_CV_TEMPLATES (expandedCvData) — short + legacy labels. */
const EXPANDED_CV_LEGACY_KEYS = new Set<string>([
  "Frontend Engineer",
  "Backend Engineer",
  "Full Stack Dev",
  "Full-Stack Dev",
  "Mobile Dev",
  "DevOps",
  "Product Management (PM)",
  "Product Growth / Growth PM",
  "Business Analytics (BA)",
  "UI/UX / Product Design",
  "Sales Engineer",
  "Solutions Architect",
  "Partnerships Lead",
  "Operations",
  "AI/ML Engineer",
  "AI Product Manager",
  "Prompt Engineer",
  "Data Scientist",
]);

/**
 * Maps canonical track → one legacy key in EXPANDED_CV_TEMPLATES (same narrative tier / closest fit).
 */
const CANONICAL_TO_EXPANDED_LEGACY: Record<string, string> = {
  "Software Engineering (SWE)": "Frontend Engineer",
  "Artificial Intelligence (AI) / Machine Learning (ML)": "AI/ML Engineer",
  "Data Analytics (DA) & Business Intelligence (BI)": "Data Scientist",
  "Data Engineering": "Backend Engineer",
  "Cloud Engineering / DevOps": "DevOps",
  "Product Management (PM)": "Product Management (PM)",
  "Product Growth / Growth PM": "Product Growth / Growth PM",
  "Business Analytics (BA)": "Business Analytics (BA)",
  "UI/UX / Product Design": "UI/UX / Product Design",
  "Project Management (Tech Projects)": "Product Management (PM)",
  "Business Development (Tech Industry)": "Sales Engineer",
  "Digital Marketing (Tech-focused)": "Product Growth / Growth PM",
  "Operations (Tech Operations / Process Automation)": "Operations",
};

/**
 * Key for EXPANDED_CV_TEMPLATES lookup when UI uses full canonical role names.
 */
export function getExpandedCvTemplateKey(role: string | null): string {
  const r = role || "";
  if (r === "AI Product Management") return "AI Product Manager";
  if (EXPANDED_CV_LEGACY_KEYS.has(r)) return r;
  const canon = getCanonicalTrackKey(r);
  return CANONICAL_TO_EXPANDED_LEGACY[canon] ?? "Frontend Engineer";
}
