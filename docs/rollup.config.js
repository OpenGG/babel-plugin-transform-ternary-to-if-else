import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import virtual from '@rollup/plugin-virtual';
import { visualizer } from 'rollup-plugin-visualizer';

export default {
  input: '../index.js',
  output: {
    file: 'plugin.js',
    format: 'es',
    banner: '/* eslint-disable */',
  },
  plugins: [
    virtual({
      '@babel/code-frame': 'export default null',
    }),
    resolve(),
    commonjs(),
    visualizer(),
  ],
};
