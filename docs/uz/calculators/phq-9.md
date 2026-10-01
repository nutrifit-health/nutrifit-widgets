# Bemor salomatligi so‘rovnomasi PHQ-9 (Depressiya)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/phq-9.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/phq-9.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/phq-9.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/phq-9.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/phq-9.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/phq-9.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`phq-9` · [NutriFit](https://nutrifit.health/uz/calculators/phq-9)

DSM-5 mezonlari asosida depressiya darajasini aniqlash va birlamchi skrining qilish uchun xalqaro oltin standart.

### Foydalanish tartibi

1. So‘nggi 2 haftani yodga oling: Oxirgi 14 kun davomidagi umumiy holatingiz va har bir alomat qanchalik tez-tez bezovta qilganini baholang.
2. Barcha 9 ta savolga javob bering: Har bir holatning uchrash tezligini 'Umuman yo‘q' (0) dan 'Deyarli har kuni' (3) gacha tanlang.
3. Klinik xulosani o‘rganing: Alomatlarning og‘irlik toifasi va mutaxassislarning amaliy tavsiyalari bilan tanishing.

### Usul va formula

So‘nggi 2 hafta davomida depressiv alomatlarning uchrash tezligini 0 dan ('Umuman yo‘q') 3 gacha ('Deyarli har kuni') baholovchi 9 ta savol.

PHQ-9 umumiy bali = Barcha 9 ta savol ballari yig‘indisi (0–27). 0–4: minimal; 5–9: yengil; 10–14: o‘rtacha; 15–19: o‘rtacha og‘ir; 20–27: og‘ir depressiya.

### Cheklovlar

Ushbu skrining shifokor-psixiatr yoki psixoterapevt qabulini almashtirmaydi. 9-savolga ijobiy javob berilganda zudlik bilan shifokorga murojaat qilish zarur.

### Manbalar

- [Kroenke K. et al. The PHQ-9: validity of a brief depression severity measure. J Gen Intern Med, 2001;16(9):606–613](https://pubmed.ncbi.nlm.nih.gov/11556941/)
- [Spitzer R.L. et al. Validation and utility of a self-report version of PRIME-MD: the PHQ primary care study. JAMA, 1999;282(18):1737–1744](https://pubmed.ncbi.nlm.nih.gov/10568646/)

## Ushbu kalkulyatorni joylashtirish

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="phq-9" locale="uz" theme="auto" />;
}
```

### JavaScript yuklagichi

```html
<div data-nutrifit-widget="phq-9" data-locale="uz" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Oddiy iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/phq-9?lang=uz&theme=auto"
  title="Bemor salomatligi so‘rovnomasi PHQ-9 (Depressiya)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
