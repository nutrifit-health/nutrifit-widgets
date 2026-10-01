# Калькулятор выведения алкоголя (формула Видмарка)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/alcohol.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/alcohol.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/alcohol.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/alcohol.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/alcohol.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/alcohol.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`alcohol` · [NutriFit](https://nutrifit.health/ru/calculators/alcohol)

Рассчитывает пиковую и текущую концентрацию этанола в крови (в промилле ‰), точное время до полного отрезвления и калорийность алкоголя.

### Порядок использования

1. Всасывание в желудке и кишечнике: Около 20% алкоголя всасывается в желудке, остальные 80% — в тонкой кишке. Плотная пища замедляет эвакуацию в кишечник, сглаживая пик опьянения.
2. Окисление ферментами печени: Печень окисляет до 95% этанола с постоянной скоростью через ферменты алкогольдегидрогеназу (АДГ) до токсичного ацетальдегида, а затем альдегиддегидрогеназой (АЛДГ) до ацетата.
3. Линейное выведение: Ферменты насыщаются быстро (кинетика нулевого порядка): скорость вытрезвления составляет строго около 0,15 промилле в час независимо от выпитого объёма.

### Методика и формула

Основан на фармакокинетической модели шведского судебного химика Эрика Видмарка (1932) с поправками Уэйна Джонса (A.W. Jones, 2010). Учитывает объём распределения воды в организме (фактор r: 0,68 у мужчин, 0,55 у женщин), влияние пищи на фермент алкогольдегидрогеназу (ADH) желудка и линейную скорость элиминации бета (0,15 ‰/час).

Чистый этанол (г) = Объём (мл) × (Крепость % / 100) × 0,789; BAC_peak = (Этанол × Фактор_всасывания) / (Вес × r); BAC_current = max(0, BAC_peak − 0,15 × Часы); Время (ч) = BAC_peak / 0,15.

### Ограничения

Скорость элиминации индивидуальна и колеблется от 0,10 до 0,20 ‰/час в зависимости от генетического полиморфизма ADH и ALDH2, толерантности и состояния печени. Не является юридическим доказательством для дорожной полиции.

### Источники

- [Widmark E.M.P. Die theoretischen Grundlagen und die praktische Verwendbarkeit der gerichtlich-medizinischen Alkoholbestimmung. Urban & Schwarzenberg, Berlin, 1932](https://doi.org/10.1007/978-3-642-91176-8)
- [Jones A.W. Evidence-based survey of the elimination rates of ethanol from blood with applications in forensic casework and pharmacokinetics. Forensic Sci Int, 2010;200(1-3):1–20](https://pubmed.ncbi.nlm.nih.gov/20434270/)
- [World Health Organization. Global status report on alcohol and health. Geneva, 2024](https://www.who.int/publications/i/item/9789240096745)

## Как встроить этот калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="alcohol" locale="ru" theme="auto" />;
}
```

### JavaScript-загрузчик

```html
<div data-nutrifit-widget="alcohol" data-locale="ru" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Обычный iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/alcohol?lang=ru&theme=auto"
  title="Калькулятор выведения алкоголя (формула Видмарка)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
