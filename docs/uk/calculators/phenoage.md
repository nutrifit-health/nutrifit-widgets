# Калькулятор біологічного віку PhenoAge (Levine)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/phenoage.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/phenoage.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/phenoage.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/phenoage.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/phenoage.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/phenoage.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`phenoage` · [NutriFit](https://nutrifit.health/uk/calculators/phenoage)

Дослідницька оцінка за дев'ятьма біомаркерами та хронологічним віком за моделлю Morgan Levine 2018 (Aging).

### Порядок використання

1. Зберіть результати аналізів: Знадобляться: ЗАК (лейкоцити, лімфоцити %, MCV, RDW) та біохімія (альбумін, креатинін, глюкоза, СРБ, лужна фосфатаза).
2. Введіть дані в одиницях СІ: Зверніть увагу на одиниці виміру кожного показника у формі.
3. Оцініть різницю з паспортним віком: Від'ємне значення свідчить про менший біологічний знос систем організму порівняно з однолітками.

### Методика та формула

Модель Levine 2018 об'єднує 9 біомаркерів та хронологічний вік на основі когорти NHANES IV. Вона оцінює фенотиповий вік, який відображає смертність краще, ніж паспортний вік.

xb = −19,907 − 0,0336·Альбумін(г/л) + 0,0095·Креатинін(мкмоль/л) + 0,1953·Глюкоза(ммоль/л) + 0,0954·ln(СРБ, мг/л) − 0,0120·Лімфоцити(%) + 0,0268·MCV(фл) + 0,3306·RDW(%) + 0,00188·ЛФ(Од/л) + 0,0554·Лейкоцити(10⁹/л) + 0,0804·Вік(років).
Ризик смерті M = 1 − exp(−exp(xb) × (exp(120/b) − 1) / (10 × 0,00769)).
PhenoAge = 141,5 + ln(−0,00553 × ln(1 − M)) / 0,090165.

### Обмеження

Дослідницький інструмент для віку 20–84 років. Гострі інфекції, запалення чи прийом медикаментів тимчасово зміщують біомаркери (особливо СРБ та лейкоцити).

### Джерела

- [Levine M.E. et al. An epigenetic biomarker of aging for lifespan and healthspan. Aging (Albany NY), 2018;10(4):573–591](https://pubmed.ncbi.nlm.nih.gov/29676998/)
- [Liu Z. et al. A new aging measure captures morbidity and mortality risk across diverse subpopulations from NHANES IV: a cohort study. PLoS Med, 2018;15(12):e1002718](https://pubmed.ncbi.nlm.nih.gov/30596641/)

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
