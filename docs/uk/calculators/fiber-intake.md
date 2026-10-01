# Калькулятор норми клітковини (харчових волокон)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/fiber-intake.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/fiber-intake.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/fiber-intake.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/fiber-intake.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/fiber-intake.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/fiber-intake.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`fiber-intake` · [NutriFit](https://nutrifit.health/uk/calculators/fiber-intake)

Визначає добову потребу в розчинних та нерозчинних харчових волокнах для мікробіоти кишечника, нормалізації холестерину та моторики ШКТ.

### Порядок використання

1. Додавайте овочі до кожного прийому їжі: З'їдайте не менше 400–500 г некрохмалистих овочів та зелені на день (правило тарілки Гарварда).
2. Замініть очищені крупи на цільнозернові: Обирайте гречку, кіноа, вівсяні пластівці довгого варіння, перловку та цільнозерновий хліб замість білого рису і борошна вищого ґатунку.
3. Підключіть насіння та бобові: 1 столова ложка насіння чіа або льону, а також порція сочевиці дають одразу 8–12 г якісної клітковини.

### Методика та формула

Базується на стандартах ВООЗ та Європейського агентства з безпеки харчових продуктів (EFSA: 14 г клітковини на 1000 ккал раціону, мінімум 25 г для жінок і 38 г для чоловіків). Розраховує водний баланс (+40 мл води на грам волокон) та фільтрує рекомендації при СПК.

Цільова клітковина = max(25/38 г, Калорії × 0,014); Розчинна фракція ~30–35%; Нерозчинна ~65–70%; Додаткова вода = Клітковина (г) × 40 мл.

### Обмеження

При синдромі надлишкового бактеріального росту (СНБР) та загостренні коліту надлишок ферментованих волокон може посилювати метеоризм. Дозу клітковини підвищують поступово.

### Джерела

- [EFSA Panel on Dietetic Products, Nutrition, and Allergies. Scientific Opinion on Dietary Reference Values for carbohydrates and dietary fibre. EFSA Journal, 2010;8(3):1462](https://doi.org/10.2903/j.efsa.2010.1462)
- [Reynolds A. et al. Carbohydrate quality and human health: a series of systematic reviews and meta-analyses. Lancet, 2019;393(10170):434–445](https://pubmed.ncbi.nlm.nih.gov/30638909/)
- [Stephen A.M. et al. Dietary fibre in Europe: current state of knowledge on definitions, sources, recommendations, intakes and relationships to health. Nutr Res Rev, 2017;30(2):149–190](https://pubmed.ncbi.nlm.nih.gov/28676135/)

## Як вбудувати цей калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="fiber-intake" locale="uk" theme="auto" />;
}
```

### JavaScript-завантажувач

```html
<div data-nutrifit-widget="fiber-intake" data-locale="uk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Звичайний iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/fiber-intake?lang=uk&theme=auto"
  title="Калькулятор норми клітковини (харчових волокон)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
