# ISI ұйқысыздық индексі

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/isi.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/isi.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/isi.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/isi.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/isi.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/isi.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`isi` · [NutriFit](https://nutrifit.health/kk/calculators/isi)

Ұйқысыздық белгілерінің сипатын, ауырлығын және күндізгі белсенділікке әсерін бағалауға арналған 7 сұрақтық қысқа клиникалық құрал.

### Пайдалану реті

1. Соңғы 2 аптаны еске түсіріңіз: Соңғы 14 күндегі әдеттегі түнгі ұйқыңызды және күндізгі сергектік деңгейіңізді бағалаңыз.
2. 7 сұраққа жауап беріңіз: Әрбір мәселені 0 («Жоқ»)-ден 4 («Өте қатты көрінеді»)-ке дейін бағалаңыз.
3. Нәтижелермен танысыңыз: Ұйқысыздықтың ауырлық дәрежесін біліп, сапалы ұйқы бойынша кеңестерді қолданыңыз.

### Әдістеме және формула

Әрқайсысы 0-ден 4 ұпайға дейін бағаланатын 7 сұрақ. Жалпы ұпай 0-ден 28-ге дейін болып, ұйықтап кету, түнгі оянулар мен ерте оянуды қамтиды.

Жалпы ISI балы = Барлық 7 сұрақтың ұпайлар қосындысы (0–28). 0–7: ұйқысыздық жоқ; 8–14: шекті (жеңіл); 15–21: орташа клиникалық; 22–28: ауыр клиникалық ұйқысыздық.

### Шектеулер

Индекс скринингке арналған. Ұйқыдағы апноэ немесе тынымсыз аяқтар синдромына күдік болғанда полисомнография қажет.

### Дереккөздер

- [Morin C.M. et al. The Insomnia Severity Index: psychometric indicators to detect insomnia cases. Sleep, 2011;34(5):601–608](https://pubmed.ncbi.nlm.nih.gov/21532953/)
- [Bastien C.H. et al. Validation of the Insomnia Severity Index as an outcome measure. Sleep Med, 2001;2(4):297–307](https://pubmed.ncbi.nlm.nih.gov/11438246/)

## Осы калькуляторды ендіру

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="isi" locale="kk" theme="auto" />;
}
```

### JavaScript жүктеушісі

```html
<div data-nutrifit-widget="isi" data-locale="kk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Тікелей iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/isi?lang=kk&theme=auto"
  title="ISI ұйқысыздық индексі" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
