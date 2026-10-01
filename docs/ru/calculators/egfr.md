# Калькулятор СКФ (eGFR) по CKD-EPI 2021

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/egfr.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/egfr.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/egfr.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/egfr.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/egfr.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/egfr.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`egfr` · [NutriFit](https://nutrifit.health/ru/calculators/egfr)

Расчётная СКФ по CKD-EPI 2021 (креатинин, опционально цистатин C), клиренс креатинина по Кокрофту — Голту и стадия ХБП по KDIGO — с пересчётом мкмоль/л и мг/дл.

### Порядок использования

1. Найдите креатинин в бланке: Креатинин сыворотки входит в базовую биохимию. Лаборатории СНГ и Европы выдают мкмоль/л, США и Латинская Америка — мг/дл. Выберите нужную единицу.
2. Укажите пол и возраст: Мышечная масса, а значит и «нормальный» креатинин, различаются у мужчин и женщин и снижаются с возрастом — уравнение это учитывает. Расовая поправка в версии 2021 года исключена.
3. Добавьте цистатин C, если он есть: Цистатин C не зависит от мышечной массы и рациона. Комбинированное уравнение рекомендовано KDIGO 2024 для подтверждения ХБП при eGFRcr 45–59 без альбуминурии.

### Методика и формула

Скорость клубочковой фильтрации — главный показатель функции почек. Уравнение CKD-EPI 2021 (Inker et al., NEJM) выводит её из креатинина сыворотки, возраста и пола без расового коэффициента, который был исключён из практики. При наличии цистатина C используется комбинированное уравнение CKD-EPI 2021 cr-cys — оно точнее у людей с нестандартной мышечной массой (спортсмены, саркопения, ампутации, веганы). Дополнительно калькулятор показывает клиренс креатинина по Кокрофту — Голту, который до сих пор используется для дозирования лекарств, и стадию ХБП G1–G5 по KDIGO.

eGFRcr = 142 × min(Scr/κ, 1)^α × max(Scr/κ, 1)^−1,200 × 0,9938^Возраст × 1,012 [жен.]
κ = 0,7 (жен.) / 0,9 (муж.);  α = −0,241 (жен.) / −0,302 (муж.);  Scr — креатинин, мг/дл (= мкмоль/л / 88,4)
eGFRcr-cys = 135 × min(Scr/κ,1)^α × max(Scr/κ,1)^−0,544 × min(Scys/0,8,1)^−0,323 × max(Scys/0,8,1)^−0,778 × 0,9961^Возраст × 0,963 [жен.]
Кокрофт — Голт (мл/мин) = (140 − Возраст) × Масса (кг) × 0,85 [жен.] / (72 × Scr, мг/дл)

### Ограничения

Расчётная СКФ валидирована для взрослых от 18 лет в стабильном состоянии: при остром повреждении почек, беременности, крайних значениях массы тела и мышечной массы, ампутациях и приёме препаратов, влияющих на секрецию креатинина (триметоприм, циметидин), она неточна. Одно значение eGFR < 60 не означает ХБП — диагноз требует подтверждения через 3 месяца и оценки альбуминурии. Формула Кокрофта — Голта не нормирована на площадь тела и завышает клиренс при ожирении.

### Источники

- [Inker L.A. et al. New creatinine- and cystatin C-based equations to estimate GFR without race. N Engl J Med, 2021;385(19):1737–1749](https://pubmed.ncbi.nlm.nih.gov/34554658/)
- [KDIGO 2012 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease. Kidney Int Suppl, 2013;3(1):1–150](https://kdigo.org/guidelines/ckd-evaluation-and-management/)
- [Cockcroft D.W., Gault M.H. Prediction of creatinine clearance from serum creatinine. Nephron, 1976;16(1):31–41](https://pubmed.ncbi.nlm.nih.gov/1244564/)

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
