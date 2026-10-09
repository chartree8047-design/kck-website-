import { useEffect, useRef, useState } from 'react';
import { ArrowRight, X, Check } from '@phosphor-icons/react';

const products = [
  { id: 'washed', title: 'WASHED PROCESS', roasts: ['Light Roast', 'Medium Roast', 'Dark Roast'], alt: 'Washed Process — Clean · Structured · Transparent. Light: Citrus · Floral · Clean finish. Medium: Brown sugar · Almond · Balanced. Dark: Dark chocolate · Nutty · Full body.' },
  { id: 'honey', title: 'HONEY PROCESS', roasts: ['Light Roast'], alt: 'Honey Process — Sweetness Preserved by Nature. Light Roast Only. Honey sweetness · Ripe fruit · Silky body. Time for Sun-Soaked Sweetness.' },
  { id: 'natural', title: 'NATURAL PROCESS', roasts: ['Light Roast'], alt: 'Natural Process — Sunlight & Wild Character. Light Roast Only. Ripe berries · Cocoa · Heavy body. Dried Whole Cherry.' },
];
function ProductDialog({ product, th, onClose, mobilePreview }) {
  const dialog = useRef(null);
  const [size, setSize] = useState('250g');
  const [roast, setRoast] = useState(product.roasts[0]);
  const [selected, setSelected] = useState(false);
  useEffect(() => { dialog.current.showModal(); }, []);
  return <dialog ref={dialog} className={`product-dialog${mobilePreview ? ' mobile-dialog' : ''}`} aria-labelledby="detail-title" onCancel={onClose} onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
    <button className="close-button" aria-label={th ? 'ปิดรายละเอียด' : 'Close details'} onClick={onClose}><X size={24} /></button>
    <div className="detail-layout">
      <div className={`poster detail-poster ${product.id}`} role="img" aria-label={product.alt} />
      <div className="detail-content"><p className="eyebrow">KCK.Coffee</p><h2 id="detail-title">{product.title}</h2><p className="detail-origin">Single origin Khun Chang Kien<br/>From the forest</p>
        <fieldset><legend>{th ? 'ขนาด / Size' : 'Size'}</legend><div className="option-row">{['100g','250g','500g','1kg'].map(s => <label key={s} className={size === s ? 'option selected' : 'option'}><input type="radio" name="size" checked={size === s} onChange={() => { setSize(s); setSelected(false); }} />{s}</label>)}</div></fieldset>
        <fieldset><legend>{th ? 'ระดับการคั่ว / Roast' : 'Roast'}</legend><div className="option-row">{product.roasts.map(r => <label key={r} className={roast === r ? 'option selected' : 'option'}><input type="radio" name="roast" checked={roast === r} onChange={() => { setRoast(r); setSelected(false); }} />{r}</label>)}</div></fieldset>
        <button className="pill select-button" onClick={() => setSelected(true)}>{th ? 'เลือกสินค้า / Select coffee' : 'Select coffee'}<ArrowRight size={20}/></button>
        {selected && <div className="selection-result" role="status"><Check size={22}/><div><strong>{th ? 'ตัวเลือกที่เลือก / Your selection' : 'Your selection'}</strong><p>{product.title} · {size} · {roast}</p></div></div>}
        <p className="prototype-note">{th ? 'หน้านี้ใช้ดูรายละเอียดและเลือกตัวเลือกกาแฟ ยังไม่ส่งคำสั่งซื้อ' : 'This page shows coffee options. No order has been submitted.'}</p>
      </div>
    </div>
  </dialog>;
}
export function App() {
  const [language, setLanguage] = useState('bilingual');
  const [active, setActive] = useState(null);
  const mobilePreview = false;
  const th = language !== 'en';
  const lastTrigger = useRef(null);
  const close = () => { setActive(null); requestAnimationFrame(() => lastTrigger.current?.focus()); };
  useEffect(() => { document.documentElement.lang = th ? 'th' : 'en'; document.body.style.overflow = active ? 'hidden' : ''; return () => { document.body.style.overflow = ''; }; }, [active, th]);
  return <><a className="skip-link" href="#coffee">{th ? 'ข้ามไปเลือกกาแฟ' : 'Skip to coffee'}</a>
    <main className={`site-shell${mobilePreview ? ' mobile-preview' : ''}`}>
      <section className="hero" id="top" aria-labelledby="hero-title">
        <header className="header"><a className="brand" href="#top">KCK.Coffee</a><nav aria-label={th ? 'เมนูหลัก' : 'Main navigation'}><a href="#story">{th ? 'เรื่องราว / Story' : 'Story'}</a><a href="#coffee">{th ? 'กาแฟ / Coffee' : 'Coffee'}</a><button className="language" aria-label={th ? 'Switch to English' : 'เปลี่ยนเป็นภาษาไทย'} aria-pressed={!th} onClick={() => setLanguage(th ? 'en' : 'bilingual')}>TH / EN</button></nav></header>
        <div className="hero-copy"><h1 id="hero-title">Single origin<br/>Khun Chang Kien</h1><p className="tagline">From the forest</p></div>
        <a className="pill story-button" href="#story">{th ? 'อ่านเรื่องราว / Read our story' : 'Read our story'}<ArrowRight aria-hidden="true" size={22}/></a><div className="embroidery" aria-hidden="true" />
      </section>
      <section className="story" id="story" aria-labelledby="story-title"><p className="section-label">{th ? 'เรื่องราว / Story' : 'Story'}</p><h2 id="story-title">From the forest</h2><a className="full-story" href="index.html#story">{th ? 'อ่านเรื่องราวเต็ม / Read the full story' : 'Read the full story'}<ArrowRight size={18}/></a></section>
      <section className="coffee" id="coffee" aria-labelledby="coffee-title"><div className="coffee-branch" aria-hidden="true" /><h2 className="section-label" id="coffee-title">{th ? 'กาแฟ / Coffee' : 'Coffee'}</h2>
        <div className="product-grid">{products.map(p => <article className="product" key={p.id}><div className={`poster ${p.id}`} role="img" aria-label={p.alt}/><h3>{p.title}</h3><div className="card-ornament" aria-hidden="true"/><button className="pill details-button" onClick={e => { lastTrigger.current = e.currentTarget; setActive(p); }}>{th ? 'ดูรายละเอียด / View details' : 'View details'}<ArrowRight aria-hidden="true" size={20}/></button></article>)}</div>
      </section>
      <footer className="forest-footer" aria-label="KCK.Coffee" /><div className="site-links"><a href="index.html">{th ? 'หน้าหลัก / Home' : 'Home'}</a><a href="activity-booking.html">{th ? 'จองกิจกรรม / Book an experience' : 'Book an experience'}<ArrowRight size={18}/></a></div>
    </main>
    {active && <ProductDialog key={active.id} product={active} th={th} onClose={close} mobilePreview={mobilePreview}/>}
  </>;
}
