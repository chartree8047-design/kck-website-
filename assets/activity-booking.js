// Both pages use the same booking configuration. Static text and form links remain usable if loading fails.
(async () => {
  try {
    const response = await fetch('content/site-content.json');
    if (!response.ok) throw new Error('Booking configuration unavailable');
    const { booking } = await response.json();
    const offer = booking.confirmed_offers[0];
    const amount = new Intl.NumberFormat('en-US');
    const set = (selector, value) => document.querySelectorAll(selector).forEach(el => { el.textContent = value; });
    set('[data-booking-price]', `${amount.format(offer.price_thb_per_person)} บาท/คน • THB ${amount.format(offer.price_thb_per_person)}/person`);
    set('[data-booking-minimum]', `ขั้นต่ำ ${amount.format(booking.minimum_charge_thb_per_round)} บาท/รอบ • Minimum THB ${amount.format(booking.minimum_charge_thb_per_round)} per round.`);
    set('[data-booking-capacity]', `${booking.capacity_policy_th} • ${booking.capacity_policy_en}`);
    const url = new URL(booking.form_url);
    if (url.protocol !== 'https:' || url.hostname !== 'docs.google.com' || !url.pathname.startsWith('/forms/')) throw new Error('Invalid form URL');
    document.querySelectorAll('[data-booking-link]').forEach(el => { el.href = url.href; });
    url.searchParams.set('embedded', 'true');
    document.querySelectorAll('[data-booking-frame]').forEach(el => { if (el.src !== url.href) el.src = url.href; });
  } catch (error) { console.warn('Using the embedded booking information.', error); }
})();
