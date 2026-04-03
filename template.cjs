const template = (variables, { tpl }) => {
  let name = variables.componentName.replace(/^Svg/, '');

  // If the name starts with a digit, prefix it with 'Icon'
  if (/^\d/.test(name)) {
    name = `Icon${name}`;
  }

  return tpl`
    import { SVGProps } from 'react';
    import { createIcon } from './Icon.tsx';

    const icon = (${variables.props}) => (
      ${variables.jsx}
    );

    export const ${name} = createIcon(icon);
  `;
};

module.exports = template;