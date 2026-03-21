import fs from "fs";

const newRoles = [
  { newName: "Software Engineering (SWE)", oldName: "Full Stack" },
  { newName: "Artificial Intelligence (AI) / Machine Learning (ML)", oldName: "ML Engineer" },
  { newName: "Data Analytics (DA) & Business Intelligence (BI)", oldName: "Data PM" },
  { newName: "Data Engineering", oldName: "Backend Engineer" },
  { newName: "Cloud Engineering / DevOps", oldName: "DevOps / Platform" },
  { newName: "Product Management (PM)", oldName: "Product Manager" },
  { newName: "Product Growth / Growth PM", oldName: "Growth Analyst" },
  { newName: "Business Analytics (BA)", oldName: "Business Analyst" },
  { newName: "UI/UX / Product Design", oldName: "UX Researcher" },
  { newName: "Project Management (Tech Projects)", oldName: "Operations" },
  { newName: "Business Development (Tech Industry)", oldName: "Business Development" },
  { newName: "Digital Marketing (Tech-focused)", oldName: "Growth Analyst" },
  { newName: "Operations (Tech Operations / Process Automation)", oldName: "Operations" },
  { newName: "Other (Please Specify)", oldName: "Frontend Engineer" }
];

// We will read the old file, parse it roughly via eval, modify it, and write it back.
// Since reading TS via eval is tricky with imports, we'll just read it, strip the TS interfaces, eval as a JS object, modify, and write back.

const fileContent = fs.readFileSync("src/data/roleData.ts", "utf8");
// Extract the ROLE_DATA object string
const objStart = fileContent.indexOf("export const ROLE_DATA");
const objBodyStart = fileContent.indexOf("{", objStart);
const objBody = fileContent.substring(objBodyStart);
// Find the end before "// ─── Helpers"
const endTarget = "// ─── Helpers";
const endIdx = objBody.indexOf(endTarget);
let validObjStr = objBody.substring(0, endIdx).trim();
if (validObjStr.endsWith(";")) {
  validObjStr = validObjStr.slice(0, -1); // remove semicolon
}

// Simple hack to parse the object out safely:
// Using modern JS, we can eval it
// Actually eval requires valid JS. 'export' isn't valid in eval.
const JS_TO_EVAL = `
  const obj = ` + validObjStr + `;
  return obj;
`;
let oldRoleData;
try {
  oldRoleData = new Function(JS_TO_EVAL)();
} catch (e) {
  console.error("Failed to parse old role data", e);
  process.exit(1);
}

const NEW_ROLE_DATA = {};

// Helper to generate section-specific quotes tailored to the track
function getQuotes(roleName, levelStr, hrName) {
  const isEng = roleName.includes("Engineering") || roleName.includes("DevOps");
  const isData = roleName.includes("Data") || roleName.includes("Analytics") || roleName.includes("Machine Learning");
  const isProduct = roleName.includes("Product") || roleName.includes("UX");
  const isBiz = roleName.includes("Business") || roleName.includes("Operations") || roleName.includes("Marketing") || roleName.includes("Project");

  let quotes = {};

  if (levelStr === "starter") {
    quotes.experience = isEng ? "For junior engineers, I don't just want to see tech buzzwords. I want to see exactly what YOU built and the measurable impact it had, even if it's a university project." :
                        isData ? "Show me you know how to clean your own data. Don't just list algorithms; tell me how you extracted insights and what action you drove from it." :
                        isProduct ? "For APMs, your bullet points must prove you can herd cats. Show me you identified a real problem, aligned a team without authority, and shipped something tangible." :
                        "For junior biz roles, numbers matter. Quantify your hustle: how many users you acquired, events organized, or dollars saved.";

    quotes.summary = isEng ? "Your summary should scream 'I build things.' Tell me your primary stack and one cool project you've shipped. Don't waste my time with 'hard-working graduate'." :
                     isData ? "I want to read your summary and immediately know your analytical toolkit and the types of business problems you're trying to solve." :
                     isProduct ? "Product is about solving problems. Use your summary to show you have a product mindset. Who are you building for and why do you care?" :
                     "Your summary must be your 2-second elevator pitch. What is your fundamental business value-add?";

    quotes.projects = isEng ? "Projects are your real CV at this level. Link the GitHub repo, highlight the architecture decisions, and be honest about the trade-offs." :
                      isData ? "I look for a complete end-to-end data pipeline in your projects. Don't just show a Jupyter notebook; deploy it or build a dashboard." :
                      isProduct ? "Even side projects count. Did you build a Shopify store? Did you launch a newsletter? Show me you can hustle from zero to one." :
                      "Show me a campaign, event, or initiative you owned entirely. What was the ROI?";
  } else if (levelStr === "developing") {
    quotes.experience = isEng ? "Mid-level means you own complex features. 'Responsible for UI' means nothing. 'Architected a cache optimization reducing load time by 40%' gets you hired." :
                        isData ? "I want to see data driving real decisions. Tell me about the dashboard that saved operations 20 hours a week, or the A/B test that increased conversion by 5%." :
                        isProduct ? "Don't tell me you wrote tickets. Tell me you owned a metric, ruthlessly prioritized a roadmap, and moved the needle for the business." :
                        "Show me you can independently drive revenue or operational efficiency. I'm scanning for percentages, dollars, and months saved.";

    quotes.summary = isEng ? "Lead with the scale of the systems you've worked on. Millions of requests? Hundreds of microservices? Put that directly in the first line." :
                     isData ? "Your summary should bridge the technical and commercial. 'Data Analyst with 3 years experience unlocking revenue patterns for SaaS products'." :
                     isProduct ? "Specify your domain expertise (B2B, B2C, Mobile) and your biggest metric win. Leave the generic agile buzzwords out." :
                     "Highlight your primary go-to-market strength or operational specialty. I need to know your exact superpower immediately.";

    quotes.projects = isEng ? "Highlight side projects that solve developer pain points (open source, CLI tools) - they show deep passion for craftsmanship." :
                      isData ? "Show me projects that involve real-time data or complex statistical modeling that directly answers a business question." :
                      isProduct ? "I love seeing product breakdowns or case studies in a portfolio. It proves you think about UX and revenue even when you're off the clock." :
                      "Any side hustle or freelance consulting here shows excellent commercial awareness.";
  } else {
    // ready (senior/lead)
    quotes.experience = isEng ? "As a senior, you are a force multiplier. Show me how you improved developer velocity, drove architectural standards, and led cross-functional technical initiatives." :
                        isData ? "Lead data people build platforms and set strategy. Tell me how you built the experimentation infrastructure or defined the data governance for the entire company." :
                        isProduct ? "At this level, you manage portfolios and product strategy. I need to see board-level metrics: ARR, market penetration, and how you managed other PMs." :
                        "Senior leaders own the P&L. Explain exactly how you scaled a geography, doubled a sales team's output, or completely transformed an operational bottleneck.";

    quotes.summary = isEng ? "You are an engineering leader. Your summary must convey technical authority and your ability to align engineering architecture with business goals." :
                     isData ? "Lead with your ability to democratize data across an organization and your experience scaling data science teams." :
                     isProduct ? "Be extremely sharp with your product thesis. What is your track record of finding product-market fit or scaling $10M+ businesses?" :
                     "This must read like a C-level executive summary. Highlight your massive, multi-million dollar impacts and strategic vision.";

    quotes.projects = isEng ? "If you mention open source at this level, I expect you to be a maintainer or core contributor to a widely used framework." :
                      isData ? "Projects here should be foundational - developing novel algorithms, writing whitepapers, or creating widely adopted data libraries." :
                      isProduct ? "I want to see thought leadership. Do you write about product strategy? Do you advise startups? Show me your influence beyond your day job." :
                      "Board advisory roles, angel investing, or strategic consulting engagements look excellent here.";
  }
  return quotes;
}

