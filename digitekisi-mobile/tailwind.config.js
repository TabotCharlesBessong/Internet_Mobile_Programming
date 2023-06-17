/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{html, ts}"],
  theme: {
    extend: {
  backgroundImage: {
    'gradient-primary': 'linear-gradient(to bottom, #00BFA5, #333333)',
    'gradient-secondary': 'linear-gradient(to bottom, #FFD600, #FF9F00)',
    'gradient-tertiary': 'linear-gradient(to bottom, #FF9F00, #FFD600)',
  },

    },
    colors: {
      darkOrange: '#FF9F00',
      brightTurqoise: '#00BFA5',
      brightOrange: '#FFD600',
      white: '#ffffff',
      darkChocolate: '#333333',
      transparent: 'transparent'
    },
  },
  plugins: [],
}

