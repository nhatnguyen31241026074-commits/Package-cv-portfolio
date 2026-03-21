const fs = require('fs');

const rolesDataConfigs = {
  "Software Engineering (SWE)": {
    baseSkills: ["JavaScript/TypeScript", "Python/Java/Go", "React/Vue/Angular", "Node.js/Spring Boot", "SQL/NoSQL", "Docker", "Git/CI/CD"],
    verbs: ["Architected", "Engineered", "Deployed", "Refactored", "Optimized", "Scaled", "Integrated", "Spearheaded"],
    starter: {
      title: "Aspiring Software Engineer",
      summary: "Recent Computer Science graduate with internship experience building scalable web applications. Developed full-stack projects using React and Node.js with a strong focus on clean, testable code.",
    },
    developing: {
      title: "Junior Software Engineer",
      summary: "Junior Software Engineer with 1+ years of experience contributing to high-traffic distributed systems. Reduced API latency by 15% and improved test coverage across core microservices.",
    },
    ready: {
      title: "Software Engineer",
      summary: "Software Engineer with 3 years of experience orchestrating core platform features. Led a team of 3 junior engineers to successfully migrate a monolithic feature branch to an event-driven architecture.",
    }
  },
  "Artificial Intelligence (AI) / Machine Learning (ML)": {
    baseSkills: ["Python", "PyTorch/TensorFlow", "Scikit-Learn", "Pandas/NumPy", "SQL", "MLOps (MLflow)", "Docker/Kubernetes"],
    verbs: ["Trained", "Deployed", "Fine-tuned", "Optimized", "Benchmarked", "Engineered", "Modeled", "Predicted"],
    starter: {
      title: "Aspiring AI/ML Engineer",
      summary: "Recent graduate with strong foundations in statistical modeling and deep learning. Built and deployed experimental computer vision models utilizing PyTorch during a university research project.",
    },
    developing: {
      title: "Junior Machine Learning Engineer",
      summary: "Junior ML Engineer with 1 year of experience deploying NLP models to production environments. Contributed to inference pipelines that reduced model latency by 20%.",
    },
    ready: {
      title: "Machine Learning Engineer",
      summary: "ML Engineer with 2.5 years experience managing MLOps infrastructure. Spearheaded an initial LLM integration pilot, serving 10k daily active users with sub-150ms latency.",
    }
  },
  "Data Analytics (DA) & Business Intelligence (BI)": {
    baseSkills: ["SQL", "Python/R", "Tableau/PowerBI", "Looker", "Excel/GSheets", "A/B Testing", "Statistical Analysis"],
    verbs: ["Analyzed", "Visualized", "Forecasted", "Extracted", "Synthesized", "Dashboarded", "Uncovered", "Correlated"],
    starter: {
      title: "Aspiring Data Analyst",
      summary: "Detail-oriented entry-level Data Analyst adept at transforming raw data into actionable insights using SQL and Tableau. Passionate about product telemetry and user behavior analytics.",
    },
    developing: {
      title: "Junior Data Analyst",
      summary: "Business Intelligence Analyst with 1.5 years experience building automated reporting pipelines. Uncovered product drop-off points that led to a 5% increase in initial user retention.",
    },
    ready: {
      title: "Data Analyst",
      summary: "Data Analyst with 3 years experience shaping early analytics infrastructure. Designed the core startup data governance, unlocking significant operational efficiencies across the marketing team.",
    }
  },
  "Data Engineering": {
    baseSkills: ["Python/Scala", "SQL", "Spark/Hadoop", "Airflow/Prefect", "Snowflake/BigQuery", "Kafka", "AWS/GCP"],
    verbs: ["Pipelines", "ETL/ELT", "Ingested", "Orchestrated", "Migrated", "Transformed", "Batched", "Streamed"],
    starter: {
      title: "Aspiring Data Engineer",
      summary: "Data-focused recent graduate with strong SQL and Python skills. Built automated ETL pipelines using Apache Airflow during a 6-month internship focused on cloud data warehousing.",
    },
    developing: {
      title: "Junior Data Engineer",
      summary: "Junior Data Engineer with 1 year experience supporting data lake operations. Assisted in reducing overnight batch processing times by 15% through optimized query structuring.",
    },
    ready: {
      title: "Data Engineer",
      summary: "Data Engineer with 3 years experience architecting robust streaming platforms. Successfully transitioned a legacy daily-batch infrastructure into a near-real-time event streaming pipeline.",
    }
  },
  "Cloud Engineering / DevOps": {
    baseSkills: ["AWS/GCP/Azure", "Terraform", "Kubernetes", "Docker", "CI/CD (GitHub Actions/Jenkins)", "Linux", "Bash/Python"],
    verbs: ["Automated", "Provisioned", "Containerized", "Monitored", "Orchestrated", "Secured", "Migrated", "Hardened"],
    starter: {
      title: "Aspiring Cloud Engineer",
      summary: "Systems-oriented graduate passionate about infrastructure as code. Built and deployed automated CI/CD pipelines using GitHub Actions and containerized applications with Docker for personal projects.",
    },
    developing: {
      title: "Junior DevOps Engineer",
      summary: "Junior DevOps Engineer with 1+ years experience supporting cloud environments. Assisted in decreasing deployment failure rates and identified missing tags that cut AWS costs by 10%.",
    },
    ready: {
      title: "Cloud Engineer",
      summary: "Cloud Engineer with 3 years experience maintaining 99.9% uptime for early-stage SaaS platforms. Led the containerization strategy and established centralized FinOps practices.",
    }
  },
  "Product Management (PM)": {
    baseSkills: ["Product Strategy", "Agile/Scrum", "Jira/Linear", "User Research", "Wireframing (Figma)", "SQL/Analytics", "Stakeholder Management"],
    verbs: ["Prioritized", "Roadmapped", "Launched", "Validated", "Aligned", "Shipped", "Strategized", "Iterated"],
    starter: {
      title: "Product Management Intern",
      summary: "Customer-obsessed graduate with a background in execution and research. Successfully supported cross-functional squads to launch a minor feature update resulting in positive initial user feedback.",
    },
    developing: {
      title: "Associate Product Manager (APM)",
      summary: "APM with 1 year experience driving specific B2B SaaS features. Owned the initial user onboarding flow, achieving a 10% increase in activation rate by aggressively removing friction.",
    },
    ready: {
      title: "Product Manager",
      summary: "Product Manager with nearly 3 years of experience managing a core product line. Aligned engineering and marketing to successfully launch a flagship module that increased targeted ARR by 15%.",
    }
  },
  "Product Growth / Growth PM": {
    baseSkills: ["Growth Loops", "A/B Testing", "Mixpanel/Amplitude", "Conversion Rate Optimization (CRO)", "SQL", "Funnel Analytics"],
    verbs: ["Experimented", "Acquired", "Converted", "Retained", "Optimized", "Segmented", "Iterated", "Scaled"],
    starter: {
      title: "Growth Analyst Intern",
      summary: "Analytical problem solver focused on user acquisition and funnel optimization. Analyzed onboarding metrics and proposed UX changes that boosted freemium signups by 5%.",
    },
    developing: {
      title: "Junior Growth PM",
      summary: "Junior Growth PM with 1.5 years executing A/B experiment programs. Co-launched viral referral loops and optimized paywall copy leading to a 10% uplift in customer lifetime value.",
    },
    ready: {
      title: "Growth Product Manager",
      summary: "Growth PM with 3 years accelerating early-stage SaaS platforms. Built the initial experiment infrastructure and defined North Star metrics that successfully lowered customer acquisition costs.",
    }
  },
  "Business Analytics (BA)": {
    baseSkills: ["Requirements Gathering", "Stakeholder Management", "Process Modeling (BPMN)", "SQL", "Agile", "Jira/Confluence", "Data Analysis"],
    verbs: ["Documented", "Facilitated", "Modeled", "Bridged", "Streamlined", "Elicited", "Translated", "Optimized"],
    starter: {
      title: "Business Analyst Intern",
      summary: "Detail-oriented junior analyst acting as the bridge between technical teams and stakeholders. Assisted in streamlining requirement gathering processes, improving visibility for engineering sprints.",
    },
    developing: {
      title: "Junior Business Analyst",
      summary: "Junior BA with 1 year experience supporting digital operations. Translated routine business needs into agile backlogs, resulting in the successful rollout of an internal tracking tool.",
    },
    ready: {
      title: "Business Analyst",
      summary: "Business Analyst with 3 years driving cross-functional processes. Standardized agile documentation across 3 engineering squads, significantly reducing requirement ambiguity and technical debt.",
    }
  },
  "UI/UX / Product Design": {
    baseSkills: ["Figma", "User Research", "Wireframing/Prototyping", "Interaction Design", "Design Systems", "Usability Testing", "HTML/CSS"],
    verbs: ["Designed", "Prototyped", "Researched", "Iterated", "Wireframed", "Systematized", "Tested", "Empathized"],
    starter: {
      title: "Product Design Intern",
      summary: "Creative UI/UX Designer passionate about accessible and intuitive interfaces. Redesigned a pilot checkout flow, improving usability heuristics and task success rates during a recent internship.",
    },
    developing: {
      title: "Junior Product Designer",
      summary: "Junior Product Designer with 1.5 years experience building components for B2B applications. Assisted in establishing a scalable Figma design system and conducted early generative user research.",
    },
    ready: {
      title: "Product Designer",
      summary: "Product Designer with 3 years experience guiding impactful interface decisions. Championed user-centric design cultures that directly influenced a major feature pivot, capturing positive user sentiment.",
    }
  },
  "Project Management (Tech Projects)": {
    baseSkills: ["Agile/Scrum/Kanban", "Resource Allocation", "Risk Management", "Jira/Asana", "Budgeting", "Stakeholder Communication", "Timeline Forecasting"],
    verbs: ["Coordinated", "Delivered", "Mitigated", "Facilitated", "Budgeted", "Forecasted", "Aligned", "Managed"],
    starter: {
      title: "Project Coordinator Intern",
      summary: "Highly organized Project Coordinator combining technical interest with strict timeline management. Assisted in the tracking and delivery of 2 minor software releases ahead of schedule.",
    },
    developing: {
      title: "Junior Project Manager",
      summary: "Junior PM with 1 year experience supporting software delivery lifecycles. Managed targeted project segments, flagged critical path blockers early, and consistently supported sprint goals.",
    },
    ready: {
      title: "Technical Project Manager",
      summary: "Technical PM with 3 years experience overseeing simultaneous software implementations. Aligned small engineering squads to deliver highly-requested features serving key B2B clients.",
    }
  },
  "Business Development (Tech Industry)": {
    baseSkills: ["B2B SaaS Sales", "Lead Generation", "Contract Negotiation", "CRM (Salesforce)", "Strategic Partnerships", "MEDDIC/SPIN", "Pitching"],
    verbs: ["Secured", "Negotiated", "Exceeded", "Prospected", "Closed", "Generated", "Expanded", "Partnered"],
    starter: {
      title: "Sales Development Representative",
      summary: "Tenacious SDR with a strong outbound mindset. Generated 50+ qualified leads and secured initial discovery meetings during a recent heavy-outbound tech sales internship.",
    },
    developing: {
      title: "Junior Account Executive",
      summary: "Junior AE with 1.5 years supporting enterprise SaaS deals. Consistently met quarterly quotas, managed basic sales cycles, and assisted in driving early-stage ARR growth.",
    },
    ready: {
      title: "Business Development Manager",
      summary: "BD Manager with 3 years executing targeted Go-To-Market strategies. Independently secured strategic regional partnerships and closed complex B2B sales cycles to build local market presence.",
    }
  },
  "Digital Marketing (Tech-focused)": {
    baseSkills: ["Performance Marketing (Ads)", "SEO/SEM", "Google Analytics", "CRM (HubSpot/Marketo)", "Content Strategy", "A/B Testing", "Email Automation"],
    verbs: ["Acquired", "Optimized", "Campaigned", "Converted", "Segmented", "Generated", "Targeted", "Scaled"],
    starter: {
      title: "Digital Marketing Intern",
      summary: "Data-driven marketing entry-level specialist experienced in supporting multi-channel digital campaigns. Assisted in optimizing organic search content and led a pilot email campaign with a 15% open rate.",
    },
    developing: {
      title: "Junior Performance Marketer",
      summary: "Junior Performance Marketer with 1 year optimizing paid acquisition channels. Co-managed a targeted ad spend across Google, assisting in reducing overall Customer Acquisition Cost (CAC) by 10%.",
    },
    ready: {
      title: "Digital Marketing Manager",
      summary: "Marketing Manager with 3 years executing tech acquisition strategies. Orchestrated product-led marketing initiatives that resulted in a 40% surge in qualified inbound leads.",
    }
  },
  "Operations (Tech Operations / Process Automation)": {
    baseSkills: ["Process Engineering", "Supply Chain/Logistics", "Operations Management", "SQL", "Zapier/Make", "P&L Management", "Six Sigma/Lean"],
    verbs: ["Streamlined", "Automated", "Scaled", "Reduced", "Eliminated", "Standardized", "Overhauled", "Dispatched"],
    starter: {
      title: "Operations Analyst Intern",
      summary: "Operations Analyst driven by efficiency and process optimization. Automated manual vendor reporting tasks using native Zapier integrations during a recent fast-paced internship.",
    },
    developing: {
      title: "Junior Operations Manager",
      summary: "Junior Operations Manager with 1.5 years supporting high-growth startup fulfillment. Assisted in redesigning logistics workflows, helping to cut delivery SLA breaches by 5%.",
    },
    ready: {
      title: "Operations Manager",
      summary: "Operations Leader with 3 years experience building scalable startup operations. Governed a tight operating budget and successfully supported the operational expansion into a new regional market.",
    }
  },
  "Other (Please Specify)": {
    baseSkills: ["Problem Solving", "Cross-functional Collaboration", "Team Management", "Agile Execution", "Strategic Planning", "Communication", "Data Entry"],
    verbs: ["Led", "Managed", "Optimized", "Developed", "Implemented", "Executed", "Coordinated", "Analyzed"],
    starter: {
      title: "Entry-Level Professional",
      summary: "Proactive and detail-oriented recent graduate with a strong foundation in problem-solving and cross-functional collaboration. Proven ability to quickly master new tools.",
    },
    developing: {
      title: "Junior Professional",
      summary: "Junior professional with 1+ years driving cross-functional initiatives. Consistently optimized internal processes and delivered high-quality outcomes under tight deadlines.",
    },
    ready: {
      title: "Experienced Professional",
      summary: "Professional with 3 years experience guiding strategic initiatives and managing complex portfolios. Renowned for turning early organizational chaos into stable, scalable systems.",
    }
  }
};

