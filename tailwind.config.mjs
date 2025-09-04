/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

  // 👇 AÑADIDO: clases que deben generarse aunque sean dinámicas
  safelist: [
    // text
    'text-primary','text-secondary','text-comienza','text-crece','text-crea','text-transforma',
    // bg sólidos
    'bg-primary','bg-secondary','bg-comienza','bg-crece','bg-crea','bg-transforma',
    // bg con opacidad usadas en dropdowns
    'bg-comienza/10','bg-crece/10','bg-crea/10','bg-transforma/10',
    // hovers comunes que usas
    'hover:bg-primary','hover:bg-comienza','hover:bg-crece','hover:bg-crea','hover:bg-transforma',
  ],

  theme: {
    extend: {
      fontFamily: {
        'museo': ['Museo Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#002040',
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#002040',
        },
        secondary: '#3C3C3C',
        accent: '#2C70B1',
        comienza: { DEFAULT: '#1E7A3E', light: '#4CAF50', dark: '#0F5132' },
        crece: { DEFAULT: '#FB8038', light: '#FFA726', dark: '#E65100' },
        crea: { DEFAULT: '#2C70B1', light: '#42A5F5', dark: '#1565C0' },
        transforma: { DEFAULT: '#8550CC', light: '#AB47BC', dark: '#4A148C' },
        text: { primary: '#002040', secondary: '#3C3C3C', muted: '#6B7280' },
        border: { light: '#E5E7EB', DEFAULT: '#D1D5DB', dark: '#9CA3AF' }
      },
      fontSize: {
        h1: ['56px', { lineHeight: '1.2', fontWeight: '700' }],
        h2: ['42px', { lineHeight: '1.3', fontWeight: '700' }],
        h3: ['34px', { lineHeight: '1.4', fontWeight: '700' }],
        h4: ['24px', { lineHeight: '1.5', fontWeight: '700' }],
        h5: ['14px', { lineHeight: '1.6', fontWeight: '700' }],
        s1: ['28px', { lineHeight: '1.4', fontWeight: '700' }],
      },
      spacing: { '18': '4.5rem', '88': '22rem' },
      borderRadius: { button: '4px' },
      boxShadow: {
        card: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        button: '0 2px 4px rgba(0, 32, 64, 0.1)',
      }
    },
  },
  plugins: [],
}