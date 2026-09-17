const PRICE_PER_PERSON = 300;
const MINIMUM_CHARGE = 1200;
const BOOKING_EMAIL = "chartree8047@gmail.com";

const form = document.querySelector("#booking-form");
const guests = document.querySelector("#guests");
const total = document.querySelector("#estimated-total");
const priceNote = document.querySelector("#price-note");
const result = document.querySelector("#result");
const summaryEl = document.querySelector("#summary");
const requestIdEl = document.querySelector("#request-id");
let latestSummary = "";

function money(value) {
  return new Intl.NumberFormat("th-TH").format(value) + " บาท";
}

function calculate() {
  const count = Math.max(1, Math.min(15, Number(guests.value) || 1));
  const raw = count * PRICE_PER_PERSON;
  const estimate = Math.max(raw, MINIMUM_CHARGE);
  total.textContent = money(estimate);
  priceNote.textContent = raw < MINIMUM_CHARGE
    ? `${count} คน × ${PRICE_PER_PERSON} บาท (ขั้นต่ำ ${money(MINIMUM_CHARGE)} ต่อรอบ)`
    : `${count} คน × ${PRICE_PER_PERSON} บาท`;
  return { count, estimate };
}

function requestId() {
  const d = new Date();
  const stamp = [d.getFullYear(), String(d.getMonth()+1).padStart(2,"0"), String(d.getDate()).padStart(2,"0")].join("");
  return `KCK-ECO-${stamp}-${Math.random().toString(36).slice(2,6).toUpperCase()}`;
}

guests.addEventListener("input", calculate);
document.querySelector("#date").min = new Date().toISOString().split("T")[0];
calculate();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const { count, estimate } = calculate();
  const id = requestId();
  const values = Object.fromEntries(new FormData(form));
  latestSummary = [
    "คำขอจอง KCK Ecology Coffee Walk",
    `รหัสคำขอ: ${id}`,
    `ชื่อผู้จอง: ${values.name}`,
    `โทรศัพท์: ${values.phone}`,
    `อีเมล: ${values.email || "-"}`,
    `สัญชาติ: ${values.nationality || "-"}`,
    `วันที่: ${values.date}`,
    `เวลา: ${values.time}`,
    `จำนวน: ${count} คน`,
    `ภาษา: ${values.language}`,
    `ประมาณการ: ${money(estimate)}`,
    `ของฝาก: KCK Discovery Set ${count} ชุด (ชุดละ 3 Drip Bags)` ,
    `หมายเหตุ: ${values.notes || "-"}`,
    "",
    "สถานะ: REQUESTED - รอ KCK ติดต่อกลับเพื่อยืนยัน"
  ].join("\n");
  requestIdEl.textContent = id;
  summaryEl.textContent = latestSummary;
  result.hidden = false;
  result.scrollIntoView({ behavior: "smooth", block: "start" });
});

document.querySelector("#email-request").addEventListener("click", () => {
  const subject = encodeURIComponent("คำขอจอง KCK Ecology Coffee Walk");
  window.location.href = `mailto:${BOOKING_EMAIL}?subject=${subject}&body=${encodeURIComponent(latestSummary)}`;
});

document.querySelector("#copy-request").addEventListener("click", async (event) => {
  await navigator.clipboard.writeText(latestSummary);
  event.currentTarget.textContent = "คัดลอกแล้ว";
});

document.querySelector("#share-request").addEventListener("click", async () => {
  if (navigator.share) {
    await navigator.share({ title: "KCK Ecology Coffee Walk", text: latestSummary });
  } else {
    await navigator.clipboard.writeText(latestSummary);
    alert("คัดลอกสรุปแล้ว สามารถนำไปส่งใน LINE หรือแอปข้อความได้");
  }
});
