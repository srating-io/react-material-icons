const template = (variables, { tpl }) => {
  const suffix = process.env.ICON_SUFFIX || '';

  let name = variables.componentName.replace(/^Svg/, '') + suffix;

  // If the name starts with a digit, prefix it with 'Icon'
  if (/^\d/.test(name)) {
    name = `Icon${name}`;
  }


  return tpl`
    import { SVGProps } from 'react';
    import { createIcon } from './utils/Icon.js';

    const icon = (${variables.props}) => (
      ${variables.jsx}
    );

    export const ${name} = createIcon(icon);
    export default ${name};
  `;
};

module.exports = template;