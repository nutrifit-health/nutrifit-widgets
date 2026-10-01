# Калькулятор мышечного потенциала (Кейси Батт и Мартин Беркхан)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/muscle-potential.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/muscle-potential.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/muscle-potential.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/muscle-potential.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/muscle-potential.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/muscle-potential.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`muscle-potential` · [NutriFit](https://nutrifit.health/ru/calculators/muscle-potential)

Определяет максимально достижимую сухую мышечную массу и предельные объёмы тела (грудь, бицепс, бедро) без использования анаболических стероидов.

### Порядок использования

1. Точно замерьте кости: Запястье измеряется между кистью и головкой локтевой кости. Лодыжка — в самом узком месте чуть выше выступающих косточек сустава.
2. Укажите желаемый процент жира: Для круглогодичной отличной формы ориентируйтесь на 10–12% жира; для соревновательного рельефа — 6–8%.
3. Сравните текущие замеры с максимумом: Калькулятор покажет предельные обхваты бицепса, груди и бёдер. Это реалистичные ориентиры вашего тела.

### Методика и формула

Исследования Кейси Батта (Casey Butt, Ph.D.) на протяжении 6 лет анализировали антропометрию сотен элитных чемпионов мира по бодибилдингу достероидной эры (1940–1950-е гг.). Модель доказала, что предельная масса мышц строго ограничена толщиной костного скелета — окружностями запястья и лодыжки.

Max LBM = Рост^1,5 × [sqrt(Запястье)/22,6670 + sqrt(Лодыжка)/17,0104] × [(% Жира/224) + 1]; Berkhan Contest Weight (~5% BF) = Рост (см) − 100.

### Ограничения

Модель разработана для мужчин. У женщин из-за гормонального фона предельная мышечная масса составляет примерно 65–70% от мужской формулы. Предполагает годы идеального тренинга и питания.

### Источники

- [Butt C. Your Maximum Muscular Potential (The Casey Butt Model). The WeighTrainer, 2009](https://www.weightrainer.net/potential.html)
- [Berkhan M. The Leangains Guide and Maximum Potential for Drug-Free Athletes, 2010](https://leangains.com/maximum-muscular-potential-of-drug-free-athletes-updated-version/)
- [Kouri E.M. et al. Fat-free mass index in users and nonusers of anabolic-androgenic steroids. Clin J Sport Med, 1995;5(4):223–228](https://pubmed.ncbi.nlm.nih.gov/7496846/)

## Как встроить этот калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="muscle-potential" locale="ru" theme="auto" />;
}
```

### JavaScript-загрузчик

```html
<div data-nutrifit-widget="muscle-potential" data-locale="ru" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Обычный iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/muscle-potential?lang=ru&theme=auto"
  title="Калькулятор мышечного потенциала (Кейси Батт и Мартин Беркхан)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
