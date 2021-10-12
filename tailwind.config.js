module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '1/8' : '12.5%',
        '150' : '150px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
