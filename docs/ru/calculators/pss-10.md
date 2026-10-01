# Шкала воспринимаемого стресса PSS-10

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/pss-10.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/pss-10.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/pss-10.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/pss-10.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/pss-10.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/pss-10.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`pss-10` · [NutriFit](https://nutrifit.health/ru/calculators/pss-10)

Классическая шкала Шелдона Коэна для измерения уровня субъективно переживаемого стресса за последний месяц.

### Порядок использования

1. Вспомните прошедший месяц: Подумайте о том, как часто за последние 30 дней события казались вам неожиданными или трудно преодолимыми.
2. Ответьте на 10 вопросов: Выбирайте честный ответ от «никогда» (0) до «очень часто» (4).
3. Оцените уровень нагрузки: Посмотрите итоговый балл и рекомендации по снижению стрессовой нагрузки.

### Методика и формула

10 вопросов с 5 вариантами ответов (от 0 до 4). Пункты 4, 5, 7 и 8 имеют обратный подсчет (4 минус ответ). Диапазон баллов: от 0 до 40.

Балл PSS-10 = Прямые пункты (1, 2, 3, 6, 9, 10) + Инвертированные пункты (4, 5, 7, 8). 0–13: низкий; 14–26: умеренный; 27–40: высокий стресс.

### Ограничения

Тест отражает субъективное восприятие непредсказуемости и перегрузки, а не наличие конкретного диагноза.

### Источники

- [Cohen S. et al. A global measure of perceived stress. J Health Soc Behav, 1983;24(4):385–396](https://pubmed.ncbi.nlm.nih.gov/6668417/)
- [Cohen S., Williamson G.M. Perceived stress in a probability sample of the United States. The Social Psychology of Health, 1988:31–67](https://psycnet.apa.org/record/1988-98838-002)

## Как встроить этот калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="pss-10" locale="ru" theme="auto" />;
}
```

### JavaScript-загрузчик

```html
<div data-nutrifit-widget="pss-10" data-locale="ru" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Обычный iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/pss-10?lang=ru&theme=auto"
  title="Шкала воспринимаемого стресса PSS-10" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
