# crypticani.dev

Portfolio website for Aniket Kumar (`crypticani`), focused on DevOps, platform engineering, cloud infrastructure, SRE, full stack engineering, and practical application security.

Live site: https://crypticani.dev

## Current Positioning

- Linux-first DevOps Engineer with full-stack engineering roots
- Platform Engineering, Cloud Infrastructure, and SRE
- Linux, containers, networking, high-availability infrastructure, cloud migration, CI/CD automation, Kubernetes, observability, database HA/DR, cloud cost optimization, DevSecOps, IAM, and practical application security
- Public work is grouped into featured platform/terminal tools, handbooks and technical writing, and earlier developer work

## Tech Stack

- React 18 and Vite
- React Router v6
- React Helmet for page metadata
- Custom IntersectionObserver reveal shim (`src/lib/reveal`, aliased as
  `react-reveal`)
- Iconify and Font Awesome for skill/social icons
- Custom code-native SVG illustrations
- GitHub Pages compatible SPA routing
- Vitest for tests

## Project Structure

```text
public/
  files/
    Aniket_Kumar_DevOps_Resume.pdf
  icons/
  index.html
  manifest.json
src/
  containers/
    caseStudies/
    greeting/
    profileTerminal/
    proofBar/
    skills/
  pages/
    contact/
    education/
    experience/
    projects/
  shared/
    opensource/
  portfolio.js
  theme.js
```

## Content Sources

Most portfolio content is configured in `src/portfolio.js`.

Key sections:

- `settings`: splash screen behavior (`isSplash: true` plays a Linux kernel-boot
  loading animation in `src/pages/splash/` on first visit per session —
  skippable with any key/click, honors `prefers-reduced-motion`)
- `seo`: title, description, keywords, and Open Graph basics
- `greeting`: hero copy, resume link, social/profile links
- `proofPoints`: quick recruiter-facing metrics
- `socialMediaLinks`: GitHub, LinkedIn, email, Discord
- `skills`: skill-depth matrix, capability cards, grouped skill sections, and skill icons
- `degrees`: education
- `certifications`: certification cards
- `experience`: work and internship history
- `caseStudies`: anonymized platform stories with problem, build, and outcome framing
- `projectsHeader` and `src/shared/opensource/projects.json`: grouped projects page data
- `contactPageData`: contact, writing, handbooks, blog, and Discord community links

## Resume

The live resume link points to:

```text
public/files/Aniket_Kumar_DevOps_Resume.pdf
```

Update `resumePath` in `src/portfolio.js` if the filename changes.

## Illustrations

The old template illustrations have been replaced with custom React SVG components aligned to the current portfolio content.

The home hero uses a "Control Plane" cluster status panel
(`src/containers/greeting/ClusterStatusPanel.js`) instead of an illustration;
`PlatformHeroIllustration.js` is kept but currently unused.

Main illustration components:

- `src/containers/greeting/PlatformHeroIllustration.js` (unused)
- `src/containers/profileTerminal/ProfileTerminal.js`
- `src/containers/skills/CloudInfrastructureIllustration.js`
- `src/containers/skills/DeliveryPipelineIllustration.js`
- `src/containers/skills/ObservabilityIllustration.js`
- `src/containers/skills/DataPlatformHaIllustration.js`
- `src/containers/skills/SecurityIamIllustration.js`
- `src/containers/skills/VaptSecurityIllustration.js`
- `src/containers/skills/DevelopmentAutomationIllustration.js`
- `src/pages/projects/ProjectPortfolioIllustration.js`
- `src/pages/experience/PlatformExperienceIllustration.js`
- `src/pages/education/EducationCredentialIllustration.js`
- `src/pages/contact/ContactChannelsIllustration.js`
- `src/pages/contact/TechnicalWritingIllustration.js`

When changing SVGs, keep labels short and avoid placing text on top of graphics. Build and visually check the page after changes.

## Interactive Terminal

The home page includes a reusable terminal-style profile component at:

```text
src/containers/profileTerminal/ProfileTerminal.js
```

Supported commands:

```text
help
whoami
ls
cat about.txt
ls skills/
ls projects/
cat projects/qurli
contact
resume
history
sudo hire-me
clear
```

The terminal is intentionally additive. Important recruiter information must also remain available in regular page sections, links, and resume content.

## Local Development

Install dependencies:

```bash
npm install
```

Run locally (Vite dev server):

```bash
npm run dev
```

Build production assets (outputs to `build/`):

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run tests:

```bash
npm test
```

Check whitespace issues before committing:

```bash
git diff --check
```

## Projects Data

The projects page uses curated static data in:

```text
src/shared/opensource/projects.json
```

Project cards are grouped by `category`:

```text
featured
writing
earlier
```

## Deployment

The app is configured for:

```text
https://crypticani.dev
```

Relevant files:

- `package.json`: `homepage`
- `public/CNAME`: custom domain
- `public/index.html`: SEO, Open Graph, icons, SPA redirect handling
- `public/404.html`: GitHub Pages SPA fallback

Deployment is automated: pushing to `master` triggers
`.github/workflows/deploy.yml`, which tests, builds, and publishes `build/`
to the `gh-pages` branch.

## Verification Checklist

Before pushing:

```bash
npm run build
npm test
git diff --check
```

For visual changes, also run the dev server and check:

- `/`
- `/education`
- `/experience`
- `/projects`
- `/contact`

## License

This repository keeps the original MIT license from the portfolio template. See `LICENSE`.
