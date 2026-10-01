# Калькулятор БЖВ

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/macros.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/macros.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/macros.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/macros.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/macros.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/macros.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`macros` · [NutriFit](https://nutrifit.health/uk/calculators/macros)

Розподіляє добову калорійність між білками, жирами та вуглеводами з урахуванням маси тіла й мети — у грамах, калоріях і відсотках.

### Порядок використання

1. Оберіть спосіб розрахунку: Вкажіть вже відому норму калорій або дозвольте NutriFit розрахувати добові витрати енергії (TDEE) на основі віку, статі, зросту, ваги та активності.
2. Вкажіть параметри та мету: Оберіть мету: схуднення (дефіцит 20%), підтримка ваги або набір м’язової маси (профіцит 15%). Введення ваги можливе у кг та фунтах.
3. Отримайте персональний план БЖВ: Миттєво дізнайтеся норму білків, жирів і вуглеводів у грамах, калоріях та відсотках від раціону з науково обґрунтованими діапазонами.

### Методика та формула

Білок і жир розраховуються від маси тіла, а не від частки калорій: це фізіологічні потреби, які не повинні змінюватися слідом за калорійністю. Норма білка береться з позиції ISSN (1,4–2,4 г/кг залежно від мети). Жири оцінюються в практичному діапазоні 0,8–1,2 г/кг, а отриманий відсоток енергії зіставляється з референтним діапазоном AMDR 20–35%. Вуглеводи отримують залишок калорійності: вони забезпечують енергію тренувань і роботу мозку.

Білок(г) = вага × коефіцієнт мети; Жир(г) = вага × 0,8…1,2; Вуглеводи(г) = (калорійність − білок × 4 − жир × 9) / 4

### Обмеження

Розрахунок від загальної маси тіла завищує норму білка за вираженого ожиріння — у цьому разі коректніше рахувати на суху масу. Схема не враховує розподіл нутрієнтів за прийомами їжі, клітковину та індивідуальну переносимість вуглеводів.

### Джерела

- [Jäger R. et al. International Society of Sports Nutrition Position Stand: Protein and Exercise. J Int Soc Sports Nutr, 2017;14:20](https://pubmed.ncbi.nlm.nih.gov/28642676/)
- [Institute of Medicine. Dietary Reference Intakes for Energy, Carbohydrate, Fiber, Fat, Fatty Acids, Cholesterol, Protein, and Amino Acids, 2005 (AMDR)](https://nap.nationalacademies.org/catalog/10490)

## Як вбудувати цей калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="macros" locale="uk" theme="auto" />;
}
```

### JavaScript-завантажувач

```html
<div data-nutrifit-widget="macros" data-locale="uk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Звичайний iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/macros?lang=uk&theme=auto"
  title="Калькулятор БЖВ" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
