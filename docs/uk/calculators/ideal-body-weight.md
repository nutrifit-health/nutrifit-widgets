# Калькулятор ідеальної ваги (IBW та AdjBW)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/ideal-body-weight.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/ideal-body-weight.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/ideal-body-weight.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/ideal-body-weight.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/ideal-body-weight.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/ideal-body-weight.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`ideal-body-weight` · [NutriFit](https://nutrifit.health/uk/calculators/ideal-body-weight)

Розраховує еталонну масу тіла за загальновизнаними клінічними формулами та визначає скориговану вагу (AdjBW) для нутриціології та медицини.

### Порядок використання

1. Порівняйте формулу Девайна зі здоровим ІМТ: Формула Devine зазвичай потрапляє в середину діапазону норми — ІМТ 21,5–22,5 кг/м².
2. Використовуйте AdjBW при надлишковій вазі: Якщо фактична вага перевищує ідеальну на понад 20% (ІМТ > 30), розраховуйте харчування за AdjBW, а не за реальною вагою.
3. Враховуйте тип статури (нормо-, гіпер-, астеніки): Людям з широкою кісткою комфортно і фізіологічно правильно перебувати ближче до верхньої межі норм ВООЗ (ІМТ 23–24,9).

### Методика та формула

Медичні формули ідеальної маси тіла розроблялися для стандартизації дозувань ліків, ниркового кліренсу та параметрів вентиляції легень. На відміну від естетичних таблиць, вони визначають фізіологічний гомеостаз.

Devine (чол): 50 + 2,3 × (Зріст_дюйм − 60); Devine (жін): 45,5 + 2,3 × (Зріст_дюйм − 60); AdjBW = IBW + 0,4 × (Факт_Вага − IBW); Robinson: чол 52 + 1,9×дюйм, жін 49 + 1,7×дюйм.

### Обмеження

Формули не враховують розвинену м'язову масу спортсменів та індивідуальні типи кісткової структури (нормо-, гіпер-, астеніки).

### Джерела

- [Devine B.J. Gentamicin therapy. Drug Intell Clin Pharm, 1974;8:650–655](https://pubmed.ncbi.nlm.nih.gov/4611413/)
- [Robinson J.D. et al. Determination of ideal body weight for drug dosing. Am J Hosp Pharm, 1983;40(6):1016–1019](https://pubmed.ncbi.nlm.nih.gov/6869387/)
- [Miller P.F. et al. Comparison of formulas for estimating ideal body weight. Am J Hosp Pharm, 1983;40:1622](https://pubmed.ncbi.nlm.nih.gov/6638027/)
- [Hamwi G.J. Therapy: changing concepts in diabetes mellitus. In: Danowski T.S. (ed). Diabetes Mellitus: Diagnosis and Treatment. ADA, 1964:73–78](https://pubmed.ncbi.nlm.nih.gov/14207860/)

## Як вбудувати цей калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="ideal-body-weight" locale="uk" theme="auto" />;
}
```

### JavaScript-завантажувач

```html
<div data-nutrifit-widget="ideal-body-weight" data-locale="uk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Звичайний iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/ideal-body-weight?lang=uk&theme=auto"
  title="Калькулятор ідеальної ваги (IBW та AdjBW)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
