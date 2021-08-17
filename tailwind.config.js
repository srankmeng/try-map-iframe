module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'color-primary-1': '#002865',
        'color-chart-blue-1': '#0066EC',
        'color-chart-blue-4': '#00B2F6',
        'color-chart-blue-5': '#42DEF9',
        'color-blue-3': '#06BAE7',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
