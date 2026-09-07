# Sunitajesh

Marketing site for Sunitajesh — technology consulting, custom applications,
mobile development, DevOps, and tax and financial advisory.

## Stack

- Next.js (App Router) with Turbopack
- React 19, TypeScript in strict mode
- Tailwind CSS v4, themed through CSS custom properties
- Motion (`motion/react`) for animation, Lenis for smooth scrolling

## Running it

```bash
npm install
npm run dev      # http://localhost:3005
```

```bash
npm run build    # production build
npm start        # serve the build on :3005
npm run lint
```

## Layout

```
src/app/                     routes; one folder per page
src/app/globals.css          design tokens, theming, shared keyframes
src/components/sunitajesh/   sections, grouped by the page that owns them
  shared/                    used by more than one page
  sunita-content.ts          every piece of copy on the site
public/sunitajesh/           images
```

## Conventions

- Copy lives in `sunita-content.ts`, never inline in a component.
- Theming runs on two tokens, `--color-darkgrey` (surface) and `--color-white`
  (ink), which swap under `[data-theme="light"]`. `--color-onprimary` stays white
  in both themes for text sitting on the brand blue.
- Scroll-triggered reveals pass `margin: "-Npx 0px"`. The horizontal inset must
  stay `0`, or short elements near the left edge never enter the observer's box
  on narrow screens and never animate in.
- Pinned, scroll-driven sections size with `svh`, not `vh`. On phones `100vh` is
  the URL-bar-hidden height, so a `100vh` panel is taller than the visible area.

## Before launch

- `STATS` in `sunita-content.ts` holds placeholder figures. Replace them with real
  numbers or remove the section.
- FAQ answers 2–5, the Instagram and LinkedIn URLs, and the case-study copy and
  imagery under `/work` are still placeholders.
- The contact form has no backend; submitting it does nothing.
- The Haffer typeface in `public/sunitajesh/fonts` is a commercial family and
  needs a licence that covers self-hosted web use.
