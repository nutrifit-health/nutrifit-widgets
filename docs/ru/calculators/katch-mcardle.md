# Калькулятор BMR и TDEE Кэтча — МакАрдла

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/katch-mcardle.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/katch-mcardle.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/katch-mcardle.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/katch-mcardle.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/katch-mcardle.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/katch-mcardle.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`katch-mcardle` · [NutriFit](https://nutrifit.health/ru/calculators/katch-mcardle)

Определяет базовый метаболизм (BMR) и суточный расход энергии (TDEE) на основе безжировой массы тела (LBM), что критически важно для мускулистых людей и при ожирении.

### Порядок использования

1. Определите сухую массу: Введите актуальный вес и процент жира. Калькулятор мгновенно вычислит вес чистых метаболически активных тканей.
2. Выберите реальный уровень активности: Будьте честны: если тренируетесь 3 раза в неделю по часу, а остальное время сидите за компьютером, выбирайте «Лёгкую» или «Умеренную» активность.
3. Сравните с формулой Миффлина: Посмотрите разницу: если у вас низкий процент жира и много мышц, Кэтч покажет более высокий метаболизм, защищая вас от чрезмерного дефицита.

### Методика и формула

В отличие от формул Миффлина — Сан Жеора или Харриса — Бенедикта, уравнение Кэтча — МакАрдла рассчитывает скорость метаболизма исключительно по сухой массе тела (LBM), так как именно мышечная ткань потребляет до 80% метаболической энергии органов и скелета.

LBM = Вес × (1 − % Жира / 100); BMR (Katch-McArdle) = 370 + 21,6 × LBM; BMR (Cunningham) = 500 + 22 × LBM; TDEE = BMR × Коэффициент активности (1,2 – 1,9).

### Ограничения

Требует предварительного знания процента жира в организме. При низкой мышечной массе и пожилом возрасте формула Каннингема может несколько завышать базовый расход.

### Источники

- [McArdle W.D., Katch F.I., Katch V.L. Exercise Physiology: Nutrition, Energy, and Human Performance. 8th ed. Wolters Kluwer, 2014](https://pubmed.ncbi.nlm.nih.gov/15570161/)
- [Cunningham J.J. A reanalysis of balanced nutrition and the relationship to body composition and resting metabolic rate. Am J Clin Nutr, 1991;54(6):963–969](https://pubmed.ncbi.nlm.nih.gov/1957828/)
- [Mifflin M.D. et al. A new predictive equation for resting energy expenditure in healthy individuals. Am J Clin Nutr, 1990;51(2):241–247](https://pubmed.ncbi.nlm.nih.gov/2305711/)

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
  title="Калькулятор BMR и TDEE Кэтча — МакАрдла" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
