# Pauerlifting koeffitsientlari kalkulyatori (DOTS, Wilks, IPF GL)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/powerlifting-coefficients.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/powerlifting-coefficients.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/powerlifting-coefficients.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/powerlifting-coefficients.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/powerlifting-coefficients.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/powerlifting-coefficients.md)

[← Kalkulyatorlar katalogi](../CALCULATORS.md)

`powerlifting-coefficients` · [NutriFit](https://nutrifit.health/uz/calculators/powerlifting-coefficients)

DOTS, Wilks va IPF GL Points formulalari bo‘yicha turli vazn toifalari va jinsdagi sportchilarning uchkurashdagi (o‘tirib turish, yotib siqish, tortish) mutlaq kuchini solishtiradi.

### Foydalanish tartibi

1. Uch harakatdagi eng yaxshi vaznlarni qo‘shing: Musobaqa qoidalariga muvofiq bajarilgan o‘tirib turish, yotib siqish va tortishdagi maksimal vaznlarni jamlang.
2. Vazn o‘lchashdagi aniq o‘z vazningizni ko‘rsating: Pomostga chiqishdan oldingi musobaqa vazn o‘lchashidagi ertalabki vazndan foydalaning.
3. DOTS va IPF GL ballaringizni baholang: Natijani mahorat shkalasi bilan taqqoslang: 300 ball — baquvvat havaskor, 400 — sport ustaligiga nomzod, 500 — xalqaro elita.

### Usul va formula

Allometrik masshtablash qonuni mushaklar kuchi ularning ko‘ndalang kesimi maydoniga (bo‘yning kvadrati) mutanosib ekanligini, tana vazni esa hajmga (bo‘yning kubi) mutanosib o‘sishini ko‘rsatadi. Pauerlifting koeffitsientlari yengil va og‘ir vaznli sportchilarning imkoniyatlarini tenglashtirish uchun yuqori tartibli tenglamalardan foydalanadi.

DOTS: Koeffitsient = 500 / (A×Vazn^4 + B×Vazn^3 + C×Vazn^2 + D×Vazn + E); DOTS ballari = Jami (kg) × Koeffitsient; IPF GL Points: 100 × Jami / (A − B × e^(−C × Vazn)); Wilks: 5-darajali ko‘phad.

### Cheklovlar

Standart musobaqa uchkurashi (pauerlifting) uchun mo‘ljallangan. Tosh ko‘tarish, og‘ir atletika (Sinkler formulasi qo‘llaniladi) yoki armrestling uchun qo‘llanilmaydi.

### Manbalar

- [Perotti L. et al. The DOTS Formula: A new formula for evaluating strength athletes across weight classes, 2019](https://pubmed.ncbi.nlm.nih.gov/31804245/)
- [Wilks R. The Wilks Formula for Powerlifting. Australian Powerlifting Federation, 1997](https://www.powerlifting.sport/)
- [International Powerlifting Federation. IPF GL Points Formula for Classic and Equipped Powerlifting, 2020](https://www.powerlifting.sport/rules/codes/info/ipf-formula)

## Ushbu kalkulyatorni joylashtirish

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="powerlifting-coefficients" locale="uz" theme="auto" />;
}
```

### JavaScript yuklagichi

```html
<div data-nutrifit-widget="powerlifting-coefficients" data-locale="uz" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Oddiy iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/powerlifting-coefficients?lang=uz&theme=auto"
  title="Pauerlifting koeffitsientlari kalkulyatori (DOTS, Wilks, IPF GL)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Mavzular: light, dark va auto. JavaScript va React balandlikni avtomatik sozlaydi; oddiy iframe balandligi belgilangan. Ma’lumotlar iframe ichida qoladi. CSP, hodisalar va pullik integratsiya o‘rnatish qo‘llanmasida berilgan.
