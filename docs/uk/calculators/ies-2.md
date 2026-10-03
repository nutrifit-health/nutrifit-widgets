# Шкала інтуїтивного харчування IES-2

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/ies-2.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/ies-2.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/ies-2.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/ies-2.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/ies-2.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/ies-2.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`ies-2` · [NutriFit](https://nutrifit.health/uk/calculators/ies-2)

IES-2: 23 твердження про ставлення до їжі та тілесних сигналів, чотири субшкали.

### Порядок використання

1. Прочитайте інструкцію: Укажіть, наскільки кожне твердження описує ваші погляди та поведінку. Фіксований період пригадування не задано.
2. Оберіть відповіді: Дайте відповідь на кожен пункт, обираючи відповідний варіант.
3. Перегляньте результат: Результат відображає відповіді; використовуйте його з урахуванням обмежень методики.

### Методика і формула

Ступінь згоди від 1 до 5. У згрупованому авторському бланку пункти 1, 2, 3, 7, 8, 9 і 10 оцінюються як 6 мінус відповідь.

Загальний бал — середнє 23 відповідей після інверсії. Субшкали: пункти 1–6, 7–14, 15–20 і 21–23. Усі середні від 1 до 5; діагностичних порогів немає.

### Обмеження

Довідковий результат не встановлює діагноз і не призначає лікування. Переклад є інформаційною адаптацією; його окрему психометричну валідацію не підтверджено.

### Джерела

- [Tylka. Intuitive Eating Scale-2: grouped original items and scoring](https://cpb-us-w2.wpmucdn.com/u.osu.edu/dist/1/10560/files/2015/02/IES-2-Items-sz2at8.doc)
- [Tylka TL et al. The Intuitive Eating Scale-2: item refinement and psychometric evaluation with college women and men. J Couns Psychol, 2013](https://pubmed.ncbi.nlm.nih.gov/23356469/)
- [Tribole E., Resch E. Intuitive Eating: A Revolutionary Anti-Diet Approach. St. Martin’s Essentials, 2020](https://www.intuitiveeating.org/)

## Як вбудувати цей калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="ies-2" locale="uk" theme="auto" />;
}
```

### JavaScript-завантажувач

```html
<div data-nutrifit-widget="ies-2" data-locale="uk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Звичайний iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/ies-2?lang=uk&theme=auto"
  title="Шкала інтуїтивного харчування IES-2" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
