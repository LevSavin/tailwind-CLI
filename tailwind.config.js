module.exports = {
  purge: [
    './dist/**/*.html',
    './dist/**/*.js',
    './dist/**/*.jsx',
    './dist/**/*.vue',
  ],
  darkMode: false,
  theme: {
    extend: {      
      boxShadow: {
        '3xl-orange': '0 16px 55px -12px rgb(255 113 57 / 70%)',
      },
      colors: {
        yellow: {
          550: '#FF7139',
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}