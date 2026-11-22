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

- **Astro 7** — static pages with a small client-side theme control.
- **Tailwind CSS 4** — via the `@tailwindcss/vite` plugin, with Hydra’s palette and semantic tokens in `src/styles/`.
- Fonts: self-hosted Inter Variable and JetBrains Mono Variable.

## Structure

- `src/pages/` — Home, About and Founder.
- `src/layouts/Layout.astro` — shared navigation, page metadata and theme setup.
- `src/assets/photo.jpg` — founder portrait, optimized by Astro at build time.
- `public/CNAME` — custom domain (`schepcapital.com`).

## Deploy

Pushing to `main` triggers `.github/workflows/gh-pages.yml`, which builds and publishes `dist/` to the `gh-pages` branch with the `schepcapital.com` CNAME.
