# Глікемічне навантаження порції

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/glycemic-load.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/glycemic-load.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/glycemic-load.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/glycemic-load.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/glycemic-load.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/glycemic-load.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`glycemic-load` · [NutriFit](https://nutrifit.health/uk/calculators/glycemic-load)

ГН = ГІ × доступні вуглеводи порції / 100. Вкажіть ГІ конкретного продукту й приготування за шкалою глюкоза = 100, доступні вуглеводи на 100 г і масу порції. Початкові числа — приклад.

### Порядок використання

1. Введіть вихідні дані: ГН = ГІ × доступні вуглеводи порції / 100. Вкажіть ГІ конкретного продукту й приготування за шкалою глюкоза = 100, доступні вуглеводи на 100 г і масу порції. Початкові числа — приклад.
2. Уточніть параметри: ГН = ГІ × доступні вуглеводи порції / 100. Вкажіть ГІ конкретного продукту й приготування за шкалою глюкоза = 100, доступні вуглеводи на 100 г і масу порції. Початкові числа — приклад.
3. Прочитайте результат: ГН не прогнозує особисту глюкозу чи дозу інсуліну. Категорії порції не задають універсальну добову норму. Неперевірені усереднені числа для конкретних продуктів автоматично не підставляють.

### Методика і формула

ГН = ГІ × доступні вуглеводи порції / 100. Вкажіть ГІ конкретного продукту й приготування за шкалою глюкоза = 100, доступні вуглеводи на 100 г і масу порції. Початкові числа — приклад.

Вуглеводи порції(г) = вуглеводи на 100 г × маса порції / 100; ГН = ГІ × вуглеводи порції / 100

### Обмеження

ГН не прогнозує особисту глюкозу чи дозу інсуліну. Категорії порції не задають універсальну добову норму. Неперевірені усереднені числа для конкретних продуктів автоматично не підставляють.

### Джерела

- [Atkinson FS et al. International tables of glycemic index and glycemic load values 2021: a systematic review. Am J Clin Nutr, 2021](https://pubmed.ncbi.nlm.nih.gov/34258626/)
- [Augustin LSA et al. Glycemic index, glycemic load and glycemic response: An International Scientific Consensus Summit from the International Carbohydrate Quality Consortium (ICQC). Nutr Metab Cardiovasc Dis, 2015](https://pubmed.ncbi.nlm.nih.gov/26160327/)

## Як вбудувати цей калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="glycemic-load" locale="uk" theme="auto" />;
}
```

### JavaScript-завантажувач

```html
<div data-nutrifit-widget="glycemic-load" data-locale="uk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Звичайний iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/glycemic-load?lang=uk&theme=auto"
  title="Глікемічне навантаження порції" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
