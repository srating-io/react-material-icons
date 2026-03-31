import * as esbuild from 'esbuild';
import { readFile } from 'fs/promises';
import { globSync } from 'glob';

// 1. Read package.json to identify external dependencies
// const pkg = JSON.parse(await readFile(new URL('./package.json', import.meta.url)));


// Mark all dependencies and peerDependencies as external
// so they aren't bundled into your library
// const external = [
//   ...Object.keys(pkg.dependencies || {}),
//   ...Object.keys(pkg.peerDependencies || {}),
// ];

console.log('Start build');

const entryPoints = globSync('src/**/*.{ts,tsx}');

// const sharedConfig = {
//   entryPoints: ['src/**/index.ts'], // Adjust this to your entry point
//   bundle: true,
//   minify: true,
//   sourcemap: true,
//   external,
//   target: 'es2020', // or your browserslist equivalent
// };

const commonConfig = {
  entryPoints,
  logLevel: 'info',
  platform: 'browser',
  target: 'es2020',
  bundle: false, // We don't want one big file, we want a mirror of src
  minify: true,
  sourcemap: true,
  // external,
};

async function build() {
  const start = performance.now();
  await Promise.all([
    // Build ESM (Modern)
    esbuild.build({
      ...commonConfig,
      format: 'esm',
      outdir: 'dist/esm',
      outExtension: { '.js': '.mjs' },
    }),

    // Build CJS (Legacy/Node)
    esbuild.build({
      ...commonConfig,
      format: 'cjs',
      outdir: 'dist/cjs',
      outExtension: { '.js': '.cjs' },
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
