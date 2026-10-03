# Єльська шкала харчової залежності mYFAS 2.0

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/yfas.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/yfas.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/yfas.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/yfas.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/yfas.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/yfas.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`yfas` · [NutriFit](https://nutrifit.health/uk/calculators/yfas)

mYFAS 2.0: 13 запитань про проблеми з харчуванням за останні 12 місяців.

### Порядок використання

1. Прочитайте інструкцію: Ураховуйте зазначений період і зміст кожного твердження.
2. Оберіть відповіді: Дайте відповідь на кожен пункт, обираючи відповідний варіант.
3. Перегляньте результат: Результат відображає відповіді; використовуйте його з урахуванням обмежень методики.

### Методика і формула

Вісім частотних відповідей від «ніколи» до «щодня». Кожен пункт має власний поріг частоти; «так/ні» не використовується.

Пункти 5 і 6 оцінюють дистрес/порушення функціонування. Решта 11 дають кількість симптомів. За наявності дистресу: 2–3 — легка, 4–5 — помірна, 6–11 — виражена скринінгова категорія; інакше критерій шкали не виконано.

### Обмеження

Довідковий результат не встановлює діагноз і не призначає лікування. Переклад є інформаційною адаптацією; його окрему психометричну валідацію не підтверджено.

### Джерела

- [Schulte, Gearhardt. Modified Yale Food Addiction Scale 2.0: original form and scoring](https://sites.lsa.umich.edu/fastlab/yale-food-addiction-scale/)
- [Schulte EM et al. Development of the Modified Yale Food Addiction Scale Version 2.0. Eur Eat Disord Rev, 2017](https://pubmed.ncbi.nlm.nih.gov/28370722/)
- [Gearhardt AN et al. Development of the Yale Food Addiction Scale Version 2.0. Psychol Addict Behav, 2016](https://pubmed.ncbi.nlm.nih.gov/26866783/)

## Як вбудувати цей калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="yfas" locale="uk" theme="auto" />;
}
```

### JavaScript-завантажувач

```html
<div data-nutrifit-widget="yfas" data-locale="uk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Звичайний iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/yfas?lang=uk&theme=auto"
  title="Єльська шкала харчової залежності mYFAS 2.0" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
