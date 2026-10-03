# Ақуыздың анықтамалық мөлшерлері

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/protein-intake.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/protein-intake.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/protein-intake.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/protein-intake.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/protein-intake.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/protein-intake.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`protein-intake` · [NutriFit](https://nutrifit.health/kk/calculators/protein-intake)

Дені сау ересектер үшін EFSA PRI — 0,83 г/кг/тәулік. Дені сау жаттығатын ересектер үшін ISSN 1,4–2,0 г/кг/тәулік, ал дені сау егде адамдар үшін ESPEN 1,0–1,2 мөлшерін ұсынады. Есеп енгізілген нақты дене салмағына негізделеді. Бұл аралық қауіпсіздіктің жоғарғы шегі емес.

### Қолдану тәртібі

1. Деректерді енгізіңіз: Дені сау ересектер үшін EFSA PRI — 0,83 г/кг/тәулік. Дені сау жаттығатын ересектер үшін ISSN 1,4–2,0 г/кг/тәулік, ал дені сау егде адамдар үшін ESPEN 1,0–1,2 мөлшерін ұсынады. Есеп енгізілген нақты дене салмағына негізделеді. Бұл аралық қауіпсіздіктің жоғарғы шегі емес.
2. Бағдарларды салыстырыңыз: Дені сау ересектер үшін EFSA PRI — 0,83 г/кг/тәулік. Дені сау жаттығатын ересектер үшін ISSN 1,4–2,0 г/кг/тәулік, ал дені сау егде адамдар үшін ESPEN 1,0–1,2 мөлшерін ұсынады. Есеп енгізілген нақты дене салмағына негізделеді. Бұл аралық қауіпсіздіктің жоғарғы шегі емес.
3. Шектеулерді ескеріңіз: Бұл жеке оңтайлы доза емес, халық топтарына арналған бағдарлар. Нысан бүйрек ауруы, жүктілік, ауру, жеткіліксіз тамақтану немесе айқын артық салмақ кезінде тамақтануды тағайындамайды. Мұндай жағдайда есептік салмақ пен мөлшерді жеке таңдау керек.

### Әдіс пен формула

Дені сау ересектер үшін EFSA PRI — 0,83 г/кг/тәулік. Дені сау жаттығатын ересектер үшін ISSN 1,4–2,0 г/кг/тәулік, ал дені сау егде адамдар үшін ESPEN 1,0–1,2 мөлшерін ұсынады. Есеп енгізілген нақты дене салмағына негізделеді. Бұл аралық қауіпсіздіктің жоғарғы шегі емес.

Дені сау ересектер үшін EFSA PRI — 0,83 г/кг/тәулік. Дені сау жаттығатын ересектер үшін ISSN 1,4–2,0 г/кг/тәулік, ал дені сау егде адамдар үшін ESPEN 1,0–1,2 мөлшерін ұсынады. Есеп енгізілген нақты дене салмағына негізделеді. Бұл аралық қауіпсіздіктің жоғарғы шегі емес.

### Шектеулер

Бұл жеке оңтайлы доза емес, халық топтарына арналған бағдарлар. Нысан бүйрек ауруы, жүктілік, ауру, жеткіліксіз тамақтану немесе айқын артық салмақ кезінде тамақтануды тағайындамайды. Мұндай жағдайда есептік салмақ пен мөлшерді жеке таңдау керек.

### Дереккөздер

- [EFSA. Population reference intakes for protein, 2012](https://www.efsa.europa.eu/en/press/news/120209)
- [ISSN. Protein and exercise, 2017](https://pmc.ncbi.nlm.nih.gov/articles/PMC5477153/)
- [ESPEN Expert Group. Protein intake and exercise with aging, 2014](https://pmc.ncbi.nlm.nih.gov/articles/PMC4208946/)

## Осы калькуляторды ендіру

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="protein-intake" locale="kk" theme="auto" />;
}
```

### JavaScript жүктеушісі

```html
<div data-nutrifit-widget="protein-intake" data-locale="kk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Тікелей iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/protein-intake?lang=kk&theme=auto"
  title="Ақуыздың анықтамалық мөлшерлері" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
