// import typescript from '@rollup/plugin-typescript';
// Import rollup plugins
import {copy} from '@web/rollup-plugin-copy';
import resolve from '@rollup/plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import summary from 'rollup-plugin-summary';
import css from 'rollup-plugin-import-css';
import del from 'rollup-plugin-delete';

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
    css(),
    summary(),
    // // Optional: copy any static assets to build directory
    // copy({
    //   patterns: ['images/**/*'],
    // }),
    del({
      targets: 'dist/*'
    }),
  ],
  input: {
    'rh-footer': './node_modules/@rhds/elements/elements/rh-footer/rh-footer.js',
    'rh-cta': './node_modules/@rhds/elements/elements/rh-cta/rh-cta.js',
    'pfe-navigation': './node_modules/@cpelements/pfe-navigation/dist/pfe-navigation.js',
    'lightdom': './lightdom.css.js',
  },
  output: [{
    dir: './dist',
    // Manually set the entry file name so we can load it in Drupal.
    entryFileNames: '[name].js',
    // Each of these chunks are imported from the entry bundle (and children)
    // so we don't have to manually add these to Drupal.
    chunkFileNames: '[name].js',
    format: 'esm'
  }],
  preserveEntrySignatures: 'strict',
};
