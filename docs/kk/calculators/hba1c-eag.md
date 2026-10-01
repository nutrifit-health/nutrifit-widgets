# HbA1c ↔ орташа глюкоза (eAG) түрлендіргіші

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/hba1c-eag.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/hba1c-eag.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/hba1c-eag.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/hba1c-eag.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/hba1c-eag.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/hba1c-eag.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`hba1c-eag` · [NutriFit](https://nutrifit.health/kk/calculators/hba1c-eag)

ADAG формуласы бойынша HbA1c-ті 3 айлық орташа гликемияға қайта есептеу, кері есептеу және ADA санаттарымен % ↔ ммоль/моль түрлендіру.

### Пайдалану реті

1. Не бар екенін таңдаңыз: Қолыңызда HbA1c талдауы болса — оны енгізіңіз. Глюкометр немесе CGM жүргізсеңіз және 2–3 айдағы орташа глюкозаны білсеңіз — кері есептеуге ауысыңыз.
2. Бланк бірліктерін көрсетіңіз: HbA1c пайызбен (NGSP, АҚШ және ТМД) немесе ммоль/моль-мен (IFCC, Еуропа) беріледі. 6,5 % 48 ммоль/моль-ге сәйкес — калькулятор автоматты түрде қайта есептейді.
3. eAG-ті глюкометр көрсеткіштерімен салыстырыңыз: Глюкометр бойынша орташа eAG-тен айтарлықтай төмен болса — сіз негізінен аш қарынға өлшеп, тамақтан кейінгі шыңдарды жіберіп алуыңыз мүмкін. 1,5 ммоль/л-ден артық айырмашылықты дәрігермен талқылаған жөн.

### Әдістеме және формула

Гликирленген гемоглобин 8–12 апта ішіндегі — эритроцит өмір сүру мерзіміндегі — орташа глюкоза концентрациясын көрсетеді. A1c-Derived Average Glucose зерттеуі (ADAG, Nathan 2008) 507 адамда HbA1c-ті глюкозаның үздіксіз мониторингімен салыстырып, сызықтық тәуелділікті шығарды: eAG (мг/дл) = 28,7 × HbA1c − 46,7. Калькулятор екі бағытта жұмыс істейді — HbA1c-тен орташа глюкозаға және белгілі орташа гликемиядан (мысалы, глюкометр немесе CGM бойынша) күтілетін HbA1c-ке — және NGSP пайыздарын Еуропа мен Австралияда қабылданған IFCC бірліктеріне (ммоль/моль) аударады.

eAG (мг/дл) = 28,7 × HbA1c (%) − 46,7
eAG (ммоль/л) = 1,59 × HbA1c (%) − 2,59
HbA1c (ммоль/моль, IFCC) = (HbA1c (%, NGSP) − 2,15) × 10,929
Кері: HbA1c (%) = (eAG, мг/дл + 46,7) / 28,7

### Шектеулер

HbA1c эритроциттердің өмір сүру мерзімін немесе гемоглобин құрылымын өзгертетін жағдайларда дәл емес: анемия, гемоглобинопатиялар, жүктілік, СБА, жақындағы қан жоғалту немесе құю, темір мен B12 тапшылығы. Адамдардың 10–15 %-ында HbA1c пен глюкоза арасындағы жеке байланыс орташадан айтарлықтай ерекшеленеді («гликация алшақтығы» феномені), сондықтан eAG — өлшеу емес, популяциялық бағалау. Диабет диагнозы қайталама тестпен растауды қажет етеді.

### Дереккөздер

- [Nathan D.M. et al. Translating the A1C assay into estimated average glucose values. Diabetes Care, 2008;31(8):1473–1478](https://pubmed.ncbi.nlm.nih.gov/18540046/)
- [American Diabetes Association. Diagnosis and Classification of Diabetes: Standards of Care in Diabetes — 2024. Diabetes Care, 2024;47(Suppl 1):S20–S42](https://pubmed.ncbi.nlm.nih.gov/38078589/)
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
  title="HbA1c ↔ орташа глюкоза (eAG) түрлендіргіші" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
