// import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';

export default [{
  input: {
    'rh-footer': './node_modules/@rhds/elements/elements/rh-footer/rh-footer.js',
    'pfe-cta': './node_modules/@patternfly/pfe-cta/dist/pfe-cta.js',
  },
  plugins: [
    // Resolve bare module specifiers to relative paths.
    resolve()
  ],
  output: [
  {
    dir: './dist/js/modules',
    // Manually set the entry file name so we can load it in Drupal.
    entryFileNames: '[name]-entry.js',
    // Each of these chunks are imported from the entry bundle (and children)
    // so we don't have to manually add these to Drupal.
    chunkFileNames: '[name]-[hash].js',
    format: 'esm'
  }]
}];