// Generic helper checklists for experience and summary based on track
function getChecklists(role) {
  const isEng = role.includes("Engineering") || role.includes("DevOps");
  const isData = role.includes("Data") || role.includes("Machine");
  const isProduct = role.includes("Product") || role.includes("UX");
  const isBiz = role.includes("Business") || role.includes("Marketing") || role.includes("Operations") || role.includes("Project");

  return {
    experienceChecklist: isEng ? [
      "No generic tickets: 'Optimized PostgreSQL queries, reducing read latency by 15%'",
      "Show system context: 'Contributed to microservices handling 5k+ RPM'",
      "Clearly mention tooling context: 'Deployed on AWS using Terraform'"
    ] : isData ? [
      "Lead with accurate outcomes: 'Identified drop-offs to increase retention by 5%'",
      "Detail your data volume/tools: 'Processed 5GB of log data using Apache Spark'",
      "Focus on driving decisions: 'Built dashboard that guided team strategy'"
    ] : isProduct ? [
      "Prove business impact: 'Supported feature X launch, driving positive user feedback'",
      "Show cross-functional leadership: 'Aligned 3 engineers and 1 designer'",
      "Mention your explicit metrics: 'Increased Week-1 DAU by 5%'"
    ] : isBiz ? [
      "Quantify your commercial success: 'Exceeded strict quarterly quota by 110%'",
      "Show targeted impact: 'Managed targeted budget, achieving 5% under-spend'",
      "Detail optimization wins: 'Halved onboarding time via Zapier automation'"
    ] : [
      "Quantify the scale of your impact (budget, team, time saved)",
      "Focus tightly on revenue generated or costs saved",
      "Remove generic soft-skills and focus on executed actions"
    ],
    summaryChecklist: isEng ? [
      "Lead with your strongest domains (Backend, Infra, Full Stack)",
      "Cite heavy-hitting scalability or architectural contributions",
      "Include only strictly factual technologies, avoid 'team player'"
    ] : isData ? [
      "Start with your primary toolkit and business mindset",
      "Highlight specific, real-world scale data modeling tasks",
      "Tie your analysis directly back to tangible revenue or growth"
    ] : isProduct ? [
      "Lead with domain expertise (B2B SaaS, FinTech, Mobile)",
      "State exactly how you achieved product-market fit or growth experiments",
      "Clarify your roadmap execution style"
    ] : isBiz ? [
      "State your Go-To-Market or operational domain",
      "Lead with aggregate revenue or major regional clients won",
      "Highlight strategic relationship building and hustle"
    ] : [
      "Cut the fluff: state exactly what you do in 5 seconds",
      "Show evidence of massive scale or execution speed",
      "Define exactly what value you bring to the company"
    ]
  };
}

