# Шкала сприйманого стресу PSS-10

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/pss-10.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/pss-10.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/pss-10.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/pss-10.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/pss-10.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/pss-10.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`pss-10` · [NutriFit](https://nutrifit.health/uk/calculators/pss-10)

Класична психологічна шкала Шелдона Коена для вимірювання ступеня суб'єктивного сприйняття життєвих ситуацій як непередбачуваних і надмірних.

### Порядок використання

1. Згадайте останній місяць: Аналізуйте свої думки та почуття протягом останніх 30 днів як єдине ціле.
2. Оберіть частоту відчуттів: Оцініть кожне твердження від 0 («Ніколи») до 4 («Дуже часто»), відповідаючи спонтанно.
3. Оцініть рівень стресового навантаження: Зіставте свій бал з нормативними порогами та дізнайтеся стратегії відновлення ресурсів.

### Методика та формула

10 запитань із 5 варіантами відповідей (від 0 до 4). Пункти 4, 5, 7 і 8 оцінюються дзеркально (інвертовано) для вимірювання внутрішніх ресурсів стійкості.

Бал PSS-10 = Прямі пункти (1, 2, 3, 6, 9, 10) + Інвертовані пункти (4, 5, 7, 8). 0–13: низький; 14–26: помірний; 27–40: високий рівень стресу.

### Обмеження

Тест відображає суб'єктивне сприйняття непередбачуваності та перевантаження і не є клінічним діагнозом. При виснаженні зверніться до фахівця.

### Джерела

- [Cohen S. et al. A global measure of perceived stress. J Health Soc Behav, 1983;24(4):385–396](https://pubmed.ncbi.nlm.nih.gov/6668417/)
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
