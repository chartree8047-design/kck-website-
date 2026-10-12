# KCK Forest Story storefront

Selected reference implemented with React/Vite. Production entry: `/shop.html`; compiled assets: `/assets/forest-story`. Original homepage and activity booking remain separate pages.

The three coffee detail dialogs support roast and size selection. Confirmed prices and a combined-weight shipping estimator are implemented. Manual QR bank transfer is available from the estimate. Copy the current selection and totals, ask the shop to confirm via https://lin.ee/6tpIOxo, then transfer using the supplied QR and send the slip plus delivery details in LINE. The shop verifies the transfer and confirms the order. No automatic payment verification, address storage, slip upload or order database is implemented. Prices were supplied in reference images and confirmed 10 October 2026. Shipping: up to 1kg 50 THB (including 100g), >1–3kg 80 THB, >3–5kg 100 THB, >5–<10kg 150 THB, >=10kg free.

Run `npm ci` then `npx vite build`. Copy the built JS/CSS/fonts plus hero.webp, story.webp and reference.jpeg into assets/forest-story and adjust entry paths in shop.html.


Payment UI source: src/Payment.jsx and src/payment.css. Production shop.html retains the existing stylesheet and loads assets/forest-story/app-payment.js plus payment.css. Preserve the supplied payment-qr.jpeg unchanged. Existing pricing.mjs remains authoritative.
