# IES-2 интуитивті тамақтану шкаласы

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/ies-2.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/ies-2.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/ies-2.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/ies-2.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/ies-2.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/ies-2.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`ies-2` · [NutriFit](https://nutrifit.health/kk/calculators/ies-2)

Трейси Тилк әзірлеген (23 сұрақ), тағаммен және өз денеңізбен интуитивті әрі салауатты қарым-қатынасты бағалайтын ғылыми шкала.

### Пайдалану реті

1. Тағамға деген әдеттегі көзқарасыңызды бағалаңыз: Соңғы айлардағы шынайы сезімдеріңіз бен әдеттеріңізге сүйене отырып жауап беріңіз.
2. 1-ден 5-ке дейінгі келісу дәрежесін таңдаңыз: 1 — мүлде келіспеймін, 5 — толық келісемін.
3. 4 компонент бойынша бейініңізді қараңыз: Ұпайы 3,0-ден төмен субшкалаларға назар аударыңыз — бұл дамытуды қажет ететін тұстар.

### Әдістеме және формула

5 балдық Лайкерт шкаласы бойынша бағаланатын 23 тұжырым. 4 субшкаланы қамтиды: сөзсіз рұқсат (UPE), физикалық себептермен тамақтану (EPR), аштық/тоқтыққа сүйену (RHSC) және тағам таңдауының үйлесімділігі (B-FCC).

Жалпы IES-2 балы = Барлық 23 сұрақтың орташа арифметикалық мәні (1,0-ден 5,0-ге дейін). 3,5-тен жоғары балл интуитивті тамақтану дағдысын білдіреді.

### Шектеулер

Шкала тамақтанудың психологиялық бейінін бағалайды. Клиникалық ТББ болғанда сауығу арнайы маманның бақылауымен өтуі тиіс.

### Дереккөздер

- [Tylka T.L., Kroon Van Diest A.M. The Intuitive Eating Scale-2: item refinement and psychometric evaluation. J Couns Psychol, 2013;60(1):137–153](https://pubmed.ncbi.nlm.nih.gov/23356469/)
- [Tribole E., Resch E. Intuitive Eating: A Revolutionary Anti-Diet Approach. St. Martin’s Essentials, 2020](https://www.intuitiveeating.org/)

## Осы калькуляторды ендіру

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="ies-2" locale="kk" theme="auto" />;
}
```

### JavaScript жүктеушісі

```html
<div data-nutrifit-widget="ies-2" data-locale="kk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Тікелей iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/ies-2?lang=kk&theme=auto"
  title="IES-2 интуитивті тамақтану шкаласы" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
