# Калькулятор аніонної різниці та дельта-співвідношення

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/anion-gap.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/anion-gap.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/anion-gap.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/anion-gap.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/anion-gap.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/anion-gap.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`anion-gap` · [NutriFit](https://nutrifit.health/uk/calculators/anion-gap)

Аніонна різниця = Na − Cl − HCO₃; поправка на альбумін = 0,25 × (40 − альбумін у г/л). Дельта-відношення = (скоригована різниця − обраний референс) / (референсний бікарбонат − HCO₃).

### Порядок використання

1. Введіть вихідні дані: Аніонна різниця = Na − Cl − HCO₃; поправка на альбумін = 0,25 × (40 − альбумін у г/л). Дельта-відношення = (скоригована різниця − обраний референс) / (референсний бікарбонат − HCO₃).
2. Уточніть параметри: Аніонна різниця = Na − Cl − HCO₃; поправка на альбумін = 0,25 × (40 − альбумін у г/л). Дельта-відношення = (скоригована різниця − обраний референс) / (референсний бікарбонат − HCO₃).
Референси залежать від лабораторного методу. Дельту розраховують лише за додатних чисельника й знаменника. Одне число без pH, газів крові та клінічного контексту не встановлює діагноз.
3. Прочитайте результат: Референси залежать від лабораторного методу. Дельту розраховують лише за додатних чисельника й знаменника. Одне число без pH, газів крові та клінічного контексту не встановлює діагноз.

### Методика і формула

Аніонна різниця = Na − Cl − HCO₃; поправка на альбумін = 0,25 × (40 − альбумін у г/л). Дельта-відношення = (скоригована різниця − обраний референс) / (референсний бікарбонат − HCO₃).

Аніонна різниця = Na − Cl − HCO₃; поправка на альбумін = 0,25 × (40 − альбумін у г/л). Дельта-відношення = (скоригована різниця − обраний референс) / (референсний бікарбонат − HCO₃).
Референси залежать від лабораторного методу. Дельту розраховують лише за додатних чисельника й знаменника. Одне число без pH, газів крові та клінічного контексту не встановлює діагноз.

### Обмеження

Референси залежать від лабораторного методу. Дельту розраховують лише за додатних чисельника й знаменника. Одне число без pH, газів крові та клінічного контексту не встановлює діагноз.

### Джерела

- [Kraut JA et al. Serum anion gap: its uses and limitations in clinical medicine. Clin J Am Soc Nephrol, 2007](https://pubmed.ncbi.nlm.nih.gov/17699401/)
- [Figge J et al. Anion gap and hypoalbuminemia. Crit Care Med, 1998](https://pubmed.ncbi.nlm.nih.gov/9824071/)
- [Berend K et al. Physiological approach to assessment of acid-base disturbances. N Engl J Med, 2014](https://pubmed.ncbi.nlm.nih.gov/25295502/)

## Як вбудувати цей калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="anion-gap" locale="uk" theme="auto" />;
}
```

### JavaScript-завантажувач

```html
<div data-nutrifit-widget="anion-gap" data-locale="uk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Звичайний iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/anion-gap?lang=uk&theme=auto"
  title="Калькулятор аніонної різниці та дельта-співвідношення" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
