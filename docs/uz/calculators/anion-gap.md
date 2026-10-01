# Anion bo‘shlig‘i va delta-nisbati kalkulyatori

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/anion-gap.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/anion-gap.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/anion-gap.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/anion-gap.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/anion-gap.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/anion-gap.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`anion-gap` · [NutriFit](https://nutrifit.health/uz/calculators/anion-gap)

Elektrolitlar balansi va kislota-ishqor holatini (KShH), yashirin metabolik asidoz va alkalozlarni aniqlaydi.

### Foydalanish tartibi

1. Elektrolitlar tahlilini oling: Qon biokimyosidan natriy, xlorid, bikarbonat (yoki umumiy CO2) va albumin qiymatlarini oling.
2. Qiymatlarni kiriting: Qiymatlarni tegishli maydonlarga kiriting.
3. Buzilish turini aniqlang: Kalkulyator oddiy yoki aralash asidozni aniqlab beradi.

### Usul va formula

Klassik Gamblegram tenglamasiga va Figge-Jabor-Kazda albumin tuzatishiga asoslangan. Kuchli kislotalar va intoksikatsiyalarni aniqlaydi.

Anion bo‘shlig‘i (AG) = [Na+] − ([Cl−] + [HCO3−]); Albumin bo‘yicha tuzatilgan AG = AG + 2.5 × (40 − Albumin g/l) / 10; Delta nisbati = (Tuzatilgan AG − 12) / (24 − HCO3−).

### Cheklovlar

Natijalar qon gazlari tahlili (KShH), laktat va ketonlar bilan birgalikda shifokor tomonidan talqin qilinishi kerak.

### Manbalar

- [Kraut J.A., Madias N.E. Serum anion gap: its uses and limitations in clinical medicine. Clin J Am Soc Nephrol, 2007;2(1):162–174](https://pubmed.ncbi.nlm.nih.gov/17699401/)
- [Figge J., Jabor A., Kazda A., Fencl V. Anion gap and hypoalbuminemia. Crit Care Med, 1998;26(11):1807–1810](https://pubmed.ncbi.nlm.nih.gov/9824071/)
- [Berend K., de Vries A.P., Gans R.O. Physiological approach to assessment of acid-base disturbances. N Engl J Med, 2014;371(15):1434–1445](https://pubmed.ncbi.nlm.nih.gov/25295502/)

## Ushbu kalkulyatorni joylashtirish

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="anion-gap" locale="uz" theme="auto" />;
}
```

### JavaScript yuklagichi

```html
<div data-nutrifit-widget="anion-gap" data-locale="uz" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Oddiy iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/anion-gap?lang=uz&theme=auto"
  title="Anion bo‘shlig‘i va delta-nisbati kalkulyatori" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
