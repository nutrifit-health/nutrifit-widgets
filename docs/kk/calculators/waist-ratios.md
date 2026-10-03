# Бел индекстері WHR, WHtR және VAI

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/waist-ratios.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/waist-ratios.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/waist-ratios.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/waist-ratios.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/waist-ratios.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/waist-ratios.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`waist-ratios` · [NutriFit](https://nutrifit.health/kk/calculators/waist-ratios)

WHR = бел / мықын; WHtR = бел / бой. Белді төменгі қабырға мен жамбас үстінің ортасында тыныш дем шығарғаннан кейін, мықынды ең кең жерінен өлшеңіз. VAI салмақты, ТГ мен ЖТЛП-ны ммоль/л түрінде Amato (2010) бойынша қолданады.

### Қолдану тәртібі

1. Бастапқы деректерді енгізіңіз: WHR = бел / мықын; WHtR = бел / бой. Белді төменгі қабырға мен жамбас үстінің ортасында тыныш дем шығарғаннан кейін, мықынды ең кең жерінен өлшеңіз. VAI салмақты, ТГ мен ЖТЛП-ны ммоль/л түрінде Amato (2010) бойынша қолданады.
2. Параметрлерді нақтылаңыз: WHtR = Бел / Бой; WHR = Бел / Мықын; VAI (Ер) = (Бел/(39,68+1,88×ДМИ)) × (ТГ/1,03) × (1,31/HDL); VAI (Әйел) = (Бел/(35,58+1,89×ДМИ)) × (ТГ/0,81) × (1,52/HDL).
3. Нәтижені оқыңыз: Индекстер висцералдық майды тікелей өлшемейді. Төмен WHtR салмақ тапшылығын анықтамайды; WHR мен VAI әмбебап санаттары берілмейді. NICE WHtR ұсыныстары ДСИ < 35 ересектерге арналған.

### Әдіс пен формула

WHR = бел / мықын; WHtR = бел / бой. Белді төменгі қабырға мен жамбас үстінің ортасында тыныш дем шығарғаннан кейін, мықынды ең кең жерінен өлшеңіз. VAI салмақты, ТГ мен ЖТЛП-ны ммоль/л түрінде Amato (2010) бойынша қолданады.

WHtR = Бел / Бой; WHR = Бел / Мықын; VAI (Ер) = (Бел/(39,68+1,88×ДМИ)) × (ТГ/1,03) × (1,31/HDL); VAI (Әйел) = (Бел/(35,58+1,89×ДМИ)) × (ТГ/0,81) × (1,52/HDL).

### Шектеулер

Индекстер висцералдық майды тікелей өлшемейді. Төмен WHtR салмақ тапшылығын анықтамайды; WHR мен VAI әмбебап санаттары берілмейді. NICE WHtR ұсыныстары ДСИ < 35 ересектерге арналған.

### Дереккөздер

- [Ashwell M et al. Waist-to-height ratio is a better screening tool than waist circumference and BMI for adult cardiometabolic risk factors: systematic review and meta-analysis. Obes Rev, 2012](https://pubmed.ncbi.nlm.nih.gov/22106927/)
- [World Health Organization. Waist Circumference and Waist-Hip Ratio: Report of a WHO Expert Consultation. Geneva, 2008](https://www.who.int/publications/i/item/9789241501491)
- [Amato MC et al. Visceral Adiposity Index: a reliable indicator of visceral fat function associated with cardiometabolic risk. Diabetes Care, 2010](https://pubmed.ncbi.nlm.nih.gov/20067971/)

## Осы калькуляторды ендіру

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="waist-ratios" locale="kk" theme="auto" />;
}
```

### JavaScript жүктеушісі

```html
<div data-nutrifit-widget="waist-ratios" data-locale="kk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Тікелей iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/waist-ratios?lang=kk&theme=auto"
  title="Бел индекстері WHR, WHtR және VAI" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
