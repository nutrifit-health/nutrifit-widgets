# FIB-4 va APRI kalkulyatori: jigar fibrozi indekslari

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/fib-4.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/fib-4.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/fib-4.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/fib-4.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/fib-4.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/fib-4.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`fib-4` · [NutriFit](https://nutrifit.health/uz/calculators/fib-4)

FIB-4 (Sterling 2006) yosh, AST, ALT va trombotsitlardan foydalanadi. AASLD 2023 chegaralari metabolik yog‘li jigar kasalligida rivojlangan fibroz ehtimolini baholaydi, bosqichini aniqlamaydi. 35–65 yoshda quyi chegara 1,3; 65 yoshdan kattalarda 2,0; yuqori chegara 2,67. 35 yoshgacha toifa berilmaydi; o‘tkir kasallikda talqin qilinmaydi. APRI (Wai 2003) va 0,5/1,5 chegaralari surunkali C gepatitidagi sezilarli fibrozga tegishli, boshqa kasalliklarga avtomatik qo‘llanmaydi.

### Foydalanish tartibi

1. Boshlang‘ich ma’lumotlarni kiriting: FIB-4 (Sterling 2006) yosh, AST, ALT va trombotsitlardan foydalanadi. AASLD 2023 chegaralari metabolik yog‘li jigar kasalligida rivojlangan fibroz ehtimolini baholaydi, bosqichini aniqlamaydi. 35–65 yoshda quyi chegara 1,3; 65 yoshdan kattalarda 2,0; yuqori chegara 2,67. 35 yoshgacha toifa berilmaydi; o‘tkir kasallikda talqin qilinmaydi. APRI (Wai 2003) va 0,5/1,5 chegaralari surunkali C gepatitidagi sezilarli fibrozga tegishli, boshqa kasalliklarga avtomatik qo‘llanmaydi.
2. Parametrlarni aniqlashtiring: FIB-4 = age × AST / (platelets × √ALT); APRI = (AST / AST_ULN) × 100 / platelets.
FIB-4 (Sterling 2006) yosh, AST, ALT va trombotsitlardan foydalanadi. AASLD 2023 chegaralari metabolik yog‘li jigar kasalligida rivojlangan fibroz ehtimolini baholaydi, bosqichini aniqlamaydi. 35–65 yoshda quyi chegara 1,3; 65 yoshdan kattalarda 2,0; yuqori chegara 2,67. 35 yoshgacha toifa berilmaydi; o‘tkir kasallikda talqin qilinmaydi. APRI (Wai 2003) va 0,5/1,5 chegaralari surunkali C gepatitidagi sezilarli fibrozga tegishli, boshqa kasalliklarga avtomatik qo‘llanmaydi.
3. Natijani o‘qing: Natijalar o‘tkir gepatit, gemoliz yoki kuchli alkogol isteʼmoli paytida buzilishi mumkin. Tashxisni faqat shifokor tasdiqlaydi.

### Usul va formula

FIB-4 (Sterling 2006) yosh, AST, ALT va trombotsitlardan foydalanadi. AASLD 2023 chegaralari metabolik yog‘li jigar kasalligida rivojlangan fibroz ehtimolini baholaydi, bosqichini aniqlamaydi. 35–65 yoshda quyi chegara 1,3; 65 yoshdan kattalarda 2,0; yuqori chegara 2,67. 35 yoshgacha toifa berilmaydi; o‘tkir kasallikda talqin qilinmaydi. APRI (Wai 2003) va 0,5/1,5 chegaralari surunkali C gepatitidagi sezilarli fibrozga tegishli, boshqa kasalliklarga avtomatik qo‘llanmaydi.

FIB-4 = age × AST / (platelets × √ALT); APRI = (AST / AST_ULN) × 100 / platelets.
FIB-4 (Sterling 2006) yosh, AST, ALT va trombotsitlardan foydalanadi. AASLD 2023 chegaralari metabolik yog‘li jigar kasalligida rivojlangan fibroz ehtimolini baholaydi, bosqichini aniqlamaydi. 35–65 yoshda quyi chegara 1,3; 65 yoshdan kattalarda 2,0; yuqori chegara 2,67. 35 yoshgacha toifa berilmaydi; o‘tkir kasallikda talqin qilinmaydi. APRI (Wai 2003) va 0,5/1,5 chegaralari surunkali C gepatitidagi sezilarli fibrozga tegishli, boshqa kasalliklarga avtomatik qo‘llanmaydi.

### Cheklovlar

Natijalar o‘tkir gepatit, gemoliz yoki kuchli alkogol isteʼmoli paytida buzilishi mumkin. Tashxisni faqat shifokor tasdiqlaydi.

### Manbalar

- [Rinella M.E. et al. AASLD Practice Guidance on the clinical assessment and management of nonalcoholic fatty liver disease. Hepatology, 2023.](https://pmc.ncbi.nlm.nih.gov/articles/PMC10735173/)
- [Sterling RK et al. Development of a simple noninvasive index to predict significant fibrosis in patients with HIV/HCV coinfection. Hepatology, 2006](https://pubmed.ncbi.nlm.nih.gov/16729309/)
- [Wai CT et al. A simple noninvasive index can predict both significant fibrosis and cirrhosis in patients with chronic hepatitis C. Hepatology, 2003](https://pubmed.ncbi.nlm.nih.gov/12883497/)
- [European Association for the Study of the Liver. et al. EASL Clinical Practice Guidelines on non-invasive tests for evaluation of liver disease severity and prognosis - 2021 update. J Hepatol, 2021](https://pubmed.ncbi.nlm.nih.gov/34166721/)

## Ushbu kalkulyatorni joylashtirish

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="fib-4" locale="uz" theme="auto" />;
}
```

### JavaScript yuklagichi

```html
<div data-nutrifit-widget="fib-4" data-locale="uz" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Oddiy iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/fib-4?lang=uz&theme=auto"
  title="FIB-4 va APRI kalkulyatori: jigar fibrozi indekslari" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
