# KCK selected design — browser QA

final result: passed

## Evidence and normalization

- Source visual truth: `public/assets/reference.jpeg` (983 × 1536).
- Implementation: `qa-evidence/kck-desktop-final.jpg`, browser capture of the whole design plus a separate prototype toolbar (589 × 936 pixels).
- Browser viewport: 1363 × 936 CSS pixels. Desktop content: 1363 pixels wide, no horizontal overflow. Full-page capture was automatically reduced to fit; compare at 587-pixel width, preserving both aspect ratios. The extra bottom toolbar is outside the design.
- Full-view comparison: `qa-comparison.jpg`, reference and implementation side by side at equal width.
- Focused product evidence: `qa-evidence/kck-coffee-final.jpg` (1363 × 936), against source poster regions x40–944, y822–1323.
- Focused side-by-side comparison: `qa-focused.jpg`; normalize browser capture to 983 pixels and align reference y740 to the Coffee view's source-equivalent viewport top. Products, labels and controls checked together.
- Mobile evidence: `qa-evidence/kck-mobile-final.jpg`; 390 CSS-pixel content container rendered in the same browser. Not a physical-device / Safari test. Shell scrollWidth equals clientWidth, with no clipping of navigation or headings. Product dialogs measure 350 pixels, client and scroll widths both 335 pixels.
- State: default bilingual page, all products present; dialog and language variants tested separately.

## Comparison history

1. P2: default serif fallback was visibly too narrow in hero and story headings. Fixed with locally packaged Libre Baskerville and matched display sizing. Re-captured and compared in `qa-comparison.jpg`; major title wrapping, line length, and hierarchy now match.
2. P2: mobile hero copy sat over bright fog, reducing contrast. Added a modest solid teal image tint and text shadow on the mobile layout. Re-inspected the 390-pixel view; copy remains readable without introducing a new panel.
3. P2: top anchor returned to the title instead of the page top. Moved the top anchor to the hero section. Confirmed scrollY = 0 after clicking the brand.
4. P2: off-screen skip link appeared in a full-page capture artifact. Replaced negative positioning with standard visually hidden clipping; final capture has no visible stray link. Keyboard focus still reveals the link.

## Required fidelity surfaces

- Fonts / typography: packaged serif face, appropriate hierarchy, two-line origin heading; no clipping. Thai UI uses system Thai-capable fallback. English product artwork remains in the source image.
- Spacing / layout: hero → story → 3-column coffee grid → forest footer. Measured source proportions reproduced, with single-column mobile stacking. UI dialogs are intentional additions for primary interactions.
- Colors / tokens: dark teal, cream, warm gold story CTA and teal details CTAs. Adequate control and mobile title contrast; visible focus rings.
- Image fidelity: source posters, embroidery, small ornaments, branch, and forest footer are retained image assets, not custom CSS / SVG drawings. Hero/story use inspected imagegen reconstructions. No product-image placeholders remain.
- Copy / content: exact supplied headline, slogan, process names and image text preserved. No prices, reviews, performance metrics or business claims added. New text is limited to interaction labels and explicit prototype status.

## Primary interactions verified

- Story and Coffee anchor navigation; brand returns to top.
- TH / EN switches navigation, action and dialog labels; supplied artwork text stays unchanged.
- Each product opens its correctly named dialog.
- Washed 500g / Medium Roast selected and shown in summary.
- Honey and Natural expose only Light Roast.
- Mobile Washed 1kg / Dark Roast selected and shown in summary.
- Close button and Escape dismiss modal; focus returns to its product trigger.
- Modal scrolling works; no horizontal overflow.
- Mobile preview toggle works and leaves desktop layout intact.
- Application console errors: none observed. A browser-extension metadata error was present in chrome-extension logs, unrelated to the app.
- `npm run build` and `npm run test:sites`: passed.

## Follow-up polish and limits

- P3: cream shop texture and lower-left botanical continuation are simpler than the reference; source poster legibility is bounded by the supplied raster resolution.
- P3: generated hero / story backgrounds are illustrative reconstructions and differ slightly in foliage, fog and terrain detail; the village/forest subject and teal–cream art direction remain intact.
- Prototype only: no price lookup, inventory, checkout, payments, order transmission or backend. Story body copy was not invented. Confirm approved copy and current prices before live integration.
- Physical iPhone Safari and additional tablet sizes remain production follow-up checks.

## Implementation checklist

- No actionable P0 / P1 / P2 issues remain in the tested states.
- Keep local browser preview running; do not publish or alter the existing GitHub storefront / booking page in this turn.

## Publication update
Removed preview controls; added original homepage story and booking links. Built with relative asset URLs for GitHub Pages.
