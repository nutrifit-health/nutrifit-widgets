import { readFile, appendFile } from 'node:fs/promises';

const { name, version } = JSON.parse(await readFile('package.json', 'utf8'));
const tag = process.env.RELEASE_TAG;
if (tag && tag !== `v${version}`) throw new Error('Tag релиза должен совпадать с версией package.json');
const response = await fetch(`https://registry.npmjs.org/${encodeURIComponent(name)}/${version}`);
if (!response.ok && response.status !== 404) throw new Error(`Registry недоступен: ${response.status}`);
const published = response.ok;
if (process.env.GITHUB_OUTPUT) {
  await appendFile(process.env.GITHUB_OUTPUT, `version=${version}\npublished=${published}\n`);
}
console.log(`${name}@${version}: ${published ? 'уже опубликован' : 'готовится публикация'}`);
