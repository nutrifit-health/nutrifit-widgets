# Опросник здоровья пациента PHQ-9 (Депрессия)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/phq-9.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/phq-9.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/phq-9.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/phq-9.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/phq-9.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/phq-9.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`phq-9` · [NutriFit](https://nutrifit.health/ru/calculators/phq-9)

Международный золотой стандарт первичного скрининга депрессии (Patient Health Questionnaire-9), рекомендованный ВОЗ.

### Порядок использования

1. Вспомните последние 2 недели: Оценивайте свое самочувствие на протяжении последних 14 дней, а не только сегодня.
2. Ответьте на все 9 вопросов: Выберите частоту проявления каждого признака от «совсем нет» до «почти каждый день».
3. Ознакомьтесь с клинической интерпретацией: Узнайте категорию выраженности симптомов и рекомендации специалистов.

### Методика и формула

9 вопросов, оценивающих частоту депрессивных симптомов за последние 2 недели по шкале от 0 (совсем нет) до 3 (почти каждый день). Сумма баллов от 0 до 27.

Балл PHQ-9 = Сумма баллов всех 9 вопросов. 0–4: минимальная; 5–9: легкая; 10–14: умеренная; 15–19: умеренно-тяжелая; 20–27: тяжелая депрессия.

### Ограничения

Скрининг не заменяет консультацию врача-психиатра или психотерапевта. При наличии мыслей о причинении себе вреда немедленно обратитесь в службу кризисной помощи.

### Источники

- [Kroenke K. et al. The PHQ-9: validity of a brief depression severity measure. J Gen Intern Med, 2001;16(9):606–613](https://pubmed.ncbi.nlm.nih.gov/11556941/)
- [Spitzer R.L. et al. Validation and utility of a self-report version of PRIME-MD: the PHQ primary care study. JAMA, 1999;282(18):1737–1744](https://pubmed.ncbi.nlm.nih.gov/10568646/)

## Как встроить этот калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="phq-9" locale="ru" theme="auto" />;
}
```

### JavaScript-загрузчик

```html
<div data-nutrifit-widget="phq-9" data-locale="ru" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Обычный iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/phq-9?lang=ru&theme=auto"
  title="Опросник здоровья пациента PHQ-9 (Депрессия)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
