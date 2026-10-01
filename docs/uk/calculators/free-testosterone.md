# Калькулятор вільного тестостерону (Вермюлен)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/free-testosterone.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/free-testosterone.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/free-testosterone.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/free-testosterone.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/free-testosterone.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/free-testosterone.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`free-testosterone` · [NutriFit](https://nutrifit.health/uk/calculators/free-testosterone)

Вільна та біодоступна фракції тестостерону за моделлю зв'язування Vermeulen 1999. Результат вимагає референсів методу та клінічного контексту.

### Порядок використання

1. Здайте загальний тестостерон та ГЗСГ вранці: Тестостерон максимальний між 7 та 10 годинами ранку та знижується до вечора на 20–30 %. Здавайте натще, поза гострою хворобою, бажано методом РХ-МС/МС.
2. Додайте альбумін: Використовуйте виміряний альбумін у г/л. Значення 43 г/л у формі — приклад; підстановка замість аналізу додає невизначеність.
3. Зверніть увагу на вільну фракцію, якщо ГЗСГ нестандартний: При зміні ГЗСГ загальний тестостерон та вільна фракція можуть різнитися за інтерпретацією. Розглядайте їх разом із симптомами та повторними вимірюваннями.

### Методика та формула

У крові лише 1–3 % тестостерону є вільним, близько 40–50 % міцно зв'язано з ГЗСГ (SHBG), а решта — слабко з альбуміном. Модель Vermeulen 1999 розраховує вільну та біодоступну (вільний + зв'язаний з альбуміном) фракції на основі констант дисоціації.

N = Kалб × [Альбумін] + 1;  a = N × Kгзсг;  b = N + Kгзсг × ([ГЗСГ] − [T])
Вільний T = (−b + √(b² + 4·a·[T])) / (2·a)
Біодоступний T = Вільний T × N
Kгзсг = 1×10⁹ л/моль; Kалб = 3,6×10⁴ л/моль; концентрації в моль/л; альбумін г/л / 69 000
Перерахунок: T нг/дл × 0,0347 = нмоль/л; вільний T нмоль/л × 288,4 = пг/мл

### Обмеження

Розрахунок валідний при вимірюванні загального тестостерону точним методом (РХ-МС/МС або калібрований імуноаналіз) вранці між 7 і 11 годинами натще. При аномальному альбуміні результат зміщується. Референси вільного тестостерону залежать від методу та віку; порогові значення нижче стосуються чоловіків. Діагноз гіпогонадизму вимагає наявності симптомів та очного огляду.

### Джерела

- [Vermeulen A., Verdonck L., Kaufman J.M. A critical evaluation of simple methods for the estimation of free testosterone in serum. J Clin Endocrinol Metab, 1999;84(10):3666–3672](https://pubmed.ncbi.nlm.nih.gov/10523012/)
- [Bhasin S. et al. Testosterone therapy in men with hypogonadism: an Endocrine Society clinical practice guideline. J Clin Endocrinol Metab, 2018;103(5):1715–1744](https://pubmed.ncbi.nlm.nih.gov/29562364/)
- [Salonia A. et al. European Association of Urology guidelines on sexual and reproductive health — 2021 update: male sexual dysfunction. Eur Urol, 2021;80(3):333–357](https://pubmed.ncbi.nlm.nih.gov/34183196/)

## Як вбудувати цей калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="free-testosterone" locale="uk" theme="auto" />;
}
```

### JavaScript-завантажувач

```html
<div data-nutrifit-widget="free-testosterone" data-locale="uk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Звичайний iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/free-testosterone?lang=uk&theme=auto"
  title="Калькулятор вільного тестостерону (Вермюлен)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
