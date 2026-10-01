# Natriy va kaliy balansi kalkulyatori (Na:K va tuz)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/sodium-potassium.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/sodium-potassium.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/sodium-potassium.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/sodium-potassium.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/sodium-potassium.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/sodium-potassium.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`sodium-potassium` · [NutriFit](https://nutrifit.health/uz/calculators/sodium-potassium)

Ratsiondagi kaliy va natriy elektrolitlar balansini baholaydi, osh tuzi ekvivalentini va yurak-qon tomir xavfini hisoblab chiqadi.

### Foydalanish tartibi

1. Yashirin tuzni olib tashlang: Natriyning 75% gachasi tuzdondan emas, balki qayta ishlangan mahsulotlardan tushadi: kolbasalar, pishloqlar, chipslar, konservalar va do‘kon noni.
2. Sabzavot va mevalardan kaliyni oshiring: Kaliy natriyning buyraklar orqali chiqib ketishini rag‘batlantiradi (natriyurez). Tandirda pishgan kartoshka, ismaloq, turshak, loviya va banan qo‘shing.
3. Kaliy tuzi ishlatishga o‘ting: Natriysi kamaytirilgan tuz (30% NaCl o‘rniga KCl ishlatilgan) taʼmni yo‘qotmasdan qon bosimini 3–5 mm simob ustuniga pasaytirishga yordam beradi.

### Usul va formula

JSSTning natriy va kaliy isteʼmoli bo‘yicha qo‘llanmasi (2012) va DASH kardiologik parhezi tamoyillariga asoslangan. Na:K molyar nisbati 1,0 dan kam bo‘lishi kerak (optimal 0,5–0,7). Zamonaviy inson ratsionida natriy ko‘pincha kaliydan 2–3 baravar oshib ketadi.

Na mollari = Na (mg) / 23; K mollari = K (mg) / 39,1; Na:K nisbati = Na mollari / K mollari; Osh tuzi NaCl (g) = Na (mg) × 2,54 / 1000.

### Cheklovlar

Kaliy ajralishi buzilgan va kaliyni cheklash talab etiladigan terminal buyrak yetishmovchiligi (SKK 4–5-bosqich) bo‘lgan bemorlar uchun mo‘ljallanmagan.

### Manbalar

- [World Health Organization. Guideline: Sodium intake for adults and children. Geneva, 2012](https://www.who.int/publications/i/item/9789241504836)
- [World Health Organization. Guideline: Potassium intake for adults and children. Geneva, 2012](https://www.who.int/publications/i/item/9789241504829)
- [O’Donnell M. et al. Urinary sodium and potassium excretion and risk of cardiovascular events. JAMA, 2011;306(20):2229–2238](https://pubmed.ncbi.nlm.nih.gov/22110105/)

## Ushbu kalkulyatorni joylashtirish

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="sodium-potassium" locale="uz" theme="auto" />;
}
```

### JavaScript yuklagichi

```html
<div data-nutrifit-widget="sodium-potassium" data-locale="uz" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Oddiy iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/sodium-potassium?lang=uz&theme=auto"
  title="Natriy va kaliy balansi kalkulyatori (Na:K va tuz)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
