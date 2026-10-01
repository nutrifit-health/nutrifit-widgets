# Омега-3 калькуляторы (EPA + DHA мөлшері және индексі)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/omega-3.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/omega-3.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/omega-3.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/omega-3.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/omega-3.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/omega-3.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`omega-3` · [NutriFit](https://nutrifit.health/kk/calculators/omega-3)

Нақты клиникалық мақсаттар мен өмір салтына сәйкес эйкозапентаен (EPA) және докозагексаен (DHA) қышқылдарының оңтайлы тәуліктік мөлшерін анықтайды.

### Пайдалану реті

1. Капсуланың құрамына қараңыз (EPA + DHA): «1000 мг балық майы» жазуы көбінесе бар болғаны 300 мг EPA+DHA қамтиды. Жапсырмадағы EPA және DHA миллиграмдарын қосыңыз.
2. Дұрыс пішінді таңдаңыз (rTG немесе TG): Қайта этерификацияланған триглицеридтер (rTG) арзан синтетикалық этил эфирлерімен (EE) салыстырғанда жоғары биожетімділікке ие.
3. Тотығу индексін тексеріңіз (TOTOX): Сапалы балық майының TOTOX индексі < 26 және IFOS сертификаты болады. Одан бұзылған балық иісі шықпауы тиіс.

### Әдістеме және формула

GOED, Американдық жүрек қауымдастығы (AHA) және ISSFAL клиникалық нұсқаулықтарына негізделген. Эритроциттер мембранасы Омега-3 индексінің мақсатты деңгейін (> 8%) ескереді.

Базалық денсаулық: 500 мг/тәулік; Кардиопротекция: 1000 мг/тәулік; Гипертриглицеридемия: 2000–4000 мг/тәулік; Жүктілік: 600 мг (DHA басым); Депрессия: 1000–2000 мг (EPA:DHA ≥ 2:1); Спорт: 1500–2000 мг.

### Шектеулер

Тәулігіне 3000–4000 мг-нан астам EPA+DHA қабылдау антиагреганттық әсерге (қанды сұйылту) байланысты коагулограмманы бақылауды талап етеді.

### Дереккөздер

- [Harris W.S., Von Schacky C. The Omega-3 Index: a new risk factor for death from coronary heart disease? Prev Med, 2004;39(1):212–220](https://pubmed.ncbi.nlm.nih.gov/15207989/)
- [Global Organization for EPA and DHA Omega-3s (GOED). Clinical Practice Recommendations for EPA and DHA Omega-3 Intake, 2022](https://goedomega3.com/intake-recommendations)
- [Guu T.W. et al. International Society for Nutritional Psychiatry Research Practice Guidelines for Omega-3 Fatty Acids in the Treatment of Major Depressive Disorder. Psychother Psychosom, 2019;88(5):263–273](https://pubmed.ncbi.nlm.nih.gov/31480072/)

## Осы калькуляторды ендіру

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="omega-3" locale="kk" theme="auto" />;
}
```

### JavaScript жүктеушісі

```html
<div data-nutrifit-widget="omega-3" data-locale="kk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Тікелей iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/omega-3?lang=kk&theme=auto"
  title="Омега-3 калькуляторы (EPA + DHA мөлшері және индексі)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
