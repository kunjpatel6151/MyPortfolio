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
        western: ['"Chinese Rocks"', 'Impact', 'sans-serif'],
        subheading: ['"Rye"', '"Playfair Display"', 'serif'],
        body: ['"Courier Prime"', '"Courier New"', 'monospace'],
        ui: ['"Oswald"', '"Helvetica Neue"', 'sans-serif'],
        script: ['"Pinyon Script"', 'Georgia', 'cursive'],
      },
    },
  },
  plugins: [],
}
