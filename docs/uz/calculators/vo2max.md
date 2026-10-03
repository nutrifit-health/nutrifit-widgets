# VO2max ning dala sharoitidagi baholari

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/vo2max.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/vo2max.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/vo2max.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/vo2max.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/vo2max.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/vo2max.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`vo2max` · [NutriFit](https://nutrifit.health/uz/calculators/vo2max)

Cooper: 12 daqiqada bosib o‘tilgan masofa. Rockport: 1 mil (1609,344 m) tez yurish, vaqt va yakuniy yurak urishi; dastlab 30–69 yoshdagi sog‘lom kattalarda tekshirilgan. Uth: 15,3 × YUmax / YUtinch; 21–51 yoshdagi yaxshi chiniqqan erkaklarda tekshirilgan.

### Foydalanish tartibi

1. Boshlang‘ich ma’lumotlarni kiriting: Cooper: 12 daqiqada bosib o‘tilgan masofa. Rockport: 1 mil (1609,344 m) tez yurish, vaqt va yakuniy yurak urishi; dastlab 30–69 yoshdagi sog‘lom kattalarda tekshirilgan. Uth: 15,3 × YUmax / YUtinch; 21–51 yoshdagi yaxshi chiniqqan erkaklarda tekshirilgan.
2. Parametrlarni aniqlashtiring: Cooper: 12 daqiqada bosib o‘tilgan masofa. Rockport: 1 mil (1609,344 m) tez yurish, vaqt va yakuniy yurak urishi; dastlab 30–69 yoshdagi sog‘lom kattalarda tekshirilgan. Uth: 15,3 × YUmax / YUtinch; 21–51 yoshdagi yaxshi chiniqqan erkaklarda tekshirilgan.
3. Natijani o‘qing: Bular gaz almashinuvini o‘lchash emas, bilvosita baholar. Uth bu yerda ayollarga, Rockport ko‘rsatilgan yosh chegarasidan tashqariga tatbiq etilmaydi. Yoshga asoslangan maksimal yurak urishi prognozi noaniqlikni oshiradi. Manfiy baho, tayyorgarlik toifalari va 5/10 km sur’ati prognozi berilmaydi.

### Usul va formula

Cooper: 12 daqiqada bosib o‘tilgan masofa. Rockport: 1 mil (1609,344 m) tez yurish, vaqt va yakuniy yurak urishi; dastlab 30–69 yoshdagi sog‘lom kattalarda tekshirilgan. Uth: 15,3 × YUmax / YUtinch; 21–51 yoshdagi yaxshi chiniqqan erkaklarda tekshirilgan.

Cooper: 12 daqiqada bosib o‘tilgan masofa. Rockport: 1 mil (1609,344 m) tez yurish, vaqt va yakuniy yurak urishi; dastlab 30–69 yoshdagi sog‘lom kattalarda tekshirilgan. Uth: 15,3 × YUmax / YUtinch; 21–51 yoshdagi yaxshi chiniqqan erkaklarda tekshirilgan.

### Cheklovlar

Bular gaz almashinuvini o‘lchash emas, bilvosita baholar. Uth bu yerda ayollarga, Rockport ko‘rsatilgan yosh chegarasidan tashqariga tatbiq etilmaydi. Yoshga asoslangan maksimal yurak urishi prognozi noaniqlikni oshiradi. Manfiy baho, tayyorgarlik toifalari va 5/10 km sur’ati prognozi berilmaydi.

### Manbalar

- [Cooper KH. et al. A means of assessing maximal oxygen intake. Correlation between field and treadmill testing. JAMA, 1968](https://pubmed.ncbi.nlm.nih.gov/5694044/)
- [Kline GM et al. Estimation of VO2max from a one-mile track walk, gender, age, and body weight. Med Sci Sports Exerc, 1987](https://pubmed.ncbi.nlm.nih.gov/3600239/)
- [Uth N et al. Estimation of VO2max from the ratio between HRmax and HRrest--the Heart Rate Ratio Method. Eur J Appl Physiol, 2004](https://pubmed.ncbi.nlm.nih.gov/14624296/)

## Ushbu kalkulyatorni joylashtirish

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="vo2max" locale="uz" theme="auto" />;
}
```

### JavaScript yuklagichi

```html
<div data-nutrifit-widget="vo2max" data-locale="uz" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Oddiy iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/vo2max?lang=uz&theme=auto"
  title="VO2max ning dala sharoitidagi baholari" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
