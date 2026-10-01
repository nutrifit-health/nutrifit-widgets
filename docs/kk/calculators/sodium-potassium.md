# Натрий және калий балансының калькуляторы (Na:K және тұз)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/sodium-potassium.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/sodium-potassium.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/sodium-potassium.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/sodium-potassium.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/sodium-potassium.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/sodium-potassium.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`sodium-potassium` · [NutriFit](https://nutrifit.health/kk/calculators/sodium-potassium)

Рациондағы калий мен натрийдің электролиттік теңгерімін бағалайды, ас тұзының баламасын және жүрек-қантамырлық қауіпті есептейді.

### Пайдалану реті

1. Жасырын тұзды алып тастаңыз: Натрийдің 75%-ға жуығы тұзсалғыштан емес, өңделген өнімдерден келеді: шұжықтар, ірімшіктер, чипстер, консервілер және дүкен наны.
2. Көкөністер мен жемістерден калийді арттырыңыз: Калий натрийдің бүйрек арқылы шығарылуын ынталандырады (натрийурез). Пісірілген картоп, шпинат, кептірілген өрік, үрмебұршақ және банан қосыңыз.
3. Калий тұзын қолданыңыз: Натрий мөлшері төмендетілген тұз (30% NaCl орнына KCl қолданылған) дәмді жоғалтпай қан қысымын 3–5 мм сын. бағ. төмендетуге көмектеседі.

### Әдістеме және формула

ДДСҰ-ның натрий мен калийді тұтыну жөніндегі нұсқаулықтарына (2012) және DASH кардиологиялық диетасының қағидаттарына негізделген. Na:K молярлық қатынасы 1,0-ден төмен болуы керек (оңтайлы 0,5–0,7). Заманауи адамның рационында натрий көбінесе калийден 2–3 есе асып түседі.

Na мольдері = Na (мг) / 23; K мольдері = K (мг) / 39,1; Na:K қатынасы = Na мольдері / K мольдері; Ас тұзы NaCl (г) = Na (мг) × 2,54 / 1000.

### Шектеулер

Калийдің шығарылуы бұзылған және калийді шектеуді талап ететін терминалдық бүйрек жеткіліксіздігі (СБA 4–5 кезеңі) бар науқастарға арналмаған.

### Дереккөздер

- [World Health Organization. Guideline: Sodium intake for adults and children. Geneva, 2012](https://www.who.int/publications/i/item/9789241504836)
- [World Health Organization. Guideline: Potassium intake for adults and children. Geneva, 2012](https://www.who.int/publications/i/item/9789241504829)
- [O’Donnell M. et al. Urinary sodium and potassium excretion and risk of cardiovascular events. JAMA, 2011;306(20):2229–2238](https://pubmed.ncbi.nlm.nih.gov/22110105/)

## Осы калькуляторды ендіру

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="sodium-potassium" locale="kk" theme="auto" />;
}
```

### JavaScript жүктеушісі

```html
<div data-nutrifit-widget="sodium-potassium" data-locale="kk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Тікелей iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/sodium-potassium?lang=kk&theme=auto"
  title="Натрий және калий балансының калькуляторы (Na:K және тұз)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
