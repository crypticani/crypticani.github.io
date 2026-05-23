#!/usr/bin/env python3
"""Generate ATS-safe DOCX resume for Aniket Kumar - Final version."""

from docx import Document
from docx.shared import Pt, Inches, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.oxml.ns import qn
from docx.oxml import OxmlElement
import os

OUTPUT = "/home/crypticani/projects/crypticani/crypticani.github.io/public/files/Aniket_Kumar_DevOps_Resume_ATS_Final_v2.docx"

doc = Document()

# --- Page setup ---
for section in doc.sections:
    section.top_margin = Inches(0.5)
    section.bottom_margin = Inches(0.5)
    section.left_margin = Inches(0.55)
    section.right_margin = Inches(0.55)
    section.page_height = Inches(11)
    section.page_width = Inches(8.5)

style = doc.styles['Normal']
font = style.font
font.name = 'Calibri'
font.size = Pt(10.5)
font.color.rgb = RGBColor(0x1a, 0x1a, 0x1a)
pf = style.paragraph_format
pf.space_before = Pt(0)
pf.space_after = Pt(0)
pf.line_spacing = Pt(13)


def add_heading_line(doc, text):
    """Add a section heading with bottom border."""
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(6)
    p.paragraph_format.space_after = Pt(3)
    run = p.add_run(text.upper())
    run.bold = True
    run.font.size = Pt(10.5)
    run.font.color.rgb = RGBColor(0x1b, 0x3a, 0x5c)
    run.font.name = 'Calibri'
    # Add bottom border
    pPr = p._p.get_or_add_pPr()
    pBdr = OxmlElement('w:pBdr')
    bottom = OxmlElement('w:bottom')
    bottom.set(qn('w:val'), 'single')
    bottom.set(qn('w:sz'), '6')
    bottom.set(qn('w:space'), '1')
    bottom.set(qn('w:color'), '1B3A5C')
    pBdr.append(bottom)
    pPr.append(pBdr)
    return p


def add_body(doc, text, size=Pt(10), bold=False, space_after=Pt(0)):
    p = doc.add_paragraph()
    p.paragraph_format.space_after = space_after
    run = p.add_run(text)
    run.font.size = size
    run.font.name = 'Calibri'
    run.bold = bold
    return p


def add_bullet(doc, text, size=Pt(10)):
    p = doc.add_paragraph(style='List Bullet')
    p.clear()
    p.paragraph_format.space_before = Pt(0)
    p.paragraph_format.space_after = Pt(1)
    p.paragraph_format.line_spacing = Pt(12.5)
    p.paragraph_format.left_indent = Inches(0.25)
    run = p.add_run(text)
    run.font.size = size
    run.font.name = 'Calibri'
    return p


def add_skill_line(doc, label, value):
    p = doc.add_paragraph()
    p.paragraph_format.space_after = Pt(1)
    p.paragraph_format.line_spacing = Pt(12.5)
    run_label = p.add_run(label)
    run_label.bold = True
    run_label.font.size = Pt(10)
    run_label.font.name = 'Calibri'
    run_val = p.add_run(" " + value)
    run_val.font.size = Pt(10)
    run_val.font.name = 'Calibri'
    return p


def add_job_header(doc, title, dates):
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(3)
    p.paragraph_format.space_after = Pt(0)
    run_title = p.add_run(title)
    run_title.bold = True
    run_title.font.size = Pt(10.5)
    run_title.font.name = 'Calibri'
    # Add tab stop for right-aligned date
    tab_stops = p.paragraph_format.tab_stops
    tab_stops.add_tab_stop(Inches(7.4), alignment=2)  # RIGHT
    run_tab = p.add_run('\t')
    run_date = p.add_run(dates)
    run_date.font.size = Pt(9.5)
    run_date.font.color.rgb = RGBColor(0x44, 0x44, 0x44)
    run_date.font.name = 'Calibri'
    return p


def add_inline_labeled(doc, label, text, size=Pt(9.5), space_after=Pt(1)):
    """Add a paragraph with bold label followed by normal text - single column."""
    p = doc.add_paragraph()
    p.paragraph_format.space_after = space_after
    p.paragraph_format.line_spacing = Pt(12.5)
    run_label = p.add_run(label)
    run_label.bold = True
    run_label.font.size = size
    run_label.font.name = 'Calibri'
    run_text = p.add_run(" " + text)
    run_text.font.size = size
    run_text.font.name = 'Calibri'
    return p


# ========== HEADER ==========
name = doc.add_paragraph()
name.alignment = WD_ALIGN_PARAGRAPH.CENTER
name.paragraph_format.space_after = Pt(1)
run = name.add_run("Aniket Kumar")
run.bold = True
run.font.size = Pt(18)
run.font.name = 'Calibri'

subtitle = doc.add_paragraph()
subtitle.alignment = WD_ALIGN_PARAGRAPH.CENTER
subtitle.paragraph_format.space_after = Pt(1)
run = subtitle.add_run("DevOps Engineer  |  Platform Engineering  |  Cloud Infrastructure  |  SRE")
run.font.size = Pt(10)
run.font.color.rgb = RGBColor(0x33, 0x33, 0x33)
run.font.name = 'Calibri'

contact = doc.add_paragraph()
contact.alignment = WD_ALIGN_PARAGRAPH.CENTER
contact.paragraph_format.space_after = Pt(4)
run = contact.add_run(
    "Samastipur, Bihar, India  \u2022  +91 9939093867  \u2022  aniket.kumar@hotmail.com  \u2022  "
    "linkedin.com/in/crypticani  \u2022  github.com/crypticani  \u2022  crypticani.dev"
)
run.font.size = Pt(9)
run.font.color.rgb = RGBColor(0x44, 0x44, 0x44)
run.font.name = 'Calibri'

