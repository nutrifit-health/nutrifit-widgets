import { build } from 'esbuild';
import { mkdir, copyFile, readdir, rm } from 'node:fs/promises';

await rm('dist', { recursive: true, force: true });
await mkdir('dist/core', { recursive: true });
await build({
  entryPoints: ['src/index.ts'],
  outfile: 'dist/index.js',
  bundle: true,
  format: 'esm',
  platform: 'browser',
  target: 'es2022',
  external: ['react', 'react/jsx-runtime'],
  banner: { js: '"use client";\n/*! Copyright (c) 2026 NUTRIFIT LLC. MIT License. */' },
  sourcemap: true,
});
await copyFile('src/embed.js', 'dist/embed.js');
await copyFile('LICENSE', 'dist/LICENSE');
for (const file of await readdir('src/core')) {
  if (file.endsWith('.js')) await copyFile('src/core/' + file, 'dist/core/' + file);
}

await build({
  entryPoints: ['src/native/index.ts'], outfile: 'dist/native.js', bundle: true,
  format: 'esm', platform: 'browser', target: 'es2022',
  external: ['react', 'react/jsx-runtime'],
  banner: { js: '"use client";\n/*! Copyright (c) 2026 NUTRIFIT LLC. MIT License. */' },
  sourcemap: true,
});