// Same HR Quote generation logic we previously designed
function getQuotes(roleName, levelStr) {
  const isEng = roleName.includes("Engineering") || roleName.includes("DevOps");
  const isData = roleName.includes("Data") || roleName.includes("Analytics") || roleName.includes("Machine");
  const isProduct = roleName.includes("Product") || roleName.includes("UX");

  let quotes = {};

  if (levelStr === "starter") {
    quotes.experience = isEng ? "For interns, I don't just want to see tech buzzwords. I want to see exactly what YOU built and the measurable impact it had, even if it's a capstone university project." :
                        isData ? "Show me you know how to clean your own data. Don't just list algorithms from school; tell me how you extracted insights and what action you drove from it." :
                        isProduct ? "For APM interns, your bullet points must prove you can herd cats. Show me you identified a real problem, aligned a team without authority, and shipped something tangible." :
                        "For entry biz roles, numbers matter. Quantify your hustle: how many users you acquired, events organized, or dollars saved during your internships.";

    quotes.summary = isEng ? "Your summary should scream 'I build things.' Tell me your primary stack and one cool project you've shipped. Don't waste my time with 'hard-working graduate'." :
                     isData ? "I want to read your summary and immediately know your analytical toolkit and the types of business problems you're trying to solve as a junior." :
                     isProduct ? "Product is about solving problems. Use your summary to show you have a product mindset. Who are you building for and why do you care?" :
                     "Your summary must be your 2-second elevator pitch. What is your fundamental, hungry value-add as a fresh graduate?";

    quotes.projects = isEng ? "Projects are your real CV at this level. Link the GitHub repo, highlight the architecture decisions, and be honest about the trade-offs you made." :
                      isData ? "I look for a complete end-to-end data pipeline in your projects. Don't just show a Jupyter notebook; deploy it or build a local dashboard." :
                      isProduct ? "Even side projects count heavily. Did you build a Shopify store? Did you launch a campus newsletter? Show me you can hustle from zero to one." :
                      "Show me a campaign, university event, or initiative you owned entirely. What was the exact ROI?";
  } else if (levelStr === "developing") {
    quotes.experience = isEng ? "Junior-level means you own complex feature tickets. 'Responsible for UI' means nothing. 'Architected a cache optimization reducing load time by 15%' gets you hired." :
                        isData ? "I want to see data driving real decisions. Tell me about the dashboard that saved operations 5 hours a week, or the A/B test that increased conversion by 2%." :
                        isProduct ? "Don't tell me you wrote Jira tickets. Tell me you owned a metric, ruthlessly prioritized a sprint backlog, and moved the needle for the business." :
                        "Show me you can independently drive some revenue or operational efficiency. I'm scanning for percentages, dollars, and months saved even in your first year.";

    quotes.summary = isEng ? "Lead with the scale of the systems you've contributed to. Thousands of requests? Core microservices? Put that directly in the first line." :
                     isData ? "Your summary should bridge the technical and commercial. 'Data Analyst with 1.5 years experience unlocking initial revenue patterns for SaaS products'." :
                     isProduct ? "Specify your domain experience (B2B, B2C, Mobile) and your biggest metric win so far. Leave the generic agile buzzwords out." :
                     "Highlight your primary go-to-market strength or operational specialty. I need to know your exact junior superpower immediately.";

    quotes.projects = isEng ? "Highlight side projects that solve developer pain points (open source, CLI tools) - they show deep passion for craftsmanship outside of work hours." :
                      isData ? "Show me projects that involve real-time data or complex statistical modeling that directly answers a complex business question." :
                      isProduct ? "I love seeing product teardowns or case studies in a junior portfolio. It proves you think about UX and revenue even when you're off the clock." :
                      "Any side hustle or freelance consulting here shows excellent commercial awareness and drive.";
  } else {
    // ready (mid-level)
    quotes.experience = isEng ? "As a solid mid-level, you are a force multiplier. Show me how you improved junior developer velocity, drove architectural standards, and led technical initiatives." :
                        isData ? "Mid-level data people build solid pipelines. Tell me how you built the experimentation infrastructure or defined the data governance for your squad." :
                        isProduct ? "At this level, you manage complex product strategy. I need to see module-level metrics: feature retention, market penetration, and how you managed stakeholders." :
                        "Mid-level leaders own the outcome. Explain exactly how you scaled a process, doubled a small sales team's output, or transformed an operational bottleneck.";

    quotes.summary = isEng ? "You are a seasoned engineer. Your summary must convey technical authority and your ability to align engineering architecture with business goals." :
                     isData ? "Lead with your ability to democratize data across an organization and your experience building solid analytical foundations." :
                     isProduct ? "Be extremely sharp with your product thesis. What is your track record of finding product-market fit or scaling early-stage features?" :
                     "This must read like a razor-sharp executive summary. Highlight your targeted, high-dollar impacts and strategic execution skills.";

    quotes.projects = isEng ? "If you mention open source at this level, I expect you to be a steady contributor to a widely used framework or building impressive full-stack apps." :
                      isData ? "Projects here should be foundational - developing novel algorithms, deep-diving whitepapers, or creating widely adopted local data libraries." :
                      isProduct ? "I want to see thought leadership. Do you write about product strategy? Do you advise early startups? Show me your influence beyond your day job." :
                      "Mentoring roles, aggressive side-hustles, or strategic consulting engagements look excellent here.";
  }
  return quotes;
}

