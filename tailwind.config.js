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
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        comic: ['Bangers', 'cursive'],
      },
      borderRadius: {
        '4xl': '2rem',
        'brutal': '0px', /* Brutalist sharp edges if needed, though we will mix rounded for comic bubbles */
      },
      boxShadow: {
        'comic-hard': '6px 6px 0px 0px #00f0ff',
        'comic-hard-yellow': '6px 6px 0px 0px #ffde00',
        'comic-hard-red': '6px 6px 0px 0px #ff003c',
        'comic-dark': '6px 6px 0px 0px #000000',
      }
    },
  },
  plugins: [],
}
