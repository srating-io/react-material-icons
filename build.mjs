import * as esbuild from 'esbuild';
// import { readFile } from 'fs/promises';
import { globSync } from 'glob';
import path from 'path';
import fs from 'fs';

// 1. Read package.json to identify external dependencies
// const pkg = JSON.parse(await readFile(new URL('./package.json', import.meta.url)));


// Mark all dependencies and peerDependencies as external
// so they aren't bundled into your library
// const external = [
//   ...Object.keys(pkg.dependencies || {}),
//   ...Object.keys(pkg.peerDependencies || {}),
// ];

console.log('Start build');

function createExtensionPlugin(extension) {
  return {
    name: `add-${extension}-extension`,
    setup(build) {
      build.onResolve({ filter: /^\./ }, args => {
        // Only rewrite if no extension present
        if (!path.extname(args.path)) {
          // Resolve the absolute path on your hard drive
          // const absolutePath = path.resolve(args.resolveDir, args.path);
          
          // let isDir = false;
          // try {
          //   // Check if the target is a directory
          //   isDir = fs.statSync(absolutePath).isDirectory();
          // } catch (e) {
          //   // Ignore errors (e.g., if the exact path string doesn't exist yet)
          // }

          // // If it's a directory, point to the index file with the right extension
          // if (isDir) {
          //   return { path: `${args.path}/index${extension}`, external: true };
          // }
          
          // // Otherwise, just append the extension to the file
          // return { path: `${args.path}${extension}`, external: true };
          let importPath = args.path;
          if (!importPath.endsWith(extension)) {
            importPath += extension;
          }
          return { path: importPath, external: true };
        }
      });
    },
  };
};


const entryPoints = globSync('src/*.{ts,tsx}');


const commonConfig = {
  entryPoints,
  logLevel: 'info',
  platform: 'browser',
  target: 'es2020',
  bundle: false, // We don't want one big file, we want a mirror of src
  // minifyIdentifiers: false,
  // minifySyntax: true,
  // minifyWhitespace: true,
  minify: true,
  sourcemap: true,
  packages: 'external',
};

const addMjsExtension = createExtensionPlugin('.mjs');
const addCjsExtension = createExtensionPlugin('.cjs');

async function build() {
  const start = performance.now();
  await Promise.all([
    // Individual ESM files (mirror of src) - for deep imports & max compat
    esbuild.build({
      ...commonConfig,
      format: 'esm',
      outdir: 'dist/esm',
      // outExtension: { '.js': '.mjs' },
      // plugins: [addMjsExtension],
    }),
    
    // Build CJS (Legacy/Node)
    esbuild.build({
      ...commonConfig,
      format: 'cjs',
      outdir: 'dist/cjs',
      // outExtension: { '.js': '.cjs' },
      // plugins: [addCjsExtension],
    }),

    // Single ESM bundle - for modern bundlers with tree shaking
    esbuild.build({
      ...commonConfig,
      entryPoints: ['src/index.ts'],
      bundle: true,
      format: 'esm',
      outfile: 'dist/index.js',
    }),
  ]);

  const stop = performance.now();

  console.log(`Build complete - ${(stop - start) / 1000}s`);
}

build().catch((e) => {
  console.log('Build error');
  console.log(e);
  process.exit(1)
});
