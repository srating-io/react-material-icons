const path = require('path');

// The "default" variant - no suffix added
const DEFAULT_VARIANT = 'filled';
const VARIANT_SUFFIXES = ['Outlined', 'Round', 'Sharp', 'TwoTone'];

function toPascalCase(str) {
  return str
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

function endsWithVariantSuffix(name) {
  return VARIANT_SUFFIXES.some(suffix => name.endsWith(suffix));
}

function defaultIndexTemplate(filePaths) {
  const nameCount = new Map();

  const planned = filePaths.map(({ path: filePath }) => {
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
    const variantSuffix = isDefault ? '' : toPascalCase(variant);
    const needsFilledSuffix = isDefault && endsWithVariantSuffix(exportName);

    exportName = needsFilledSuffix
      ? `${exportName}Filled`
      : `${exportName}${variantSuffix}`;

    const key = exportName.toLowerCase();
    nameCount.set(key, (nameCount.get(key) || 0) + 1);

    return { basename, exportName, key, variant };
  });

  // Second pass — catch any remaining conflicts (shouldn't happen often now)
  const seenNames = new Map();

  const exportEntries = planned.map(({ basename, exportName, key, variant }) => {
    let finalName = exportName;

    if (nameCount.get(key) > 1) {
      const seen = seenNames.get(key) || 0;
      finalName = seen === 0 ? exportName : `${exportName}${seen + 1}`;
      seenNames.set(key, seen + 1);
    }

    // Safely route the path whether it's in a variant folder or root
    // const folderPath = variant ? `components/${variant}` : '.';
    // e.g. './components/filled/Abc'
    return `export { default as ${finalName} } from './${basename}.tsx';`;
  });

  return exportEntries.join('\n');
}

module.exports = defaultIndexTemplate;