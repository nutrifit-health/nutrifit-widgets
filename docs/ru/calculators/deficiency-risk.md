# Скрининг риска дефицита нутриентов

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/deficiency-risk.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/deficiency-risk.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/deficiency-risk.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/deficiency-risk.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/deficiency-risk.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/deficiency-risk.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`deficiency-risk` · [NutriFit](https://nutrifit.health/ru/calculators/deficiency-risk)

Отмечает факторы образа жизни и питания и показывает, дефицит каких нутриентов вероятен и какими анализами это проверяется.

### Порядок использования

1. Отметьте особенности питания: Укажите ограничения в диете (отказ от мяса, рыбы, молочных продуктов) и привычки.
2. Учтите образ жизни и лекарства: Отметьте факторы среды (мало солнца, интенсивный спорт) и прием препаратов (антациды, метформин).
3. Получите перечень анализов: Узнайте баллы риска по каждому нутриенту и точные лабораторные маркеры для клинической проверки.

### Методика и формула

Это не диагностика, а чек-лист факторов риска. Каждому фактору сопоставлены нутриенты, для которых он признан фактором риска в fact sheets NIH Office of Dietary Supplements и в материалах EFSA по референсным величинам потребления. Вес фактора отражает силу связи: 3 балла — ситуация, в которой дефицит закономерен без компенсации, 2 — значимый фактор, 1 — дополнительный вклад. Баллы суммируются по каждому нутриенту: от 2 баллов риск умеренный, от 4 — высокий.

Балл нутриента = сумма весов отмеченных факторов; 0–1 балл — низкий риск, 2–3 — умеренный, 4 и выше — высокий

### Ограничения

Скрининг опирается только на отмеченные факторы и не учитывает фактическое потребление, приём добавок, генетику и сопутствующие болезни. Он не подтверждает и не исключает дефицит — статус нутриента определяется лабораторно и оценивается врачом или специалистом по питанию.

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
  title="Скрининг риска дефицита нутриентов" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
