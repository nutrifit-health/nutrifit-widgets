# Індекс тяжкості безсоння ISI

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/isi.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/isi.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/isi.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/isi.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/isi.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/isi.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`isi` · [NutriFit](https://nutrifit.health/uk/calculators/isi)

Короткий клінічний інструмент із 7 запитань для оцінки вираженості, природи та денних наслідків інсомнії.

### Порядок використання

1. Згадайте останні 2 тижні: Оцініть свій звичний нічний сон і відчуття бадьорості протягом останніх 14 днів.
2. Дайте відповідь на 7 запитань: Оцініть кожну проблему від 0 («Немає») до 4 («Дуже сильно виражено»).
3. Ознайомтеся з результатами: Дізнайтеся категорію тяжкості безсоння та впровадьте ефективні правила здорового сну.

### Методика та формула

7 пунктів, кожен оцінюється від 0 до 4 балів. Загальний бал варіюється від 0 до 28, охоплюючи засинання, нічні пробудження та раннє прокидання.

Бал ISI = Сума 7 запитань (0–28). 0–7: безсоння відсутнє; 8–14: підпорогове (легке); 15–21: помірне клінічне; 22–28: тяжке клінічне безсоння.

### Обмеження

Індекс призначений для скринінгу. При підозрі на синдром обструктивного апное сну чи неспокійних ніг необхідна полісомнографія.

### Джерела

- [Morin C.M. et al. The Insomnia Severity Index: psychometric indicators to detect insomnia cases. Sleep, 2011;34(5):601–608](https://pubmed.ncbi.nlm.nih.gov/21532953/)
- [Bastien C.H. et al. Validation of the Insomnia Severity Index as an outcome measure. Sleep Med, 2001;2(4):297–307](https://pubmed.ncbi.nlm.nih.gov/11438246/)

## Як вбудувати цей калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="isi" locale="uk" theme="auto" />;
}
```

### JavaScript-завантажувач

```html
<div data-nutrifit-widget="isi" data-locale="uk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Звичайний iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/isi?lang=uk&theme=auto"
  title="Індекс тяжкості безсоння ISI" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
