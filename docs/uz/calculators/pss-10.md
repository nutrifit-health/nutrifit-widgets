# Qabul qilingan stress shkalasi PSS-10

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/pss-10.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/pss-10.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/pss-10.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/pss-10.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/pss-10.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/pss-10.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`pss-10` · [NutriFit](https://nutrifit.health/uz/calculators/pss-10)

Insonning o‘z hayotidagi vaziyatlarni oldindan aytib bo‘lmaydigan, nazorat qilib bo‘lmaydigan va ortiqcha yuklama sifatida baholashini o‘lchaydigan Sheldon Koenning klassik shkalasi.

### Foydalanish tartibi

1. Oxirgi bir oyga eʼtibor qarating: So‘nggi 30 kun davomidagi umumiy his-tuyg‘ularingiz va kechinmalaringizni tahlil qiling.
2. Javoblar tezligini tanlang: Har bir savolga 0 ('Hech qachon') dan 4 ('Juda tez-tez') gacha bo‘lgan bahoni belgilang.
3. Stress profilingizni o‘rganing: O‘z ballingiz bilan tanishing va asab tizimini tiklash bo‘yicha tavsiyalarni ko‘rib chiqing.

### Usul va formula

0 dan 4 gacha bo‘lgan 5 ta javob variantiga ega 10 ta savol. 4, 5, 7 va 8-savollar shaxsiy resurslar va chidamlilikni baholash uchun teskari hisoblanadi.

PSS-10 umumiy bali = To‘g‘ri savollar (1, 2, 3, 6, 9, 10) + Teskari savollar (4, 5, 7, 8). 0–13: past stress; 14–26: o‘rtacha stress; 27–40: yuqori stress darajasi.

### Cheklovlar

Test hayotiy yuklamalarni subyektiv qabul qilishni aks ettiradi va tibbiy tashxis sanalmaydi. Surunkali toliqishda mutaxassisga murojaat qiling.

### Manbalar

- [Cohen S. et al. A global measure of perceived stress. J Health Soc Behav, 1983;24(4):385–396](https://pubmed.ncbi.nlm.nih.gov/6668417/)
- [Cohen S., Williamson G.M. Perceived stress in a probability sample of the United States. The Social Psychology of Health, 1988:31–67](https://psycnet.apa.org/record/1988-98838-002)

## Ushbu kalkulyatorni joylashtirish

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="pss-10" locale="uz" theme="auto" />;
}
```

### JavaScript yuklagichi

```html
<div data-nutrifit-widget="pss-10" data-locale="uz" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Oddiy iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/pss-10?lang=uz&theme=auto"
  title="Qabul qilingan stress shkalasi PSS-10" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
