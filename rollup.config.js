import { nodeResolve } from '@rollup/plugin-node-resolve';

export default [
  {
    input: 'src/main.js',
    output: {
      file: 'www/bundle.js',
      format: 'iife',
      name: 'main'
    },
    plugins: [
      nodeResolve()
    ]
  },
  {
    input: 'src/serverless/txt.js',
    output: {
      file: 'serverless/txt.js',
      format: 'cjs',
      name: 'main'
    },
    plugins: [
      nodeResolve()
    ]
  },
  {
    input: 'src/serverless/json.js',
    output: {
      file: 'serverless/json.js',
      format: 'cjs',
      name: 'main'
    },
    plugins: [
      nodeResolve()
    ]
  }
];
