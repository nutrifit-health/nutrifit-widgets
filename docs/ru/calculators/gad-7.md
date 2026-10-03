# Шкала генерализованной тревоги GAD-7

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/gad-7.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/gad-7.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/gad-7.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/gad-7.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/gad-7.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/gad-7.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`gad-7` · [NutriFit](https://nutrifit.health/ru/calculators/gad-7)

Выраженность симптомов тревоги за последние 2 недели: 7 ответов по частоте от 0 до 3; сумма 0–21.

### Порядок использования

1. Введите исходные данные: Выраженность симптомов тревоги за последние 2 недели: 7 ответов по частоте от 0 до 3; сумма 0–21.
2. Уточните параметры: Выраженность симптомов тревоги за последние 2 недели: 7 ответов по частоте от 0 до 3; сумма 0–21.
3. Прочитайте результат: Информационный перевод для самооценки. Валидация именно этой адаптации не подтверждена. Балл не устанавливает диагноз, а низкий результат не исключает заболевание.

### Методика и формула

Выраженность симптомов тревоги за последние 2 недели: 7 ответов по частоте от 0 до 3; сумма 0–21.

Выраженность симптомов тревоги за последние 2 недели: 7 ответов по частоте от 0 до 3; сумма 0–21.

### Ограничения

Информационный перевод для самооценки. Валидация именно этой адаптации не подтверждена. Балл не устанавливает диагноз, а низкий результат не исключает заболевание.

### Источники

- [Spitzer RL et al. A brief measure for assessing generalized anxiety disorder: the GAD-7. Arch Intern Med, 2006](https://pubmed.ncbi.nlm.nih.gov/16717171/)
- [Löwe B et al. Validation and standardization of the Generalized Anxiety Disorder Screener (GAD-7) in the general population. Med Care, 2008](https://pubmed.ncbi.nlm.nih.gov/18388841/)

## Как встроить этот калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="gad-7" locale="ru" theme="auto" />;
}
```

### JavaScript-загрузчик

```html
<div data-nutrifit-widget="gad-7" data-locale="ru" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Обычный iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/gad-7?lang=ru&theme=auto"
  title="Шкала генерализованной тревоги GAD-7" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
