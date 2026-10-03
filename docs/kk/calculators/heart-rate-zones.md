# Жүрек соғу резерві бойынша аймақтар

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/heart-rate-zones.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/heart-rate-zones.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/heart-rate-zones.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/heart-rate-zones.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/heart-rate-zones.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/heart-rate-zones.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`heart-rate-zones` · [NutriFit](https://nutrifit.health/kk/calculators/heart-rate-zones)

Мақсатты ЖСЖ = тыныштық ЖСЖ + үлес × (ең жоғары ЖСЖ − тыныштық ЖСЖ). Бес жолақ таңдалған: резервтің 50–60, 60–70, 70–80, 80–90 және 90–100%.

### Қолдану тәртібі

1. Бастапқы деректерді енгізіңіз: Мақсатты ЖСЖ = тыныштық ЖСЖ + үлес × (ең жоғары ЖСЖ − тыныштық ЖСЖ). Бес жолақ таңдалған: резервтің 50–60, 60–70, 70–80, 80–90 және 90–100%.
2. Параметрлерді нақтылаңыз: ЖСЖ max (Tanaka) = 208 − 0,7 × Жас; HRR = ЖСЖ max − ЖСЖ тыныштық; Мақсатты пульс = ЖСЖ тыныштық + (% қарқындылық × HRR). Haskell формуласы: ЖСЖ max = 220 − Жас.
3. Нәтижені оқыңыз: Бұл таңдалған схема, жеке өлшенген аэробтық және анаэробтық шектер емес. Жас бойынша ең жоғары ЖСЖ — болжам, физиологиялық шек емес; резерв оң болуы қажет.

### Әдіс пен формула

Мақсатты ЖСЖ = тыныштық ЖСЖ + үлес × (ең жоғары ЖСЖ − тыныштық ЖСЖ). Бес жолақ таңдалған: резервтің 50–60, 60–70, 70–80, 80–90 және 90–100%.

ЖСЖ max (Tanaka) = 208 − 0,7 × Жас; HRR = ЖСЖ max − ЖСЖ тыныштық; Мақсатты пульс = ЖСЖ тыныштық + (% қарқындылық × HRR). Haskell формуласы: ЖСЖ max = 220 − Жас.

### Шектеулер

Бұл таңдалған схема, жеке өлшенген аэробтық және анаэробтық шектер емес. Жас бойынша ең жоғары ЖСЖ — болжам, физиологиялық шек емес; резерв оң болуы қажет.

### Дереккөздер

- [Tanaka H et al. Age-predicted maximal heart rate revisited. J Am Coll Cardiol, 2001](https://pubmed.ncbi.nlm.nih.gov/11153730/)
- [KARVONEN MJ et al. The effects of training on heart rate; a longitudinal study. Ann Med Exp Biol Fenn, 1957](https://pubmed.ncbi.nlm.nih.gov/13470504/)
- [American College of Sports Medicine. ACSM’s Guidelines for Exercise Testing and Prescription. 11th ed. Wolters Kluwer, 2021](https://www.acsm.org/education-resources/books/guidelines-exercise-testing-prescription)

## Осы калькуляторды ендіру

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="heart-rate-zones" locale="kk" theme="auto" />;
}
```

### JavaScript жүктеушісі

```html
<div data-nutrifit-widget="heart-rate-zones" data-locale="kk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Тікелей iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/heart-rate-zones?lang=kk&theme=auto"
  title="Жүрек соғу резерві бойынша аймақтар" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
