# Porsiyaning glikemik yuklamasi

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/glycemic-load.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/glycemic-load.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/glycemic-load.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/glycemic-load.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/glycemic-load.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/glycemic-load.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`glycemic-load` · [NutriFit](https://nutrifit.health/uz/calculators/glycemic-load)

GY = GI × porsiyadagi mavjud uglevod / 100. Aniq mahsulot va tayyorlash GI ini glyukoza = 100 shkalasida, 100 g uglevod va porsiya vaznini kiriting. Boshlang‘ich sonlar — misol.

### Foydalanish tartibi

1. Boshlang‘ich ma’lumotlarni kiriting: GY = GI × porsiyadagi mavjud uglevod / 100. Aniq mahsulot va tayyorlash GI ini glyukoza = 100 shkalasida, 100 g uglevod va porsiya vaznini kiriting. Boshlang‘ich sonlar — misol.
2. Parametrlarni aniqlashtiring: GY = GI × porsiyadagi mavjud uglevod / 100. Aniq mahsulot va tayyorlash GI ini glyukoza = 100 shkalasida, 100 g uglevod va porsiya vaznini kiriting. Boshlang‘ich sonlar — misol.
3. Natijani o‘qing: GY individual glyukoza yoki insulin dozasini bashorat qilmaydi. Porsiya toifalari universal kunlik me’yor bermaydi. Muayyan mahsulotning tekshirilmagan o‘rtacha qiymatlari avtomatik qo‘yilmaydi.

### Usul va formula

GY = GI × porsiyadagi mavjud uglevod / 100. Aniq mahsulot va tayyorlash GI ini glyukoza = 100 shkalasida, 100 g uglevod va porsiya vaznini kiriting. Boshlang‘ich sonlar — misol.

Porsiya uglevodi(g) = 100 g dagi uglevod × porsiya vazni / 100; GY = GI × porsiya uglevodi / 100

### Cheklovlar

GY individual glyukoza yoki insulin dozasini bashorat qilmaydi. Porsiya toifalari universal kunlik me’yor bermaydi. Muayyan mahsulotning tekshirilmagan o‘rtacha qiymatlari avtomatik qo‘yilmaydi.

### Manbalar

- [Atkinson FS et al. International tables of glycemic index and glycemic load values 2021: a systematic review. Am J Clin Nutr, 2021](https://pubmed.ncbi.nlm.nih.gov/34258626/)
- [Augustin LSA et al. Glycemic index, glycemic load and glycemic response: An International Scientific Consensus Summit from the International Carbohydrate Quality Consortium (ICQC). Nutr Metab Cardiovasc Dis, 2015](https://pubmed.ncbi.nlm.nih.gov/26160327/)

## Ushbu kalkulyatorni joylashtirish

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="glycemic-load" locale="uz" theme="auto" />;
}
```

### JavaScript yuklagichi

```html
<div data-nutrifit-widget="glycemic-load" data-locale="uz" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Oddiy iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/glycemic-load?lang=uz&theme=auto"
  title="Porsiyaning glikemik yuklamasi" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
