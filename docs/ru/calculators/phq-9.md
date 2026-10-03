# Опросник здоровья пациента PHQ-9 (Депрессия)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/phq-9.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/phq-9.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/phq-9.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/phq-9.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/phq-9.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/phq-9.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`phq-9` · [NutriFit](https://nutrifit.health/ru/calculators/phq-9)

Выраженность депрессивных симптомов за последние 2 недели: 9 ответов по частоте от 0 до 3; сумма 0–27.

### Порядок использования

1. Введите исходные данные: Выраженность депрессивных симптомов за последние 2 недели: 9 ответов по частоте от 0 до 3; сумма 0–27.
2. Уточните параметры: Выраженность депрессивных симптомов за последние 2 недели: 9 ответов по частоте от 0 до 3; сумма 0–27.
3. Прочитайте результат: Информационный перевод для самооценки. Валидация именно этой адаптации не подтверждена. Балл не устанавливает диагноз, а низкий результат не исключает заболевание. Любой ненулевой ответ на пункт 9 требует отдельного обсуждения мыслей о смерти или самоповреждении со специалистом независимо от суммы. При непосредственной опасности обратитесь за срочной помощью.

### Методика и формула

Выраженность депрессивных симптомов за последние 2 недели: 9 ответов по частоте от 0 до 3; сумма 0–27.

Выраженность депрессивных симптомов за последние 2 недели: 9 ответов по частоте от 0 до 3; сумма 0–27.

### Ограничения

Информационный перевод для самооценки. Валидация именно этой адаптации не подтверждена. Балл не устанавливает диагноз, а низкий результат не исключает заболевание. Любой ненулевой ответ на пункт 9 требует отдельного обсуждения мыслей о смерти или самоповреждении со специалистом независимо от суммы. При непосредственной опасности обратитесь за срочной помощью.

### Источники

- [Kroenke K et al. The PHQ-9: validity of a brief depression severity measure. J Gen Intern Med, 2001](https://pubmed.ncbi.nlm.nih.gov/11556941/)
- [Spitzer RL et al. Validation and utility of a self-report version of PRIME-MD: the PHQ primary care study. Primary Care Evaluation of Mental Disorders. Patient Health Questionnaire. JAMA, 1999](https://pubmed.ncbi.nlm.nih.gov/10568646/)

## Как встроить этот калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="phq-9" locale="ru" theme="auto" />;
}
```

### JavaScript-загрузчик

```html
<div data-nutrifit-widget="phq-9" data-locale="ru" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Обычный iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/phq-9?lang=ru&theme=auto"
  title="Опросник здоровья пациента PHQ-9 (Депрессия)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
