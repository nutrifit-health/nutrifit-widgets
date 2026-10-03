# Пульсовые зоны по резерву ЧСС

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/heart-rate-zones.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/heart-rate-zones.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/heart-rate-zones.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/heart-rate-zones.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/heart-rate-zones.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/heart-rate-zones.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`heart-rate-zones` · [NutriFit](https://nutrifit.health/ru/calculators/heart-rate-zones)

Целевая ЧСС = ЧССпокоя + доля × (ЧССмакс − ЧССпокоя). Здесь выбраны пять полос 50–60, 60–70, 70–80, 80–90 и 90–100% резерва.

### Порядок использования

1. Введите исходные данные: Целевая ЧСС = ЧССпокоя + доля × (ЧССмакс − ЧССпокоя). Здесь выбраны пять полос 50–60, 60–70, 70–80, 80–90 и 90–100% резерва.
2. Уточните параметры: ЧСС max (Tanaka) = 208 − 0,7 × Возраст; Резерв ЧСС (HRR) = ЧСС max − ЧСС покоя; Целевой пульс = ЧСС покоя + (HRR × % Интенсивности). Зоны: 1 (50–60%), 2 (60–70%), 3 (70–80%), 4 (80–90%), 5 (90–100%).
3. Прочитайте результат: Это выбранная схема интенсивности, а не индивидуально измеренные аэробный и анаэробный пороги. Максимальная ЧСС по возрасту — прогноз, не физиологический предел; резерв должен быть положительным.

### Методика и формула

Целевая ЧСС = ЧССпокоя + доля × (ЧССмакс − ЧССпокоя). Здесь выбраны пять полос 50–60, 60–70, 70–80, 80–90 и 90–100% резерва.

ЧСС max (Tanaka) = 208 − 0,7 × Возраст; Резерв ЧСС (HRR) = ЧСС max − ЧСС покоя; Целевой пульс = ЧСС покоя + (HRR × % Интенсивности). Зоны: 1 (50–60%), 2 (60–70%), 3 (70–80%), 4 (80–90%), 5 (90–100%).

### Ограничения

Это выбранная схема интенсивности, а не индивидуально измеренные аэробный и анаэробный пороги. Максимальная ЧСС по возрасту — прогноз, не физиологический предел; резерв должен быть положительным.

### Источники

- [Tanaka H et al. Age-predicted maximal heart rate revisited. J Am Coll Cardiol, 2001](https://pubmed.ncbi.nlm.nih.gov/11153730/)
- [KARVONEN MJ et al. The effects of training on heart rate; a longitudinal study. Ann Med Exp Biol Fenn, 1957](https://pubmed.ncbi.nlm.nih.gov/13470504/)
- [American College of Sports Medicine. ACSM’s Guidelines for Exercise Testing and Prescription. 11th ed. Wolters Kluwer, 2021](https://www.acsm.org/education-resources/books/guidelines-exercise-testing-prescription)

## Как встроить этот калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="heart-rate-zones" locale="ru" theme="auto" />;
}
```

### JavaScript-загрузчик

```html
<div data-nutrifit-widget="heart-rate-zones" data-locale="ru" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Обычный iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/heart-rate-zones?lang=ru&theme=auto"
  title="Пульсовые зоны по резерву ЧСС" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
