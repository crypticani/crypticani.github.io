/* Portfolio content */

const siteUrl = "https://crypticani.dev";
const resumePath = `${siteUrl}/files/Aniket_Kumar_DevOps_Resume.pdf`;

// Website related settings
const settings = {
  isSplash: true,
};

// SEO related settings
const seo = {
  title:
    "Aniket Kumar | Senior DevOps Engineer | Platform Engineering | Cloud Infrastructure",
  description:
    "Portfolio of Aniket Kumar, a Senior DevOps Engineer focused on production infrastructure, cloud migrations, Kubernetes, CI/CD automation, observability, reliability, cloud cost optimization, and Torvix.",
  keywords:
    "Senior DevOps Engineer, Platform Engineer, SRE, Cloud Infrastructure, Cloud Migration, Cloud Cost Optimization, Torvix, Kubernetes, Docker, Terraform, Ansible, Linux, Nginx, HAProxy, Jenkins, GitLab CI, GitHub Actions, Prometheus, Grafana, Loki, Alertmanager, Patroni, PostgreSQL, MySQL, MongoDB, ClickHouse, Redis, OCI, AWS, Azure, GCP, DevSecOps, Grype, Keycloak, LDAP, SAML, OIDC, RBAC, SSL/TLS, ISO 27001, SOC 2, SLO, ITSM, Jira, Python, Bash, Go",
  og: {
    title:
      "Aniket Kumar | Senior DevOps Engineer | Platform Engineering | Cloud Infrastructure",
    type: "website",
    url: siteUrl,
  },
};

// Home Page
const greeting = {
  title: "Aniket Kumar",
  logo_name: "crypticani",
  nickname: "crypticani",
  kicker: "Senior DevOps Engineer · Platform · SRE",
  headline: "Building reliable, observable, and cost-efficient infrastructure.",
  subTitle:
    "Linux, Kubernetes, CI/CD, and three clouds — I keep 15+ production apps at 99.9% SLA, and automate the boring parts in Python before they page anyone.",
  role: "Senior DevOps Engineer | Technical Lead | Platform Engineering | Cloud Infrastructure | SRE",
  location: "Samastipur, Bihar, India",
  resumeLink: resumePath,
  portfolio_repository: "https://github.com/crypticani/crypticani.github.io",
  githubProfile: "https://github.com/crypticani",
  linkedInProfile: "https://linkedin.com/in/crypticani",
  contactLink: "/contact",
};

const proofPoints = [
  {
    label: "Production DevOps",
    value: "4+ yrs",
    detail:
      "Senior DevOps and acting technical lead across production infrastructure.",
  },
  {
    label: "Services on Kubernetes",
    value: "20+",
    detail: "Containerized and migrated to zero-downtime deployments.",
  },
  {
    label: "Cloud Spend",
    value: "−25%",
    detail: "Right-sizing, reserved capacity planning, and cost cleanup.",
  },
  {
    label: "Disaster-Recovery RTO",
    value: "<30 min",
    detail: "Automated failover and restore runbooks, tested regularly.",
  },
];

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/crypticani",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/crypticani",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Email",
    link: "mailto:aniket.kumar@hotmail.com",
    fontAwesomeIcon: "fas fa-envelope",
    backgroundColor: "#0a66c2",
  },
  {
    name: "Discord",
    link: "https://discord.com/users/crypticani",
    fontAwesomeIcon: "fa-discord",
    backgroundColor: "#5865F2",
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@knowledgewit",
    fontAwesomeIcon: "fa-youtube",
    backgroundColor: "#FF0000",
  },
  {
    name: "X-Twitter",
    link: "https://twitter.com/crypticani",
    fontAwesomeIcon: "fa-x-twitter",
    backgroundColor: "#4B5563",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/_crypticani/",
    fontAwesomeIcon: "fa-instagram",
    backgroundColor: "#E4405F",
  },
];

const iconStyle = (color) => ({ color });

