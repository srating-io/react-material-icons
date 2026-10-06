const template = (variables, { tpl }) => {
  const suffix = process.env.ICON_SUFFIX || '';

  let name = variables.componentName.replace(/^Svg/, '');
  if (suffix && !name.endsWith(suffix)) {
    name = `${name}${suffix}`;
  }

  // If the name starts with a digit, prefix it with 'Icon'
  if (/^\d/.test(name)) {
    name = `Icon${name}`;
  }

  return tpl`
    import type { SVGProps, Ref } from 'react';
    import { createIcon } from './utils/Icon.js';

    export const ${name} = createIcon((${variables.props}) => (
      ${variables.jsx}
    ), '${name}');
    export default ${name};
  `;
};

module.exports = template;