# Калькулятор скоригованого кальцію за альбуміном

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/corrected-calcium.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/corrected-calcium.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/corrected-calcium.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/corrected-calcium.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/corrected-calcium.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/corrected-calcium.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`corrected-calcium` · [NutriFit](https://nutrifit.health/uk/calculators/corrected-calcium)

Розрахунок загального кальцію з поправкою на альбумін за формулою Payne (1973) та сучасні обмеження методу.

### Порядок використання

1. Введіть загальний кальцій: З біохімічного аналізу крові в ммоль/л або мг/дл.
2. Введіть альбумін: Концентрація альбуміну в г/л або г/дл з тієї ж проби крові.
3. Оцініть необхідність визначення іонізованого Ca: Якщо результат межовий, а пацієнт має ХХН або критичний стан, призначте іонізований кальцій.

### Методика та формула

Близько 40–45 % кальцію сироватки зв'язано з альбуміном. При гіпоальбумінемії загальний кальцій падає, навіть якщо активний іонізований кальцій залишається в нормі. Спрощена формула Payne (1973) додає 0,02 ммоль/л (або 0,8 мг/дл) на кожен 1 г/л зниження альбуміну нижче 40 г/л.

Скоригований Ca (ммоль/л) = Загальний Ca + 0,02 × (40 − Альбумін, г/л)
В одиницях США: Скоригований Ca (мг/дл) = Загальний Ca + 0,8 × (4,0 − Альбумін, г/дл).

### Обмеження

Поправка Payne була розроблена в 1970-х роках на невеликій групі і часто переоцінює кальцій при хронічній хворобі нирок (ХХН), у реанімаційних пацієнтів та при вираженому ацидозі. «Золотим стандартом» залишається пряме вимірювання іонізованого кальцію (Ca²⁺).

### Джерела

- [Payne R.B., Little A.J., Williams R.B., Milner J.R. Interpretation of serum calcium in patients with abnormal serum proteins. BMJ, 1973;4(5893):643–646](https://pubmed.ncbi.nlm.nih.gov/4758544/)
- [Ladenson J.H., Lewis J.W., Boyd J.C. Failure of total calcium corrected for protein, albumin, and pH to correctly assess free calcium status. J Clin Endocrinol Metab, 1978;46(6):986–993](https://pubmed.ncbi.nlm.nih.gov/45478/)
- [Desgagnés N. et al. Use of Albumin-Adjusted Calcium Measurements in Clinical Practice. JAMA Netw Open, 2025;8(1):e2455251](https://pubmed.ncbi.nlm.nih.gov/39836424/)

## Як вбудувати цей калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="corrected-calcium" locale="uk" theme="auto" />;
}
```

### JavaScript-завантажувач

```html
<div data-nutrifit-widget="corrected-calcium" data-locale="uk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Звичайний iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/corrected-calcium?lang=uk&theme=auto"
  title="Калькулятор скоригованого кальцію за альбуміном" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
