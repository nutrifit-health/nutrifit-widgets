# Опитувальник здоров'я пацієнта PHQ-9 (Депресія)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/phq-9.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/phq-9.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/phq-9.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/phq-9.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/phq-9.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/phq-9.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`phq-9` · [NutriFit](https://nutrifit.health/uk/calculators/phq-9)

Вираженість депресивних симптомів за останні 2 тижні: 9 частотних відповідей від 0 до 3; сума 0–27.

### Порядок використання

1. Введіть вихідні дані: Вираженість депресивних симптомів за останні 2 тижні: 9 частотних відповідей від 0 до 3; сума 0–27.
2. Уточніть параметри: Вираженість депресивних симптомів за останні 2 тижні: 9 частотних відповідей від 0 до 3; сума 0–27.
3. Прочитайте результат: Інформаційний переклад для самооцінки. Валідація саме цієї адаптації не підтверджена. Бал не встановлює діагноз, а низький результат не виключає захворювання. Будь-яка ненульова відповідь на пункт 9 потребує окремого обговорення думок про смерть чи самоушкодження з фахівцем незалежно від суми. За безпосередньої небезпеки зверніться по термінову допомогу.

### Методика і формула

Вираженість депресивних симптомів за останні 2 тижні: 9 частотних відповідей від 0 до 3; сума 0–27.

Вираженість депресивних симптомів за останні 2 тижні: 9 частотних відповідей від 0 до 3; сума 0–27.

### Обмеження

Інформаційний переклад для самооцінки. Валідація саме цієї адаптації не підтверджена. Бал не встановлює діагноз, а низький результат не виключає захворювання. Будь-яка ненульова відповідь на пункт 9 потребує окремого обговорення думок про смерть чи самоушкодження з фахівцем незалежно від суми. За безпосередньої небезпеки зверніться по термінову допомогу.

### Джерела

- [Kroenke K et al. The PHQ-9: validity of a brief depression severity measure. J Gen Intern Med, 2001](https://pubmed.ncbi.nlm.nih.gov/11556941/)
- [Spitzer RL et al. Validation and utility of a self-report version of PRIME-MD: the PHQ primary care study. Primary Care Evaluation of Mental Disorders. Patient Health Questionnaire. JAMA, 1999](https://pubmed.ncbi.nlm.nih.gov/10568646/)

## Як вбудувати цей калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="phq-9" locale="uk" theme="auto" />;
}
```

### JavaScript-завантажувач

```html
<div data-nutrifit-widget="phq-9" data-locale="uk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Звичайний iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/phq-9?lang=uk&theme=auto"
  title="Опитувальник здоров&#x27;я пацієнта PHQ-9 (Депресія)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
