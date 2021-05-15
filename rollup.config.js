// rollup.config.js
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'src/main.js',
  output: {
    file: 'www/bundle.js',
    format: 'iife',
    name: 'main'
  },
  plugins: [
    nodeResolve()
  ]
};
