# Калькулятор идеального веса (IBW и AdjBW)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/ideal-body-weight.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/ideal-body-weight.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/ideal-body-weight.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/ideal-body-weight.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/ideal-body-weight.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/ideal-body-weight.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`ideal-body-weight` · [NutriFit](https://nutrifit.health/ru/calculators/ideal-body-weight)

Рассчитывает эталонную массу тела по общепринятым клиническим формулам для дозирования медикаментов, оценки нутритивного статуса и здорового диапазона ИМТ 18,5–24,9.

### Порядок использования

1. Сравните формулу Дивайна со здоровым ИМТ: Формула Devine обычно попадает в середину здорового диапазона ИМТ (около 22–22,5 кг/м²).
2. Используйте AdjBW при избыточном весе: Если фактический вес превышает идеальный более чем на 20%, для расчёта белков и калорий диетологи используют формулу AdjBW.
3. Учитывайте тип кости (нормо-, гипер-, астеник): Людям с широкой костью комфортно ближе к верхней границе нормы (Miller или ИМТ 24), а астеникам — ближе к нижней границе (Robinson или ИМТ 20).

### Методика и формула

Медицинские формулы идеальной массы тела (IBW) создавались для клинической фармакологии и нутритивной поддержки. Формула Дивайна (Devine, 1974) — признанный глобальный стандарт клиник США и Европы. При избыточном весе (> 120% от IBW) рассчитывается скорректированный вес (Adjusted Body Weight, AdjBW).

Devine (муж): 50 + 2,3 × (Рост_дюйм − 60); Devine (жен): 45,5 + 2,3 × (Рост_дюйм − 60); Robinson: 52/49 + 1,9/1,7 × дюймы; Hamwi: 48/45,5 + 2,7/2,2 × дюймы; AdjBW = IBW + 0,4 × (Фактический − IBW).

### Ограничения

Формулы не учитывают развитую мышечную массу и ширину костного скелета. Не применимы к профессиональным спортсменам силовых видов спорта и людям ниже 135 см.

### Источники

- [Devine B.J. Gentamicin therapy. Drug Intell Clin Pharm, 1974;8:650–655](https://pubmed.ncbi.nlm.nih.gov/4611413/)
- [Robinson J.D. et al. Determination of ideal body weight for drug dosing. Am J Hosp Pharm, 1983;40(6):1016–1019](https://pubmed.ncbi.nlm.nih.gov/6869387/)
- [Miller P.F. et al. Comparison of formulas for estimating ideal body weight. Am J Hosp Pharm, 1983;40:1622](https://pubmed.ncbi.nlm.nih.gov/6638027/)
- [Hamwi G.J. Therapy: changing concepts in diabetes mellitus. In: Danowski T.S. (ed). Diabetes Mellitus: Diagnosis and Treatment. ADA, 1964:73–78](https://pubmed.ncbi.nlm.nih.gov/14207860/)

## Как встроить этот калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="ideal-body-weight" locale="ru" theme="auto" />;
}
```

### JavaScript-загрузчик

```html
<div data-nutrifit-widget="ideal-body-weight" data-locale="ru" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Обычный iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/ideal-body-weight?lang=ru&theme=auto"
  title="Калькулятор идеального веса (IBW и AdjBW)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
