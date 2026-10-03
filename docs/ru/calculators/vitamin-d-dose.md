# Витамин D: оценка модели van Groningen

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/vitamin-d-dose.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/vitamin-d-dose.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/vitamin-d-dose.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/vitamin-d-dose.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/vitamin-d-dose.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/vitamin-d-dose.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`vitamin-d-dose` · [NutriFit](https://nutrifit.health/ru/calculators/vitamin-d-dose)

25(OH)D в двух единицах и исследовательская оценка по массе тела. Автоматическая схема лечения не назначается.

### Порядок использования

1. Введите исходные данные: Модель van Groningen (2010) связывает суммарное количество холекальциферола с массой и исходным 25(OH)D. Здесь применяются исследовательская цель 75 нмоль/л, исходный уровень ниже 50 нмоль/л и масса 35–125 кг. Нижняя граница массы ограничивает интерфейс взрослым контекстом; возраст и клинические исключения оценивает врач. Модель не назначает схему, поддерживающую дозу или срок контроля. Endocrine Society 2024 не устанавливает универсальную цель 25(OH)D для профилактики заболеваний у здоровых людей.
2. Уточните параметры: Суммарная модельная оценка (МЕ) = 40 × (75 − 25(OH)D, нмоль/л) × масса (кг). 1 нг/мл = 2,496 нмоль/л.
3. Прочитайте результат: Только исследовательский расчёт для обсуждения со специалистом, не индивидуальное назначение. Не применять самостоятельно при беременности, у детей, при нарушениях кальциевого обмена, болезнях почек, мальабсорбции или гранулематозных заболеваниях. Модель не учитывает препараты и добавки; суммарное число нельзя принимать как разовую дозу.

### Методика и формула

Модель van Groningen (2010) связывает суммарное количество холекальциферола с массой и исходным 25(OH)D. Здесь применяются исследовательская цель 75 нмоль/л, исходный уровень ниже 50 нмоль/л и масса 35–125 кг. Нижняя граница массы ограничивает интерфейс взрослым контекстом; возраст и клинические исключения оценивает врач. Модель не назначает схему, поддерживающую дозу или срок контроля. Endocrine Society 2024 не устанавливает универсальную цель 25(OH)D для профилактики заболеваний у здоровых людей.

Суммарная модельная оценка (МЕ) = 40 × (75 − 25(OH)D, нмоль/л) × масса (кг). 1 нг/мл = 2,496 нмоль/л.

### Ограничения

Только исследовательский расчёт для обсуждения со специалистом, не индивидуальное назначение. Не применять самостоятельно при беременности, у детей, при нарушениях кальциевого обмена, болезнях почек, мальабсорбции или гранулематозных заболеваниях. Модель не учитывает препараты и добавки; суммарное число нельзя принимать как разовую дозу.

### Источники

- [van Groningen L et al. Cholecalciferol loading dose guideline for vitamin D-deficient adults. Eur J Endocrinol, 2010](https://pubmed.ncbi.nlm.nih.gov/20139241/)
- [Endocrine Society. Vitamin D for the Prevention of Disease: Clinical Practice Guideline, 2024](https://www.endocrine.org/clinical-practice-guidelines/vitamin-d-for-prevention-of-disease)

## Как встроить этот калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="vitamin-d-dose" locale="ru" theme="auto" />;
}
```

### JavaScript-загрузчик

```html
<div data-nutrifit-widget="vitamin-d-dose" data-locale="ru" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Обычный iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/vitamin-d-dose?lang=ru&theme=auto"
  title="Витамин D: оценка модели van Groningen" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
