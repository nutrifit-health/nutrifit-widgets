# PhenoAge биологиялық жас калькуляторы (Levine)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/phenoage.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/phenoage.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/phenoage.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/phenoage.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/phenoage.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/phenoage.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`phenoage` · [NutriFit](https://nutrifit.health/kk/calculators/phenoage)

Levine 2018 моделі тоғыз биомаркер мен күнтізбелік жасты біріктіреді. PhenoAge — NHANES моделіндегі популяциялық қауіптің жас баламасы; ол мүшелердің жасын не жеке өмір ұзақтығын анықтамайды. Жас айырмасы — арифметикалық азайту, қартаю жылдамдығы немесе PhenoAgeAccel статистикалық қалдығы емес.

### Қолдану тәртібі

1. Бастапқы деректерді енгізіңіз: Levine 2018 моделі тоғыз биомаркер мен күнтізбелік жасты біріктіреді. PhenoAge — NHANES моделіндегі популяциялық қауіптің жас баламасы; ол мүшелердің жасын не жеке өмір ұзақтығын анықтамайды. Жас айырмасы — арифметикалық азайту, қартаю жылдамдығы немесе PhenoAgeAccel статистикалық қалдығы емес.
2. Параметрлерді нақтылаңыз: xb = −19.907 − 0.0336·A + 0.0095·C + 0.1953·G + 0.0954·ln(CRP) − 0.012·L + 0.0268·M + 0.3306·R + 0.00188·P + 0.0554·W + 0.0804·a
H = exp(xb) × (exp(120 × 0.0076927) − 1) / 0.0076927
PhenoAge = 141.50225 + ln(0.00553 × H) / 0.09165
A — альбумин, г/л; C — креатинин, мкмоль/л; G — глюкоза, ммоль/л; CRP — мг/дл (енгізілген мг/л ÷ 10); L — лимфоциттер, %; M — MCV, фл; R — RDW, %; P — сілтілі фосфатаза, Б/л; W — лейкоциттер, 10⁹/л; a — жас, жыл.
3. Нәтижені оқыңыз: 20–84 жасқа арналған зерттеу моделі. Жедел ауру биомаркерлер мен нәтижені өзгертеді. Бұл диагноз, өмір ұзақтығы немесе жасарудың дәлелі емес. CRP өлшенген және оң болуы керек; анықтау шегінен төмен нәтижені нөлмен алмастыруға болмайды.

### Әдіс пен формула

Levine 2018 моделі тоғыз биомаркер мен күнтізбелік жасты біріктіреді. PhenoAge — NHANES моделіндегі популяциялық қауіптің жас баламасы; ол мүшелердің жасын не жеке өмір ұзақтығын анықтамайды. Жас айырмасы — арифметикалық азайту, қартаю жылдамдығы немесе PhenoAgeAccel статистикалық қалдығы емес.

xb = −19.907 − 0.0336·A + 0.0095·C + 0.1953·G + 0.0954·ln(CRP) − 0.012·L + 0.0268·M + 0.3306·R + 0.00188·P + 0.0554·W + 0.0804·a
H = exp(xb) × (exp(120 × 0.0076927) − 1) / 0.0076927
PhenoAge = 141.50225 + ln(0.00553 × H) / 0.09165
A — альбумин, г/л; C — креатинин, мкмоль/л; G — глюкоза, ммоль/л; CRP — мг/дл (енгізілген мг/л ÷ 10); L — лимфоциттер, %; M — MCV, фл; R — RDW, %; P — сілтілі фосфатаза, Б/л; W — лейкоциттер, 10⁹/л; a — жас, жыл.

### Шектеулер

20–84 жасқа арналған зерттеу моделі. Жедел ауру биомаркерлер мен нәтижені өзгертеді. Бұл диагноз, өмір ұзақтығы немесе жасарудың дәлелі емес. CRP өлшенген және оң болуы керек; анықтау шегінен төмен нәтижені нөлмен алмастыруға болмайды.

### Дереккөздер

- [Levine ME et al. An epigenetic biomarker of aging for lifespan and healthspan. Aging (Albany NY), 2018](https://pubmed.ncbi.nlm.nih.gov/29676998/)
- [Liu Z et al. A new aging measure captures morbidity and mortality risk across diverse subpopulations from NHANES IV: A cohort study. PLoS Med, 2018](https://pubmed.ncbi.nlm.nih.gov/30596641/)

## Осы калькуляторды ендіру

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="phenoage" locale="kk" theme="auto" />;
}
```

### JavaScript жүктеушісі

```html
<div data-nutrifit-widget="phenoage" data-locale="kk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Тікелей iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/phenoage?lang=kk&theme=auto"
  title="PhenoAge биологиялық жас калькуляторы (Levine)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
