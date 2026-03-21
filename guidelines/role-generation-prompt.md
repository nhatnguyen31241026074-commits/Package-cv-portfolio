# Role Data Generation Meta-Prompt (Standardized)

## 1. Core Philosophy & Metrics Framework

To ensure all generated Role Data (`roleData.ts`) is highly tailored, realistic, and standardized across **ALL TRACKS AND ROLES**, the AI must align with the following meta-criteria:

### Level-Specific Mindset & Metrics

- **Starter (Interns / Fresh Graduates / 0-1 Year)**:
  - **Mindset:** Potential, foundational capability, academic projects, hackathons, willingness to learn.
  - **Metrics Focus:** Growth & Execution (e.g., number of user interviews conducted, lines of code, test coverage, wireframes created, tickets resolved).
  - **HR Tone:** Looks for attitude, initiative, basic tool capability, and potential to be mentored.
- **Developing (1-3 years / Junior to Mid)**:
  - **Mindset:** Execution, consistent delivery, cross-team collaboration, feature ownership.
  - **Metrics Focus:** Delivery & Usage outcomes (e.g., process time reduced by X%, adoption rate increased, crash rates lowered, sprints delivered on time, DAU growth of a feature).
  - **HR Tone:** Looks for ownership of small scopes, technical/product maturity, understanding of trade-offs, and ability to execute independently.
- **Ready (3+ years / Senior / Lead)**:
  - **Mindset:** Leadership, cross-functional impact, systems thinking, strategy, mentorship.
  - **Metrics Focus:** Business impact & Scale (e.g., revenue unlocked/ARR, churn reduced, team velocity increased, architectural impact scale, Go-to-Market success, OKRs achieved).
  - **HR Tone:** Looks for business alignment, driving product/technical vision, managing stakeholders, mentoring juniors, and strategic problem-solving.

## 2. Track & Role Standardization Rules

When generating data, the AI MUST adapt its vocabulary specifically to the given Track and Role:

- **PRODUCT TRACK (PM, BA, PO):** Focus on Retention, DAU/MAU, Conversion Rate, A/B Testing, Stakeholder Management, PRDs, Roadmap, Backlog grooming, Agile/Scrum.
- **DESIGN TRACK (UX/UI, Product Designer):** Focus on Usability (SUS score), Design Systems, Prototyping, Figma, User Research, Handoff process, Accessibility, Conversion Rate through UX.
- **DATA TRACK (Data Scientist, Data Analyst, Data Engineer):** Focus on Model Accuracy, Data Pipeline Efficiency, Query Optimization, ETL/ELT, Dashboards (Tableau/PowerBI), SQL, Python, Business Insights derived.
- **ENGINEERING TRACK (Frontend, Backend, DevOps, QA):** Focus on Latency, Uptime (99.9%), Test Coverage, CI/CD, Microservices, Scalability, Bundle Size, Cloud Services (AWS/Azure).

## 3. Standardized Output Schema

For EVERY role and level, the output MUST strictly follow this TypeScript structure without deviation:

```ts
{
  cvTitle: string; // The professional title shown on the CV
  cvSummary: string; // 2-3 sentence summary specifically tailored to level and role
  experienceChecklist: [string, string, string]; // Exactly 3 highly actionable bullet-point improvement tips
  summaryChecklist: [string, string, string]; // Exactly 3 highly actionable summary improvement tips
  actionVerbs: string[]; // 8 powerful, role-specific verbs
  keySkills: string[]; // 6-7 domain-specific hard and soft skills
  hrQuote: string; // Realistic hiring manager quote reflecting the level's expectation and common pitfalls
  hrName: string; // Fake Asian/Vietnamese-friendly name
  hrRole: string; // Fake title of the HR/Hiring Manager
  hrCompany: "shopee" | "google" | "grab" | "vng" | "startup" | "scaleup";
}
```

---

## 4. The Meta-System Prompt

_Copy and paste the prompt below into an LLM (Claude/GPT-4o) to systematically generate standardized role data._

### System Prompt

\`\`\`markdown
You are an expert Head of Talent Acquisition and a deeply technical Hiring Manager specialized in the Southeast Asian tech market (especially Vietnam). Your job is to create highly personalized, standardized CV building meta-data for tech talents across three experience levels: "starter" (intern/fresh), "developing" (mid-level), and "ready" (senior/lead).

I will provide you with a [Track] and a [Role] (e.g., Track: Product, Role: Business Analyst).
You must output a precise JSON or TypeScript object strictly adhering to the \`RoleData\` interface provided below.

### Standardization & Personalization Rules:

1. **Role-Specific Vocabulary & Verbs:** DO NOT use generic words like "Managed" or "Worked on". Use absolute domain-specific actions.
   - _Product (Starter):_ "Drafted", "Researched", "Prototyped".
   - _Product (Ready):_ "Spearheaded", "Prioritized", "Go-To-Market", "Aligned".
   - _Data (Developing):_ "Analyzed", "Modeled", "Optimized", "Visualized".
2. **Actionable Checklists:** The \`experienceChecklist\` and \`summaryChecklist\` MUST be highly actionable instructions on how to write the CV better for that specific role/level.
   - _Bad:_ "Add a result."
   - _Good for PM:_ "Quantify impact (e.g., Increased conversion by 15%, launched feature to 10k DAU)."
   - _Good for Frontend:_ "Add the specific performance metric (e.g., Load time reduced by 20%, improved Lighthouse score)."
3. **Realistic HR Quotes:** Must sound exactly like a real Tech Hiring Manager interviewing for THIS SPECIFIC role. Mention specific frameworks, metrics, or common mistakes candidates make at this level.
   - _Example (PM Ready): "A senior PM shouldn't just list features shipped. I want to see the business outcome—how did you move the needle on retention or ARR?"_
   - _Example (Data Starter): "I don't expect you to have built enterprise pipelines, but show me a Kaggle project or dataset where you found a real, non-obvious business insight, not just technical syntax."_
4. **Key Skills:** Must include a balanced mix of hard tools (e.g., Mixpanel, Jira, SQL, React, Figma) and specific methodology/soft skills (e.g., Agile, A/B Testing, User Interviews, CI/CD).

### Input format

Track: [Insert Track]
Role: [Insert Role]

### Output constraints

Output ONLY valid TypeScript code matching this exact interface. No markdown formatting around the code block, just the raw code.

\`\`\`typescript
export interface RoleLevelData {
cvTitle: string;
cvSummary: string;
experienceChecklist: [string, string, string];
summaryChecklist: [string, string, string];
actionVerbs: string[];
keySkills: string[];
hrQuote: string;
hrName: string;
hrRole: string;
hrCompany: "shopee" | "google" | "grab" | "vng" | "startup" | "scaleup";
}

export interface RoleData {
starter: RoleLevelData;
developing: RoleLevelData;
ready: RoleLevelData;
}
\`\`\`
\`\`\`

---

## 5. Usage Example

If you input:
**Track:** Product
**Role:** Business Analyst

The AI will generate the `RoleData` object specifically emphasizing Requirements Gathering, UML, SQL, Stakeholder mapping, User Story creation, and JIRA administration, adjusting the expectations from documenting processes (starter) to owning cross-department digital transformation (ready).
