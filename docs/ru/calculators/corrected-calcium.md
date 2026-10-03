# Калькулятор скорректированного кальция по альбумину

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/corrected-calcium.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/corrected-calcium.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/corrected-calcium.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/corrected-calcium.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/corrected-calcium.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/corrected-calcium.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`corrected-calcium` · [NutriFit](https://nutrifit.health/ru/calculators/corrected-calcium)

Скорректированный кальций = общий кальций + 0,02 × (40 − альбумин), кальций в ммоль/л, альбумин в г/л. Это упрощённая формула Payne.

### Порядок использования

1. Введите исходные данные: Скорректированный кальций = общий кальций + 0,02 × (40 − альбумин), кальций в ммоль/л, альбумин в г/л. Это упрощённая формула Payne.
2. Уточните параметры: Скорректированный кальций = общий кальций + 0,02 × (40 − альбумин), кальций в ммоль/л, альбумин в г/л. Это упрощённая формула Payne.
Ca: mg/dL × 0.2495 = mmol/L; mmol/L ÷ 0.2495 = mg/dL. Albumin: g/dL × 10 = g/L.
3. Прочитайте результат: Поправка не измеряет ионизированный кальций и может ошибочно классифицицировать результат, особенно при низком альбумине. Универсальная категория кальция не присваивается.

### Методика и формула

Скорректированный кальций = общий кальций + 0,02 × (40 − альбумин), кальций в ммоль/л, альбумин в г/л. Это упрощённая формула Payne.

Скорректированный кальций = общий кальций + 0,02 × (40 − альбумин), кальций в ммоль/л, альбумин в г/л. Это упрощённая формула Payne.
Ca: mg/dL × 0.2495 = mmol/L; mmol/L ÷ 0.2495 = mg/dL. Albumin: g/dL × 10 = g/L.

### Ограничения

Поправка не измеряет ионизированный кальций и может ошибочно классифицицировать результат, особенно при низком альбумине. Универсальная категория кальция не присваивается.

### Источники

- [Payne RB et al. Interpretation of serum calcium in patients with abnormal serum proteins. Br Med J, 1973](https://pubmed.ncbi.nlm.nih.gov/4758544/)
- [Ladenson JH et al. Failure of total calcium corrected for protein, albumin, and pH to correctly assess free calcium status. J Clin Endocrinol Metab, 1978](https://pubmed.ncbi.nlm.nih.gov/45478/)
- [Desgagnés N et al. Use of Albumin-Adjusted Calcium Measurements in Clinical Practice. JAMA Netw Open, 2025](https://pubmed.ncbi.nlm.nih.gov/39836424/)

## Как встроить этот калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="corrected-calcium" locale="ru" theme="auto" />;
}
```

### JavaScript-загрузчик

```html
<div data-nutrifit-widget="corrected-calcium" data-locale="ru" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Обычный iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/corrected-calcium?lang=ru&theme=auto"
  title="Калькулятор скорректированного кальция по альбумину" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
