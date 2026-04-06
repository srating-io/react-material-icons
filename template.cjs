const template = (variables, { tpl }) => {
  const suffix = process.env.ICON_SUFFIX || '';

  let name = variables.componentName.replace(/^Svg/, '') + suffix;



  return tpl`
    import { SVGProps } from 'react';
    import { createIcon } from './utils/Icon.js';

    const icon = (${variables.props}) => (
      ${variables.jsx}
    );

    export const ${name} = createIcon(icon);
  `;
};

module.exports = template;