const path = require('path');

// The "default" variant - no suffix added
const DEFAULT_VARIANT = 'filled';

function toPascalCase(str) {
  return str
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

function defaultIndexTemplate(filePaths) {
  const seenNames = new Set();

  const exportEntries = filePaths.map(({ path: filePath }) => {
    const basename = path.basename(filePath, path.extname(filePath));

    // Extract the variant folder (outlined, round, sharp, etc.)
    // e.g. src/components/outlined/Abc.tsx -> 'outlined'
    const parts = filePath.split(/[\\/]/);
    const componentsDirIndex = parts.indexOf('components');
    const variant = componentsDirIndex !== -1 ? parts[componentsDirIndex + 1] : null;

    
    // 1. Convert kebab-case filename to PascalCase for the export
    // add-chart -> AddChart | addchart -> Addchart
    let exportName = toPascalCase(basename);

    // 2. Remove 'Svg' prefix if SVGR added it
    exportName = exportName.replace(/^Svg/, '');

    // 3. Handle numbers
    if (/^\d/.test(exportName)) {
      exportName = `Icon${exportName}`;
    }

    // 4. Add variant suffix only if not the default variant
    //    Abc (filled) -> Abc
    //    Abc (round)  -> AbcRound
    const isDefault = !variant || variant === DEFAULT_VARIANT;
    
    if (!isDefault) {
      exportName = `${exportName}${toPascalCase(variant)}`;
    }

      // 5. Fallback dedup (shouldn't be needed anymore, but kept as safety net)
    if (seenNames.has(exportName.toLowerCase())) {
      exportName = `${exportName}Alt`; 
    }

    seenNames.add(exportName.toLowerCase());

    return `export { default as ${exportName} } from './${basename}';`;
  });

  return exportEntries.join('\n');
}

module.exports = defaultIndexTemplate;