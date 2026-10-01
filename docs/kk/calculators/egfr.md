# CKD-EPI 2021 бойынша ШСФ (eGFR) калькуляторы

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/egfr.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/egfr.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/egfr.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/egfr.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/egfr.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/egfr.md)

[← Калькуляторлар каталогы](../CALCULATORS.md)

`egfr` · [NutriFit](https://nutrifit.health/kk/calculators/egfr)

CKD-EPI 2021 бойынша есептік ШСФ (креатинин, қалауыңызша цистатин C), Кокрофт — Голт бойынша креатинин клиренсі және KDIGO бойынша СБА кезеңі — мкмоль/л және мг/дл қайта есептеуімен.

### Пайдалану реті

1. Бланктан креатининді табыңыз: Сарысу креатинині негізгі биохимияға кіреді. ТМД мен Еуропа зертханалары мкмоль/л, АҚШ пен Латын Америкасы — мг/дл береді. Қажетті бірлікті таңдаңыз.
2. Жыныс пен жасты көрсетіңіз: Бұлшықет массасы, демек «қалыпты» креатинин де ерлер мен әйелдерде әртүрлі және жасына қарай төмендейді — теңдеу мұны ескереді. 2021 жылғы нұсқада нәсілдік түзету алынып тасталды.
3. Бар болса, цистатин C қосыңыз: Цистатин C бұлшықет массасына және рационға тәуелді емес. Біріктірілген теңдеу альбуминуриясыз eGFRcr 45–59 болғанда СБА-ны растау үшін KDIGO 2024 ұсынған.

### Әдістеме және формула

Шумақтық сүзілу жылдамдығы — бүйрек функциясының басты көрсеткіші. CKD-EPI 2021 теңдеуі (Inker et al., NEJM) оны сарысу креатинині, жас және жыныс бойынша практикадан алынып тасталған нәсілдік коэффициентсіз шығарады. Цистатин C болғанда CKD-EPI 2021 cr-cys біріктірілген теңдеуі қолданылады — ол стандартты емес бұлшықет массасы бар адамдарда (спортшылар, саркопения, ампутациялар, вегандар) дәлірек. Қосымша калькулятор дәрі дозалау үшін әлі күнге дейін қолданылатын Кокрофт — Голт бойынша креатинин клиренсін және KDIGO бойынша G1–G5 СБА кезеңін көрсетеді.

eGFRcr = 142 × min(Scr/κ, 1)^α × max(Scr/κ, 1)^−1,200 × 0,9938^Жас × 1,012 [әйел]
κ = 0,7 (әйел) / 0,9 (ер);  α = −0,241 (әйел) / −0,302 (ер);  Scr — креатинин, мг/дл (= мкмоль/л / 88,4)
eGFRcr-cys = 135 × min(Scr/κ,1)^α × max(Scr/κ,1)^−0,544 × min(Scys/0,8,1)^−0,323 × max(Scys/0,8,1)^−0,778 × 0,9961^Жас × 0,963 [әйел]
Кокрофт — Голт (мл/мин) = (140 − Жас) × Салмақ (кг) × 0,85 [әйел] / (72 × Scr, мг/дл)

### Шектеулер

Есептік ШСФ тұрақты күйдегі 18 жастан асқан ересектер үшін валидацияланған: бүйректің жедел зақымдануы, жүктілік, дене салмағы мен бұлшықет массасының шеткі мәндері, ампутациялар және креатинин секрециясына әсер ететін препараттар (триметоприм, циметидин) қабылдағанда ол дәл емес. Бір eGFR < 60 мәні СБА дегенді білдірмейді — диагноз 3 айдан кейін растауды және альбуминурияны бағалауды қажет етеді. Кокрофт — Голт формуласы дене ауданына нормаланбаған және семіздікте клиренсті жоғарылатып көрсетеді.

### Дереккөздер

- [Inker L.A. et al. New creatinine- and cystatin C-based equations to estimate GFR without race. N Engl J Med, 2021;385(19):1737–1749](https://pubmed.ncbi.nlm.nih.gov/34554658/)
- [KDIGO 2012 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease. Kidney Int Suppl, 2013;3(1):1–150](https://kdigo.org/guidelines/ckd-evaluation-and-management/)
- [Cockcroft D.W., Gault M.H. Prediction of creatinine clearance from serum creatinine. Nephron, 1976;16(1):31–41](https://pubmed.ncbi.nlm.nih.gov/1244564/)

## Осы калькуляторды ендіру

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="egfr" locale="kk" theme="auto" />;
}
```

### JavaScript жүктеушісі

```html
<div data-nutrifit-widget="egfr" data-locale="kk" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Тікелей iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/egfr?lang=kk&theme=auto"
  title="CKD-EPI 2021 бойынша ШСФ (eGFR) калькуляторы" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Тақырыптар: light, dark және auto. JavaScript және React биіктікті автоматты реттейді; тікелей iframe биіктігі бекітілген. Деректер iframe ішінде қалады. CSP, оқиғалар мен ақылы интеграция орнату нұсқаулығында берілген.
