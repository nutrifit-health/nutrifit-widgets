# Йель тағамдық тәуелділік шкаласы mYFAS 2.0

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/yfas.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/yfas.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/yfas.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/yfas.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/yfas.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/yfas.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`yfas` · [NutriFit](https://nutrifit.health/kk/calculators/yfas)

Жоғары калориялы және өңделген тағамдарға тәуелділік белгілерін диагностикалауға арналған Йель университетінің бейімделген ғылыми сауалнамасы.

### Пайдалану реті

1. Мәселе тудыратын тағамдарды еске түсіріңіз: Тұтыну кезінде тоқтау ең қиын болатын өнімдер туралы ойланыңыз (тәттілер, тіскебасарлар, пісірмелер).
2. 13 сұраққа жауап беріңіз: Егер бұл жағдай соңғы 12 ай ішінде тұрақты байқалған болса, «Иә» деп белгілеңіз.
3. Симптомдар мен диагноз бағалауымен танысыңыз: Сәйкес келген диагностикалық белгілер саны мен олардың өміріңізге әсер ету деңгейін біліңіз.

### Әдістеме және формула

DSM-5 заттарға тәуелділіктің тағамға қатысты 11 диагностикалық критерийіне негізделген 13 сұрақ және клиникалық дистресс бойынша 2 сұрақ.

Тағамдық тәуелділік диагнозы клиникалық дистресс/дезадаптацияның (12 немесе 13-сұрақтар) және кемінде 2 симптомның болуын талап етеді. 2–3: жеңіл; 4–5: орташа; ≥ 6: ауыр тәуелділік.

### Шектеулер

«Тағамдық тәуелділік» ұғымы ғылыми пікірталастар нысаны болып табылады. Сауалнама тәтті, майлы және тұзды тағамдарға компульсивті әрекеттерді анықтайды.

### Дереккөздер

- [Schulte E.M., Gearhardt A.N. Development of the Modified Yale Food Addiction Scale Version 2.0. Eur Eat Disord Rev, 2017;25(4):302–308](https://pubmed.ncbi.nlm.nih.gov/28543787/)
- [Gearhardt A.N. et al. Preliminary validation of the Yale Food Addiction Scale. Appetite, 2009;52(2):430–436](https://pubmed.ncbi.nlm.nih.gov/19028533/)

## Осы калькуляторды ендіру

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="yfas" locale="kk" theme="auto" />;
}
```

### JavaScript жүктеушісі

```html
<div data-nutrifit-widget="yfas" data-locale="kk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Тікелей iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/yfas?lang=kk&theme=auto"
  title="Йель тағамдық тәуелділік шкаласы mYFAS 2.0" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
