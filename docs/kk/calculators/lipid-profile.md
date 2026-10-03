# Липидтік профиль: есептік көрсеткіштер

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/lipid-profile.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/lipid-profile.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/lipid-profile.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/lipid-profile.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/lipid-profile.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/lipid-profile.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`lipid-profile` · [NutriFit](https://nutrifit.health/kk/calculators/lipid-profile)

Фридвальд пен Сэмпсон бойынша LDL, non-HDL, қалдық холестерин және липидтік қатынастарды есептейді.

### Қолдану тәртібі

1. Бастапқы деректерді енгізіңіз: Нақты мәндер мен тиісті бірліктерді қолданыңыз.
2. Параметрлерді нақтылаңыз: Бастапқы болжамдарды өз жағдайыңызға сай өзгертіңіз.
3. Нәтижені оқыңыз: Модель шектеулерін ескеріңіз; есеп өлшеу емес.

### Әдіс пен формула

Фридвальд: LDL = жалпы холестерин − HDL − TG/5, бәрі мг/дл, TG <400 мг/дл болғанда. Сэмпсон (2020) TG ≤800 мг/дл кезінде қолданылады; теріс бағалар көрсетілмейді. AIP = log10(TG/HDL), екеуі де ммоль/л.

Фридвальд: LDL = жалпы холестерин − HDL − TG/5, бәрі мг/дл, TG <400 мг/дл болғанда. Сэмпсон (2020) TG ≤800 мг/дл кезінде қолданылады; теріс бағалар көрсетілмейді. AIP = log10(TG/HDL), екеуі де ммоль/л.

### Шектеулер

LDL мақсаты жалпы жүрек-қантамыр қаупіне байланысты. Көрсеткіштер жеке тәуекелді, диагнозды немесе дәрі қажеттілігін анықтамайды. Қатынастар мен AIP әмбебап норма санаттарынсыз көрсетіледі.

### Дереккөздер

- [Friedewald WT et al. Estimation of the concentration of low-density lipoprotein cholesterol in plasma, without use of the preparative ultracentrifuge. Clin Chem, 1972](https://pubmed.ncbi.nlm.nih.gov/4337382/)
- [Sampson M et al. A New Equation for Calculation of Low-Density Lipoprotein Cholesterol in Patients With Normolipidemia and/or Hypertriglyceridemia. JAMA Cardiol, 2020](https://pubmed.ncbi.nlm.nih.gov/32101259/)
- [Dobiásová M et al. The plasma parameter log (TG/HDL-C) as an atherogenic index: correlation with lipoprotein particle size and esterification rate in apoB-lipoprotein-depleted plasma (FER(HDL)). Clin Biochem, 2001](https://pubmed.ncbi.nlm.nih.gov/11738396/)
- [Mach F et al. 2019 ESC/EAS Guidelines for the management of dyslipidaemias: lipid modification to reduce cardiovascular risk. Eur Heart J, 2020](https://pubmed.ncbi.nlm.nih.gov/31504418/)

## Осы калькуляторды ендіру

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="lipid-profile" locale="kk" theme="auto" />;
}
```

### JavaScript жүктеушісі

```html
<div data-nutrifit-widget="lipid-profile" data-locale="kk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Тікелей iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/lipid-profile?lang=kk&theme=auto"
  title="Липидтік профиль: есептік көрсеткіштер" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
