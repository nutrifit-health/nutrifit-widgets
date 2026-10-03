# Авторське колесо самооцінки

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/health-balance-wheel.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/health-balance-wheel.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/health-balance-wheel.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/health-balance-wheel.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/health-balance-wheel.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/health-balance-wheel.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`health-balance-wheel` · [NutriFit](https://nutrifit.health/uk/calculators/health-balance-wheel)

Оцініть задоволеність вісьмома сферами за останні 14 днів від 1 до 10. Загальний бал = середнє × 10; однорідність = max(0, 100 − 18 × стандартне відхилення), з округленням.

### Порядок використання

1. Введіть вихідні дані: Оцініть задоволеність вісьмома сферами за останні 14 днів від 1 до 10. Загальний бал = середнє × 10; однорідність = max(0, 100 − 18 × стандартне відхилення), з округленням.
2. Уточніть параметри: Оцініть задоволеність вісьмома сферами за останні 14 днів від 1 до 10. Загальний бал = середнє × 10; однорідність = max(0, 100 − 18 × стандартне відхилення), з округленням.
3. Прочитайте результат: Це авторська візуалізація, не валідований клінічний тест чи закон здоров’я. Рівні низькі оцінки дають високу однорідність і не означають здоров’я. Початкові значення й профілі — приклади; підтвердьте всі вісім оцінок.

### Методика і формула

Оцініть задоволеність вісьмома сферами за останні 14 днів від 1 до 10. Загальний бал = середнє × 10; однорідність = max(0, 100 − 18 × стандартне відхилення), з округленням.

Оцініть задоволеність вісьмома сферами за останні 14 днів від 1 до 10. Загальний бал = середнє × 10; однорідність = max(0, 100 − 18 × стандартне відхилення), з округленням.

### Обмеження

Це авторська візуалізація, не валідований клінічний тест чи закон здоров’я. Рівні низькі оцінки дають високу однорідність і не означають здоров’я. Початкові значення й профілі — приклади; підтвердьте всі вісім оцінок.

## Як вбудувати цей калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="health-balance-wheel" locale="uk" theme="auto" />;
}
```

### JavaScript-завантажувач

```html
<div data-nutrifit-widget="health-balance-wheel" data-locale="uk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Звичайний iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/health-balance-wheel?lang=uk&theme=auto"
  title="Авторське колесо самооцінки" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
