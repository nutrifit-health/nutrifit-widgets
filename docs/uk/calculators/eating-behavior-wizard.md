# Самооцінка харчової поведінки

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/eating-behavior-wizard.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/eating-behavior-wizard.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/eating-behavior-wizard.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/eating-behavior-wizard.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/eating-behavior-wizard.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/eating-behavior-wizard.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`eating-behavior-wizard` · [NutriFit](https://nutrifit.health/uk/calculators/eating-behavior-wizard)

П’ять запитань SCOFF і чотири авторські запитання для самооцінки харчової поведінки.

### Порядок використання

1. Прочитайте інструкцію: Ураховуйте зазначений період і зміст кожного твердження.
2. Оберіть відповіді: Дайте відповідь на кожен пункт, обираючи відповідний варіант.
3. Перегляньте результат: Результат відображає відповіді; використовуйте його з урахуванням обмежень методики.

### Методика і формула

SCOFF обчислюється за п’ятьма фактичними відповідями «так/ні». Решта відповідей показуються безпосередньо.

Дві та більше відповідей «так» у SCOFF — позитивний скринінг. Авторські запитання не розраховують DEBQ, IES-2 або mYFAS і не визначають психотип.

### Обмеження

Довідковий результат не встановлює діагноз і не призначає лікування. Переклад є інформаційною адаптацією; його окрему психометричну валідацію не підтверджено.

### Джерела

- [Fairburn C.G. Cognitive Behavior Therapy and Eating Disorders. Guilford Press, 2008](https://www.guilford.com/books/Cognitive-Behavior-Therapy-and-Eating-Disorders/Christopher-Fairburn/9781593857097)
- [American Psychiatric Association. Diagnostic and Statistical Manual of Mental Disorders (DSM-5-TR), 2022](https://doi.org/10.1176/appi.books.9780890425787)
- [NICE (National Institute for Health and Care Excellence). Eating disorders: recognition and treatment (NG69), 2020](https://www.nice.org.uk/guidance/ng69)

## Як вбудувати цей калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="eating-behavior-wizard" locale="uk" theme="auto" />;
}
```

### JavaScript-завантажувач

```html
<div data-nutrifit-widget="eating-behavior-wizard" data-locale="uk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Звичайний iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/eating-behavior-wizard?lang=uk&theme=auto"
  title="Самооцінка харчової поведінки" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
