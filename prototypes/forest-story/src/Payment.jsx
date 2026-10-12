import {useState} from 'react';
import {priceOf} from './pricing.mjs';
import './payment.css';
const line='https://lin.ee/6tpIOxo';
const messenger='https://m.me/KhunChangKienCoffee';
const facebookPage='https://www.facebook.com/share/1N3Hm6zMRV/?mibextid=wwXIfr';
export default function Payment({items,totals,th,onBack}){
 const t=(a,b)=>th?a:b,[copied,setCopied]=useState(false);
 const {weight,shipping,total:due,subtotal:total}=totals;
 const summary=['KCK.Coffee',...items.map(x=>`${x.title} / ${x.size} / ${x.roast} / ${x.quantity} × ฿${priceOf(x.id,x.size)}`),t('น้ำหนักรวม','Total weight')+` ${weight} g`,t('ค่าสินค้า','Coffee subtotal')+` ฿${total}`,t('ค่าส่งในประเทศไทย','Thailand shipping')+` ฿${shipping}`,t('ยอดรวมรอยืนยันจากร้าน','Total to confirm with the shop')+` ฿${due}`].join('\n');
 return <section className="checkout"><p className="eyebrow">PROMPTPAY · MANUAL CONFIRMATION</p><h2 id="payment-title">{t('สรุปยอดและชำระผ่าน QR','Summary & QR payment')}</h2>
 <div className="payment-totals"><p><span>{t('ค่าสินค้า','Coffee subtotal')}</span><strong>฿{total}</strong></p><p><span>{t('ค่าส่งในประเทศไทย','Thailand shipping')} · {weight.toLocaleString()} g</span><strong>฿{shipping}</strong></p><p className="payment-due"><span>{t('ยอดรวมรอร้านยืนยัน','Total pending shop confirmation')}</span><strong>฿{due}</strong></p></div>
 <p className="payment-notice">{t('ก่อนโอน กรุณาส่งรายการให้ร้านยืนยันราคา สต็อก และยอดรวมผ่าน LINE หรือ Facebook ก่อน ค่าส่งนี้สำหรับจัดส่งภายในประเทศไทยเท่านั้น','Before transferring, send your selection to the shop to confirm prices, stock and the total. These shipping rates apply within Thailand only.')}</p>
 <h3>1. {t('ส่งรายการให้ร้านยืนยัน','Confirm your selection with the shop')}</h3>
 <button className="button" onClick={async()=>{try{await navigator.clipboard.writeText(summary);setCopied(true)}catch{setCopied(false)}}}>{copied?t('คัดลอกแล้ว','COPIED'):t('คัดลอกรายการและยอดรวม','COPY SELECTION & TOTAL')}</button>
 <div className="payment-channels"><a className="outline-button payment-line" href={line} target="_blank" rel="noopener noreferrer">{t('เปิด LINE OA ของร้าน','OPEN SHOP LINE OA')} ↗</a><a className="outline-button facebook-channel" href={messenger} target="_blank" rel="noopener noreferrer">{t('ส่งรายการผ่าน Facebook Messenger','SEND SELECTION VIA FACEBOOK MESSENGER')} ↗</a></div>
 <p>{t('เลือก LINE หรือ Facebook แล้ววางข้อความที่คัดลอกในแชต รอร้านยืนยันก่อนโอน หากคัดลอกไม่ได้ ให้เลือกข้อความด้านล่าง','Choose LINE or Facebook, paste the copied text into the chat, and wait for confirmation before transferring. If copying fails, select the text below.')}</p><pre>{summary}</pre>
 <h3>2. {t('โอนตามยอดที่ร้านยืนยัน','Transfer the shop-confirmed amount')}</h3>
 <p>{t('ชื่อผู้รับ: นาย ชาตรี แซ่ย่าง · ตรวจชื่อผู้รับและยอดเงินในแอปธนาคารก่อนยืนยันโอน','Recipient: นาย ชาตรี แซ่ย่าง (Chartree Sae-Yang). Check the recipient name and amount in your banking app before confirming.')}</p>
 <img className="payment-qr" src="./assets/forest-story/payment-qr.jpeg" width="885" height="1200" alt={t('QR รับเงินของร้าน ชื่อ นาย ชาตรี แซ่ย่าง','Shop payment QR, recipient นาย ชาตรี แซ่ย่าง')}/>
 <a className="outline-button" href="./assets/forest-story/payment-qr.jpeg" download="KCK-Payment-QR.jpeg">{t('ดาวน์โหลดภาพ QR','DOWNLOAD QR IMAGE')}</a>
 <p>{t('ใช้มือถือเครื่องเดียว: บันทึกภาพ QR แล้วเลือกสแกนจากรูปภาพในแอปธนาคาร และกรอกยอดที่ร้านยืนยัน','On one phone: save the QR image, scan it from your banking app’s photo library, and enter the shop-confirmed amount.')}</p>
 <h3>3. {t('ส่งสลิปและที่อยู่ให้ร้าน','Send the slip and delivery details to the shop')}</h3>
 <div className="payment-channels"><a className="button" href={line} target="_blank" rel="noopener noreferrer">{t('ส่งสลิปและที่อยู่ใน LINE','SEND SLIP & ADDRESS IN LINE')} ↗</a><a className="button facebook-channel" href={messenger} target="_blank" rel="noopener noreferrer">{t('ส่งสลิปและที่อยู่ใน Facebook','SEND SLIP & ADDRESS IN FACEBOOK')} ↗</a></div><p>{t('Facebook อาจขอให้เข้าสู่ระบบก่อนส่งข้อความ หากเปิด Messenger ไม่ได้ ให้เปิดเพจแล้วกดส่งข้อความ','Facebook may require sign-in before messaging. If Messenger does not open, visit the Page and choose Message.')} <a href={facebookPage} target="_blank" rel="noopener noreferrer">{t('เปิดเพจ Facebook','OPEN FACEBOOK PAGE')} ↗</a></p>
 <p>{t('ส่งสลิป รายการกาแฟ ชื่อผู้รับ เบอร์โทร และที่อยู่จัดส่งให้ร้านในแชต LINE หรือ Facebook ร้านจะตรวจการโอนและตอบยืนยันคำสั่งซื้อ เว็บไซต์นี้ไม่อัปโหลดสลิป ไม่บันทึกที่อยู่ และไม่ตรวจการโอนอัตโนมัติ','Send the slip, coffee selection, recipient name, phone and delivery address in the LINE or Facebook chat. The shop checks the transfer and confirms the order. This website does not upload slips, store addresses or automatically verify payments.')}</p>
 <button className="outline-button" onClick={onBack}>{t('กลับไปแก้รายการ','BACK TO SELECTION')}</button></section>;
}

