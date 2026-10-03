# Чек-лист питания и факторов образа жизни

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/deficiency-risk.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/deficiency-risk.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/deficiency-risk.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/deficiency-risk.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/deficiency-risk.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/deficiency-risk.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`deficiency-risk` · [NutriFit](https://nutrifit.health/ru/calculators/deficiency-risk)

Авторский справочный чек-лист: отметьте текущие особенности питания и образа жизни и посмотрите связанные темы нутриентов.

### Порядок использования

1. Введите исходные данные: Связи факторов и нутриентов используются как справочные темы для обсуждения. NIH ODS и EFSA содержат сведения о питании и группах риска, но не задают баллы или вероятность дефицита для этой анкеты.
2. Уточните параметры: Авторский справочный чек-лист: отметьте текущие особенности питания и образа жизни и посмотрите связанные темы нутриентов.
3. Прочитайте результат: Чек-лист не учитывает фактическое потребление и усвоение, обогащённые продукты, добавки и заболевания. Он не подтверждает и не исключает дефицит; анализы и необходимость коррекции определяются индивидуально.

### Методика и формула

Связи факторов и нутриентов используются как справочные темы для обсуждения. NIH ODS и EFSA содержат сведения о питании и группах риска, но не задают баллы или вероятность дефицита для этой анкеты.

Баллы и категории риска не рассчитываются. Показываются только отмеченные факторы и связанные нутриенты.

### Ограничения

Чек-лист не учитывает фактическое потребление и усвоение, обогащённые продукты, добавки и заболевания. Он не подтверждает и не исключает дефицит; анализы и необходимость коррекции определяются индивидуально.

### Источники

- [NIH Office of Dietary Supplements. Dietary Supplement Fact Sheets (группы риска по нутриентам)](https://ods.od.nih.gov/factsheets/list-all/)
- [EFSA. Dietary Reference Values for the EU (DRV Finder)](https://multimedia.efsa.europa.eu/drvs/index.htm)

## Как встроить этот калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="deficiency-risk" locale="ru" theme="auto" />;
}
```

### JavaScript-загрузчик

```html
<div data-nutrifit-widget="deficiency-risk" data-locale="ru" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Обычный iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/deficiency-risk?lang=ru&theme=auto"
  title="Чек-лист питания и факторов образа жизни" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
