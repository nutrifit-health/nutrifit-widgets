# Оценки обмена по безжировой массе

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/katch-mcardle.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/katch-mcardle.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/katch-mcardle.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/katch-mcardle.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/katch-mcardle.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/katch-mcardle.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`katch-mcardle` · [NutriFit](https://nutrifit.health/ru/calculators/katch-mcardle)

Безжировая масса = масса × (1 − жир / 100). Katch–McArdle: 370 + 21,6 × безжировая масса; Cunningham: 500 + 22 × безжировая масса. Суточная оценка Katch умножается на выбранный коэффициент активности.

### Порядок использования

1. Введите исходные данные: Безжировая масса = масса × (1 − жир / 100). Katch–McArdle: 370 + 21,6 × безжировая масса; Cunningham: 500 + 22 × безжировая масса. Суточная оценка Katch умножается на выбранный коэффициент активности.
2. Уточните параметры: LBM = Вес × (1 − % Жира / 100); BMR (Katch-McArdle) = 370 + 21,6 × LBM; BMR (Cunningham) = 500 + 22 × LBM; TDEE = BMR × Коэффициент активности (1,2 – 1,9).
3. Прочитайте результат: Это оценки энергозатрат, не измерение калориметрией. Ошибка процента жира и приближённого коэффициента активности влияет на результат. Разница формул не доказывает, какая из них точнее для вас.

### Методика и формула

Безжировая масса = масса × (1 − жир / 100). Katch–McArdle: 370 + 21,6 × безжировая масса; Cunningham: 500 + 22 × безжировая масса. Суточная оценка Katch умножается на выбранный коэффициент активности.

LBM = Вес × (1 − % Жира / 100); BMR (Katch-McArdle) = 370 + 21,6 × LBM; BMR (Cunningham) = 500 + 22 × LBM; TDEE = BMR × Коэффициент активности (1,2 – 1,9).

### Ограничения

Это оценки энергозатрат, не измерение калориметрией. Ошибка процента жира и приближённого коэффициента активности влияет на результат. Разница формул не доказывает, какая из них точнее для вас.

### Источники

- [McArdle W.D., Katch F.I., Katch V.L. Exercise Physiology: Nutrition, Energy, and Human Performance. 8th ed. Wolters Kluwer](https://medicine.lww.com/Book/isbn/9781451191554)
- [Cunningham JJ. et al. Body composition as a determinant of energy expenditure: a synthetic review and a proposed general prediction equation. Am J Clin Nutr, 1991](https://pubmed.ncbi.nlm.nih.gov/1957828/)
- [Mifflin MD et al. A new predictive equation for resting energy expenditure in healthy individuals. Am J Clin Nutr, 1990](https://pubmed.ncbi.nlm.nih.gov/2305711/)

## Как встроить этот калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="katch-mcardle" locale="ru" theme="auto" />;
}
```

### JavaScript-загрузчик

```html
<div data-nutrifit-widget="katch-mcardle" data-locale="ru" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Обычный iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/katch-mcardle?lang=ru&theme=auto"
  title="Оценки обмена по безжировой массе" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
