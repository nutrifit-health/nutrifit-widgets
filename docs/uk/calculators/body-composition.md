# Калькулятор складу тіла

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/body-composition.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/body-composition.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/body-composition.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/body-composition.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/body-composition.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/body-composition.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`body-composition` · [NutriFit](https://nutrifit.health/uk/calculators/body-composition)

Оцінює частку жиру за обхватами тіла, рахує жирову й суху масу та індекс маси тіла.

### Порядок використання

1. Візьміть сантиметрову стрічку: Використовуйте гнучку стрічку без натягу. Робіть заміри вранці натщесерце.
2. Зробіть заміри обхватів: Чоловікам потрібні шия і талія. Жінкам — шия, талія і стегна. Тримайте стрічку паралельно підлозі.
3. Отримайте склад свого тіла: Калькулятор розрахує відсоток жиру, абсолютну жирову масу та суху (м’язову) масу без жиру.

### Методика та формула

Частка жиру оцінюється за методом U.S. Navy (Hodgdon і Beckett, 1984): у розрахунок входять зріст та обхвати шиї, талії, а в жінок ще й стегон. Метод обрано тому, що він не потребує обладнання, а його похибка зіставна з побутовими біоімпедансними вагами. Додатково рахується ІМТ за класифікацією ВООЗ — він нічого не каже про склад тіла, але потрібен для зіставлення з популяційними нормами.

Чоловіки: %жиру = 495 / (1,0324 − 0,19077 × log₁₀(талія − шия) + 0,15456 × log₁₀(зріст)) − 450; Жінки: %жиру = 495 / (1,29579 − 0,35004 × log₁₀(талія + стегна − шия) + 0,221 × log₁₀(зріст)) − 450; ІМТ = вага / зріст²

### Обмеження

Похибка методу — близько ±3–4% порівняно з DXA, і вона зростає для нетипової будови тіла. Заміри робіть уранці натщесерце, стрічкою без натягу, в тих самих точках: різниця в 1 см по талії відчутно змінює результат. ІМТ не розрізняє м’язи та жир і не застосовується до спортсменів, вагітних і дітей.

### Джерела

- [Hodgdon J.A., Beckett M.B. Prediction of percent body fat for U.S. Navy men and women from body circumferences and height. Naval Health Research Center, 1984](https://apps.dtic.mil/sti/citations/ADA143890)
- [WHO. Obesity: preventing and managing the global epidemic. WHO Technical Report Series 894, 2000](https://www.who.int/publications/i/item/WHO_TRS_894)

## Як вбудувати цей калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="body-composition" locale="uk" theme="auto" />;
}
```

### JavaScript-завантажувач

```html
<div data-nutrifit-widget="body-composition" data-locale="uk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Звичайний iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/body-composition?lang=uk&theme=auto"
  title="Калькулятор складу тіла" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
