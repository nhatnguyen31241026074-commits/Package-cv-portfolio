import json

templates = {
  "Software Engineering (SWE)": {
    "starter": {
      "name": "Minh Anh Nguyen",
      "title": "Software Engineer Intern",
      "email": "minhanh.dev@gmail.com",
      "location": "Hanoi, Vietnam",
      "linkedin": "linkedin.com/in/minhanh-swe",
      "summary": "Computer Science senior at HUST with strong foundations in data structures, algorithms, and full-stack web development. Built 4 end-to-end projects using React and Node.js. Seeking first SWE internship to contribute to production codebases.",
      "experience": [
        {
          "company": "FPT Software",
          "role": "Frontend Intern",
          "dates": "May – Aug 2024",
          "bullets": [
            "Developed 4 responsive React components for an enterprise logistics portal serving 200+ daily active users, improving load time by 30%.",
            "Fixed 12 cross-browser CSS bugs identified in QA, reducing reported UI issues by 40%.",
            "Wrote Jest unit tests for critical components, increasing test coverage from 20% to 55%."
          ]
        },
        {
          "company": "HUST Tech Club",
          "role": "Lead Developer",
          "dates": "Sep 2023 – Apr 2024",
          "bullets": [
            "Built a campus event booking platform with Next.js + Supabase, onboarding 300+ student users in the first month.",
            "Led a 4-person engineering team; merged 28 pull requests across 3 semesters.",
            "Integrated Stripe API for event ticketing, processing 50+ real transactions in beta."
          ]
        }
      ],
      "projects": [
        {
          "name": "AI Study Planner",
          "type": "Personal · React + Node.js + OpenAI",
          "bullets": [
            "Built a GPT-4-powered scheduler that auto-generates weekly study plans from uploaded course syllabi.",
            "Deployed on Vercel; acquired 80+ organic users from university forums within 2 weeks of launch."
          ]
        }
      ]
    },
    "developing": {
      "name": "Minh Anh Nguyen",
      "title": "Junior Software Engineer",
      "email": "minhanh.dev@gmail.com",
      "location": "Ho Chi Minh City, Vietnam",
      "linkedin": "linkedin.com/in/minhanh-swe",
      "summary": "Backend engineer with 1.5 years building production microservices in TypeScript and AWS. Improved API p95 latency by 66% at current startup. Passionate about clean architecture, observability, and automated testing.",
      "experience": [
        {
          "company": "Teko Vietnam",
          "role": "Junior Backend Engineer",
          "dates": "Jan 2023 – Present",
          "bullets": [
            "Migrated 3 Express.js REST services to serverless AWS Lambda, slashing infrastructure costs by 18%.",
            "Optimized PostgreSQL query plans for the checkout service, reducing p95 latency from 320ms to 95ms.",
            "Built a GitHub Actions CI pipeline that cut average PR merge time from 2 days to 4 hours."
          ]
        },
        {
          "company": "Freelance",
          "role": "Full-Stack Developer",
          "dates": "Mar – Dec 2022",
          "bullets": [
            "Delivered 3 e-commerce sites for local SMEs using Next.js + Shopify, each launching on 4-week timelines.",
            "Integrated VNPAY payment gateway and wrote end-to-end Cypress tests, achieving zero payment errors at launch."
          ]
        }
      ],
      "projects": [
        {
          "name": "Open-Source Rate Limiter",
          "type": "npm Package · TypeScript + Redis",
          "bullets": [
            "Published a Redis-backed rate-limiter with 200+ weekly downloads; actively maintain issues and merge community PRs.",
            "Implemented sliding window algorithm and distributed lock pattern for multi-instance safety."
          ]
        }
      ]
    },
    "ready": {
      "name": "Minh Anh Nguyen",
      "title": "Software Engineer",
      "email": "minhanh.dev@gmail.com",
      "location": "Ho Chi Minh City, Vietnam",
      "linkedin": "linkedin.com/in/minhanh-swe",
      "summary": "Software Engineer with 4 years delivering scalable distributed systems. Led a monolith-to-microservices migration enabling 5× traffic scale. Seeking a senior IC or tech-lead role where I can shape architecture and grow junior engineers.",
      "experience": [
        {
          "company": "VNG Corporation",
          "role": "Software Engineer",
          "dates": "Feb 2022 – Present",
          "bullets": [
            "Spearheaded the notification monolith split into 4 independent Go microservices, scaling throughput to 50k events/sec.",
            "Mentored 3 junior engineers through weekly code reviews, reducing production bug rate by 30%.",
            "Defined team-wide API design standards adopted by 2 product squads."
          ]
        },
        {
          "company": "Teko Vietnam",
          "role": "Junior Software Engineer",
          "dates": "Aug 2020 – Jan 2022",
          "bullets": [
            "Built and shipped 5 core checkout features used by 2M+ monthly active users.",
            "Drove test coverage from 30% to 75% through dedicated refactoring sprints during a 6-week tech debt push."
          ]
        }
      ],
      "projects": [
        {
          "name": "Dev Toolchain CLI",
          "type": "Internal Tool · Go",
          "bullets": [
            "Built a Go CLI used by 25 engineers to spin up local dev environments in under 2 minutes.",
            "Reduced new-engineer onboarding time from 3 days to half a day."
          ]
        }
      ]
    }
  },

  "Cloud Engineering / DevOps": {
    "starter": {
      "name": "Hai Vu",
      "title": "DevOps Engineer Intern",
      "email": "hai.devops@gmail.com",
      "location": "Vietnam",
      "linkedin": "linkedin.com/in/hai-devops",
      "summary": "IT student with hands-on Linux administration, Docker, and CI/CD pipeline experience. Passionate about automating infrastructure and bridging the gap between development and operations.",
      "experience": [
        {
          "company": "CloudTech Solutions",
          "role": "DevOps Intern",
          "dates": "Jun – Sep 2024",
          "bullets": [
            "Containerized 5 legacy apps using Docker, standardizing local dev environments across the entire engineering team.",
            "Built GitLab CI/CD pipelines reducing average deployment time from 45 to 12 minutes.",
            "Monitored AWS infrastructure via Datadog, proactively resolved 3 high-severity alerts before they impacted users."
          ]
        }
      ],
      "projects": [
        {
          "name": "Automated Terraform Provisioner",
          "type": "Personal Project · AWS + Terraform",
          "bullets": [
            "Created Terraform modules to provision secure VPCs, EC2 clusters, and RDS in one command.",
            "Integrated GitOps workflow with GitHub Actions for IaC linting and plan previews on every PR."
          ]
        }
      ]
    },
    "developing": {
      "name": "Hai Vu",
      "title": "DevOps / Platform Engineer",
      "email": "hai.devops@gmail.com",
      "location": "Vietnam",
      "linkedin": "linkedin.com/in/hai-devops",
      "summary": "DevOps engineer with 1.5 years managing cloud infrastructure on AWS and GCP. Expert in Kubernetes, Terraform, and observability stacks. Reduced deployment errors by 90% and improved MTTR by 30% at current role.",
      "experience": [
        {
          "company": "Fintech Innovators",
          "role": "DevOps Engineer",
          "dates": "Jan 2023 – Present",
          "bullets": [
            "Managed 3 EKS clusters supporting production workloads at 10,000 RPM, maintaining 99.97% uptime.",
            "Implemented full IaC using Terraform across all environments, eliminating manual provisioning errors.",
            "Set up an ELK stack for centralized logging, reducing MTTR for critical bugs by 30%."
          ]
        }
      ],
      "projects": [
        {
          "name": "Zero-Downtime Deployment Pipeline",
          "type": "Internal Framework · ArgoCD + Helm",
          "bullets": [
            "Architected a blue-green deployment strategy, ensuring zero customer-facing downtime across 20+ monthly releases.",
            "Implemented automated rollback triggers linked to Datadog anomaly alerts."
          ]
        }
      ]
    },
    "ready": {
      "name": "Hai Vu",
      "title": "Senior Cloud / Infrastructure Engineer",
      "email": "hai.devops@gmail.com",
      "location": "Vietnam",
      "linkedin": "linkedin.com/in/hai-devops",
      "summary": "Senior infrastructure engineer with 5+ years designing resilient multi-region cloud architectures. Specialise in AWS, SRE practices, and platform engineering. Proven ability to lead cost optimisation and chaos engineering programmes.",
      "experience": [
        {
          "company": "Global E-Commerce Platform",
          "role": "Lead Cloud Infrastructure Engineer",
          "dates": "Jan 2019 – Present",
          "bullets": [
            "Designed a multi-region active-active AWS architecture achieving 99.999% uptime for payment processing.",
            "Led SRE pod of 4; defined SLOs/SLIs, incident runbooks, and on-call rotations.",
            "Reduced annual AWS compute spend by $120k through right-sizing and Spot instance migration."
          ]
        }
      ],
      "projects": [
        {
          "name": "Chaos Engineering Programme",
          "type": "Reliability Initiative · Gremlin + AWS",
          "bullets": [
            "Ran systematic failure injection experiments, uncovering and resolving 12 critical single-points-of-failure.",
            "Presented resiliency improvements at the APAC DevOps Summit 2023 to 200+ practitioners."
          ]
        }
      ]
    }
  },

  "Product Management (PM)": {
    "starter": {
      "name": "Sam Vu",
      "title": "Product Management Intern",
      "email": "sam.pm@gmail.com",
      "location": "Vietnam",
      "linkedin": "linkedin.com/in/sam-pm",
      "summary": "Business & CS double major with a strong analytical mindset. Skilled at synthesizing user research, writing PRDs, and partnering with engineering to ship features users love.",
      "experience": [
        {
          "company": "Consumer App Co",
          "role": "Product Intern",
          "dates": "May – Aug 2024",
          "bullets": [
            "Conducted 25 user interviews to surface UX friction; insights drove a home-feed redesign that lifted session time by 12%.",
            "Authored PRDs and user stories for 3 feature releases; collaborated with 4 engineers through sprint cycles.",
            "Analysed funnel drop-offs via Mixpanel, surfacing a checkout bug that, once fixed, recovered 8% of abandoned purchases."
          ]
        }
      ],
      "projects": [
        {
          "name": "Campus Event Organiser App",
          "type": "Student Project · Figma → React Native prototype",
          "bullets": [
            "Led a 4-person crew (2 devs, 1 designer) from 0→1; app acquired 500+ users in Week 1.",
            "Used RICE scoring to cut backlog from 40 to 8 must-have features, delivering on a 6-week deadline."
          ]
        }
      ]
    },
    "developing": {
      "name": "Sam Vu",
      "title": "Associate Product Manager",
      "email": "sam.pm@gmail.com",
      "location": "Vietnam",
      "linkedin": "linkedin.com/in/sam-pm",
      "summary": "Data-driven APM with 1.5 years owning the Activity Tracking vertical for a health-tech mobile app. Increased DAU 18% through gamification and shipped 5 A/B tests per quarter. Comfortable spanning strategy, design, and data.",
      "experience": [
        {
          "company": "HealthTech Daily",
          "role": "Associate Product Manager",
          "dates": "Jan 2023 – Present",
          "bullets": [
            "Owned the 'Activity Tracking' squad; shipped a streak-based gamification system that grew DAU by 18%.",
            "Managed a cross-functional team of 6 engineers + 1 designer; improved sprint velocity by 20% via clearer acceptance criteria.",
            "Ran 5 A/B tests per quarter, yielding a 10% lift in trial-to-paid conversion."
          ]
        }
      ],
      "projects": [
        {
          "name": "Competitive Intelligence Framework",
          "type": "Strategic Tool",
          "bullets": [
            "Designed a reusable template adopted across the product org for tracking competitor feature launches.",
            "Presented quarterly market-shift reports directly to the VP of Product."
          ]
        }
      ]
    },
    "ready": {
      "name": "Sam Vu",
      "title": "Senior Product Manager",
      "email": "sam.pm@gmail.com",
      "location": "Vietnam",
      "linkedin": "linkedin.com/in/sam-pm",
      "summary": "Strategic PM with 5+ years launching B2B SaaS from 0→1. Expert in roadmap definition, enterprise stakeholder management, and scaling product teams. Generated $2M ARR from a new analytics module in the first 6 months of launch.",
      "experience": [
        {
          "company": "SaaS Enterprise",
          "role": "Senior Product Manager",
          "dates": "Mar 2020 – Present",
          "bullets": [
            "Led a 15-person tribe to launch the flagship analytics module, generating $2M ARR within 6 months.",
            "Defined the 18-month product roadmap approved by the CEO and Board.",
            "Mentored 2 APMs; established a structured OKR + discovery process across the product org."
          ]
        }
      ],
      "projects": [
        {
          "name": "Enterprise GTM Launch",
          "type": "Cross-Functional Initiative",
          "bullets": [
            "Co-led product marketing, sales enablement, and support readiness for a major platform overhaul.",
            "Achieved 85% adoption among existing enterprise customers within Q1 post-launch."
          ]
        }
      ]
    }
  },

  "Product Growth / Growth PM": {
    "starter": {
      "name": "Taylor Le",
      "title": "Growth Intern",
      "email": "taylor.growth@gmail.com",
      "location": "Vietnam",
      "linkedin": "linkedin.com/in/taylor-growth",
      "summary": "Growth-obsessed student with demonstrated skills in web analytics, A/B testing methodology, and SQL for funnel analysis. Eager to turn data into acquisition and retention wins.",
      "experience": [
        {
          "company": "E-Commerce Startup",
          "role": "Growth Marketing Intern",
          "dates": "Jun – Sep 2024",
          "bullets": [
            "Instrumented the checkout funnel in GA4, finding a 20% drop-off at payment selection that led to a UX fix.",
            "Ran 3 email A/B tests that improved click-through rates by 15% and generated $8k in incremental revenue.",
            "Proposed a referral loop mechanic; PM incorporated variant into the next sprint."
          ]
        }
      ],
      "projects": [
        {
          "name": "Viral Loop Case Study",
          "type": "Academic Analysis · Figma + Tableau",
          "bullets": [
            "Modelled referral mechanics for consumer apps; proposed changes that could increase K-factor by 0.2.",
            "Built Tableau dashboards visualising projected LTV/CAC impact for the proposed referral redesign."
          ]
        }
      ]
    },
    "developing": {
      "name": "Taylor Le",
      "title": "Growth Product Manager",
      "email": "taylor.growth@gmail.com",
      "location": "Vietnam",
      "linkedin": "linkedin.com/in/taylor-growth",
      "summary": "Growth PM with 2 years leading cross-functional squads and running 20+ A/B tests. Improved D1 retention 22% and cut CAC by 15% at a FinTech app. Expert in activation, engagement loops, and referral mechanics.",
      "experience": [
        {
          "company": "FinTech App",
          "role": "Growth PM",
          "dates": "Feb 2023 – Present",
          "bullets": [
            "Redesigned onboarding flow through 8 sequential A/B tests, lifting D1 retention from 32% to 39%.",
            "Rebuilt the referral program mechanics, reducing CAC by 15% and driving a 2× viral coefficient.",
            "Wrote SQL queries to cluster users by LTV; informed a pricing tier redesign that boosted ARPU by 12%."
          ]
        }
      ],
      "projects": [
        {
          "name": "Growth Experimentation Framework",
          "type": "Internal Tooling",
          "bullets": [
            "Standardised hypothesis templates and experiment tracking across the product org.",
            "Increased experiment throughput from 3 to 7 tests per month, compounding learning velocity."
          ]
        }
      ]
    },
    "ready": {
      "name": "Taylor Le",
      "title": "Lead Growth Product Manager",
      "email": "taylor.growth@gmail.com",
      "location": "Vietnam",
      "linkedin": "linkedin.com/in/taylor-growth",
      "summary": "Data-first Lead Growth PM with 5+ years scaling user bases and monetisation loops. Led PLG transition that captured $5M in self-serve pipeline. Expert in pricing, activation, and building growth flywheels at scale.",
      "experience": [
        {
          "company": "SaaS Unicorn",
          "role": "Lead Growth PM",
          "dates": "Aug 2019 – Present",
          "bullets": [
            "Led pricing-tier restructure that delivered a 25% lift in ACV within 3 months of launch.",
            "Managed a cross-functional pod of 8 running 15+ concurrent growth experiments.",
            "Established the 'Growth Council' aligning C-suite, Sales, and Product on growth thesis and priorities."
          ]
        }
      ],
      "projects": [
        {
          "name": "Product-Led Growth Transition",
          "type": "Strategic Initiative",
          "bullets": [
            "Architected the PLG model including freemium tiers, in-app expansion triggers, and self-serve checkout.",
            "Captured $5M in new pipeline revenue within 12 months; reduced sales-assisted close rate by 40%."
          ]
        }
      ]
    }
  },

  "Business Analytics (BA)": {
    "starter": {
      "name": "Jordan Do",
      "title": "Business Analyst Intern",
      "email": "jordan.ba@gmail.com",
      "location": "Vietnam",
      "linkedin": "linkedin.com/in/jordan-ba",
      "summary": "Process-minded student with strong SQL and Excel skills. Adept at extracting business insights from raw datasets and presenting recommendations to non-technical stakeholders.",
      "experience": [
        {
          "company": "National Logistics Corp",
          "role": "Data Analyst Intern",
          "dates": "May – Aug 2024",
          "bullets": [
            "Created 5 Tableau dashboards tracking fleet efficiency, saving regional managers 10 hours per week in manual reporting.",
            "Extracted and cleaned 1M+ delivery records via SQL to power a supply chain audit.",
            "Presented rerouting recommendations that influenced strategy in 3 cities, cutting delivery delays by 8%."
          ]
        }
      ],
      "projects": [
        {
          "name": "Market Entry Analysis",
          "type": "University Consulting Project",
          "bullets": [
            "Modelled a 5-year financial forecast for an ed-tech firm entering Southeast Asia.",
            "Built competitor pricing heatmaps and market share analysis presented to real client executives."
          ]
        }
      ]
    },
    "developing": {
      "name": "Jordan Do",
      "title": "Business Analyst",
      "email": "jordan.ba@gmail.com",
      "location": "Vietnam",
      "linkedin": "linkedin.com/in/jordan-ba",
      "summary": "Business Analyst with 2 years bridging technical teams and business stakeholders. Expert at requirement gathering, BPMN process modelling, and advanced SQL analytics. Reduced operational errors 15% at current retail tech role.",
      "experience": [
        {
          "company": "Retail Innovations VN",
          "role": "Business Analyst",
          "dates": "Mar 2023 – Present",
          "bullets": [
            "Interviewed stakeholders across 4 departments to author 40+ user stories for a CRM integration serving 500+ sales agents.",
            "Mapped as-is BPMN workflows, identifying bottlenecks that caused 15% operational inefficiency; redesigned 3 core processes.",
            "Resolved data discrepancies between the storefront and inventory systems, eliminating $50k in quarterly stock write-offs."
          ]
        }
      ],
      "projects": [
        {
          "name": "Automated KPI Reporting",
          "type": "Power BI + Python",
          "bullets": [
            "Replaced 12 weekly Excel reports with a dynamic Power BI dashboard, moving from 7-day lag to real-time insights.",
            "Built an Airflow pipeline to automate data ingestion from 4 source systems."
          ]
        }
      ]
    },
    "ready": {
      "name": "Jordan Do",
      "title": "Senior Business / Systems Analyst",
      "email": "jordan.ba@gmail.com",
      "location": "Vietnam",
      "linkedin": "linkedin.com/in/jordan-ba",
      "summary": "Senior BA with 6 years leading enterprise digital transformations. Expert at managing C-level stakeholders, aligning IT road maps with business strategy, and directing large-scale data migrations. On-time delivery of a $3M core banking replacement.",
      "experience": [
        {
          "company": "Global Financial Services",
          "role": "Senior Systems Analyst",
          "dates": "Feb 2018 – Present",
          "bullets": [
            "Led requirements, design, and UAT phases of a $3M core banking replacement—on time, zero compliance violations.",
            "Facilitated JAD sessions with 25+ cross-functional executives to align on scope and acceptance criteria.",
            "Mentored 3 junior analysts in SQL best practices and entity-relationship data modelling."
          ]
        }
      ],
      "projects": [
        {
          "name": "Regulatory Compliance Audit System",
          "type": "Enterprise Architecture",
          "bullets": [
            "Mapped complex regulatory requirements into tech specs for the risk management subsystem.",
            "Zero compliance violations in the first operational year post-launch."
          ]
        }
      ]
    }
  },

  "UI/UX / Product Design": {
    "starter": {
      "name": "Morgan Bui",
      "title": "UI/UX Design Intern",
      "email": "morgan.ux@gmail.com",
      "location": "Vietnam",
      "linkedin": "linkedin.com/in/morgan-ux",
      "summary": "Creative design student with a portfolio of 4 case studies demonstrating human-centred research, wireframing, and high-fidelity prototyping in Figma. Passionate about accessible, visually delightful interfaces.",
      "experience": [
        {
          "company": "Digital Agency XYZ",
          "role": "UI/UX Intern",
          "dates": "May – Aug 2024",
          "bullets": [
            "Designed interactive Figma prototypes for 2 e-commerce clients; usability tests with 10 users reduced checkout task time by 20%.",
            "Built and documented 30+ component variants in the agency's shared design system.",
            "Presented design rationale to client stakeholders and iterated based on feedback in 2-week sprints."
          ]
        }
      ],
      "projects": [
        {
          "name": "NGO App Redesign",
          "type": "Case Study · Figma",
          "bullets": [
            "Redesigned a local NGO's donation flow; improved visual hierarchy and WCAG AA compliance throughout.",
            "Authored a full design documentation file including personas, journey maps, and annotated specs."
          ]
        }
      ]
    },
    "developing": {
      "name": "Morgan Bui",
      "title": "Product Designer",
      "email": "morgan.ux@gmail.com",
      "location": "Vietnam",
      "linkedin": "linkedin.com/in/morgan-ux",
      "summary": "Product designer with 2 years translating complex workflows into elegant, intuitive interfaces. Built and maintained a component library used by 5 designers and 12 engineers. Proven ability to turn ambiguous problems into measurably better user experiences.",
      "experience": [
        {
          "company": "Tech Product Studio",
          "role": "Product Designer",
          "dates": "Jan 2023 – Present",
          "bullets": [
            "Led end-to-end design of a new analytics dashboard; iterative usability research lifted daily engagement by 15%.",
            "Built a Figma component library with 150+ components, reducing design-to-dev handoff time by 35%.",
            "Collaborated with front-end engineers via annotated specs and weekly design reviews to ensure pixel-perfect implementation."
          ]
        }
      ],
      "projects": [
        {
          "name": "Design System Token Revamp",
          "type": "Internal Initiative · Figma + Storybook",
          "bullets": [
            "Standardised all colour, spacing, and typography tokens across web and mobile, aligning with WCAG AA.",
            "Reduced UI-related QA bug reports by 40% in the 2 sprints post-rollout."
          ]
        }
      ]
    },
    "ready": {
      "name": "Morgan Bui",
      "title": "Senior Product Designer",
      "email": "morgan.ux@gmail.com",
      "location": "Vietnam",
      "linkedin": "linkedin.com/in/morgan-ux",
      "summary": "Senior designer with 5+ years driving UX strategy for enterprise SaaS. Led the design for a mobile app that earned App Store 'App of the Day' and a 4.8/5 rating. Expert in design leadership, research operations, and design systems at scale.",
      "experience": [
        {
          "company": "Cloud SaaS Enterprise",
          "role": "Senior Product Designer",
          "dates": "Aug 2019 – Present",
          "bullets": [
            "Directed UX vision across 3 product verticals, aligning design strategy with the 3-year company roadmap.",
            "Built and led a design team of 4; instituted weekly design crits and a portfolio review culture.",
            "Pioneered a continuous discovery rhythm—5 customer interviews per week—that seeded 30% of roadmap items."
          ]
        }
      ],
      "projects": [
        {
          "name": "0→1 Consumer Mobile App",
          "type": "Strategic Initiative · Figma → React Native",
          "bullets": [
            "Led design from concept to launch; app featured as 'App of the Day' on iOS App Store.",
            "4.8/5 App Store rating from 10k+ reviews; 65% D30 retention at launch."
          ]
        }
      ]
    }
  },

  "Business Development (Tech Industry)": {
    "starter": {
      "name": "Cameron Tran",
      "title": "Business Development Intern",
      "email": "cameron.bd@gmail.com",
      "location": "Vietnam",
      "linkedin": "linkedin.com/in/cameron-bd",
      "summary": "Business student with a track record of generating qualified leads, crafting compelling pitch materials, and running competitive analysis in the B2B SaaS space.",
      "experience": [
        {
          "company": "CRM SaaS Provider",
          "role": "BD Intern",
          "dates": "Jun – Sep 2024",
          "bullets": [
            "Generated 150+ qualified leads via LinkedIn Sales Navigator and targeted cold email outreach.",
            "Supported AEs with pitch decks and RFP responses; contributed to 2 closed-won deals totalling $120k ARR.",
            "Ran a competitive teardown on 3 enterprise CRM tools, arming the sales team with objection-handling scripts."
          ]
        }
      ],
      "projects": [
        {
          "name": "B2B Sales Strategy Plan",
          "type": "Capstone Consulting Project",
          "bullets": [
            "Developed a 12-month GTM strategy for a cybersecurity product entering the Vietnamese SME market.",
            "Modelled quota attainment scenarios under 3 pricing strategies and presented to a panel of industry judges."
          ]
        }
      ]
    },
    "developing": {
      "name": "Cameron Tran",
      "title": "Sales Development Representative",
      "email": "cameron.bd@gmail.com",
      "location": "Vietnam",
      "linkedin": "linkedin.com/in/cameron-bd",
      "summary": "Results-driven SDR consistently achieving 120% of monthly quota. Generated $1.2M in pipeline over 12 months. Skilled at multi-channel prospecting, technical discovery, and pipeline discipline in a fast-moving B2B SaaS environment.",
      "experience": [
        {
          "company": "Cloud Infrastructure Co",
          "role": "Sales Development Representative",
          "dates": "Feb 2023 – Present",
          "bullets": [
            "Achieved 120% of monthly booked-meeting quota, generating $1.2M in qualified pipeline over 12 months.",
            "Ran deep discovery calls with IT Directors and CTOs to qualify technical requirements pre-handoff to AE.",
            "Optimised email sequences using Outreach, lifting open rates from 18% to 31%."
          ]
        }
      ],
      "projects": [
        {
          "name": "Outbound Playbook Rebuild",
          "type": "Sales Enablement",
          "bullets": [
            "Co-wrote the internal prospecting playbook; standardised call scripts and objection handling across the SDR team.",
            "New-hire ramp time dropped from 6 weeks to 4 weeks after playbook rollout."
          ]
        }
      ]
    },
    "ready": {
      "name": "Cameron Tran",
      "title": "Enterprise Account Executive",
      "email": "cameron.bd@gmail.com",
      "location": "Vietnam",
      "linkedin": "linkedin.com/in/cameron-bd",
      "summary": "Elite AE with 6 years closing complex enterprise deals. Consistently top-3 globally; closed $2.5M in new ARR in 2023 (140% of quota). Expert at navigating multi-stakeholder buying cycles, legal negotiations, and strategic partner ecosystems.",
      "experience": [
        {
          "company": "Data Security Corp",
          "role": "Enterprise Account Executive",
          "dates": "Mar 2018 – Present",
          "bullets": [
            "Closed $2.5M in new ARR in 2023 (140% of quota); earned President's Club for the 3rd consecutive year.",
            "Led 6-month enterprise sales cycles coordinating Sales Engineering, Legal, and Product for Fortune 500 accounts.",
            "Built 3 strategic reseller partnerships that expanded APAC market share by 15%."
          ]
        }
      ],
      "projects": [
        {
          "name": "Value-Based Selling Methodology",
          "type": "Sales Leadership",
          "bullets": [
            "Pioneered a value-based sales framework adopted by the APAC sales team of 12.",
            "Mentored 3 junior AEs, each closing their first 6-figure deal within 6 months of coaching."
          ]
        }
      ]
    }
  },

  "Operations (Tech Operations / Process Automation)": {
    "starter": {
      "name": "Riley Phan",
      "title": "Operations Intern",
      "email": "riley.ops@gmail.com",
      "location": "Vietnam",
      "linkedin": "linkedin.com/in/riley-ops",
      "summary": "Process-oriented student with a methodical approach to workflow analysis and automation. Experience mapping operational flows and using no-code tools to eliminate manual effort.",
      "experience": [
        {
          "company": "E-Commerce Fulfilment Co",
          "role": "Operations Intern",
          "dates": "May – Aug 2024",
          "bullets": [
            "Analysed warehouse picking routes, recommending an aisle reorganisation that cut average fulfilment time by 10%.",
            "Automated weekly inventory reporting using Zapier + Google Sheets, saving 5 hours of manual work each week.",
            "Audited vendor SLAs across 8 suppliers for quarterly compliance review, flagging 3 critical breaches."
          ]
        }
      ],
      "projects": [
        {
          "name": "Supply Chain Cost Simulation",
          "type": "Academic Operations Project",
          "bullets": [
            "Modelled a 4-warehouse distribution network using Excel Solver to minimise total logistics costs.",
            "Identified an optimal hub location reducing simulated shipping costs by 12%."
          ]
        }
      ]
    },
    "developing": {
      "name": "Riley Phan",
      "title": "Operations Specialist",
      "email": "riley.ops@gmail.com",
      "location": "Vietnam",
      "linkedin": "linkedin.com/in/riley-ops",
      "summary": "Ops specialist with 2 years streamlining processes at a high-growth ride-hailing startup. Cut driver onboarding SLA from 5 days to 2 and maintained 15+ SOPs for a 40-person customer success team.",
      "experience": [
        {
          "company": "RideHailing Startup",
          "role": "Operations Specialist",
          "dates": "Jan 2023 – Present",
          "bullets": [
            "Automated driver onboarding using CRM workflows, cutting SLA from 5 days to 2 and removing 3 manual touchpoints.",
            "Monitored real-time SLA compliance via Metabase, routing escalated tickets proactively to reduce breaches by 25%.",
            "Authored and maintained 15+ SOPs for a 40-person customer success team, ensuring consistency across shifts."
          ]
        }
      ],
      "projects": [
        {
          "name": "Zendesk Implementation",
          "type": "Cross-Functional Tool Rollout",
          "bullets": [
            "Configured a Zendesk ticketing system bridging Ops and Engineering, replacing a fragmented Slack-based process.",
            "Decreased average incident resolution time from 48 hours to 32 hours within 8 weeks of go-live."
          ]
        }
      ]
    },
    "ready": {
      "name": "Riley Phan",
      "title": "Operations Manager",
      "email": "riley.ops@gmail.com",
      "location": "Vietnam",
      "linkedin": "linkedin.com/in/riley-ops",
      "summary": "Strategic ops leader with 6+ years scaling technology companies. Built a team from 5 to 60, managed a $3M budget, and implemented Lean Six Sigma to slash processing errors by 40%. Proven at launching operations in new markets.",
      "experience": [
        {
          "company": "FinTech Scaleup",
          "role": "Head of Operations",
          "dates": "Feb 2019 – Present",
          "bullets": [
            "Scaled the operations function from 5 to 60 headcount while managing a $3M annual budget.",
            "Led ERP implementation across 4 business units, improving gross margins by 8%.",
            "Applied Lean Six Sigma to the transaction pipeline, reducing processing errors by 40%."
          ]
        }
      ],
      "projects": [
        {
          "name": "3-Country Market Expansion",
          "type": "Strategic Operations",
          "bullets": [
            "Designed the operational playbook for launching in Thailand, Indonesia, and the Philippines.",
            "Achieved operational readiness 3 weeks ahead of schedule across all 3 markets."
          ]
        }
      ]
    }
  },

  "Artificial Intelligence (AI) / Machine Learning (ML)": {
    "starter": {
      "name": "Quang Le",
      "title": "AI/ML Research Intern",
      "email": "quang.ai@gmail.com",
      "location": "Vietnam",
      "linkedin": "linkedin.com/in/quang-ai",
      "summary": "CS student specialising in NLP and deep learning. Hands-on experience fine-tuning open-source LLMs, building RAG pipelines, and benchmarking model performance on domain-specific tasks.",
      "experience": [
        {
          "company": "HUST AI Research Lab",
          "role": "Research Assistant",
          "dates": "Sep 2023 – May 2024",
          "bullets": [
            "Fine-tuned Llama-2-7B via LoRA on 10k customer support examples, achieving 15% accuracy uplift over GPT-3.5 baseline on the held-out test set.",
            "Scraped and cleaned 50k+ web documents using BeautifulSoup/Pandas to build a proprietary training corpus.",
            "Presented findings on efficiency trade-offs between LoRA and full fine-tuning at the department's monthly seminar."
          ]
        }
      ],
      "projects": [
        {
          "name": "RAG Chatbot for Legal Documents",
          "type": "Personal · LangChain + Pinecone + OpenAI",
          "bullets": [
            "Built a Retrieval-Augmented Generation pipeline that ingested 200+ PDFs into a vector store for precise Q&A.",
            "Achieved 87% answer accuracy on a human-labelled eval set; deployed on Hugging Face Spaces."
          ]
        }
      ]
    },
    "developing": {
      "name": "Quang Le",
      "title": "Machine Learning Engineer",
      "email": "quang.ai@gmail.com",
      "location": "Vietnam",
      "linkedin": "linkedin.com/in/quang-ai",
      "summary": "ML engineer with 1.5 years deploying models into production at a retail analytics company. Reduced inference latency 40% and shipped an automated retraining pipeline that keeps accuracy within 2% variance month-over-month.",
      "experience": [
        {
          "company": "Smart Retail Analytics",
          "role": "ML Engineer",
          "dates": "Jan 2023 – Present",
          "bullets": [
            "Deployed a product-recommendation model via FastAPI + Docker, serving 100 RPS at <50ms p99 latency.",
            "Reduced inference latency 40% through ONNX quantisation and batch-inference optimisation.",
            "Built an automated retraining pipeline triggered on data drift, maintaining model accuracy within 2% variance."
          ]
        }
      ],
      "projects": [
        {
          "name": "MLOps Monitoring Dashboard",
          "type": "Internal Tool · MLflow + Grafana",
          "bullets": [
            "Created a real-time model health dashboard tracking accuracy, latency, and data-drift metrics.",
            "Reduced time-to-detect model degradation from 2 weeks to 24 hours."
          ]
        }
      ]
    },
    "ready": {
      "name": "Quang Le",
      "title": "Senior AI / ML Engineer",
      "email": "quang.ai@gmail.com",
      "location": "Vietnam",
      "linkedin": "linkedin.com/in/quang-ai",
      "summary": "Senior AI/ML engineer with 5+ years building large-scale intelligent systems. Architected ML infrastructure serving 15 models to millions of users. Led a research team to develop a proprietary SEA-language NLP model. Cut cloud inference costs 35%.",
      "experience": [
        {
          "company": "AI-First Enterprise",
          "role": "Lead ML Engineer",
          "dates": "Mar 2019 – Present",
          "bullets": [
            "Architected an AWS SageMaker + Kubernetes ML platform serving 15 models at >99.9% availability.",
            "Led a 4-person research team developing a proprietary foundational model optimised for Vietnamese and Thai.",
            "Reduced annual cloud inference spend by 35% through quantisation, pruning, and GPU scheduling optimisations."
          ]
        }
      ],
      "projects": [
        {
          "name": "AI Safety Guardrail Framework",
          "type": "Architectural Initiative",
          "bullets": [
            "Designed multi-layer content safety guardrails and bias-detection tests for all text-generation endpoints.",
            "Published a whitepaper on enterprise AI safety adopted as an internal standard across 3 subsidiaries."
          ]
        }
      ]
    }
  },

  "Data Analytics (DA) & Business Intelligence (BI)": {
    "starter": {
      "name": "Thanh Nguyen",
      "title": "Data Analyst Intern",
      "email": "thanh.da@gmail.com",
      "location": "Vietnam",
      "linkedin": "linkedin.com/in/thanh-da",
      "summary": "Statistics student with strong SQL, Python, and Tableau skills gained through 3 academic analytical projects. Passionate about transforming messy datasets into clear business narratives that drive decisions.",
      "experience": [
        {
          "company": "National Retail Chain",
          "role": "Data Analyst Intern",
          "dates": "May – Aug 2024",
          "bullets": [
            "Cleaned and aggregated 50k+ sales records with pandas to surface regional performance trends, informing a $200k inventory reallocation.",
            "Built a Tableau dashboard tracking weekly KPIs for 12 store managers, eliminating a 3-hour Monday reporting ritual.",
            "Wrote 15 complex SQL queries for cohort analysis revealing a 10% churn spike tied to a loyalty program change."
          ]
        }
      ],
      "projects": [
        {
          "name": "Customer Churn Prediction",
          "type": "Academic ML Project · Python + sklearn",
          "bullets": [
            "Built a logistic regression model achieving 82% accuracy on a Kaggle telco churn dataset.",
            "Translated top 5 churn predictors into actionable recommendations presented at a business school competition."
          ]
        }
      ]
    },
    "developing": {
      "name": "Thanh Nguyen",
      "title": "Data Analyst",
      "email": "thanh.da@gmail.com",
      "location": "Vietnam",
      "linkedin": "linkedin.com/in/thanh-da",
      "summary": "Data analyst with 2 years partnering with Product, Marketing, and Finance to drive insights and ship data products. Expert in dbt, Redshift, and A/B test analysis. Helped lift conversion 8% and attribute $50k in marketing spend more accurately.",
      "experience": [
        {
          "company": "Tech Product Co",
          "role": "Data Analyst",
          "dates": "Jan 2023 – Present",
          "bullets": [
            "Partnered with Product to analyse A/B results; statistical significance framework surfaced a redesign that lifted conversions 8%.",
            "Maintained 20+ dbt models powering the company's core BI layer; reduced pipeline failures from 12/month to 1.",
            "Automated 20+ daily compliance reports via Airflow, freeing 15 hours of engineering time weekly."
          ]
        }
      ],
      "projects": [
        {
          "name": "Multi-Touch Attribution Model",
          "type": "Business Intelligence",
          "bullets": [
            "Developed a data-driven attribution model integrating Facebook Ads and Google Analytics data.",
            "Enabled the marketing team to reallocate $50k in ad spend, improving blended ROAS by 22%."
          ]
        }
      ]
    },
    "ready": {
      "name": "Thanh Nguyen",
      "title": "Senior Data Scientist",
      "email": "thanh.da@gmail.com",
      "location": "Vietnam",
      "linkedin": "linkedin.com/in/thanh-da",
      "summary": "Senior data scientist with 6 years at the intersection of advanced ML and executive strategy. Designed the credit-scoring model that reduced defaults 12% YoY. Led Snowflake data warehouse overhaul and trained 50+ business users on self-serve analytics.",
      "experience": [
        {
          "company": "FinTech Unicorn",
          "role": "Senior Data Scientist",
          "dates": "Mar 2018 – Present",
          "bullets": [
            "Designed the core ML credit-scoring model, reducing default rates by 12% year-over-year and saving $4M in risk exposure.",
            "Led a 3-person squad overhauling the enterprise data warehouse to Snowflake, cutting query costs by 30%.",
            "Presented predictive forecasting models to the C-suite, directly informing 2 major product pivots."
          ]
        }
      ],
      "projects": [
        {
          "name": "Data Democratisation Initiative",
          "type": "Leadership & Enablement",
          "bullets": [
            "Led 10 workshops training 50+ non-technical employees to self-serve on Metabase.",
            "Established a data governance council enforcing strict schema contracts and PII handling standards."
          ]
        }
      ]
    }
  }
}

# Emit as a TypeScript file
output_lines = [
    'import { DiagnosticLevel } from "../app/types";',
    'import { CVData } from "./cvTemplates";',
    '',
    'export const EXPANDED_CV_TEMPLATES: Record<string, any> = ',
    json.dumps(templates, indent=2, ensure_ascii=False) + ';',
    ''
]

with open('src/data/expandedCvData.ts', 'w', encoding='utf-8') as f:
    f.write('\n'.join(output_lines))

print(f'Wrote {len(templates)} unique role templates OK')
