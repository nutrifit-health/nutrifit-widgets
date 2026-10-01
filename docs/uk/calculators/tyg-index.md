# Калькулятор індексу TyG (тригліцериди × глюкоза)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/tyg-index.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/tyg-index.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/tyg-index.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/tyg-index.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/tyg-index.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/tyg-index.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`tyg-index` · [NutriFit](https://nutrifit.health/uk/calculators/tyg-index)

Індекс TyG і похідні TyG-BMI, TyG-WC: оцінка інсулінорезистентності та кардіометаболічного ризику за тригліцеридами і глюкозою натще — без аналізу на інсулін.

### Порядок використання

1. Візьміть тригліцериди та глюкозу натще: Обидва показники входять до стандартної біохімії крові. Важливо, щоб забір був натще: тригліцериди після їжі зростають в 1,5–2 рази й «роздувають» індекс.
2. Вкажіть одиниці бланка: Формула визначена для мг/дл. Якщо лабораторія видала ммоль/л, залиште перемикач у ммоль/л — калькулятор перерахує в мг/дл автоматично.
3. Додайте вагу, зріст і талію: TyG-BMI і TyG-WC точніше виявляють вісцеральне ожиріння та жирову хворобу печінки, ніж «чистий» TyG. Талію вимірюйте на рівні пупка на видиху.

### Методика та формула

Індекс TyG (Simental-Mendía, 2008) — натуральний логарифм половини добутку тригліцеридів і глюкози натще в мг/дл. Він відображає ліпотоксичність і порушення утилізації глюкози — два ключові механізми інсулінорезистентності — і корелює з еуглікемічним клемпом не гірше за HOMA-IR, при цьому не потребує дорогого й погано стандартизованого аналізу на інсулін. Похідні TyG-BMI і TyG-WC додають масу тіла та окружність талії, підвищуючи точність виявлення метаболічного синдрому та НАЖХП.

TyG = ln[ Тригліцериди (мг/дл) × Глюкоза (мг/дл) / 2 ]
TyG-BMI = TyG × ІМТ (кг/м²)
TyG-WC = TyG × Окружність талії (см)
Перерахунок: ТГ мг/дл = ммоль/л × 88,57; глюкоза мг/дл = ммоль/л × 18,016

### Обмеження

Єдиного порогу TyG немає: у різних популяціях межа високого ризику коливається від 8,5 до 9,0, а в азійських когортах — нижча. Індекс спотворюється за сімейної гіпертригліцеридемії, приймання фібратів, статинів і алкоголю напередодні, а також під час гострого захворювання. Потрібні значення натще (8–12 год). Індекс — скринінговий інструмент, а не діагноз.

### Джерела

- [Simental-Mendía L.E., Rodríguez-Morán M., Guerrero-Romero F. The product of fasting glucose and triglycerides as surrogate for identifying insulin resistance in apparently healthy subjects. Metab Syndr Relat Disord, 2008;6(4):299–304](https://pubmed.ncbi.nlm.nih.gov/19067533/)
- [Guerrero-Romero F. et al. The product of triglycerides and glucose, a simple measure of insulin sensitivity. Comparison with the euglycemic-hyperinsulinemic clamp. J Clin Endocrinol Metab, 2010;95(7):3347–3351](https://pubmed.ncbi.nlm.nih.gov/20484475/)
- [Sánchez-García A. et al. Diagnostic accuracy of the triglyceride and glucose index for insulin resistance: a systematic review. Int J Endocrinol, 2020;2020:4678526](https://pubmed.ncbi.nlm.nih.gov/32256572/)

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
