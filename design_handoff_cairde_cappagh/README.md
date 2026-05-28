# Handoff: Cairde Cappagh — Friends of Cappagh (single-page site)

## Overview
A single-page marketing + fundraising site for **Cairde Cappagh**, the fundraising scheme of Killyclogher St Mary's / Cappagh GAA Club. Visitors learn what the scheme is, how it works, where the money goes, and then **join/donate** via a card form. Two giving options: **£20 / month** (recurring subscription) and **£240 once-yearly** (single payment).

## About the design files
The files in this bundle are **design references created in HTML/React-via-Babel** — a working prototype showing the intended look, copy, and behaviour. They are **not** production code to copy directly. The task is to **recreate this design in a Next.js app** using its conventions (App Router, Server Components where sensible, real Stripe integration). The prototype's "Stripe-style" card form is a faithful UI mock with client-side validation only — in the real app it must be replaced with **Stripe Elements / Checkout** (never collect raw card numbers yourself).

## Fidelity
**High-fidelity.** Colours, typography, spacing, motifs, copy, and interactions are final. Recreate the UI pixel-closely. The only deliberate placeholder is the payment integration (wire to live Stripe).

---

## Recommended stack
- **Next.js 14+ (App Router)**, TypeScript
- Styling: the prototype is hand-written CSS with CSS custom properties — port it to **CSS Modules** or **Tailwind** (tokens below map cleanly to either). Keep the CSS-variable token names if using plain CSS/Modules.
- **Stripe**: `stripe` (server) + `@stripe/stripe-js` and `@stripe/react-stripe-js` (client), OR Stripe **Checkout** (hosted) which is simpler and PCI-easiest.
- Fonts: Google Fonts via `next/font/google` — `Marcellus`, `Source Sans 3`, `Cormorant Garamond`, `Mulish`, `Archivo`, `Public Sans`.

---

## Design tokens

### Colours
| Token | Hex | Use |
|---|---|---|
| `--navy` | `#0b2a6e` | primary brand navy |
| `--navy-900` | `#06184a` | darkest navy (hero/footer/impact bg) |
| `--navy-700` | `#123a8a` | hover navy |
| `--blue` | `#1f74e0` | bright accent (rays, focus) |
| `--sky` | `#4aa0f2` | light blue |
| `--gold` | `#c9a23a` | gold accent |
| `--gold-deep` | `#9c7415` | gold text on light bg |
| `--gold-lite` | `#ecd285` | gold on dark bg |
| `--cream` | `#f6f2e8` | alt section bg |
| `--paper` | `#fbf9f3` | page bg |
| `--ink` | `#0e1b3d` | body text |
| `--muted` | `#59618a` | secondary text |
| `--line` | `rgba(11,42,110,0.12)` | hairlines/borders |

Gold gradient (for headings/buttons): `linear-gradient(170deg, #8a6512 0%, #c9a23a 38%, #f3e3a6 52%, #c9a23a 64%, #8a6512 100%)`.

### Typography
Default pairing ("Heritage"): display = **Marcellus** (serif, weight 500/400), body = **Source Sans 3**.
Two alternates exist as a "font pairing" tweak — keep as a theme switch only if useful, otherwise ship the Heritage pairing:
- Editorial: Cormorant Garamond + Mulish
- Modern: Archivo + Public Sans

Scale: h1 `clamp(38px,6vw,76px)`; section title `clamp(30px,4.4vw,50px)`; lead `19px`; body `17px`; eyebrow `12.5px` uppercase letter-spacing `.22em`; line-height body `1.6`, headings `1.08`.

### Spacing / shape
- Content max-width `1160px`, side padding `28px`.
- Section vertical padding `100px` (`.band`).
- Radius: cards `4–12px`, buttons `2px`, chips/pills `100px`.
- Button: padding `15px 30px`, uppercase, weight 700, letter-spacing `.06em`.
- Shadow (cards): `0 30px 70px -40px rgba(11,42,110,.5)`.

### Signature motif — "the rays"
The crest's radiating rays are recreated as a CSS sunburst (echoes the logo). Reuse as a class:
```css
.rays {
  position: absolute; inset: 0; pointer-events: none;
  background: repeating-conic-gradient(
    from 212deg at 50% 128%,
    var(--gold) 0deg 0.5deg, var(--blue) 0.5deg 5deg,
    var(--gold) 5deg 5.5deg, var(--navy-900) 5.5deg 10deg
  );
}
```
Opacity per context: hero `.5`, impact band `.14`, feature card `.2`, footer `.1`.

---

