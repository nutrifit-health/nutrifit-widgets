# Калькулятор норми води

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/water.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/water.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/water.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/water.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/water.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/water.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`water` · [NutriFit](https://nutrifit.health/uk/calculators/water)

Рахує добову потребу в рідині від маси тіла з поправками на фізичне навантаження та спекотний клімат.

### Порядок використання

1. Вкажіть масу тіла: Базова фізіологічна потреба у воді прямо пропорційна вазі тіла (в середньому 30–35 мл на 1 кг ваги).
2. Додайте фізичну активність: Кожні 30 хвилин тренування вимагають додатково 350–500 мл рідини для компенсації поту.
3. Врахуйте клімат і температуру: Спекотна погода (>25°C) або сухе повітря збільшують добову потребу ще на 500 мл.

### Методика та формула

Базова потреба — 30 мл на кг маси тіла для дорослих і 25 мл/кг після 60 років, коли знижується концентраційна здатність нирок. За кожну годину інтенсивного навантаження додається 500 мл на компенсацію втрат із потом, за спекотний клімат або сухе опалюване приміщення — ще 500 мл. Підсумок — повна потреба у воді; 20–30% її людина отримує з їжею, тому окремо показано норму саме напоїв (EFSA, 2010).

Разом(мл) = вага × 30 (або × 25 після 60 років) + 500 × години навантаження + 500 за спеки; Напої(мл) = разом × 0,75

### Обмеження

Орієнтир для здорових дорослих. За серцевої та ниркової недостатності, прийому діуретиків, гарячки та роботи в спекотних умовах норму визначає лікар. Спрага й колір сечі залишаються надійнішими орієнтирами, ніж будь-який розрахунок.

### Джерела

- [EFSA Panel on Dietetic Products. Scientific Opinion on Dietary Reference Values for water, 2010](https://www.efsa.europa.eu/en/efsajournal/pub/1459)
- [Sawka M.N. et al. American College of Sports Medicine Position Stand: Exercise and Fluid Replacement, 2007](https://pubmed.ncbi.nlm.nih.gov/17277604/)

## Як вбудувати цей калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="water" locale="uk" theme="auto" />;
}
```

### JavaScript-завантажувач

```html
<div data-nutrifit-widget="water" data-locale="uk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Звичайний iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/water?lang=uk&theme=auto"
  title="Калькулятор норми води" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
