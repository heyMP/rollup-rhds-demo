// import typescript from '@rollup/plugin-typescript';
// Import rollup plugins
import resolve from '@rollup/plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';
import summary from 'rollup-plugin-summary';
import css from 'rollup-plugin-import-css';
import del from 'rollup-plugin-delete';
import copy from 'rollup-plugin-copy'


export default {
  plugins: [
    // Resolve bare module specifiers to relative paths
    resolve(),
    // Minify JS
    terser({
      ecma: 2020,
      module: true,
      warnings: true,
    }),
    // Get any CSS in JS imports
    css(),
    // Print bundle summary
    summary(),
    // Remove old dist directory
    del({
      targets: 'dist/*'
    }),
    copy({
      targets: [
        { src: `node_modules/@patternfly/elements/pf-icon/icons`, dest: 'dist' }
      ]
    }),
  ],
  // Single bundle example
  input: 'bundle.js',
  output: [{
    dir: './dist',
    entryFileNames: '[name].js',
    chunkFileNames: '[name]-chunk.js',
    format: 'esm'
  }],
  preserveEntrySignatures: 'strict',
};
