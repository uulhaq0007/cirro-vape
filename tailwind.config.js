/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1rem', lg: '1.5rem' },
      screens: { sm: '540px', md: '720px', lg: '960px', xl: '1200px', '2xl': '1200px' },
    },
    extend: {
      colors: {
        ember: { DEFAULT: '#fd6c03', dark: '#d95a00', light: '#ff8c33', glow: '#ffb066' },
        coal: { DEFAULT: '#0a0a0a', deep: '#060606', card: '#1a1a1a', line: '#2a2a2a' },
        smoke: '#a3a3a3',
      },
      fontFamily: {
        display: ['Barlow Condensed', 'Oswald', 'system-ui', 'sans-serif'],
        sans: ['Barlow', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        ember: '0 12px 40px rgba(253, 108, 3, 0.35)',
        card: '0 8px 30px rgba(0, 0, 0, 0.5)',
      },
      keyframes: {
        floatY: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-16px)' } },
        spinSlow: { to: { transform: 'rotate(360deg)' } },
        pulseRing: { '0%': { transform: 'scale(.8)', opacity: '.6' }, '100%': { transform: 'scale(1.7)', opacity: '0' } },
        vapor: {
          '0%': { transform: 'translateY(0) scale(1)', opacity: '0' },
          '30%': { opacity: '.5' },
          '100%': { transform: 'translateY(-70px) scale(1.9)', opacity: '0' },
        },
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        smokeDrift: {
          '0%,100%': { transform: 'translate3d(0,0,0) scale(1.05)' },
          '50%': { transform: 'translate3d(-3%,-2%,0) scale(1.14)' },
        },
      },
      animation: {
        floatY: 'floatY 5s ease-in-out infinite',
        spinSlow: 'spinSlow 24s linear infinite',
        pulseRing: 'pulseRing 2.2s cubic-bezier(.4,0,.6,1) infinite',
        vapor: 'vapor 4s ease-out infinite',
        marquee: 'marquee 30s linear infinite',
        smokeDrift: 'smokeDrift 26s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
