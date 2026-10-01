# Калькулятор свободного тестостерона (Вермюлен)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/free-testosterone.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/free-testosterone.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/free-testosterone.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/free-testosterone.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/free-testosterone.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/free-testosterone.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`free-testosterone` · [NutriFit](https://nutrifit.health/ru/calculators/free-testosterone)

Свободная и биодоступная фракции тестостерона по модели связывания Vermeulen 1999. Результат требует референсов метода и клинического контекста.

### Порядок использования

1. Сдайте общий тестостерон и ГСПГ утром: Тестостерон максимален между 7 и 10 часами утра и снижается к вечеру на 20–30 %. Сдавайте натощак, вне острой болезни, желательно ЖХ-МС/МС.
2. Добавьте альбумин: Используйте измеренный альбумин в г/л. Значение 43 г/л в форме — пример; подстановка вместо анализа добавляет неопределённость.
3. Смотрите на свободную фракцию, если ГСПГ нестандартный: При изменении ГСПГ общий тестостерон и свободная фракция могут различаться по интерпретации. Рассматривайте их вместе с симптомами, методом анализа и повторными измерениями.

### Методика и формула

В крови лишь 1–3 % тестостерона свободно, около 40–50 % прочно связано с глобулином, связывающим половые гормоны (ГСПГ), и остальное — слабо с альбумином. Биологически активны свободная и альбумин-связанная фракции («биодоступный тестостерон»). Прямое измерение свободного тестостерона (равновесный диализ) дорого и малодоступно, а иммуноанализы неточны, поэтому ISSAM, Endocrine Society и EAU рекомендуют расчёт по Вермюлену (1999): он решает уравнение равновесия связывания с константами ассоциации 1×10⁹ л/моль для ГСПГ и 3,6×10⁴ л/моль для альбумина. Метод особенно важен при повышенном ГСПГ (возраст, гипертиреоз, болезни печени, эстрогены) и сниженном (ожирение, инсулинорезистентность, гипотиреоз), когда общий тестостерон вводит в заблуждение.

N = Kалб × [Альбумин] + 1;  a = N × Kгспг;  b = N + Kгспг × ([ГСПГ] − [T])
Свободный T = (−b + √(b² + 4·a·[T])) / (2·a)
Биодоступный T = Свободный T × N
Kгспг = 1×10⁹ л/моль; Kалб = 3,6×10⁴ л/моль; концентрации в моль/л; альбумин г/л / 69 000
Пересчёт: T нг/дл × 0,0347 = нмоль/л; свободный T нмоль/л × 288,4 = пг/мл

### Ограничения

Расчёт валиден при измерении общего тестостерона точным методом (ЖХ-МС/МС или калиброванный иммуноанализ) утром между 7 и 11 часами натощак, дважды с интервалом в несколько недель. При аномальном альбумине результат смещается; в беременности и при приёме КОК ГСПГ резко меняется. Референсы свободного тестостерона зависят от метода и возраста; пороги ниже относятся к мужчинам — для женщин калькулятор показывает значения без категории. Диагноз гипогонадизма требует симптомов и очного обследования.

### Источники

- [Vermeulen A., Verdonck L., Kaufman J.M. A critical evaluation of simple methods for the estimation of free testosterone in serum. J Clin Endocrinol Metab, 1999;84(10):3666–3672](https://pubmed.ncbi.nlm.nih.gov/10523012/)
- [Bhasin S. et al. Testosterone therapy in men with hypogonadism: an Endocrine Society clinical practice guideline. J Clin Endocrinol Metab, 2018;103(5):1715–1744](https://pubmed.ncbi.nlm.nih.gov/29562364/)
- [Salonia A. et al. European Association of Urology guidelines on sexual and reproductive health — 2021 update: male sexual dysfunction. Eur Urol, 2021;80(3):333–357](https://pubmed.ncbi.nlm.nih.gov/34183196/)

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
  title="Калькулятор свободного тестостерона (Вермюлен)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
