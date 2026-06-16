export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rdr-red': '#E51B24',
        'rdr-charcoal': '#1A1A1A',
        'rdr-parchment': '#F1EAD6',
        'rdr-white': '#FFFFFF',
      },
      fontFamily: {
        display: ['"Rye"', 'cursive'],
        body: ['"Libre Baskerville"', 'serif'],
      },
    },
  },
  plugins: [],
}
