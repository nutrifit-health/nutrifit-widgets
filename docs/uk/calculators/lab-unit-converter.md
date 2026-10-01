# Конвертер одиниць лабораторних аналізів

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/lab-unit-converter.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/lab-unit-converter.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/lab-unit-converter.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/lab-unit-converter.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/lab-unit-converter.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/lab-unit-converter.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`lab-unit-converter` · [NutriFit](https://nutrifit.health/uk/calculators/lab-unit-converter)

Перерахунок 33 лабораторних показників між СІ (ммоль/л, мкмоль/л, нмоль/л, пмоль/л) і традиційними одиницями (мг/дл, нг/мл, пг/мл) за молярними масами.

### Порядок використання

1. Виберіть показник: У списку — 33 найчастіших аналіти: від глюкози та холестерину до вітаміну D, тестостерону та кортизолу. Для холестерину, ЛПНЩ і ЛПВЩ коефіцієнт однаковий.
2. Вкажіть напрямок: СІ → традиційні, якщо бланк у ммоль/л або нмоль/л, а референс із зарубіжної статті — у мг/дл або нг/мл. І навпаки, якщо аналіз складено за кордоном.
3. Звірте референс, а не лише число: Референтні інтервали залежать від методу лабораторії. Перерахуйте і межі норми з бланка, щоб порівнювати значення з правильним діапазоном.

### Методика та формула

Коефіцієнт переводить масову концентрацію в молярну з урахуванням молярної маси та одиниці об'єму. Використовуються поширені лабораторні коефіцієнти AMA та Labcorp. Для інсуліну та пролактину коефіцієнт залежить від калібрування аналізу. Для сечовини одиниця мг/дл позначає BUN — масу азоту сечовини.

SI = значення в масових одиницях × коефіцієнт. Зворотний перерахунок: SI ÷ коефіцієнт. Для інсуліну та пролактину перевірте коефіцієнт лабораторії; мг/дл BUN і мг/дл сечовини не є взаємозамінними.

### Обмеження

Перерахунок одиниць не інтерпретує результат і не встановлює діагноз. Референтні інтервали залежать від лабораторії та методу; перераховуйте окремо і їхні межі. Для інсуліну та пролактину звіряйте коефіцієнт з лабораторією.

### Джерела

- [Young D.S. Implementation of SI units for clinical laboratory data. Style specifications and conversion tables. Ann Intern Med, 1987;106(1):114–129](https://pubmed.ncbi.nlm.nih.gov/3789557/)
- [AMA Manual of Style, 11th ed. Units of Measure: Conventional Units and SI Units in Clinical Chemistry. Oxford University Press, 2020](https://academic.oup.com/amamanualofstyle/si-conversion-calculator)
- [NIST Special Publication 811. Guide for the Use of the International System of Units (SI), 2008](https://www.nist.gov/pml/special-publication-811)

## Як вбудувати цей калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="lab-unit-converter" locale="uk" theme="auto" />;
}
```

### JavaScript-завантажувач

```html
<div data-nutrifit-widget="lab-unit-converter" data-locale="uk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Звичайний iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/lab-unit-converter?lang=uk&theme=auto"
  title="Конвертер одиниць лабораторних аналізів" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
