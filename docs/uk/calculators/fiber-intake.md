# Довідкові орієнтири клітковини

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/fiber-intake.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/fiber-intake.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/fiber-intake.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/fiber-intake.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/fiber-intake.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/fiber-intake.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`fiber-intake` · [NutriFit](https://nutrifit.health/uk/calculators/fiber-intake)

Орієнтири показано окремо: EFSA — 25 г/добу для дорослих; IOM/NASEM — 14 г/1000 ккал. AI IOM за віком і статтю: 19–50 років — 38 г для чоловіків і 25 г для жінок; після 50 — 30 і 21 г. Енергетичний розрахунок не замінює автоматично інші орієнтири.

### Порядок використання

1. Введіть дані: Орієнтири показано окремо: EFSA — 25 г/добу для дорослих; IOM/NASEM — 14 г/1000 ккал. AI IOM за віком і статтю: 19–50 років — 38 г для чоловіків і 25 г для жінок; після 50 — 30 і 21 г. Енергетичний розрахунок не замінює автоматично інші орієнтири.
2. Порівняйте орієнтири: Орієнтири показано окремо: EFSA — 25 г/добу для дорослих; IOM/NASEM — 14 г/1000 ккал. AI IOM за віком і статтю: 19–50 років — 38 г для чоловіків і 25 г для жінок; після 50 — 30 і 21 г. Енергетичний розрахунок не замінює автоматично інші орієнтири.
3. Врахуйте обмеження: Для дорослих від 19 років поза вагітністю та лактацією. Це не індивідуальні межі безпеки й не лікування закрепу, СПК чи підвищеного холестерину. Збільшуйте споживання з урахуванням переносимості. Додаткові 40 мл води на грам клітковини не розраховуються.

### Методика і формула

Орієнтири показано окремо: EFSA — 25 г/добу для дорослих; IOM/NASEM — 14 г/1000 ккал. AI IOM за віком і статтю: 19–50 років — 38 г для чоловіків і 25 г для жінок; після 50 — 30 і 21 г. Енергетичний розрахунок не замінює автоматично інші орієнтири.

Орієнтири показано окремо: EFSA — 25 г/добу для дорослих; IOM/NASEM — 14 г/1000 ккал. AI IOM за віком і статтю: 19–50 років — 38 г для чоловіків і 25 г для жінок; після 50 — 30 і 21 г. Енергетичний розрахунок не замінює автоматично інші орієнтири.

### Обмеження

Для дорослих від 19 років поза вагітністю та лактацією. Це не індивідуальні межі безпеки й не лікування закрепу, СПК чи підвищеного холестерину. Збільшуйте споживання з урахуванням переносимості. Додаткові 40 мл води на грам клітковини не розраховуються.

### Джерела

- [EFSA. Dietary Reference Values summary, 2017](https://www.efsa.europa.eu/sites/default/files/2017_09_DRVs_summary_report.pdf)
- [IOM/NASEM. Dietary Reference Intakes: Fiber, 2006](https://www.nationalacademies.org/read/11537/chapter/11)

## Як вбудувати цей калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="fiber-intake" locale="uk" theme="auto" />;
}
```

### JavaScript-завантажувач

```html
<div data-nutrifit-widget="fiber-intake" data-locale="uk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Звичайний iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/fiber-intake?lang=uk&theme=auto"
  title="Довідкові орієнтири клітковини" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
