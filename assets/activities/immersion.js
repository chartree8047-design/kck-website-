const form=document.querySelector('#request-form');
const date=document.querySelector('#visit-date');
const guests=document.querySelector('#guests');
const estimate=document.querySelector('#estimate');
const result=document.querySelector('#request-result');
const message=document.querySelector('#request-text');
const status=document.querySelector('#copy-status');
const bangkokToday=new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Bangkok',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date());
date.min=['year','month','day'].map(type=>bangkokToday.find(p=>p.type===type).value).join('-');
const format=n=>n.toLocaleString('en-US');
function update(){const n=Number(guests.value);result.hidden=true;status.textContent='';if(!Number.isInteger(n)||n<4||n>10){estimate.textContent='กรุณาระบุ 4–10 คน / Please enter 4–10 guests.';return;}const rate=n<6?4290:3890;estimate.textContent=`ราคาเสนอ ${format(rate)} ฿/คน · รวม ${format(rate*n)} ฿ · มัดจำ 50% ${format(rate*n/2)} ฿ หลังร้านยืนยัน / Proposed total; deposit after confirmation.`;}
guests.addEventListener('input',update);date.addEventListener('input',update);update();
form.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;const n=Number(guests.value),rate=n<6?4290:3890;message.value=`KCK.Coffee — คำขอจอง / Booking request\nกิจกรรมที่ 2: Coffee Origin Immersion · 2 วัน 1 คืน / 2D1N\nวันที่ต้องการ / Preferred date: ${date.value}\nจำนวน / Guests: ${n}\nราคาเสนอต่อคน / Proposed rate: ${format(rate)} ฿\nยอดรวมเสนอ / Proposed total: ${format(rate*n)} ฿\nมัดจำ 50% หลังร้านยืนยัน / Deposit after confirmation: ${format(rate*n/2)} ฿\nกรุณายืนยันวันว่าง ผลกาแฟสุก ราคา และรายละเอียดการเดินทาง / Please confirm dates, ripe cherries, price and travel details.`;result.hidden=false;result.scrollIntoView({behavior:'smooth',block:'start'});});
document.querySelector('#copy-request').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(message.value);status.textContent='คัดลอกแล้ว กรุณาวางและส่งในแชต / Copied. Paste and send in chat.';}catch{message.focus();message.select();status.textContent='กรุณาคัดลอกข้อความที่เลือกด้วยตนเอง / Please copy the selected text manually.';}});
