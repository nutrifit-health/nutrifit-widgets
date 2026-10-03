# HbA1c және орташа глюкозаны қайта есептеу

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/hba1c-eag.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/hba1c-eag.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/hba1c-eag.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/hba1c-eag.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/hba1c-eag.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/hba1c-eag.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`hba1c-eag` · [NutriFit](https://nutrifit.health/kk/calculators/hba1c-eag)

Зертханалық HbA1c бойынша шамамен 2–3 айдағы орташа глюкозаны немесе кері шамалы бағалауды есептеу.

### Қолдану тәртібі

1. Бастапқы деректерді енгізіңіз: Нақты мәндер мен тиісті бірліктерді қолданыңыз.
2. Параметрлерді нақтылаңыз: Бастапқы болжамдарды өз жағдайыңызға сай өзгертіңіз.
3. Нәтижені оқыңыз: Модель шектеулерін ескеріңіз; есеп өлшеу емес.

### Әдіс пен формула

ADAG байланысы — популяциялық деректерге негізделген бағалау, әр адам үшін дәл сәйкестік емес. NGSP/IFCC түрлендіруі ресми теңдеуді қолданады.

eAG (mg/dL) = 28.7 × HbA1c (%) − 46.7; eAG (mmol/L) = eAG (mg/dL) / 18.016; IFCC (mmol/mol) = (NGSP (%) − 2.152) / 0.09148; NGSP (%) = 0.09148 × IFCC + 2.152.

### Шектеулер

Орташа глюкозадан кері есептеу HbA1c талдауын алмастырмайды және диагноз қоймайды. Анемия, эритроцит өмірінің өзгеруі, гемоглобин нұсқалары мен жүктілік сәйкестікке әсер етеді. Диагноз дәрігер бағалауын және әдетте қайталап растауды қажет етеді.

### Дереккөздер

- [Nathan DM et al. Translating the A1C assay into estimated average glucose values. Diabetes Care, 2008](https://pubmed.ncbi.nlm.nih.gov/18540046/)
- [American Diabetes Association Professional Practice Committee. et al. 2. Diagnosis and Classification of Diabetes: Standards of Care in Diabetes-2024. Diabetes Care, 2024](https://pubmed.ncbi.nlm.nih.gov/38078589/)
- [NGSP. IFCC Standardization of HbA1c: master equation NGSP ↔ IFCC](https://ngsp.org/ifcc.asp)

## Осы калькуляторды ендіру

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="hba1c-eag" locale="kk" theme="auto" />;
}
```

### JavaScript жүктеушісі

```html
<div data-nutrifit-widget="hba1c-eag" data-locale="kk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Тікелей iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/hba1c-eag?lang=kk&theme=auto"
  title="HbA1c және орташа глюкозаны қайта есептеу" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
