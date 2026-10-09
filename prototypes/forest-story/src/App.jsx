import { useEffect, useRef, useState } from 'react';
import { ArrowRight, X, Check } from '@phosphor-icons/react';
import { sizes, prices, priceOf, totalsFor } from './pricing.mjs';

const products = [
  { id: 'washed', title: 'WASHED PROCESS', roasts: ['Light Roast', 'Medium Roast', 'Dark Roast'], alt: 'Washed Process — Clean · Structured · Transparent. Light: Citrus · Floral · Clean finish. Medium: Brown sugar · Almond · Balanced. Dark: Dark chocolate · Nutty · Full body.' },
  { id: 'honey', title: 'HONEY PROCESS', roasts: ['Light Roast'], alt: 'Honey Process — Sweetness Preserved by Nature. Light Roast Only. Honey sweetness · Ripe fruit · Silky body. Time for Sun-Soaked Sweetness.' },
  { id: 'natural', title: 'NATURAL PROCESS', roasts: ['Light Roast'], alt: 'Natural Process — Sunlight & Wild Character. Light Roast Only. Ripe berries · Cocoa · Heavy body. Dried Whole Cherry.' },
];
function ProductDialog({ product, th, onClose, mobilePreview, onAdd }) {
  const dialog = useRef(null);
  const [size, setSize] = useState('250g');
  const [roast, setRoast] = useState(product.roasts[0]);
  const [selected, setSelected] = useState(false);
  const [quantity, setQuantity] = useState(1);
  useEffect(() => { dialog.current.showModal(); }, []);
  return <dialog ref={dialog} className={`product-dialog${mobilePreview ? ' mobile-dialog' : ''}`} aria-labelledby="detail-title" onCancel={onClose} onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
    <button className="close-button" aria-label={th ? 'ปิดรายละเอียด' : 'Close details'} onClick={onClose}><X size={24} /></button>
    <div className="detail-layout">
      <div className={`poster detail-poster ${product.id}`} role="img" aria-label={product.alt} />
      <div className="detail-content"><p className="eyebrow">KCK.Coffee</p><h2 id="detail-title">{product.title}</h2><p className="detail-origin">Single origin Khun Chang Kien<br/>From the forest</p>
        <fieldset><legend>{th ? 'ขนาด / Size' : 'Size'}</legend><div className="option-row">{['100g','250g','500g','1kg'].map(s => <label key={s} className={size === s ? 'option selected' : 'option'}><input type="radio" name="size" checked={size === s} onChange={() => { setSize(s); setSelected(false); }} />{s}</label>)}</div></fieldset>
        <fieldset><legend>{th ? 'ระดับการคั่ว / Roast' : 'Roast'}</legend><div className="option-row">{product.roasts.map(r => <label key={r} className={roast === r ? 'option selected' : 'option'}><input type="radio" name="roast" checked={roast === r} onChange={() => { setRoast(r); setSelected(false); }} />{r}</label>)}</div></fieldset>
        <label className="quantity-label">{th ? 'จำนวนถุง / Bags' : 'Bags'}<input type="number" min="1" max="1000" step="1" value={quantity} onChange={e => {setQuantity(e.target.value);setSelected(false);}} /></label>
        <p className="selected-price">{priceOf(product.id,size).toLocaleString()} ฿ / {th ? 'ถุง' : 'bag'}</p>
        <button className="pill select-button" disabled={!Number.isInteger(Number(quantity)) || Number(quantity)<1 || Number(quantity)>1000} onClick={() => {onAdd({id:product.id,title:product.title,size,roast,quantity:Number(quantity)});setSelected(true);}}>{th ? 'เพิ่มในรายการคำนวณ / Add to estimate' : 'Add to estimate'}<ArrowRight size={20}/></button>
        {selected && <div className="selection-result" role="status"><Check size={22}/><div><strong>{th ? 'เพิ่มในรายการแล้ว / Added to estimate' : 'Added to estimate'}</strong><p>{product.title} · {size} · {roast} × {quantity}</p></div></div>}
        <p className="prototype-note">{th ? 'หน้านี้ใช้ดูรายละเอียดและเลือกตัวเลือกกาแฟ ยังไม่ส่งคำสั่งซื้อ' : 'This page shows coffee options. No order has been submitted.'}</p>
      </div>
    </div>
  </dialog>;
}
export function App() {
  const [language, setLanguage] = useState('bilingual');
  const [active, setActive] = useState(null);
  const [items, setItems] = useState([]);
  const totals = totalsFor(items);
  const addItem = item => setItems(old => {const same=old.findIndex(i=>i.id===item.id && i.size===item.size && i.roast===item.roast);return same<0 ? [...old,item] : old.map((i,n)=>n===same?{...i,quantity:i.quantity+item.quantity}:i);});
  const mobilePreview = false;
  const th = language !== 'en';
  useEffect(() => { requestAnimationFrame(() => { const id = location.hash.slice(1); if (id) document.getElementById(id)?.scrollIntoView(); }); }, []);
  const lastTrigger = useRef(null);
  const close = () => { setActive(null); requestAnimationFrame(() => lastTrigger.current?.focus()); };
  useEffect(() => { document.documentElement.lang = th ? 'th' : 'en'; document.body.style.overflow = active ? 'hidden' : ''; return () => { document.body.style.overflow = ''; }; }, [active, th]);
  return <><a className="skip-link" href="#coffee">{th ? 'ข้ามไปเลือกกาแฟ' : 'Skip to coffee'}</a>
    <main className={`site-shell${mobilePreview ? ' mobile-preview' : ''}`}>
      <section className="hero" id="top" aria-labelledby="hero-title">
        <header className="header"><a className="brand" href="#top">KCK.Coffee</a><nav aria-label={th ? 'เมนูหลัก' : 'Main navigation'}><a href="#story">{th ? 'เรื่องราว / Story' : 'Story'}</a><a href="#prices">{th ? 'ราคา / Prices' : 'Prices'}</a><button className="language" aria-label={th ? 'Switch to English' : 'เปลี่ยนเป็นภาษาไทย'} aria-pressed={!th} onClick={() => setLanguage(th ? 'en' : 'bilingual')}>TH / EN</button></nav></header>
        <div className="hero-copy"><h1 id="hero-title">Single origin<br/>Khun Chang Kien</h1><p className="tagline">From the forest</p></div>
        <a className="pill story-button" href="#story">{th ? 'อ่านเรื่องราว / Read our story' : 'Read our story'}<ArrowRight aria-hidden="true" size={22}/></a><div className="embroidery" aria-hidden="true" />
      </section>
      <a className="price-shortcut" href="#prices">{th ? 'ดูราคาและค่าส่ง / Prices & shipping' : 'Prices & shipping'}<ArrowRight size={20}/></a>
      <section className="story" id="story" aria-labelledby="story-title"><p className="section-label">{th ? 'เรื่องราว / Story' : 'Story'}</p><h2 id="story-title">From the forest</h2><a className="full-story" href="index.html#story">{th ? 'อ่านเรื่องราวเต็ม / Read the full story' : 'Read the full story'}<ArrowRight size={18}/></a></section>
      <section className="coffee" id="coffee" aria-labelledby="coffee-title"><div className="coffee-branch" aria-hidden="true" /><h2 className="section-label" id="coffee-title">{th ? 'กาแฟ / Coffee' : 'Coffee'}</h2>
        <div className="price-overview" id="prices"><h2>{th ? 'ราคากาแฟ / Coffee prices' : 'Coffee prices'}</h2><table><thead><tr><th>{th ? 'ขนาด' : 'Size'}</th><th>Washed</th><th>Honey</th><th>Natural</th></tr></thead><tbody>{sizes.map((s,i)=><tr key={s}><th>{s}</th>{products.map(p=><td key={p.id}>{prices[p.id][i]} ฿</td>)}</tr>)}</tbody></table><a href="#shipping-rates">{th ? 'ดูอัตราค่าส่ง / Shipping rates' : 'Shipping rates'}<ArrowRight size={18}/></a></div>
        <div className="product-grid">{products.map(p => <article className="product" key={p.id}><div className={`poster ${p.id}`} role="img" aria-label={p.alt}/><h3>{p.title}</h3><div className="card-ornament" aria-hidden="true"/><dl className="price-list">{sizes.map((s,i)=><div key={s}><dt>{s}</dt><dd>{prices[p.id][i].toLocaleString()} ฿</dd></div>)}</dl><button className="pill details-button" onClick={e => { lastTrigger.current = e.currentTarget; setActive(p); }}>{th ? 'ดูรายละเอียด / View details' : 'View details'}<ArrowRight aria-hidden="true" size={20}/></button></article>)}</div>
      </section>
      <section className="order-estimate" aria-labelledby="estimate-title"><h2 id="estimate-title">{th ? 'คำนวณราคาพร้อมค่าส่ง' : 'Price & shipping estimate'}</h2><p>{th ? 'เพิ่มกาแฟจากปุ่มดูรายละเอียด รวมหลาย Process ได้ ค่าส่งคิดจากน้ำหนักกาแฟรวมต่อคำสั่งซื้อ' : 'Add coffee through View details. Combine processes; shipping uses total coffee weight.'}</p>
        {items.length ? <ul className="estimate-items">{items.map((i,n)=><li key={`${i.id}-${i.size}-${i.roast}`}><span>{i.title} · {i.size} · {i.roast} × {i.quantity}<strong>{(priceOf(i.id,i.size)*i.quantity).toLocaleString()} ฿</strong></span><button onClick={()=>setItems(old=>old.filter((_,x)=>x!==n))} aria-label={`${th?'ลบ':'Remove'} ${i.title} ${i.size} ${i.roast}`}><X size={20}/></button></li>)}</ul> : <p>{th ? 'ยังไม่มีสินค้าในรายการคำนวณ' : 'Your estimate is empty.'}</p>}
        <dl className="estimate-totals" aria-live="polite"><div><dt>{th?'น้ำหนักรวม':'Total coffee weight'}</dt><dd>{(totals.weight/1000).toLocaleString()} kg</dd></div><div><dt>{th?'ราคาสินค้า':'Coffee subtotal'}</dt><dd>{totals.subtotal.toLocaleString()} ฿</dd></div><div><dt>{th?'ค่าจัดส่ง':'Shipping'}</dt><dd>{items.length && totals.weight>=10000 ? (th?'ฟรี':'Free') : `${totals.shipping} ฿`}</dd></div><div className="grand-total"><dt>{th?'รวมทั้งหมด':'Total'}</dt><dd>{totals.total.toLocaleString()} ฿</dd></div></dl>
        <p className="prototype-note">{th?'รายการนี้ใช้คำนวณราคาเท่านั้น ยังไม่ส่งคำสั่งซื้อหรือชำระเงิน':'Estimate only. No order has been submitted and no payment has been made.'}</p>
        <h3 id="shipping-rates">{th?'อัตราค่าจัดส่ง':'Shipping rates'}</h3><table className="shipping-table"><thead><tr><th>{th?'น้ำหนักกาแฟรวม':'Total coffee weight'}</th><th>{th?'ค่าส่ง':'Shipping'}</th></tr></thead><tbody><tr><td>100g–1kg</td><td>50 ฿</td></tr><tr><td>{th?'มากกว่า 1–3kg':'>1–3kg'}</td><td>80 ฿</td></tr><tr><td>{th?'มากกว่า 3–5kg':'>3–5kg'}</td><td>100 ฿</td></tr><tr><td>{th?'มากกว่า 5 แต่น้อยกว่า 10kg':'>5 and <10kg'}</td><td>150 ฿</td></tr><tr><td>{th?'ตั้งแต่ 10kg':'10kg and above'}</td><td>{th?'ฟรี':'Free'}</td></tr></tbody></table>
      </section>
      <footer className="forest-footer" aria-label="KCK.Coffee" /><div className="site-links"><a href="index.html">{th ? 'หน้าหลัก / Home' : 'Home'}</a><a href="activity-booking.html">{th ? 'จองกิจกรรม / Book an experience' : 'Book an experience'}<ArrowRight size={18}/></a></div>
    </main>
    {active && <ProductDialog key={active.id} product={active} th={th} onClose={close} mobilePreview={mobilePreview} onAdd={addItem}/>}
  </>;
}