const skills = {
  depthGroups: [
    {
      title: "Daily Drivers",
      label: "hands-on",
      items: [
        "Linux",
        "Bash",
        "Docker",
        "Kubernetes",
        "Nginx",
        "Git",
        "CI/CD",
        "Prometheus",
        "Grafana",
      ],
    },
    {
      title: "Production Experience",
      label: "operated",
      items: [
        "OCI",
        "AWS",
        "PostgreSQL HA",
        "MySQL HA",
        "MongoDB replicas",
        "Loki",
        "Alertmanager",
        "Keycloak",
        "LDAP",
      ],
    },
    {
      title: "Security Crossover",
      label: "applied",
      items: [
        "Grype",
        "DevSecOps gates",
        "Burp Suite",
        "OWASP",
        "Auth/session testing",
        "Cloud/IAM risk",
      ],
    },
    {
      title: "Development Roots",
      label: "builder",
      items: [
        "Python",
        "Django/DRF",
        "Go tooling",
        "Vue/Tailwind",
        "Exporters",
        "Automation scripts",
      ],
    },
    {
      title: "Process & Leadership",
      label: "operates",
      items: [
        "Team leadership (8+ engineers)",
        "Mentoring",
        "SLOs",
        "ISO 27001 / SOC 2 support",
        "Agile/Scrum",
        "Jira",
        "Freshservice",
        "ITSM",
        "Change/Incident/Release Mgmt",
      ],
    },
  ],
  summary: [
    {
      title: "Linux & Infrastructure",
      description:
        "Terminal-native Linux operations, networking, DNS, Nginx, HA architecture, DR, cloud migrations, and cost controls.",
    },
    {
      title: "Containers & Delivery",
      description:
        "CI/CD pipelines, Kubernetes rollouts, container workflows, release automation, and DevSecOps gates.",
    },
    {
      title: "Reliability",
      description:
        "Observability stacks, alerting, logs, dashboards, runbooks, incident response, and MTTR reduction.",
    },
    {
      title: "Data Platforms",
      description:
        "PostgreSQL, MySQL, MongoDB, ClickHouse, Redis, KeyDB, backups, replication, failover, and restore plans.",
    },
    {
      title: "Security-Aware Infrastructure",
      description:
        "IAM, Keycloak, LDAP, SAML/OIDC, container scanning, web/API testing concepts, and practical risk reporting.",
    },
    {
      title: "Development",
      description:
        "Python, Bash, Go, Django/DRF, exporters, CLI tools, admin portals, and workflow automation.",
    },
  ],
  data: [
    {
      title: "Cloud & Infrastructure",
      fileName: "CloudInfrastructureIllustration",
      skills: [
        "AWS, OCI, Azure, GCP, Linux, Nginx, HAProxy, load balancing, DNS, HA architecture, disaster recovery, and cloud cost optimization.",
        "Planning production infrastructure with redundancy, failover paths, backup strategy, operational runbooks, and migration cutover paths.",
        "Keeping infrastructure reliable, cost-aware, and maintainable across cloud and on-premise environments.",
      ],
      softwareSkills: [
        {
          skillName: "OCI",
          fontAwesomeClassname: "simple-icons:oracle",
          style: iconStyle("#f80000"),
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: iconStyle("#ff9900"),
        },
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: iconStyle("#4285f4"),
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: iconStyle("#0078d4"),
        },
        {
          skillName: "Terraform",
          fontAwesomeClassname: "simple-icons:terraform",
          style: iconStyle("#7b42bc"),
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: iconStyle("#111111"),
        },
        {
          skillName: "Nginx",
          fontAwesomeClassname: "simple-icons:nginx",
          style: iconStyle("#009639"),
        },
        {
          skillName: "HAProxy",
          fontAwesomeClassname: "simple-icons:haproxy",
          style: iconStyle("#106da9"),
        },
        {
          skillName: "Load Balancing",
          fontAwesomeClassname: "mdi:scale-balance",
          style: iconStyle("#2f80ed"),
        },
        {
          skillName: "DNS",
          fontAwesomeClassname: "mdi:dns-outline",
          style: iconStyle("#6f42c1"),
        },
        {
          skillName: "HA Architecture",
          fontAwesomeClassname: "mdi:server-network",
          style: iconStyle("#0f766e"),
        },
        {
          skillName: "Disaster Recovery",
          fontAwesomeClassname: "mdi:backup-restore",
          style: iconStyle("#c2410c"),
        },
        {
          skillName: "Cloud Cost Optimization",
          fontAwesomeClassname: "mdi:finance",
          style: iconStyle("#047857"),
        },
      ],
    },
    {
      title: "Containers & CI/CD",
      fileName: "DeliveryPipelineIllustration",
      skills: [
        "Docker, Kubernetes, Docker Compose, Jenkins, GitLab CI, GitHub Actions, and Grype.",
        "Building automated build-test-deploy workflows with safer release paths and CI/CD security gates.",
        "Managing containerized workloads with rolling updates and zero-downtime deployment practices.",
      ],
      softwareSkills: [
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: iconStyle("#2496ed"),
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: iconStyle("#326ce5"),
        },
        {
          skillName: "Docker Compose",
          fontAwesomeClassname: "simple-icons:docker",
          style: iconStyle("#1d63ed"),
        },
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "simple-icons:jenkins",
          style: iconStyle("#d24939"),
        },
        {
          skillName: "GitLab CI",
          fontAwesomeClassname: "simple-icons:gitlab",
          style: iconStyle("#fc6d26"),
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: iconStyle("#2088ff"),
        },
        {
          skillName: "Grype",
          fontAwesomeClassname: "mdi:shield-search",
          style: iconStyle("#7c3aed"),
        },
      ],
    },
    {
      title: "Observability",
      fileName: "ObservabilityIllustration",
      skills: [
        "Prometheus, Grafana, Loki, Alertmanager, Fluent Bit, PromQL, and custom exporters.",
        "Building dashboards, alerts, logs, and metrics pipelines that support faster incident detection and recovery.",
        "Developing Python exporters and operational views for hosts, containers, services, and infrastructure health.",
      ],
      softwareSkills: [
        {
          skillName: "Prometheus",
          fontAwesomeClassname: "simple-icons:prometheus",
          style: iconStyle("#e6522c"),
        },
        {
          skillName: "Grafana",
          fontAwesomeClassname: "simple-icons:grafana",
          style: iconStyle("#f46800"),
        },
        {
          skillName: "Loki",
          fontAwesomeClassname: "simple-icons:grafana",
          style: iconStyle("#f59e0b"),
        },
        {
          skillName: "Alertmanager",
          fontAwesomeClassname: "mdi:bell-alert",
          style: iconStyle("#dc2626"),
        },
        {
          skillName: "Fluent Bit",
          fontAwesomeClassname: "mdi:file-document-outline",
          style: iconStyle("#0ea5e9"),
        },
        {
          skillName: "PromQL",
          fontAwesomeClassname: "mdi:chart-line",
          style: iconStyle("#9333ea"),
        },
      ],
    },
    {
      title: "Data Platforms & HA",
      fileName: "DataPlatformHaIllustration",
      skills: [
        "PostgreSQL + Patroni, MySQL Group Replication, MongoDB Replica Sets, ClickHouse, Redis Sentinel, and KeyDB.",
        "Designing database HA/DR patterns with backups, recovery runbooks, replication, failover, and restore validation.",
        "Supporting reliable stateful platforms without exposing client-specific infrastructure details.",
      ],
      softwareSkills: [
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: iconStyle("#336791"),
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: iconStyle("#4479a1"),
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: iconStyle("#47a248"),
        },
        {
          skillName: "ClickHouse",
          fontAwesomeClassname: "simple-icons:clickhouse",
          style: iconStyle("#ffcc01"),
        },
        {
          skillName: "Redis",
          fontAwesomeClassname: "simple-icons:redis",
          style: iconStyle("#dc382d"),
        },
        {
          skillName: "KeyDB",
          fontAwesomeClassname: "mdi:database-sync",
          style: iconStyle("#7c3aed"),
        },
        {
          skillName: "Patroni",
          fontAwesomeClassname: "mdi:database-cog",
          style: iconStyle("#0f766e"),
        },
      ],
    },
    {
      title: "Security & IAM",
      fileName: "SecurityIamIllustration",
      skills: [
        "Keycloak, LDAP, SAML/OIDC, SSL/TLS, RBAC, and DevSecOps practices.",
        "Integrating SSO and IAM patterns while keeping access control, service ownership, and auditability clear.",
        "Adding practical security checks to delivery workflows through container scanning and CI/CD guardrails.",
        "Supporting ISO 27001 and SOC 2 audits with access reviews, change management, and evidence-backed controls.",
      ],
      softwareSkills: [
        {
          skillName: "Keycloak",
          fontAwesomeClassname: "simple-icons:keycloak",
          style: iconStyle("#4d4d4d"),
        },
        {
          skillName: "LDAP",
          fontAwesomeClassname: "mdi:account-key",
          style: iconStyle("#2563eb"),
        },
        {
          skillName: "SAML/OIDC",
          fontAwesomeClassname: "mdi:shield-key",
          style: iconStyle("#0f766e"),
        },
        {
          skillName: "DevSecOps",
          fontAwesomeClassname: "mdi:security",
          style: iconStyle("#b91c1c"),
        },
      ],
    },
    {
      title: "Application Security & VAPT",
      fileName: "VaptSecurityIllustration",
      skills: [
        "Reconnaissance, inventory mapping, web/API testing, auth/session testing, and OWASP-style issue triage.",
        "Burp Suite workflows for capturing traffic, modifying requests, comparing responses, and collecting evidence.",
        "Practical security notes around SPA/API systems, token auth, object storage, webhooks, cloud-backed apps, and CI/CD attack surfaces.",
        "Reporting-focused mindset: document request, mutation, response delta, impact, and proof clearly.",
      ],
      softwareSkills: [
        {
          skillName: "Burp Suite",
          fontAwesomeClassname: "simple-icons:burpsuite",
          style: iconStyle("#ff6633"),
        },
        {
          skillName: "OWASP",
          fontAwesomeClassname: "simple-icons:owasp",
          style: iconStyle("#000000"),
        },
        {
          skillName: "PortSwigger",
          fontAwesomeClassname: "simple-icons:portswigger",
          style: iconStyle("#ff6633"),
        },
        {
          skillName: "VAPT",
          fontAwesomeClassname: "mdi:bug-check",
          style: iconStyle("#7c2d12"),
        },
        {
          skillName: "Web/API Testing",
          fontAwesomeClassname: "mdi:web-check",
          style: iconStyle("#2563eb"),
        },
        {
          skillName: "The VAPT Handbook",
          fontAwesomeClassname: "mdi:book-open-page-variant",
          style: iconStyle("#0f766e"),
        },
      ],
    },
    {
      title: "Development, Automation & Programming",
      fileName: "DevelopmentAutomationIllustration",
      skills: [
        "Python, Bash, Go, Django/DRF, Ansible, and Git.",
        "Building Django/DRF APIs, internal admin portals, exporters, CLI tooling, and automation scripts.",
        "Writing developer-focused tooling that reduces manual operational work and improves platform workflows.",
        "Using Go for selected tooling while keeping professional positioning centered on DevOps, development, and platform engineering.",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: iconStyle("#3776ab"),
        },
        {
          skillName: "Bash",
          fontAwesomeClassname: "simple-icons:gnubash",
          style: iconStyle("#4eaa25"),
        },
        {
          skillName: "Go",
          fontAwesomeClassname: "simple-icons:go",
          style: iconStyle("#00add8"),
        },
        {
          skillName: "Django/DRF",
          fontAwesomeClassname: "simple-icons:django",
          style: iconStyle("#092e20"),
        },
        {
          skillName: "Ansible",
          fontAwesomeClassname: "simple-icons:ansible",
          style: iconStyle("#111111"),
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: iconStyle("#f05032"),
        },
      ],
    },
  ],
};

