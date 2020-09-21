const pkg = require('./package.json');

module.exports = {
  title: 'Pixel Components',
  description: pkg.description,
  distPath: '.docs',
  // TODO watch
  assets: [
    {
      src: 'src/style'
    },
    {
      src: 'node_modules/@pixel/fonts/dist',
      dest: 'fonts'
    },
    {
      src: 'node_modules/@pixel/icons/fonts',
      dest: 'icons'
    },
    {
      src: 'dist'
    }
  ],
  head: [
    '<link rel="stylesheet" href="/assets/variables.css"></link>',
    '<link rel="stylesheet" href="/assets/fonts/PixelArial.css"></link>',
    '<link rel="stylesheet" href="/assets/icons/PixelIcons.css"></link>',
    '<script type="module" src="/assets/pixel-components/pixel-components.esm.js"></script>',
    '<script nomodule="" src="/assets/pixel-components/pixel-components.js"></script>'
  ]
};
