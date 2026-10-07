# KCK Coffee & Stories prototype

The static GitHub Pages entry is `/shop.html`. Images are illustrative, prices are historical references, and payment/order submission are not connected. Existing homepage and booking are retained.

The compiled assets under `assets/forest-shop` run without a build. Relative image paths prevent 404s under the repository subpath.

Before commercial launch: confirm prices, approved product photos and store/contact links. Booking URL is inherited; receiving submissions is not tested.

React source is retained here for editing. From this directory run `npm ci`, then `npm run dev` or `npm run build`. Asset preparation copies the shared repository assets into the Vite public directory automatically. Vite emits `dist/client`; publish that built directory separately when replacing the checked-in static version.
