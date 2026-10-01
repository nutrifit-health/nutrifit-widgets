# Калькулятор гликемической нагрузки

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/glycemic-load.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/glycemic-load.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/glycemic-load.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/glycemic-load.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/glycemic-load.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/glycemic-load.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`glycemic-load` · [NutriFit](https://nutrifit.health/ru/calculators/glycemic-load)

Считает гликемическую нагрузку порции по гликемическому индексу и содержанию углеводов — величину, которая отражает реальный отклик глюкозы лучше, чем один только индекс.

### Порядок использования

1. Выберите продукт или введите ГИ: Используйте базу справочных продуктов (международные таблицы Atkinson 2021) или укажите гликемический индекс вручную.
2. Укажите углеводы и размер порции: Введите содержание углеводов на 100 г и реальный вес порции в граммах.
3. Оцените метаболическое влияние: Узнайте реальное влияние порции на сахар в крови: низкая (≤10), средняя (11–19) или высокая (≥20) нагрузка.

### Методика и формула

Гликемический индекс показывает скорость подъёма глюкозы после порции продукта, содержащей 50 г углеводов, но ничего не говорит о размере реальной порции. Гликемическая нагрузка учитывает и то, и другое: индекс умножается на количество углеводов в конкретной порции и делится на 100. Поэтому арбуз с высоким индексом даёт низкую нагрузку — углеводов в порции мало.

Углеводы порции(г) = углеводы на 100 г × масса порции / 100; ГН = ГИ × углеводы порции / 100

### Ограничения

Табличные значения индекса усреднены: сорт, зрелость, помол, способ приготовления и сочетание с белком, жиром и клетчаткой меняют отклик глюкозы. Индивидуальная реакция различается сильно, и при диабете расчёт не заменяет измерение глюкозы или данные мониторинга.

### Источники

- [Atkinson F.S., Brand-Miller J.C. et al. International tables of glycemic index and glycemic load values 2021. Am J Clin Nutr, 2021;114(5):1625–1632](https://pubmed.ncbi.nlm.nih.gov/34258626/)
- [Augustin L.S.A. et al. Glycemic index, glycemic load and glycemic response: International Scientific Consensus Summit. Nutr Metab Cardiovasc Dis, 2015;25(9):795–815](https://pubmed.ncbi.nlm.nih.gov/26160327/)

## Как встроить этот калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="glycemic-load" locale="ru" theme="auto" />;
}
```

### JavaScript-загрузчик

```html
<div data-nutrifit-widget="glycemic-load" data-locale="ru" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Обычный iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/glycemic-load?lang=ru&theme=auto"
  title="Калькулятор гликемической нагрузки" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
