// CoreCraft Software — Whyus Page Interactive JS
document.addEventListener('DOMContentLoaded', () => {
  // GoF Design Patterns Data
  const patternData = {
    strategy: {
      title: "Strategy Pattern (ระบบ Payment Gateway)",
      desc: "ใช้สลับวิธีการชำระเงิน (PromptPay, Credit Card, TrueMoney Wallet) แบบ Dynamic โดยไม่ต้องแก้ไขโค้ดประมวลผลหลัก (Open-Closed Principle)",
      badge: "Financial Switch",
      code: `// Strategy Interface & Concrete Implementations
class PaymentProcessor {
  setStrategy(strategy) { this.strategy = strategy; }
  executePayment(amount) { return this.strategy.pay(amount); }
}

const promptPay = { pay: (amt) => \`PromptPay QR generated for \${amt} THB\` };
const creditCard = { pay: (amt) => \`PCI-DSS Credit Card charged \${amt} THB\` };`
    },
    factory: {
      title: "Factory Pattern (ระบบพิมพ์ใบกำกับภาษี & ใบเสร็จ)",
      desc: "ใช้สร้างวัตถุประเภทเอกสารต่างๆ (PDF E-Tax, Thermal POS Receipt, XML Invoice) ตามประเภทเครื่องพิมพ์หรือคำขอของลูกค้าอย่างยืดหยุ่น",
      badge: "POS & ERP System",
      code: `class ReceiptFactory {
  static createReceipt(type, data) {
    if (type === 'thermal') return new ThermalReceipt(data);
    if (type === 'etax') return new EInvoiceXML(data);
    throw new Error('Unsupported receipt type');
  }
}`
    },
    repository: {
      title: "Repository Pattern (แยก Data Access Layer)",
      desc: "ซ่อนการเข้าถึงฐานข้อมูล (PostgreSQL, SQLite Offline, Redis Cache) เพื่อให้ Business Logic ทำงานเป็นอิสระ สามารถทำ Mock Test ได้ง่าย",
      badge: "Clean Architecture",
      code: `class OrderRepository {
  async getOrderById(id) {
    const cached = await redis.get(\`order:\${id}\`);
    if (cached) return JSON.parse(cached);
    return await db.query('SELECT * FROM orders WHERE id = $1', [id]);
  }
}`
    },
    circuit: {
      title: "Circuit Breaker Pattern (ป้องกัน Cascading Failure)",
      desc: "ตรวจจับความล้มเหลวของบริการภายนอก หากเกิด Timeout ซ้ำๆ ระบบจะตัดการเชื่อมต่อชั่วคราว เพื่อป้องกันไม่ให้ทั้งระบบใหญ่ล่มตามกัน",
      badge: "High-Availability SLA 99.999%",
      code: `class CircuitBreaker {
  async callService(apiFunc) {
    if (this.state === 'OPEN') throw new Error('Service down. Circuit OPEN');
    try {
      return await apiFunc();
    } catch (err) {
      this.handleFailure();
    }
  }
}`
    }
  };

  // Tab click listeners
  const patternBtns = document.querySelectorAll('.pattern-tab-btn');
  const titleEl = document.getElementById('pattern-title');
  const descEl = document.getElementById('pattern-desc');
  const badgeEl = document.getElementById('pattern-badge');
  const codeEl = document.getElementById('pattern-code');

  patternBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const patternKey = btn.getAttribute('data-pattern');
      const data = patternData[patternKey];

      if (!data) return;

      // Update active tab styles
      patternBtns.forEach(b => {
        b.classList.remove('bg-brand-500', 'text-white');
        b.classList.add('bg-slate-800', 'text-slate-300');
      });
      btn.classList.remove('bg-slate-800', 'text-slate-300');
      btn.classList.add('bg-brand-500', 'text-white');

      // Update contents
      if (titleEl) titleEl.textContent = data.title;
      if (descEl) descEl.textContent = data.desc;
      if (badgeEl) badgeEl.textContent = data.badge;
      if (codeEl) codeEl.textContent = data.code;
    });
  });
});
