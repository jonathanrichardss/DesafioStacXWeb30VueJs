/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    "./src/**/*.{html,js,vue}"
  ],
  theme: {
    extend: {
      colors: {
        'stackx-bg': '#121212',
        'stackx-cont': '#27272A'
      },
    },
  },
  plugins: [],
}
