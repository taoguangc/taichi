module.exports = {
  purge: {
    enabled: process.env.HUGO_ENVIRONMENT === "production",
    content: ["./content/**/*.md", "./content/**/*.html", "./themes/*/layouts/**/*.html"],
    options: {
      whitelist: [],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        benne: ['Benne', 'system-ui', '-apple-system', 'san-serif'],
        roboto: ['Roboto', 'system-ui', '-apple-system', 'san-serif'],
      },
      margin: {
        '128': '32rem',
        '160': '40rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
