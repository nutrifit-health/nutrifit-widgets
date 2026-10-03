# VO2max далалық бағалаулары

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/vo2max.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/vo2max.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/vo2max.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/vo2max.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/vo2max.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/vo2max.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`vo2max` · [NutriFit](https://nutrifit.health/kk/calculators/vo2max)

Купер: 12 минуттағы қашықтық. Rockport: 1 мильді (1609,344 м) жылдам жаяу жүру, уақыт пен соңғы жүрек соғу жиілігі; бастапқы тексеру 30–69 жастағы дені сау ересектерде. Uth: 15,3 × ЖСЖмакс / ЖСЖтыныштық; 21–51 жастағы жақсы жаттыққан ерлерде тексерілген.

### Қолдану тәртібі

1. Бастапқы деректерді енгізіңіз: Купер: 12 минуттағы қашықтық. Rockport: 1 мильді (1609,344 м) жылдам жаяу жүру, уақыт пен соңғы жүрек соғу жиілігі; бастапқы тексеру 30–69 жастағы дені сау ересектерде. Uth: 15,3 × ЖСЖмакс / ЖСЖтыныштық; 21–51 жастағы жақсы жаттыққан ерлерде тексерілген.
2. Параметрлерді нақтылаңыз: Купер: 12 минуттағы қашықтық. Rockport: 1 мильді (1609,344 м) жылдам жаяу жүру, уақыт пен соңғы жүрек соғу жиілігі; бастапқы тексеру 30–69 жастағы дені сау ересектерде. Uth: 15,3 × ЖСЖмакс / ЖСЖтыныштық; 21–51 жастағы жақсы жаттыққан ерлерде тексерілген.
3. Нәтижені оқыңыз: Бұл газ алмасуды өлшеу емес, жанама бағалау. Uth мұнда әйелдерге, Rockport көрсетілген жас шегінен тыс қолданылмайды. Жас бойынша ең жоғары ЖСЖ болжамы белгісіздікті арттырады. Теріс бағалар, дайындық санаттары мен 5/10 км қарқынының болжамы берілмейді.

### Әдіс пен формула

Купер: 12 минуттағы қашықтық. Rockport: 1 мильді (1609,344 м) жылдам жаяу жүру, уақыт пен соңғы жүрек соғу жиілігі; бастапқы тексеру 30–69 жастағы дені сау ересектерде. Uth: 15,3 × ЖСЖмакс / ЖСЖтыныштық; 21–51 жастағы жақсы жаттыққан ерлерде тексерілген.

Купер: 12 минуттағы қашықтық. Rockport: 1 мильді (1609,344 м) жылдам жаяу жүру, уақыт пен соңғы жүрек соғу жиілігі; бастапқы тексеру 30–69 жастағы дені сау ересектерде. Uth: 15,3 × ЖСЖмакс / ЖСЖтыныштық; 21–51 жастағы жақсы жаттыққан ерлерде тексерілген.

### Шектеулер

Бұл газ алмасуды өлшеу емес, жанама бағалау. Uth мұнда әйелдерге, Rockport көрсетілген жас шегінен тыс қолданылмайды. Жас бойынша ең жоғары ЖСЖ болжамы белгісіздікті арттырады. Теріс бағалар, дайындық санаттары мен 5/10 км қарқынының болжамы берілмейді.

### Дереккөздер

- [Cooper KH. et al. A means of assessing maximal oxygen intake. Correlation between field and treadmill testing. JAMA, 1968](https://pubmed.ncbi.nlm.nih.gov/5694044/)
- [Kline GM et al. Estimation of VO2max from a one-mile track walk, gender, age, and body weight. Med Sci Sports Exerc, 1987](https://pubmed.ncbi.nlm.nih.gov/3600239/)
- [Uth N et al. Estimation of VO2max from the ratio between HRmax and HRrest--the Heart Rate Ratio Method. Eur J Appl Physiol, 2004](https://pubmed.ncbi.nlm.nih.gov/14624296/)

## Осы калькуляторды ендіру

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="vo2max" locale="kk" theme="auto" />;
}
```

### JavaScript жүктеушісі

```html
<div data-nutrifit-widget="vo2max" data-locale="kk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Тікелей iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/vo2max?lang=kk&theme=auto"
  title="VO2max далалық бағалаулары" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
