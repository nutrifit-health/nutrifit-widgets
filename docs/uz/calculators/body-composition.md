# Tana tarkibi kalkulyatori

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/body-composition.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/body-composition.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/body-composition.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/body-composition.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/body-composition.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/body-composition.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`body-composition` · [NutriFit](https://nutrifit.health/uz/calculators/body-composition)

Tana o‘lchamlari bo‘yicha yog‘ ulushini baholaydi, yog‘ va toza massani hamda tana vazni indeksini hisoblaydi.

### Foydalanish tartibi

1. Santimetrli lentani oling: Cho‘zilmaydigan egiluvchan o‘lchov lentasidan foydalaning. O‘lchovlarni ertalab och qoringa bajaring.
2. Tana aylanalarini o‘lchang: Erkaklarga bo‘yin va bel kerak. Ayollarga — bo‘yin, bel va dumba. Lenta teriga zich tegib turishi, lekin qisib qo‘ymasligi lozim.
3. Tana tarkibingizni bilib oling: Kalkulyator yog‘ foizini, mutlaq yog‘ massasini va yog‘siz quruq (mushak) massasini hisoblab beradi.

### Usul va formula

Yog‘ ulushi U.S. Navy usuli bilan baholanadi (Hodgdon va Beckett, 1984): hisobga bo‘y hamda bo‘yin, bel, ayollarda esa son aylanasi kiradi. Usul jihoz talab qilmagani uchun tanlangan, xatoligi esa maishiy bioimpedans tarozilari bilan solishtirsa bo‘ladi. Qo‘shimcha ravishda JSST tasnifi bo‘yicha TVI hisoblanadi — u tana tarkibi haqida hech narsa aytmaydi, lekin populyatsion normalar bilan solishtirish uchun kerak.

Erkaklar: %yog‘ = 495 / (1,0324 − 0,19077 × log₁₀(bel − bo‘yin) + 0,15456 × log₁₀(bo‘y)) − 450; Ayollar: %yog‘ = 495 / (1,29579 − 0,35004 × log₁₀(bel + son − bo‘yin) + 0,221 × log₁₀(bo‘y)) − 450; TVI = vazn / bo‘y²

### Cheklovlar

Usul xatoligi DXA bilan solishtirganda taxminan ±3–4% va tana tuzilishi noodatiy bo‘lgani sari ortadi. O‘lchovlarni ertalab nahorda, lentani tortmasdan, doim bir nuqtalarda oling: beldagi 1 sm farq natijani sezilarli o‘zgartiradi. TVI mushak bilan yog‘ni ajratmaydi va sportchilar, homiladorlar hamda bolalarga qo‘llanmaydi.

### Manbalar

- [Hodgdon J.A., Beckett M.B. Prediction of percent body fat for U.S. Navy men and women from body circumferences and height. Naval Health Research Center, 1984](https://apps.dtic.mil/sti/citations/ADA143890)
- [WHO. Obesity: preventing and managing the global epidemic. WHO Technical Report Series 894, 2000](https://www.who.int/publications/i/item/WHO_TRS_894)

## Ushbu kalkulyatorni joylashtirish

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="body-composition" locale="uz" theme="auto" />;
}
```

### JavaScript yuklagichi

```html
<div data-nutrifit-widget="body-composition" data-locale="uz" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Oddiy iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/body-composition?lang=uz&theme=auto"
  title="Tana tarkibi kalkulyatori" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
