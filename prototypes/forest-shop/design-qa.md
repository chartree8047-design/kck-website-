# KCK reference implementation QA
Source: ../upload/IMG_3856.jpeg (1024 × 1024).
Browser evidence: ../kck-desktop-final.jpg and ../kck-lower-final.jpg; comparison ../kck-final-comparison.jpg.
Desktop CSS viewport: 1363 × 936, browser screenshot 1348 px wide; normalized to 1024 px width. Mobile: 393 px iframe, 378 px content width after scrollbar. Thai, default collection, no dialog.

## Findings and comparison history
Initial comparison found P2 display headings falling back to sans-serif and P2 story photo exceeding its cream panel. Fixed with a locally hosted DejaVu Serif font and constrained story image height/overflow. Subsequent browser evidence shows serif headings and aligned photo/panel bottoms. Full-view and focused lower-section comparison inspected together with the reference.

Fonts: serif display headings and Thai sans UI, readable line heights, no truncation. Local font removes dependency for display type. Thai font has system fallback.
Spacing: three equal process columns, story and collection alongside one another, square cards and restrained gaps. Mobile reflows lower sections into one column without horizontal overflow.
Colors: muted blue-green, warm cream, deep forest green reproduce the reference palette.
Images: generated mountain, shade coffee and kraft pouch assets fit their intended positions, all labeled illustrative. Real logo reused from prior HTML. Standard Phosphor icons replace process illustrations. Kraft mockup is intentionally shared across three processes and differentiated with captions pending real product photos.
Copy: KCK-specific Thai/English text replaces mockup text. Reference prices are explicitly indicative. No certification claims. Visit booking is an extension agreed in conversation.

## Primary interactions tested
TH/EN toggle; process detail; Washed 500 g / Medium / 2 bags = ฿800; Natural offers Light only; add, remove, empty selection; clipboard copy succeeds; Natural filter; article dialog; navigation; mobile Natural detail opens and fits. Console checked: only browser extension metadata errors, no application errors observed.

## Limits and follow-up
This is a frontend prototype: no payment, stock synchronization, order submission, or persistence. Booking destination reused from existing HTML; no external submission tested. Mobile check is Chromium at iPhone width, not actual Safari. Real farm/product imagery and current prices/store URLs are needed before commercial launch.

final result: passed
