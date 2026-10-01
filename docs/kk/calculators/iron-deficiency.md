# Темір тапшылығы калькуляторы: TSAT, ферритин және Ганзони бойынша тапшылық

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/iron-deficiency.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/iron-deficiency.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/iron-deficiency.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/iron-deficiency.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/iron-deficiency.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/iron-deficiency.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`iron-deficiency` · [NutriFit](https://nutrifit.health/kk/calculators/iron-deficiency)

TSAT, СРА ескерілген ферритин шегі және Ганзони 1970 формуласы бойынша арифметикалық бағалау.

### Пайдалану реті

1. Талдауларды таңертең тапсырыңыз: Сарысу темірі тәулік бойы өзгеріп отырады. Таңертең аш қарынға тапсырыңыз.
2. Ферритинді СРА-мен бірге бағалаңыз: Ферритин — өткір фазалы ақуыз. Қабыну кезінде (СРА > 5 мг/л) ол жалған жоғары болуы мүмкін.
3. TSAT есептеңіз: TSAT < 20 % темірдің функционалдық немесе абсолютті тапшылығын растайды.

### Әдістеме және формула

TSAT — сарысу темірінің ЖТБҚ-ға қатынасы. ЖТБҚ орнына трансферрин өлшенсе, ЖТБҚ (мкмоль/л) ≈ Трансферрин (г/л) × 25,0 есебі қолданылады. WHO 2020 ферритин шегі: қабынусыз 15 мкг/л, СРА > 5 мг/л кезінде 70 мкг/л.

TSAT (%) = Сарысу темірі / ЖТБҚ × 100
ЖТБҚ (мкмоль/л) ≈ Трансферрин (г/л) × 25,0
Темір тапшылығы (мг) = Салмақ (кг) × (Мақсатты Hb − Нақты Hb, г/дл) × 2,4 + Депо (салмақ ≥ 35 кг кезінде 500 мг).

### Шектеулер

Жүктіліктен тыс ересектерге арналған. СРА енгізіңіз; Ганзони формуласы нақты дәрі дозасы емес, арифметикалық тапшылықты көрсетеді.

### Дереккөздер

- [WHO guideline on use of ferritin concentrations to assess iron status in individuals and populations. Geneva: World Health Organization, 2020](https://www.who.int/publications/i/item/9789240000124)
- [Ganzoni A.M. Intravenous iron-dextran: therapeutic and experimental possibilities. Schweiz Med Wochenschr, 1970;100(7):301–303](https://pubmed.ncbi.nlm.nih.gov/5413918/)
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
