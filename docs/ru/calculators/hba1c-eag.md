# Пересчёт HbA1c и средней глюкозы

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/hba1c-eag.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/hba1c-eag.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/hba1c-eag.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/hba1c-eag.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/hba1c-eag.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/hba1c-eag.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`hba1c-eag` · [NutriFit](https://nutrifit.health/ru/calculators/hba1c-eag)

Оценка средней глюкозы примерно за 2–3 месяца из лабораторного HbA1c или обратная приблизительная оценка.

### Порядок использования

1. Введите исходные данные: Используйте фактические значения и подходящие единицы.
2. Уточните параметры: Измените исходные предположения с учётом вашей ситуации.
3. Прочитайте результат: Учитывайте ограничения модели и не воспринимайте расчёт как измерение.

### Методика и формула

Зависимость ADAG — оценка по популяционным данным, а не точное соответствие у каждого человека. Пересчёт NGSP/IFCC использует официальное уравнение.

eAG (mg/dL) = 28.7 × HbA1c (%) − 46.7; eAG (mmol/L) = eAG (mg/dL) / 18.016; IFCC (mmol/mol) = (NGSP (%) − 2.152) / 0.09148; NGSP (%) = 0.09148 × IFCC + 2.152.

### Ограничения

Обратный расчёт из средней глюкозы не заменяет анализ HbA1c и не определяет диагноз. Анемия, изменения срока жизни эритроцитов, гемоглобинопатии и беременность могут влиять на соответствие. Диагностические выводы требуют врача и обычно повторного подтверждения.

### Источники

- [Nathan DM et al. Translating the A1C assay into estimated average glucose values. Diabetes Care, 2008](https://pubmed.ncbi.nlm.nih.gov/18540046/)
- [American Diabetes Association Professional Practice Committee. et al. 2. Diagnosis and Classification of Diabetes: Standards of Care in Diabetes-2024. Diabetes Care, 2024](https://pubmed.ncbi.nlm.nih.gov/38078589/)
- [NGSP. IFCC Standardization of HbA1c: master equation NGSP ↔ IFCC](https://ngsp.org/ifcc.asp)

## Как встроить этот калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="hba1c-eag" locale="ru" theme="auto" />;
}
```

### JavaScript-загрузчик

```html
<div data-nutrifit-widget="hba1c-eag" data-locale="ru" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Обычный iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/hba1c-eag?lang=ru&theme=auto"
  title="Пересчёт HbA1c и средней глюкозы" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
