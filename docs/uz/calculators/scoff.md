# Ovqatlanish xulq-atvori buzilishlari skriningi SCOFF

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/scoff.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/scoff.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/scoff.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/scoff.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/scoff.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/scoff.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`scoff` · [NutriFit](https://nutrifit.health/uz/calculators/scoff)

Anoreksiya va bulimiya kabi ovqatlanish buzilishlari xavfini birlamchi aniqlash uchun dunyoda eʼtirof etilgan 5 savolli klinik skrining.

### Foydalanish tartibi

1. Barcha 5 ta savolni diqqat bilan o‘qing: So‘nggi oylardagi taomlanish odatlaringiz va tana vazningizga munosabatingizni tahlil qiling.
2. Samimiy 'Ha' yoki 'Yo‘q' deb javob bering: O‘z holatingizni xaspo‘shlamasdan va kamaytirmasdan ochiq javob bering.
3. Skrining xulosasini bilib oling: Klinik xavf mavjudligini tekshiring va shifokor tavsiyalari bilan tanishing.

### Usul va formula

Asosiy klinik mezonlarni aks ettiruvchi 5 ta yopiq savoldan (Ha/Yo‘q) iborat: sunʼiy qayt qilish, nazoratni yo‘qotish, vazn yo‘qotish, tana buzilishi va ovqatga bog‘lanib qolish.

SCOFF umumiy bali = Tasdiqlovchi javoblar soni (0–5). Natija ≥ 2 bo‘lganda skrining ijobiy hisoblanadi va OXB xavfi yuqori deb baholanadi.

### Cheklovlar

SCOFF testi faqatgina birlamchi skrining vositasi hisoblanadi. U yakuniy tibbiy tashxis qo‘ymaydi va mutaxassis konsultatsiyasini talab qiladi.

### Manbalar

- [Morgan J.F. et al. The SCOFF questionnaire: assessment of a new screening tool for eating disorders. BMJ, 1999;319(7223):1467–1468](https://pubmed.ncbi.nlm.nih.gov/10582927/)
- [Luck A.J. et al. The SCOFF questionnaire and clinical interview for detecting eating disorders. BMJ, 2002;325(7367):755–756](https://pubmed.ncbi.nlm.nih.gov/12364305/)

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
