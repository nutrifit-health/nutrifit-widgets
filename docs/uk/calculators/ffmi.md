# Індекс безжирової маси FFMI

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/ffmi.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/ffmi.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/ffmi.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/ffmi.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/ffmi.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/ffmi.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`ffmi` · [NutriFit](https://nutrifit.health/uk/calculators/ffmi)

Безжирова маса = маса × (1 − відсоток жиру / 100); FFMI = безжирова маса / зріст², зріст у метрах. Для чоловіків: нормалізований FFMI = FFMI + 6,3 × (1,8 − зріст), за анотацією Kouri (1995).

### Порядок використання

1. Введіть вихідні дані: Безжирова маса = маса × (1 − відсоток жиру / 100); FFMI = безжирова маса / зріст², зріст у метрах. Для чоловіків: нормалізований FFMI = FFMI + 6,3 × (1,8 − зріст), за анотацією Kouri (1995).
2. Уточніть параметри: Безжирова маса = маса × (1 − відсоток жиру / 100); FFMI = безжирова маса / зріст², зріст у метрах. Для чоловіків: нормалізований FFMI = FFMI + 6,3 × (1,8 − зріст), за анотацією Kouri (1995).
3. Прочитайте результат: Початкове дослідження включало чоловіків. Нормалізацію для жінок не розраховують. Значення залежить від точності оцінки жиру; це не діагноз застосування стероїдів, не доказ генетичної межі й не універсальна категорія здоров’я.

### Методика і формула

Безжирова маса = маса × (1 − відсоток жиру / 100); FFMI = безжирова маса / зріст², зріст у метрах. Для чоловіків: нормалізований FFMI = FFMI + 6,3 × (1,8 − зріст), за анотацією Kouri (1995).

Безжирова маса = маса × (1 − відсоток жиру / 100); FFMI = безжирова маса / зріст², зріст у метрах. Для чоловіків: нормалізований FFMI = FFMI + 6,3 × (1,8 − зріст), за анотацією Kouri (1995).

### Обмеження

Початкове дослідження включало чоловіків. Нормалізацію для жінок не розраховують. Значення залежить від точності оцінки жиру; це не діагноз застосування стероїдів, не доказ генетичної межі й не універсальна категорія здоров’я.

### Джерела

- [Kouri EM et al. Fat-free mass index in users and nonusers of anabolic-androgenic steroids. Clin J Sport Med, 1995](https://pubmed.ncbi.nlm.nih.gov/7496846/)

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
  title="Індекс безжирової маси FFMI" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
