# Йельская шкала пищевой зависимости mYFAS 2.0

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/yfas.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/yfas.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/yfas.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/yfas.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/yfas.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/yfas.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`yfas` · [NutriFit](https://nutrifit.health/ru/calculators/yfas)

mYFAS 2.0: 13 вопросов о проблемах с питанием за последние 12 месяцев.

### Порядок использования

1. Прочитайте инструкцию: Учитывайте указанный период и смысл каждого утверждения.
2. Выберите ответы: Отвечайте на каждый пункт, выбирая подходящий вариант.
3. Посмотрите результат: Результат отражает ответы; используйте его с учётом ограничений методики.

### Методика и формула

Восемь частотных ответов от «никогда» до «каждый день». Каждый пункт имеет собственный порог частоты; «да/нет» не используется.

Пункты 5 и 6 оценивают дистресс/нарушение функционирования. Остальные 11 дают число симптомов. При наличии дистресса: 2–3 — лёгкая, 4–5 — умеренная, 6–11 — выраженная скрининговая категория; иначе критерий шкалы не выполнен.

### Ограничения

Справочный результат не устанавливает диагноз и не назначает лечение. Перевод является информационной адаптацией; его отдельная психометрическая валидация не подтверждена.

### Источники

- [Schulte, Gearhardt. Modified Yale Food Addiction Scale 2.0: original form and scoring](https://sites.lsa.umich.edu/fastlab/yale-food-addiction-scale/)
- [Schulte EM et al. Development of the Modified Yale Food Addiction Scale Version 2.0. Eur Eat Disord Rev, 2017](https://pubmed.ncbi.nlm.nih.gov/28370722/)
- [Gearhardt AN et al. Development of the Yale Food Addiction Scale Version 2.0. Psychol Addict Behav, 2016](https://pubmed.ncbi.nlm.nih.gov/26866783/)

## Как встроить этот калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="yfas" locale="ru" theme="auto" />;
}
```

### JavaScript-загрузчик

```html
<div data-nutrifit-widget="yfas" data-locale="ru" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Обычный iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/yfas?lang=ru&theme=auto"
  title="Йельская шкала пищевой зависимости mYFAS 2.0" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
