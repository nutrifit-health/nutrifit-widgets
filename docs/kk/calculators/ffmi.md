# FFMI калькуляторы (майсыз дене массасының индексі)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/ffmi.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/ffmi.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/ffmi.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/ffmi.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/ffmi.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/ffmi.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`ffmi` · [NutriFit](https://nutrifit.health/kk/calculators/ffmi)

Бойға қатысты құрғақ бұлшықет массасының мөлшерін анықтайды, шынайы гипертрофияны майдың жиналуынан ажыратады.

### Пайдалану реті

1. Бой мен салмақты дәл өлшеңіз: Таңертең аш қарынға дәретханадан кейін өлшеніңіз, бойыңызды аяқ киімсіз өлшеңіз.
2. Май пайызын анықтаңыз: 3–7 қатпар бойынша калиперді, биоимпедансты немесе DEXA сканерлеуді пайдаланыңыз.
3. Қалыпқа келтірілген индексті талдаңыз: Қалыпқа келтірілген көрсеткіш ұзын (>180 см) немесе қысқа (<170 см) бойлы адамдар үшін қателікті түзетіп, кестемен дұрыс салыстыруға мүмкіндік береді.

### Әдістеме және формула

Дене салмағының кәдімгі индексі (BMI) майды бұлшықеттен ажыратпайды. Майсыз дене массасының индексі (FFMI) құрғақ тіндерді бөліп алады және бой айырмашылықтарын салыстыру үшін түзету енгізеді (Kouri et al., 1995).

Құрғақ масса (LBM) = Салмақ × (1 − % Май / 100); Базалық FFMI = LBM / Бой(м)²; Қалыпқа келтірілген FFMI = Базалық FFMI + 6,1 × (1,80 − Бой(м)).

### Шектеулер

Есептеу дәлдігі май пайызын өлшеу әдісіне тікелей байланысты. Калиперометрия, DEXA немесе гидростатикалық өлшеу ең дәл нәтиже береді.

### Дереккөздер

- [Kouri E.M. et al. Fat-free mass index in users and nonusers of anabolic-androgenic steroids. Clin J Sport Med, 1995;5(4):223–228](https://pubmed.ncbi.nlm.nih.gov/7496846/)
- [Trexler E.T. et al. Physiological changes after a female bodybuilding contest preparation. J Int Soc Sports Nutr, 2017;14:34](https://pubmed.ncbi.nlm.nih.gov/28878643/)

## Осы калькуляторды ендіру

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="ffmi" locale="kk" theme="auto" />;
}
```

### JavaScript жүктеушісі

```html
<div data-nutrifit-widget="ffmi" data-locale="kk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Тікелей iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/ffmi?lang=kk&theme=auto"
  title="FFMI калькуляторы (майсыз дене массасының индексі)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
