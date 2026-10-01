# Калькулятор добової норми білка (ISSN та ESPEN)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/protein-intake.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/protein-intake.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/protein-intake.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/protein-intake.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/protein-intake.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/protein-intake.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`protein-intake` · [NutriFit](https://nutrifit.health/uk/calculators/protein-intake)

Розраховує оптимальну добову кількість протеїну з урахуванням цілей (схуднення, гіпертрофія, здоров'я 65+), типу харчування та синтезу м'язового білка (MPS).

### Порядок використання

1. Дізнайтеся свою цільову цифру: Введіть вагу та мету. Калькулятор визначить добовий грамаж і порцію на один прийом їжі.
2. Розподіліть по 25–40 г на прийом: Разовий прийом 30 г білка (пачка кисломолочного сиру, 150 г курячого філе або риби) активує лейциновий тригер м'язового анаболізму.
3. Урізноманітнюйте джерела: Комбінуйте тваринний (яйця, птиця, риба, кисломолочні продукти) та рослинний білок (тофу, сочевиця, нут, темпе).

### Методика та формула

Розрахунок базується на клінічних консенсусах Міжнародного товариства спортивного харчування (ISSN, 2017) та Європейської асоціації клінічного харчування та метаболізму (ESPEN). При ожирінні (ІМТ > 28) розрахунок автоматично переводиться на скориговану масу тіла (AdjBW), щоб запобігти гіперфільтрації в нирках.

Базова норма: 1,0–1,4 г/кг; Набір м'язів: 1,6–2,2 г/кг; Дефіцит (сушка): 2,0–2,4 г/кг; Витривалість: 1,2–1,6 г/кг; Вік 65+: 1,2–1,5 г/кг; ХХН (стадії 3–4): 0,6–0,8 г/кг. Вегетаріанство: +10% до норми.

### Обмеження

При хронічній хворобі нирок (ХХН) зі зниженням ШКФ < 60 мл/хв норма білка має бути суворо узгоджена з лікарем-нефрологом.

### Джерела

- [Jäger R. et al. International Society of Sports Nutrition Position Stand: protein and exercise. J Int Soc Sports Nutr, 2017;14:20](https://pubmed.ncbi.nlm.nih.gov/28642676/)
- [Deutz N.E. et al. Protein intake and exercise for optimal muscle function with aging: recommendations from the ESPEN Expert Group. Clin Nutr, 2014;33(6):929–936](https://pubmed.ncbi.nlm.nih.gov/24814383/)
- [Morton R.W. et al. A systematic review, meta-analysis and meta-regression of the effect of protein supplementation on gains in muscle mass and strength in healthy adults. Br J Sports Med, 2018;52(6):376–384](https://pubmed.ncbi.nlm.nih.gov/28698222/)

## Як вбудувати цей калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="protein-intake" locale="uk" theme="auto" />;
}
```

### JavaScript-завантажувач

```html
<div data-nutrifit-widget="protein-intake" data-locale="uk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Звичайний iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/protein-intake?lang=uk&theme=auto"
  title="Калькулятор добової норми білка (ISSN та ESPEN)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
