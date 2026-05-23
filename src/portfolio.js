/* Portfolio content */

const siteUrl = "https://crypticani.dev";
const resumePath = `${siteUrl}/files/Aniket_Kumar_DevOps_Resume.pdf`;

// Website related settings
const settings = {
  isSplash: false,
};

// SEO related settings
const seo = {
  title:
    "Aniket Kumar | DevOps Engineer & Full Stack Engineer | Platform Engineering | SRE",
  description:
    "Portfolio of Aniket Kumar, a DevOps Engineer and Full Stack Engineer focused on high-availability infrastructure, CI/CD automation, Kubernetes, observability, database HA/DR, cloud cost optimization, DevSecOps, and VAPT fundamentals.",
  keywords:
    "DevOps Engineer, Full Stack Engineer, Platform Engineer, SRE, Kubernetes, Docker, Jenkins, GitLab CI, GitHub Actions, Prometheus, Grafana, Loki, PostgreSQL, MySQL, MongoDB, OCI, AWS, GCP, DevSecOps, FinOps, Keycloak, LDAP, VAPT, Burp Suite, Python, Django REST Framework",
  og: {
    title:
      "Aniket Kumar | DevOps Engineer & Full Stack Engineer | Platform Engineering | SRE",
    type: "website",
    url: siteUrl,
  },
};

// Home Page
const greeting = {
  title: "Aniket Kumar",
  logo_name: "crypticani",
  nickname: "crypticani",
  headline:
    "DevOps Engineer and Full Stack Engineer building reliable, observable, and cost-aware infrastructure.",
  subTitle:
    "I work on high-availability infrastructure, CI/CD automation, Kubernetes workloads, observability, database HA/DR, DevSecOps, and backend/tooling development across cloud and on-prem environments.",
  role:
    "DevOps Engineer | Full Stack Engineer | Platform Engineering | Cloud Infrastructure | SRE",
  location: "Samastipur, Bihar, India",
  resumeLink: resumePath,
  portfolio_repository: "https://github.com/crypticani/portfolio",
  githubProfile: "https://github.com/crypticani",
  linkedInProfile: "https://linkedin.com/in/crypticani",
  contactLink: "/contact",
};

