# Калькулятор FFMI (індекс безжирової маси тіла)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/ffmi.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/ffmi.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/ffmi.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/ffmi.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/ffmi.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/ffmi.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`ffmi` · [NutriFit](https://nutrifit.health/uk/calculators/ffmi)

Визначає кількість сухої м'язової маси відносно зросту, відокремлюючи справжню м'язову гіпертрофію від накопичення жиру.

### Порядок використання

1. Виміряйте зріст і вагу: Зважтеся вранці натщесерце після туалету, виміряйте точний зріст без взуття.
2. Оцініть відсоток жиру: Використовуйте каліпер за 3–7 складками, професійний біоімпеданс або сканування DEXA.
3. Інтерпретуйте нормалізований індекс: Нормалізований показник усуває похибку зросту у високих (>180 см) або невисоких (<170 см) людей для коректного порівняння зі шкалою.

### Методика та формула

Звичайний ІМТ не відрізняє жир від м'язів. Індекс безжирової маси (FFMI) враховує тільки сухі тканини та вводить нормалізацію за зростом (Kouri et al., 1995) для точного порівняння людей різного зросту.

Суха маса (LBM) = Вага × (1 − % Жиру / 100); Базовий FFMI = LBM / Зріст(м)²; Нормалізований FFMI = Базовий FFMI + 6,1 × (1,80 − Зріст(м)).

### Обмеження

Точність розрахунку безпосередньо залежить від методу визначення жиру. Каліперометрія, DEXA або гідростатичне зважування дають найкращу точність.

### Джерела

- [Kouri E.M. et al. Fat-free mass index in users and nonusers of anabolic-androgenic steroids. Clin J Sport Med, 1995;5(4):223–228](https://pubmed.ncbi.nlm.nih.gov/7496846/)
- [Trexler E.T. et al. Physiological changes after a female bodybuilding contest preparation. J Int Soc Sports Nutr, 2017;14:34](https://pubmed.ncbi.nlm.nih.gov/28878643/)

## Як вбудувати цей калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="ffmi" locale="uk" theme="auto" />;
}
```

### JavaScript-завантажувач

```html
<div data-nutrifit-widget="ffmi" data-locale="uk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Звичайний iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/ffmi?lang=uk&theme=auto"
  title="Калькулятор FFMI (індекс безжирової маси тіла)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
