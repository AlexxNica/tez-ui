import buble from 'rollup-plugin-buble';

export default {
  entry: 'Tez.UI.dist.js',
  format: 'umd',
  dest: 'bundle.js', // equivalent to --output
  moduleName: 'TezUI',
  plugins: [ buble() ]
}