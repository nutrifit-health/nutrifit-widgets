# Индекс безжировой массы FFMI

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/ffmi.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/ffmi.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/ffmi.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/ffmi.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/ffmi.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/ffmi.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`ffmi` · [NutriFit](https://nutrifit.health/ru/calculators/ffmi)

Безжировая масса = масса × (1 − процент жира / 100); FFMI = безжировая масса / рост², рост в метрах. Для мужчин: нормализованный FFMI = FFMI + 6,3 × (1,8 − рост), по аннотации Kouri (1995).

### Порядок использования

1. Введите исходные данные: Безжировая масса = масса × (1 − процент жира / 100); FFMI = безжировая масса / рост², рост в метрах. Для мужчин: нормализованный FFMI = FFMI + 6,3 × (1,8 − рост), по аннотации Kouri (1995).
2. Уточните параметры: Безжировая масса = масса × (1 − процент жира / 100); FFMI = безжировая масса / рост², рост в метрах. Для мужчин: нормализованный FFMI = FFMI + 6,3 × (1,8 − рост), по аннотации Kouri (1995).
3. Прочитайте результат: Исходное исследование включало мужчин. Нормализация для женщин не рассчитывается. Число зависит от точности оценки жира; это не диагноз применения стероидов, не доказательство генетического предела и не универсальная категория здоровья.

### Методика и формула

Безжировая масса = масса × (1 − процент жира / 100); FFMI = безжировая масса / рост², рост в метрах. Для мужчин: нормализованный FFMI = FFMI + 6,3 × (1,8 − рост), по аннотации Kouri (1995).

Безжировая масса = масса × (1 − процент жира / 100); FFMI = безжировая масса / рост², рост в метрах. Для мужчин: нормализованный FFMI = FFMI + 6,3 × (1,8 − рост), по аннотации Kouri (1995).

### Ограничения

Исходное исследование включало мужчин. Нормализация для женщин не рассчитывается. Число зависит от точности оценки жира; это не диагноз применения стероидов, не доказательство генетического предела и не универсальная категория здоровья.

### Источники

- [Kouri EM et al. Fat-free mass index in users and nonusers of anabolic-androgenic steroids. Clin J Sport Med, 1995](https://pubmed.ncbi.nlm.nih.gov/7496846/)

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
  title="Индекс безжировой массы FFMI" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
