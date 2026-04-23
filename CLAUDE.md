# Portfolio — Serge Mezui

## Project Goal
Personal developer portfolio for Serge Mezui — a single-page app with multilingual support (EN/FR, Mandarin planned) showcasing services, skills, projects, work history, and contact info. Includes a blog section.

## Repository Structure
```
/                   Next.js portfolio (working branch — reference implementation)
tanstack/           TanStack Start portfolio (active development target)
locales/lang/       Source of truth for all translations (en.ts, fr.ts)
public/images/      Project screenshots and company logos
public/resume/      Resume PDFs (en-resume.pdf, fr-resume.pdf)
```

## TanStack App (`tanstack/`)

### Tech Stack
| Concern | Choice |
|---|---|
| Framework | TanStack Start (Vite + React 19) |
| Router | TanStack Router (file-based, `{-$locale}` pattern) |
| i18n | intlayer + react-intlayer |
| Styling | Tailwind CSS v4 + tw-animate-css |
| Animations | framer-motion |
| UI Primitives | Radix UI + shadcn/ui components |
| Linting/Formatting | Biome |
| Testing | Vitest + Testing Library |

### Routing Convention
Routes live under `src/routes/{-$locale}/`. The `{-$locale}` segment is an optional path param handled by intlayer — `/` redirects to `/en/`, `/fr/` switches locale.

Key routes:
- `/{-$locale}/` — main page (all sections)
- `/{-$locale}/cv` — redirects to PDF resume
- `/{-$locale}/blog` — blog post list
- `/{-$locale}/blog/$slug` — blog post detail

### i18n with intlayer
Content dictionaries live in `src/contents/`. Each file exports a `Dictionary` satisfying object:
```ts
import type { Dictionary } from 'intlayer';
import { t } from 'intlayer';

const content = {
  key: 'section-name',
  content: { ... }
} satisfies Dictionary;
export default content;
```

In components, use the `useIntlayer('key')` hook. **Never use `next-international` imports** (`@/locales/server`, `@/locales/client`).

### Color Theme (Purple)
Primary color is purple. Matches Next.js version exactly:
- Light: `hsl(260, 40%, 50%)`
- Dark: `hsl(263.4, 70%, 50.4%)`

Custom color `thirdly` (teal accent): `hsl(160, 75%, 64%)`

### Custom Fonts
- `font-ubuntu` — Ubuntu Regular — body text
- `font-euro-stile` — Eurostile Bold — headings
- `font-europa` — Europa — accent

Font files are in `src/assets/fonts/`.

### Custom Breakpoints
- `tablet` → 840px
- `laptop` → 1024px
- `desktop` → 1280px

Standard sm/md/lg/xl/2xl also available.

### Animations
All scroll-reveal animations use `MotionDiv` and `MotionSpan` wrapper components (`src/components/atom/`). These are thin framer-motion wrappers with `initial={{ opacity: 0, y: 55 }}` → `whileInView={{ opacity: 1, y: 0 }}`.

### Page Sections (rendered in order on index route)
1. `HomeCard` — profile photo, name, bio, CTA buttons
2. `ServiceCard` — 6 services in a grid
3. `SkillCard` — 4 skill categories
4. `ProjectCard` — 5 projects with hover overlays
5. `EnterpriseCard` — carousel of company logos
6. `ContactCard` — phone, email, location, country, resume link

### Image Handling
Use plain `<img>` tags (no next/image). Images are imported as Vite asset modules or referenced from `/public/images/`.

### Blog
Articles are stored as Markdown files in `content/blog/`. Use Vite's `import.meta.glob` to discover them. The `marked` library renders MD to HTML. Each article file should have frontmatter (title, date, excerpt, tags, locale).

### CV Route
Reads locale from route params and redirects to the matching PDF:
- EN: `/resume/en-resume.pdf`
- FR: `/resume/fr-resume.pdf`

### Analytics
Matomo analytics — `src/lib/matomo.tsx`. No Vercel-specific analytics.

## Development Commands (from `tanstack/` directory)
```bash
pnpm dev        # Start dev server on :3000
pnpm build      # Build for production
pnpm check      # Biome lint + format check
pnpm test       # Vitest
```

## Skills to Use
- **simplify**: Run after implementing a feature to spot dead code or unnecessary complexity
- **security-review**: Run before shipping to catch XSS, injection, etc.
- **less-permission-prompts**: Configure allowlist to reduce Bash permission prompts

## Key Files
| File | Purpose |
|---|---|
| `tanstack/src/routes/__root.tsx` | HTML shell, metadata, theme, fonts |
| `tanstack/src/routes/{-$locale}/route.tsx` | Layout: Header + Outlet + Footer + Social |
| `tanstack/src/routes/{-$locale}/index.tsx` | Main page — renders all section cards |
| `tanstack/src/contents/app.content.ts` | Nav, footer, meta, lang switcher strings |
| `tanstack/src/styles.css` | Global CSS, theme vars, font faces, container |
| `tanstack/intlayer.config.ts` | Locale list (en, fr) |
| `tanstack/vite.config.ts` | Vite + TanStack Start + intlayer plugins |

## What Is NOT Done Yet
- Blog detail page full markdown rendering
- Mandarin (zh) locale
- Dark mode toggle UI
- OG image generation
- PWA manifest
- Sitemap / robots.txt
