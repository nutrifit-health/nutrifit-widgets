# Omega-3 kalkulyatori (EPK + DGK dozasi va indeksi)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/omega-3.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/omega-3.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/omega-3.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/omega-3.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/omega-3.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/omega-3.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`omega-3` · [NutriFit](https://nutrifit.health/uz/calculators/omega-3)

Aniq klinik maqsadlar va turmush tarzi uchun eykozapentaen (EPK) va dokozageksaen (DGK) kislotalarining maqbul kunlik dozasini aniqlaydi.

### Foydalanish tartibi

1. Kapsula tarkibiga qarang (EPK + DGK): '1000 mg baliq yog‘i' yozuvi ortida ko‘pincha atigi 300 mg EPK+DGK yashiringan bo‘ladi. Yorliqdagi EPK va DGK milligrammlarini qo‘shing.
2. To‘g‘ri shaklni tanlang (rTG yoki TG): Qayta eterifikatsiyalangan triglitseridlar (rTG) sintetik etil efirlariga (EE) nisbatan ancha yuqori bio-o‘zlashtirilishga ega.
3. Oksidlanish indeksini tekshiring (TOTOX): Sifatli baliq yog‘i TOTOX indeksi < 26 va IFOS xalqaro sertifikatiga ega bo‘ladi. U sasigan baliq hidiga ega bo‘lmasligi lozim.

### Usul va formula

GOED, Amerika yurak assotsiatsiyasi (AHA) va ISSFAL klinik ko‘rsatmalariga asoslangan. Eritrotsitlar membranasi Omega-3 indeksining maqsadli darajasini (> 8%) hisobga oladi.

Bazaviy salomatlik: 500 mg/kun; Kardioproteksiya: 1000 mg/kun; Gipertriglitseridemiya: 2000–4000 mg/kun; Homiladorlik: 600 mg (DGK ga urg‘u); Depressiya: 1000–2000 mg (EPK:DGK ≥ 2:1); Sport: 1500–2000 mg.

### Cheklovlar

Kuniga 3000–4000 mg dan ortiq EPK+DGK qabul qilish antiagregant (qonni suyultirish) taʼsiri sababli koagulogramma nazoratini talab qiladi.

### Manbalar

- [Harris W.S., Von Schacky C. The Omega-3 Index: a new risk factor for death from coronary heart disease? Prev Med, 2004;39(1):212–220](https://pubmed.ncbi.nlm.nih.gov/15207989/)
- [Global Organization for EPA and DHA Omega-3s (GOED). Clinical Practice Recommendations for EPA and DHA Omega-3 Intake, 2022](https://goedomega3.com/intake-recommendations)
- [Guu T.W. et al. International Society for Nutritional Psychiatry Research Practice Guidelines for Omega-3 Fatty Acids in the Treatment of Major Depressive Disorder. Psychother Psychosom, 2019;88(5):263–273](https://pubmed.ncbi.nlm.nih.gov/31480072/)

## Ushbu kalkulyatorni joylashtirish

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="omega-3" locale="uz" theme="auto" />;
}
```

### JavaScript yuklagichi

```html
<div data-nutrifit-widget="omega-3" data-locale="uz" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Oddiy iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/omega-3?lang=uz&theme=auto"
  title="Omega-3 kalkulyatori (EPK + DGK dozasi va indeksi)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
