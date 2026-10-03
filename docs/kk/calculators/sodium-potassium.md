# Тәуліктік рациондағы натрий мен калий

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/sodium-potassium.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/sodium-potassium.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/sodium-potassium.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/sodium-potassium.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/sodium-potassium.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/sodium-potassium.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`sodium-potassium` · [NutriFit](https://nutrifit.health/kk/calculators/sodium-potassium)

WHO ересектерге тәулігіне 2000 мг-нан аз натрий және кемінде 3510 мг калий ұсынады. Молярлық арақатынас: (Na, мг / 23) / (K, мг / 39,1). Шамамен тұз баламасы: натрий, мг × 2,5 / 1000. Арақатынас жеке қауіп санатынсыз көрсетіледі.

### Қолдану тәртібі

1. Деректерді енгізіңіз: WHO ересектерге тәулігіне 2000 мг-нан аз натрий және кемінде 3510 мг калий ұсынады. Молярлық арақатынас: (Na, мг / 23) / (K, мг / 39,1). Шамамен тұз баламасы: натрий, мг × 2,5 / 1000. Арақатынас жеке қауіп санатынсыз көрсетіледі.
2. Бағдарларды салыстырыңыз: WHO ересектерге тәулігіне 2000 мг-нан аз натрий және кемінде 3510 мг калий ұсынады. Молярлық арақатынас: (Na, мг / 23) / (K, мг / 39,1). Шамамен тұз баламасы: натрий, мг × 2,5 / 1000. Арақатынас жеке қауіп санатынсыз көрсетіледі.
3. Шектеулерді ескеріңіз: Қан не зәр талдауындағы концентрацияны емес, бір тәуліктегі тағамнан түскен мөлшерді енгізіңіз. Калийдің жалпы бағдары оның шығарылуы бұзылғанда, бүйрек ауруында немесе калийге әсер ететін дәрілерді қабылдағанда автоматты түрде қолданылмайды. Гипертензияның өзі мұнда жаңа жеке норманы анықтамайды.

### Әдіс пен формула

WHO ересектерге тәулігіне 2000 мг-нан аз натрий және кемінде 3510 мг калий ұсынады. Молярлық арақатынас: (Na, мг / 23) / (K, мг / 39,1). Шамамен тұз баламасы: натрий, мг × 2,5 / 1000. Арақатынас жеке қауіп санатынсыз көрсетіледі.

WHO ересектерге тәулігіне 2000 мг-нан аз натрий және кемінде 3510 мг калий ұсынады. Молярлық арақатынас: (Na, мг / 23) / (K, мг / 39,1). Шамамен тұз баламасы: натрий, мг × 2,5 / 1000. Арақатынас жеке қауіп санатынсыз көрсетіледі.

### Шектеулер

Қан не зәр талдауындағы концентрацияны емес, бір тәуліктегі тағамнан түскен мөлшерді енгізіңіз. Калийдің жалпы бағдары оның шығарылуы бұзылғанда, бүйрек ауруында немесе калийге әсер ететін дәрілерді қабылдағанда автоматты түрде қолданылмайды. Гипертензияның өзі мұнда жаңа жеке норманы анықтамайды.

### Дереккөздер

- [WHO. Healthy diet: sodium and potassium](https://www.who.int/news-room/fact-sheets/detail/healthy-diet)

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
  title="Тәуліктік рациондағы натрий мен калий" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
