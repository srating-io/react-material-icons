import * as esbuild from 'esbuild';
import { globSync } from 'glob';


console.log('Start build');

const entryPoints = globSync('src/**/*.{ts,tsx}');

const commonConfig = {
  entryPoints,
  outbase: 'src',
  logLevel: 'info',
  platform: 'browser',
  target: 'es2020',
  jsx: 'transform',
  bundle: false, // We don't want one big file, we want a mirror of src
  // minifyIdentifiers: false,
  // minifySyntax: true,
  // minifyWhitespace: true,
  minify: true,
  sourcemap: true,
  packages: 'external',
};


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
    // esbuild.build({
    //   ...commonConfig,
    //   entryPoints: ['src/index.ts'],
    //   bundle: true,
    //   format: 'esm',
    //   outfile: 'dist/index.js',
    // }),
  ]);

  const stop = performance.now();

  console.log(`Build complete - ${(stop - start) / 1000}s`);
}

build().catch((e) => {
  console.log('Build error');
  console.log(e);
  process.exit(1)
});
