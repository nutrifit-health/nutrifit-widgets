# Индекс тяжести бессонницы ISI

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/isi.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/isi.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/isi.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/isi.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/isi.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/isi.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`isi` · [NutriFit](https://nutrifit.health/ru/calculators/isi)

Оценка сна за последние 2 недели: 7 пунктов с разными шкалами от 0 до 4; сумма 0–28. Удовлетворённость, заметность проблем, беспокойство и влияние на жизнь имеют собственные ответы.

### Порядок использования

1. Введите исходные данные: Оценка сна за последние 2 недели: 7 пунктов с разными шкалами от 0 до 4; сумма 0–28. Удовлетворённость, заметность проблем, беспокойство и влияние на жизнь имеют собственные ответы.
2. Уточните параметры: Оценка сна за последние 2 недели: 7 пунктов с разными шкалами от 0 до 4; сумма 0–28. Удовлетворённость, заметность проблем, беспокойство и влияние на жизнь имеют собственные ответы.
3. Прочитайте результат: Информационный перевод для самооценки. Валидация именно этой адаптации не подтверждена. Балл не устанавливает диагноз, а низкий результат не исключает заболевание.

### Методика и формула

Оценка сна за последние 2 недели: 7 пунктов с разными шкалами от 0 до 4; сумма 0–28. Удовлетворённость, заметность проблем, беспокойство и влияние на жизнь имеют собственные ответы.

Оценка сна за последние 2 недели: 7 пунктов с разными шкалами от 0 до 4; сумма 0–28. Удовлетворённость, заметность проблем, беспокойство и влияние на жизнь имеют собственные ответы.

### Ограничения

Информационный перевод для самооценки. Валидация именно этой адаптации не подтверждена. Балл не устанавливает диагноз, а низкий результат не исключает заболевание.

### Источники

- [Morin CM et al. The Insomnia Severity Index: psychometric indicators to detect insomnia cases and evaluate treatment response. Sleep, 2011](https://pubmed.ncbi.nlm.nih.gov/21532953/)
- [Bastien CH et al. Validation of the Insomnia Severity Index as an outcome measure for insomnia research. Sleep Med, 2001](https://pubmed.ncbi.nlm.nih.gov/11438246/)
- [PhenX Toolkit. Insomnia Severity Index: patient questionnaire, last two weeks, protocol 640801](https://www.phenxtoolkit.org/protocols/view/640801?origin=subcollection)

## Как встроить этот калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="isi" locale="ru" theme="auto" />;
}
```

### JavaScript-загрузчик

```html
<div data-nutrifit-widget="isi" data-locale="ru" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Обычный iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/isi?lang=ru&theme=auto"
  title="Индекс тяжести бессонницы ISI" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
