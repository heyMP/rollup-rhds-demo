// import typescript from '@rollup/plugin-typescript';
// Import rollup plugins
import {copy} from '@web/rollup-plugin-copy';
import resolve from '@rollup/plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import summary from 'rollup-plugin-summary';

export default {
  plugins: [
    // Resolve bare module specifiers to relative paths
    resolve(),
    // Minify HTML template literals
    minifyHTML(),
    // Minify JS
    terser({
      ecma: 2020,
      module: true,
      warnings: true,
    }),
    // Print bundle summary
    summary(),
    // // Optional: copy any static assets to build directory
    // copy({
    //   patterns: ['images/**/*'],
    // }),
  ],
  input: {
    'rh-footer': './node_modules/@rhds/elements/elements/rh-footer/rh-footer.js',
    'pfe-cta': './node_modules/@patternfly/pfe-cta/dist/pfe-cta.js',
  },
  output: [{
    dir: './dist/js/modules',
    // Manually set the entry file name so we can load it in Drupal.
    entryFileNames: '[name]-entry.js',
    // Each of these chunks are imported from the entry bundle (and children)
    // so we don't have to manually add these to Drupal.
    chunkFileNames: '[name]-[hash].js',
    format: 'esm'
  }],
  preserveEntrySignatures: 'strict',
};
