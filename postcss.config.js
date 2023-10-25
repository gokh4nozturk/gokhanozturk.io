import process from 'node:process'

module.exports = {
  plugins: {
    'tailwindcss': {},
    'autoprefixer': {},
    'tailwindcss/nesting': 'postcss-nested',
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
  },
}
