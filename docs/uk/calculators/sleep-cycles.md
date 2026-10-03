# Планувальник сну

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/sleep-cycles.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/sleep-cycles.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/sleep-cycles.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/sleep-cycles.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/sleep-cycles.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/sleep-cycles.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`sleep-cycles` · [NutriFit](https://nutrifit.health/uk/calculators/sleep-cycles)

Час відходу до сну або підйому для 7, 8 і 9 годин сну з урахуванням часу засинання.

### Порядок використання

1. Введіть вихідні дані: Використовуйте фактичні значення й відповідні одиниці.
2. Уточніть параметри: Змініть початкові припущення відповідно до вашої ситуації.
3. Прочитайте результат: Враховуйте обмеження моделі та не сприймайте розрахунок як вимірювання.

### Методика і формула

Час підйому = час відходу до сну + час засинання + тривалість сну; час відходу до сну обчислюється зворотним відніманням.

Час підйому = час відходу до сну + час засинання + тривалість сну; час відходу до сну обчислюється зворотним відніманням.

### Обмеження

Більшості дорослих рекомендують 7–9 годин сну. Це варіанти розкладу, а не індивідуальна норма чи прогноз фази сну. Цикли й стадії сну змінюються протягом ночі. За введеним часом не можна гарантувати пробудження в REM або легкість підйому.

### Джерела

- [NHLBI. How Sleep Works: Sleep Phases and Stages](https://www.nhlbi.nih.gov/health/sleep/stages-of-sleep)
- [NHLBI. How Sleep Works: How Much Sleep Is Enough?](https://www.nhlbi.nih.gov/health/sleep/how-much-sleep)
- [Hirshkowitz M et al. National Sleep Foundation's sleep time duration recommendations: methodology and results summary. Sleep Health, 2015](https://pubmed.ncbi.nlm.nih.gov/29073412/)

## Як вбудувати цей калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="sleep-cycles" locale="uk" theme="auto" />;
}
```

### JavaScript-завантажувач

```html
<div data-nutrifit-widget="sleep-cycles" data-locale="uk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Звичайний iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/sleep-cycles?lang=uk&theme=auto"
  title="Планувальник сну" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
