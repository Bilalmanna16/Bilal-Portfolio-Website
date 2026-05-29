# Mohammed Bilal Portfolio

Premium personal portfolio for a product-focused full-stack engineer.

## Stack

- Next.js 15 App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- next-themes
- lucide-react

## Architecture

```txt
src/
  app/              Next.js routes, metadata, SEO routes
  components/
    sections/       Portfolio page experience
    ui/             Reusable UI primitives
    layout/         Reserved for future layout components
    systems/        Reserved for future interactive system demos
  config/           Site identity, URLs, metadata config
  data/             Portfolio content and project data
  hooks/            Reserved for reusable hooks
  lib/              Utilities and motion primitives
  styles/           Global CSS and visual system
  types/            Shared TypeScript types
```

## Commands

```bash
npm run dev
npm run build
npm run lint
npx tsc --noEmit --incremental false
```

## Updating Content

Most portfolio content lives in `src/data/portfolio.ts`.
Site identity, social links, SEO defaults, and canonical URL live in `src/config/site.ts`.
