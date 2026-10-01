# Калькулятор м'язового потенціалу (Кейсі Батт та Мартін Беркхан)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/muscle-potential.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/muscle-potential.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/muscle-potential.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/muscle-potential.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/muscle-potential.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/muscle-potential.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`muscle-potential` · [NutriFit](https://nutrifit.health/uk/calculators/muscle-potential)

Визначає максимально досяжну суху м'язову масу та граничні обхвати тіла (груди, біцепс, стегно) без використання анаболічних стероїдів.

### Порядок використання

1. Точно виміряйте кістки: Зап'ястя вимірюється між кистю та голівкою ліктьової кістки. Щиколотка — у найвужчому місці трохи вище виступаючих кісточок суглоба.
2. Вкажіть бажаний відсоток жиру: Для цілорічної відмінної форми орієнтуйтеся на 10–12% жиру; для змагального рельєфу — 6–8%.
3. Порівняйте поточні заміри з максимумом: Калькулятор покаже граничні обхвати біцепса, грудей та стегон. Це реалістичні орієнтири вашого тіла.

### Методика та формула

Дослідження Кейсі Батта (Casey Butt, Ph.D.) протягом 6 років аналізували антропометрію сотень елітних чемпіонів світу з бодибілдингу достероїдної ери (1940–1950-ті рр.). Модель довела, що гранична маса м'язів суворо обмежена товщиною кісткового скелета — обхватами зап'ястя та щиколотки.

Max LBM = Зріст^1,5 × [sqrt(Зап'ястя)/22,6670 + sqrt(Щиколотка)/17,0104] × [(% Жиру/224) + 1]; Вага Беркхана (~5% жиру) = Зріст (см) − 100.

### Обмеження

Модель розроблена для чоловіків. У жінок через гормональний фон гранична м'язова маса становить приблизно 65–70% від чоловічої формули. Передбачає роки ідеального тренінгу та харчування.

### Джерела

- [Butt C. Your Maximum Muscular Potential (The Casey Butt Model). The WeighTrainer, 2009](https://www.weightrainer.net/potential.html)
- [Berkhan M. The Leangains Guide and Maximum Potential for Drug-Free Athletes, 2010](https://leangains.com/maximum-muscular-potential-of-drug-free-athletes-updated-version/)
- [Kouri E.M. et al. Fat-free mass index in users and nonusers of anabolic-androgenic steroids. Clin J Sport Med, 1995;5(4):223–228](https://pubmed.ncbi.nlm.nih.gov/7496846/)

## Як вбудувати цей калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="muscle-potential" locale="uk" theme="auto" />;
}
```

### JavaScript-завантажувач

```html
<div data-nutrifit-widget="muscle-potential" data-locale="uk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Звичайний iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/muscle-potential?lang=uk&theme=auto"
  title="Калькулятор м'язового потенціалу (Кейсі Батт та Мартін Беркхан)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
