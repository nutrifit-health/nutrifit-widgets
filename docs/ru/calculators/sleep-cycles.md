# Планировщик сна

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/sleep-cycles.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/sleep-cycles.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/sleep-cycles.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/sleep-cycles.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/sleep-cycles.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/sleep-cycles.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`sleep-cycles` · [NutriFit](https://nutrifit.health/ru/calculators/sleep-cycles)

Время отхода ко сну или подъёма для 7, 8 и 9 часов сна с учётом времени засыпания.

### Порядок использования

1. Введите исходные данные: Используйте фактические значения и подходящие единицы.
2. Уточните параметры: Измените исходные предположения с учётом вашей ситуации.
3. Прочитайте результат: Учитывайте ограничения модели и не воспринимайте расчёт как измерение.

### Методика и формула

Время подъёма = время отбоя + время засыпания + длительность сна; время отбоя вычисляется обратным вычитанием.

Время подъёма = время отбоя + время засыпания + длительность сна; время отбоя вычисляется обратным вычитанием.

### Ограничения

Большинству взрослых рекомендуют 7–9 часов сна. Это варианты расписания, а не индивидуальная норма или прогноз фазы сна. Циклы и стадии сна меняются в течение ночи. По введённым часам нельзя гарантировать пробуждение в REM или лёгкость подъёма.

### Источники

- [NHLBI. How Sleep Works: Sleep Phases and Stages](https://www.nhlbi.nih.gov/health/sleep/stages-of-sleep)
- [NHLBI. How Sleep Works: How Much Sleep Is Enough?](https://www.nhlbi.nih.gov/health/sleep/how-much-sleep)
- [Hirshkowitz M et al. National Sleep Foundation's sleep time duration recommendations: methodology and results summary. Sleep Health, 2015](https://pubmed.ncbi.nlm.nih.gov/29073412/)

## Как встроить этот калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="sleep-cycles" locale="ru" theme="auto" />;
}
```

### JavaScript-загрузчик

```html
<div data-nutrifit-widget="sleep-cycles" data-locale="ru" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Обычный iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/sleep-cycles?lang=ru&theme=auto"
  title="Планировщик сна" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
