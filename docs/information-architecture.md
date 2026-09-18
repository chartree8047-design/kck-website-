# KCK Website — Information Architecture

## 1. กลุ่มผู้ใช้หลัก

1. ผู้สนใจเรื่องกาแฟ แหล่งผลิต และระบบนิเวศ
2. ผู้ต้องการเยี่ยมชมขุนช่างเคี่ยนหรือจองกิจกรรม
3. ผู้ซื้อกาแฟและพันธมิตรที่ต้องการเข้าใจ Origin และ Process
4. ผู้เยี่ยมชมต่างชาติที่ต้องการข้อมูลภาษาอังกฤษแบบตรงกับภาษาไทย

## 2. ลำดับข้อมูล

### A. รู้จัก KCK

- KCK Coffee Farmer
- Khun Chang Kian, Chiang Mai, Thailand
- ครอบครัวผู้ปลูกกาแฟรุ่นที่ 4
- พื้นที่ปลูกประมาณ 1,350 เมตร ใต้ร่มเงาป่าดิบเขา

### B. หลักปฏิบัติสามด้าน

- Select the Coffee — การคัดเลือกสายพันธุ์และแปลง
- Select the Yeast — การใช้ยีสต์ท้องถิ่นที่คัดเลือกและควบคุมกระบวนการ
- Observe the Birds — การสังเกตนกและระบบนิเวศเพื่อดูแลพื้นที่อย่างรับผิดชอบ

หมายเหตุ: หลีกเลี่ยงการรับรองคำว่า “Bird Friendly certified” จนกว่าจะมีมาตรฐานหรือหลักฐานรองรับ

### C. กาแฟและการแปรรูป

พันธุ์หลักที่สื่อสาร:
- Red Bourbon
- KCK-09 — Caturra × Catimor
- KCK-432 — local hybrid / Timor-hybrid side

การแปรรูป:
- Washed — โครงสร้างหลักของการผลิต
- Honey — expression lot
- Natural — expression lot

### D. ประสบการณ์และการจอง

ข้อมูลพร้อมใช้ในเวอร์ชันแรก:
- Coffee & Community Experience — 400 THB/person
- Homestay — price confirmed later
- Shared van — 350 THB/person
- Private car — 650 THB/person
- รับ 1–15 คนต่อคำขอ
- วันที่เปิดรับหลัก: Friday–Sunday
- การส่งแบบฟอร์มยังไม่ถือว่ายืนยันจนกว่า KCK จะติดต่อกลับ

ข้อมูลกิจกรรมอื่นให้เก็บเป็น “รอยืนยันก่อนเผยแพร่” เพราะราคาเคยมีหลายเวอร์ชัน:
- Cultural Workshop & Hemp Weaving
- Coffee & Nature Trail
- Coffee Harvest & Processing 2D1N
- Homestay & Village Life
- Black chicken soup add-on
- Ride to the Origin / Living with the Forest

### E. ผลิตภัณฑ์

ผลิตภัณฑ์เป็นส่วนรองของเรื่อง Origin:
- Washed
- Honey
- Natural
- KCK.SINGLE Drip Bag Coffee
- Special lots

ราคาสินค้าไม่ใส่ในหน้าแรกจนกว่าจะเลือกแหล่งข้อมูลราคาเดียวที่อัปเดตได้

## 3. โครงนำทางฉบับแรก

- หน้าแรก / Home
- เรื่องราว / Our Story
- กาแฟและป่า / Coffee & Forest
- การแปรรูป / Processing
- ประสบการณ์ / Experiences
- จองกิจกรรม / Booking
- ติดต่อ / Contact

ใช้หน้าเดียวแบบ long-scroll ในระยะแรก เหมาะกับ iPhone/iPad และ QR landing page

## 4. โครงข้อมูลการจอง

ข้อมูลผู้จอง:
- Name
- Phone
- Email
- Nationality
- Number of guests
- Preferred date
- Selected experience
- Transport
- Pickup point
- Notes
- Preferred language
- Consent to be contacted

ผลลัพธ์:
- Booking ID
- Estimated total
- Status: REQUESTED / CONFIRMED / CANCELLED
- Remaining capacity

## 5. ความปลอดภัยและข้อมูลส่วนตัว

- ห้ามเก็บ Channel Access Token, secret หรือข้อมูลส่วนตัวในไฟล์หน้าเว็บ
- URL ของ Google Apps Script ให้กำหนดผ่านไฟล์ตั้งค่าหรือ Environment เมื่อเชื่อมระบบจริง
- ระบบหลังบ้านต้องตรวจจำนวนที่นั่งซ้ำก่อนยืนยัน
- Email และ LINE เป็นช่องทางแจ้งผล ไม่ใช่หลักฐานยืนยันการชำระเงินโดยอัตโนมัติ

## 6. งานลำดับถัดไป

1. ตรวจแก้ข้อความสองภาษา
2. เลือกภาพจริงและโลโก้อย่างเป็นทางการ
3. ยืนยันรายการกิจกรรม ราคา วันเปิดรับ และการเดินทาง
4. เชื่อม Google Apps Script แบบไม่เปิดเผยข้อมูลลับ
5. ทดสอบมือถือ การกรอกฟอร์ม และสถานะสำเร็จ/ผิดพลาด
