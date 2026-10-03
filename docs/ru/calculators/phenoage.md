# Калькулятор биологического возраста PhenoAge (Levine)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/phenoage.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/phenoage.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/phenoage.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/phenoage.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/phenoage.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/phenoage.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`phenoage` · [NutriFit](https://nutrifit.health/ru/calculators/phenoage)

Модель Levine 2018 объединяет девять биомаркеров и календарный возраст. PhenoAge — возрастной эквивалент популяционного риска в модели NHANES, а не возраст органов или индивидуальная продолжительность жизни. Разность с возрастом — арифметическое вычитание, не скорость старения и не статистический остаток PhenoAgeAccel.

### Порядок использования

1. Введите исходные данные: Модель Levine 2018 объединяет девять биомаркеров и календарный возраст. PhenoAge — возрастной эквивалент популяционного риска в модели NHANES, а не возраст органов или индивидуальная продолжительность жизни. Разность с возрастом — арифметическое вычитание, не скорость старения и не статистический остаток PhenoAgeAccel.
2. Уточните параметры: xb = −19.907 − 0.0336·A + 0.0095·C + 0.1953·G + 0.0954·ln(CRP) − 0.012·L + 0.0268·M + 0.3306·R + 0.00188·P + 0.0554·W + 0.0804·a
H = exp(xb) × (exp(120 × 0.0076927) − 1) / 0.0076927
PhenoAge = 141.50225 + ln(0.00553 × H) / 0.09165
A — альбумин, г/л; C — креатинин, мкмоль/л; G — глюкоза, ммоль/л; CRP — мг/дл (ввод в мг/л ÷ 10); L — лимфоциты, %; M — MCV, фл; R — RDW, %; P — ЩФ, Ед/л; W — лейкоциты, 10⁹/л; a — возраст, годы.
3. Прочитайте результат: Исследовательская модель для возраста 20–84 года. Острое заболевание меняет биомаркеры и результат. Это не диагноз, срок жизни или доказательство омоложения. CRP должен быть измеренным и положительным; результат ниже предела обнаружения нельзя заменять нулём.

### Методика и формула

Модель Levine 2018 объединяет девять биомаркеров и календарный возраст. PhenoAge — возрастной эквивалент популяционного риска в модели NHANES, а не возраст органов или индивидуальная продолжительность жизни. Разность с возрастом — арифметическое вычитание, не скорость старения и не статистический остаток PhenoAgeAccel.

xb = −19.907 − 0.0336·A + 0.0095·C + 0.1953·G + 0.0954·ln(CRP) − 0.012·L + 0.0268·M + 0.3306·R + 0.00188·P + 0.0554·W + 0.0804·a
H = exp(xb) × (exp(120 × 0.0076927) − 1) / 0.0076927
PhenoAge = 141.50225 + ln(0.00553 × H) / 0.09165
A — альбумин, г/л; C — креатинин, мкмоль/л; G — глюкоза, ммоль/л; CRP — мг/дл (ввод в мг/л ÷ 10); L — лимфоциты, %; M — MCV, фл; R — RDW, %; P — ЩФ, Ед/л; W — лейкоциты, 10⁹/л; a — возраст, годы.

### Ограничения

Исследовательская модель для возраста 20–84 года. Острое заболевание меняет биомаркеры и результат. Это не диагноз, срок жизни или доказательство омоложения. CRP должен быть измеренным и положительным; результат ниже предела обнаружения нельзя заменять нулём.

### Источники

- [Levine ME et al. An epigenetic biomarker of aging for lifespan and healthspan. Aging (Albany NY), 2018](https://pubmed.ncbi.nlm.nih.gov/29676998/)
- [Liu Z et al. A new aging measure captures morbidity and mortality risk across diverse subpopulations from NHANES IV: A cohort study. PLoS Med, 2018](https://pubmed.ncbi.nlm.nih.gov/30596641/)

## Как встроить этот калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="phenoage" locale="ru" theme="auto" />;
}
```

### JavaScript-загрузчик

```html
<div data-nutrifit-widget="phenoage" data-locale="ru" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Обычный iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/phenoage?lang=ru&theme=auto"
  title="Калькулятор биологического возраста PhenoAge (Levine)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
