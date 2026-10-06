
module.exports = {
  typescript: true,
  template: require('./template.cjs'),
  icon: true,
  expandProps: 'end',
  ref: true,
  memo: true,
  prettier: false,
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
