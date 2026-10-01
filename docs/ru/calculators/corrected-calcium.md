# Калькулятор скорректированного кальция по альбумину

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/corrected-calcium.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/corrected-calcium.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/corrected-calcium.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/corrected-calcium.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/corrected-calcium.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/corrected-calcium.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`corrected-calcium` · [NutriFit](https://nutrifit.health/ru/calculators/corrected-calcium)

Учебный расчёт общего кальция с поправкой на альбумин по упрощённой формуле Пейна. Не измеряет ионизированный кальций и не определяет лечение.

### Порядок использования

1. Возьмите общий кальций и альбумин из одной пробы: Оба показателя есть в стандартной биохимии. Единицы: кальций в ммоль/л или мг/дл, альбумин в г/л или г/дл — выберите как в бланке.
2. Сравните измеренный и скорректированный: Изменение категории отражает только математическую поправку. Оно не доказывает, что исходный анализ был ложным или что лечение не нужно.
3. При сомнениях — ионизированный кальций: При низком альбумине, ХБП, критических состояниях и нарушениях pH поправка особенно ненадёжна. Врач выбирает, какие измерения нужны для уточнения.

### Методика и формула

Упрощённая формула Пейна прибавляет 0,02 ммоль/л на каждый 1 г/л снижения альбумина относительно 40 г/л. Это историческая оценка общего кальция при условном уровне альбумина, а не расчёт ионизированной фракции. Исследование 2025 года выявило риск ошибочной классификации, особенно при низком альбумине; нескорректированный общий кальций в нём лучше согласовывался с ионизированным.

Скорректированный Ca (ммоль/л) = Общий Ca + 0,02 × (40 − Альбумин, г/л)
Ввод Ca в мг/дл сначала переводится в ммоль/л множителем 0,2495; результат обратно делится на 0,2495.
Альбумин г/дл × 10 = г/л. Приближённая привычная запись: Ca (мг/дл) + 0,8 × (4 − альбумин, г/дл).
Принятый для сравнения диапазон общего кальция: 2,15–2,55 ммоль/л.

### Ограничения

Поправка может ухудшать оценку кальциевого статуса, особенно при альбумине ниже 30 г/л. Она ненадёжна при ХБП, критических состояниях и нарушениях pH. При клинических сомнениях врач решает вопрос об измерении ионизированного кальция; его результат зависит и от правильного забора и хранения пробы. Диагноз и назначение добавок по этой формуле не устанавливают.

### Источники

- [Payne R.B., Little A.J., Williams R.B., Milner J.R. Interpretation of serum calcium in patients with abnormal serum proteins. BMJ, 1973;4(5893):643–646](https://pubmed.ncbi.nlm.nih.gov/4758544/)
- [Ladenson J.H., Lewis J.W., Boyd J.C. Failure of total calcium corrected for protein, albumin, and pH to correctly assess free calcium status. J Clin Endocrinol Metab, 1978;46(6):986–993](https://pubmed.ncbi.nlm.nih.gov/45478/)
- [Desgagnés N. et al. Use of Albumin-Adjusted Calcium Measurements in Clinical Practice. JAMA Netw Open, 2025;8(1):e2455251](https://pubmed.ncbi.nlm.nih.gov/39836424/)

## Как встроить этот калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="corrected-calcium" locale="ru" theme="auto" />;
}
```

### JavaScript-загрузчик

```html
<div data-nutrifit-widget="corrected-calcium" data-locale="ru" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Обычный iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/corrected-calcium?lang=ru&theme=auto"
  title="Калькулятор скорректированного кальция по альбумину" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
