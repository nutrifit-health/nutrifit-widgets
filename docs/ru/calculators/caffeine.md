# Калькулятор выведения кофеина и времени до сна

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/caffeine.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/caffeine.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/caffeine.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/caffeine.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/caffeine.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/caffeine.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`caffeine` · [NutriFit](https://nutrifit.health/ru/calculators/caffeine)

Рассчитывает динамику распада кофеина в крови, период полувыведения (с учётом курения, КОК и беременности) и остаточный уровень ко времени отхода ко сну.

### Порядок использования

1. Отложите первую чашку на 60–90 минут после пробуждения: Дайте утреннему пику кортизола естественным путём очистить остатки ночного аденозина, чтобы избежать послеобеденного провала бодрости.
2. Соблюдайте «время отсечки» кофеина: При периоде полувыведения 5 часов четверть выпитого кофеина остаётся в мозгу спустя 10–12 часов. Не пейте кофе позже 14:00 при отходе ко сну в 23:00.
3. Учитывайте скрытые источники: Тёмный шоколад, кола, зелёный чай и безрецептурные обезболивающие (цитрамон) также содержат значимые дозы кофеина.

### Методика и формула

Основан на фармакокинетике метаболизма кофеина цитохромом печени CYP1A2 по данным EFSA (2015) и Американской академии медицины сна (AASM). Средний период полувыведения составляет 5 часов. При уровне кофеина ко времени сна свыше 35–40 мг блокируются рецепторы аденозина A1 и A2A, нарушая медленноволновой глубокий сон (N3).

C(t) = C0 × e^(−k × t), где k = ln(2) / t_half; Стандартный t_half = 5,0 ч; Курение = 3,0 ч; КОК = 9,0 ч; Беременность = 12,0 ч; Потолок EFSA = 400 мг/сут (для беременных 200 мг).

### Ограничения

Скорость клиренса варьирует у «быстрых» и «медленных» метаболизаторов в зависимости от генотипа CYP1A2 (*1F против *1A). Люди с высокой чувствительностью ощущают тревожность даже при низких дозах.

### Источники

- [EFSA Panel on Dietetic Products, Nutrition and Allergies. Scientific Opinion on the safety of caffeine. EFSA Journal, 2015;13(5):4102](https://doi.org/10.2903/j.efsa.2015.4102)
- [Guest N.S. et al. International society of sports nutrition position stand: caffeine and exercise performance. J Int Soc Sports Nutr, 2021;18(1):1](https://pubmed.ncbi.nlm.nih.gov/33388079/)
- [Drake C. et al. Caffeine effects on sleep taken 0, 3, or 6 hours before going to bed. J Clin Sleep Med, 2013;9(11):1195–1200](https://pubmed.ncbi.nlm.nih.gov/24235826/)

## Как встроить этот калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="caffeine" locale="ru" theme="auto" />;
}
```

### JavaScript-загрузчик

```html
<div data-nutrifit-widget="caffeine" data-locale="ru" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Обычный iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/caffeine?lang=ru&theme=auto"
  title="Калькулятор выведения кофеина и времени до сна" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
