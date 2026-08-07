// CoreCraft Software — Home Page Interactive JS
document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // 2. TPS & POS Live Simulator
  let tpsCount = 10450;
  let activeNodes = 14200;
  let latencyMs = 42;

  const tpsElement = document.getElementById('sim-tps');
  const nodesElement = document.getElementById('sim-nodes');
  const latencyElement = document.getElementById('sim-latency');
  const simBtn = document.getElementById('sim-boost-btn');
  const statusLog = document.getElementById('sim-status-log');

  if (simBtn) {
    simBtn.addEventListener('click', () => {
      // Simulate real-time transaction burst
      const burst = Math.floor(Math.random() * 2500) + 1000;
      tpsCount += burst;
      activeNodes += Math.floor(Math.random() * 50);
      latencyMs = Math.max(12, latencyMs - Math.floor(Math.random() * 3));

      if (tpsElement) tpsElement.textContent = tpsCount.toLocaleString() + ' TPS';
      if (nodesElement) nodesElement.textContent = activeNodes.toLocaleString();
      if (latencyElement) latencyElement.textContent = latencyMs + ' ms';

      if (statusLog) {
        const time = new Date().toLocaleTimeString();
        const newLog = document.createElement('div');
        newLog.className = 'text-xs text-emerald-400 font-mono animate-pulse';
        newLog.textContent = `[${time}] Kafka Stream: Processed +${burst.toLocaleString()} transactions. Auto-scaling triggered cleanly!`;
        statusLog.prepend(newLog);
        
        // keep log max 4 items
        if (statusLog.children.length > 4) {
          statusLog.removeChild(statusLog.lastChild);
        }
      }
    });
  }

  // Auto-pulse background simulator stats slightly
  setInterval(() => {
    if (tpsElement && Math.random() > 0.5) {
      const delta = Math.floor(Math.random() * 100) - 40;
      tpsCount = Math.max(10000, tpsCount + delta);
      tpsElement.textContent = tpsCount.toLocaleString() + ' TPS';
    }
  }, 2500);
});
