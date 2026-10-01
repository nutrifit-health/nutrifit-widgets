# Калькулятор аніонної різниці та дельта-співвідношення

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/anion-gap.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/anion-gap.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/anion-gap.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/anion-gap.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/anion-gap.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/anion-gap.md)

[← Каталог калькуляторів](../CALCULATORS.md)

`anion-gap` · [NutriFit](https://nutrifit.health/uk/calculators/anion-gap)

Аніонна різниця з поправкою на альбумін (Figge) та дельта-відношення (ΔAG/ΔHCO₃) при оцінці кислотно-лужного стану.

### Порядок використання

1. Введіть електроліти: Знадобляться натрій, хлор та бікарбонат (HCO₃⁻ або загальний CO₂) в ммоль/л.
2. Додайте альбумін: Особливо важливо для пацієнтів у стаціонарі: кожен грам зниження альбуміну маскує ацидоз.
3. Оцініть дельта-співвідношення: Якщо AG підвищена, співвідношення покаже наявність прихованого другого розладу КЛС.

### Методика та формула

Аніонна різниця — різниця між виміряними катіонами та аніонами: AG = Na − (Cl + HCO₃). Альбумін є головним невиміряним аніоном. При гіпоальбумінемії AG занижується, тому застосовують поправку Figge (1998): +0,25 ммоль/л на кожен г/л альбуміну нижче 40 г/л. Дельта-співвідношення допомагає виявити змішані розлади.

AG = Na − (Cl + HCO₃), ммоль/л, без калію.
Поправка Figge: AG_скоригована = AG + 0,25 × (40 − Альбумін, г/л).
ΔAG / ΔHCO₃ = (AG_скоригована − 12) / (24 − HCO₃).

### Обмеження

Референс аніонної різниці залежить від аналізатора (зазвичай 8–12 ммоль/л без калію). Розрахунок не замінює дослідження газів артеріальної крові (pH, pCO₂) та клінічної оцінки пацієнта.

### Джерела

- [Kraut J.A., Madias N.E. Serum anion gap: its uses and limitations in clinical medicine. Clin J Am Soc Nephrol, 2007;2(1):162–174](https://pubmed.ncbi.nlm.nih.gov/17699401/)
- [Figge J., Jabor A., Kazda A., Fencl V. Anion gap and hypoalbuminemia. Crit Care Med, 1998;26(11):1807–1810](https://pubmed.ncbi.nlm.nih.gov/9824071/)
- [Berend K., de Vries A.P., Gans R.O. Physiological approach to assessment of acid-base disturbances. N Engl J Med, 2014;371(15):1434–1445](https://pubmed.ncbi.nlm.nih.gov/25295502/)

## Як вбудувати цей калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="anion-gap" locale="uk" theme="auto" />;
}
```

### JavaScript-завантажувач

```html
<div data-nutrifit-widget="anion-gap" data-locale="uk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Звичайний iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/anion-gap?lang=uk&theme=auto"
  title="Калькулятор аніонної різниці та дельта-співвідношення" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Теми: light, dark та auto. JavaScript і React автоматично змінюють висоту; звичайний iframe має фіксовану висоту. Дані залишаються в iframe. CSP, події та платна інтеграція описані в інструкції встановлення.
