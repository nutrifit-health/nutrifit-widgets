# Калькулятор пульсовых зон

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/heart-rate-zones.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/heart-rate-zones.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/heart-rate-zones.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/heart-rate-zones.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/heart-rate-zones.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/heart-rate-zones.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`heart-rate-zones` · [NutriFit](https://nutrifit.health/ru/calculators/heart-rate-zones)

Рассчитывает индивидуальные границы 5 зон частоты сердечных сокращений для кардиотренировок, сжигания жира, развития ПАНО и МПК.

### Порядок использования

1. Измерьте утренний пульс покоя: Проснувшись утром, не вставая с постели, посчитайте пульс за 60 секунд или посмотрите средний ночной пульс на фитнес-браслете.
2. Рассчитайте зоны по формуле Карвонена: Калькулятор вычтет пульс покоя из максимального и определит ваш физиологический резерв.
3. Распределите объём по правилу 80/20: Проводите около 80% всех тренировок во 2-й пульсовой зоне и лишь 20% — в 4-й и 5-й зонах для защиты сердца от перегрузок.

### Методика и формула

Метод Карвонена учитывает резерв частоты сердечных сокращений (разницу между ЧСС max и ЧСС покоя), обеспечивая точное соответствие зон пульса относительному потреблению кислорода (% VO2R). ЧСС max оценивается по валидированной формуле Tanaka (208 − 0,7 × возраст) или вводится вручную.

ЧСС max (Tanaka) = 208 − 0,7 × Возраст; Резерв ЧСС (HRR) = ЧСС max − ЧСС покоя; Целевой пульс = ЧСС покоя + (HRR × % Интенсивности). Зоны: 1 (50–60%), 2 (60–70%), 3 (70–80%), 4 (80–90%), 5 (90–100%).

### Ограничения

Формулы максимального пульса имеют стандартное отклонение ±10–12 уд/мин. При приёме бета-блокаторов и кардиологических препаратов пульсовые зоны не применяются — интенсивность дозируют по шкале Борга (RPE).

### Источники

- [Tanaka H., Monahan K.D., Seals D.R. Age-predicted maximal heart rate revisited. J Am Coll Cardiol, 2001;37(1):153–156](https://pubmed.ncbi.nlm.nih.gov/11153730/)
- [Karvonen M.J., Kentala E., Mustala O. The effects of training on heart rate; a longitudinal study. Ann Med Exp Biol Fenn, 1957;35(3):307–315](https://pubmed.ncbi.nlm.nih.gov/13470504/)
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
  title="Калькулятор пульсовых зон" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
