# Пищевое поведение: изменённая адаптация DEBQ

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/debq.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/debq.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/debq.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/debq.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/debq.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/debq.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`debq` · [NutriFit](https://nutrifit.health/ru/calculators/debq)

33 вопроса о привычном пищевом поведении. Показаны средние ответов в трёх группах, без категорий нормы и диагноза.

### Порядок использования

1. Введите исходные данные: Используйте фактические значения и подходящие единицы.
2. Уточните параметры: Измените исходные предположения с учётом вашей ситуации.
3. Прочитайте результат: Учитывайте ограничения модели и не воспринимайте расчёт как измерение.

### Методика и формула

Эмоциональная группа: вопросы 1–13; внешняя: 14–23; ограничительная: 24–33. Среднее каждой группы от 1 до 5; вопрос 17 оценивается как 6 минус ответ.

Эмоциональная группа: вопросы 1–13; внешняя: 14–23; ограничительная: 24–33. Среднее каждой группы от 1 до 5; вопрос 17 оценивается как 6 минус ответ.

### Ограничения

Формулировки изменены и сгруппированы. Это не подтверждённая валидированная версия оригинального DEBQ; клинические нормы к ней не применяются. Разрешение на использование оригинального бланка требует отдельного подтверждения.

### Источники

- [Van Strien T. et al. The Dutch Eating Behavior Questionnaire (DEBQ) for assessment of restrained, emotional, and external eating behavior. Int J Eat Disord, 1986;5(2):295–315](https://doi.org/10.1002/1098-108X(198602)5:2<295::AID-EAT2260050209>3.0.CO;2-T)
- [Wardle J. et al. Eating style: a validation study of the Dutch Eating Behaviour Questionnaire in normal subjects and women with eating disorders. J Psychosom Res, 1987](https://pubmed.ncbi.nlm.nih.gov/3473234/)

## Как встроить этот калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="debq" locale="ru" theme="auto" />;
}
```

### JavaScript-загрузчик

```html
<div data-nutrifit-widget="debq" data-locale="ru" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Обычный iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/debq?lang=ru&theme=auto"
  title="Пищевое поведение: изменённая адаптация DEBQ" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