## Sections (in order)
1. **Sticky nav** — crest (shield) + wordmark left; links (About, How it works, Your impact, Our Club, FAQ); gold "Join the Scheme" CTA right. Gains a translucent blurred background + shrinks after 30px scroll.
2. **Hero** — three layout variants behind a tweak (`centered`, `split`, `banner`); ship **split** as default. Navy-900 bg + `.rays` + radial/linear vignette. Gold italic Irish motto *"Ní neart go cur le chéile"* + English subtitle *"There is no strength without unity"*, h1 "Build the future of Cappagh GAA.", sub-paragraph, two CTAs (gold "Become a Friend" → `#join`, ghost "Read our story" → `#about`), and a two-item stat row (**£20 per month**, **100% to club development**). Split variant shows the crest shield to the right.
3. **What is Cairde Cappagh** (cream bg) — 2-col: left eyebrow + title + gold-rule pull-quote ("Cairde Cappagh is the latest fundraising effort by Killyclogher St Mary's / Cappagh GAA Club."); right 3 paragraphs.
4. **How it works** (paper bg) — centered title + 3 numbered step cards (01 Choose your support / 02 Every penny goes to the Club / 03 Wear it with pride), hover lift.
5. **Where the money goes** (navy-900 + subtle rays) — title + lead, then a 4-cell grid (Coaching / Facilities / Development / The Future) with circular gold icon, separated by hairlines.
6. **What we do** (cream bg) — title + lead, code chips (Football, Ladies Football, Hurling, Handball, Scór), then 2-col: left a 4-item fact list (U8→Adult, four codes, Scór success, schools partnership); right a navy "feature card" highlighting **The Covered Ball Wall**.
7. **FAQ** (paper bg) — centered title + accordion (one open at a time, animated max-height, +/- gold icon). 4 Q&As (see copy below).
8. **Donate / Join** (cream bg) — centered title + lead, 2-col: left a "why join" list (4 ticked perks); right the **checkout card** (see Stripe section).
9. **Footer** (navy-900 + rays) — full crest, motto, two link columns, copyright line with the Irish club name.

### Exact copy
All section/FAQ/step copy lives in `sections.jsx` and `donate.jsx` — copy verbatim from there (it's drawn faithfully from the club brochure). Don't paraphrase.

---

## Interactions & behaviour
- **Nav scroll state**: `window.scrollY > 30` toggles `.scrolled` (bg blur + reduced padding).
- **Reveal on scroll**: elements with `.reveal` fade/translate up via IntersectionObserver (threshold 0.12), add `.in` once. In Next, use a small client component/hook.
- **FAQ accordion**: single-open, animated `max-height`.
- **Hero layout**: prototype exposes centered/split/banner via a tweak panel. In production this can be dropped — ship `split`. (If you keep a switch, it's purely presentational.)
- **Smooth anchor scrolling** between sections via `#id` hrefs.

---

## Stripe integration (replace the mock form)

The prototype's checkout (`donate.jsx`) is **UI + client validation only**. Implement for real:

**Plan model**
- Monthly: a Stripe **Price** with `recurring.interval = month`, £20 GBP → use a **Subscription**.
- Yearly: a one-time **Price** £240 GBP (or recurring `interval=year` if you'd rather it auto-renew — confirm with the club) → use a one-off **PaymentIntent**.

**Simplest robust approach — Stripe Checkout (hosted):**
1. Server route `app/api/checkout/route.ts` (Route Handler) creates a `stripe.checkout.sessions.create({ mode: plan==='monthly' ? 'subscription' : 'payment', line_items: [{ price, quantity: 1 }], success_url, cancel_url, customer_email })`.
2. Client posts the selected plan + email, then `window.location = session.url`.
3. Handle fulfilment in a **webhook** (`app/api/stripe/webhook/route.ts`) on `checkout.session.completed` — send the confirmation email / record the member. The prototype's success state maps to `success_url`.

**Or keep the on-page card UI — Stripe Elements / Payment Element:**
1. Server creates a `PaymentIntent` (yearly) or `SetupIntent`+`Subscription` (monthly) and returns `client_secret`.
2. Client mounts `<PaymentElement/>` inside the styled checkout card (match the design: rounded 12px white card, navy focus ring `0 0 0 3px rgba(31,116,224,.14)`, gold pay button). Confirm with `stripe.confirmPayment`.
3. Validation/brand detection is handled natively by Elements — drop the prototype's `luhn`/`cardBrand` helpers.

**Env vars**: `STRIPE_SECRET_KEY`, `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`, `STRIPE_WEBHOOK_SECRET`. Never expose the secret key client-side. **Do not** collect raw PANs in your own inputs in production.

**Gift Aid**: not in this design (client opted out) — the brochure's paper form has a Gift Aid tick box if they later want it.

---

## Assets
- `assets/cc-crest.png` — full crest + "Friends of Cappagh" wordmark, transparent background (derived from the supplied logo). Use in footer.
- `assets/cc-shield.png` — shield only, transparent. Use in nav + split hero.
Put these in `public/` in the Next app. (Source logo: `uploads/cc.jpeg`.)

---

## Files in this bundle
- `Cairde Cappagh.html` — page shell: all global CSS + design tokens + Google Fonts link + script wiring. **Read the `<style>` block for the full, authoritative CSS.**
- `app.jsx` — nav, hero (3 variants), footer, font-pairing logic, assembly.
- `sections.jsx` — WhatIs, HowItWorks, MoneyGoes, WhatWeDo, FAQ + all their copy/data arrays.
- `donate.jsx` — the checkout UI, plan toggle, and the validation helpers to replace with Stripe.
- `tweaks-panel.jsx` — prototype-only tweak panel (do not port; it's a design tool).
- `assets/` — crest PNGs.

A developer should be able to build the whole site from the CSS in the HTML file + the copy/structure in the three JSX files + this README.
