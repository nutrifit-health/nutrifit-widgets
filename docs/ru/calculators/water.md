# Калькулятор нормы воды

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/water.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/water.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/water.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/water.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/water.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/water.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`water` · [NutriFit](https://nutrifit.health/ru/calculators/water)

Считает суточную потребность в жидкости от массы тела с поправками на физическую нагрузку и жаркий климат.

### Порядок использования

1. Укажите массу тела: Базовая физиологическая потребность в воде прямо пропорциональна весу тела (в среднем 30–35 мл на 1 кг массы).
2. Добавьте физическую активность: Каждые 30 минут тренировки требуют дополнительно 350–500 мл жидкости для компенсации потерь с потом.
3. Учтите климат и температуру: Жаркая погода (>25°C) или низкая влажность воздуха увеличивают суточную потребность еще на 500 мл.

### Методика и формула

Базовая потребность — 30 мл на кг массы тела для взрослых и 25 мл/кг после 60 лет, когда концентрационная способность почек снижается. За каждый час интенсивной нагрузки добавляется 500 мл на компенсацию потерь с потом, за жаркий климат или сухое отапливаемое помещение — ещё 500 мл. Итог — полная потребность в воде; 20–30% её человек получает с пищей, поэтому отдельно показана норма именно напитков (EFSA, 2010).

Всего(мл) = вес × 30 (или × 25 после 60 лет) + 500 × часы нагрузки + 500 при жаре; Напитки(мл) = всего × 0,75

### Ограничения

Ориентир для здоровых взрослых. При сердечной и почечной недостаточности, приёме диуретиков, лихорадке и в жарком производстве норма определяется врачом. Жажда и цвет мочи остаются более надёжными ориентирами, чем любой расчёт.

### Источники

- [EFSA Panel on Dietetic Products. Scientific Opinion on Dietary Reference Values for water, 2010](https://www.efsa.europa.eu/en/efsajournal/pub/1459)
- [Sawka M.N. et al. American College of Sports Medicine Position Stand: Exercise and Fluid Replacement, 2007](https://pubmed.ncbi.nlm.nih.gov/17277604/)

## Как встроить этот калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="water" locale="ru" theme="auto" />;
}
```

### JavaScript-загрузчик

```html
<div data-nutrifit-widget="water" data-locale="ru" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Обычный iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/water?lang=ru&theme=auto"
  title="Калькулятор нормы воды" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
