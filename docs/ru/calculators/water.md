# Эвристическая оценка суточной воды

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/water.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/water.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/water.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/water.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/water.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/water.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`water` · [NutriFit](https://nutrifit.health/ru/calculators/water)

Выбранная модель: 30 мл/кг + 500 мл за час нагрузки + 500 мл при жаре. 75% условно относится к напиткам; стакан = 250 мл. Возрастное снижение не применяется.

### Порядок использования

1. Введите исходные данные: Выбранная модель: 30 мл/кг + 500 мл за час нагрузки + 500 мл при жаре. 75% условно относится к напиткам; стакан = 250 мл. Возрастное снижение не применяется.
2. Уточните параметры: Выбранная модель: 30 мл/кг + 500 мл за час нагрузки + 500 мл при жаре. 75% условно относится к напиткам; стакан = 250 мл. Возрастное снижение не применяется.
3. Прочитайте результат: Это допущения модели, не норматив EFSA. EFSA указывает общую воду из напитков и пищи 2,0 л для женщин и 2,5 л для мужчин, одинаково для взрослых и пожилых при умеренных условиях. Фактические потери пота и ограничения при заболеваниях определяются отдельно.

### Методика и формула

Выбранная модель: 30 мл/кг + 500 мл за час нагрузки + 500 мл при жаре. 75% условно относится к напиткам; стакан = 250 мл. Возрастное снижение не применяется.

Выбранная модель: 30 мл/кг + 500 мл за час нагрузки + 500 мл при жаре. 75% условно относится к напиткам; стакан = 250 мл. Возрастное снижение не применяется.

### Ограничения

Это допущения модели, не норматив EFSA. EFSA указывает общую воду из напитков и пищи 2,0 л для женщин и 2,5 л для мужчин, одинаково для взрослых и пожилых при умеренных условиях. Фактические потери пота и ограничения при заболеваниях определяются отдельно.

### Источники

- [EFSA Panel on Dietetic Products. Scientific Opinion on Dietary Reference Values for water, 2010](https://www.efsa.europa.eu/en/efsajournal/pub/1459)
- [American College of Sports Medicine et al. American College of Sports Medicine position stand. Exercise and fluid replacement. Med Sci Sports Exerc, 2007](https://pubmed.ncbi.nlm.nih.gov/17277604/)

## Как встроить этот калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="water" locale="ru" theme="auto" />;
}
```

### JavaScript-загрузчик

```html
<div data-nutrifit-widget="water" data-locale="ru" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Обычный iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/water?lang=ru&theme=auto"
  title="Эвристическая оценка суточной воды" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
