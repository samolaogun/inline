import uglify from 'rollup-plugin-uglify';

export default {
  entry: 'src/inline-text.js',
  format: 'umd',
  moduleName: 'inline',
  plugins: [uglify()],
  dest: 'dist/inline-text.js'
};