# Калькулятор FIB-4 та APRI: індекси фіброзу печінки

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/fib-4.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/fib-4.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/fib-4.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/fib-4.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/fib-4.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/fib-4.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`fib-4` · [NutriFit](https://nutrifit.health/uk/calculators/fib-4)

FIB-4 та APRI за віком, АСТ, АЛТ і тромбоцитами: розрахунок, пороги ризику та алгоритми наступних дій.

### Порядок використання

1. Введіть вік та результати аналізів: Знадобляться: АСТ та АЛТ із біохімії крові, тромбоцити із загального аналізу крові.
2. Вкажіть норму АСТ: Вкажіть верхню межу норми АСТ із бланка лабораторії (за замовчуванням 40 Од/л).
3. Ознайомтеся з категорією ризику: При низькому ризику достатньо контролю раз на 1–2 роки. При сірій зоні або високому ризику рекомендована фіброеластометрія.

### Методика та формула

FIB-4 (Sterling, 2006) об'єднує вік, АСТ, АЛТ і тромбоцити для виключення вираженого фіброзу (F3–F4). За настановами EASL 2021 поріг низького ризику для осіб < 65 років становить 1,30, для осіб ≥ 65 років — 2,00. APRI (Wai, 2003) розраховується за співвідношенням АСТ до верхньої межі норми та тромбоцитів.

FIB-4 = Вік (років) × АСТ (Од/л) / [ Тромбоцити (10⁹/л) × √(АЛТ, Од/л) ]
APRI = ( АСТ / ВМН_АСТ ) × 100 / Тромбоцити (10⁹/л)
ВМН_АСТ за замовчуванням 40 Од/л або значення вашої лабораторії.

### Обмеження

FIB-4 допомагає оцінити ймовірність просунутого фіброзу при неалкогольній жировій хворобі печінки (НАЖХП/MASLD) та хронічних вірусних гепатитах, але не замінює еластографію чи біопсію. У віці до 35 років або при гострому гепатиті інтерпретація ненадійна.

### Джерела

- [Sterling R.K. et al. Development of a simple noninvasive index to predict significant fibrosis in patients with HIV/HCV coinfection. Hepatology, 2006;43(6):1317–1325](https://pubmed.ncbi.nlm.nih.gov/16729309/)
- [Wai C.T. et al. A simple noninvasive index can predict both significant fibrosis and cirrhosis in patients with chronic hepatitis C. Hepatology, 2003;38(2):518–526](https://pubmed.ncbi.nlm.nih.gov/12883497/)
- [EASL Clinical Practice Guidelines on non-invasive tests for evaluation of liver disease severity and prognosis — 2021 update. J Hepatol, 2021;75(3):659–689](https://pubmed.ncbi.nlm.nih.gov/34166721/)

## Як вбудувати цей калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="fib-4" locale="uk" theme="auto" />;
}
```

### JavaScript-завантажувач

```html
<div data-nutrifit-widget="fib-4" data-locale="uk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Звичайний iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/fib-4?lang=uk&theme=auto"
  title="Калькулятор FIB-4 та APRI: індекси фіброзу печінки" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
