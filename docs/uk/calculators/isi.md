# Індекс тяжкості безсоння ISI

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/isi.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/isi.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/isi.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/isi.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/isi.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/isi.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`isi` · [NutriFit](https://nutrifit.health/uk/calculators/isi)

Оцінка сну за останні 2 тижні: 7 пунктів із різними шкалами від 0 до 4; сума 0–28. Задоволеність, помітність проблем, занепокоєння та вплив на життя мають власні відповіді.

### Порядок використання

1. Введіть вихідні дані: Оцінка сну за останні 2 тижні: 7 пунктів із різними шкалами від 0 до 4; сума 0–28. Задоволеність, помітність проблем, занепокоєння та вплив на життя мають власні відповіді.
2. Уточніть параметри: Оцінка сну за останні 2 тижні: 7 пунктів із різними шкалами від 0 до 4; сума 0–28. Задоволеність, помітність проблем, занепокоєння та вплив на життя мають власні відповіді.
3. Прочитайте результат: Інформаційний переклад для самооцінки. Валідація саме цієї адаптації не підтверджена. Бал не встановлює діагноз, а низький результат не виключає захворювання.

### Методика і формула

Оцінка сну за останні 2 тижні: 7 пунктів із різними шкалами від 0 до 4; сума 0–28. Задоволеність, помітність проблем, занепокоєння та вплив на життя мають власні відповіді.

Оцінка сну за останні 2 тижні: 7 пунктів із різними шкалами від 0 до 4; сума 0–28. Задоволеність, помітність проблем, занепокоєння та вплив на життя мають власні відповіді.

### Обмеження

Інформаційний переклад для самооцінки. Валідація саме цієї адаптації не підтверджена. Бал не встановлює діагноз, а низький результат не виключає захворювання.

### Джерела

- [Morin CM et al. The Insomnia Severity Index: psychometric indicators to detect insomnia cases and evaluate treatment response. Sleep, 2011](https://pubmed.ncbi.nlm.nih.gov/21532953/)
- [Bastien CH et al. Validation of the Insomnia Severity Index as an outcome measure for insomnia research. Sleep Med, 2001](https://pubmed.ncbi.nlm.nih.gov/11438246/)
- [PhenX Toolkit. Insomnia Severity Index: patient questionnaire, last two weeks, protocol 640801](https://www.phenxtoolkit.org/protocols/view/640801?origin=subcollection)

## Як вбудувати цей калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="isi" locale="uk" theme="auto" />;
}
```

### JavaScript-завантажувач

```html
<div data-nutrifit-widget="isi" data-locale="uk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Звичайний iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/isi?lang=uk&theme=auto"
  title="Індекс тяжкості безсоння ISI" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
