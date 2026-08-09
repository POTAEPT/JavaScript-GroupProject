// การตั้งค่า Tailwind CSS โดยให้ดึงค่าจาก CSS Custom Properties (:root)
tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        // ใช้ตัวแปรฟอนต์จาก CSS
        sans: ['var(--font-prompt)', 'var(--font-inter)', 'sans-serif'],
      },
    colors: {
        brand: {
          50: 'var(--color-brand-50)',
          100: 'var(--color-brand-100)',
          500: 'var(--color-brand-500)',
          600: 'var(--color-brand-600)',
          700: 'var(--color-brand-700)',
        },
        darknavy: {
          900: 'var(--color-navy-900)',
          800: 'var(--color-navy-800)',
          700: 'var(--color-navy-700)',
        },
        canvas: 'var(--color-bg-canvas)',
      },
      boxShadow: {
        'card': '0 2px 10px rgba(0, 0, 0, 0.02)',
        'brand-glow': 'var(--shadow-brand)', // เพิ่มเงาสีส้มของแบรนด์
      },
      borderRadius: {
        'card': 'var(--radius-card)',
        'btn': 'var(--radius-btn)',
      }
    }
  }
};


document.addEventListener('DOMContentLoaded', () => {
  fetch('components/footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer-placeholder').innerHTML = data;
    })
    .catch(error => console.error('Error loading footer:', error));
});


document.addEventListener('DOMContentLoaded', () => {

  fetch('components/header.html')
    .then(response => {
      if (!response.ok) throw new Error('Network response was not ok');
      return response.text();
    })
    .then(htmlData => {
      document.getElementById('navbar-placeholder').innerHTML = htmlData;
      
      setActiveNavLink();
      initMobileMenu();
    })
    .catch(error => console.error('Error loading navbar:', error));

});


function setActiveNavLink() {
  // ดึงชื่อไฟล์จาก URL ปัจจุบัน
  const currentPath = window.location.pathname;
  let currentPage = currentPath.split('/').pop(); 
  
  if (currentPage === '') currentPage = 'Home.html';

  const servicePages = [
    'Services.html',
    'WebCustom.html',
    'ServiceMobile.html',
    'ServiceEnterprise.html',
    'ServiceCloud.html'
  ];


  const navLinks = document.querySelectorAll('nav a, #mobile-menu a');

  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    let isActive = false;

    if (linkHref === currentPage) {
      isActive = true;
    } 
    else if (linkHref === 'Services.html' && servicePages.includes(currentPage)) {
      isActive = true;
    }
    if (isActive) {
      link.classList.remove('text-slate-600', 'hover:text-slate-900');
      link.classList.add('text-brand-500', 'font-semibold');
    }
  });
}

function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
}