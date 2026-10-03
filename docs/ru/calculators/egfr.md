# Калькулятор СКФ (eGFR) по CKD-EPI 2021

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/egfr.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/egfr.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/egfr.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/egfr.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/egfr.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/egfr.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`egfr` · [NutriFit](https://nutrifit.health/ru/calculators/egfr)

Расчётная СКФ по CKD-EPI 2021 (креатинин, опционально цистатин C), клиренс креатинина по Кокрофту — Голту и стадия ХБП по KDIGO — с пересчётом мкмоль/л и мг/дл.

### Порядок использования

1. Введите исходные данные: Скорость клубочковой фильтрации — главный показатель функции почек. Уравнение CKD-EPI 2021 (Inker et al., NEJM) выводит её из креатинина сыворотки, возраста и пола без расового коэффициента, который был исключён из практики. При наличии цистатина C используется комбинированное уравнение CKD-EPI 2021 cr-cys — оно точнее у людей с нестандартной мышечной массой (спортсмены, саркопения, ампутации, веганы). Дополнительно калькулятор показывает клиренс креатинина по Кокрофту — Голту, который до сих пор используется для дозирования лекарств, и стадию ХБП G1–G5 по KDIGO.
2. Уточните параметры: eGFRcr = 142 × min(Scr/κ, 1)^α × max(Scr/κ, 1)^−1,200 × 0,9938^Возраст × 1,012 [жен.]
κ = 0,7 (жен.) / 0,9 (муж.);  α = −0,241 (жен.) / −0,302 (муж.);  Scr — креатинин, мг/дл (= мкмоль/л / 88,4)
eGFRcr-cys = 135 × min(Scr/κ,1)^α × max(Scr/κ,1)^−0,544 × min(Scys/0,8,1)^−0,323 × max(Scys/0,8,1)^−0,778 × 0,9961^Возраст × 0,963 [жен.]
Кокрофт — Голт (мл/мин) = (140 − Возраст) × Масса (кг) × 0,85 [жен.] / (72 × Scr, мг/дл)
3. Прочитайте результат: CKD-EPI 2021 оценивает СКФ; Cockcroft–Gault оценивает клиренс креатинина в мл/мин и не индексируется к площади тела. ХБП требует признаков хронического нарушения не менее трёх месяцев; отдельное значение не определяет необходимость диализа.

### Методика и формула

Скорость клубочковой фильтрации — главный показатель функции почек. Уравнение CKD-EPI 2021 (Inker et al., NEJM) выводит её из креатинина сыворотки, возраста и пола без расового коэффициента, который был исключён из практики. При наличии цистатина C используется комбинированное уравнение CKD-EPI 2021 cr-cys — оно точнее у людей с нестандартной мышечной массой (спортсмены, саркопения, ампутации, веганы). Дополнительно калькулятор показывает клиренс креатинина по Кокрофту — Голту, который до сих пор используется для дозирования лекарств, и стадию ХБП G1–G5 по KDIGO.

eGFRcr = 142 × min(Scr/κ, 1)^α × max(Scr/κ, 1)^−1,200 × 0,9938^Возраст × 1,012 [жен.]
κ = 0,7 (жен.) / 0,9 (муж.);  α = −0,241 (жен.) / −0,302 (муж.);  Scr — креатинин, мг/дл (= мкмоль/л / 88,4)
eGFRcr-cys = 135 × min(Scr/κ,1)^α × max(Scr/κ,1)^−0,544 × min(Scys/0,8,1)^−0,323 × max(Scys/0,8,1)^−0,778 × 0,9961^Возраст × 0,963 [жен.]
Кокрофт — Голт (мл/мин) = (140 − Возраст) × Масса (кг) × 0,85 [жен.] / (72 × Scr, мг/дл)

### Ограничения

CKD-EPI 2021 оценивает СКФ; Cockcroft–Gault оценивает клиренс креатинина в мл/мин и не индексируется к площади тела. ХБП требует признаков хронического нарушения не менее трёх месяцев; отдельное значение не определяет необходимость диализа.

### Источники

- [Inker LA et al. New Creatinine- and Cystatin C-Based Equations to Estimate GFR without Race. N Engl J Med, 2021](https://pubmed.ncbi.nlm.nih.gov/34554658/)
- [KDIGO 2012 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease. Kidney Int Suppl, 2013;3(1):1–150](https://kdigo.org/guidelines/ckd-evaluation-and-management/)
- [Cockcroft DW et al. Prediction of creatinine clearance from serum creatinine. Nephron, 1976](https://pubmed.ncbi.nlm.nih.gov/1244564/)

## Как встроить этот калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="egfr" locale="ru" theme="auto" />;
}
```

### JavaScript-загрузчик

```html
<div data-nutrifit-widget="egfr" data-locale="ru" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Обычный iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/egfr?lang=ru&theme=auto"
  title="Калькулятор СКФ (eGFR) по CKD-EPI 2021" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
