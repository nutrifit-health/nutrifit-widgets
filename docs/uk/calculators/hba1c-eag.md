# Перерахунок HbA1c та середньої глюкози

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/hba1c-eag.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/hba1c-eag.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/hba1c-eag.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/hba1c-eag.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/hba1c-eag.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/hba1c-eag.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`hba1c-eag` · [NutriFit](https://nutrifit.health/uk/calculators/hba1c-eag)

Оцінка середньої глюкози приблизно за 2–3 місяці з лабораторного HbA1c або зворотна приблизна оцінка.

### Порядок використання

1. Введіть вихідні дані: Використовуйте фактичні значення й відповідні одиниці.
2. Уточніть параметри: Змініть початкові припущення відповідно до вашої ситуації.
3. Прочитайте результат: Враховуйте обмеження моделі та не сприймайте розрахунок як вимірювання.

### Методика і формула

Залежність ADAG — оцінка за популяційними даними, а не точна відповідність для кожної людини. Перерахунок NGSP/IFCC використовує офіційне рівняння.

eAG (mg/dL) = 28.7 × HbA1c (%) − 46.7; eAG (mmol/L) = eAG (mg/dL) / 18.016; IFCC (mmol/mol) = (NGSP (%) − 2.152) / 0.09148; NGSP (%) = 0.09148 × IFCC + 2.152.

### Обмеження

Зворотний розрахунок із середньої глюкози не замінює аналіз HbA1c і не визначає діагноз. Анемія, зміни тривалості життя еритроцитів, гемоглобінопатії та вагітність можуть впливати на відповідність. Діагностичні висновки потребують лікаря та зазвичай повторного підтвердження.

### Джерела

- [Nathan DM et al. Translating the A1C assay into estimated average glucose values. Diabetes Care, 2008](https://pubmed.ncbi.nlm.nih.gov/18540046/)
- [American Diabetes Association Professional Practice Committee. et al. 2. Diagnosis and Classification of Diabetes: Standards of Care in Diabetes-2024. Diabetes Care, 2024](https://pubmed.ncbi.nlm.nih.gov/38078589/)
- [NGSP. IFCC Standardization of HbA1c: master equation NGSP ↔ IFCC](https://ngsp.org/ifcc.asp)

## Як вбудувати цей калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="hba1c-eag" locale="uk" theme="auto" />;
}
```

### JavaScript-завантажувач

```html
<div data-nutrifit-widget="hba1c-eag" data-locale="uk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Звичайний iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/hba1c-eag?lang=uk&theme=auto"
  title="Перерахунок HbA1c та середньої глюкози" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
