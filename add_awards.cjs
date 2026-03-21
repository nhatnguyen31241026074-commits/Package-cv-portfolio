const fs = require('fs');

const filePath = './src/data/expandedCvData.ts';
let content = fs.readFileSync(filePath, 'utf8');

// Awards and activities data per role per level
const roleData = {
  "Frontend Engineer": {
    starter: {
      awards: [{ name: "Best UI Project", issuer: "HUST Tech Fair", date: "2024", description: "Awarded for the most polished and accessible campus webapp among 60 entries." }],
      activities: [{ organisation: "HUST Web Dev Club", role: "Frontend Lead", dates: "Sep 2023–Present", bullets: ["Ran bi-weekly React workshops for 40 members", "Mentored 5 juniors who shipped their first deployed projects"] }]
    },
    developing: {
      awards: [{ name: "Employee of the Quarter", issuer: "Tiki E-Commerce", date: "Q3 2023", description: "Recognized for LCP improvements that lifted conversion rate 8%." }],
      activities: [{ organisation: "VietJS Community", role: "Talk Speaker", dates: "2023–Present", bullets: ["Spoke at 2 meetups on React performance optimization to 150+ developers", "Co-organized monthly virtual sessions with 200+ RSVPs"] }]
    },
    ready: {
      awards: [{ name: "Tech Excellence Award", issuer: "VNG Corporation", date: "2022", description: "Recognized for leading the micro-frontend architecture serving 2M DAU." }],
      activities: [{ organisation: "React Vietnam Open Source", role: "Core Maintainer", dates: "Jan 2021–Present", bullets: ["Maintained libraries with 1.2k+ GitHub stars across 3 packages", "Reviewed 80+ community PRs and mentored 4 first-time OSS contributors"] }]
    }
  },
  "Backend Engineer": {
    starter: {
      awards: [{ name: "Best Capstone Project", issuer: "RMIT Vietnam", date: "2024", description: "Top-ranked backend capstone for real-time chat system handling 100 concurrent connections." }],
      activities: [{ organisation: "RMIT Backend Dev Society", role: "Treasurer & Technical Lead", dates: "Sep 2022–May 2024", bullets: ["Organized 4 API design hackathons attracting 80+ participants", "Led Node.js crash course onboarding 30 new members"] }]
    },
    developing: {
      awards: [{ name: "Performance Optimization Award", issuer: "MoMo FinTech", date: "2023", description: "Reduced p99 latency from 800ms to 95ms, recognized as the highest-impact technical win of the year." }],
      activities: [{ organisation: "Golang Vietnam Community", role: "Technical Blogger", dates: "2022–Present", bullets: ["Published 8 articles on Go concurrency patterns reaching 5k+ monthly readers", "Organized 2 Go meetups with 100+ developers each in Ho Chi Minh City"] }]
    },
    ready: {
      awards: [{ name: "Engineering Impact Award", issuer: "Sea Group", date: "2022", description: "Led order management re-architecture; scaled throughput 5× to 200k orders/day." }],
      activities: [{ organisation: "APAC Backend Engineering Forum", role: "Advisory Member", dates: "Jun 2021–Present", bullets: ["Spoke at 2 annual conferences on distributed systems to 400+ attendees", "Mentored 8 engineers through structured 3-month backend mentorship programme"] }]
    }
  },
  "Full Stack Dev": {
    starter: {
      awards: [{ name: "Startup Hackathon Runner-Up", issuer: "Da Nang Tech Fest", date: "2024", description: "Built a restaurant POS prototype end-to-end in 36 hours; awarded among 45 competing teams." }],
      activities: [{ organisation: "Da Nang Developers Collective", role: "Core Organizer", dates: "Sep 2023–Present", bullets: ["Organized monthly full-stack study sessions with 50+ participants", "Sourced speakers from Shopee and VNG for 3 panel discussions"] }]
    },
    developing: {
      awards: [{ name: "Open Source Spotlight", issuer: "GitHub Vietnam", date: "2023", description: "Form Builder project featured for 300+ GitHub stars and community engagement." }],
      activities: [{ organisation: "Base.vn Tech Talks", role: "Speaker & Organizer", dates: "Jan 2022–Present", bullets: ["Hosted 3 internal knowledge-sharing sessions on full-stack architecture for 60+ engineers", "Mentored 2 junior engineers; both received promotions within 12 months"] }]
    },
    ready: {
      awards: [{ name: "Cloud Cost Champion Award", issuer: "KiotViet", date: "2022", description: "Recognized for reducing annual AWS spend by $45k through serverless migration strategy." }],
      activities: [{ organisation: "Vietnam Full-Stack Guild", role: "Chapter Lead", dates: "Mar 2020–Present", bullets: ["Grew monthly meetup from 20 to 120+ active members over 3 years", "Facilitated 6 annual tech talks on scalable architecture and monorepo tooling"] }]
    }
  },
  "Mobile Dev": {
    starter: {
      awards: [{ name: "Best Mobile App", issuer: "HUST App Showcase", date: "2024", description: "Campus Event App earned the highest user-experience rating from a panel of 10 industry judges." }],
      activities: [{ organisation: "HUST Mobile Dev Club", role: "President", dates: "Sep 2022–May 2024", bullets: ["Led 30-member club building 5 campus apps; 3 published to app stores", "Ran React Native bootcamp training 15 students from zero to deployment"] }]
    },
    developing: {
      awards: [{ name: "Mobile Innovation Award", issuer: "VinID Super App", date: "Q2 2023", description: "Recognized for reducing cold start time from 2.8s to 1.5s and improving daily active sessions." }],
      activities: [{ organisation: "React Native Vietnam", role: "Core Contributor & Speaker", dates: "2022–Present", bullets: ["Spoke at 2 national mobile conferences on React Native performance to 300+ attendees", "Open-source library achieved 150 GitHub stars and 600 weekly downloads"] }]
    },
    ready: {
      awards: [{ name: "Vietnam Mobile Leader of the Year", issuer: "Tech In Asia Vietnam", date: "2022", description: "Selected among 200 nominees for scaling Zalo Stories feature to 2M MAU in 3 months." }],
      activities: [{ organisation: "Mobile Dev APAC Community", role: "Advisory Contributor", dates: "Jan 2020–Present", bullets: ["Mentored 6 junior mobile engineers across 3 startups; 4 now in senior roles", "Published 2 conference papers on cross-platform mobile architecture at MobCon Asia"] }]
    }
  },
  "DevOps": {
    starter: {
      awards: [{ name: "Best IaC Project", issuer: "Terraform Vietnam Challenge", date: "2024", description: "IaC Starter Kit recognized as the most practical open-source contribution among 40 submissions." }],
      activities: [{ organisation: "CloudTech Student Club", role: "Infrastructure Lead", dates: "Sep 2022–May 2024", bullets: ["Ran 4 Docker and Kubernetes workshops for 60+ IT students", "Set up a shared AWS Sandbox lab environment used by 20 club members"] }]
    },
    developing: {
      awards: [{ name: "Q4 Reliability Champion", issuer: "Finmo FinTech", date: "2023", description: "Maintained 99.97% uptime across 3 production EKS clusters in a high-growth environment." }],
      activities: [{ organisation: "DevOps Vietnam Community", role: "Community Lead", dates: "2022–Present", bullets: ["Moderated a 1.2k-member Slack community for DevOps practitioners", "Organized 3 Kubernetes Day Vietnam workshops attended by 200+ engineers"] }]
    },
    ready: {
      awards: [{ name: "APAC DevOps Excellence Award", issuer: "HashiConf APAC", date: "2023", description: "Recognized for chaos engineering programme uncovering 12 critical single-points-of-failure." }],
      activities: [{ organisation: "APAC SRE Council", role: "Advisory Board Member", dates: "Jun 2021–Present", bullets: ["Advise 5 regional engineering leaders on reliability and on-call strategy", "Keynote speaker at APAC DevOps Summit 2023 to 250 attendees on chaos engineering"] }]
    }
  },
  "Product Growth / Growth PM": {
    starter: {
      awards: [{ name: "Best Growth Insight", issuer: "University Marketing Competition", date: "2024", description: "Viral Loop Analysis model recognized for actionable K-factor insights among 80 competing student teams." }],
      activities: [{ organisation: "University Growth Hacking Club", role: "Research Lead", dates: "Sep 2022–May 2024", bullets: ["Led 20-member team running 5 simulated growth experiments per semester", "Presented growth findings to 3 faculty advisors; 2 insights incorporated into curriculum"] }]
    },
    developing: {
      awards: [{ name: "Growth PM of the Quarter", issuer: "FinTech App", date: "Q1 2024", description: "Recognized for lifting D1 retention from 32% to 39% and doubling viral coefficient to 1.4." }],
      activities: [{ organisation: "Vietnam Growth Collective", role: "Core Organizer", dates: "Jan 2022–Present", bullets: ["Organized 4 growth teardown sessions with 150+ practitioners per event", "Maintained a curated newsletter with 1.5k subscribers covering A/B testing and PLG trends"] }]
    },
    ready: {
      awards: [{ name: "PLG Innovator Award", issuer: "SaaScribe Vietnam", date: "2022", description: "Recognized for leading PLG transition that captured $5M self-serve pipeline in 12 months." }],
      activities: [{ organisation: "Product-Led Growth Alliance APAC", role: "Regional Ambassador", dates: "Aug 2019–Present", bullets: ["Represented Vietnam chapter at 2 global PLG summits with 500+ attendees each", "Mentored 4 Growth PMs who each secured roles at Series B+ funded companies"] }]
    }
  },
  "Business Analytics (BA)": {
    starter: {
      awards: [{ name: "Top 3 – University Case Competition", issuer: "FTU Consulting Club", date: "2024", description: "MarketLens financial model placed top 3 of 18 teams for analytical rigor and business recommendation quality." }],
      activities: [{ organisation: "FTU Finance & Analytics Club", role: "Research Analyst Lead", dates: "Sep 2022–May 2024", bullets: ["Produced monthly market reports distributed to 150 club members and 3 faculty advisors", "Mentored 8 junior analysts on SQL and Excel financial modeling"] }]
    },
    developing: {
      awards: [{ name: "Business Impact Award", issuer: "Retail Innovations VN", date: "2023", description: "Recognized for eliminating $50k/quarter in inventory write-offs through SQL reconciliation scripts." }],
      activities: [{ organisation: "Vietnam Business Analyst Network", role: "Event Co-Organizer", dates: "Jun 2022–Present", bullets: ["Co-organized 5 BA community meetups with 200+ combined attendees", "Led 2 workshops on BPMN process mapping and stakeholder communication"] }]
    },
    ready: {
      awards: [{ name: "Digital Transformation Leader", issuer: "Finance Technology Awards Vietnam", date: "2022", description: "Recognized for delivering a $3M core banking replacement on-time with zero compliance violations." }],
      activities: [{ organisation: "ACCA Vietnam Chapter", role: "Advisory Committee Member", dates: "Feb 2018–Present", bullets: ["Advised 8 early-career BAs on career paths in banking and enterprise technology", "Spoke at 2 ACCA annual conferences on BA practices in digital transformation"] }]
    }
  },
  "UI/UX / Product Design": {
    starter: {
      awards: [{ name: "UX Design Award", issuer: "Creative HCMC Competition", date: "2024", description: "NGO Donation Flow Redesign recognized for best WCAG compliance and user research methodology." }],
      activities: [{ organisation: "HCMC Design Students Alliance", role: "Portfolio Workshop Lead", dates: "Sep 2022–May 2024", bullets: ["Ran 3 Figma workshops for 50 design students from sketch to high-fidelity prototype", "Organized collaboration with 2 local NGOs providing real-world design briefs"] }]
    },
    developing: {
      awards: [{ name: "Best Product Design", issuer: "Vietnam Digital Awards", date: "2023", description: "Analytics dashboard design recognized for 15% daily engagement lift and industry-leading usability score." }],
      activities: [{ organisation: "UX Vietnam Community", role: "Mentor & Speaker", dates: "2022–Present", bullets: ["Mentored 6 junior designers through monthly 1:1 portfolio critiques", "Spoke at UXVN Conf 2023 on user research methodology to 300+ attendees"] }]
    },
    ready: {
      awards: [{ name: "App Store 'App of the Day'", issuer: "Apple App Store", date: "2022", description: "Led design of consumer mobile app receiving App Store editorial feature and 4.8/5 from 10k reviews." }],
      activities: [{ organisation: "Design Leadership Vietnam", role: "Board Member", dates: "Aug 2019–Present", bullets: ["Advised design teams at 3 early-stage startups on design system foundations and hiring", "Co-authored Vietnam's first UX career framework; shared with 2,000+ designers via LinkedIn"] }]
    }
  },
  "Sales Engineer": {
    starter: {
      awards: [{ name: "Best B2B GTM Strategy", issuer: "RMIT Business Case Finals", date: "2024", description: "12-month cybersecurity GTM plan awarded best overall strategy by an industry judge panel." }],
      activities: [{ organisation: "RMIT Entrepreneurship Club", role: "VP Sales & Partnerships", dates: "Sep 2022–May 2024", bullets: ["Built 5 industry partnerships supporting $15k in university event funding", "Coached 8 startup teams on B2B sales pitch delivery and objection handling"] }]
    },
    developing: {
      awards: [{ name: "President's Club – SDR", issuer: "Cloud Infrastructure Co", date: "2023", description: "Achieved 120% of annual booked-meeting quota, generating $1.2M qualified pipeline." }],
      activities: [{ organisation: "Vietnam SaaS Sales Network", role: "Community Builder", dates: "Jan 2022–Present", bullets: ["Founded a 400+ member LinkedIn group for SDRs and AEs in Vietnamese tech", "Organized monthly cold-call critique sessions with guest speakers from top SaaS companies"] }]
    },
    ready: {
      awards: [{ name: "President's Club", issuer: "Data Security Corp", date: "2023", description: "Recognized for 3 consecutive years at 140%+ quota and closing $2.5M new ARR." }],
      activities: [{ organisation: "APAC Enterprise Sales Forum", role: "Advisory Speaker", dates: "Mar 2018–Present", bullets: ["Keynote speaker at 2 annual sales leadership summits on multi-stakeholder enterprise deal strategy", "Mentored 3 junior AEs to their first 6-figure closes within 6 months of coaching"] }]
    }
  },
  "Solutions Architect": {
    starter: {
      awards: [{ name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", date: "2024", description: "Achieved certification while completing TA responsibilities and a 3-tier AWS university project." }],
      activities: [{ organisation: "Cloud Students Vietnam", role: "AWS Community Builder", dates: "Sep 2022–May 2024", bullets: ["Ran 3 AWS free-tier hands-on labs for 45 IT students", "Organized a cloud study group preparing 12 students for AWS Cloud Practitioner certification"] }]
    },
    developing: {
      awards: [{ name: "AWS Solutions Architect – Associate", issuer: "Amazon Web Services", date: "2023", description: "Achieved professional certification while managing 5 active enterprise client architecture engagements." }],
      activities: [{ organisation: "AWS User Group Vietnam", role: "Core Organizer", dates: "Jan 2022–Present", bullets: ["Organized 4 AWS community days with 300+ cumulative registrations", "Published 5 well-architected review guides downloaded 1,200+ times"] }]
    },
    ready: {
      awards: [{ name: "Google Cloud APAC Case Study", issuer: "Google Cloud", date: "2024", description: "AI-Ready Data Platform featured at Google Next 2024 as the APAC gold standard architecture." }],
      activities: [{ organisation: "Google Cloud Champions Program", role: "Regional Champion", dates: "Jun 2019–Present", bullets: ["Recognized as one of 20 APAC Regional Champions for cloud advocacy and customer success", "Mentored 3 junior architects now leading their own $1M+ cloud engagements"] }]
    }
  },
  "Partnerships Lead": {
    starter: {
      awards: [{ name: "Best Partnerships Initiative", issuer: "Vietnam National Tech Fair", date: "2024", description: "University Sponsorship Programme recognized for securing 5 corporate partners and $15k in event funding." }],
      activities: [{ organisation: "Student Entrepreneurship Network Vietnam", role: "Partnerships Chair", dates: "Sep 2022–May 2024", bullets: ["Secured 5 corporate sponsors generating $15k in annual event funding", "Facilitated 3 mentorship pairings between students and industry professionals"] }]
    },
    developing: {
      awards: [{ name: "Partnership Innovation Award", issuer: "Fintech Vietnam Association", date: "2023", description: "Recognized for growing partnership-influenced revenue from $0 to $800k in 18 months." }],
      activities: [{ organisation: "Vietnam Fintech Alliance", role: "Member & Working Group Lead", dates: "Jan 2022–Present", bullets: ["Led a 15-member working group defining integration standards for payment API partnerships", "Represented organization at 2 ASEAN fintech forums connecting 300+ ecosystem players"] }]
    },
    ready: {
      awards: [{ name: "Top 40 Under 40 – Business Development", issuer: "Việt Nam Business Review", date: "2022", description: "Recognized for growing partner network from 12 to 80 and driving 35% of total ARR via partner channel." }],
      activities: [{ organisation: "APAC Partnerships Leaders Forum", role: "Founding Member", dates: "Mar 2019–Present", bullets: ["Co-founded a 60-member CXO-level partnerships leadership community across 8 APAC markets", "Organized annual summit attracting 150 ecosystem leaders to discuss OEM and reseller strategy"] }]
    }
  },
  "Operations": {
    starter: {
      awards: [{ name: "Ops Excellence Award", issuer: "FTU Student Operations Club", date: "2024", description: "Supply Chain Cost Simulation ranked top project in Operations Management for actionable cost insights." }],
      activities: [{ organisation: "FTU Operations Management Club", role: "Events Lead", dates: "Sep 2022–May 2024", bullets: ["Organized 4 industry speaker sessions on supply chain and process optimization", "Managed event logistics for the annual Student Business Summit with 300+ attendees"] }]
    },
    developing: {
      awards: [{ name: "Process Improvement Champion", issuer: "RideHailing Startup", date: "2023", description: "Recognized for cutting driver onboarding SLA from 5 days to 2, eliminating 3 manual steps." }],
      activities: [{ organisation: "Lean Six Sigma Vietnam Chapter", role: "Green Belt Member", dates: "Jun 2022–Present", bullets: ["Contributed to 3 Lean process improvement workshops attended by 120+ operations professionals", "Led a Green Belt study group preparing 8 colleagues for Lean Six Sigma certification"] }]
    },
    ready: {
      awards: [{ name: "Ops Leader of the Year", issuer: "FinTech Scaleup Excellence Awards", date: "2022", description: "Recognized for scaling operations from 5 to 60 headcount and cutting processing errors 40% via Lean Six Sigma." }],
      activities: [{ organisation: "Vietnam Operations Leaders Network", role: "Advisory Board Member", dates: "Feb 2019–Present", bullets: ["Mentored 5 operations managers at Series A-B startups on building scalable ops functions", "Spoke at 2 operations excellence summits on ERP implementation and FinOps best practices"] }]
    }
  },
  "AI/ML Engineer": {
    starter: {
      awards: [{ name: "Top 15% – Vietnamese NLP Leaderboard", issuer: "AI Challenge Vietnam", date: "2024", description: "RAG chatbot ranked top 15% for answer accuracy among 200+ competing AI projects." }],
      activities: [{ organisation: "HUST AI Research Society", role: "Research Lead", dates: "Sep 2022–May 2024", bullets: ["Organized 6 paper-reading sessions on LLMs and retrieval-augmented generation for 40+ members", "Mentored 3 junior students through their first ML project submissions"] }]
    },
    developing: {
      awards: [{ name: "ML Engineering Excellence Award", issuer: "Smart Retail Analytics", date: "2023", description: "Recognized for reducing inference latency 40% and building automated retraining pipeline maintaining 2% accuracy variance." }],
      activities: [{ organisation: "MLOps Vietnam Community", role: "Core Contributor", dates: "2022–Present", bullets: ["Published 4 articles on production ML and model monitoring reaching 3k+ monthly readers", "Organized 3 hands-on MLflow and FastAPI workshops for 80+ ML practitioners"] }]
    },
    ready: {
      awards: [{ name: "AI Innovator of the Year", issuer: "Vietnam AI Summit", date: "2022", description: "Recognized for architecting ML platform serving 15 models at >99.9% availability and cutting cloud costs 35%." }],
      activities: [{ organisation: "AI Research Vietnam Guild", role: "Advisory Researcher", dates: "Mar 2019–Present", bullets: ["Peer-reviewed 10+ research papers on NLP and Vietnamese-language AI submitted to EMNLP and ACL", "Mentored 4 researchers who published their work at tier-1 AI conferences"] }]
    }
  },
  "AI Product Manager": {
    starter: {
      awards: [{ name: "2nd Place – AI Hackathon", issuer: "AI SaaS Startup Internal Hackathon", date: "2024", description: "Support Ticket Classifier ranked 2nd of 24 teams; live demo adopted by ops team for daily use." }],
      activities: [{ organisation: "PM School Vietnam", role: "AI Track Lead", dates: "Sep 2023–Present", bullets: ["Led curriculum design for an AI Product Management bootcamp with 30 participants", "Mentored 5 aspiring PMs on writing evals, PRDs, and AI product positioning"] }]
    },
    developing: {
      awards: [{ name: "Product Innovation Award", issuer: "B2B SaaS Co", date: "2023", description: "Recognized for launching AI writing assistant achieving 78% weekly active usage rate in Month 3." }],
      activities: [{ organisation: "AI Product Managers Vietnam", role: "Chapter Founder", dates: "Jan 2022–Present", bullets: ["Founded community now with 500+ members; organized 5 events on AI product management", "Published a guide on responsible AI roadmapping downloaded 1,800+ times on Notion"] }]
    },
    ready: {
      awards: [{ name: "Top AI PM of the Year", issuer: "SaaS Vietnam Excellence Awards", date: "2022", description: "Recognized for leading AI roadmap where AI features drove 40% of expansion revenue ($3M ARR)." }],
      activities: [{ organisation: "Global AI Product Leadership Forum", role: "Advisory Member", dates: "Apr 2019–Present", bullets: ["Spoke at 2 global AI product conferences on responsible AI productisation to 600+ attendees", "Mentored 4 AI PMs; 2 now lead AI product functions at Series C+ companies"] }]
    }
  },
  "Prompt Engineer": {
    starter: {
      awards: [{ name: "Best AI Tool", issuer: "Vietnam Prompt Engineering Challenge", date: "2024", description: "Prompt Library recognised for quality and breadth of 80+ reusable templates with 200 GitHub stars." }],
      activities: [{ organisation: "AI Builders Club Vietnam", role: "Prompt Engineering Lead", dates: "Sep 2023–Present", bullets: ["Organized 4 practical workshops on prompt patterns and LLM evaluation for 60+ members", "Maintained a shared prompt library used as a learning resource by the entire club"] }]
    },
    developing: {
      awards: [{ name: "AI Impact Award", issuer: "AI Media Platform", date: "2023", description: "Recognized for improving AI content quality 35% and reducing hallucination rate from 15% to 4%." }],
      activities: [{ organisation: "LangChain Vietnam User Group", role: "Core Organizer", dates: "Jan 2022–Present", bullets: ["Organized 4 hands-on LangChain workshops with 120+ cumulative attendees", "Published 6 tutorials on RAG architecture and prompt versioning with 4k+ combined readers"] }]
    },
    ready: {
      awards: [{ name: "AI Engineering Excellence Award", issuer: "Enterprise AI Vietnam Summit", date: "2022", description: "Recognized for RAG system processing 1M documents/day at 95% accuracy and reducing LLM spend 45%." }],
      activities: [{ organisation: "APAC Prompt & AI Systems Forum", role: "Founding Member", dates: "Mar 2019–Present", bullets: ["Co-authored an industry white paper on enterprise RAG architecture downloaded 2,500+ times", "Advisor to 3 AI startups on prompt systems and LLM cost optimization strategy"] }]
    }
  },
  "Data Scientist": {
    starter: {
      awards: [{ name: "Top 15% – Kaggle Competition", issuer: "Kaggle", date: "2024", description: "Customer Churn Prediction model ranked top 15% globally; insights turned into 5 business recommendations presented to executives." }],
      activities: [{ organisation: "Statistics & Data Science Society", role: "Analyst Lead", dates: "Sep 2022–May 2024", bullets: ["Published monthly data analysis reports on campus trends distributed to 200+ students", "Organized 3 Python and Tableau skill-building workshops for 60 attendees"] }]
    },
    developing: {
      awards: [{ name: "Data Science Award", issuer: "Tech Product Co", date: "2023", description: "Recognized for building A/B test framework lifting conversion 8% and improving blended ROAS 22%." }],
      activities: [{ organisation: "Vietnam Data Science Community", role: "Content Lead", dates: "2022–Present", bullets: ["Published 5 tutorial articles on AB testing and attribution modeling reaching 6k+ monthly readers", "Organized a monthly 'Data Science Office Hours' session with 80+ members per event"] }]
    },
    ready: {
      awards: [{ name: "Data Leadership Award", issuer: "Vietnam FinTech Awards", date: "2022", description: "Recognized for designing ML credit-scoring model reducing defaults 12% and saving $4M in risk exposure." }],
      activities: [{ organisation: "Data Science Vietnam – Advisory Board", role: "Board Member", dates: "Mar 2018–Present", bullets: ["Advised on data literacy curriculum reaching 5,000+ data professionals through online courses", "Keynote speaker at Data Conference Vietnam 2023 on responsible ML in financial services"] }]
    }
  }
};

// Helper to generate the awards/activities JSON string for insertion
function genAwardsActivities(awards, activities) {
  const awardsStr = JSON.stringify(awards, null, 6)
    .replace(/^/gm, '      ')
    .trim();
  const activitiesStr = JSON.stringify(activities, null, 6)
    .replace(/^/gm, '      ')
    .trim();
  return `,\r\n      "awards": ${awardsStr},\r\n      "activities": ${activitiesStr}`;
}

// For each role, find the closing of each level's projects array and insert after it
// We'll match the pattern: last project bullet, then "]", then "}", then level-closing pattern

for (const [roleName, levels] of Object.entries(roleData)) {
  for (const [levelName, data] of Object.entries(levels)) {
    const { awards, activities } = data;
    
    // Build the insertion string
    const insertion = genAwardsActivities(awards, activities);
    
    // We need to find the right insertion point for this role+level
    // Pattern: find the role section, then the level section, then find the closing of projects
    // Since projects is always last, we look for the last "]" before the level-closing "}"
    
    // This is complex, so let's use a targeted approach:
    // Find the role name quoted, then the level quoted, then find the projects closing
    const roleMarker = `"${roleName}"`;
    const levelMarker = `"${levelName}"`;
    
    const roleStart = content.indexOf(roleMarker);
    if (roleStart === -1) {
      console.log(`Role not found: ${roleName}`);
      continue;
    }
    
    const levelStart = content.indexOf(levelMarker, roleStart);
    if (levelStart === -1) {
      console.log(`Level not found: ${levelName} for ${roleName}`);
      continue;
    }
    
    // Check if awards already exist for this level
    const nextLevelOrRoleEnd = (() => {
      // Find the next level or role end after levelStart
      const nextStarter = content.indexOf('"starter"', levelStart + 1);
      const nextDeveloping = content.indexOf('"developing"', levelStart + 1);
      const nextReady = content.indexOf('"ready"', levelStart + 1);
      const candidates = [nextStarter, nextDeveloping, nextReady].filter(x => x > levelStart);
      return candidates.length > 0 ? Math.min(...candidates) : content.length;
    })();
    
    const levelSlice = content.substring(levelStart, nextLevelOrRoleEnd);
    
    // Check if awards already present
    if (levelSlice.includes('"awards"')) {
      console.log(`Awards already exist for ${roleName} / ${levelName}, skipping`);
      continue;
    }
    
    // Find the closing bracket of "projects" array within this level slice
    // It's the last "]" before the first "}" that closes the level object
    // We look for: ]\n      }\n    (and possibly more nesting)
    // Better: find "projects": [...] end within levelSlice
    
    const projStart = levelSlice.indexOf('"projects"');
    if (projStart === -1) {
      console.log(`Projects not found for ${roleName} / ${levelName}`);
      continue;
    }
    
    // Find the closing ] of projects array - need to count brackets
    let depth = 0;
    let inProjects = false;
    let projArrStart = -1;
    let projArrEnd = -1;
    
    for (let i = projStart; i < levelSlice.length; i++) {
      const ch = levelSlice[i];
      if (ch === '[' && !inProjects) {
        inProjects = true;
        projArrStart = i;
        depth = 1;
      } else if (inProjects && ch === '[') {
        depth++;
      } else if (inProjects && ch === ']') {
        depth--;
        if (depth === 0) {
          projArrEnd = i;
          break;
        }
      }
    }
    
    if (projArrEnd === -1) {
      console.log(`Could not find projects array end for ${roleName} / ${levelName}`);
      continue;
    }
    
    // The absolute position in content
    const absoluteProjEnd = levelStart + projArrEnd;
    
    // Insert after the closing ]
    content = content.substring(0, absoluteProjEnd + 1) + insertion + content.substring(absoluteProjEnd + 1);
    
    console.log(`Added awards/activities for ${roleName} / ${levelName}`);
  }
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Done! expandedCvData.ts updated.');
