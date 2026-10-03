# Остаток кофеина: расчётная модель

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/caffeine.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/caffeine.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/caffeine.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/caffeine.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/caffeine.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/caffeine.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`caffeine` · [NutriFit](https://nutrifit.health/ru/calculators/caffeine)

Оценивает остаток кофеина сейчас и ко времени сна при выбранном периоде полувыведения.

### Порядок использования

1. Введите исходные данные: Используйте фактические значения и подходящие единицы.
2. Уточните параметры: Измените исходные предположения с учётом вашей ситуации.
3. Прочитайте результат: Учитывайте ограничения модели и не воспринимайте расчёт как измерение.

### Методика и формула

Остаток = доза × 2^(−t / T½). Суточная сумма включает только введённые дозы за последние 24 часа.

Остаток = доза × 2^(−t / T½). Суточная сумма включает только введённые дозы за последние 24 часа.

### Ограничения

Период полувыведения индивидуален и может меняться из-за беременности, заболеваний и лекарств. Введите предположение; 5 часов не являются вашей измеренной скоростью выведения. Остаток не предсказывает качество сна. Ориентиры EFSA 400 мг/сут для здоровых взрослых и 200 мг/сут при беременности не гарантируют индивидуальную безопасность.

### Источники

- [EFSA Panel on Dietetic Products, Nutrition and Allergies. Scientific Opinion on the safety of caffeine. EFSA Journal, 2015;13(5):4102](https://doi.org/10.2903/j.efsa.2015.4102)
- [Guest NS et al. International society of sports nutrition position stand: caffeine and exercise performance. J Int Soc Sports Nutr, 2021](https://pubmed.ncbi.nlm.nih.gov/33388079/)
- [Drake C et al. Caffeine effects on sleep taken 0, 3, or 6 hours before going to bed. J Clin Sleep Med, 2013](https://pubmed.ncbi.nlm.nih.gov/24235903/)

## Как встроить этот калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="caffeine" locale="ru" theme="auto" />;
}
```

### JavaScript-загрузчик

```html
<div data-nutrifit-widget="caffeine" data-locale="ru" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Обычный iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/caffeine?lang=ru&theme=auto"
  title="Остаток кофеина: расчётная модель" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
