# Калькулятор биологического возраста PhenoAge (Levine)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/phenoage.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/phenoage.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/phenoage.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/phenoage.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/phenoage.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/phenoage.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`phenoage` · [NutriFit](https://nutrifit.health/ru/calculators/phenoage)

Исследовательская оценка по девяти биомаркерам и возрасту. Результат не предсказывает индивидуальную продолжительность жизни.

### Порядок использования

1. Сдайте ОАК с лейкоформулой и биохимию: Нужны: альбумин, креатинин, глюкоза натощак, СРБ (лучше высокочувствительный), щелочная фосфатаза — из биохимии; лейкоциты, лимфоциты %, MCV, RDW — из общего анализа крови.
2. Введите значения в единицах СИ: Альбумин в г/л (не г/дл), креатинин в мкмоль/л, глюкоза в ммоль/л, СРБ в мг/л. Если бланк в других единицах, воспользуйтесь конвертером единиц.
3. Отслеживайте динамику, а не разовое число: Интерпретируйте анализы вместе со специалистом. Изменение числа не доказывает омоложение или эффективность вмешательства.

### Методика и формула

Модель Levine 2018 объединяет девять биомаркеров и хронологический возраст. Коэффициенты обучены на NHANES; преобразование Гомпертца выражает профиль через возрастной эквивалент популяционного риска. Здесь не показывается индивидуальный прогноз смертности. Разница с паспортным возрастом является простым вычитанием, а не статистическим остатком PhenoAgeAccel и не скоростью старения.

xb = −19,907 − 0,0336·Альбумин(г/л) + 0,0095·Креатинин(мкмоль/л) + 0,1953·Глюкоза(ммоль/л) + 0,0954·ln(СРБ, мг/дл) − 0,0120·Лимфоциты(%) + 0,0268·MCV(фл) + 0,3306·RDW(%) + 0,00188·ЩФ(Ед/л) + 0,0554·Лейкоциты(10⁹/л) + 0,0804·Возраст
Риск за 120 мес = 1 − exp(−e^xb · (e^(120·0,0076927) − 1) / 0,0076927)
PhenoAge = 141,50225 + ln(−0,00553 · ln(1 − Риск)) / 0,09165

### Ограничения

Исследовательский инструмент для возраста 20–84 лет. Острые заболевания меняют маркеры и результат. Значение не является диагнозом, сроком жизни или доказательством омоложения. Для СРБ ниже предела измерения нужен количественный результат, а не подстановка нуля.

### Источники

- [Levine M.E. et al. An epigenetic biomarker of aging for lifespan and healthspan. Aging (Albany NY), 2018;10(4):573–591](https://pubmed.ncbi.nlm.nih.gov/29676998/)
- [Liu Z. et al. A new aging measure captures morbidity and mortality risk across diverse subpopulations from NHANES IV: a cohort study. PLoS Med, 2018;15(12):e1002718](https://pubmed.ncbi.nlm.nih.gov/30596641/)

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
