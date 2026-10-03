# Пульсові зони за резервом ЧСС

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/heart-rate-zones.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/heart-rate-zones.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/heart-rate-zones.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/heart-rate-zones.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/heart-rate-zones.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/heart-rate-zones.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`heart-rate-zones` · [NutriFit](https://nutrifit.health/uk/calculators/heart-rate-zones)

Цільова ЧСС = ЧССпокою + частка × (ЧССмакс − ЧССпокою). Обрано п’ять смуг: 50–60, 60–70, 70–80, 80–90 і 90–100% резерву.

### Порядок використання

1. Введіть вихідні дані: Цільова ЧСС = ЧССпокою + частка × (ЧССмакс − ЧССпокою). Обрано п’ять смуг: 50–60, 60–70, 70–80, 80–90 і 90–100% резерву.
2. Уточніть параметри: ЧСС max (Tanaka) = 208 − 0,7 × Вік; HRR = ЧСС max − ЧСС спокою; Цільовий пульс = ЧСС спокою + (% інтенсивності × HRR). Формула Хаскелла: ЧСС max = 220 − Вік.
3. Прочитайте результат: Це обрана схема, а не індивідуально виміряні аеробний і анаеробний пороги. Максимальна ЧСС за віком — прогноз, не фізіологічна межа; резерв має бути додатним.

### Методика і формула

Цільова ЧСС = ЧССпокою + частка × (ЧССмакс − ЧССпокою). Обрано п’ять смуг: 50–60, 60–70, 70–80, 80–90 і 90–100% резерву.

ЧСС max (Tanaka) = 208 − 0,7 × Вік; HRR = ЧСС max − ЧСС спокою; Цільовий пульс = ЧСС спокою + (% інтенсивності × HRR). Формула Хаскелла: ЧСС max = 220 − Вік.

### Обмеження

Це обрана схема, а не індивідуально виміряні аеробний і анаеробний пороги. Максимальна ЧСС за віком — прогноз, не фізіологічна межа; резерв має бути додатним.

### Джерела

- [Tanaka H et al. Age-predicted maximal heart rate revisited. J Am Coll Cardiol, 2001](https://pubmed.ncbi.nlm.nih.gov/11153730/)
- [KARVONEN MJ et al. The effects of training on heart rate; a longitudinal study. Ann Med Exp Biol Fenn, 1957](https://pubmed.ncbi.nlm.nih.gov/13470504/)
- [American College of Sports Medicine. ACSM’s Guidelines for Exercise Testing and Prescription. 11th ed. Wolters Kluwer, 2021](https://www.acsm.org/education-resources/books/guidelines-exercise-testing-prescription)

## Як вбудувати цей калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="heart-rate-zones" locale="uk" theme="auto" />;
}
```

### JavaScript-завантажувач

```html
<div data-nutrifit-widget="heart-rate-zones" data-locale="uk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Звичайний iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/heart-rate-zones?lang=uk&theme=auto"
  title="Пульсові зони за резервом ЧСС" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