// Education Page
const degrees = {
  degrees: [
    {
      title: "Lovely Professional University",
      subtitle: "Master in Computer Applications",
      logo_path: "lpu.jpeg",
      alt_name: "LPU",
      duration: "2021 - 2023",
      descriptions: [
        "▸ I studied core computer applications subjects including programming, data structures, algorithms, DBMS, operating systems, and cloud computing.",
        "▸ I also completed coursework around data science, cloud computing, and full-stack development.",
        "▸ CGPA: 8.97",
      ],
      website_link: "https://lpu.in",
    },
    {
      title: "Dev Sanskriti Vishwavidyalaya",
      subtitle: "Bachelor in Computer Applications",
      logo_path: "dsvv.jpg",
      alt_name: "DSVV",
      duration: "2018 - 2021",
      descriptions: [
        "▸ I studied computer applications subjects including programming, data structures, algorithms, DBMS, operating systems, and cloud concepts.",
        "▸ I also completed a modular course in cloud computing and was associated with Jigyasa Club.",
        "▸ Academic Excellence Award",
        "▸ CGPA: 8.0",
      ],
      website_link: "https://www.dsvv.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Architect Associate",
      subtitle: "- Oracle",
      logo_path: "oracle.png",
      certificate_link:
        "https://catalog-education.oracle.com/ords/certview/sharebadge?id=E58B96E195BB05FB979AE79B82FD8C3FCC52498BFB6954F2079D0A4C9BC39560",
      alt_name: "Oracle",
      color_code: "#810f0f",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Google Cloud Skills Boost",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.skills.google/public_profiles/8f5c39be-dc33-4dcf-9222-93a12d66603f",
      alt_name: "Google Cloud",
      color_code: "#4285f4",
    },
    {
      title: "Google IT Automation with Python",
      subtitle: "- Coursera",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/XKHXNF4UDCEC",
      alt_name: "Coursera",
      color_code: "#2a73cc",
    },
    {
      title: "Foundations of Project Management",
      subtitle: "- Coursera",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/E3TXTAKY7L33",
      alt_name: "Coursera",
      color_code: "#2a73cc",
    },
    {
      title: "Python for Data Science, AI & Development",
      subtitle: "- Coursera",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/E5UEZVFGNJLC",
      alt_name: "Coursera",
      color_code: "#2a73cc",
    },
    {
      title: "Penetration Testing and Ethical Hacking",
      subtitle: "- Cybrary",
      logo_path: "cybrary.jpg",
      certificate_link:
        "https://app.cybrary.it/courses/api/certificate/CC-0ba8e1bf-7007-486c-bd2b-40533d96e8f1/view",
      alt_name: "Cybrary",
      color_code: "#0d0d0e",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle:
    "DevOps, development, platform engineering, cloud infrastructure, and SRE work",
  description:
    "4+ years of professional DevOps experience across production infrastructure, cloud migrations, CI/CD automation, Kubernetes and containerized workloads, observability, database HA/DR, cloud operations, IAM, DevSecOps practices, and developer tooling, backed by internship and early engineering experience.",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Senior DevOps Engineer (Acting Technical Lead)",
          company: "KocharTech",
          company_url: "https://www.kochartech.com/",
          logo_path: "kochartech-small.jpg",
          duration: "Jun 2023 - Present",
          location: "Amritsar, India",
          descriptions: [
            "Own HA infrastructure, CI/CD, observability, and cloud operations for 15+ production applications with 99.9% uptime SLA.",
            "Lead 8+ engineers and mentor interns; introduced code reviews, runbooks, SLOs, incident practices, and on-call rotation, reducing MTTR by 40%.",
            "Plan and execute migration work across cloud providers, including scheduled downtime windows, near real-time cutover approaches, validation, and post-migration stabilization.",
            "Support cloud-to-on-premise migration initiatives involving infrastructure planning, service cutover, data movement, reverse proxy updates, and production readiness checks.",
            "Built Jenkins, GitLab CI, and GitHub Actions pipelines that moved releases from bi-weekly to multiple daily deployments.",
            "Reduced Docker image sizes by 60% and deployment times by 50% through multi-stage builds and pipeline optimization.",
            "Build repeatable infrastructure workflows using Terraform, Ansible, Docker, CI/CD pipelines, and Linux automation.",
            "Containerized 20+ services and managed Kubernetes workloads with rolling updates and zero-downtime release practices.",
            "Integrated Grype-based container vulnerability scanning into CI/CD gates, reducing production vulnerability exposure by 90%.",
            "Designed HA data platforms using PostgreSQL + Patroni, MySQL Group Replication, MongoDB Replica Sets, ClickHouse, Redis Sentinel, and KeyDB, with point-in-time recovery (PITR).",
            "Implemented DR automation with snapshots, cross-region backup replication, and recovery runbooks, achieving sub-30-minute RTO.",
            "Optimized cloud spend by 25% through cost review, rightsizing, reserved capacity planning, and unused-resource cleanup.",
            "Supported ISO 27001 and SOC 2 audits with access controls, RBAC reviews, change management, centralized logging, and backup validation evidence.",
          ],
          color: "#2f80ed",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "IT Intern",
          company: "KocharTech",
          company_url: "https://www.kochartech.com/",
          logo_path: "kochartech-small.jpg",
          duration: "Jun 2022 - May 2023",
          location: "Amritsar, India",
          descriptions: [
            "Built an observability stack across 100+ hosts and 200+ containers.",
            "Used Prometheus, Alertmanager, Grafana, Loki, and Fluent Bit.",
            "Developed Python exporters and 15+ Grafana dashboards with PromQL panels.",
            "Automated Linux home-directory backups to AWS S3.",
            "Built a Django + MQTT device management portal for 50+ devices.",
          ],
          color: "#0f766e",
        },
        {
          title: "Full Stack Development Intern",
          company: "TheCodeWork",
          company_url: "https://thecodework.com",
          logo_path: "thecodework.png",
          duration: "Jun 2021 - Oct 2021",
          location: "Remote",
          descriptions: [
            "Developed Django/DRF backend APIs.",
            "Built VueJS/TailwindCSS interfaces for a no-code application platform.",
          ],
          color: "#7c3aed",
        },
        {
          title: "Software Development Intern",
          company: "All World Gayatri Pariwar",
          company_url: "https://awgp.org",
          logo_path: "awgp.png",
          duration: "Feb 2021 - May 2021",
          descriptions: [
            "Collaborated with the software development team to fix bugs.",
            "Added features to existing software.",
            "Contributed to ERP development and wrote project documentation.",
          ],
          color: "#9b1578",
        },
      ],
    },
  ],
};