const FINAL_ROLE_DATA = {};

for (const roleName in rolesDataConfigs) {
  const config = rolesDataConfigs[roleName];
  const lists = getChecklists(roleName);
  
  FINAL_ROLE_DATA[roleName] = {};
  
  for (const level of ["starter", "developing", "ready"]) {
    const levelConfig = config[level];
    const quotes = getQuotes(roleName, level);
    
    // Choose realistic HR names and companies
    const hrName = roleName.includes("Eng") ? "David Kim" : roleName.includes("Product") ? "Marcus Lee" : "Sarah Thompson";
    const hrRole = roleName.includes("Eng") ? "VP Engineering" : roleName.includes("Product") ? "Head of Product" : "HR Lead";
    const hrCompany = roleName.includes("Eng") ? "scaleup" : roleName.includes("Product") ? "google" : "shopee";
    
    FINAL_ROLE_DATA[roleName][level] = {
      cvTitle: levelConfig.title,
      cvSummary: levelConfig.summary,
      experienceChecklist: lists.experienceChecklist,
      summaryChecklist: lists.summaryChecklist,
      actionVerbs: config.verbs,
      keySkills: config.baseSkills,
      hrQuote: quotes.experience, // generic fallback
      hrName,
      hrRole,
      hrCompany,
      hrQuotes: {
        experience: quotes.experience,
        summary: quotes.summary,
        projects: quotes.projects,
        header: "Your header is the single most important 5 seconds of the CV. Keep it minimalist: Name, Role, Location, Top 2 Links."
      }
    };
  }
}

