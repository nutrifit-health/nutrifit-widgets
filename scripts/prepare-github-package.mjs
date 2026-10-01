import { readFile, writeFile, mkdtemp, appendFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { setTimeout as wait } from 'node:timers/promises';

const { name, version } = JSON.parse(await readFile('package.json', 'utf8'));
async function getPublishedMetadata() {
  const url = `https://registry.npmjs.org/${encodeURIComponent(name)}/${version}`;
  for (let attempt = 0; attempt < 10; attempt += 1) {
    const response = await fetch(url, { signal: AbortSignal.timeout(15000) });
    if (response.status === 200) return response.json();
    const retryable = [202, 404, 429].includes(response.status) || response.status >= 500;
    if (!retryable || attempt === 9) {
      throw new Error(`Npm-версия недоступна: ${response.status}`);
    }
    // Новая npm-версия появляется в читающем registry с задержкой.
    await wait(3000);
  }
  throw new Error('Npm-версия не появилась в registry');
}

const metadata = await getPublishedMetadata();
const tarballUrl = new URL(metadata.dist.tarball);
if (tarballUrl.origin !== 'https://registry.npmjs.org') throw new Error('Неожиданный источник npm-архива');
const tarball = await fetch(tarballUrl);
if (!tarball.ok) throw new Error(`Архив недоступен: ${tarball.status}`);
const bytes = Buffer.from(await tarball.arrayBuffer());
const integrity = 'sha512-' + createHash('sha512').update(bytes).digest('base64');
if (integrity !== metadata.dist.integrity) throw new Error('Целостность npm-архива не подтверждена');

const directory = await mkdtemp(join(tmpdir(), 'nutrifit-widgets-'));
const archive = join(directory, 'package.tgz');
await writeFile(archive, bytes);
execFileSync('tar', ['-xzf', archive, '-C', directory]);
const packageDirectory = join(directory, 'package');
const path = join(packageDirectory, 'package.json');
const manifest = JSON.parse(await readFile(path, 'utf8'));
manifest.name = '@nutrifit-health/widgets';
manifest.publishConfig = { registry: 'https://npm.pkg.github.com' };
delete manifest.scripts;
await writeFile(path, JSON.stringify(manifest, null, 2) + '\n');
if (process.env.GITHUB_OUTPUT) {
  await appendFile(process.env.GITHUB_OUTPUT, `directory=${packageDirectory}\nversion=${version}\n`);
}
console.log(`Подготовлена копия ${name}@${version} для GitHub Packages`);
