# Калькулятор скоригованого кальцію за альбуміном

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/corrected-calcium.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/corrected-calcium.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/corrected-calcium.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/corrected-calcium.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/corrected-calcium.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/corrected-calcium.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`corrected-calcium` · [NutriFit](https://nutrifit.health/uk/calculators/corrected-calcium)

Скоригований кальцій = загальний кальцій + 0,02 × (40 − альбумін), кальцій у ммоль/л, альбумін у г/л. Це спрощена формула Payne.

### Порядок використання

1. Введіть вихідні дані: Скоригований кальцій = загальний кальцій + 0,02 × (40 − альбумін), кальцій у ммоль/л, альбумін у г/л. Це спрощена формула Payne.
2. Уточніть параметри: Скоригований кальцій = загальний кальцій + 0,02 × (40 − альбумін), кальцій у ммоль/л, альбумін у г/л. Це спрощена формула Payne.
Ca: mg/dL × 0.2495 = mmol/L; mmol/L ÷ 0.2495 = mg/dL. Albumin: g/dL × 10 = g/L.
3. Прочитайте результат: Поправка не вимірює іонізований кальцій і може помилково класифікувати результат, особливо за низького альбуміну. Універсальна категорія кальцію не присвоюється.

### Методика і формула

Скоригований кальцій = загальний кальцій + 0,02 × (40 − альбумін), кальцій у ммоль/л, альбумін у г/л. Це спрощена формула Payne.

Скоригований кальцій = загальний кальцій + 0,02 × (40 − альбумін), кальцій у ммоль/л, альбумін у г/л. Це спрощена формула Payne.
Ca: mg/dL × 0.2495 = mmol/L; mmol/L ÷ 0.2495 = mg/dL. Albumin: g/dL × 10 = g/L.

### Обмеження

Поправка не вимірює іонізований кальцій і може помилково класифікувати результат, особливо за низького альбуміну. Універсальна категорія кальцію не присвоюється.

### Джерела

- [Payne RB et al. Interpretation of serum calcium in patients with abnormal serum proteins. Br Med J, 1973](https://pubmed.ncbi.nlm.nih.gov/4758544/)
- [Ladenson JH et al. Failure of total calcium corrected for protein, albumin, and pH to correctly assess free calcium status. J Clin Endocrinol Metab, 1978](https://pubmed.ncbi.nlm.nih.gov/45478/)
- [Desgagnés N et al. Use of Albumin-Adjusted Calcium Measurements in Clinical Practice. JAMA Netw Open, 2025](https://pubmed.ncbi.nlm.nih.gov/39836424/)

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
