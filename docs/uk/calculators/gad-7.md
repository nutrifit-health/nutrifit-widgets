# Шкала генералізованої тривоги GAD-7

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/gad-7.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/gad-7.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/gad-7.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/gad-7.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/gad-7.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/gad-7.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`gad-7` · [NutriFit](https://nutrifit.health/uk/calculators/gad-7)

Вираженість симптомів тривоги за останні 2 тижні: 7 частотних відповідей від 0 до 3; сума 0–21.

### Порядок використання

1. Введіть вихідні дані: Вираженість симптомів тривоги за останні 2 тижні: 7 частотних відповідей від 0 до 3; сума 0–21.
2. Уточніть параметри: Вираженість симптомів тривоги за останні 2 тижні: 7 частотних відповідей від 0 до 3; сума 0–21.
3. Прочитайте результат: Інформаційний переклад для самооцінки. Валідація саме цієї адаптації не підтверджена. Бал не встановлює діагноз, а низький результат не виключає захворювання.

### Методика і формула

Вираженість симптомів тривоги за останні 2 тижні: 7 частотних відповідей від 0 до 3; сума 0–21.

Вираженість симптомів тривоги за останні 2 тижні: 7 частотних відповідей від 0 до 3; сума 0–21.

### Обмеження

Інформаційний переклад для самооцінки. Валідація саме цієї адаптації не підтверджена. Бал не встановлює діагноз, а низький результат не виключає захворювання.

### Джерела

- [Spitzer RL et al. A brief measure for assessing generalized anxiety disorder: the GAD-7. Arch Intern Med, 2006](https://pubmed.ncbi.nlm.nih.gov/16717171/)
- [Löwe B et al. Validation and standardization of the Generalized Anxiety Disorder Screener (GAD-7) in the general population. Med Care, 2008](https://pubmed.ncbi.nlm.nih.gov/18388841/)

## Як вбудувати цей калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="gad-7" locale="uk" theme="auto" />;
}
```

### JavaScript-завантажувач

```html
<div data-nutrifit-widget="gad-7" data-locale="uk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Звичайний iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/gad-7?lang=uk&theme=auto"
  title="Шкала генералізованої тривоги GAD-7" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
