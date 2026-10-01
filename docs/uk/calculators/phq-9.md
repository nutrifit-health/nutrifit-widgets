# Опитувальник здоров'я пацієнта PHQ-9 (Депресія)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/phq-9.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/phq-9.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/phq-9.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/phq-9.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/phq-9.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/phq-9.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`phq-9` · [NutriFit](https://nutrifit.health/uk/calculators/phq-9)

Міжнародний золотий стандарт первинного скринінгу депресії та оцінки тяжкості симптомів за клінічними критеріями DSM-5.

### Порядок використання

1. Згадайте останні 2 тижні: Оцінюйте своє самопочуття протягом останніх 14 днів, звертаючи увагу на частоту симптомів.
2. Дайте відповідь на всі 9 запитань: Оберіть частоту прояву кожного стану від «Зовсім ні» (0) до «Майже щодня» (3).
3. Ознайомтеся з клінічною інтерпретацією: Дізнайтеся категорію вираженості симптомів та практичні рекомендації фахівців.

### Методика та формула

9 запитань, які оцінюють частоту виникнення депресивних симптомів за останні 2 тижні за шкалою від 0 («Зовсім ні») до 3 («Майже щодня»).

Бал PHQ-9 = Сума балів усіх 9 запитань (0–27). 0–4: мінімальна; 5–9: легка; 10–14: помірна; 15–19: помірно-тяжка; 20–27: тяжка депресія.

### Обмеження

Скринінг не замінює очної консультації лікаря-психіатра або психотерапевта. Ствердна відповідь на 9-те запитання потребує невідкладного звернення до спеціаліста.

### Джерела

- [Kroenke K. et al. The PHQ-9: validity of a brief depression severity measure. J Gen Intern Med, 2001;16(9):606–613](https://pubmed.ncbi.nlm.nih.gov/11556941/)
- [Spitzer R.L. et al. Validation and utility of a self-report version of PRIME-MD: the PHQ primary care study. JAMA, 1999;282(18):1737–1744](https://pubmed.ncbi.nlm.nih.gov/10568646/)

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
  title="Опитувальник здоров'я пацієнта PHQ-9 (Депресія)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
