# Конвертер HbA1c ↔ средняя глюкоза (eAG)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/hba1c-eag.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/hba1c-eag.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/hba1c-eag.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/hba1c-eag.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/hba1c-eag.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/hba1c-eag.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`hba1c-eag` · [NutriFit](https://nutrifit.health/ru/calculators/hba1c-eag)

Пересчёт HbA1c в среднюю гликемию за 3 месяца по формуле ADAG, обратный расчёт и конвертация % ↔ ммоль/моль с категориями ADA.

### Порядок использования

1. Выберите, что у вас есть: Если на руках анализ HbA1c — введите его. Если вы ведёте глюкометр или CGM и знаете среднюю глюкозу за 2–3 месяца — переключитесь на обратный расчёт.
2. Укажите единицы бланка: HbA1c выдают в процентах (NGSP, США и СНГ) или в ммоль/моль (IFCC, Европа). 6,5 % соответствует 48 ммоль/моль — калькулятор пересчитает автоматически.
3. Сопоставьте eAG с показаниями глюкометра: Если средняя по глюкометру заметно ниже eAG — вероятно, вы измеряете в основном натощак и упускаете постпрандиальные пики. Расхождение более 1,5 ммоль/л стоит обсудить с врачом.

### Методика и формула

Гликированный гемоглобин отражает среднюю концентрацию глюкозы за 8–12 недель — срок жизни эритроцита. Исследование A1c-Derived Average Glucose (ADAG, Nathan 2008) сопоставило HbA1c с непрерывным мониторингом глюкозы у 507 человек и вывело линейную зависимость: eAG (мг/дл) = 28,7 × HbA1c − 46,7. Калькулятор работает в обе стороны — из HbA1c в среднюю глюкозу и из известной средней гликемии (например, по глюкометру или CGM) в ожидаемый HbA1c — и переводит проценты NGSP в единицы IFCC (ммоль/моль), принятые в Европе и Австралии.

eAG (мг/дл) = 28,7 × HbA1c (%) − 46,7
eAG (ммоль/л) = 1,59 × HbA1c (%) − 2,59
HbA1c (ммоль/моль, IFCC) = (HbA1c (%, NGSP) − 2,15) × 10,929
Обратно: HbA1c (%) = (eAG, мг/дл + 46,7) / 28,7

### Ограничения

HbA1c неточен при состояниях, меняющих срок жизни эритроцитов или структуру гемоглобина: анемии, гемоглобинопатии, беременность, ХБП, недавняя кровопотеря или переливание, дефицит железа и B12. У 10–15 % людей индивидуальная связь между HbA1c и глюкозой заметно отличается от средней (феномен «гликационного разрыва»), поэтому eAG — популяционная оценка, а не измерение. Диагноз диабета требует подтверждения повторным тестом.

### Источники

- [Nathan D.M. et al. Translating the A1C assay into estimated average glucose values. Diabetes Care, 2008;31(8):1473–1478](https://pubmed.ncbi.nlm.nih.gov/18540046/)
- [American Diabetes Association. Diagnosis and Classification of Diabetes: Standards of Care in Diabetes — 2024. Diabetes Care, 2024;47(Suppl 1):S20–S42](https://pubmed.ncbi.nlm.nih.gov/38078589/)
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
  title="Конвертер HbA1c ↔ средняя глюкоза (eAG)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