const proofPoints = [
  {
    label: "DevOps Experience",
    value: "3+ years",
    detail: "Infrastructure, delivery, reliability, and automation work.",
  },
  {
    label: "Production Scope",
    value: "15+ apps",
    detail: "High-availability operations across production services.",
  },
  {
    label: "Reliability Target",
    value: "99.9% SLA",
    detail: "Runbooks, incident practices, observability, and on-call flow.",
  },
  {
    label: "Cost Optimization",
    value: "25%",
    detail: "Cloud spend reduction through right-sizing and FinOps practices.",
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
    backgroundColor: "#000000",
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
  summary: [
    {
      title: "Infrastructure",
      description:
        "Cloud and on-prem systems with Linux, networking, HA architecture, DR, DNS, Nginx, and cost controls.",
    },
    {
      title: "Delivery",
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
      title: "Security",
      description:
        "IAM, Keycloak, LDAP, SAML/OIDC, container scanning, VAPT fundamentals, and practical reporting.",
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
      fileName: "CloudInfraImg",
      skills: [
        "OCI, AWS, GCP, Linux, Nginx, load balancing, DNS, HA architecture, disaster recovery, and FinOps.",
        "Designing production infrastructure with redundancy, failover paths, backup strategy, and operational runbooks.",
        "Keeping infrastructure reliable, cost-aware, and maintainable across cloud and on-prem environments.",
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
          skillName: "FinOps",
          fontAwesomeClassname: "mdi:finance",
          style: iconStyle("#047857"),
        },
      ],
    },
    {
      title: "Containers & CI/CD",
      fileName: "CloudInfraImg",
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
      fileName: "DataScienceImg",
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
      fileName: "CloudInfraImg",
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
      fileName: "DesignImg",
      skills: [
        "Keycloak, LDAP, SAML/OIDC, and DevSecOps practices.",
        "Integrating SSO and IAM patterns while keeping access control, service ownership, and auditability clear.",
        "Adding practical security checks to delivery workflows through container scanning and CI/CD guardrails.",
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
      fileName: "DesignImg",
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
          skillName: "VAPT Fundamentals",
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
      fileName: "FullStackImg",
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
        "⚡ I studied core computer applications subjects including programming, data structures, algorithms, DBMS, operating systems, and cloud computing.",
        "⚡ I also completed coursework around data science, cloud computing, and full-stack development.",
        "⚡ CGPA: 8.97",
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
        "⚡ I studied computer applications subjects including programming, data structures, algorithms, DBMS, operating systems, and cloud fundamentals.",
        "⚡ I also completed a modular course in cloud computing and was associated with Jigyasa Club.",
        "⚡ Academic Excellence Award",
        "⚡ CGPA: 8.0",
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
    "3+ years working across high-availability infrastructure, CI/CD automation, Kubernetes and containerized workloads, observability, database HA/DR, cloud operations, FinOps, IAM, DevSecOps practices, and developer tooling.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "DevOps Engineer",
          company: "KocharTech",
          company_url: "https://www.kochartech.com/",
          logo_path: "kochartech-small.jpg",
          duration: "Jun 2023 - Present",
          location: "Amritsar, India",
          descriptions: [
            "Own HA infrastructure, CI/CD, observability, and cloud operations for 15+ production applications with 99.9% uptime SLA.",
            "Lead 8 engineers/interns and introduced reviews, runbooks, incident practices, and on-call rotation, reducing MTTR by 40%.",
            "Built Jenkins, GitLab CI, and GitHub Actions pipelines that moved releases from bi-weekly to multiple daily deployments.",
            "Containerized 20+ services and managed Kubernetes workloads with rolling updates and zero-downtime release practices.",
            "Integrated Grype-based container vulnerability scanning into CI/CD gates, reducing production vulnerability exposure by 90%.",
            "Designed HA data platforms using PostgreSQL + Patroni, MySQL Group Replication, MongoDB Replica Sets, ClickHouse, Redis Sentinel, and KeyDB.",
            "Implemented DR automation with snapshots, cross-region backup replication, and recovery runbooks, achieving sub-30-minute RTO.",
            "Optimized cloud spend by 25% through cost review, rightsizing, and operational cleanup.",
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
  title: "Selected Infrastructure Case Studies",
  subtitle:
    "Anonymized, client-safe examples of the platform, reliability, security, and operations work behind my resume.",
  studies: [
    {
      title: "High-Availability Infrastructure & DR",
      focus: "Reliability engineering",
      description:
        "Designed production HA patterns, backup replication, restore runbooks, and recovery workflows across cloud and on-prem environments without exposing client-specific infrastructure.",
      outcomes: ["99.9% SLA", "Sub-30-minute RTO", "Cross-region backups"],
    },
    {
      title: "Observability Platform",
      focus: "Monitoring and incident response",
      description:
        "Built Prometheus, Alertmanager, Grafana, Loki, Fluent Bit, and custom exporter coverage across hosts, containers, applications, and infrastructure health signals.",
      outcomes: ["100+ hosts", "200+ containers", "15+ dashboards"],
    },
    {
      title: "CI/CD Automation with DevSecOps Gates",
      focus: "Delivery automation",
      description:
        "Implemented build-test-deploy pipelines across Jenkins, GitLab CI, and GitHub Actions with Grype-based vulnerability gates and safer deployment workflows.",
      outcomes: [
        "Multiple daily releases",
        "20+ services",
        "90% exposure reduction",
      ],
    },
    {
      title: "Cloud Cost Optimization / FinOps",
      focus: "Cost-aware operations",
      description:
        "Reviewed cloud usage, eliminated waste, optimized resources, and connected operational choices to measurable infrastructure cost reduction.",
      outcomes: ["25% spend reduction", "Usage review", "Operational cleanup"],
    },
    {
      title: "Identity & SSO Foundations",
      focus: "IAM and access control",
      description:
        "Worked with Keycloak, LDAP, SAML/OIDC, access patterns, service ownership, and auditability for internal and application-facing identity workflows.",
      outcomes: ["Keycloak", "LDAP", "SAML/OIDC"],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "GitHub-backed projects, tools, and platform ideas. I prioritize public repositories and mark early-stage work clearly when it is still being prepared.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "avatar.svg",
    description:
      "Based in Samastipur, Bihar, India. Reach out for DevOps, platform engineering, cloud infrastructure, observability, SRE, CI/CD automation, developer tooling, and DevSecOps conversations.",
  },
  blogSection: {
    title: "Learning, Community & Technical Writing",
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
          "A Discord community I run as @crypticani for learners working through DevOps, Linux, cloud, CI/CD, observability, and platform engineering topics.",
        buttonText: "Join Discord",
        href: "https://discord.gg/TSfxKeMZ57",
      },
    ],
    avatar_image_path: "blogs_image.svg",
  },
};

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
  caseStudies,
  projectsHeader,
  contactPageData,
};
