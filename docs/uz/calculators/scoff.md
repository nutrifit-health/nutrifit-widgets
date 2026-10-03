# Ovqatlanish xulq-atvori buzilishlari skriningi SCOFF

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/scoff.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/scoff.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/scoff.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/scoff.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/scoff.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/scoff.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`scoff` · [NutriFit](https://nutrifit.health/uz/calculators/scoff)

Anoreksiya va bulimiya kabi ovqatlanish buzilishlari xavfini birlamchi aniqlash uchun dunyoda eʼtirof etilgan 5 savolli klinik skrining.

### Foydalanish tartibi

1. Yo‘riqnomani o‘qing: Ko‘rsatilgan davr va har bir fikrning ma’nosini hisobga oling.
2. Javoblarni tanlang: Har bir bandga mos variantni tanlab javob bering.
3. Natijani ko‘ring: Ijobiy skrining — qo‘shimcha baholash kerak

### Usul va formula

Asosiy klinik mezonlarni aks ettiruvchi 5 ta yopiq savoldan (Ha/Yo‘q) iborat: sunʼiy qayt qilish, nazoratni yo‘qotish, vazn yo‘qotish, tana buzilishi va ovqatga bog‘lanib qolish.

SCOFF umumiy bali = Tasdiqlovchi javoblar soni (0–5). Natija ≥ 2 bo‘lganda skrining ijobiy hisoblanadi va OXB xavfi yuqori deb baholanadi.

### Cheklovlar

Ma’lumot uchun berilgan natija tashxis qo‘ymaydi va davolash buyurmaydi. Tarjima axborot uchun moslashtirilgan; uning alohida psixometrik validatsiyasi tasdiqlanmagan.

### Manbalar

- [Morgan JF et al. The SCOFF questionnaire: assessment of a new screening tool for eating disorders. BMJ, 1999](https://pubmed.ncbi.nlm.nih.gov/10582927/)
- [Luck AJ et al. The SCOFF questionnaire and clinical interview for eating disorders in general practice: comparative study. BMJ, 2002](https://pubmed.ncbi.nlm.nih.gov/12364305/)

## Ushbu kalkulyatorni joylashtirish

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="scoff" locale="uz" theme="auto" />;
}
```

### JavaScript yuklagichi

```html
<div data-nutrifit-widget="scoff" data-locale="uz" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Oddiy iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/scoff?lang=uz&theme=auto"
  title="Ovqatlanish xulq-atvori buzilishlari skriningi SCOFF" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
