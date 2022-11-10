/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        auto: 'repeat(auto-fit, minmax(230px, 1fr))',
      },
      fontFamily: {
        DMSans: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
