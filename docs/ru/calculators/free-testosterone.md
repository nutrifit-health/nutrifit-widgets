# Свободный тестостерон по Вермюлену

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/free-testosterone.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/free-testosterone.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/free-testosterone.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/free-testosterone.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/free-testosterone.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/free-testosterone.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`free-testosterone` · [NutriFit](https://nutrifit.health/ru/calculators/free-testosterone)

Расчёт свободной и не связанной с SHBG фракций из общего тестостерона, SHBG и альбумина.

### Порядок использования

1. Введите исходные данные: Используйте фактические значения и подходящие единицы.
2. Уточните параметры: Измените исходные предположения с учётом вашей ситуации.
3. Прочитайте результат: Учитывайте ограничения модели и не воспринимайте расчёт как измерение.

### Методика и формула

Равновесная модель связывания Vermeulen (1999): K_SHBG=10⁹ л/моль, K_Alb=3,6×10⁴ л/моль, молярная масса альбумина 69 000 г/моль. Биодоступная фракция в модели — свободная плюс связанная с альбумином.

Равновесная модель связывания Vermeulen (1999): K_SHBG=10⁹ л/моль, K_Alb=3,6×10⁴ л/моль, молярная масса альбумина 69 000 г/моль. Биодоступная фракция в модели — свободная плюс связанная с альбумином.

### Ограничения

Это расчёт, а не прямое измерение. Универсальная норма не задаётся: интерпретация зависит от симптомов, возраста, пола, лабораторного метода и повторных измерений.

### Источники

- [Vermeulen A et al. A critical evaluation of simple methods for the estimation of free testosterone in serum. J Clin Endocrinol Metab, 1999](https://pubmed.ncbi.nlm.nih.gov/10523012/)
- [Bhasin S et al. Testosterone Therapy in Men With Hypogonadism: An Endocrine Society Clinical Practice Guideline. J Clin Endocrinol Metab, 2018](https://pubmed.ncbi.nlm.nih.gov/29562364/)
- [Salonia A et al. European Association of Urology Guidelines on Sexual and Reproductive Health-2021 Update: Male Sexual Dysfunction. Eur Urol, 2021](https://pubmed.ncbi.nlm.nih.gov/34183196/)

## Как встроить этот калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="free-testosterone" locale="ru" theme="auto" />;
}
```

### JavaScript-загрузчик

```html
<div data-nutrifit-widget="free-testosterone" data-locale="ru" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Обычный iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/free-testosterone?lang=ru&theme=auto"
  title="Свободный тестостерон по Вермюлену" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
