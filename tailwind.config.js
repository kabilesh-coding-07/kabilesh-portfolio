/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        noir: '#111827',       /* Deep neo-noir background */
        ink: '#ffffff',        /* White text primarily */
        'comic-cyan': '#00f0ff', /* Cyberpunk/comic neon cyan */
        'comic-yellow': '#ffde00',/* Comic book bold yellow */
        'comic-red': '#ff003c',   /* Bloody/dynamic red */
        'elegant-ivory': '#fdfcf0',
        'elegant-gold': '#c5a059',
        'elegant-dark': '#1a1a1a',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        comic: ['Bangers', 'cursive'],
        serif: ['Playfair Display', 'serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        'brutal': '0px',
      },
      boxShadow: {
        'comic-hard': '6px 6px 0px 0px #00f0ff',
        'comic-hard-yellow': '6px 6px 0px 0px #ffde00',
        'comic-hard-red': '6px 6px 0px 0px #ff003c',
        'comic-dark': '6px 6px 0px 0px #000000',
        'elegant': '0 10px 30px -10px rgba(0,0,0,0.3)',
        'elegant-gold': '0 20px 40px -15px rgba(197, 160, 89, 0.4)',
      }
    },
  },
  plugins: [],
}
