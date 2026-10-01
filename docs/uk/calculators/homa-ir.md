# Калькулятор HOMA-IR: індекс інсулінорезистентності

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/homa-ir.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/homa-ir.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/homa-ir.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/homa-ir.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/homa-ir.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/homa-ir.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`homa-ir` · [NutriFit](https://nutrifit.health/uk/calculators/homa-ir)

Індекси HOMA-IR, HOMA-β і QUICKI за глюкозою та інсуліном натще: оцінка інсулінорезистентності та функції β-клітин із нормами та інтерпретацією.

### Порядок використання

1. Здайте глюкозу та інсулін з однієї проби: Обидва показники мають бути виміряні натще з одного забору крові — вранці після 8–12 годин без їжі, кави та тренувань. Інсулін «з іншого дня» робить індекс безглуздим.
2. Введіть значення в одиницях бланка: Лабораторії видають глюкозу в ммоль/л або мг/дл, інсулін — у мкОд/мл (µIU/mL) або пмоль/л. Перемкніть одиниці під бланк — калькулятор перерахує сам.
3. Порівняйте всі три індекси: Розглядайте індекси разом з оригінальними аналізами, умовами забору та референсами лабораторії. HOMA-β не дозволяє зробити висновок про виснаження підшлункової залози.

### Методика та формула

HOMA1 (Matthews, 1985) і QUICKI (Katz, 2000) — моделі за глюкозою та інсуліном натще. Вони описують різні аспекти одного набору даних і застосовуються переважно в дослідженнях. HOMA-IR оцінює інсулінорезистентність, HOMA-β — секрецію в межах моделі, QUICKI — чутливість до інсуліну. Індекси не замінюють клінічних критеріїв діагностики діабету.

HOMA-IR = Глюкоза (ммоль/л) × Інсулін (мкОд/мл) / 22,5
HOMA-β (%) = 20 × Інсулін (мкОд/мл) / (Глюкоза (ммоль/л) − 3,5)
QUICKI = 1 / [log10(Інсулін, мкОд/мл) + log10(Глюкоза, мг/дл)]

### Обмеження

Індекси валідні лише для зразків натще (8–12 год) і не застосовуються під час інсулінотерапії, приймання секретагогів, декомпенсованого діабету 1 типу та за низької глюкози (HOMA-β не визначений при глюкозі ≤ 3,5 ммоль/л). Референсні значення інсуліну залежать від методу лабораторії, а пороги HOMA-IR — від популяції (2,0–3,8 у різних дослідженнях). Результат — не діагноз, а привід обговорити вуглеводний обмін із лікарем.

### Джерела

- [Matthews D.R. et al. Homeostasis model assessment: insulin resistance and β-cell function from fasting plasma glucose and insulin concentrations in man. Diabetologia, 1985;28(7):412–419](https://pubmed.ncbi.nlm.nih.gov/3899825/)
- [Katz A. et al. Quantitative insulin sensitivity check index (QUICKI): a simple, accurate method for assessing insulin sensitivity in humans. J Clin Endocrinol Metab, 2000;85(7):2402–2410](https://pubmed.ncbi.nlm.nih.gov/10902785/)
- [Gayoso-Diz P. et al. Insulin resistance (HOMA-IR) cut-off values and the metabolic syndrome in a general adult population. BMC Endocr Disord, 2013;13:47](https://pubmed.ncbi.nlm.nih.gov/24131857/)

## Як вбудувати цей калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="homa-ir" locale="uk" theme="auto" />;
}
```

### JavaScript-завантажувач

```html
<div data-nutrifit-widget="homa-ir" data-locale="uk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Звичайний iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/homa-ir?lang=uk&theme=auto"
  title="Калькулятор HOMA-IR: індекс інсулінорезистентності" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
