# Калькулятор біологічного віку PhenoAge (Levine)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/phenoage.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/phenoage.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/phenoage.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/phenoage.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/phenoage.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/phenoage.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`phenoage` · [NutriFit](https://nutrifit.health/uk/calculators/phenoage)

Модель Levine 2018 поєднує дев’ять біомаркерів і календарний вік. PhenoAge — віковий еквівалент популяційного ризику в моделі NHANES, а не вік органів чи індивідуальна тривалість життя. Різниця з віком — арифметичне віднімання, не швидкість старіння та не статистичний залишок PhenoAgeAccel.

### Порядок використання

1. Введіть вихідні дані: Модель Levine 2018 поєднує дев’ять біомаркерів і календарний вік. PhenoAge — віковий еквівалент популяційного ризику в моделі NHANES, а не вік органів чи індивідуальна тривалість життя. Різниця з віком — арифметичне віднімання, не швидкість старіння та не статистичний залишок PhenoAgeAccel.
2. Уточніть параметри: xb = −19.907 − 0.0336·A + 0.0095·C + 0.1953·G + 0.0954·ln(CRP) − 0.012·L + 0.0268·M + 0.3306·R + 0.00188·P + 0.0554·W + 0.0804·a
H = exp(xb) × (exp(120 × 0.0076927) − 1) / 0.0076927
PhenoAge = 141.50225 + ln(0.00553 × H) / 0.09165
A — альбумін, г/л; C — креатинін, мкмоль/л; G — глюкоза, ммоль/л; CRP — мг/дл (ввід у мг/л ÷ 10); L — лімфоцити, %; M — MCV, фл; R — RDW, %; P — ЛФ, Од/л; W — лейкоцити, 10⁹/л; a — вік, роки.
3. Прочитайте результат: Дослідницька модель для віку 20–84 роки. Гостре захворювання змінює біомаркери й результат. Це не діагноз, тривалість життя чи доказ омолодження. CRP має бути виміряним і додатним; результат нижче межі виявлення не можна замінювати нулем.

### Методика і формула

Модель Levine 2018 поєднує дев’ять біомаркерів і календарний вік. PhenoAge — віковий еквівалент популяційного ризику в моделі NHANES, а не вік органів чи індивідуальна тривалість життя. Різниця з віком — арифметичне віднімання, не швидкість старіння та не статистичний залишок PhenoAgeAccel.

xb = −19.907 − 0.0336·A + 0.0095·C + 0.1953·G + 0.0954·ln(CRP) − 0.012·L + 0.0268·M + 0.3306·R + 0.00188·P + 0.0554·W + 0.0804·a
H = exp(xb) × (exp(120 × 0.0076927) − 1) / 0.0076927
PhenoAge = 141.50225 + ln(0.00553 × H) / 0.09165
A — альбумін, г/л; C — креатинін, мкмоль/л; G — глюкоза, ммоль/л; CRP — мг/дл (ввід у мг/л ÷ 10); L — лімфоцити, %; M — MCV, фл; R — RDW, %; P — ЛФ, Од/л; W — лейкоцити, 10⁹/л; a — вік, роки.

### Обмеження

Дослідницька модель для віку 20–84 роки. Гостре захворювання змінює біомаркери й результат. Це не діагноз, тривалість життя чи доказ омолодження. CRP має бути виміряним і додатним; результат нижче межі виявлення не можна замінювати нулем.

### Джерела

- [Levine ME et al. An epigenetic biomarker of aging for lifespan and healthspan. Aging (Albany NY), 2018](https://pubmed.ncbi.nlm.nih.gov/29676998/)
- [Liu Z et al. A new aging measure captures morbidity and mortality risk across diverse subpopulations from NHANES IV: A cohort study. PLoS Med, 2018](https://pubmed.ncbi.nlm.nih.gov/30596641/)

## Як вбудувати цей калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="phenoage" locale="uk" theme="auto" />;
}
```

### JavaScript-завантажувач

```html
<div data-nutrifit-widget="phenoage" data-locale="uk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Звичайний iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/phenoage?lang=uk&theme=auto"
  title="Калькулятор біологічного віку PhenoAge (Levine)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
