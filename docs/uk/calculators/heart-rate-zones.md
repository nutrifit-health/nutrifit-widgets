# Калькулятор пульсових зон

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/heart-rate-zones.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/heart-rate-zones.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/heart-rate-zones.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/heart-rate-zones.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/heart-rate-zones.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/heart-rate-zones.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`heart-rate-zones` · [NutriFit](https://nutrifit.health/uk/calculators/heart-rate-zones)

Розраховує індивідуальні межі 5 тренувальних пульсових зон з урахуванням максимального пульсу та пульсу у спокої (метод резерву серцевого ритму).

### Порядок використання

1. Виміряйте ранковий пульс спокою: Прокинувшись вранці, не встаючи з ліжка, виміряйте пульс пульсометром або вручну протягом 60 секунд протягом 3 днів і виведіть середнє значення.
2. Розрахуйте зони за формулою Карвонена: Калькулятор відніме пульс спокою від максимального пульсу, встановивши ваш фактичний робочий резерв.
3. Розподіліть об'єм за правилом 80/20: Проводьте близько 80% усіх тренувань у 2-й зоні, а решту 20% спрямовуйте на високоінтенсивну роботу в 4-й і 5-й зонах.

### Методика та формула

Метод Карвонена враховує резерв частоти серцевих скорочень (HRR = ЧСС max − ЧСС спокою). Врахування ранкового пульсу у спокої дозволяє персоналізувати зони під рівень тренованості серцево-судинної системи.

ЧСС max (Tanaka) = 208 − 0,7 × Вік; HRR = ЧСС max − ЧСС спокою; Цільовий пульс = ЧСС спокою + (% інтенсивності × HRR). Формула Хаскелла: ЧСС max = 220 − Вік.

### Обмеження

Формули максимального пульсу мають стандартну похибку ±10–12 уд/хв. Для клінічної точності рекомендовано очне газоаналітичне тестування (CPET).

### Джерела

- [Tanaka H., Monahan K.D., Seals D.R. Age-predicted maximal heart rate revisited. J Am Coll Cardiol, 2001;37(1):153–156](https://pubmed.ncbi.nlm.nih.gov/11153730/)
- [Karvonen M.J., Kentala E., Mustala O. The effects of training on heart rate; a longitudinal study. Ann Med Exp Biol Fenn, 1957;35(3):307–315](https://pubmed.ncbi.nlm.nih.gov/13470504/)
- [American College of Sports Medicine. ACSM’s Guidelines for Exercise Testing and Prescription. 11th ed. Wolters Kluwer, 2021](https://www.acsm.org/education-resources/books/guidelines-exercise-testing-prescription)

## Як вбудувати цей калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="heart-rate-zones" locale="uk" theme="auto" />;
}
```

### JavaScript-завантажувач

```html
<div data-nutrifit-widget="heart-rate-zones" data-locale="uk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Звичайний iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/heart-rate-zones?lang=uk&theme=auto"
  title="Калькулятор пульсових зон" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
