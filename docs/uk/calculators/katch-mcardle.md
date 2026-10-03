# Оцінки обміну за безжировою масою

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/katch-mcardle.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/katch-mcardle.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/katch-mcardle.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/katch-mcardle.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/katch-mcardle.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/katch-mcardle.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`katch-mcardle` · [NutriFit](https://nutrifit.health/uk/calculators/katch-mcardle)

Безжирова маса = маса × (1 − жир / 100). Katch–McArdle: 370 + 21,6 × безжирова маса; Cunningham: 500 + 22 × безжирова маса. Добову оцінку Katch множать на обраний коефіцієнт активності.

### Порядок використання

1. Введіть вихідні дані: Безжирова маса = маса × (1 − жир / 100). Katch–McArdle: 370 + 21,6 × безжирова маса; Cunningham: 500 + 22 × безжирова маса. Добову оцінку Katch множать на обраний коефіцієнт активності.
2. Уточніть параметри: LBM = Вага × (1 − % Жиру / 100); BMR (Katch) = 370 + 21,6 × LBM(кг); TDEE = BMR × Коефіцієнт активності; BMR (Cunningham) = 500 + 22 × LBM(кг).
3. Прочитайте результат: Це оцінки, не вимірювання калориметрією. Похибка жиру й приблизного коефіцієнта активності впливає на результат. Різниця формул не доводить, яка точніша для вас.

### Методика і формула

Безжирова маса = маса × (1 − жир / 100). Katch–McArdle: 370 + 21,6 × безжирова маса; Cunningham: 500 + 22 × безжирова маса. Добову оцінку Katch множать на обраний коефіцієнт активності.

LBM = Вага × (1 − % Жиру / 100); BMR (Katch) = 370 + 21,6 × LBM(кг); TDEE = BMR × Коефіцієнт активності; BMR (Cunningham) = 500 + 22 × LBM(кг).

### Обмеження

Це оцінки, не вимірювання калориметрією. Похибка жиру й приблизного коефіцієнта активності впливає на результат. Різниця формул не доводить, яка точніша для вас.

### Джерела

- [McArdle W.D., Katch F.I., Katch V.L. Exercise Physiology: Nutrition, Energy, and Human Performance. 8th ed. Wolters Kluwer](https://medicine.lww.com/Book/isbn/9781451191554)
- [Cunningham JJ. et al. Body composition as a determinant of energy expenditure: a synthetic review and a proposed general prediction equation. Am J Clin Nutr, 1991](https://pubmed.ncbi.nlm.nih.gov/1957828/)
- [Mifflin MD et al. A new predictive equation for resting energy expenditure in healthy individuals. Am J Clin Nutr, 1990](https://pubmed.ncbi.nlm.nih.gov/2305711/)

## Як вбудувати цей калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="katch-mcardle" locale="uk" theme="auto" />;
}
```

### JavaScript-завантажувач

```html
<div data-nutrifit-widget="katch-mcardle" data-locale="uk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Звичайний iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/katch-mcardle?lang=uk&theme=auto"
  title="Оцінки обміну за безжировою масою" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
