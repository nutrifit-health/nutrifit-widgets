# Калькулятор балансу натрію та калію (Na:K та сіль)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/sodium-potassium.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/sodium-potassium.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/sodium-potassium.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/sodium-potassium.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/sodium-potassium.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/sodium-potassium.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`sodium-potassium` · [NutriFit](https://nutrifit.health/uk/calculators/sodium-potassium)

Оцінює електролітний баланс калію та натрію в раціоні, розраховує еквівалент кухонної солі та кардіоваскулярний ризик.

### Порядок використання

1. Приберіть приховану сіль: До 75% натрію потрапляє в організм не із сільнички, а з перероблених продуктів: ковбас, сирів, чіпсів, консервів та магазинного хліба.
2. Збільшіть калій з овочів та фруктів: Калій стимулює виведення натрію нирками (натрійурез). Додайте печену картоплю, шпинат, курагу, квасолю та банани.
3. Використовуйте калієву сіль: Сіль зі зниженим вмістом натрію (де 30% NaCl замінено на KCl) допомагає знизити тиск на 3–5 мм рт. ст.

### Методика та формула

Базується на настановах ВООЗ щодо споживання натрію та калію (2012) та принципах кардіологічної дієти DASH. Молярне співвідношення Na:K має бути менше 1,0 (оптимально 0,5–0,7). У раціоні сучасної людини натрій часто перевищує калій у 2–3 рази.

Молі Na = Na (мг) / 23; Молі K = K (мг) / 39,1; Співвідношення Na:K = Молі Na / Молі K; Еквівалент солі NaCl (г) = Na (мг) × 2,54 / 1000.

### Обмеження

Не призначений для пацієнтів із термінальною нирковою недостатністю (ХХН 4–5 стадії), у яких екскреція калію порушена і потрібне обмеження калію.

### Джерела

- [World Health Organization. Guideline: Sodium intake for adults and children. Geneva, 2012](https://www.who.int/publications/i/item/9789241504836)
- [World Health Organization. Guideline: Potassium intake for adults and children. Geneva, 2012](https://www.who.int/publications/i/item/9789241504829)
- [O’Donnell M. et al. Urinary sodium and potassium excretion and risk of cardiovascular events. JAMA, 2011;306(20):2229–2238](https://pubmed.ncbi.nlm.nih.gov/22110105/)

## Як вбудувати цей калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="sodium-potassium" locale="uk" theme="auto" />;
}
```

### JavaScript-завантажувач

```html
<div data-nutrifit-widget="sodium-potassium" data-locale="uk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Звичайний iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/sodium-potassium?lang=uk&theme=auto"
  title="Калькулятор балансу натрію та калію (Na:K та сіль)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
