# HOMA-IR калькуляторы: инсулинге төзімділік индексі

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/homa-ir.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/homa-ir.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/homa-ir.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/homa-ir.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/homa-ir.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/homa-ir.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`homa-ir` · [NutriFit](https://nutrifit.health/kk/calculators/homa-ir)

Аш қарынға глюкоза мен инсулин бойынша HOMA-IR, HOMA-β және QUICKI индекстері: инсулинге төзімділік пен β-жасуша функциясын нормалармен және түсіндірмемен бағалау.

### Қолдану тәртібі

1. Бастапқы деректерді енгізіңіз: HOMA1 (Matthews, 1985) және QUICKI (Katz, 2000) ашқарындағы глюкоза мен инсулинге негізделген модельдер. Олар бір деректер жиынтығының әр қырын сипаттайды және көбіне зерттеулерде қолданылады. HOMA-IR инсулинге төзімділікті, HOMA-β модель аясындағы секрецияны, QUICKI инсулинге сезімталдықты бағалайды. Индекстер диабеттің клиникалық диагностикалық критерийлерін алмастырмайды.
2. Параметрлерді нақтылаңыз: HOMA-IR = Глюкоза (ммоль/л) × Инсулин (мкБірл/мл) / 22,5
HOMA-β (%) = 20 × Инсулин (мкБірл/мл) / (Глюкоза (ммоль/л) − 3,5)
QUICKI = 1 / [log10(Инсулин, мкБірл/мл) + log10(Глюкоза, мг/дл)]
3. Нәтижені оқыңыз: Индекстер тек аш қарынға алынған үлгілер (8–12 сағ) үшін жарамды және инсулинотерапия, секретагогтар қабылдау, декомпенсацияланған 1 типті диабет және төмен глюкоза кезінде қолданылмайды (глюкоза ≤ 3,5 ммоль/л болғанда HOMA-β анықталмайды). Инсулиннің референстік мәндері зертхана әдісіне, ал HOMA-IR шектері популяцияға байланысты (әртүрлі зерттеулерде 2,0–3,8). Нәтиже — диагноз емес, көмірсу алмасуын дәрігермен талқылауға себеп.

### Әдіс пен формула

HOMA1 (Matthews, 1985) және QUICKI (Katz, 2000) ашқарындағы глюкоза мен инсулинге негізделген модельдер. Олар бір деректер жиынтығының әр қырын сипаттайды және көбіне зерттеулерде қолданылады. HOMA-IR инсулинге төзімділікті, HOMA-β модель аясындағы секрецияны, QUICKI инсулинге сезімталдықты бағалайды. Индекстер диабеттің клиникалық диагностикалық критерийлерін алмастырмайды.

HOMA-IR = Глюкоза (ммоль/л) × Инсулин (мкБірл/мл) / 22,5
HOMA-β (%) = 20 × Инсулин (мкБірл/мл) / (Глюкоза (ммоль/л) − 3,5)
QUICKI = 1 / [log10(Инсулин, мкБірл/мл) + log10(Глюкоза, мг/дл)]

### Шектеулер

Индекстер тек аш қарынға алынған үлгілер (8–12 сағ) үшін жарамды және инсулинотерапия, секретагогтар қабылдау, декомпенсацияланған 1 типті диабет және төмен глюкоза кезінде қолданылмайды (глюкоза ≤ 3,5 ммоль/л болғанда HOMA-β анықталмайды). Инсулиннің референстік мәндері зертхана әдісіне, ал HOMA-IR шектері популяцияға байланысты (әртүрлі зерттеулерде 2,0–3,8). Нәтиже — диагноз емес, көмірсу алмасуын дәрігермен талқылауға себеп.

### Дереккөздер

- [Matthews DR et al. Homeostasis model assessment: insulin resistance and beta-cell function from fasting plasma glucose and insulin concentrations in man. Diabetologia, 1985](https://pubmed.ncbi.nlm.nih.gov/3899825/)
- [Katz A et al. Quantitative insulin sensitivity check index: a simple, accurate method for assessing insulin sensitivity in humans. J Clin Endocrinol Metab, 2000](https://pubmed.ncbi.nlm.nih.gov/10902785/)
- [Gayoso-Diz P et al. Insulin resistance (HOMA-IR) cut-off values and the metabolic syndrome in a general adult population: effect of gender and age: EPIRCE cross-sectional study. BMC Endocr Disord, 2013](https://pubmed.ncbi.nlm.nih.gov/24131857/)

## Осы калькуляторды ендіру

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="homa-ir" locale="kk" theme="auto" />;
}
```

### JavaScript жүктеушісі

```html
<div data-nutrifit-widget="homa-ir" data-locale="kk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Тікелей iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/homa-ir?lang=kk&theme=auto"
  title="HOMA-IR калькуляторы: инсулинге төзімділік индексі" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
