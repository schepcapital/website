# Schep Capital — website

Marketing site for Schep Capital, built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com).

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Stack

- **Astro 7** — static output, ships ~zero JS (the only client script is the Home/Founder tab toggle, inlined into the page).
- **Tailwind CSS 4** — via the `@tailwindcss/vite` plugin; design tokens (accent, fonts) live in `src/styles/global.css`.
- Fonts: IBM Plex Sans / IBM Plex Mono (Google Fonts).

## Structure

- `src/pages/index.astro` — the single page (Home + Founder panels). Strategy data is the `strategies` array in its frontmatter.
- `src/layouts/Layout.astro` — `<head>`, fonts, global styles.
- `src/assets/logo.webp` — brand logo (auto-optimized by Astro).
- `public/CNAME` — custom domain (`schepcapital.com`).

## Deploy

Pushing to `main` triggers `.github/workflows/gh-pages.yml`, which builds and publishes `dist/` to the `gh-pages` branch with the `schepcapital.com` CNAME.
