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
    "Senior DevOps Engineer, Platform Engineer, SRE, Cloud Infrastructure, Cloud Migration, Cloud Cost Optimization, Torvix, Kubernetes, Docker, Terraform, Ansible, Linux, Nginx, HAProxy, Jenkins, GitLab CI, GitHub Actions, Prometheus, Grafana, Loki, Alertmanager, Patroni, PostgreSQL, MySQL, MongoDB, ClickHouse, Redis, OCI, AWS, Azure, GCP, DevSecOps, Grype, Keycloak, LDAP, SAML, OIDC, RBAC, SSL/TLS, ISO 27001, SOC 2, SLO, ITSM, Jira, Python, FastAPI, AI, LLM, RAG, Bash, Go",
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
    fontAwesomeIcon: "fa-twitter",
    backgroundColor: "#1DA1F2",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/_crypticani/",
    fontAwesomeIcon: "fa-instagram",
    backgroundColor: "#E4405F",
  },
];

const skills = {
  depthGroups: [
    {
      title: "Daily Drivers",
      label: "hands-on",
      items: [
        "Linux",
        "Bash",
        "Python",
        "Docker",
        "Kubernetes",
        "Terraform",
        "Ansible",
        "Nginx",
        "Git",
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
        "Jenkins",
        "GitLab CI",
        "GitHub Actions",
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
        "FastAPI",
        "Django/DRF",
        "AI · LLM/RAG pipelines",
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
        "Terminal-native Linux operations, Terraform and Ansible automation, networking, DNS, Nginx, HA architecture, DR, cloud migrations, and cost controls.",
    },
    {
      title: "Containers & Delivery",
      description:
        "Jenkins, GitLab CI, and GitHub Actions pipelines, Kubernetes rollouts, Docker workflows, release automation, and Grype DevSecOps gates.",
    },
    {
      title: "Reliability",
      description:
        "Prometheus, Grafana, Loki, and Alertmanager stacks — alerting, dashboards, runbooks, incident response, and MTTR reduction.",
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
        "Python, FastAPI, Django/DRF, Go, Bash — AI integrations with LLM/RAG pipelines, exporters, CLI tools, and workflow automation.",
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
