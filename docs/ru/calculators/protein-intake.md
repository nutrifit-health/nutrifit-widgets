# Справочные ориентиры белка

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/protein-intake.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/protein-intake.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/protein-intake.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/protein-intake.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/protein-intake.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/protein-intake.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`protein-intake` · [NutriFit](https://nutrifit.health/ru/calculators/protein-intake)

Для здоровых взрослых EFSA PRI — 0,83 г/кг/сут. Для здоровых тренирующихся ISSN приводит диапазон 1,4–2,0 г/кг/сут; ESPEN для здоровых пожилых — 1,0–1,2. Количество рассчитано по введённой фактической массе тела; диапазон не является верхним пределом безопасности.

### Порядок использования

1. Введите данные: Для здоровых взрослых EFSA PRI — 0,83 г/кг/сут. Для здоровых тренирующихся ISSN приводит диапазон 1,4–2,0 г/кг/сут; ESPEN для здоровых пожилых — 1,0–1,2. Количество рассчитано по введённой фактической массе тела; диапазон не является верхним пределом безопасности.
2. Сравните ориентиры: Для здоровых взрослых EFSA PRI — 0,83 г/кг/сут. Для здоровых тренирующихся ISSN приводит диапазон 1,4–2,0 г/кг/сут; ESPEN для здоровых пожилых — 1,0–1,2. Количество рассчитано по введённой фактической массе тела; диапазон не является верхним пределом безопасности.
3. Учитывайте ограничения: Это популяционные ориентиры, а не персональная оптимальная доза. Расчёт не подходит для назначения питания при болезни почек, беременности, заболевании, недостаточном питании или выраженном избытке массы. Эти ситуации требуют индивидуального выбора расчётной массы и нормы.

### Методика и формула

Для здоровых взрослых EFSA PRI — 0,83 г/кг/сут. Для здоровых тренирующихся ISSN приводит диапазон 1,4–2,0 г/кг/сут; ESPEN для здоровых пожилых — 1,0–1,2. Количество рассчитано по введённой фактической массе тела; диапазон не является верхним пределом безопасности.

Для здоровых взрослых EFSA PRI — 0,83 г/кг/сут. Для здоровых тренирующихся ISSN приводит диапазон 1,4–2,0 г/кг/сут; ESPEN для здоровых пожилых — 1,0–1,2. Количество рассчитано по введённой фактической массе тела; диапазон не является верхним пределом безопасности.

### Ограничения

Это популяционные ориентиры, а не персональная оптимальная доза. Расчёт не подходит для назначения питания при болезни почек, беременности, заболевании, недостаточном питании или выраженном избытке массы. Эти ситуации требуют индивидуального выбора расчётной массы и нормы.

### Источники

- [EFSA. Population reference intakes for protein, 2012](https://www.efsa.europa.eu/en/press/news/120209)
- [ISSN. Protein and exercise, 2017](https://pmc.ncbi.nlm.nih.gov/articles/PMC5477153/)
- [ESPEN Expert Group. Protein intake and exercise with aging, 2014](https://pmc.ncbi.nlm.nih.gov/articles/PMC4208946/)

## Как встроить этот калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="protein-intake" locale="ru" theme="auto" />;
}
```

### JavaScript-загрузчик

```html
<div data-nutrifit-widget="protein-intake" data-locale="ru" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Обычный iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/protein-intake?lang=ru&theme=auto"
  title="Справочные ориентиры белка" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
