# Голландтық тамақтану мінез-құлқы сұрақтамасы (DEBQ)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/debq.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/debq.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/debq.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/debq.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/debq.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/debq.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`debq` · [NutriFit](https://nutrifit.health/kk/calculators/debq)

Тамақтану мінез-құлқының жетекші үш түрін (шектеулі, эмоциогенді және экстерналды) анықтауға арналған классикалық валидацияланған психологиялық құрал.

### Пайдалану реті

1. Шынайы жауап беріңіз: Соңғы бірнеше айдағы әдеттегі мінез-құлқыңызды барынша дәл сипаттайтын нұсқаны таңдаңыз.
2. Ұзақ ойланбаңыз: Алғашқы спонтанды реакция көбінесе ең дәл және шынайы көрсеткіш болып табылады.
3. Үш субшкала бойынша нәтижелерді зерттеңіз: Балдарыңызды нормативтік шектермен салыстырып, сарапшылық кеңестермен танысыңыз.

### Әдістеме және формула

Сауалнама Лайкерт шкаласы бойынша 1-ден 5-ке дейін бағаланатын 33 тұжырымнан тұрады: когнитивті шектеу (10 сұрақ), эмоциогенді артық тамақтану (13 сұрақ) және экстерналды ынталандыру (10 сұрақ).

Әр субшкаланың балы = Сәйкес сұрақтар жауаптарының орташа арифметикалық мәні (1,0-ден 5,0-ге дейін). Шектеулі: қалыпты ~2.4; Эмоциогенді: қалыпты ~1.8; Экстерналды: қалыпты ~2.7.

### Шектеулер

Сауалнама өзін-өзі психологиялық бағалау құралы болып табылады және клиникалық диагноз емес. Айқын дистресс кезінде тамақтану бұзылыстары маманына жүгініңіз.

### Дереккөздер

- [Van Strien T. et al. The Dutch Eating Behavior Questionnaire (DEBQ) for assessment of restrained, emotional, and external eating behavior. Int J Eat Disord, 1986;5(2):295–315](https://doi.org/10.1002/1098-108X(198602)5:2<295::AID-EAT2260050209>3.0.CO;2-T)
- [Wardle J. Eating style: a validation study of the Dutch Eating Behaviour Questionnaire. J Psychosom Res, 1987;31(2):161–169](https://pubmed.ncbi.nlm.nih.gov/3585818/)

## Осы калькуляторды ендіру

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="debq" locale="kk" theme="auto" />;
}
```

### JavaScript жүктеушісі

```html
<div data-nutrifit-widget="debq" data-locale="kk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Тікелей iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/debq?lang=kk&theme=auto"
  title="Голландтық тамақтану мінез-құлқы сұрақтамасы (DEBQ)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
