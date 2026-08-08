
tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
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
        'brand-glow': 'var(--shadow-brand)',
      },
      borderRadius: {
        'card': 'var(--radius-card)',
        'btn': 'var(--radius-btn)',
      }
    }
  }
};