import assert from 'node:assert/strict';
import { test } from 'node:test';
import { normalizeAppearance, appearanceStyle } from '../src/core/appearance.js';
import { createWidgetUrl } from '../src/core/options.js';

test('передаёт оформление и каждую из шести локалей через URL iframe', () => {
  for (const locale of ['en', 'ru', 'es', 'uk', 'kk', 'uz']) {
    const url = createWidgetUrl({ path: '/widgets/tdee' }, {
      locale, appearance: { background: 'transparent', accent: '#ABC', radius: 0 },
    }, 'instance-id', 'https://example.org');
    assert.equal(url.origin, 'https://nutrifit.health');
    assert.equal(url.pathname, '/widgets/tdee');
    assert.equal(url.searchParams.get('lang'), locale);
    assert.equal(url.searchParams.get('appearanceBackground'), 'transparent');
    assert.equal(url.searchParams.get('appearanceAccent'), '#abc');
    assert.equal(url.searchParams.get('appearanceRadius'), '0');
  }
});

test('отклоняет CSS-инъекции и недопустимый радиус', () => {
  for (const appearance of [null, [], { background: 'url(https://example.org)' },
    { accent: 'var(--foreign)' }, { radius: -1 }, { radius: 33 }, { radius: 1.5 }]) {
    assert.throws(() => normalizeAppearance(appearance));
  }
});

test('сохраняет контраст подписи кнопки на светлом и тёмном акценте', () => {
  assert.equal(appearanceStyle({ accent: '#fff' })['--nutrifit-accent-text'], '#111111');
  assert.equal(appearanceStyle({ accent: '#000' })['--nutrifit-accent-text'], '#ffffff');
  assert.deepEqual(appearanceStyle(), {});
});
