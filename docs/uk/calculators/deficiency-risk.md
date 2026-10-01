# Скринінг ризику дефіциту нутрієнтів

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/deficiency-risk.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/deficiency-risk.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/deficiency-risk.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/deficiency-risk.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/deficiency-risk.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/deficiency-risk.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`deficiency-risk` · [NutriFit](https://nutrifit.health/uk/calculators/deficiency-risk)

Позначає чинники способу життя та харчування й показує, дефіцит яких нутрієнтів імовірний і якими аналізами це перевіряється.

### Порядок використання

1. Вкажіть особливості харчування: Зазначте обмеження в їжі: відсутність м’яса, риби або молочних продуктів.
2. Врахуйте спосіб життя та ліки: Відзначте брак сонячного світла, високі фізичні навантаження та прийом антацидів чи метформіну.
3. Отримайте список аналізів: Дізнайтеся рівень ризику та точні діагностичні маркери крові для кожного нутрієнта.

### Методика та формула

Це не діагностика, а перелік чинників ризику. Кожному чиннику зіставлені нутрієнти, для яких він визнаний чинником ризику у fact sheets NIH Office of Dietary Supplements і в матеріалах EFSA щодо референсних величин споживання. Вага чинника відображає силу зв’язку: 3 бали — ситуація, у якій дефіцит закономірний без компенсації, 2 — значущий чинник, 1 — додатковий внесок. Бали підсумовуються за кожним нутрієнтом: від 2 балів ризик помірний, від 4 — високий.

Бал нутрієнта = сума ваг позначених чинників; 0–1 бал — низький ризик, 2–3 — помірний, 4 і вище — високий

### Обмеження

Скринінг спирається лише на позначені чинники й не враховує фактичне споживання, прийом добавок, генетику та супутні хвороби. Він не підтверджує та не виключає дефіцит — статус нутрієнта визначається лабораторно й оцінюється лікарем або фахівцем із харчування.

### Джерела

- [NIH Office of Dietary Supplements. Dietary Supplement Fact Sheets (группы риска по нутриентам)](https://ods.od.nih.gov/factsheets/list-all/)
- [EFSA. Dietary Reference Values for the EU (DRV Finder)](https://multimedia.efsa.europa.eu/drvs/index.htm)

## Як вбудувати цей калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="deficiency-risk" locale="uk" theme="auto" />;
}
```

### JavaScript-завантажувач

```html
<div data-nutrifit-widget="deficiency-risk" data-locale="uk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Звичайний iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/deficiency-risk?lang=uk&theme=auto"
  title="Скринінг ризику дефіциту нутрієнтів" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
