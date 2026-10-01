# Калькулятор циклів сну

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/sleep-cycles.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/sleep-cycles.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/sleep-cycles.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/sleep-cycles.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/sleep-cycles.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/sleep-cycles.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`sleep-cycles` · [NutriFit](https://nutrifit.health/uk/calculators/sleep-cycles)

Інструмент розрахунку часу сну на основі 90-хвилинних ультрадіанних циклів (фази повільного та швидкого сну) і середнього часу засинання.

### Порядок використання

1. Виберіть напрямок розрахунку: Визначте, що вам потрібно: дізнатися, о котрій лягти спати, щоб прокинутися до будильника, або о котрій завести будильник, якщо лягаєте зараз.
2. Вкажіть латентність засинання: За замовчуванням встановлено 14 хвилин. Якщо ви зазвичай ворочаєтеся довше або засинаєте миттєво, скоригуйте це значення.
3. Виберіть ланцюжок з 5 або 6 циклів: 5 циклів (7 год 30 хв) ідеально підходять для робочих днів, 6 циклів (9 год) — для інтенсивних тренувань або відновлення після недосипу.

### Методика та формула

Розрахунок базується на моделі ультрадіанних циклів тривалістю 90 хвилин, що поєднують стадії NREM (повільний сон) та REM (швидкий сон). Пробудження на межі циклів запобігає інерції сну.

Час пробудження = Час відбою + Засинання (14 хв) + N × 90 хв. Час відбою = Час пробудження - (N × 90 хв) - Засинання (14 хв).

### Обмеження

Калькулятор використовує середню тривалість циклу 90 хвилин. Індивідуальний цикл може варіюватися від 70 до 120 хвилин. При хронічних розладах сну необхідна полісомнографія.

### Джерела

- [Carskadon M.A., Dement W.C. Normal Human Sleep: An Overview. Principles and Practice of Sleep Medicine, 2011;5:16–26](https://doi.org/10.1016/B978-1-4160-6645-3.00002-5)
- [Hirshkowitz M. et al. National Sleep Foundation’s sleep time duration recommendations: methodology and results summary. Sleep Health, 2015;1(1):40–43](https://pubmed.ncbi.nlm.nih.gov/29073412/)
- [Dijk D.J., Czeisler C.A. Contribution of the circadian pacemaker and the homeostatic process to the timing of human sleep. Sleep, 1995;18(5):285–304](https://pubmed.ncbi.nlm.nih.gov/7676163/)

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
  title="Калькулятор циклів сну" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