for (const p of newRoles) {
  // We grab the "oldName" as a base template so it has realistic skills, checklists, etc.
  const baseData = oldRoleData[p.oldName] || oldRoleData["Full Stack"];
  if (baseData) {
      NEW_ROLE_DATA[p.newName] = JSON.parse(JSON.stringify(baseData)); // deep clone
      // Update cvTitle roughly to match the new role name
      for (const level of ["starter", "developing", "ready"]) {
         let lvlName = "Aspiring " + p.newName.replace(/ \\(.*\\)/, "");
         if (level === "developing") lvlName = p.newName.replace(/ \\(.*\\)/, "");
         if (level === "ready") lvlName = "Lead / Senior " + p.newName.replace(/ \\(.*\\)/, "");
         if (level === "starter" && p.newName.includes("Engineering")) lvlName = "Aspiring Software Engineer";
         if (level === "developing" && p.newName.includes("Engineering")) lvlName = "Software Engineer";
         if (level === "ready" && p.newName.includes("Engineering")) lvlName = "Senior Software Engineer";
         
         NEW_ROLE_DATA[p.newName][level].cvTitle = lvlName;
         
         // Generate exact tailored quotes for each panel section
         const dynamicQuotes = getQuotes(p.newName, level, NEW_ROLE_DATA[p.newName][level].hrName);
         NEW_ROLE_DATA[p.newName][level].hrQuotes = {
           experience: dynamicQuotes.experience,
           summary: dynamicQuotes.summary,
           projects: dynamicQuotes.projects,
           header: "Your header is the single most important 5 seconds of the CV. Keep it minimalist: Name, Role, Location, Top 2 Links. The rest is noise."
         };
      }
  }
}
NEW_ROLE_DATA["__default__"] = oldRoleData["Full Stack"] || NEW_ROLE_DATA["Software Engineering (SWE)"];

let finalOutput = `export type Level = "starter" | "developing" | "ready";

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
  hrQuotes?: {
    experience?: string;
    summary?: string;
    header?: string;
    projects?: string;
  };
}

export interface RoleData {
  starter: RoleLevelData;
  developing: RoleLevelData;
  ready: RoleLevelData;
}

`

finalOutput += "export const ROLE_DATA: Record<string, RoleData> = " + JSON.stringify(NEW_ROLE_DATA, null, 2) + ";\n\n";

finalOutput += `
// ─── Helpers ─────────────────────────────────────────────────────────────────

export function getRoleData(role: string | null): RoleData {
  if (!role) return ROLE_DATA["__default__"];
  return ROLE_DATA[role] ?? ROLE_DATA["__default__"];
}

export function getRoleLevelData(role: string | null, level: Level): RoleLevelData {
  return getRoleData(role)[level];
}
`;

fs.writeFileSync("src/data/roleData.ts", finalOutput, "utf8");
console.log("Successfully ran data mapping script.");
