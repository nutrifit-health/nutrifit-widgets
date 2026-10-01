# Калькулятор виведення кофеїну та часу до сну

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/caffeine.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/caffeine.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/caffeine.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/caffeine.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/caffeine.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/caffeine.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`caffeine` · [NutriFit](https://nutrifit.health/uk/calculators/caffeine)

Розраховує динаміку розпаду кофеїну в крові, період напіввиведення (з урахуванням куріння, КОК та вагітності) та залишковий рівень до часу відходу до сну.

### Порядок використання

1. Відкладіть першу чашку на 60–90 хвилин після пробудження: Дайте ранковому піку кортизолу природним шляхом очистити залишки нічного аденозину, щоб уникнути післяобіднього спаду бадьорості.
2. Дотримуйтесь часу відсікання кофеїну: При періоді напіввиведення 5 годин чверть випитого кофеїну залишається в мозку через 10–12 годин. Не пийте каву пізніше 14:00 при відході до сну о 23:00.
3. Враховуйте приховані джерела: Темний шоколад, кола, зелений чай та безрецептурні знеболювальні також містять значущі дози кофеїну.

### Методика та формула

Базується на фармакокінетиці метаболізму кофеїну цитохромом печінки CYP1A2 за даними EFSA (2015) та Американської академії медицини сну (AASM). Середній період напіввиведення становить 5 годин. При рівні кофеїну до сну понад 35–40 мг блокуються рецептори аденозину A1 та A2A, порушуючи глибокий повільнохвильовий сон (N3).

C(t) = C0 × e^(−k × t), де k = ln(2) / t_half; Стандартний t_half = 5,0 год; Куріння = 3,0 год; КОК = 9,0 год; Вагітність = 12,0 год; Стеля EFSA = 400 мг/добу (для вагітних 200 мг).

### Обмеження

Швидкість кліренсу варіює у «швидких» та «повільних» метаболізаторів залежно від генотипу CYP1A2 (*1F проти *1A). Люди з високою чутливістю відчувають тривожність навіть при низьких дозах.

### Джерела

- [EFSA Panel on Dietetic Products, Nutrition and Allergies. Scientific Opinion on the safety of caffeine. EFSA Journal, 2015;13(5):4102](https://doi.org/10.2903/j.efsa.2015.4102)
- [Guest N.S. et al. International society of sports nutrition position stand: caffeine and exercise performance. J Int Soc Sports Nutr, 2021;18(1):1](https://pubmed.ncbi.nlm.nih.gov/33388079/)
- [Drake C. et al. Caffeine effects on sleep taken 0, 3, or 6 hours before going to bed. J Clin Sleep Med, 2013;9(11):1195–1200](https://pubmed.ncbi.nlm.nih.gov/24235826/)

## Як вбудувати цей калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="caffeine" locale="uk" theme="auto" />;
}
```

### JavaScript-завантажувач

```html
<div data-nutrifit-widget="caffeine" data-locale="uk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Звичайний iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/caffeine?lang=uk&theme=auto"
  title="Калькулятор виведення кофеїну та часу до сну" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
