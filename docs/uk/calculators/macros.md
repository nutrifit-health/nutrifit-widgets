# Авторський планувальник БЖВ

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/macros.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/macros.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/macros.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/macros.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/macros.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/macros.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`macros` · [NutriFit](https://nutrifit.health/uk/calculators/macros)

Білок: 1,8–2,2 г/кг для зниження, 1,4–1,8 для утримання, 1,8–2,4 для набору; жир 0,8–1,2 г/кг. Використано середини; вуглеводи — залишок калорій за 4/9/4 ккал/г.

### Порядок використання

1. Введіть вихідні дані: Білок: 1,8–2,2 г/кг для зниження, 1,4–1,8 для утримання, 1,8–2,4 для набору; жир 0,8–1,2 г/кг. Використано середини; вуглеводи — залишок калорій за 4/9/4 ккал/г.
2. Уточніть параметри: Білок: 1,8–2,2 г/кг для зниження, 1,4–1,8 для утримання, 1,8–2,4 для набору; жир 0,8–1,2 г/кг. Використано середини; вуглеводи — залишок калорій за 4/9/4 ккал/г.
3. Прочитайте результат: Це авторський розподіл, не дослівні норми ISSN і не фізіологічний мінімум жиру. Якщо білок і жир перевищують калорійність, повний результат не показують. AMDR жиру 20–35% для дорослих — окремий орієнтир, не персональне призначення.

### Методика і формула

Білок: 1,8–2,2 г/кг для зниження, 1,4–1,8 для утримання, 1,8–2,4 для набору; жир 0,8–1,2 г/кг. Використано середини; вуглеводи — залишок калорій за 4/9/4 ккал/г.

Білок(г) = вага × коефіцієнт мети; Жир(г) = вага × 0,8…1,2; Вуглеводи(г) = (калорійність − білок × 4 − жир × 9) / 4

### Обмеження

Це авторський розподіл, не дослівні норми ISSN і не фізіологічний мінімум жиру. Якщо білок і жир перевищують калорійність, повний результат не показують. AMDR жиру 20–35% для дорослих — окремий орієнтир, не персональне призначення.

### Джерела

- [Jäger R et al. International Society of Sports Nutrition Position Stand: protein and exercise. J Int Soc Sports Nutr, 2017](https://pubmed.ncbi.nlm.nih.gov/28642676/)
- [Institute of Medicine. Dietary Reference Intakes for Energy, Carbohydrate, Fiber, Fat, Fatty Acids, Cholesterol, Protein, and Amino Acids, 2005 (AMDR)](https://nap.nationalacademies.org/catalog/10490)

## Як вбудувати цей калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="macros" locale="uk" theme="auto" />;
}
```

### JavaScript-завантажувач

```html
<div data-nutrifit-widget="macros" data-locale="uk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Звичайний iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/macros?lang=uk&theme=auto"
  title="Авторський планувальник БЖВ" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
