# Калькулятор індексу TyG (тригліцериди × глюкоза)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/tyg-index.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/tyg-index.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/tyg-index.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/tyg-index.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/tyg-index.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/tyg-index.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`tyg-index` · [NutriFit](https://nutrifit.health/uk/calculators/tyg-index)

Дослідницький індекс за тригліцеридами та глюкозою натще, з похідними TyG-BMI і TyG-WC.

### Порядок використання

1. Візьміть тригліцериди та глюкозу натще: Обидва показники входять до стандартної біохімії крові. Важливо, щоб забір був натще: тригліцериди після їжі зростають в 1,5–2 рази й «роздувають» індекс.
2. Вкажіть одиниці бланка: Формула визначена для мг/дл. Якщо лабораторія видала ммоль/л, залиште перемикач у ммоль/л — калькулятор перерахує в мг/дл автоматично.
3. Додайте вагу, зріст і талію: TyG-BMI і TyG-WC точніше виявляють вісцеральне ожиріння та жирову хворобу печінки, ніж «чистий» TyG. Талію вимірюйте на рівні пупка на видиху.

### Методика і формула

Тут використовується варіант ln(TG × глюкоза / 2), обидві концентрації в мг/дл, як у Lee et al. (2018). Інший опублікований варіант — ln(TG × глюкоза)/2 — має іншу числову шкалу; його пороги не можна переносити сюди.

TyG = ln[TG (мг/дл) × глюкоза (мг/дл) / 2]. TyG-BMI = TyG × ІМТ; TyG-WC = TyG × талія (см).

### Обмеження

Універсальних діагностичних порогів для цього розрахунку не встановлено. Індекс не підтверджує інсулінорезистентність, діабет або серцево-судинне захворювання.

### Джерела

- [Lee J.W., Lim N.K., Park H.Y. TyG and type 2 diabetes risk in middle-aged Koreans. BMC Endocr Disord, 2018;18:33](https://link.springer.com/article/10.1186/s12902-018-0259-x)
- [Simental-Mendía LE et al. The product of fasting glucose and triglycerides as surrogate for identifying insulin resistance in apparently healthy subjects. Metab Syndr Relat Disord, 2008](https://pubmed.ncbi.nlm.nih.gov/19067533/)
- [Guerrero-Romero F et al. The product of triglycerides and glucose, a simple measure of insulin sensitivity. Comparison with the euglycemic-hyperinsulinemic clamp. J Clin Endocrinol Metab, 2010](https://pubmed.ncbi.nlm.nih.gov/20484475/)
- [Sánchez-García A et al. Diagnostic Accuracy of the Triglyceride and Glucose Index for Insulin Resistance: A Systematic Review. Int J Endocrinol, 2020](https://pubmed.ncbi.nlm.nih.gov/32256572/)

## Як вбудувати цей калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="tyg-index" locale="uk" theme="auto" />;
}
```

### JavaScript-завантажувач

```html
<div data-nutrifit-widget="tyg-index" data-locale="uk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Звичайний iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/tyg-index?lang=uk&theme=auto"
  title="Калькулятор індексу TyG (тригліцериди × глюкоза)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
