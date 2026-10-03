# Исторические формулы расчётной массы тела

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/ideal-body-weight.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/ideal-body-weight.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/ideal-body-weight.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/ideal-body-weight.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/ideal-body-weight.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/ideal-body-weight.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`ideal-body-weight` · [NutriFit](https://nutrifit.health/ru/calculators/ideal-body-weight)

Сравнение Devine, Robinson, Miller и приближённой Hamwi для роста ≥ 152,4 см. Среднее четырёх формул — авторский агрегат; AdjBW = Devine + 0,4 × (фактическая масса − Devine), только при превышении Devine.

### Порядок использования

1. Введите исходные данные: Сравнение Devine, Robinson, Miller и приближённой Hamwi для роста ≥ 152,4 см. Среднее четырёх формул — авторский агрегат; AdjBW = Devine + 0,4 × (фактическая масса − Devine), только при превышении Devine.
2. Уточните параметры: Devine (M): 50 + 2.3 × x; Devine (F): 45.5 + 2.3 × x; Robinson (M): 52 + 1.9 × x; Robinson (F): 49 + 1.7 × x; x = height(cm)/2.54 − 60; AdjBW = Devine + 0.4 × (weight − Devine).
Сравнение Devine, Robinson, Miller и приближённой Hamwi для роста ≥ 152,4 см. Среднее четырёх формул — авторский агрегат; AdjBW = Devine + 0,4 × (фактическая масса − Devine), только при превышении Devine.
3. Прочитайте результат: Эти формулы не определяют единственный здоровый или желательный вес. Коэффициент AdjBW не универсален для питания и лекарств. Диапазон массы по ИМТ 18,5–24,9 — отдельный арифметический ориентир для взрослых, не индивидуальная цель.

### Методика и формула

Сравнение Devine, Robinson, Miller и приближённой Hamwi для роста ≥ 152,4 см. Среднее четырёх формул — авторский агрегат; AdjBW = Devine + 0,4 × (фактическая масса − Devine), только при превышении Devine.

Devine (M): 50 + 2.3 × x; Devine (F): 45.5 + 2.3 × x; Robinson (M): 52 + 1.9 × x; Robinson (F): 49 + 1.7 × x; x = height(cm)/2.54 − 60; AdjBW = Devine + 0.4 × (weight − Devine).
Сравнение Devine, Robinson, Miller и приближённой Hamwi для роста ≥ 152,4 см. Среднее четырёх формул — авторский агрегат; AdjBW = Devine + 0,4 × (фактическая масса − Devine), только при превышении Devine.

### Ограничения

Эти формулы не определяют единственный здоровый или желательный вес. Коэффициент AdjBW не универсален для питания и лекарств. Диапазон массы по ИМТ 18,5–24,9 — отдельный арифметический ориентир для взрослых, не индивидуальная цель.

### Источники

- [Robinson JD et al. Determination of ideal body weight for drug dosage calculations. Am J Hosp Pharm, 1983](https://pubmed.ncbi.nlm.nih.gov/6869387/)
- [Peterson C.M. et al. Universal equation for estimating ideal body weight and body weight at any BMI. Am J Clin Nutr, 2016;103(5):1197–1203. Historical IBW equations and their limits](https://pmc.ncbi.nlm.nih.gov/articles/PMC4841935/)

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
  title="Исторические формулы расчётной массы тела" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
