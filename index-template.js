const path = require('path');

function defaultIndexTemplate(filePaths) {
  const seenNames = new Set();

  const exportEntries = filePaths.map(({ path: filePath }) => {
    const basename = path.basename(filePath, path.extname(filePath));
    
    // 1. Convert kebab-case filename to PascalCase for the export
    // add-chart -> AddChart | addchart -> Addchart
    let exportName = basename
      .split('-')
      .map(part => part.charAt(0).toUpperCase() + part.slice(1))
      .join('');

    // 2. Remove 'Svg' prefix if SVGR added it
    exportName = exportName.replace(/^Svg/, '');

    // 3. Handle numbers
    if (/^\d/.test(exportName)) {
      exportName = `Icon${exportName}`;
    }

    if (seenNames.has(exportName.toLowerCase())) {
      exportName = `${exportName}Alt`; 
    }

    seenNames.add(exportName.toLowerCase());

    return `export { default as ${exportName} } from './${basename}';`;
  });

  return exportEntries.join('\n');
}

module.exports = defaultIndexTemplate;