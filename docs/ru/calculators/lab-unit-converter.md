# Конвертер единиц лабораторных анализов

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/lab-unit-converter.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/lab-unit-converter.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/lab-unit-converter.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/lab-unit-converter.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/lab-unit-converter.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/lab-unit-converter.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`lab-unit-converter` · [NutriFit](https://nutrifit.health/ru/calculators/lab-unit-converter)

Пересчёт 33 лабораторных показателей между СИ (ммоль/л, мкмоль/л, нмоль/л, пмоль/л) и традиционными единицами (мг/дл, нг/мл, пг/мл) по молярным массам.

### Порядок использования

1. Выберите показатель: В списке — 33 самых частых аналита: от глюкозы и холестерина до витамина D, тестостерона и кортизола. Для холестерина, ЛПНП и ЛПВП коэффициент один и тот же.
2. Укажите направление: СИ → традиционные, если бланк в ммоль/л или нмоль/л, а референс из зарубежной статьи — в мг/дл или нг/мл. И наоборот, если анализ сдан за рубежом.
3. Сверьте референс, а не только число: Референсные интервалы зависят от метода лаборатории. Пересчитайте и границы нормы из бланка, чтобы сравнивать значение с правильным диапазоном.

### Методика и формула

Коэффициент переводит массовую концентрацию в молярную с учётом молярной массы и единицы объёма. Используются распространённые лабораторные коэффициенты AMA и Labcorp. Для инсулина и пролактина коэффициент зависит от калибровки анализа: можно указать значение своей лаборатории. Для мочевины единица мг/дл означает BUN — массу азота мочевины, а не массу всей молекулы мочевины.

SI = значение в массовых единицах × коэффициент. Обратный перевод: SI ÷ коэффициент. Для инсулина и пролактина проверьте коэффициент лаборатории; мг/дл BUN и мг/дл мочевины не взаимозаменяемы.

### Ограничения

Перевод единиц не интерпретирует результат и не ставит диагноз. Референсные интервалы зависят от лаборатории и метода; переводите отдельно и их границы. Для инсулина и пролактина сверяйте коэффициент с лабораторией. Пересчёт BUN не подходит для результата, обозначенного как мочевина в мг/дл.

### Источники

- [Young D.S. Implementation of SI units for clinical laboratory data. Style specifications and conversion tables. Ann Intern Med, 1987;106(1):114–129](https://pubmed.ncbi.nlm.nih.gov/3789557/)
- [AMA Manual of Style, 11th ed. Units of Measure: Conventional Units and SI Units in Clinical Chemistry. Oxford University Press, 2020](https://academic.oup.com/amamanualofstyle/si-conversion-calculator)
- [NIST Special Publication 811. Guide for the Use of the International System of Units (SI), 2008](https://www.nist.gov/pml/special-publication-811)

## Как встроить этот калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="lab-unit-converter" locale="ru" theme="auto" />;
}
```

### JavaScript-загрузчик

```html
<div data-nutrifit-widget="lab-unit-converter" data-locale="ru" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Обычный iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/lab-unit-converter?lang=ru&theme=auto"
  title="Конвертер единиц лабораторных анализов" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
