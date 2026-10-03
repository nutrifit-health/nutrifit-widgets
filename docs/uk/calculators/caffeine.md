# Залишок кофеїну: розрахункова модель

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/caffeine.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/caffeine.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/caffeine.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/caffeine.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/caffeine.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/caffeine.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`caffeine` · [NutriFit](https://nutrifit.health/uk/calculators/caffeine)

Оцінює залишок кофеїну зараз і перед сном за вибраного періоду напіввиведення.

### Порядок використання

1. Введіть вихідні дані: Використовуйте фактичні значення й відповідні одиниці.
2. Уточніть параметри: Змініть початкові припущення відповідно до вашої ситуації.
3. Прочитайте результат: Враховуйте обмеження моделі та не сприймайте розрахунок як вимірювання.

### Методика і формула

Залишок = доза × 2^(−t / T½). Добова сума містить лише введені дози за останні 24 години.

Залишок = доза × 2^(−t / T½). Добова сума містить лише введені дози за останні 24 години.

### Обмеження

Період напіввиведення індивідуальний і може змінюватися через вагітність, хвороби та ліки. Введіть припущення; 5 годин не є вашою виміряною швидкістю виведення. Залишок не прогнозує якість сну. Орієнтири EFSA 400 мг/добу для здорових дорослих і 200 мг/добу за вагітності не гарантують індивідуальної безпеки.

### Джерела

- [EFSA Panel on Dietetic Products, Nutrition and Allergies. Scientific Opinion on the safety of caffeine. EFSA Journal, 2015;13(5):4102](https://doi.org/10.2903/j.efsa.2015.4102)
- [Guest NS et al. International society of sports nutrition position stand: caffeine and exercise performance. J Int Soc Sports Nutr, 2021](https://pubmed.ncbi.nlm.nih.gov/33388079/)
- [Drake C et al. Caffeine effects on sleep taken 0, 3, or 6 hours before going to bed. J Clin Sleep Med, 2013](https://pubmed.ncbi.nlm.nih.gov/24235903/)

## Як вбудувати цей калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="caffeine" locale="uk" theme="auto" />;
}
```

### JavaScript-завантажувач

```html
<div data-nutrifit-widget="caffeine" data-locale="uk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Звичайний iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/caffeine?lang=uk&theme=auto"
  title="Залишок кофеїну: розрахункова модель" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
