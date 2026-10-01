# Salomatlik va ovqatlanish balansi g'ildiragi

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/health-balance-wheel.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/health-balance-wheel.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/health-balance-wheel.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/health-balance-wheel.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/health-balance-wheel.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/health-balance-wheel.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`health-balance-wheel` · [NutriFit](https://nutrifit.health/uz/calculators/health-balance-wheel)

Salomatlikning 8 sohasi bo'yicha interaktiv diagramma. Libix qonuni bo'yicha tor bo'g'inlarni aniqlaydi va NutriFit vositalari bilan bog'laydi.

### Foydalanish tartibi

1. 8 shkala bo‘yicha xolis o‘z-o‘zini baholash: Har bir o‘q bo‘yicha 1 dan 10 gacha ball qo‘ying. Slayderlar ostidagi dinamik ko‘rsatmalarga tayaning: ular har bir diapazon uchun aniq sifat mezonlarini beradi.
2. Cheklovchi omilni aniqlang: Test eng past ballga ega cheklovchi omillarni aniqlaydi. Lixbix minimumi qonuniga ko‘ra aynan ular umumiy farovonlikni belgilaydi va moslashuvni bloklaydi.
3. Maqsadli mikro-odatlardan boshlang: Barcha 8 sohani birdan o‘zgartirishga urinmang. 1–2 ta tor doiraga e’tibor qarating, maxsus NutriFit kalkulyatorlarini ulang va birinchi qadamni 48 soat ichida bajaring.

### Usul va formula

Metodika turmush tarzi tibbiyoti (Lifestyle Medicine) kontseptsiyasi va Yustus fon Libixning minimum qonuniga asoslangan. Sog‘liqning 8 asosiy o‘qi (ovqatlanish to‘liqligi, energiya, gidratatsiya, uyqu, faollik, ovqatlanishda onglilik, OshQT va profilaktika) 10 ballik shkala bo‘yicha baholanadi. Integral ball umumiy salohiyatni aks ettiradi, muvozanatlilik indeksi esa baholar dispersiyasi orqali hisoblanadi va organizm tizimlarining barqarorlik darajasini ko‘rsatadi.

Umumiy ball = (Σ Ballar / 8) × 10; Muvozanatlilik indeksi = max(0, 100 − SO‘Ch × 18); Tor joylar = min(Ballar) qiymati ≤ 6 bo‘lganda

### Cheklovlar

O‘z-o‘zini baholash skrining xarakteriga ega va o‘zini his qilish hamda odatlarni subyektiv qabul qilishni aks ettiradi. U kompleks laboratoriya diagnostikasi va shifokor ko‘rigini almashtirmaydi, ammo turmush tarzini o‘zgartirishda ustuvorliklarni belgilashga yordam beradi.

### Manbalar

- [Liebig J. Die organische Chemie in ihrer Anwendung auf Agricultur und Physiologie. Vieweg, Braunschweig, 1840 (Закон минимума Либиха)](https://archive.org/details/dieorganischech01liebgoog)
- [American College of Lifestyle Medicine (ACLM). Standards and Core Competencies for Lifestyle Medicine, 2022](https://lifestylemedicine.org/)
- [Katz D.L. et al. Lifestyle Medicine: The Foundation of Health Care. Am J Prev Med, 2018;54(5):737–742](https://pubmed.ncbi.nlm.nih.gov/29571948/)

## Ushbu kalkulyatorni joylashtirish

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="health-balance-wheel" locale="uz" theme="auto" />;
}
```

### JavaScript yuklagichi

```html
<div data-nutrifit-widget="health-balance-wheel" data-locale="uz" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Oddiy iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/health-balance-wheel?lang=uz&theme=auto"
  title="Salomatlik va ovqatlanish balansi g'ildiragi" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
