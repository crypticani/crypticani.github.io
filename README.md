# crypticani.dev

Portfolio website for Aniket Kumar (`crypticani`), focused on DevOps, platform engineering, cloud infrastructure, SRE, full stack engineering, and practical application security.

Live site: https://crypticani.dev

## Current Positioning

- DevOps Engineer and Full Stack Engineer
- Platform Engineering, Cloud Infrastructure, and SRE
- High-availability infrastructure, CI/CD automation, Kubernetes, observability, database HA/DR, FinOps, DevSecOps, IAM, and VAPT fundamentals
- Public work includes `qurli`, technical handbooks, GitHub-backed projects, and CloudPulse marked as coming soon

## Tech Stack

- React 16 and Create React App
- React Router
- React Helmet for page metadata
- Iconify and Font Awesome for skill/social icons
- Custom code-native SVG illustrations
- GitHub Pages compatible SPA routing

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

- `settings`: splash screen behavior
- `seo`: title, description, keywords, and Open Graph basics
- `greeting`: hero copy, resume link, social/profile links
- `proofPoints`: quick recruiter-facing metrics
- `socialMediaLinks`: GitHub, LinkedIn, email, Discord
- `skills`: capability cards, grouped skill sections, and skill icons
- `degrees`: education
- `certifications`: certification cards
- `experience`: work and internship history
- `caseStudies`: anonymized infrastructure case studies
- `projectsHeader` and `src/shared/opensource/projects.json`: projects page
- `contactPageData`: contact, writing, handbooks, blog, and Discord community links

## Resume

The live resume link points to:

```text
public/files/Aniket_Kumar_DevOps_Resume.pdf
```

Update `resumePath` in `src/portfolio.js` if the filename changes.

## Illustrations

The old template illustrations have been replaced with custom React SVG components aligned to the current portfolio content.

Main illustration components:

- `src/containers/greeting/PlatformHeroIllustration.js`
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

## Local Development

Install dependencies:

```bash
npm install
```

Run locally:

```bash
PORT=3002 npm start
```

Build production assets:

```bash
npm run build
```

Run tests:

```bash
env CI=true npm test -- --watchAll=false
```

Check whitespace issues before committing:

```bash
git diff --check
```

## GitHub/Open Source Data

The projects page currently uses curated static data in:

```text
src/shared/opensource/projects.json
```

The repository still contains `git_data_fetcher.mjs` from the original template for refreshing GitHub GraphQL data into `src/shared/opensource/*.json`. Use it only when intentionally replacing the static GitHub data.

Create a local `.env` from `.env.example` before running the fetcher:

```bash
cp .env.example .env
```

Required values:

```text
GITHUB_TOKEN=your_token
GITHUB_USERNAME=crypticani
```

Do not commit `.env` or real tokens.

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

Deployment script:

```bash
npm run deploy
```

## Verification Checklist

Before pushing:

```bash
npm run build
env CI=true npm test -- --watchAll=false
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
