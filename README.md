# mahanyasbaira.vercel.app

Personal portfolio for **Mahanyas Baira** — CS @ Colorado State, ML researcher, systems builder.

Light-first, dark-togglable. Built with the modern React toolchain and hand-written Aceternity-style components (no Aceternity CLI dependency — the effects are local).

## Stack

- **Next.js 15** App Router, React 19, TypeScript (strict)
- **Tailwind CSS 3.4** (`darkMode: 'class'`), CSS variables for theming
- **next-themes** — light default, no system-preference override
- **Framer Motion 11** — scroll-driven hero, macbook tilt, card transforms
- **lucide-react** — iconography
- **Vitest** + `@testing-library/react` — unit tests
- **Playwright** — E2E smoke tests

## Structure

```
app/
  layout.tsx        # Font loading, ThemeProvider, Nav, Footer
  page.tsx          # Section composition
  globals.css       # CSS variables (light + .dark), base resets
components/
  nav.tsx, footer.tsx
  theme/            # theme-provider, theme-toggle
  ui/               # terminal, card-3d, macbook-scroll, beams, dotted-glow, gooey-input, section-heading
  sections/         # hero, about, experience, projects, wins, press, skills, certifications, volunteering, github-live, contact
content/            # typed data modules (single source of truth)
public/images/      # headshot, hackathon photos, cert images
tests/              # vitest unit tests
e2e/                # playwright specs
```

## Content source of truth

Every rendered fact comes from `content/*.ts`. To update work history, skills, certifications, projects, or press, edit the appropriate module — no JSX changes required.

## Development

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck
npm run lint
npm run build
npm run test       # vitest (unit)
npm run test:e2e   # playwright (needs build + start, configured)
```

A `.claude/launch.json` is included so Claude Code can auto-start the dev server.

## Theming

Light is the default. The toggle in the nav switches the `class="dark"` attribute on `<html>`. All colors are defined once in `app/globals.css` as CSS variables (`--bg`, `--fg`, `--primary`, `--accent`, `--border`, …) and consumed via Tailwind arbitrary-value syntax (`bg-[var(--bg-elevated)]`).

## Deployment

Deployed to Vercel at **[mahanyasbaira.vercel.app](https://mahanyasbaira.vercel.app)**.

```bash
vercel --prod
```

Remote image hosts whitelisted in `next.config.mjs`:

- `avatars.githubusercontent.com`
- `github-readme-stats.vercel.app`
- `ghchart.rshah.org`
- `media.licdn.com`

## Credits

GitHub stats cards: [github-readme-stats](https://github.com/anuraghazra/github-readme-stats). Contribution chart: [ghchart.rshah.org](https://ghchart.rshah.org).
