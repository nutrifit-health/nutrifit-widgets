# Калькулятор FFMI (индекс безжировой массы)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/ffmi.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/ffmi.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/ffmi.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/ffmi.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/ffmi.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/ffmi.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`ffmi` · [NutriFit](https://nutrifit.health/ru/calculators/ffmi)

Определяет количество сухой мышечной массы с поправкой на рост человека и оценивает вероятность натурального телосложения без применения фармакологии.

### Порядок использования

1. Измерьте рост и вес: Взвесьтесь утром натощак после туалета, зафиксируйте точный рост в сантиметрах.
2. Оцените процент жира: Используйте калипер по 3–7 складкам, профессиональный биоимпедансный анализатор или денситометрию DEXA.
3. Интерпретируйте нормализованный индекс: Нормализованный показатель устраняет погрешность высокого или низкого роста и сопоставим с научными выборками атлетов.

### Методика и формула

Обычный ИМТ не отличает жир от мышц. Индекс безжировой массы (FFMI) делит сухую массу тела на рост в квадрате. Формула Коури дополнительно нормализует индекс к росту 180 см (6 футов), устраняя преимущество высоких атлетов.

Сухая масса (LBM) = Вес × (1 − % Жира / 100); Базовый FFMI = LBM / (Рост, м)^2; Нормализованный FFMI = Базовый FFMI + 6,1 × (1,8 − Рост, м).

### Ограничения

Точность расчёта напрямую зависит от метода замера процента жира. Погрешность калиперометрии или биоимпеданса в 3% изменяет FFMI на 0,7–1,0 единицы.

### Источники

- [Kouri E.M. et al. Fat-free mass index in users and nonusers of anabolic-androgenic steroids. Clin J Sport Med, 1995;5(4):223–228](https://pubmed.ncbi.nlm.nih.gov/7496846/)
- [Trexler E.T. et al. Physiological changes after a female bodybuilding contest preparation. J Int Soc Sports Nutr, 2017;14:34](https://pubmed.ncbi.nlm.nih.gov/28878643/)

## Как встроить этот калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="ffmi" locale="ru" theme="auto" />;
}
```

### JavaScript-загрузчик

```html
<div data-nutrifit-widget="ffmi" data-locale="ru" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Обычный iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/ffmi?lang=ru&theme=auto"
  title="Калькулятор FFMI (индекс безжировой массы)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
