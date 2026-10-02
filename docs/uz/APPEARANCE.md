# Vidjet ko‘rinishi

Namoyishda «Saytingizga mos ko‘rinish» bo‘limini oching. Kalkulyator, kartochka va maydonlar foni, asosiy va qo‘shimcha matn, asosiy rang, chegara va burchak radiusini tanlang. Fon shaffof bo‘lishi mumkin.

appearance parametrlari: background, surface, text, muted, accent, border va radius. Ranglar faqat #RGB yoki #RRGGBB; background uchun transparent ham mumkin. Radius — 0 dan 32 px gacha butun son. Ranglar mavzudan ustun turadi. Asosiy rang ustidagi matn kontrastga qarab qora yoki oq bo‘ladi; boshqa ranglarning o‘qilishini integrator tanlaydi.

Sayt CSS uslublari iframe ichiga o‘tmaydi: WidgetFrame style faqat konteynerni bezaydi. appearance yoki URL parametrlarini yuboring. appearance o‘zgarganda iframe qayta yaratiladi va saqlanmagan ma’lumotlar tozalanadi. Shaffof fonda mavzuni sayt foniga moslang.

## React

```tsx
import { WidgetFrame } from '@nutrifit/widgets';

<WidgetFrame widget="tdee" locale="uz" theme="light"
  appearance={{ background: '#f8fafc', surface: '#ffffff', text: '#172b25',
    muted: '#52655d', accent: '#2563eb', border: '#dce5df', radius: 16 }} />
```

## JavaScript

```html
<div data-nutrifit-widget="water" data-locale="uz"
  data-background="#f8fafc" data-surface="#ffffff" data-accent="#2563eb"
  data-radius="16"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

```js
import { mountWidget } from '@nutrifit/widgets/core';
mountWidget(document.getElementById('calculator'), {
  widget: 'water', locale: 'uz',
  appearance: { background: '#f8fafc', accent: '#2563eb', radius: 16 },
});
```

## iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/tdee?lang=uz&theme=light&appearanceBackground=%23f8fafc&appearanceAccent=%232563eb&appearanceRadius=16"
  title="NutriFit TDEE" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0;border-radius:16px;background:transparent"
></iframe>
```

`appearanceBackground` · `appearanceSurface` · `appearanceText` · `appearanceMuted` · `appearanceAccent` · `appearanceBorder` · `appearanceRadius`

## Native React / CSS

Nativ taom kalkulyatori shu appearance va quyidagi CSS o‘zgaruvchilarini qabul qiladi. CSS orqali sozlaganda asosiy rang ustidagi matn rangini qo‘lda belgilang. Nativ rejim server ruxsat bergan integratsiyani talab qiladi.

```tsx
<NativeNutritionCalculator getSession={getSession} locale="uz"
  appearance={{ background: 'transparent', accent: '#2563eb', radius: 16 }}
  className="website-calculator" />
```

```css
.website-calculator {
  --nutrifit-background: transparent;
  --nutrifit-surface: #ffffff;
  --nutrifit-text: #172b25;
  --nutrifit-muted: #52655d;
  --nutrifit-accent: #2563eb;
  --nutrifit-accent-text: #ffffff;
  --nutrifit-border: #dce5df;
  --nutrifit-radius: 16px;
}
```

Rasmiy gorizontal logotipning foni shaffof. Qorong‘i mavzuda shu logotipning oq silueti ishlatiladi. Ranglarni o‘zgartirish logotip, havola yoki usul cheklovlarini yashirishga ruxsat bermaydi; white label server ruxsatini talab qiladi. Ranglar hisob-kitob yoki PDF fayllarini o‘zgartirmaydi.

Mahalliy namoyish checkout manba kodini ko‘rsatadi. Tashqi saytga shu shartnomani amalga oshiruvchi e’lon qilingan paket va yangilangan NutriFit host kerak. Namoyish ularni e’lon qilmaydi va joylashtirmaydi.

[README](README.md) · [Demo](../../examples/consumer-site/README.md)

