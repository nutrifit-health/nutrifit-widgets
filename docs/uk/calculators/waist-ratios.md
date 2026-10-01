# Калькулятор індексів талії (WHtR, WHR, VAI)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/waist-ratios.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/waist-ratios.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/waist-ratios.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/waist-ratios.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/waist-ratios.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/waist-ratios.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`waist-ratios` · [NutriFit](https://nutrifit.health/uk/calculators/waist-ratios)

Оцінює розподіл жирової тканини, об'єм вісцерального жиру та кардіометаболічний ризик набагато точніше за звичайний ІМТ.

### Порядок використання

1. Знайдіть правильну анатомічну лінію талії: Талію вимірюють не на рівні пупка і не по ременю штанів, а посередині між нижнім ребром та верхівкою тазової кістки. Зробіть звичайний видих.
2. Зробіть вимірювання стегон: Оберніть вимірювальну стрічку навколо найширшої та найбільш виступаючої частини сідниць.
3. Перевірте відношення до зросту: Поділіть талію на зріст: якщо результат менше 0,50, ваші внутрішні органи перебувають у безпеці.

### Методика та формула

Окружність талії безпосередньо відображає об'єм небезпечного вісцерального жиру навколо внутрішніх органів. Співвідношення талії до зросту (WHtR) і талії до стегон (WHR) є визнаними світовими предикторами метаболічних порушень.

WHtR = Талія / Зріст; WHR = Талія / Стегна; VAI (Чол) = (Талія/(39,68+1,88×ІМТ)) × (ТГ/1,03) × (1,31/HDL); VAI (Жін) = (Талія/(35,58+1,89×ІМТ)) × (ТГ/0,81) × (1,52/HDL).

### Обмеження

Не застосовується під час вагітності, при асциті, великих килах черевної стінки або в ранній післяопераційний період.

### Джерела

- [Ashwell M., Gunn P., Gibson S. Waist-to-height ratio is a better screening tool than waist circumference and BMI for adult cardiometabolic risk factors: systematic review and meta-analysis. Obes Rev, 2012;13(3):275–286](https://pubmed.ncbi.nlm.nih.gov/22106927/)
- [World Health Organization. Waist Circumference and Waist-Hip Ratio: Report of a WHO Expert Consultation. Geneva, 2008](https://www.who.int/publications/i/item/9789241501491)
- [Amato M.C. et al. Visceral Adiposity Index: a reliable indicator of visceral fat function associated with cardiometabolic risk. Diabetes Care, 2010;33(4):920–922](https://pubmed.ncbi.nlm.nih.gov/20067971/)

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
  title="Калькулятор індексів талії (WHtR, WHR, VAI)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
