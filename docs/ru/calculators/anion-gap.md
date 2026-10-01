# Калькулятор анионной разницы и дельта-отношения

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/anion-gap.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/anion-gap.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/anion-gap.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/anion-gap.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/anion-gap.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/anion-gap.md)

[← Каталог калькуляторов](../CALCULATORS.md)

`anion-gap` · [NutriFit](https://nutrifit.health/ru/calculators/anion-gap)

Анионная разница с поправкой на альбумин (Figge) и дельта-отношение ΔAG/ΔHCO₃ для различения ацидоза с высокой и нормальной анионной разницей.

### Порядок использования

1. Возьмите электролиты из одной пробы: Натрий, хлор и бикарбонат (или общий CO₂) должны быть из одного забора, желательно одновременно с газами крови. Разные пробы дают бессмысленную разницу.
2. Добавьте альбумин: У пациентов ОРИТ, при циррозе, нефротическом синдроме и истощении альбумин часто 20–30 г/л: без поправки высокая анионная разница маскируется под нормальную.
3. Интерпретируйте дельта-отношение в контексте: Дельта-отношение помогает увидеть второе нарушение (потери бикарбоната или алкалоз) за ацидозом с высокой AG, но требует pH, лактата и клинической картины.

### Методика и формула

Анионная разница — разность между измеренными катионами и анионами сыворотки, отражающая «неизмеренные» анионы: фосфаты, сульфаты, органические кислоты и отрицательно заряженный альбумин. При метаболическом ацидозе она растёт, если накапливаются кислоты (лактат, кетоны, уремические токсины, токсичные спирты), и остаётся нормальной, если теряется бикарбонат (диарея, почечный канальцевый ацидоз) и его замещает хлор. Поскольку альбумин — главный неизмеренный анион, при гипоальбуминемии разница ложно занижается: Figge (1998) предложил поправку 2,5 ммоль/л на каждый 1 г/дл снижения альбумина. Дельта-отношение сравнивает прирост разницы с падением бикарбоната и выявляет сочетанные нарушения.

AG = Na − (Cl + HCO₃), ммоль/л, без калия.
Поправка Figge: AG + 0,25 × (40 − альбумин, г/л).
Δ-отношение = (скорректированный AG − 12) / (24 − HCO₃).
Рассчитывается только при AG > 12 и HCO₃ < 24. Диапазоны дельта-отношения — ориентиры возможного смешанного нарушения, не диагноз.

### Ограничения

Референс анионной разницы зависит от анализатора: современные ион-селективные электроды дают 3–11 ммоль/л, старые методы — 8–16. Уточните референс своей лаборатории. Расчёт без калия; если лаборатория включает калий, референс на 4–5 выше. Дельта-отношение — грубый ориентир, требующий контекста (pH, pCO₂, лактат, кетоны). Калькулятор предназначен для интерпретации кислотно-щелочных нарушений специалистами и не заменяет анализ газов крови.

### Источники

- [Kraut J.A., Madias N.E. Serum anion gap: its uses and limitations in clinical medicine. Clin J Am Soc Nephrol, 2007;2(1):162–174](https://pubmed.ncbi.nlm.nih.gov/17699401/)
- [Figge J., Jabor A., Kazda A., Fencl V. Anion gap and hypoalbuminemia. Crit Care Med, 1998;26(11):1807–1810](https://pubmed.ncbi.nlm.nih.gov/9824071/)
- [Berend K., de Vries A.P., Gans R.O. Physiological approach to assessment of acid-base disturbances. N Engl J Med, 2014;371(15):1434–1445](https://pubmed.ncbi.nlm.nih.gov/25295502/)

## Как встроить этот калькулятор

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="anion-gap" locale="ru" theme="auto" />;
}
```

### JavaScript-загрузчик

```html
<div data-nutrifit-widget="anion-gap" data-locale="ru" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Обычный iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/anion-gap?lang=ru&theme=auto"
  title="Калькулятор анионной разницы и дельта-отношения" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Темы: light, dark и auto. JavaScript-загрузчик и React-обёртка автоматически меняют высоту; обычный iframe имеет фиксированную высоту. Поля остаются внутри iframe. Требования CSP, события и платная интеграция описаны в инструкции установки.
