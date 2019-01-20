import css from '@henrikjoreteg/rollup-plugin-css';

const IS_PROD = process.env.NODE_ENV === 'production';

module.exports = {
  input: 'build/server.js',
  output: {
    file: './dist/bundle.js',
    format: 'cjs'
  },
  plugins: [
    css({
      output: './dist/styles.bundle.css',
      minify: IS_PROD
    })
  ]
}
