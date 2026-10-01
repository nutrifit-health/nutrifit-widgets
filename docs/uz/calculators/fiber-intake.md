# Kletchatka (ozuqaviy tolalar) meʼyori kalkulyatori

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/fiber-intake.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/fiber-intake.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/fiber-intake.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/fiber-intake.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/fiber-intake.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/fiber-intake.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`fiber-intake` · [NutriFit](https://nutrifit.health/uz/calculators/fiber-intake)

Ichak mikrobiotasini oziqlantirish, xolesterinni normallashtirish va oshqozon-ichak motorikasini yaxshilash uchun zarur kunlik kletchatka miqdorini aniqlaydi.

### Foydalanish tartibi

1. Har bir ovqatlanishga sabzavot qo‘shing: Kuniga kamida 400–500 g kraxmalsiz sabzavotlar va ko‘katlar isteʼmol qiling (Garvard tarelkasi qoidasi).
2. Tozalangan yormalarni to‘liq donlilarga almashtiring: Oq guruch va oliy navli un o‘rniga grechka, kinoa, suli yormasi, arpa va butun donli nonni tanlang.
3. Urug‘lar va dukkaklilarni qo‘shing: 1 osh qoshiq chia yoki zig‘ir urug‘i hamda bir porsiya yasmiq darhol 8–12 g sifatli tola beradi.

### Usul va formula

JSST va Yevropa oziq-ovqat xavfsizligi agentligi (EFSA: ratsionning har 1000 kkaliga 14 g kletchatka, ayollar uchun kamida 25 g va erkaklar uchun 38 g) standartlariga asoslangan. Suv balansini (+1 g tola uchun 40 ml suv) hisoblaydi va TIS bo‘yicha moslashtiradi.

Maqsadli kletchatka = max(25/38 g, Kaloriya × 0,014); Eruvchan fraksiya ~30–35%; Erimaydigan fraksiya ~65–70%; Qo‘shimcha suv = Kletchatka (g) × 40 ml.

### Cheklovlar

Ichakda bakteriyalarning ortiqcha o‘sishi sindromi (SIBO) va kolit xurujida fermentatsiyalanuvchi tolalar meteorizmni kuchaytirishi mumkin. Kletchatka dozasini bosqichma-bosqich oshirish lozim.

### Manbalar

- [EFSA Panel on Dietetic Products, Nutrition, and Allergies. Scientific Opinion on Dietary Reference Values for carbohydrates and dietary fibre. EFSA Journal, 2010;8(3):1462](https://doi.org/10.2903/j.efsa.2010.1462)
- [Reynolds A. et al. Carbohydrate quality and human health: a series of systematic reviews and meta-analyses. Lancet, 2019;393(10170):434–445](https://pubmed.ncbi.nlm.nih.gov/30638909/)
- [Stephen A.M. et al. Dietary fibre in Europe: current state of knowledge on definitions, sources, recommendations, intakes and relationships to health. Nutr Res Rev, 2017;30(2):149–190](https://pubmed.ncbi.nlm.nih.gov/28676135/)

## Ushbu kalkulyatorni joylashtirish

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="fiber-intake" locale="uz" theme="auto" />;
}
```

### JavaScript yuklagichi

```html
<div data-nutrifit-widget="fiber-intake" data-locale="uz" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Oddiy iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/fiber-intake?lang=uz&theme=auto"
  title="Kletchatka (ozuqaviy tolalar) meʼyori kalkulyatori" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
