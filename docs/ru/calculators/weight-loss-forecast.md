# Сценарий изменения веса Hall–Chow

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/weight-loss-forecast.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/weight-loss-forecast.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/weight-loss-forecast.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/weight-loss-forecast.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/weight-loss-forecast.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/weight-loss-forecast.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`weight-loss-forecast` · [NutriFit](https://nutrifit.health/ru/calculators/weight-loss-forecast)

Упрощённая модель со средними параметрами показывает изменение веса при постоянном снижении исходного потребления энергии и неизменной активности.

### Порядок использования

1. Введите исходные данные: Используйте фактические значения и подходящие единицы.
2. Уточните параметры: Измените исходные предположения с учётом вашей ситуации.
3. Прочитайте результат: Учитывайте ограничения модели и не воспринимайте расчёт как измерение.

### Методика и формула

W(t)=W0−D/22×(1−exp(−22×t/9100)); t — сутки, D — снижение энергии в ккал/сут. Средние параметры: ρ=9100 ккал/кг, ε=22 ккал/(кг·сут). Для сравнения: линейная потеря D×t/7700.

W(t)=W0−D/22×(1−exp(−22×t/9100)); t — сутки, D — снижение энергии в ккал/сут. Средние параметры: ρ=9100 ккал/кг, ε=22 ккал/(кг·сут). Для сравнения: линейная потеря D×t/7700.

### Ограничения

Это линеаризованная двухпараметрическая модель Hall–Chow (2011), а не полная индивидуальная модель NIH Body Weight Planner. Не прогнозирует жир, мышцы или точный срок плато. Сценарий для взрослых, без беременности и грудного вскармливания. Исходное питание предполагается равновесным, изменение постоянным; вода, лекарства, заболевания и соблюдение рациона не моделируются. Это не назначение дефицита калорий.

### Источники

- [Hall K.D., Chow C.C. Estimating changes in free-living energy intake and its confidence interval. Am J Clin Nutr, 2011;94(1):66–74. Linearized energy-balance model](https://pmc.ncbi.nlm.nih.gov/articles/PMC3127505/)
- [Hall KD et al. Quantification of the effect of energy imbalance on bodyweight. Lancet, 2011](https://pubmed.ncbi.nlm.nih.gov/21872751/)

## Как встроить этот калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="weight-loss-forecast" locale="ru" theme="auto" />;
}
```

### JavaScript-загрузчик

```html
<div data-nutrifit-widget="weight-loss-forecast" data-locale="ru" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Обычный iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/weight-loss-forecast?lang=ru&theme=auto"
  title="Сценарий изменения веса Hall–Chow" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
