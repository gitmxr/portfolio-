# Portfolio recreation — mrmadhukar.in style

Recreate the reference portfolio's design language and structure as your own site. No code has been written yet; this plan is for approval only.

## Design system

- Warm paper palette: cream background, deep charcoal text, single burnt-orange accent, soft peach decorative tints. Light + dark theme with a toggle.
- Typography trio: condensed bold display for headings, serif italic for accent words, neutral grotesque for body/nav (closest Google Font matches).
- Large radii (pill nav/buttons, rounded cards), diffused shadows, faint radial hero glow, decorative line-art SVGs bleeding off page edges, oversized ghost watermark text.
- All values as semantic tokens in `src/styles.css` — no hardcoded colors in components.

## Sections (single-page with anchors)

1. Floating pill navbar — logo, anchor links, theme toggle, "Let's Talk" CTA, scroll-spy active state, mobile sheet menu
2. Hero — status pill, split headline with italic accent words, typewriter role line, paragraph, two CTAs, portrait card, decorative leaves/coffee art, watermark
3. Featured Projects — cards with image, year, title, subtitle, description, tech chips with "+N more", demo/code/case-study links
4. Services — numbered 01–04 grid
5. About & Vision — pull quote, bio paragraphs, image, animated stat counters
6. Technical Stack — categorized skill groups with chips
7. Education / Experience timeline
8. Resume — download + inline PDF preview
9. Contact — form + social links
10. Footer

## Interactions

Scroll-reveal fade/slide per section, hover lift + image zoom on cards, nav underline/dot, button arrow slide, count-up stats, smooth anchor scrolling, theme transition. Implemented with Motion for React.

## Responsive

Desktop centered ~1280px grid; tablet collapses to 2-up grids and stacked hero; mobile single column, hamburger menu, reduced decorative art.

## Technical notes

- TanStack Start + React + Tailwind v4; Motion for animation; lucide-react icons.
- Project case studies as child routes under `/projects/$slug` if you want them.
- Decorative SVGs and photos: generated placeholders unless you supply assets.
- Contact form submissions and any blog CMS require Lovable Cloud — say the word and I'll include it.
- Per-route `head()` metadata for SEO.

## Content needed from you

Your name/logo wording, bio, project list, skills, education, resume PDF, photo, social links. I'll ship realistic placeholder content where missing.
