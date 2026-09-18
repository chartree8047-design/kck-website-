# KCK Coffee Farmer Website

เว็บไซต์สองภาษา (ไทยก่อน / English below) สำหรับ KCK Coffee Farmer ที่ขุนช่างเคี่ยน เชียงใหม่ ครอบคลุมเรื่องราวแหล่งผลิต ระบบนิเวศ การแปรรูป ประสบการณ์เยี่ยมชม และระบบส่งคำขอจอง

## เป้าหมาย / Purpose

- เล่าเรื่อง KCK ในฐานะผู้ผลิตต้นน้ำ ไม่ใช่เพียงหน้าขายสินค้า
- สื่อสารแกนหลัก: Select the Coffee • Select the Yeast • Observe the Birds
- เชื่อมกาแฟ ป่า ชุมชน และครอบครัวอย่างตรวจสอบได้
- ทำให้ผู้เยี่ยมชมเข้าใจประสบการณ์และส่งคำขอจองได้ง่ายบนมือถือ
- ใช้ผลิตภัณฑ์เป็นเนื้อหารองจาก Origin และ Stewardship

## โครงหน้าแรก / Homepage flow

1. Hero — KCK Coffee Farmer, Khun Chang Kian
2. Origin — บ้านขุนช่างเคี่ยนและพื้นที่สูงประมาณ 1,350 เมตร
3. Three Practices — Coffee / Yeast / Birds
4. Coffee & Forest — Shade-grown, biodiversity, family stewardship
5. Varieties — Red Bourbon, KCK-09, KCK-432
6. Processing — Washed / Honey / Natural
7. Experiences — กิจกรรมที่เปิดจอง
8. Booking — ส่งคำขอจองและรอการยืนยัน
9. Contact — ช่องทางติดต่อที่อนุมัติให้เผยแพร่

## โครงไฟล์ / Project structure

- `index.html` — โครงหน้าเว็บไซต์ฉบับแรก
- `assets/styles.css` — ระบบสีและรูปแบบ responsive
- `content/site-content.json` — ข้อมูลสองภาษาที่ใช้เป็นแหล่งอ้างอิงกลาง
- `docs/information-architecture.md` — แผนผังเนื้อหา สถานะข้อมูล และกติกาการเผยแพร่

## หลักการข้อมูล / Content rules

- ภาษาไทยอยู่ก่อน ภาษาอังกฤษอยู่ด้านล่างและมีความหมายตรงกัน
- แยกข้อมูลที่ยืนยันแล้วออกจากข้อมูลรอยืนยัน
- ไม่ฝังที่อยู่ส่วนตัว Token หรือ URL หลังบ้านในโค้ดหน้าเว็บ
- การจองทุกครั้งเป็น “คำขอจอง” จนกว่า KCK จะยืนยัน
- ราคาและจำนวนที่ว่างต้องมีแหล่งข้อมูลเดียว เพื่อลดข้อมูลขัดแย้ง

## สถานะ

Initial information architecture — ยังไม่เชื่อมระบบรับจองจริงและยังไม่เผยแพร่เว็บไซต์
