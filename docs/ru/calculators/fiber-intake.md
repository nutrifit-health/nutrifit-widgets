# Справочные ориентиры клетчатки

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/fiber-intake.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/fiber-intake.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/fiber-intake.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/fiber-intake.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/fiber-intake.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/fiber-intake.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`fiber-intake` · [NutriFit](https://nutrifit.health/ru/calculators/fiber-intake)

Ориентиры показаны раздельно: EFSA — 25 г/сут для взрослых; IOM/NASEM — 14 г/1000 ккал. AI IOM по возрасту и полу: 19–50 лет — 38 г для мужчин и 25 г для женщин; после 50 — 30 и 21 г. Энергетический расчёт не заменяет автоматически другие ориентиры.

### Порядок использования

1. Введите данные: Ориентиры показаны раздельно: EFSA — 25 г/сут для взрослых; IOM/NASEM — 14 г/1000 ккал. AI IOM по возрасту и полу: 19–50 лет — 38 г для мужчин и 25 г для женщин; после 50 — 30 и 21 г. Энергетический расчёт не заменяет автоматически другие ориентиры.
2. Сравните ориентиры: Ориентиры показаны раздельно: EFSA — 25 г/сут для взрослых; IOM/NASEM — 14 г/1000 ккал. AI IOM по возрасту и полу: 19–50 лет — 38 г для мужчин и 25 г для женщин; после 50 — 30 и 21 г. Энергетический расчёт не заменяет автоматически другие ориентиры.
3. Учитывайте ограничения: Для взрослых с 19 лет вне беременности и лактации. Ориентиры не задают индивидуальный предел безопасности и не назначают лечение запора, СРК или повышенного холестерина. Увеличивать потребление следует с учётом переносимости; дополнительные 40 мл воды на грамм клетчатки не рассчитываются.

### Методика и формула

Ориентиры показаны раздельно: EFSA — 25 г/сут для взрослых; IOM/NASEM — 14 г/1000 ккал. AI IOM по возрасту и полу: 19–50 лет — 38 г для мужчин и 25 г для женщин; после 50 — 30 и 21 г. Энергетический расчёт не заменяет автоматически другие ориентиры.

Ориентиры показаны раздельно: EFSA — 25 г/сут для взрослых; IOM/NASEM — 14 г/1000 ккал. AI IOM по возрасту и полу: 19–50 лет — 38 г для мужчин и 25 г для женщин; после 50 — 30 и 21 г. Энергетический расчёт не заменяет автоматически другие ориентиры.

### Ограничения

Для взрослых с 19 лет вне беременности и лактации. Ориентиры не задают индивидуальный предел безопасности и не назначают лечение запора, СРК или повышенного холестерина. Увеличивать потребление следует с учётом переносимости; дополнительные 40 мл воды на грамм клетчатки не рассчитываются.

### Источники

- [EFSA. Dietary Reference Values summary, 2017](https://www.efsa.europa.eu/sites/default/files/2017_09_DRVs_summary_report.pdf)
- [IOM/NASEM. Dietary Reference Intakes: Fiber, 2006](https://www.nationalacademies.org/read/11537/chapter/11)

## Как встроить этот калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="fiber-intake" locale="ru" theme="auto" />;
}
```

### JavaScript-загрузчик

```html
<div data-nutrifit-widget="fiber-intake" data-locale="ru" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Обычный iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/fiber-intake?lang=ru&theme=auto"
  title="Справочные ориентиры клетчатки" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
