# Калькулятор глікемічного навантаження

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/glycemic-load.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/glycemic-load.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/glycemic-load.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/glycemic-load.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/glycemic-load.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/glycemic-load.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`glycemic-load` · [NutriFit](https://nutrifit.health/uk/calculators/glycemic-load)

Рахує глікемічне навантаження порції за глікемічним індексом і вмістом вуглеводів — величину, що відображає реальний відгук глюкози краще, ніж сам лише індекс.

### Порядок використання

1. Оберіть продукт або введіть ГІ: Скористайтеся базою міжнародних таблиць (Atkinson 2021) або вкажіть глікемічний індекс вручну.
2. Вкажіть вуглеводи та розмір порції: Введіть вміст вуглеводів на 100 г та фактичну вагу вашої порції в грамах.
3. Оцініть метаболічний вплив: Дізнайтеся реальний вплив на рівень цукру: низьке (≤10), середнє (11–19) або високе (≥20) навантаження.

### Методика та формула

Глікемічний індекс показує швидкість підйому глюкози після порції продукту, що містить 50 г вуглеводів, але нічого не каже про розмір реальної порції. Глікемічне навантаження враховує і те, і те: індекс множиться на кількість вуглеводів у конкретній порції та ділиться на 100. Тому кавун із високим індексом дає низьке навантаження — вуглеводів у порції мало.

Вуглеводи порції(г) = вуглеводи на 100 г × маса порції / 100; ГН = ГІ × вуглеводи порції / 100

### Обмеження

Табличні значення індексу усереднені: сорт, стиглість, помел, спосіб приготування та поєднання з білком, жиром і клітковиною змінюють відгук глюкози. Індивідуальна реакція різниться суттєво, і за діабету розрахунок не замінює вимірювання глюкози чи дані моніторингу.

### Джерела

- [Atkinson F.S., Brand-Miller J.C. et al. International tables of glycemic index and glycemic load values 2021. Am J Clin Nutr, 2021;114(5):1625–1632](https://pubmed.ncbi.nlm.nih.gov/34258626/)
- [Augustin L.S.A. et al. Glycemic index, glycemic load and glycemic response: International Scientific Consensus Summit. Nutr Metab Cardiovasc Dis, 2015;25(9):795–815](https://pubmed.ncbi.nlm.nih.gov/26160327/)

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
  title="Калькулятор глікемічного навантаження" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
