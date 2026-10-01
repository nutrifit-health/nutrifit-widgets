# Калькулятор виведення алкоголю (формула Відмарка)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/alcohol.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/alcohol.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/alcohol.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/alcohol.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/alcohol.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/alcohol.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`alcohol` · [NutriFit](https://nutrifit.health/uk/calculators/alcohol)

Розраховує пікову та поточну концентрацію етанолу в крові (у проміле ‰), точний час до повного витвереження та калорійність алкоголю.

### Порядок використання

1. Всмоктування в шлунку та кишечнику: Близько 20% алкоголю всмоктується в шлунку, решта 80% — у тонкій кишці. Щільна їжа сповільнює евакуацію в кишечник, згладжуючи пік сп'яніння.
2. Окислення ферментами печінки: Печінка окислює до 95% етанолу з постійною швидкістю через ферменти алкогольдегідрогеназу (АДГ) до токсичного ацетальдегіду, а потім альдегіддегідрогеназою (АЛДГ) до ацетату.
3. Лінійне виведення: Ферменти насичуються швидко (кінетика нульового порядку): швидкість витвереження становить суворо близько 0,15 проміле на годину незалежно від випитого об'єму.

### Методика та формула

Базується на фармакокінетичній моделі шведського судового хіміка Еріка Відмарка (1932) з поправками Вейна Джонса (A.W. Jones, 2010). Враховує об'єм розподілу води в організмі (фактор r: 0,68 у чоловіків, 0,55 у жінок), вплив їжі на фермент алкогольдегідрогеназу (ADH) шлунка та лінійну швидкість елімінації бета (0,15 ‰/год).

Чистий етанол (г) = Об'єм (мл) × (Міцність % / 100) × 0,789; BAC_peak = (Етанол × Фактор_всмоктування) / (Вага × r); BAC_current = max(0, BAC_peak − 0,15 × Години); Час (год) = BAC_peak / 0,15.

### Обмеження

Швидкість елімінації індивідуальна і коливається від 0,10 до 0,20 ‰/год залежно від генетичного поліморфізму ADH та ALDH2, толерантності та стану печінки. Не є юридичним доказом для дорожньої поліції.

### Джерела

- [Widmark E.M.P. Die theoretischen Grundlagen und die praktische Verwendbarkeit der gerichtlich-medizinischen Alkoholbestimmung. Urban & Schwarzenberg, Berlin, 1932](https://doi.org/10.1007/978-3-642-91176-8)
- [Jones A.W. Evidence-based survey of the elimination rates of ethanol from blood with applications in forensic casework and pharmacokinetics. Forensic Sci Int, 2010;200(1-3):1–20](https://pubmed.ncbi.nlm.nih.gov/20434270/)
- [World Health Organization. Global status report on alcohol and health. Geneva, 2024](https://www.who.int/publications/i/item/9789240096745)

## Як вбудувати цей калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="alcohol" locale="uk" theme="auto" />;
}
```

### JavaScript-завантажувач

```html
<div data-nutrifit-widget="alcohol" data-locale="uk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Звичайний iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/alcohol?lang=uk&theme=auto"
  title="Калькулятор виведення алкоголю (формула Відмарка)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