FINAL_ROLE_DATA["__default__"] = FINAL_ROLE_DATA["Software Engineering (SWE)"];

let output = "export type Level = 'starter' | 'developing' | 'ready';\n\n" +
  "export interface RoleLevelData {\n" +
  "  cvTitle: string;\n" +
  "  cvSummary: string;\n" +
  "  experienceChecklist: [string, string, string];\n" +
  "  summaryChecklist: [string, string, string];\n" +
  "  actionVerbs: string[];\n" +
  "  keySkills: string[];\n" +
  "  hrQuote: string;\n" +
  "  hrName: string;\n" +
  "  hrRole: string;\n" +
  "  hrCompany: 'shopee' | 'google' | 'grab' | 'vng' | 'startup' | 'scaleup';\n" +
  "  hrQuotes?: {\n" +
  "    experience?: string;\n" +
  "    summary?: string;\n" +
  "    header?: string;\n" +
  "    projects?: string;\n" +
  "  };\n" +
  "}\n\n" +
  "export interface RoleData {\n" +
  "  starter: RoleLevelData;\n" +
  "  developing: RoleLevelData;\n" +
  "  ready: RoleLevelData;\n" +
  "}\n\n" +
  "export const ROLE_DATA: Record<string, RoleData> = " + JSON.stringify(FINAL_ROLE_DATA, null, 2) + ";\n\n" +
  "export function getRoleData(role: string | null): RoleData {\n" +
  "  if (!role) return ROLE_DATA['__default__'];\n" +
  "  return ROLE_DATA[role] ?? ROLE_DATA['__default__'];\n" +
  "}\n\n" +
  "export function getRoleLevelData(role: string | null, level: Level): RoleLevelData {\n" +
  "  return getRoleData(role)[level];\n" +
  "}\n";

fs.writeFileSync("src/data/roleData.ts", output, "utf8");
console.log("Successfully generated strictly personalized early-career roleData.ts");
