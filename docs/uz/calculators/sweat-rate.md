# Terlash tezligi va regidratatsiya kalkulyatori

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/sweat-rate.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/sweat-rate.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/sweat-rate.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/sweat-rate.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/sweat-rate.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/sweat-rate.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`sweat-rate` · [NutriFit](https://nutrifit.health/uz/calculators/sweat-rate)

Terlash tezligini aniqlaydi va mashg‘ulotdan keyin suv va elektrolitlarni to‘ldirish bo‘yicha individual reja tuzadi.

### Foydalanish tartibi

1. Mashg‘ulotdan oldin tortiling: Hojatxonaga boring va mashg‘ulot boshlanishidan oldin kiyimsiz tortilib, vaznni aniq yozing.
2. Ichilgan suv miqdorini nazorat qiling: Mashg‘ulot paytida qancha ichganingizni aniq bilish uchun o‘lchovli idishdan foydalaning.
3. Marradan keyin quruq holda tortiling: Badandagi va sochlaringizdagi terni sochiq bilan to‘liq artib, so‘ng kiyimsiz tortiling.

### Usul va formula

Amerika Sport Tibbiyoti Kolleji (ACSM) uslubiga asoslangan. Mashg‘ulotdan oldin va keyin quruq tanani kiyimsiz tortish, ichilgan suyuqlik va siydik hajmini hisobga olish orqali soatlik terlash tezligi hisoblanadi.

Ter yo‘qotish (ml) = (Vazn_oldin − Vazn_keyin, g) + Ichilgan_suv(ml) − Siydik(ml); Terlash tezligi (l/soat) = (Ter yo‘qotish / Vaqt_daq) × 60 / 1000; Degidratatsiya % = ((Vazn_oldin − Vazn_keyin) / Vazn_oldin) × 100.

### Cheklovlar

Glikogen sarflanishi va nafas orqali bug‘lanishni (~100–150 g/soat) hisobga olmaydi. Shunga qaramay, amaliyotda suyuqlik tanqisligini juda aniq ko‘rsatadi.

### Manbalar

- [Sawka M.N. et al. American College of Sports Medicine position stand. Exercise and fluid replacement. Med Sci Sports Exerc, 2007;39(2):377–390](https://pubmed.ncbi.nlm.nih.gov/17277604/)
- [Thomas D.T., Erdman K.A., Burke L.M. Position of the Academy of Nutrition and Dietetics, Dietitians of Canada, and the American College of Sports Medicine: Nutrition and Athletic Performance. J Acad Nutr Diet, 2016;116(3):501–528](https://pubmed.ncbi.nlm.nih.gov/26920240/)
- [Shirreffs S.M., Sawka M.N. Fluid and electrolyte needs for training, competition, and recovery. J Sports Sci, 2011;29(Suppl 1):S39–S46](https://pubmed.ncbi.nlm.nih.gov/22150427/)

## Ushbu kalkulyatorni joylashtirish

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="sweat-rate" locale="uz" theme="auto" />;
}
```

### JavaScript yuklagichi

```html
<div data-nutrifit-widget="sweat-rate" data-locale="uz" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Oddiy iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/sweat-rate?lang=uz&theme=auto"
  title="Terlash tezligi va regidratatsiya kalkulyatori" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
