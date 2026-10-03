# Етанол і навчальна оцінка Відмарка

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/alcohol.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/alcohol.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/alcohol.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/alcohol.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/alcohol.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/alcohol.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`alcohol` · [NutriFit](https://nutrifit.health/uk/calculators/alcohol)

Обчислює кількість етанолу, його калорії та приблизну концентрацію за спрощеною моделлю.

### Порядок використання

1. Введіть вихідні дані: Використовуйте фактичні значення й відповідні одиниці.
2. Уточніть параметри: Змініть початкові припущення відповідно до вашої ситуації.
3. Прочитайте результат: Враховуйте обмеження моделі та не сприймайте розрахунок як вимірювання.

### Методика і формула

Етанол, г = об’єм, мл × міцність / 100 × 0,789. C0 = етанол / (маса × r); C(t) = max(0, C0 − 0,15 × t). r = 0,68 для чоловіків і 0,55 для жінок.

Етанол, г = об’єм, мл × міцність / 100 × 0,789. C0 = етанол / (маса × r); C(t) = max(0, C0 − 0,15 × t). r = 0,68 для чоловіків і 0,55 для жінок.

### Обмеження

Середні коефіцієнти не описують конкретну людину. Модель вважає всю введену кількість однією дозою й не враховує всмоктування, їжу та тривалість вживання. Результат не визначає тверезість, час безпечного керування або дотримання закону. Навіть розрахунковий нуль не підтверджує відсутності алкоголю.

### Джерела

- [Widmark E.M.P. Die theoretischen Grundlagen und die praktische Verwendbarkeit der gerichtlich-medizinischen Alkoholbestimmung. Urban & Schwarzenberg, Berlin, 1932](https://doi.org/10.1007/978-3-642-91176-8)
- [Jones AW. et al. Evidence-based survey of the elimination rates of ethanol from blood with applications in forensic casework. Forensic Sci Int, 2010](https://pubmed.ncbi.nlm.nih.gov/20304569/)
- [World Health Organization. Global status report on alcohol and health. Geneva, 2024](https://www.who.int/publications/i/item/9789240096745)

## Як вбудувати цей калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="alcohol" locale="uk" theme="auto" />;
}
```

### JavaScript-завантажувач

```html
<div data-nutrifit-widget="alcohol" data-locale="uk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Звичайний iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/alcohol?lang=uk&theme=auto"
  title="Етанол і навчальна оцінка Відмарка" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
