// ─── Per-Role Data Layer ────────────────────────────────────────────────────
// This is the single source of truth for role-specific content.
// Content maps: role (string from Screen1Pillars) → level → section content.

export type Level = "starter" | "developing" | "ready";

export interface RoleLevelData {
  // CV Canvas: Name/Title displayed on the sample CV
  cvTitle: string;
  cvSummary: string;

  // Transformation demo: before → after bullet checklist
  experienceChecklist: [string, string, string];
  summaryChecklist: [string, string, string];

  // Action verbs highlighted in the GuidePanel
  actionVerbs: string[];

  // Key skills shown in the workspace sidebar
  keySkills: string[];

  // HR Quote shown in the side panel
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

// ─── Role Map ────────────────────────────────────────────────────────────────
// Keys must match the role strings defined in Screen1Pillars.tsx PILLARS[].roles

export const ROLE_DATA: Record<string, RoleData> = {

  // ── ENGINEERING TRACK ──────────────────────────────────────────────────────

  "Frontend Engineer": {
    starter: {
      cvTitle: "Aspiring Frontend Developer",
      cvSummary: "Final-year Information Technology student with hands-on UI experience through personal projects and hackathons. Passionate about building fast, accessible web interfaces. Seeking first Frontend role in tech.",
      experienceChecklist: [
        "Replace 'worked on the website' with a specific verb — Built, Developed, Implemented",
        "Add the framework or library you used (React, Vue, Tailwind CSS)",
        "Add a result — load time reduced, pages added, users served",
      ],
      summaryChecklist: [
        "State your degree, university and graduation year clearly",
        "Name the specific technologies you've used (React, TypeScript, CSS)",
        "Close with a clear goal: what company type or role are you targeting?",
      ],
      actionVerbs: ["Built", "Implemented", "Developed", "Designed", "Shipped", "Prototyped", "Deployed", "Created"],
      keySkills: ["React.js", "HTML/CSS", "JavaScript", "Figma", "Git", "Responsive Design"],
      hrQuote: "For junior frontend roles, I look for proof that you can build real UIs — not just theory. Show me a GitHub link, a live site, a hackathon project. The code doesn't have to be perfect; the initiative does.",
      hrName: "Linh Tran",
      hrRole: "Engineering Manager",
      hrCompany: "vng",
    },
    developing: {
      cvTitle: "Frontend Engineer",
      cvSummary: "Performance-focused Frontend Engineer with 2+ years building React applications for 100K+ users. Specialised in web performance optimisation and component architecture that scales.",
      experienceChecklist: [
        "Replace 'responsible for UI' with a specific action: Architected, Optimised, Migrated",
        "Add team context: worked with X designers, Y backend engineers, in N-week sprint",
        "Quantify: load time reduced by X%, Lighthouse score improved from Y to Z",
      ],
      summaryChecklist: [
        "Lead with years of experience + primary stack (React, TypeScript)",
        "Include one performance metric (bundle size, LCP, page speed score)",
        "Add your specialisation — component library, e-commerce, design systems",
      ],
      actionVerbs: ["Architected", "Optimised", "Migrated", "Refactored", "Shipped", "Implemented", "Reduced", "Improved"],
      keySkills: ["React.js", "TypeScript", "Next.js", "Tailwind CSS", "Webpack/Vite", "Web Performance (LCP, CLS)", "REST / GraphQL"],
      hrQuote: "Mid-level frontend engineers need to show they understand performance trade-offs, not just that they can write JSX. I want to see bundle sizes reduced, Lighthouse scores improved, or a component library adopted by a team.",
      hrName: "Marcus Lee",
      hrRole: "Tech Lead",
      hrCompany: "google",
    },
    ready: {
      cvTitle: "Senior Frontend Engineer / Tech Lead",
      cvSummary: "Strategic Frontend Tech Lead with 6+ years scaling web platforms from prototype to production. Led frontend guild of 12 engineers. Expert in micro-frontends, CI/CD pipelines, and cross-platform performance standards.",
      experienceChecklist: [
        "Upgrade to executive verbs: Spearheaded, Championed, Architected the Frontend guild or platform",
        "Show org impact: led N engineers, defined coding standards adopted across M teams",
        "Lead with business outcome: pages that load in <2s, revenue uplift from perf improvements",
      ],
      summaryChecklist: [
        "Lead with org scale: how many engineers or teams have you influenced?",
        "Add architectural impact: micro-frontends, design system, CI/CD ownership",
        "Show business value: how did your platform improvements affect user metrics or revenue?",
      ],
      actionVerbs: ["Championed", "Spearheaded", "Architected", "Defined", "Established", "Scaled", "Mentored", "Orchestrated"],
      keySkills: ["React.js / Next.js", "TypeScript", "Micro-frontends", "CI/CD (GitHub Actions)", "Design Systems", "Web Vitals", "Team Leadership"],
      hrQuote: "For senior frontend roles I'm looking for engineers who've shaped the platform, not just used it. Tell me about the design system you built, the guild you led, or the performance initiative that cut your LCP in half. Code quality advocates get calls back.",
      hrName: "David Kim",
      hrRole: "VP Engineering",
      hrCompany: "scaleup",
    },
  },

  "Backend Engineer": {
    starter: {
      cvTitle: "Aspiring Backend Developer",
      cvSummary: "Final-year Computer Science student with experience building REST APIs in Python and Node.js through personal and academic projects. Seeking first Backend Engineering role at a product-led tech company.",
      experienceChecklist: [
        "Replace 'made an API' with Built, Designed, or Implemented a REST API for [use case]",
        "Name the language and framework: Python/FastAPI, Node.js/Express, Java/Spring Boot",
        "Add a scope: served X requests/day, connected to Y database, used by Z users",
      ],
      summaryChecklist: [
        "State your backend stack clearly (Python, Java, Node.js) — not just 'programming'",
        "Mention what you've built: APIs, microservices, database schemas",
        "Add a metric if possible: project handling X users or Y requests per second",
      ],
      actionVerbs: ["Built", "Designed", "Implemented", "Developed", "Wrote", "Integrated", "Created", "Configured"],
      keySkills: ["Python / Node.js", "REST API", "SQL (PostgreSQL)", "Git", "Docker (basic)", "Data Structures & Algorithms"],
      hrQuote: "For junior backend roles, I want to see you understand how systems connect — APIs, databases, auth flows. A side project with a working API connected to a real DB tells me more than a list of languages on your CV.",
      hrName: "Linh Tran",
      hrRole: "Engineering Manager",
      hrCompany: "vng",
    },
    developing: {
      cvTitle: "Backend Engineer",
      cvSummary: "Backend Engineer with 2+ years building high-throughput microservices processing 5M+ daily events. Specialised in distributed systems, API design, and service reliability with 99.9% uptime SLAs.",
      experienceChecklist: [
        "Replace 'worked on backend services' with Designed, Migrated, or Scaled a specific service",
        "Add system context: microservice, event-driven, message queue (Kafka, RabbitMQ)",
        "Quantify reliability or scale: 99.9% uptime, Xms p99 latency, Y req/sec throughput",
      ],
      summaryChecklist: [
        "Lead with your primary language stack and years of experience",
        "Include a scale metric: requests per second, data volume, uptime SLA",
        "Add your specialisation: distributed systems, API design, data pipelines",
      ],
      actionVerbs: ["Designed", "Scaled", "Migrated", "Optimised", "Implemented", "Refactored", "Deployed", "Reduced"],
      keySkills: ["Python / Go / Java", "Microservices", "Kafka / RabbitMQ", "PostgreSQL / Redis", "Docker / Kubernetes", "REST / gRPC", "CI/CD"],
      hrQuote: "I scan backend CVs for scale numbers and reliability signals. 'Built an API' means nothing. 'Scaled API to handle 10K req/s with p99 latency under 50ms' tells me you understand production engineering.",
      hrName: "Marcus Lee",
      hrRole: "Tech Lead",
      hrCompany: "google",
    },
    ready: {
      cvTitle: "Senior Backend Engineer / Staff Engineer",
      cvSummary: "Staff Backend Engineer with 7+ years designing distributed systems at scale. Architected core payments infrastructure processing $200M+ annually. Led platform migration reducing infra costs by 40%.",
      experienceChecklist: [
        "Use staff-level verbs: Architected, Designed the technical vision for, Led the migration of",
        "Show org-level impact: adopted by 5 teams, reduced platform COGS by $X, served as tech lead on Y initiative",
        "Include business outcome: $M in cost savings, revenue-critical uptime, security audit pass",
      ],
      summaryChecklist: [
        "Lead with your architectural contributions: what systems have you designed end-to-end?",
        "Add business-scale impact: revenue processed, cost savings, org-wide adoption",
        "Show leadership: how many engineers have you mentored or led technically?",
      ],
      actionVerbs: ["Architected", "Championed", "Spearheaded", "Defined", "Established", "Drove", "Mentored", "Designed"],
      keySkills: ["Distributed Systems", "System Design", "Python / Go / Java", "Kafka / Flink", "PostgreSQL / Cassandra", "Kubernetes", "Staff Leadership"],
      hrQuote: "At Staff level I need to see you've made decisions that outlast you — a system design that teams still build on, a tech debt initiative that saved months. Show me architectural ownership, not just feature delivery.",
      hrName: "David Kim",
      hrRole: "VP Engineering",
      hrCompany: "scaleup",
    },
  },

  "Full Stack": {
    starter: {
      cvTitle: "Aspiring Full Stack Developer",
      cvSummary: "Computer Science student with end-to-end project experience using React and Node.js. Built 3 full-stack web applications as part of coursework and personal initiatives. Seeking first Full Stack role at a product company.",
      experienceChecklist: [
        "Don't just say 'full stack' — specify what you built on each layer: React frontend + Node API + PostgreSQL",
        "Name the deployment method: deployed on Vercel, self-hosted on VPS, Dockerised",
        "Add a user or outcome signal: used by X classmates, handles Y registrations",
      ],
      summaryChecklist: [
        "List your full stack clearly: frontend framework + backend language + database",
        "Count your projects: 'Built N full-stack applications' is specific and credible",
        "Add a target: what type of company or product domain interests you?",
      ],
      actionVerbs: ["Built", "Developed", "Shipped", "Integrated", "Designed", "Deployed", "Connected", "Created"],
      keySkills: ["React.js", "Node.js / Express", "PostgreSQL", "REST API", "Git", "Docker (basic)", "HTML/CSS", "Vercel / Railway"],
      hrQuote: "Full stack juniors stand out when they show ownership of the entire feature — not just 'did some frontend and some backend'. Walk me through one project from idea to deployment. That ownership mindset is what we hire for.",
      hrName: "Sarah Thompson",
      hrRole: "HR Lead",
      hrCompany: "shopee",
    },
    developing: {
      cvTitle: "Full Stack Engineer",
      cvSummary: "Full Stack Engineer with 3+ years delivering end-to-end product features for B2C platforms with 200K+ users. Comfortable owning features from database schema to polished React UI.",
      experienceChecklist: [
        "Show end-to-end ownership: 'Owned full-stack implementation of [feature] from schema design to UI'",
        "Name the stack explicitly: React + TypeScript frontend, FastAPI backend, PostgreSQL, Redis",
        "Add business impact: feature adopted by X% of users, reduced API response time by Y%",
      ],
      summaryChecklist: [
        "Lead with your years + the scale of products you've worked on (users, revenue)",
        "Demonstrate both layers: what's distinctive about your frontend AND backend work?",
        "Add your strongest metric: feature delivery speed, user adoption, performance gain",
      ],
      actionVerbs: ["Owned", "Shipped", "Implemented", "Refactored", "Integrated", "Optimised", "Designed", "Deployed"],
      keySkills: ["React / TypeScript", "Node.js / FastAPI / Django", "PostgreSQL / MongoDB", "Redis", "Docker / CI/CD", "REST / GraphQL"],
      hrQuote: "Mid-level full stack candidates who stand out show they make smart trade-off decisions — when to use a cache, when to push logic to the frontend vs backend. I don't want someone who does both layers; I want someone who thinks about the right layer.",
      hrName: "Marcus Lee",
      hrRole: "Tech Lead",
      hrCompany: "google",
    },
    ready: {
      cvTitle: "Senior Full Stack / Platform Engineer",
      cvSummary: "Senior Full Stack Engineer with 6+ years leading end-to-end platform development. Architected the core product infrastructure serving 1M+ users and led a cross-functional squad of 8 engineers.",
      experienceChecklist: [
        "Elevate to platform-level contributions: 'Architected the monorepo migration', 'Defined the API gateway strategy'",
        "Show team leadership: led N-person squad, defined coding standards, conducted code reviews",
        "Lead with business impact: platform that powers $XM in transactions, serves Y users",
      ],
      summaryChecklist: [
        "Lead with the scale of systems you've built and maintained",
        "Add team leadership signal: how many engineers have you led or mentored?",
        "Include a business outcome: revenue processed, users served, cost reduction",
      ],
      actionVerbs: ["Architected", "Spearheaded", "Led", "Defined", "Championed", "Scaled", "Mentored", "Established"],
      keySkills: ["React / Next.js", "Node.js / Go", "PostgreSQL / Redis", "Kubernetes / Docker", "System Design", "Tech Leadership", "Monorepo Architecture"],
      hrQuote: "A great senior full stack engineer shows they've shaped the engineering culture, not just written code. Tell me about the standards you've set, the developer experience improvements you've driven, or the platform that your team now builds on top of.",
      hrName: "David Kim",
      hrRole: "VP Engineering",
      hrCompany: "scaleup",
    },
  },

  // ── PRODUCT & ANALYTICS TRACK ─────────────────────────────────────────────

  "Product Manager": {
    starter: {
      cvTitle: "Aspiring Product Manager",
      cvSummary: "Final-year Computer Science student with hands-on product experience through coursework and club leadership. Passionate about building user-centered solutions. Seeking first PM role in tech.",
      experienceChecklist: [
        "Replace 'Was responsible for' with a strong Action Verb (Led, Built, Drove)",
        "Name the specific project and add concrete scope/details",
        "Add an End Result — what actually happened? (award, users, feedback)",
      ],
      summaryChecklist: [
        "Replace 'I am a student' with your degree, university, and year",
        "Add specific experience context (internship, club projects, coursework)",
        "Close with a clear, specific career goal — what role are you seeking?",
      ],
      actionVerbs: ["Led", "Built", "Drove", "Launched", "Validated", "Designed", "Coordinated", "Presented"],
      keySkills: ["Product Discovery", "User Research", "Figma (Wireframing)", "Agile / Scrum", "Data Analysis (basic)", "Stakeholder Communication"],
      hrQuote: "No full-time experience? Completely fine. Club projects, internships, and coursework all count — if framed with ownership. 'I helped with the project' is weak. 'Led a team of 3 to build and launch an MVP' is strong.",
      hrName: "Sarah Thompson",
      hrRole: "HR Lead",
      hrCompany: "shopee",
    },
    developing: {
      cvTitle: "Product Manager",
      cvSummary: "Data-driven Product Manager with 2+ years building B2B SaaS products. Track record of increasing user retention by 23% through data-led roadmap decisions and cross-functional team leadership.",
      experienceChecklist: [
        "Replace 'Responsible for' with a strong Action Verb (Led, Spearheaded, Defined)",
        "Add cross-functional context: team size, function, and specific initiative",
        "Quantify the business impact with a specific metric (%)",
      ],
      summaryChecklist: [
        "Open with your domain + years of experience (not just 'PM with experience')",
        "Add your single strongest quantified achievement in the first sentence",
        "Explain HOW — your methodology and cross-functional approach",
      ],
      actionVerbs: ["Led", "Spearheaded", "Defined", "Shipped", "Prioritised", "Optimised", "Increased", "Reduced"],
      keySkills: ["Product Roadmap", "OKRs / KPIs", "A/B Testing", "SQL / Analytics", "Jira / Linear", "User Research", "Cross-functional Leadership"],
      hrQuote: "For mid-level roles, I don't want a list of daily tasks. I scan for data-driven results and business impact. Show me the numbers — percentages, dollar values, user counts. Give me a reason to forward your CV in the first 6 seconds.",
      hrName: "Marcus Lee",
      hrRole: "Tech Lead",
      hrCompany: "google",
    },
    ready: {
      cvTitle: "Senior Product Lead",
      cvSummary: "Strategic product leader with 6+ years scaling B2B SaaS from $2M to $18M ARR. Expert in driving cross-org alignment, building 0-to-1 products, and owning P&L for enterprise segments.",
      experienceChecklist: [
        "Upgrade to an executive-grade verb (Spearheaded, Championed, Orchestrated)",
        "Add strategic scope: 0-to-1, the initiative type, and target segment",
        "Lead with a business-level outcome (ARR, $M in revenue, % uplift)",
      ],
      summaryChecklist: [
        "Lead with a company-scale metric (ARR, growth range, user base scale)",
        "Add strategic depth: specialisation and capability signal",
        "Show 0-to-1 ownership and P&L responsibility to signal real seniority",
      ],
      actionVerbs: ["Spearheaded", "Championed", "Orchestrated", "Architected", "Drove", "Secured", "Scaled", "Defined"],
      keySkills: ["P&L Ownership", "0-to-1 Product", "Enterprise Roadmap", "Executive Alignment", "Cross-org Leadership", "Strategic Planning", "OKRs"],
      hrQuote: "At senior level, I'm not reading your CV — I'm scanning for company-scale impact. Tell me the ARR you influenced, the org you led, the strategic bets you made. If I can't see the business outcome in 6 seconds, it's a no.",
      hrName: "David Kim",
      hrRole: "VP Engineering",
      hrCompany: "scaleup",
    },
  },

  "Business Analyst": {
    starter: {
      cvTitle: "Aspiring Business Analyst",
      cvSummary: "Economics graduate with strong analytical foundations and internship experience supporting process documentation and data modelling at a consulting firm. Seeking first BA role bridging business and technology.",
      experienceChecklist: [
        "Replace vague descriptions with: Documented, Analysed, Mapped, or Identified [specific process or requirement]",
        "Add the tool you used: Confluence, Jira, Visio, Excel, SQL",
        "Add a stakeholder or outcome: delivered to X stakeholders, improved process clarity by Y",
      ],
      summaryChecklist: [
        "Name your degree and the analytical skills it gave you (economics, statistics, data modelling)",
        "Reference a specific internship or project involving requirements or process analysis",
        "State your target clearly: BA in tech, fintech, or consulting",
      ],
      actionVerbs: ["Documented", "Analysed", "Mapped", "Identified", "Supported", "Researched", "Reported", "Assisted"],
      keySkills: ["Requirements Gathering", "Process Mapping", "Excel / Sheets", "SQL (basic)", "Confluence / Notion", "Stakeholder Interviews", "User Stories"],
      hrQuote: "Junior BAs need to show they can translate between two worlds — business language and technical logic. Even if you haven't done it professionally, show me a project where you documented a process, wrote user stories, or structured requirements. That instinct is what I hire.",
      hrName: "Sarah Thompson",
      hrRole: "HR Lead",
      hrCompany: "shopee",
    },
    developing: {
      cvTitle: "Business Analyst",
      cvSummary: "Business Analyst with 3 years bridging product and engineering at a Series B SaaS company. Led end-to-end requirements for 4 major features, reducing development rework by 35% through structured discovery processes.",
      experienceChecklist: [
        "Use ownership verbs: Led, Defined, Facilitated, Owned the discovery or requirements for [project]",
        "Add the process artefact: BRD, user stories, process map, data flow diagram",
        "Quantify the downstream impact: reduced rework by X%, cut sprint carry-over by Y%",
      ],
      summaryChecklist: [
        "Lead with years + the bridge you create (product–engineering, business–tech)",
        "Add your strongest measurable contribution: reduced rework, faster delivery",
        "Name your specialisation: fintech, e-commerce, data pipelines, etc.",
      ],
      actionVerbs: ["Led", "Facilitated", "Defined", "Prioritised", "Modelled", "Streamlined", "Reduced", "Delivered"],
      keySkills: ["Business Requirements (BRD)", "User Stories / Acceptance Criteria", "SQL", "Jira / Confluence", "Process Re-engineering", "Data Modelling", "Workshop Facilitation"],
      hrQuote: "A mid-level BA who stands out shows proactive discovery skills — they don't just document what stakeholders say, they ask the right questions to surface what's missing. Show me where you prevented a bad requirement from reaching engineering.",
      hrName: "Marcus Lee",
      hrRole: "Tech Lead",
      hrCompany: "google",
    },
    ready: {
      cvTitle: "Senior Business Analyst / Lead BA",
      cvSummary: "Senior BA and programme delivery leader with 7+ years shaping digital transformation at enterprise scale. Defined BA practice standards adopted by 20+ analysts. Led discovery for a $15M ERP migration across 6 business units.",
      experienceChecklist: [
        "Show practice leadership: 'Defined the BA framework adopted across X projects or Y analysts'",
        "Add programme-level scope: ERP migration, digital transformation, multi-team initiative",
        "Lead with business value: cost saved, risk mitigated, executives aligned",
      ],
      summaryChecklist: [
        "Lead with enterprise scale: how large are the programmes you've led?",
        "Add practice leadership signal: have you defined standards or led a BA team?",
        "Quantify the business case: dollars saved, compliance risk reduced, transformation delivered",
      ],
      actionVerbs: ["Championed", "Defined", "Established", "Orchestrated", "Led", "Drove", "Governed", "Architected"],
      keySkills: ["BA Practice Leadership", "Enterprise Requirements", "Digital Transformation", "ERP / CRM Migration", "Stakeholder Management (C-level)", "Change Management", "SQL / Power BI"],
      hrQuote: "At senior BA level I want to see programme governance, not just project delivery. Have you defined standards for your team? Managed complex stakeholder matrices? Led discovery for a multi-million dollar initiative? That's the jump from good analyst to strategic partner.",
      hrName: "David Kim",
      hrRole: "VP Engineering",
      hrCompany: "scaleup",
    },
  },

  // ── AI APPLICATIONS TRACK ──────────────────────────────────────────────────

  "ML Engineer": {
    starter: {
      cvTitle: "Aspiring ML Engineer",
      cvSummary: "Computer Science graduate specialising in machine learning with hands-on experience building supervised learning models in Python. Completed 2 end-to-end ML projects from data collection to model deployment. Seeking first ML Engineering role.",
      experienceChecklist: [
        "Replace 'used machine learning' with: Built, Trained, Implemented a [model type] model for [task]",
        "Name the framework: scikit-learn, PyTorch, TensorFlow, Hugging Face Transformers",
        "Add the result: accuracy achieved (X%), F1 score, baseline improvement, or dataset size",
      ],
      summaryChecklist: [
        "Name your ML specialisation: NLP, computer vision, tabular data, recommendation systems",
        "List the frameworks you're comfortable with: PyTorch, TensorFlow, scikit-learn",
        "Add one tangible project: what did you build and what was the outcome?",
      ],
      actionVerbs: ["Built", "Trained", "Implemented", "Developed", "Evaluated", "Fine-tuned", "Deployed", "Experimented"],
      keySkills: ["Python", "scikit-learn / PyTorch", "Pandas / NumPy", "Model Evaluation", "Jupyter Notebooks", "SQL", "Git", "Statistics"],
      hrQuote: "For junior ML roles I want to see end-to-end project ownership — data collection, preprocessing, model selection, evaluation, and ideally deployment. Even a Kaggle notebook tells me more than a list of algorithms you've heard of.",
      hrName: "Sarah Thompson",
      hrRole: "HR Lead",
      hrCompany: "shopee",
    },
    developing: {
      cvTitle: "ML Engineer",
      cvSummary: "ML Engineer with 3 years designing and deploying production recommendation systems serving 2M+ daily users. Specialised in model serving infrastructure, feature pipelines, and continuous training frameworks.",
      experienceChecklist: [
        "Focus on productionisation: 'Deployed model to production serving X predictions/day'",
        "Add the MLOps layer: feature store, model registry, A/B testing in production, monitoring",
        "Quantify model impact: revenue attributable to model, CTR uplift, latency reduction",
      ],
      summaryChecklist: [
        "Lead with production scale: users served, predictions per day, model serving latency",
        "Show MLOps depth: feature pipelines, retraining schedules, model monitoring",
        "Name your domain: NLP, recommendation, computer vision, forecasting",
      ],
      actionVerbs: ["Deployed", "Designed", "Optimised", "Built", "Reduced", "Implemented", "Scaled", "Improved"],
      keySkills: ["PyTorch / TensorFlow", "MLflow / Weights & Biases", "Feature Engineering", "Model Serving (FastAPI, TorchServe)", "Airflow / Kubeflow", "A/B Testing", "SQL / Spark"],
      hrQuote: "I see many profiles listing impressive model accuracy numbers, but I want to know what happened after training. Did you deploy? How did you monitor drift? Did the model actually improve a business metric? Production ML is a very different discipline from research.",
      hrName: "Marcus Lee",
      hrRole: "Tech Lead",
      hrCompany: "google",
    },
    ready: {
      cvTitle: "Staff ML Engineer / ML Lead",
      cvSummary: "Staff ML Engineer with 7+ years leading ML platform development at scale. Architected the feature platform powering 15 production models across 3 product lines. Drove 2× improvement in model iteration speed company-wide.",
      experienceChecklist: [
        "Show platform ownership: 'Architected the ML platform adopted by N teams, reducing time-to-production by X'",
        "Add technical leadership: defined ML engineering standards, led hiring, mentored X engineers",
        "Lead with multiplier impact: how many teams or models does your work enable?",
      ],
      summaryChecklist: [
        "Lead with platform-level impact: how many teams or models does your infrastructure power?",
        "Add organisational multiplier: time-to-production improvement, team velocity, hiring impact",
        "Show technical authority: have you set ML engineering standards or led a research initiative?",
      ],
      actionVerbs: ["Architected", "Led", "Championed", "Defined", "Spearheaded", "Established", "Scaled", "Mentored"],
      keySkills: ["ML Platform Architecture", "Feature Store Design", "LLM / Foundation Models", "Distributed Training", "MLOps at Scale", "Technical Leadership", "Python / Go / C++"],
      hrQuote: "At staff level I expect you to be an ML platform multiplier, not just a model builder. Have you designed infrastructure that accelerates other teams? Have you solved a hard ML systems problem? Your impact should be measured by what other engineers can now do because of your work.",
      hrName: "David Kim",
      hrRole: "VP Engineering",
      hrCompany: "scaleup",
    },
  },

  "Data Scientist": {
    starter: {
      cvTitle: "Aspiring Data Scientist",
      cvSummary: "Statistics graduate with hands-on data analysis and modelling experience through academic research and personal projects. Proficient in Python and SQL, with Kaggle competition experience. Seeking first Data Scientist role.",
      experienceChecklist: [
        "Replace 'did data analysis' with: Analysed, Built, Designed a model or pipeline for [specific question]",
        "Name the technique: regression, clustering, time series, A/B test design, NLP",
        "Add the insight or outcome: identified X pattern, improved forecast accuracy by Y%",
      ],
      summaryChecklist: [
        "Name your analytical tools clearly: Python (pandas, sklearn), SQL, Tableau/Power BI",
        "Reference a project with a real question: 'Predicted churn for a dataset of X customers'",
        "State your target: DS in product analytics, growth, or research?",
      ],
      actionVerbs: ["Analysed", "Built", "Modelled", "Investigated", "Visualised", "Identified", "Predicted", "Cleaned"],
      keySkills: ["Python (pandas, sklearn)", "SQL", "Statistics / Probability", "Data Visualisation", "Regression / Classification", "Jupyter Notebooks", "Tableau / Power BI"],
      hrQuote: "The difference between a good and mediocre junior DS applicant is whether they ask the right question, not just run the right model. I want to see a project where you defined the business question, found the right data, chose the right method, and told a story with the result.",
      hrName: "Sarah Thompson",
      hrRole: "HR Lead",
      hrCompany: "shopee",
    },
    developing: {
      cvTitle: "Data Scientist",
      cvSummary: "Data Scientist with 3 years building and shipping predictive models in e-commerce. Developed churn prediction model that reduced voluntary churn by 18%, generating $1.2M in retained ARR. Specialised in experiment design and causal inference.",
      experienceChecklist: [
        "Lead with the business question your model answered, not just the technique",
        "Add the full cycle: data collection → feature engineering → model → evaluation → business impact",
        "Quantify the dollar or percentage impact of your model's deployment",
      ],
      summaryChecklist: [
        "Lead with your specialisation domain: marketing analytics, growth, risk, or product",
        "Include your strongest model impact: revenue, cost, or a business metric moved",
        "Add what sets you apart: causal inference, experiment design, NLP specialisation",
      ],
      actionVerbs: ["Built", "Designed", "Developed", "Deployed", "Reduced", "Identified", "Improved", "Collaborated"],
      keySkills: ["Python (sklearn, XGBoost, statsmodels)", "SQL / dbt", "A/B Testing & Causal Inference", "MLflow", "Tableau / Looker", "Feature Engineering", "Statistical Modelling"],
      hrQuote: "Mid-level data scientists who stand out connect their models to revenue. It's not enough to say 'built a churn model'. Tell me the churn rate before vs after, the revenue retained, or the cost saved. If you shipped a model and it actually ran in production, that's gold.",
      hrName: "Marcus Lee",
      hrRole: "Tech Lead",
      hrCompany: "google",
    },
    ready: {
      cvTitle: "Senior Data Scientist / DS Lead",
      cvSummary: "Senior Data Scientist and analytics leader with 6+ years driving data-informed strategy at scale. Led analytics function for a $50M revenue segment. Built DS team from 1 to 7. Pioneered company-wide experimentation framework.",
      experienceChecklist: [
        "Show analytics leadership: 'Defined the experimentation framework', 'Built the DS team from N to M'",
        "Add revenue or strategic impact: insights that drove $X in incremental revenue, pricing strategy, market expansion",
        "Include cross-functional scope: partnered with product, finance, marketing at exec level",
      ],
      summaryChecklist: [
        "Lead with the scale of business function you've supported (revenue, user base, org)",
        "Show team leadership: hired, mentored, or led a DS team",
        "Highlight strategic influence: have you shaped data culture or strategy at a company level?",
      ],
      actionVerbs: ["Led", "Pioneered", "Established", "Defined", "Championed", "Built", "Drove", "Orchestrated"],
      keySkills: ["Analytics Strategy", "Experimentation Frameworks", "DS Team Leadership", "Causal Inference", "SQL / Python / R", "Executive Communication", "Business Intelligence"],
      hrQuote: "Senior DS candidates show me they've moved from being the analyst to being the decision-influencer. I want to see: what strategic decision did your analysis shape? Did you build the measurement culture? Scale a team? Your CV should read like a business case, not a model spec sheet.",
      hrName: "David Kim",
      hrRole: "VP Engineering",
      hrCompany: "scaleup",
    },
  },

  // ── TECH-ENABLED BUSINESS TRACK ────────────────────────────────────────────

  "Business Development": {
    starter: {
      cvTitle: "Aspiring Business Development Associate",
      cvSummary: "Business Administration graduate with internship experience in B2B outreach and partnership coordination at a tech startup. Generated 15 qualified leads in a 3-month period. Seeking first BD role in tech.",
      experienceChecklist: [
        "Replace 'did sales support' with: Sourced, Prospected, Outreached, or Generated [specific activity]",
        "Add the outcome: X leads qualified, Y meetings booked, Z pipeline value created",
        "Name the industry or ICP (Ideal Customer Profile) you targeted",
      ],
      summaryChecklist: [
        "Name a tangible outcome from your internship: leads, pipeline, or meetings",
        "State the type of BD you want: SaaS, partnerships, enterprise, or growth",
        "Add what motivated you: why tech BD vs traditional sales?",
      ],
      actionVerbs: ["Sourced", "Prospected", "Generated", "Coordinated", "Supported", "Researched", "Outreached", "Qualified"],
      keySkills: ["CRM (HubSpot / Salesforce basic)", "Lead Generation", "Cold Outreach", "Market Research", "Stakeholder Communication", "Excel", "LinkedIn Sales Navigator"],
      hrQuote: "Junior BD candidates who stand out show they can find prospects and start conversations independently — not just shadow senior reps. Show me a moment where you identified an opportunity or opened a door that wasn't handed to you.",
      hrName: "Sarah Thompson",
      hrRole: "HR Lead",
      hrCompany: "shopee",
    },
    developing: {
      cvTitle: "Business Development Manager",
      cvSummary: "Business Development Manager with 3 years generating $2.3M in new ARR pipeline through enterprise outbound for B2B SaaS. Built and managed a partner channel delivering 30% of company revenue. Specialised in tech-enabled commercial partnerships.",
      experienceChecklist: [
        "Lead with closed revenue or pipeline value: 'Generated $X pipeline', 'Closed $Y in net new ARR'",
        "Add channel context: outbound, partnerships, channel sales, PLG, enterprise",
        "Name the deal size and sales cycle: closed X deals averaging $Y ARR with Z-month cycle",
      ],
      summaryChecklist: [
        "Lead with total pipeline or ARR generated — this is the #1 metric BD is measured on",
        "Add your BD specialisation: inbound, outbound, partnerships, channel",
        "Name your ICP: enterprise, SMB, fintech, healthcare, etc.",
      ],
      actionVerbs: ["Generated", "Closed", "Built", "Scaled", "Led", "Negotiated", "Drove", "Established"],
      keySkills: ["Enterprise Sales", "Pipeline Management", "CRM (Salesforce)", "Partner Programmes", "Contract Negotiation", "Cold Outreach", "Forecasting"],
      hrQuote: "For mid-level BD I want direct revenue attribution. Don't tell me you 'supported the sales team' — tell me the pipeline number you owned and how much you closed. Relationships matter, but in BD, numbers talk louder.",
      hrName: "Marcus Lee",
      hrRole: "Tech Lead",
      hrCompany: "google",
    },
    ready: {
      cvTitle: "VP Business Development / Head of BD",
      cvSummary: "Head of Business Development with 8+ years building revenue engines at growth-stage tech companies. Scaled BD function from 2 to 14 reps. Closed 3 strategic partnerships generating $12M in ARR. Led Series B revenue strategy.",
      experienceChecklist: [
        "Show function leadership: 'Built BD team from N to M', 'Defined the go-to-market motion'",
        "Add strategic deal context: partnership type, strategic value, board-level visibility",
        "Lead with total revenue impact: total ARR generated, partnerships closed, M&A supported",
      ],
      summaryChecklist: [
        "Lead with the scale of revenue or team you've built/led",
        "Show strategic vision: have you defined the go-to-market or partnership strategy?",
        "Add cross-functional credibility: have you worked at board/exec level on deals?",
      ],
      actionVerbs: ["Scaled", "Championed", "Defined", "Spearheaded", "Negotiated", "Closed", "Built", "Led"],
      keySkills: ["Revenue Strategy", "Executive Relationship Management", "M&A / Strategic Partnerships", "Team Building (14+ reps)", "Board-Level Communication", "CRM Analytics", "P&L Ownership"],
      hrQuote: "At VP BD level, I'm looking for someone who has built the commercial engine, not just run plays in it. Tell me: have you designed the BD motion, built the team, and taken a company through a revenue inflection? That's the profile I'm looking to hire.",
      hrName: "David Kim",
      hrRole: "VP Engineering",
      hrCompany: "scaleup",
    },
  },

  // ── Default fallback (if role not found) ────────────────────────────────────

  "__default__": {
    starter: {
      cvTitle: "Aspiring Tech Professional",
      cvSummary: "Recent graduate with project experience and a passion for technology. Seeking a first role in tech to contribute and grow.",
      experienceChecklist: [
        "Start bullets with a strong action verb: Led, Built, Designed, Implemented",
        "Add concrete context: team size, tool used, scope of work",
        "Include the outcome: award received, metric improved, stakeholder satisfied",
      ],
      summaryChecklist: [
        "State your degree, university, and graduation year",
        "Reference one relevant project or internship experience",
        "Close with a specific goal: what role and what type of company?",
      ],
      actionVerbs: ["Led", "Built", "Drove", "Launched", "Designed", "Coordinated", "Delivered", "Improved"],
      keySkills: ["Communication", "Problem Solving", "Project Management", "Data Analysis", "Microsoft Office / G-Suite", "Teamwork"],
      hrQuote: "Whatever your background, the strongest CVs show initiative, ownership, and outcomes. Even without formal experience, frame your projects, coursework, and activities to show what you built, what you led, and what changed because of your work.",
      hrName: "Sarah Thompson",
      hrRole: "HR Lead",
      hrCompany: "shopee",
    },
    developing: {
      cvTitle: "Tech Professional",
      cvSummary: "Tech professional with 2+ years of experience delivering measurable results. Specialised in cross-functional collaboration and data-driven decision making.",
      experienceChecklist: [
        "Replace passive descriptions with strong verbs: Led, Spearheaded, Defined, Optimised",
        "Add cross-functional context: who did you work with, how large was the impact?",
        "Quantify results: %, $, users, time saved, or a key business metric",
      ],
      summaryChecklist: [
        "Lead with years of experience + your domain specialisation",
        "Include your strongest quantified achievement",
        "Add your methodology or approach that makes you effective",
      ],
      actionVerbs: ["Led", "Spearheaded", "Defined", "Optimised", "Coordinated", "Delivered", "Improved", "Built"],
      keySkills: ["Project Management", "Cross-functional Collaboration", "Data Analysis", "Stakeholder Management", "Process Improvement"],
      hrQuote: "At mid-level, your CV should show impact, not just activity. I'm not looking for what you did day-to-day — I want to know what changed because of your work. Quantify your impact wherever possible.",
      hrName: "Marcus Lee",
      hrRole: "Tech Lead",
      hrCompany: "google",
    },
    ready: {
      cvTitle: "Senior Tech Leader",
      cvSummary: "Senior technology leader with 6+ years driving strategic initiatives at scale. Led cross-functional teams of 20+ people. Championed platform improvements generating measurable business impact.",
      experienceChecklist: [
        "Use executive verbs: Spearheaded, Championed, Orchestrated, Architected at org scale",
        "Show organisational impact: team size led, budget owned, company-wide adoption",
        "Lead with business outcome: ARR, cost savings, market expansion, or strategic initiative delivered",
      ],
      summaryChecklist: [
        "Lead with the scale of business or org you've influenced",
        "Add leadership multiplier: team size, budget, org-wide adoption",
        "Quantify strategic impact: revenue, cost, market share, or transformation scope",
      ],
      actionVerbs: ["Championed", "Spearheaded", "Orchestrated", "Architected", "Drove", "Defined", "Scaled", "Led"],
      keySkills: ["Strategic Leadership", "P&L Ownership", "Executive Communication", "Cross-org Alignment", "Change Management", "Team Building", "OKRs / KPIs"],
      hrQuote: "At senior level, I'm scanning for company-scale impact. Tell me the revenue you influenced, the organisation you shaped, or the strategy you defined. If I can't see your business footprint in 6 seconds, I move on.",
      hrName: "David Kim",
      hrRole: "VP Engineering",
      hrCompany: "scaleup",
    },
  },
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** Get role data, fall back to __default__ if role not found */
export function getRoleData(role: string | null): RoleData {
  if (!role) return ROLE_DATA["__default__"];
  return ROLE_DATA[role] ?? ROLE_DATA["__default__"];
}

/** Get data for a specific role + level */
export function getRoleLevelData(role: string | null, level: Level): RoleLevelData {
  return getRoleData(role)[level];
}