const caseStudies = {
  title: "Production Infrastructure Focus",
  subtitle:
    "Anonymized, client-safe examples of migration, automation, reliability, observability, security, and cloud cost optimization work.",
  studies: [
    {
      title: "Cloud & Platform Migration",
      focus: "Platform Migration",
      problem:
        "Business-critical systems needed migration paths across cloud providers and cloud-to-on-premise environments without unnecessary operational risk.",
      built:
        "Planned downtime-based migrations, near real-time cutover approaches, infrastructure readiness checks, service cutovers, data movement, validation, and stabilization workflows.",
      outcomes: ["Cross-cloud", "Cloud-to-on-premise", "Cutover planning"],
    },
    {
      title: "Infrastructure Automation",
      focus: "Infrastructure Automation",
      problem:
        "Infrastructure and release work needed fewer manual steps and more consistent execution across production environments.",
      built:
        "Built repeatable workflows using Terraform, Ansible, Docker, Jenkins, GitLab CI, GitHub Actions, Linux automation, and operational runbooks.",
      outcomes: ["Terraform", "Ansible", "CI/CD"],
    },
    {
      title: "Observability & Reliability",
      focus: "Observability",
      problem:
        "Teams needed faster visibility into hosts, containers, services, and infrastructure health.",
      built:
        "Implemented monitoring and troubleshooting workflows using Prometheus, Alertmanager, Grafana, Loki, Fluent Bit, PromQL dashboards, and custom exporters.",
      outcomes: ["100+ hosts", "200+ containers", "15+ dashboards"],
    },
    {
      title: "CI/CD Automation with DevSecOps Gates",
      focus: "Delivery Automation",
      problem:
        "Release workflows needed to move faster while reducing the chance of vulnerable containers or unsafe changes reaching production.",
      built:
        "Implemented Jenkins, GitLab CI, and GitHub Actions pipelines with vulnerability checks, deployment guardrails, safer release workflows, and practical security controls across containers, auth, APIs, and cloud-backed apps.",
      outcomes: ["Multiple daily releases", "20+ services", "Security gates"],
    },
    {
      title: "Cloud Cost Optimization",
      focus: "Cost-Aware Operations",
      problem:
        "Cloud spend needed better visibility, usage review, and cleanup of underutilized resources.",
      built:
        "Reviewed usage patterns, identified waste, recommended rightsizing and cleanup actions, and connected infrastructure decisions to measurable cost reduction.",
      outcomes: ["25% spend reduction", "Usage review", "Operational cleanup"],
    },
    {
      title: "Data Platforms & HA",
      focus: "Stateful Reliability",
      problem:
        "Database-backed systems needed reliable replication, backup, failover, and restore planning across production environments.",
      built:
        "Operated PostgreSQL + Patroni, MySQL Group Replication, MongoDB replica sets, ClickHouse, Redis Sentinel, and KeyDB with recovery runbooks.",
      outcomes: ["Replication", "Failover", "Restore planning"],
    },
    {
      title: "ISO 27001 & SOC 2 Audit Support",
      focus: "Compliance & Governance",
      problem:
        "Production infrastructure had to satisfy ISO 27001 and SOC 2 audit requirements — with evidence — without slowing down delivery.",
      built:
        "Access-control and RBAC reviews, change-management workflow, centralized logging with retention, and scheduled backup validation with restore evidence.",
      outcomes: [
        "Audit-ready evidence",
        "Access reviews",
        "Change management",
        "Backup validation",
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Public Work",
  description:
    "Curated GitHub-backed tools, launched platform work, handbooks, and earlier developer projects. Torvix, infrastructure, cloud, automation, and terminal-native projects are intentionally shown first.",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    description:
      "Based in Samastipur, Bihar, India. Reach out for DevOps, platform engineering, cloud infrastructure, observability, SRE, CI/CD automation, developer tooling, and DevSecOps conversations.",
  },
  blogSection: {
    title: "Community & Technical Writing",
    subtitle:
      "Structured notes, handbooks, and community resources for DevOps, platform engineering, Linux, cloud, application security, and practical infrastructure workflows.",
    link: "https://blog.crypticani.dev/",
    featuredLinks: [
      {
        title: "Hashnode Blog",
        description:
          "Short technical posts on DevOps, Linux, cloud infrastructure, developer workflows, security, and engineering lessons from hands-on work.",
        buttonText: "Read Blog",
        href: "https://blog.crypticani.dev/",
      },
      {
        title: "The DevOps Handbook",
        description:
          "A hands-on path across Linux, networking, Git, scripting, containers, CI/CD, observability, cloud, Terraform, Ansible, Kubernetes, and DevOps projects.",
        buttonText: "View Handbook",
        href: "https://github.com/crypticani/the-devops-handbook",
      },
      {
        title: "The VAPT Handbook",
        description:
          "A practical application security handbook covering recon, web/API testing, auth and session issues, cloud-backed app surfaces, reporting, and responsible practice.",
        buttonText: "View Handbook",
        href: "https://github.com/crypticani/the-vapt-handbook",
      },
      {
        title: "DevOps Learning Discord",
        description:
          "A Discord community I run as @crypticani for engineers working through DevOps, Linux, cloud, CI/CD, observability, and platform engineering topics.",
        buttonText: "Join Discord",
        href: "https://discord.gg/TSfxKeMZ57",
      },
    ],
  },
};

// Experience page — htop-style role summary
const htopProcesses = [
  {
    pid: 1,
    role: "Senior DevOps Engineer",
    org: "KocharTech",
    cpu: 88,
    time: "2023→now",
    command:
      "HA infra · CI/CD · 99.9% SLA · leads 8+ engineers · MTTR −40% · −25% cloud spend",
  },
  {
    pid: 2,
    role: "IT Intern",
    org: "KocharTech",
    cpu: 54,
    time: "2022→23",
    command:
      "observability for 100+ hosts, 200+ containers · Python exporters · 15+ Grafana dashboards",
  },
  {
    pid: 3,
    role: "Full Stack Intern",
    org: "TheCodeWork",
    cpu: 31,
    time: "2021",
    command: "Django/DRF APIs · Vue + Tailwind no-code platform UI",
  },
  {
    pid: 4,
    role: "SDE Intern",
    org: "All World Gayatri Pariwar",
    cpu: 18,
    time: "2021",
    command: "ERP features · bug fixes · documentation",
  },
];

export {
  settings,
  seo,
  greeting,
  proofPoints,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  htopProcesses,
  caseStudies,
  projectsHeader,
  contactPageData,
};
