# Темір тапшылығы калькуляторы: TSAT, ферритин және Ганзони бойынша тапшылық

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/iron-deficiency.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/iron-deficiency.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/iron-deficiency.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/iron-deficiency.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/iron-deficiency.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/iron-deficiency.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`iron-deficiency` · [NutriFit](https://nutrifit.health/kk/calculators/iron-deficiency)

TSAT = темір / жалпы темір байланыстыру қабілеті × 100%. Ганцони моделі: салмақ × (15 − Hb, г/дл) × 2,4 + 35 кг және одан жоғары салмаққа 500 мг. Hb мен ферритин екеуі де таңдалған шектерден төмен болса ғана көрсетіледі.

### Қолдану тәртібі

1. Бастапқы деректерді енгізіңіз: TSAT = темір / жалпы темір байланыстыру қабілеті × 100%. Ганцони моделі: салмақ × (15 − Hb, г/дл) × 2,4 + 35 кг және одан жоғары салмаққа 500 мг. Hb мен ферритин екеуі де таңдалған шектерден төмен болса ғана көрсетіледі.
2. Параметрлерді нақтылаңыз: TSAT = темір / жалпы темір байланыстыру қабілеті × 100%. Ганцони моделі: салмақ × (15 − Hb, г/дл) × 2,4 + 35 кг және одан жоғары салмаққа 500 мг. Hb мен ферритин екеуі де таңдалған шектерден төмен болса ғана көрсетіледі.
TIBC (µmol/L) = transferrin (g/L) × 25.1. Iron: µg/dL × 0.179 = µmol/L. Hb: g/L ÷ 10 = g/dL.
3. Нәтижені оқыңыз: Бұл көрсеткіштердің сипаттамалық үйлесімдері, диагноз емес. Hb шегі: ерлерде 130 г/л, жүкті емес әйелдерде 120 г/л; WHO 2020 ферритині: 15 мкг/л, СРА > 5 мг/л болса 70 мкг/л. Ганцони мақсатты Hb, салмақ пен қорды жеке таңдауды қажет етеді; нәтиже дәрі дозасы емес.

### Әдіс пен формула

TSAT = темір / жалпы темір байланыстыру қабілеті × 100%. Ганцони моделі: салмақ × (15 − Hb, г/дл) × 2,4 + 35 кг және одан жоғары салмаққа 500 мг. Hb мен ферритин екеуі де таңдалған шектерден төмен болса ғана көрсетіледі.

TSAT = темір / жалпы темір байланыстыру қабілеті × 100%. Ганцони моделі: салмақ × (15 − Hb, г/дл) × 2,4 + 35 кг және одан жоғары салмаққа 500 мг. Hb мен ферритин екеуі де таңдалған шектерден төмен болса ғана көрсетіледі.
TIBC (µmol/L) = transferrin (g/L) × 25.1. Iron: µg/dL × 0.179 = µmol/L. Hb: g/L ÷ 10 = g/dL.

### Шектеулер

Бұл көрсеткіштердің сипаттамалық үйлесімдері, диагноз емес. Hb шегі: ерлерде 130 г/л, жүкті емес әйелдерде 120 г/л; WHO 2020 ферритині: 15 мкг/л, СРА > 5 мг/л болса 70 мкг/л. Ганцони мақсатты Hb, салмақ пен қорды жеке таңдауды қажет етеді; нәтиже дәрі дозасы емес.

### Дереккөздер

- [WHO guideline on use of ferritin concentrations to assess iron status in individuals and populations. Geneva: World Health Organization, 2020](https://www.who.int/publications/i/item/9789240000124)
- [Ganzoni AM. et al. [Intravenous iron-dextran: therapeutic and experimental possibilities]. Schweiz Med Wochenschr, 1970](https://pubmed.ncbi.nlm.nih.gov/5413918/)
- [Venofer. Summary of Product Characteristics: Ganzoni formula and iron stores](https://www.medicines.org.uk/emc/product/5911/smpc)

## Осы калькуляторды ендіру

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="iron-deficiency" locale="kk" theme="auto" />;
}
```

### JavaScript жүктеушісі

```html
<div data-nutrifit-widget="iron-deficiency" data-locale="kk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Тікелей iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/iron-deficiency?lang=kk&theme=auto"
  title="Темір тапшылығы калькуляторы: TSAT, ферритин және Ганзони бойынша тапшылық" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
