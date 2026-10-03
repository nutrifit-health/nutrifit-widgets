# Шкала сприйманого стресу PSS-10

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/pss-10.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/pss-10.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/pss-10.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/pss-10.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/pss-10.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/pss-10.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`pss-10` · [NutriFit](https://nutrifit.health/uk/calculators/pss-10)

Оцінка сприйманого стресу за останній місяць за 10 пунктами PSS-10.

### Порядок використання

1. Прочитайте інструкцію: Ураховуйте зазначений період і зміст кожного твердження.
2. Оберіть відповіді: Дайте відповідь на кожен пункт, обираючи відповідний варіант.
3. Перегляньте результат: Результат відображає відповіді; використовуйте його з урахуванням обмежень методики.

### Методика і формула

10 відповідей від 0 до 4. Пункти 4, 5, 7 і 8 оцінюються як 4 мінус відповідь.

Сума 0–40. Більший бал означає більше сприйманого стресу; автор не встановлює порогів низького, помірного чи високого стресу.

### Обмеження

Довідковий результат не встановлює діагноз і не призначає лікування. Переклад є інформаційною адаптацією; його окрему психометричну валідацію не підтверджено.

### Джерела

- [Cohen. Perceived Stress Scale: author instructions and scoring limitations](https://www.cmu.edu/dietrich/psychology/stress-immunity-disease-lab/scales/index.html)
- [Cohen S et al. A global measure of perceived stress. J Health Soc Behav, 1983](https://pubmed.ncbi.nlm.nih.gov/6668417/)
- [Cohen S., Williamson G.M. Perceived stress in a probability sample of the United States. The Social Psychology of Health, 1988:31–67](https://psycnet.apa.org/record/1988-98838-002)

## Як вбудувати цей калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="pss-10" locale="uk" theme="auto" />;
}
```

### JavaScript-завантажувач

```html
<div data-nutrifit-widget="pss-10" data-locale="uk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Звичайний iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/pss-10?lang=uk&theme=auto"
  title="Шкала сприйманого стресу PSS-10" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
