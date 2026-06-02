# Contributing

This is a personal portfolio repository for `crypticani.dev`.

## Scope

Keep changes aligned with the current positioning:

- DevOps engineering
- Full stack engineering where relevant
- Platform engineering, cloud infrastructure, and SRE
- CI/CD, Kubernetes, observability, database HA/DR, cloud migration, cloud cost optimization, DevSecOps, IAM, and practical security concepts

Avoid adding generic template content, inflated claims, fake metrics, fake certifications, or client-sensitive infrastructure details.

## Development Flow

1. Create a feature branch.
2. Keep changes focused and small enough to review.
3. Update `src/portfolio.js` for content changes.
4. Update route/page components only when layout or presentation changes are needed.
5. Run verification before committing:

```bash
npm run build
env CI=true npm test -- --watchAll=false
git diff --check
```

## Content Guidelines

- Do not call Aniket "Senior".
- Keep Go positioned as selected tooling, not primary professional experience.
- Keep The VAPT Handbook under writing/security content, not as a professional client project.
- Use public GitHub projects only when the repository exists, except clearly marked coming-soon items.
- Do not invent companies, dates, metrics, clients, certifications, or production details.

## Secrets

Do not commit `.env`, API keys, GitHub tokens, or private infrastructure details.

Use `.env.example` for local environment variable names.

## Visual Guidelines

- Keep the design recruiter-friendly and readable.
- Use the current dark theme and custom SVG style.
- Keep SVG labels short and separated from shapes/charts.
- Check mobile and desktop layouts after visual edits.
