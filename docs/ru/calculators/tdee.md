# Оценка суточного расхода энергии TDEE

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/tdee.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/tdee.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/tdee.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/tdee.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/tdee.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/tdee.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`tdee` · [NutriFit](https://nutrifit.health/ru/calculators/tdee)

Mifflin–St Jeor оценивает расход в покое. TDEE = эта оценка × выбранный коэффициент активности. −20% и +15% — авторские сценарии дефицита и профицита.

### Порядок использования

1. Введите исходные данные: Mifflin–St Jeor оценивает расход в покое. TDEE = эта оценка × выбранный коэффициент активности. −20% и +15% — авторские сценарии дефицита и профицита.
2. Уточните параметры: Mifflin–St Jeor оценивает расход в покое. TDEE = эта оценка × выбранный коэффициент активности. −20% и +15% — авторские сценарии дефицита и профицита.
3. Прочитайте результат: Для взрослых. Коэффициенты активности — приближения, а не измеренный PAL. Формула не определяет индивидуальную потребность или безопасный дефицит; ошибка оценки не доказывает нарушение обмена.

### Методика и формула

Mifflin–St Jeor оценивает расход в покое. TDEE = эта оценка × выбранный коэффициент активности. −20% и +15% — авторские сценарии дефицита и профицита.

BMR (муж) = 10 × вес(кг) + 6,25 × рост(см) − 5 × возраст + 5; BMR (жен) = 10 × вес(кг) + 6,25 × рост(см) − 5 × возраст − 161; TDEE = BMR × коэффициент активности

### Ограничения

Для взрослых. Коэффициенты активности — приближения, а не измеренный PAL. Формула не определяет индивидуальную потребность или безопасный дефицит; ошибка оценки не доказывает нарушение обмена.

### Источники

- [Mifflin MD et al. A new predictive equation for resting energy expenditure in healthy individuals. Am J Clin Nutr, 1990](https://pubmed.ncbi.nlm.nih.gov/2305711/)
- [FAO/WHO/UNU. Human Energy Requirements. Report of a Joint Expert Consultation, 2004](https://www.fao.org/4/y5686e/y5686e00.htm)

## Как встроить этот калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="tdee" locale="ru" theme="auto" />;
}
```

### JavaScript-загрузчик

```html
<div data-nutrifit-widget="tdee" data-locale="ru" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Обычный iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/tdee?lang=ru&theme=auto"
  title="Оценка суточного расхода энергии TDEE" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
