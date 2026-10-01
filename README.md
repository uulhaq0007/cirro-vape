# Cirro — Vape Hardware Storefront (React)

A single-page storefront for an age-restricted retailer, built in React with original branding,
copy and artwork. Front-end only — no backend, no cart persistence, no payments. All content lives
in [`src/data/shop.js`](src/data/shop.js).

## Stack

| Concern | Choice |
| --- | --- |
| Build | Vite 8 |
| UI | React 19 |
| Styling | Tailwind CSS 3.4 + a component layer in `src/index.css` |
| Icons | Hand-authored SVG set (`ShopIcon.jsx`) plus `react-icons` for social glyphs |
| Fonts | Barlow Condensed (display) + Barlow (body), via Google Fonts |
| Routing | None — single page with smooth-scroll anchor navigation |

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # emits dist/
npm run preview  # serve the production build
```

## Sections

`#home` hero · service strip · about + counters · `#categories` masonry grid ·
`#featured` product spotlight with spec bars + product grid · `#guide` buying guide ·
testimonials · `#journal` maintenance notes · team · `#contact` form · footer

## Compliance decisions

This is an age-restricted category, so three things are deliberate rather than decorative:

1. **Age gate** (`AgeGate.jsx`) blocks the page on first visit, locks body scroll, and offers a
   real decline path. The result is held in `sessionStorage` only — no cookie, no tracking — and
   every read/write is wrapped in `try/catch` so private-browsing mode degrades to asking again.
2. **No health, cessation or comparative claims anywhere.** The source layout had a
   "Vaping VS Smoking" slot; that is regulated speech in most jurisdictions, so this build uses a
   neutral **"How To Choose A Device"** buying guide in the same position. If you have legal
   sign-off for comparative copy, that is the component to replace.
3. **No flavour marketing.** Products are named and described by hardware function only —
   resistance, capacity, format. Flavour-forward naming is the mechanism regulators scrutinise most
   closely for youth appeal, so it is left out entirely.

Nicotine warnings appear in the age gate, the hero, the product grid, the guide and the footer.
Check the exact wording against your own jurisdiction before going live — the text here is
illustrative, not legal advice.

## Product artwork

Vape photography could not be sourced without using real manufacturers' products (Unsplash, Pexels
and Openverse were unavailable, and the freely-licensed pool is almost entirely branded devices or
public-health material). Putting real branded hardware into a fictional shop's catalogue would be
both a trademark problem and a misrepresentation.

So hardware is **illustrated instead**, in [`DeviceArt.jsx`](src/components/ui/DeviceArt.jsx) —
eight vector silhouettes (`mod`, `pod`, `tank`, `coil`, `case`, `dock`, `tool`, `bottle`) drawn for
this project. No real brand or model is depicted. Swap in your own photography by replacing
`<DeviceArt>` with an `<img>` in `Featured.jsx` and `Hero.jsx`.

## Editing content

`src/data/shop.js` drives the page — shop details, minimum age, categories, products, guide steps,
testimonials, posts and team. Changing `shop.minimumAge` updates the age gate, header badge, hero
notice and all footer warnings at once.

Palette lives in [`tailwind.config.js`](tailwind.config.js): `ember` (#fd6c03), `coal` surfaces
(`DEFAULT` / `deep` / `card` / `line`) and `smoke` body text.

## Interaction notes

- **Header** — transparent over the hero, solid past 80px, with the active nav item derived from
  live section positions so it tracks manual scrolling.
- **Spec bars and counters** animate on scroll into view, respecting `prefers-reduced-motion`.
- **Testimonials** autoplay with pause-on-hover, arrows and dots.
- **Contact form** validates client-side and confirms locally. Nothing is transmitted.
- **Reveals** — `useInView` adds `.is-visible` and checks the element rect on mount, so an anchor
  jump can never strand a section at `opacity: 0`.

## Images

Six portrait photographs (testimonials and team) come from [Unsplash](https://unsplash.com) under
the Unsplash Licence, stored locally. They depict models, not real customers or staff — replace
them before the site represents an actual business. Everything else on the page is drawn in code.