# ========== PROFESSIONAL SUMMARY ==========
add_heading_line(doc, "Professional Summary")
add_body(doc,
    "DevOps Engineer with 3+ years of experience building high-availability infrastructure, CI/CD automation, "
    "Kubernetes workloads, observability platforms, and database HA/DR systems across cloud and on-prem "
    "environments. Strong background in production operations, team leadership, cloud cost optimization, "
    "and DevSecOps practices including container vulnerability scanning.",
    size=Pt(10), space_after=Pt(0))

# ========== TECHNICAL SKILLS ==========
add_heading_line(doc, "Technical Skills")
add_skill_line(doc, "Cloud & Infrastructure:", "OCI, AWS, GCP, Linux, Nginx, Load Balancing, DNS, HA Architecture, Disaster Recovery, FinOps")
add_skill_line(doc, "Containers & CI/CD:", "Docker, Kubernetes, Docker Compose, Jenkins, GitLab CI, GitHub Actions, Grype")
add_skill_line(doc, "Observability & Databases:", "Prometheus, Grafana, Loki, Alertmanager, PromQL, PostgreSQL, MySQL, MongoDB, Redis, KeyDB, ClickHouse")
add_skill_line(doc, "Security, IAM & Programming:", "Keycloak, LDAP, SAML/OIDC, DevSecOps, Burp Suite, VAPT Fundamentals, Python, Bash, Go, Django/DRF, Ansible, Git")

# ========== PROFESSIONAL EXPERIENCE ==========
add_heading_line(doc, "Professional Experience")

add_job_header(doc, "DevOps Engineer \u2014 KocharTech", "Jun 2023 \u2013 Present")
loc = doc.add_paragraph()
loc.paragraph_format.space_after = Pt(1)
run = loc.add_run("Amritsar, India")
run.font.size = Pt(9.5)
run.font.color.rgb = RGBColor(0x55, 0x55, 0x55)
run.font.name = 'Calibri'

add_bullet(doc, "Owned HA infrastructure, CI/CD, observability, and cloud operations for 15+ production apps, sustaining 99.9% uptime SLA across all client deployments.")
add_bullet(doc, "Led a team of 8 engineers/interns; introduced code reviews, runbooks, incident practices, and on-call rotation, reducing MTTR by 40%.")
add_bullet(doc, "Built Jenkins, GitLab CI, and GitHub Actions pipelines for automated build-test-deploy workflows, increasing release cadence from bi-weekly to multiple daily deployments.")
add_bullet(doc, "Containerized 20+ services with multi-stage Dockerfiles; managed Kubernetes workloads with rolling updates and zero-downtime releases, reducing image size by 60%.")
add_bullet(doc, "Integrated Grype-based container vulnerability scanning into CI/CD gates, enforcing security policies and reducing production vulnerability exposure by 90%.")
add_bullet(doc, "Designed HA data platforms: PostgreSQL + Patroni, MySQL Group Replication, MongoDB Replica Sets, ClickHouse, Redis Sentinel, and KeyDB with backup, PITR, and failover runbooks.")
add_bullet(doc, "Implemented DR automation with snapshots, cross-region backup replication, and recovery runbooks, achieving sub-30-minute RTO; optimized cloud spend by 25% via rightsizing and reserved capacity.")

add_job_header(doc, "IT Intern \u2014 KocharTech", "Jun 2022 \u2013 May 2023")
loc2 = doc.add_paragraph()
loc2.paragraph_format.space_after = Pt(1)
run2 = loc2.add_run("Amritsar, India")
run2.font.size = Pt(9.5)
run2.font.color.rgb = RGBColor(0x55, 0x55, 0x55)
run2.font.name = 'Calibri'

add_bullet(doc, "Built the organization's observability stack from scratch using Prometheus, Alertmanager, Grafana, Loki, and Fluent Bit across 100+ hosts and 200+ containers.")
add_bullet(doc, "Developed Python exporters and 15+ Grafana dashboards with PromQL panels for infrastructure health, application performance, and alerting.")
add_bullet(doc, "Automated Linux home-directory backups to AWS S3 and built a Django + MQTT device management portal for 50+ devices.")

add_job_header(doc, "Full Stack Development Intern \u2014 TheCodeWork", "Jun 2021 \u2013 Oct 2021")
add_bullet(doc, "Developed Django/DRF backend APIs and VueJS/TailwindCSS interfaces for a no-code application platform.")

# ========== CERTIFICATIONS & EDUCATION (single-column inline) ==========
add_heading_line(doc, "Certifications & Education")

add_inline_labeled(doc, "Certifications:",
    "Oracle Cloud Infrastructure 2025 Certified Architect Associate; "
    "Cloud Architecture \u2013 Google Cloud Skills Boost; "
    "Google IT Automation with Python \u2013 Coursera; "
    "Foundations of Project Management \u2013 Coursera",
    size=Pt(9.5), space_after=Pt(1))

add_inline_labeled(doc, "Education:",
    "MCA, Lovely Professional University, Punjab, 2021\u20132023, CGPA 8.97; "
    "BCA, Dev Sanskriti Vishwavidyalaya, Haridwar, 2018\u20132021, CGPA 8.0, Academic Excellence Award",
    size=Pt(9.5), space_after=Pt(0))

os.makedirs(os.path.dirname(OUTPUT), exist_ok=True)
doc.save(OUTPUT)
print(f"DOCX saved to: {OUTPUT}")
