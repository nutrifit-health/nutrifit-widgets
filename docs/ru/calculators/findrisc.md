# Шкала риска диабета FINDRISC

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/findrisc.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/findrisc.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/findrisc.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/findrisc.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/findrisc.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/findrisc.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`findrisc` · [NutriFit](https://nutrifit.health/ru/calculators/findrisc)

Справочный риск диабета 2 типа за 10 лет по 8 факторам FINDRISC; сумма 0–26. Проценты относятся к исходной исследованной популяции и не являются точной личной вероятностью.

### Порядок использования

1. Введите исходные данные: Справочный риск диабета 2 типа за 10 лет по 8 факторам FINDRISC; сумма 0–26. Проценты относятся к исходной исследованной популяции и не являются точной личной вероятностью.
2. Уточните параметры: Справочный риск диабета 2 типа за 10 лет по 8 факторам FINDRISC; сумма 0–26. Проценты относятся к исходной исследованной популяции и не являются точной личной вероятностью.
3. Прочитайте результат: Информационный перевод для самооценки. Валидация именно этой адаптации не подтверждена. Балл не устанавливает диагноз, а низкий результат не исключает заболевание. Справочный риск диабета 2 типа за 10 лет по 8 факторам FINDRISC; сумма 0–26. Проценты относятся к исходной исследованной популяции и не являются точной личной вероятностью.

### Методика и формула

Справочный риск диабета 2 типа за 10 лет по 8 факторам FINDRISC; сумма 0–26. Проценты относятся к исходной исследованной популяции и не являются точной личной вероятностью.

Справочный риск диабета 2 типа за 10 лет по 8 факторам FINDRISC; сумма 0–26. Проценты относятся к исходной исследованной популяции и не являются точной личной вероятностью.

### Ограничения

Информационный перевод для самооценки. Валидация именно этой адаптации не подтверждена. Балл не устанавливает диагноз, а низкий результат не исключает заболевание. Справочный риск диабета 2 типа за 10 лет по 8 факторам FINDRISC; сумма 0–26. Проценты относятся к исходной исследованной популяции и не являются точной личной вероятностью.

### Источники

- [Finnish Diabetes Association. Type 2 diabetes risk assessment form](https://sites.pitt.edu/~super1/assist/Type%202%20diabetes%20risk%20test.pdf)
- [Lindström J et al. The diabetes risk score: a practical tool to predict type 2 diabetes risk. Diabetes Care, 2003](https://pubmed.ncbi.nlm.nih.gov/12610029/)
- [International Diabetes Federation (IDF). Clinical Practice Recommendations for managing Type 2 Diabetes in Primary Care, 2017](https://www.idf.org/our-activities/care-prevention/clinical-practice-recommendations/)

## Как встроить этот калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="findrisc" locale="ru" theme="auto" />;
}
```

### JavaScript-загрузчик

```html
<div data-nutrifit-widget="findrisc" data-locale="ru" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Обычный iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/findrisc?lang=ru&theme=auto"
  title="Шкала риска диабета FINDRISC" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
