# Калькулятор состава тела

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/body-composition.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/body-composition.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/body-composition.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/body-composition.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/body-composition.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/body-composition.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`body-composition` · [NutriFit](https://nutrifit.health/ru/calculators/body-composition)

Оценивает долю жира по обхватам тела, считает жировую и безжировую массу тела и индекс массы тела.

### Порядок использования

1. Возьмите сантиметровую ленту: Используйте гибкую измерительную ленту без натяжения. Проводите замеры утром натощак.
2. Сделайте замеры обхватов: Мужчинам нужны шея и талия. Женщинам — шея, талия и бедра. Лента должна прилегать плотно, но не сдавливать кожу.
3. Узнайте состав своего тела: Калькулятор вычислит процент жира, абсолютную жировую массу и сухую (мышечную) массу без жира.

### Методика и формула

Доля жира оценивается по методу U.S. Navy (Hodgdon и Beckett, 1984): в расчёт входят рост и обхваты шеи, талии, а у женщин ещё и бёдер. Метод выбран потому, что не требует оборудования, а его ошибка сопоставима с бытовыми биоимпедансными весами. Дополнительно считается ИМТ по классификации ВОЗ — он ничего не говорит о составе тела, но нужен для сопоставления с популяционными нормами.

Мужчины: %жира = 495 / (1,0324 − 0,19077 × log₁₀(талия − шея) + 0,15456 × log₁₀(рост)) − 450; Женщины: %жира = 495 / (1,29579 − 0,35004 × log₁₀(талия + бёдра − шея) + 0,221 × log₁₀(рост)) − 450; ИМТ = вес / рост²

### Ограничения

Ошибка метода — около ±3–4% по сравнению с DXA, и он тем менее точен, чем нетипичнее телосложение. Замеры делайте утром натощак, лентой без натяжения, в одних и тех же точках: разница в 1 см по талии меняет результат ощутимо. ИМТ не различает мышцы и жир и не применяется к спортсменам, беременным и детям.

### Источники

- [Hodgdon J.A., Beckett M.B. Prediction of percent body fat for U.S. Navy men and women from body circumferences and height. Naval Health Research Center, 1984](https://apps.dtic.mil/sti/citations/ADA143890)
- [WHO. Obesity: preventing and managing the global epidemic. WHO Technical Report Series 894, 2000](https://www.who.int/publications/i/item/WHO_TRS_894)

## Как встроить этот калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="body-composition" locale="ru" theme="auto" />;
}
```

### JavaScript-загрузчик

```html
<div data-nutrifit-widget="body-composition" data-locale="ru" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Обычный iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/body-composition?lang=ru&theme=auto"
  title="Калькулятор состава тела" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
