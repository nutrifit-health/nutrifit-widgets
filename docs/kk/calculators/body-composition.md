# Дене құрамының калькуляторы

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/body-composition.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/body-composition.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/body-composition.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/body-composition.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/body-composition.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/body-composition.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`body-composition` · [NutriFit](https://nutrifit.health/kk/calculators/body-composition)

Дене өлшемдері бойынша май үлесін бағалайды, май және таза массаны әрі дене салмағы индексін есептейді.

### Пайдалану реті

1. Сантиметрлік таспаны алыңыз: Созылмайтын икемді өлшеуіш таспаны пайдаланыңыз. Өлшеулерді таңертең аш қарынға жасаңыз.
2. Дене көлемдерін өлшеңіз: Ерлерге мойын мен бел керек. Әйелдерге — мойын, бел және жамбас. Таспа тығыз тиіп тұруы керек, бірақ теріні қыспауы тиіс.
3. Дене құрамын біліңіз: Калькулятор май пайызын, абсолютті май салмағын және майсыз құрғақ (бұлшықет) салмақты есептейді.

### Әдістеме және формула

Май үлесі U.S. Navy әдісімен бағаланады (Hodgdon және Beckett, 1984): есепке бой мен мойын, бел, ал әйелдерде сан айналымы кіреді. Әдіс жабдықты қажет етпейтіндіктен таңдалды, ал оның қателігі тұрмыстық биоимпеданс таразыларымен салыстырмалы. Қосымша ДДҰ жіктемесі бойынша ДСИ есептеледі — ол дене құрамы туралы ештеңе айтпайды, бірақ популяциялық нормалармен салыстыруға керек.

Ерлер: %май = 495 / (1,0324 − 0,19077 × log₁₀(бел − мойын) + 0,15456 × log₁₀(бой)) − 450; Әйелдер: %май = 495 / (1,29579 − 0,35004 × log₁₀(бел + сан − мойын) + 0,221 × log₁₀(бой)) − 450; ДСИ = салмақ / бой²

### Шектеулер

Әдіс қателігі DXA-мен салыстырғанда шамамен ±3–4% және дене бітімі әдеттен тыс болған сайын өседі. Өлшемдерді таңертең ашқарынға, таспаны тартпай, әрдайым бір нүктелерде жасаңыз: белдегі 1 см айырма нәтижені сезілерлік өзгертеді. ДСИ бұлшықет пен майды ажыратпайды және спортшыларға, жүкті әйелдерге, балаларға қолданылмайды.

### Дереккөздер

- [Hodgdon J.A., Beckett M.B. Prediction of percent body fat for U.S. Navy men and women from body circumferences and height. Naval Health Research Center, 1984](https://apps.dtic.mil/sti/citations/ADA143890)
- [WHO. Obesity: preventing and managing the global epidemic. WHO Technical Report Series 894, 2000](https://www.who.int/publications/i/item/WHO_TRS_894)

## Осы калькуляторды ендіру

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="body-composition" locale="kk" theme="auto" />;
}
```

### JavaScript жүктеушісі

```html
<div data-nutrifit-widget="body-composition" data-locale="kk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Тікелей iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/body-composition?lang=kk&theme=auto"
  title="Дене құрамының калькуляторы" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
