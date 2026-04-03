
module.exports = {
  typescript: true,
  template: require('./template.cjs'),
  icon: true,
  expandProps: 'end',
  memo: true, // Wraps in React.memo for performance
  prettier: true,
  svgo: true,
  filenameCase: 'kebab',
  replaceAttrValues: {
    '#000': 'currentColor',
    'black': 'currentColor',
  },
  svgProps: {
    role: 'img',
  },
};
