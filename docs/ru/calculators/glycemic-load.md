# Гликемическая нагрузка порции

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/glycemic-load.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/glycemic-load.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/glycemic-load.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/glycemic-load.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/glycemic-load.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/glycemic-load.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`glycemic-load` · [NutriFit](https://nutrifit.health/ru/calculators/glycemic-load)

ГН = ГИ × доступные углеводы порции / 100. Введите ГИ конкретного продукта и приготовления на шкале глюкоза = 100, доступные углеводы на 100 г и массу порции. Начальные числа — демонстрационный пример.

### Порядок использования

1. Введите исходные данные: ГН = ГИ × доступные углеводы порции / 100. Введите ГИ конкретного продукта и приготовления на шкале глюкоза = 100, доступные углеводы на 100 г и массу порции. Начальные числа — демонстрационный пример.
2. Уточните параметры: ГН = ГИ × доступные углеводы порции / 100. Введите ГИ конкретного продукта и приготовления на шкале глюкоза = 100, доступные углеводы на 100 г и массу порции. Начальные числа — демонстрационный пример.
3. Прочитайте результат: ГН не прогнозирует индивидуальную глюкозу или дозу инсулина. Порционные категории не задают универсальную суточную норму. Необоснованные усреднённые значения для конкретных продуктов не подставляются автоматически.

### Методика и формула

ГН = ГИ × доступные углеводы порции / 100. Введите ГИ конкретного продукта и приготовления на шкале глюкоза = 100, доступные углеводы на 100 г и массу порции. Начальные числа — демонстрационный пример.

Углеводы порции(г) = углеводы на 100 г × масса порции / 100; ГН = ГИ × углеводы порции / 100

### Ограничения

ГН не прогнозирует индивидуальную глюкозу или дозу инсулина. Порционные категории не задают универсальную суточную норму. Необоснованные усреднённые значения для конкретных продуктов не подставляются автоматически.

### Источники

- [Atkinson FS et al. International tables of glycemic index and glycemic load values 2021: a systematic review. Am J Clin Nutr, 2021](https://pubmed.ncbi.nlm.nih.gov/34258626/)
- [Augustin LSA et al. Glycemic index, glycemic load and glycemic response: An International Scientific Consensus Summit from the International Carbohydrate Quality Consortium (ICQC). Nutr Metab Cardiovasc Dis, 2015](https://pubmed.ncbi.nlm.nih.gov/26160327/)

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
  title="Гликемическая нагрузка порции" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
