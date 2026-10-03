# Індекси талії WHR, WHtR і VAI

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/waist-ratios.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/waist-ratios.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/waist-ratios.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/waist-ratios.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/waist-ratios.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/waist-ratios.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`waist-ratios` · [NutriFit](https://nutrifit.health/uk/calculators/waist-ratios)

WHR = талія / стегна; WHtR = талія / зріст. Талію вимірюють між нижнім ребром і верхом таза після спокійного видиху, стегна — у найширшому місці. VAI також використовує масу, ТГ і ЛПВЩ у ммоль/л за Amato (2010).

### Порядок використання

1. Введіть вихідні дані: WHR = талія / стегна; WHtR = талія / зріст. Талію вимірюють між нижнім ребром і верхом таза після спокійного видиху, стегна — у найширшому місці. VAI також використовує масу, ТГ і ЛПВЩ у ммоль/л за Amato (2010).
2. Уточніть параметри: WHtR = Талія / Зріст; WHR = Талія / Стегна; VAI (Чол) = (Талія/(39,68+1,88×ІМТ)) × (ТГ/1,03) × (1,31/HDL); VAI (Жін) = (Талія/(35,58+1,89×ІМТ)) × (ТГ/0,81) × (1,52/HDL).
3. Прочитайте результат: Індекси не вимірюють вісцеральний жир безпосередньо. Малий WHtR не встановлює недостатню масу; універсальні категорії WHR і VAI не присвоюються. Рекомендації NICE щодо WHtR стосуються дорослих з ІМТ < 35.

### Методика і формула

WHR = талія / стегна; WHtR = талія / зріст. Талію вимірюють між нижнім ребром і верхом таза після спокійного видиху, стегна — у найширшому місці. VAI також використовує масу, ТГ і ЛПВЩ у ммоль/л за Amato (2010).

WHtR = Талія / Зріст; WHR = Талія / Стегна; VAI (Чол) = (Талія/(39,68+1,88×ІМТ)) × (ТГ/1,03) × (1,31/HDL); VAI (Жін) = (Талія/(35,58+1,89×ІМТ)) × (ТГ/0,81) × (1,52/HDL).

### Обмеження

Індекси не вимірюють вісцеральний жир безпосередньо. Малий WHtR не встановлює недостатню масу; універсальні категорії WHR і VAI не присвоюються. Рекомендації NICE щодо WHtR стосуються дорослих з ІМТ < 35.

### Джерела

- [Ashwell M et al. Waist-to-height ratio is a better screening tool than waist circumference and BMI for adult cardiometabolic risk factors: systematic review and meta-analysis. Obes Rev, 2012](https://pubmed.ncbi.nlm.nih.gov/22106927/)
- [World Health Organization. Waist Circumference and Waist-Hip Ratio: Report of a WHO Expert Consultation. Geneva, 2008](https://www.who.int/publications/i/item/9789241501491)
- [Amato MC et al. Visceral Adiposity Index: a reliable indicator of visceral fat function associated with cardiometabolic risk. Diabetes Care, 2010](https://pubmed.ncbi.nlm.nih.gov/20067971/)

## Як вбудувати цей калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="waist-ratios" locale="uk" theme="auto" />;
}
```

### JavaScript-завантажувач

```html
<div data-nutrifit-widget="waist-ratios" data-locale="uk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Звичайний iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/waist-ratios?lang=uk&theme=auto"
  title="Індекси талії WHR, WHtR і VAI" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
