import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import { transform } from '@svgr/core';
import template from '../template.cjs';

const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const srcDir = path.resolve(rootDir, 'src');
const utilsDir = path.resolve(srcDir, 'utils');

function toPascalCase(base) {
  const parts = base.split(/[-_]+/);
  let pascal = parts.map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join('');
  if (/^[0-9]/.test(pascal)) {
    pascal = `Icon${pascal}`;
  }
  return pascal;
}

const VARIANTS = [
  { name: 'filled', suffix: '', jsonKey: 'filled' },
  { name: 'outlined', suffix: 'Outlined', jsonKey: 'outlined' },
  { name: 'round', suffix: 'Round', jsonKey: 'round' },
  { name: 'sharp', suffix: 'Sharp', jsonKey: 'sharp' },
  { name: 'two-tone', suffix: 'TwoTone', jsonKey: 'twoTone' },
];

const ICON_TSX_CONTENT = `import {
  SVGProps,
  Ref,
  forwardRef,
  memo,
  ReactElement,
  CSSProperties,
  MemoExoticComponent,
  ForwardRefExoticComponent,
  RefAttributes,
} from 'react';

export interface BaseIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const defaultStyle: CSSProperties = {
  display: 'inline-block',
  verticalAlign: 'middle',
  fill: 'currentColor',
};

export type RenderSvgFn = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => ReactElement;

export const createIcon = (
  renderSvg: RenderSvgFn,
  displayName?: string
) => {
  const IconComponent = memo(
    forwardRef<SVGSVGElement, BaseIconProps>(
      ({ size = '1em', color, style, ...props }, ref) => {
        const mergedStyle: CSSProperties = style
          ? { ...defaultStyle, fontSize: size, color, ...style }
          : { ...defaultStyle, fontSize: size, color };

        return renderSvg({ style: mergedStyle, ...props }, ref);
      }
    )
  );

  if (displayName) {
    IconComponent.displayName = displayName;
  }

  return IconComponent;
};
`;

const svgrOptions = {
  plugins: [
    require.resolve('@svgr/plugin-svgo'),
    require.resolve('@svgr/plugin-jsx'),
  ],
  typescript: true,
  ref: true,
  icon: true,
  expandProps: 'end',
  prettier: false,
  svgo: true,
  replaceAttrValues: {
    '#000': 'currentColor',
    black: 'currentColor',
  },
  svgProps: {
    role: 'img',
  },
  template,
};

async function pMap(items, fn, concurrency = 64) {
  const results = new Array(items.length);
  let index = 0;
  async function worker() {
    while (index < items.length) {
      const i = index++;
      results[i] = await fn(items[i], i);
    }
  }
  const workers = Array.from({ length: Math.min(concurrency, items.length) }, () => worker());
  await Promise.all(workers);
  return results;
}

async function build() {
  const totalStart = performance.now();
  console.log('Starting icon generation...');

  // Reset src directory
  if (fs.existsSync(srcDir)) {
    fs.rmSync(srcDir, { recursive: true, force: true });
  }
  fs.mkdirSync(utilsDir, { recursive: true });

  // Write base Icon.tsx
  fs.writeFileSync(path.join(utilsDir, 'Icon.tsx'), ICON_TSX_CONTENT, 'utf8');

  const manifest = {};
  let totalIcons = 0;

  for (const variant of VARIANTS) {
    const variantStart = performance.now();
    const sourceDir = path.resolve(rootDir, 'node_modules/@material-design-icons/svg', variant.name);

    if (!fs.existsSync(sourceDir)) {
      throw new Error(`Source directory does not exist: ${sourceDir}`);
    }

    const svgFiles = fs
      .readdirSync(sourceDir)
      .filter((f) => f.endsWith('.svg'))
      .sort();

    console.log(`Processing ${variant.name} (${svgFiles.length} icons)...`);

    const seen = new Set();
    const items = svgFiles.map((file) => {
      let base = file.slice(0, -4);
      const normalized = base.replace(/[-_]/g, '').toLowerCase();
      if (seen.has(normalized)) {
        base = `${base}-alt`;
      } else {
        seen.add(normalized);
      }
      const componentName = `${toPascalCase(base)}${variant.suffix}`;
      const filePath = path.join(sourceDir, file);
      return { file, base, componentName, filePath };
    });

    process.env.ICON_SUFFIX = variant.suffix;

    const names = await pMap(items, async ({ componentName, filePath }) => {
      const svgContent = await fs.promises.readFile(filePath, 'utf8');
      const code = await transform(svgContent, svgrOptions, {
        componentName: `Svg${componentName}`,
      });
      await fs.promises.writeFile(path.join(srcDir, `${componentName}.tsx`), code, 'utf8');
      return componentName;
    });

    manifest[variant.jsonKey] = names;
    totalIcons += names.length;
    const variantDuration = ((performance.now() - variantStart) / 1000).toFixed(2);
    console.log(`Finished ${variant.name}: ${names.length} icons in ${variantDuration}s`);
  }

  // Write manifest.json and manifest.ts
  fs.writeFileSync(path.join(utilsDir, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n', 'utf8');
  const manifestTs = `// AUTO-GENERATED by build-icons.mjs — do not edit by hand\nexport const manifest = ${JSON.stringify(manifest, null, 2)} as const;\nexport default manifest;\n`;
  fs.writeFileSync(path.join(utilsDir, 'manifest.ts'), manifestTs, 'utf8');

  // Write loaders.ts
  const allNames = [...new Set(Object.values(manifest).flat())];
  const loaderEntries = allNames.map((name) => `  ${name}: () => import('../${name}.js'),`).join('\n');
  const loadersTs = `// AUTO-GENERATED by build-icons.mjs — do not edit by hand\nexport const iconLoaders: Record<string, () => Promise<any>> = {\n${loaderEntries}\n};\n`;
  fs.writeFileSync(path.join(utilsDir, 'loaders.ts'), loadersTs, 'utf8');

  // Write src/index.ts
  const indexContent = [
    'export * from "./utils/Icon.js";',
    ...allNames.map((name) => `export * from "./${name}.js";`),
  ].join('\n') + '\n';
  fs.writeFileSync(path.join(srcDir, 'index.ts'), indexContent, 'utf8');

  const totalDuration = ((performance.now() - totalStart) / 1000).toFixed(2);
  console.log(`\nAll done! Successfully generated ${totalIcons} icons in ${totalDuration}s`);
}

build().catch((err) => {
  console.error('Build failed:', err);
  process.exit(1);
});
