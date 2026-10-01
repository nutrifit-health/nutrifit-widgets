# Шкала інтуїтивного харчування IES-2

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/ies-2.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/ies-2.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/ies-2.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/ies-2.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/ies-2.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/ies-2.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`ies-2` · [NutriFit](https://nutrifit.health/uk/calculators/ies-2)

Науково валідована шкала Трейсі Тілка (23 запитання) для вимірювання здорових, інтуїтивних стосунків з їжею та власним тілом.

### Порядок використання

1. Оцініть своє звичне ставлення до їжі: Відповідайте щиро, спираючись на свої щоденні реакції та звички за останні місяці.
2. Оберіть ступінь згоди від 1 до 5: 1 — категорично не згоден, 5 — повністю згоден.
3. Ознайомтеся з профілем за 4 компонентами: Зверніть увагу на шкали з балом нижче 3,0 — це ваші зони відновлення гармонії.

### Методика та формула

23 твердження за 5-бальною шкалою Лайкерта. Включає 4 субшкали: безумовний дозвіл на їжу (UPE), їжа з фізичних причин (EPR), опора на сигнали голоду/ситості (RHSC) та відповідність вибору їжі потребам тіла (B-FCC).

Загальний бал IES-2 = Середнє арифметичне всіх 23 пунктів з урахуванням інвертованих запитань (від 1,0 до 5,0). Бал > 3,5 свідчить про високу інтуїтивну компетентність.

### Обмеження

Шкала оцінює психологічні патерни харчування. При клінічних розладах харчової поведінки робота має проводитися під наглядом фахівця.

### Джерела

- [Tylka T.L., Kroon Van Diest A.M. The Intuitive Eating Scale-2: item refinement and psychometric evaluation. J Couns Psychol, 2013;60(1):137–153](https://pubmed.ncbi.nlm.nih.gov/23356469/)
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
