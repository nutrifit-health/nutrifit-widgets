# Конвертер HbA1c ↔ середня глюкоза (eAG)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/hba1c-eag.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/hba1c-eag.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/hba1c-eag.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/hba1c-eag.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/hba1c-eag.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/hba1c-eag.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`hba1c-eag` · [NutriFit](https://nutrifit.health/uk/calculators/hba1c-eag)

Перерахунок HbA1c у середню глікемію за 3 місяці за формулою ADAG, зворотний розрахунок і конвертація % ↔ ммоль/моль із категоріями ADA.

### Порядок використання

1. Оберіть, що у вас є: Якщо на руках аналіз HbA1c — введіть його. Якщо ви ведете глюкометр або CGM і знаєте середню глюкозу за 2–3 місяці — перемкніться на зворотний розрахунок.
2. Вкажіть одиниці бланка: HbA1c видають у відсотках (NGSP, США та СНД) або в ммоль/моль (IFCC, Європа). 6,5 % відповідає 48 ммоль/моль — калькулятор перерахує автоматично.
3. Зіставте eAG із показаннями глюкометра: Якщо середня за глюкометром помітно нижча за eAG — ймовірно, ви вимірюєте переважно натще і пропускаєте постпрандіальні піки. Розбіжність понад 1,5 ммоль/л варто обговорити з лікарем.

### Методика та формула

Глікований гемоглобін відображає середню концентрацію глюкози за 8–12 тижнів — термін життя еритроцита. Дослідження A1c-Derived Average Glucose (ADAG, Nathan 2008) зіставило HbA1c із безперервним моніторингом глюкози у 507 людей і вивело лінійну залежність: eAG (мг/дл) = 28,7 × HbA1c − 46,7. Калькулятор працює в обидва боки — з HbA1c у середню глюкозу і з відомої середньої глікемії (наприклад, за глюкометром або CGM) в очікуваний HbA1c — і переводить відсотки NGSP в одиниці IFCC (ммоль/моль), прийняті в Європі та Австралії.

eAG (мг/дл) = 28,7 × HbA1c (%) − 46,7
eAG (ммоль/л) = 1,59 × HbA1c (%) − 2,59
HbA1c (ммоль/моль, IFCC) = (HbA1c (%, NGSP) − 2,15) × 10,929
Зворотно: HbA1c (%) = (eAG, мг/дл + 46,7) / 28,7

### Обмеження

HbA1c неточний за станів, що змінюють термін життя еритроцитів або структуру гемоглобіну: анемії, гемоглобінопатії, вагітність, ХХН, нещодавня крововтрата або переливання, дефіцит заліза та B12. У 10–15 % людей індивідуальний зв’язок між HbA1c і глюкозою помітно відрізняється від середнього (феномен «глікаційного розриву»), тому eAG — популяційна оцінка, а не вимірювання. Діагноз діабету потребує підтвердження повторним тестом.

### Джерела

- [Nathan D.M. et al. Translating the A1C assay into estimated average glucose values. Diabetes Care, 2008;31(8):1473–1478](https://pubmed.ncbi.nlm.nih.gov/18540046/)
- [American Diabetes Association. Diagnosis and Classification of Diabetes: Standards of Care in Diabetes — 2024. Diabetes Care, 2024;47(Suppl 1):S20–S42](https://pubmed.ncbi.nlm.nih.gov/38078589/)
- [NGSP. IFCC Standardization of HbA1c: master equation NGSP ↔ IFCC](https://ngsp.org/ifcc.asp)

## Як вбудувати цей калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="hba1c-eag" locale="uk" theme="auto" />;
}
```

### JavaScript-завантажувач

```html
<div data-nutrifit-widget="hba1c-eag" data-locale="uk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Звичайний iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/hba1c-eag?lang=uk&theme=auto"
  title="Конвертер HbA1c ↔ середня глюкоза (eAG)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
