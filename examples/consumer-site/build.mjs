import { mkdir, copyFile } from 'node:fs/promises';
import { build, context } from 'esbuild';
const options = { entryPoints: ['src/main.jsx'], bundle: true, outdir: 'dist', format: 'esm', sourcemap: true, minify: false, define: { 'process.env.NODE_ENV': '"development"' } };
await mkdir('dist', { recursive: true });
await copyFile('index.html', 'dist/index.html');
if (process.argv.includes('--serve')) {
  const server = await context(options);
  await server.watch();
  await server.serve({ host: '127.0.0.1', port: 5178, servedir: 'dist' });
  console.log('Demo: http://127.0.0.1:5178');
} else {
  await build(options);
}
