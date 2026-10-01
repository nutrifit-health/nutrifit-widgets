# Калькулятор дефіциту заліза: TSAT, феритин та дефіцит за Ганзоні

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/iron-deficiency.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/iron-deficiency.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/iron-deficiency.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/iron-deficiency.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/iron-deficiency.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/iron-deficiency.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`iron-deficiency` · [NutriFit](https://nutrifit.health/uk/calculators/iron-deficiency)

TSAT, довідковий поріг феритину з урахуванням СРБ та арифметична оцінка за формулою Ганзоні 1970.

### Порядок використання

1. Здайте аналізи вранці: Залізо сироватки має виражений добовий ритм. Здавайте вранці натще, уникайте прийому препаратів заліза напередодні.
2. Оцініть феритин разом із СРБ: Феритин — гострофазний білок. При запаленні (СРБ > 5 мг/л) феритин хибно підвищується навіть при реальному дефіциті заліза.
3. Розрахуйте TSAT: TSAT < 20 % підтверджує функціональний або абсолютний дефіцит заліза, особливо коли феритин важко інтерпретувати.

### Методика та формула

TSAT — відношення сироваткового заліза до ЗЗЗК в однакових одиницях. Якщо замість ЗЗЗК виміряно трансферин, використовується перерахунок ЗЗЗК (мкмоль/л) ≈ Трансферин (г/л) × 25,0. Поріг феритину WHO 2020: 15 мкг/л без запалення, 70 мкг/л при СРБ > 5 мг/л. Формула Ganzoni розраховує загальний кумулятивний дефіцит заліза.

TSAT (%) = Залізо сироватки / ЗЗЗК × 100
ЗЗЗК (мкмоль/л) ≈ Трансферин (г/л) × 25,0
Дефіцит заліза (мг) = Маса (кг) × (Цільовий Hb − Фактичний Hb, г/дл) × 2,4 + Депо (500 мг при масі ≥ 35 кг).

### Обмеження

Для дорослих поза вагітністю. Введіть виміряний СРБ; невідомий СРБ не гарантує відсутність запалення. Формула Ганзоні розраховує арифметичний дефіцит, а не конкретну дозу препарату; вибір терапії здійснює лікар.

### Джерела

- [WHO guideline on use of ferritin concentrations to assess iron status in individuals and populations. Geneva: World Health Organization, 2020](https://www.who.int/publications/i/item/9789240000124)
- [Ganzoni A.M. Intravenous iron-dextran: therapeutic and experimental possibilities. Schweiz Med Wochenschr, 1970;100(7):301–303](https://pubmed.ncbi.nlm.nih.gov/5413918/)
- [Venofer. Summary of Product Characteristics: Ganzoni formula and iron stores](https://www.medicines.org.uk/emc/product/5911/smpc)

## Як вбудувати цей калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="iron-deficiency" locale="uk" theme="auto" />;
}
```

### JavaScript-завантажувач

```html
<div data-nutrifit-widget="iron-deficiency" data-locale="uk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Звичайний iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/iron-deficiency?lang=uk&theme=auto"
  title="Калькулятор дефіциту заліза: TSAT, феритин та дефіцит за Ганзоні" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
