# Калькулятор ШКФ (eGFR) за CKD-EPI 2021

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/egfr.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/egfr.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/egfr.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/egfr.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/egfr.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/egfr.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`egfr` · [NutriFit](https://nutrifit.health/uk/calculators/egfr)

Розрахункова ШКФ за CKD-EPI 2021 (креатинін, опційно цистатин C), кліренс креатиніну за Кокрофтом — Голтом і стадія ХХН за KDIGO — з перерахунком мкмоль/л і мг/дл.

### Порядок використання

1. Введіть вихідні дані: Швидкість клубочкової фільтрації — головний показник функції нирок. Рівняння CKD-EPI 2021 (Inker et al., NEJM) виводить її з креатиніну сироватки, віку та статі без расового коефіцієнта, який було виключено з практики. За наявності цистатину C використовується комбіноване рівняння CKD-EPI 2021 cr-cys — воно точніше у людей з нестандартною м’язовою масою (спортсмени, саркопенія, ампутації, вегани). Додатково калькулятор показує кліренс креатиніну за Кокрофтом — Голтом, який досі використовують для дозування ліків, і стадію ХХН G1–G5 за KDIGO.
2. Уточніть параметри: eGFRcr = 142 × min(Scr/κ, 1)^α × max(Scr/κ, 1)^−1,200 × 0,9938^Вік × 1,012 [жін.]
κ = 0,7 (жін.) / 0,9 (чол.);  α = −0,241 (жін.) / −0,302 (чол.);  Scr — креатинін, мг/дл (= мкмоль/л / 88,4)
eGFRcr-cys = 135 × min(Scr/κ,1)^α × max(Scr/κ,1)^−0,544 × min(Scys/0,8,1)^−0,323 × max(Scys/0,8,1)^−0,778 × 0,9961^Вік × 0,963 [жін.]
Кокрофт — Голт (мл/хв) = (140 − Вік) × Маса (кг) × 0,85 [жін.] / (72 × Scr, мг/дл)
3. Прочитайте результат: CKD-EPI 2021 оцінює ШКФ; Cockcroft–Gault оцінює кліренс креатиніну в мл/хв без індексації до площі тіла. ХХН потребує ознак хронічного порушення щонайменше три місяці; окреме значення не визначає потреби в діалізі.

### Методика і формула

Швидкість клубочкової фільтрації — головний показник функції нирок. Рівняння CKD-EPI 2021 (Inker et al., NEJM) виводить її з креатиніну сироватки, віку та статі без расового коефіцієнта, який було виключено з практики. За наявності цистатину C використовується комбіноване рівняння CKD-EPI 2021 cr-cys — воно точніше у людей з нестандартною м’язовою масою (спортсмени, саркопенія, ампутації, вегани). Додатково калькулятор показує кліренс креатиніну за Кокрофтом — Голтом, який досі використовують для дозування ліків, і стадію ХХН G1–G5 за KDIGO.

eGFRcr = 142 × min(Scr/κ, 1)^α × max(Scr/κ, 1)^−1,200 × 0,9938^Вік × 1,012 [жін.]
κ = 0,7 (жін.) / 0,9 (чол.);  α = −0,241 (жін.) / −0,302 (чол.);  Scr — креатинін, мг/дл (= мкмоль/л / 88,4)
eGFRcr-cys = 135 × min(Scr/κ,1)^α × max(Scr/κ,1)^−0,544 × min(Scys/0,8,1)^−0,323 × max(Scys/0,8,1)^−0,778 × 0,9961^Вік × 0,963 [жін.]
Кокрофт — Голт (мл/хв) = (140 − Вік) × Маса (кг) × 0,85 [жін.] / (72 × Scr, мг/дл)

### Обмеження

CKD-EPI 2021 оцінює ШКФ; Cockcroft–Gault оцінює кліренс креатиніну в мл/хв без індексації до площі тіла. ХХН потребує ознак хронічного порушення щонайменше три місяці; окреме значення не визначає потреби в діалізі.

### Джерела

- [Inker LA et al. New Creatinine- and Cystatin C-Based Equations to Estimate GFR without Race. N Engl J Med, 2021](https://pubmed.ncbi.nlm.nih.gov/34554658/)
- [KDIGO 2012 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease. Kidney Int Suppl, 2013;3(1):1–150](https://kdigo.org/guidelines/ckd-evaluation-and-management/)
- [Cockcroft DW et al. Prediction of creatinine clearance from serum creatinine. Nephron, 1976](https://pubmed.ncbi.nlm.nih.gov/1244564/)

## Як вбудувати цей калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="egfr" locale="uk" theme="auto" />;
}
```

### JavaScript-завантажувач

```html
<div data-nutrifit-widget="egfr" data-locale="uk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Звичайний iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/egfr?lang=uk&theme=auto"
  title="Калькулятор ШКФ (eGFR) за CKD-EPI 2021" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
