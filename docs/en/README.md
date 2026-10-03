# NutriFit Widgets — Embeddable Nutrition & Fitness Calculators

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/README.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/README.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/README.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/README.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/README.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/README.md)

[![npm](https://img.shields.io/npm/v/@nutrifit/widgets)](https://www.npmjs.com/package/@nutrifit/widgets) [![GitHub Release](https://img.shields.io/github/v/release/nutrifit-health/nutrifit-widgets)](https://github.com/nutrifit-health/nutrifit-widgets/releases) [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/LICENSE)

Embed 49 nutrition, fitness, laboratory and lifestyle calculators on your website with React components, a JavaScript snippet or a plain iframe. Start with TDEE and calorie needs, macros, water intake, body composition or dish nutrition.

**[Try the widgets](https://nutrifit.health/embed/calculators/tdee?lang=en&theme=auto)** · [Macros](https://nutrifit.health/embed/calculators/macros?lang=en&theme=auto) · [Water](https://nutrifit.health/embed/calculators/water?lang=en&theme=auto) · [All 49 calculators](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/CALCULATORS.md) · [Appearance](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/APPEARANCE.md)

![Integration overview: calculators, embedding options and supported features](https://raw.githubusercontent.com/nutrifit-health/nutrifit-widgets/main/docs/assets/widget-overview-en.svg)

- Six languages; light, dark and system themes.
- Customize backgrounds, colors and corner radius for your website.
- Visitors calculate on your page without a NutriFit account and can download branded PDF reports.

Free embeds retain NutriFit branding. The calculators are hosted by NutriFit and require a network connection.

## Installation

Install the package. React adapters support React 18.2 and 19; the framework-free core does not require React.

```sh
npm install @nutrifit/widgets
```

## React

Use `CalculatorFrame` for any catalog ID. `NutritionCalculatorFrame` embeds the dish calculator. `WidgetFrame widget="tdee"` is the generic equivalent. Calculations remain in the iframe; this component does not copy formulas into your application.

```tsx
import { CalculatorFrame, NutritionCalculatorFrame } from '@nutrifit/widgets';

export function Calculators() {
  return <>
    <CalculatorFrame calculator="tdee" locale="en" theme="auto" title="NutriFit TDEE" />
    <NutritionCalculatorFrame locale="en" theme="light" />
  </>;
}
```

## JavaScript without a framework

Deploy the loader and its `core/*.js` modules together. Each container can use a different widget, language and theme. The loader adjusts iframe height automatically. For lifecycle control, import `mountWidget` from `@nutrifit/widgets/core`; call `handle.destroy()` during cleanup.

```html
<div data-nutrifit-widget="tdee" data-locale="en" data-theme="auto" data-title="NutriFit TDEE"></div>
<div data-nutrifit-widget="nutrition" data-locale="en"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

```js
import { mountWidget } from '@nutrifit/widgets/core';
const handle = mountWidget(document.getElementById('calculator'), {
  widget: 'water', locale: 'en', theme: 'light',
});
// handle.destroy()
```

## Plain iframe

The plain iframe has fixed height and internal scrolling. Use React or the JavaScript adapter for automatic height. Replace `tdee` with an ID from the catalog. The dish calculator uses `/embed/nutrition-calculator`.

```html
<iframe
  src="https://nutrifit.health/embed/calculators/tdee?lang=en&theme=light"
  title="NutriFit TDEE" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

## Languages and appearance

Set `locale` in React/module options, `data-locale` in HTML, or `lang` in an iframe URL. Supported codes: **en, ru, es, uk, kk, uz**. Themes: `light`, `dark`, `auto`. `auto` follows the browser color scheme. Use a descriptive iframe title in your page language; React/module options accept `title` and the loader accepts `data-title`.

## Using the calculators

Choose an ID, language and theme, then enter the requested values with the units shown. Formula calculators update their results as you edit; questionnaires require answers before displaying a result. Method, limitations and sources are available within the widget. The full result is available on your website, without requiring a NutriFit account. The optional link opens the full NutriFit page in a new tab; it does not transfer the inputs of catalog calculators.

For `nutrition`: find public foods or recipes, add their weights in grams and enter the finished dish weight. Select Calculate to see totals and values per 100 g; PDF and CSV export are available. Missing nutrient data is marked as incomplete, never silently treated as zero. Up to 50 ingredients are supported.

Free catalog widgets can request the existing branded server PDF. It is a snapshot of the displayed inputs/results, not an independent recalculation or diagnostic validation. Server availability is required. For questionnaires, finish answering before exporting.

[Detailed usage, method, formulas and limitations for every calculator](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/CALCULATORS.md).

## Complete catalog

| Widget ID | Calculator | Purpose |
|---|---|---|
| `nutrition` | [Dish nutrition calculator](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/nutrition.md) | For `nutrition`: find public foods or recipes, add their weights in grams and enter the finished dish weight. Select Calculate to see totals and values per 100 g; PDF and CSV export are available. Missing nutrient data is marked as incomplete, never silently treated as zero. Up to 50 ingredients are supported. |
| `tdee` | [Estimated total daily energy expenditure (TDEE)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/tdee.md) | Mifflin–St Jeor estimates resting expenditure. TDEE = that estimate × selected activity factor. −20% and +15% are author-defined deficit and surplus scenarios. |
| `macros` | [Author-defined macro planner](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/macros.md) | Protein presets: 1.8–2.2 g/kg for loss, 1.4–1.8 for maintenance, 1.8–2.4 for gain; fat 0.8–1.2 g/kg. Uses range midpoints; carbohydrate is the calorie remainder with 4/9/4 kcal/g factors. |
| `water` | [Heuristic daily water estimate](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/water.md) | Selected model: 30 mL/kg + 500 mL per hour of activity + 500 mL in heat. An assumed 75% comes from drinks; a glass is 250 mL. No age-related reduction is applied. |
| `body-composition` | [Circumference-based body composition and BMI](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/body-composition.md) | Historical Hodgdon–Beckett (1984) body fat estimate from height and girths. Men: abdomen at the navel and neck; women: natural narrow waist, hips at their widest point and neck. BMI = weight / height². |
| `glycemic-load` | [Glycemic load of a portion](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/glycemic-load.md) | GL = GI × available carbohydrate in the portion / 100. Enter GI for the specific food and preparation on the glucose = 100 scale, available carbohydrate per 100 g and portion weight. Initial numbers are a demonstration. |
| `deficiency-risk` | [Diet and lifestyle checklist](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/deficiency-risk.md) | An author-written informational checklist: select your current dietary and lifestyle circumstances to see related nutrient topics. |
| `health-balance-wheel` | [Author-defined self-rating wheel](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/health-balance-wheel.md) | Rate your satisfaction with eight areas over the past 14 days from 1 to 10. Overall score = mean × 10; uniformity index = max(0, 100 − 18 × standard deviation), rounded. |
| `homa-ir` | [HOMA-IR Calculator: Insulin Resistance Index](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/homa-ir.md) | HOMA-IR, HOMA-β and QUICKI from fasting glucose and insulin: insulin resistance and beta-cell function with reference ranges and interpretation. |
| `tyg-index` | [TyG Index Calculator (Triglycerides × Glucose)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/tyg-index.md) | A research index based on fasting triglycerides and glucose, with TyG-BMI and TyG-WC derivatives. |
| `lipid-profile` | [Lipid profile: calculated measures](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/lipid-profile.md) | Calculates Friedewald and Sampson LDL, non-HDL, remnant cholesterol and lipid ratios. |
| `egfr` | [eGFR Calculator (CKD-EPI 2021)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/egfr.md) | Estimated GFR by CKD-EPI 2021 (creatinine, optionally cystatin C), Cockcroft–Gault creatinine clearance and KDIGO CKD stage — with µmol/L and mg/dL conversion. |
| `hba1c-eag` | [HbA1c and average glucose conversion](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/hba1c-eag.md) | Estimated average glucose over about 2–3 months from laboratory HbA1c, or an approximate reverse estimate. |
| `lab-unit-converter` | [Lab Unit Converter](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/lab-unit-converter.md) | Conversion of 33 lab analytes between SI (mmol/L, µmol/L, nmol/L, pmol/L) and conventional units (mg/dL, ng/mL, pg/mL) by molar mass. |
| `vitamin-d-dose` | [Vitamin D: van Groningen model estimate](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/vitamin-d-dose.md) | 25(OH)D in two units and a weight-based research estimate. No automatic treatment schedule. |
| `iron-deficiency` | [Iron Deficiency Calculator: TSAT, Ferritin and Ganzoni Deficit](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/iron-deficiency.md) | TSAT = iron / TIBC × 100%. Ganzoni model: weight × (15 − Hb in g/dL) × 2.4 + 500 mg for weight ≥ 35 kg. It is displayed only when both Hb and ferritin are below the selected thresholds. |
| `phenoage` | [PhenoAge Biological Age Calculator (Levine)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/phenoage.md) | The Levine 2018 model combines nine biomarkers and chronological age. PhenoAge is an age equivalent of population risk in the NHANES model, not organ age or individual life expectancy. The difference from age is subtraction, not an aging rate or the statistical PhenoAgeAccel residual. |
| `fib-4` | [FIB-4 and APRI Calculator: Liver Fibrosis Indices](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/fib-4.md) | FIB-4 (Sterling 2006) uses age, AST, ALT and platelets. AASLD 2023 thresholds concern the likelihood of advanced fibrosis in metabolic fatty liver disease, not fibrosis staging. Ages 35–65: lower threshold 1.3; over 65: 2.0; upper threshold 2.67. No category is assigned below 35; do not interpret during acute illness. APRI (Wai 2003) and thresholds 0.5/1.5 concern significant fibrosis in chronic hepatitis C and do not automatically transfer to other diseases. |
| `free-testosterone` | [Vermeulen free testosterone estimate](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/free-testosterone.md) | Calculates free and non-SHBG-bound fractions from total testosterone, SHBG and albumin. |
| `anion-gap` | [Anion Gap and Delta Ratio Calculator](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/anion-gap.md) | Anion gap = Na − Cl − HCO₃; albumin adjustment = 0.25 × (40 − albumin in g/L). Delta ratio = (corrected gap − selected reference) / (reference bicarbonate − HCO₃). |
| `corrected-calcium` | [Albumin-Corrected Calcium Calculator](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/corrected-calcium.md) | Corrected calcium = total calcium + 0.02 × (40 − albumin), with calcium in mmol/L and albumin in g/L. This is the simplified Payne equation. |
| `one-rep-max` | [Estimated one-repetition maximum (1RM)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/one-rep-max.md) | The main result is an author-defined average of Epley and Brzycki. Individual equations and arithmetic percentages of that average are shown below. |
| `heart-rate-zones` | [Heart rate reserve zones](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/heart-rate-zones.md) | Target HR = resting HR + fraction × (maximum HR − resting HR). Five bands are selected here: 50–60, 60–70, 70–80, 80–90 and 90–100% of reserve. |
| `vo2max` | [Field estimates of VO2max](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/vo2max.md) | Cooper: distance covered in 12 minutes. Rockport: a fast 1-mile walk (1609.344 m), elapsed time and finishing heart rate; originally tested in healthy adults aged 30–69. Uth: 15.3 × HRmax / HRrest; tested in well-trained men aged 21–51. |
| `ffmi` | [Fat-free mass index (FFMI)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/ffmi.md) | Fat-free mass = weight × (1 − body fat percentage / 100); FFMI = fat-free mass / height², with height in metres. For men: normalized FFMI = FFMI + 6.3 × (1.8 − height), following the Kouri (1995) abstract. |
| `katch-mcardle` | [Energy estimates from fat-free mass](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/katch-mcardle.md) | Fat-free mass = weight × (1 − fat / 100). Katch–McArdle: 370 + 21.6 × fat-free mass; Cunningham: 500 + 22 × fat-free mass. Daily Katch estimate multiplies by the selected activity factor. |
| `ideal-body-weight` | [Historical reference body weight equations](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/ideal-body-weight.md) | Compare Devine, Robinson, Miller and approximate Hamwi for height ≥ 152.4 cm. The four-equation average is author-defined; AdjBW = Devine + 0.4 × (actual weight − Devine), only when actual weight exceeds Devine. |
| `waist-ratios` | [Waist indices WHR, WHtR and VAI](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/waist-ratios.md) | WHR = waist / hips; WHtR = waist / height. Measure waist midway between the lowest rib and top of the pelvis after a natural exhalation, and hips at the widest point. VAI additionally uses weight, triglycerides and HDL in mmol/L following Amato (2010). |
| `sweat-rate` | [Estimated sweat loss during exercise](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/sweat-rate.md) | Sweat (L) ≈ pre-weight − post-weight (kg) + drink (L) − urine (L); rate = sweat / duration in hours. Weigh under matching conditions without wet clothing. |
| `muscle-potential` | [Casey Butt anthropometric model](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/muscle-potential.md) | Heuristic estimates of mass and girths from height, wrist, ankle and assumed body fat. The original girths describe male bodybuilders at about 8–10% fat. Berkhan: separate reference of height (cm) − 100 kg. |
| `powerlifting-coefficients` | [Powerlifting coefficients: DOTS, Wilks and IPF GL](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/powerlifting-coefficients.md) | Enter weigh-in body mass and the total of best successful squat, bench press and deadlift in kilograms. Uses DOTS, classic Wilks and IPF GL 2020 coefficients for classic powerlifting. |
| `protein-intake` | [Protein reference intakes](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/protein-intake.md) | For healthy adults, the EFSA PRI is 0.83 g/kg/day. ISSN gives 1.4–2.0 g/kg/day for healthy exercising adults; ESPEN suggests 1.0–1.2 for healthy older adults. Amounts use the actual body weight entered. A reference range is not a safety upper limit. |
| `fiber-intake` | [Dietary fibre reference intakes](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/fiber-intake.md) | References are shown separately: EFSA gives 25 g/day for adults; IOM/NASEM gives 14 g/1000 kcal. IOM age and sex AIs: ages 19–50, men 38 g and women 25 g; over 50, 30 and 21 g. The energy calculation does not automatically replace the other references. |
| `omega-3` | [EPA and DHA reference intakes](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/omega-3.md) | The EFSA adult AI is 250 mg EPA+DHA per day from food and supplements combined. During pregnancy and lactation, an additional 100–200 mg DHA/day is specified. This is not a fixed EPA:DHA ratio or the total weight of fish oil. |
| `sodium-potassium` | [Sodium and potassium in a daily diet](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/sodium-potassium.md) | For adults, WHO recommends less than 2000 mg sodium and at least 3510 mg potassium per day. Molar ratio: (Na, mg / 23) / (K, mg / 39.1). Approximate salt equivalent: sodium, mg × 2.5 / 1000. The ratio is displayed without an individual risk category. |
| `alcohol` | [Ethanol and illustrative Widmark estimate](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/alcohol.md) | Calculates ethanol amount, ethanol calories and an approximate concentration using a simplified model. |
| `caffeine` | [Caffeine remaining: model estimate](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/caffeine.md) | Estimates caffeine remaining now and at bedtime for a chosen elimination half-life. |
| `weight-loss-forecast` | [Hall–Chow weight-change scenario](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/weight-loss-forecast.md) | A simplified model with average parameters illustrates weight change after a sustained reduction in baseline energy intake, with unchanged activity. |
| `sleep-cycles` | [Sleep schedule planner](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/sleep-cycles.md) | Bedtime or wake-up options for 7, 8 and 9 hours of sleep, allowing for time to fall asleep. |
| `findrisc` | [FINDRISC Diabetes Risk Score](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/findrisc.md) | Reference 10-year risk of type 2 diabetes from 8 FINDRISC factors; total 0–26. Percentages refer to the original study population and are not a precise individual probability. |
| `debq` | [Eating behaviour: modified DEBQ adaptation](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/debq.md) | 33 questions about usual eating behaviour. Three group means are shown without normality categories or diagnosis. |
| `phq-9` | [Patient Health Questionnaire-9 (PHQ-9 Depression)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/phq-9.md) | Depressive symptom severity over the last 2 weeks: 9 frequency responses scored 0–3; total 0–27. |
| `gad-7` | [Generalized Anxiety Disorder 7-Item Scale (GAD-7)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/gad-7.md) | Anxiety symptom severity over the last 2 weeks: 7 frequency responses scored 0–3; total 0–21. |
| `pss-10` | [Perceived Stress Scale (PSS-10)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/pss-10.md) | Perceived stress over the last month, assessed using the 10 PSS-10 items. |
| `isi` | [Insomnia Severity Index (ISI)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/isi.md) | Sleep assessment over the last 2 weeks: 7 items with distinct 0–4 scales; total 0–28. Satisfaction, noticeability, worry and impact on daily life have their own responses. |
| `scoff` | [SCOFF Eating Disorder Screening Questionnaire](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/scoff.md) | An internationally recognized 5-question clinical screening tool designed to identify the risk of eating disorders (anorexia nervosa and bulimia nervosa). |
| `ies-2` | [Intuitive Eating Scale-2 (IES-2)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/ies-2.md) | IES-2: 23 statements about eating attitudes and body signals, with four subscales. |
| `yfas` | [Yale Food Addiction Scale mYFAS 2.0](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/yfas.md) | mYFAS 2.0: 13 questions about eating problems over the past 12 months. |
| `eating-behavior-wizard` | [Eating behaviour self-assessment](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/eating-behavior-wizard.md) | Five SCOFF questions and four author-written questions for reflection on eating behaviour. |


## Options and events

`hostUrl` selects a matching HTTP(S) staging deployment; it must be an origin without path, credentials or query. `campaign` labels a referral. `integrationId` selects an account integration; the server verifies domain and entitlement. Changing widget, host, language, theme or integration remounts the frame and clears its unsaved state.

`onEvent` receives `ready`, `calculated` or `error`. Ready means the UI mounted, not that the API is available. Catalog calculators emit calculated when displayed results change, including an initial default calculation. Events never expose inputs, answers or results to the embedding site. PostMessage validates origin, source, instance and protocol. Browser CSP must allow `frame-src https://nutrifit.health`; the loader also needs `script-src https://nutrifit.health`.

## Hosted service and native React

Free hosted widgets retain the NutriFit brand and optional links. White label requires a separately configured widget plan, account integration and verified exact HTTPS domain. It is not included in personal Premium. Hosted catalog widgets can use the verified brand; their NutriFit PDF button is omitted in white-label mode. The paid dish calculator supports branded service PDF/CSV.

`NativeNutritionCalculator` from `@nutrifit/widgets/native` renders the dish calculator directly in your page. Import `@nutrifit/widgets/native.css`. It requires a short-lived session obtained by your server; keep the permanent key only on that server. Other catalog calculators use React iframe adapters, not native DOM components. Local catalog formulas do not use the nutrition API operation quota; dish calculation and PDF do.

```tsx
import { NativeNutritionCalculator } from '@nutrifit/widgets/native';
import '@nutrifit/widgets/native.css';

export function NativeCalculator() {
  return <NativeNutritionCalculator locale="en" getSession={async (signal) => {
    const response = await fetch('/api/nutrifit-session', { method: 'POST', signal });
    if (!response.ok) throw new Error('Widget session unavailable');
    return response.json();
  }} />;
}
```

In the integrations account, activate a configured native plan, add the exact HTTPS origin, publish the DNS TXT challenge, verify the domain and issue a server key. Store `NUTRIFIT_WIDGET_KEY` and `NUTRIFIT_SITE_ORIGIN` only on your server. The broker below exchanges the key for a five-minute session and returns the complete envelope to getSession. Apply visitor access controls and rate limits to your broker; never log the session or permanent key.

```ts
export async function POST() {
  const key = process.env.NUTRIFIT_WIDGET_KEY;
  const origin = process.env.NUTRIFIT_SITE_ORIGIN;
  if (!key || !origin) return new Response(null, { status: 503 });
  const response = await fetch('https://api.nutrifit.health/api/v2/widget-runtime/session', {
    method: 'POST', cache: 'no-store',
    headers: { 'Content-Type': 'application/json', 'X-NutriFit-Key': key },
    body: JSON.stringify({ origin }),
  });
  if (!response.ok) return new Response(null, { status: response.status });
  return new Response(await response.text(), {
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'private, no-store' },
  });
}
```

[Native API](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/NATIVE_REACT.md) · [Service](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/SERVICE_MODEL.md) · [Account](https://nutrifit.health/widgets/integrations?lang=en)

## License and scope

Copyright (c) 2026 **NUTRIFIT LLC**. Adapter and native dish UI code are distributed under the standard MIT license. The code license does not grant hosted service quotas, white-label entitlement, NutriFit trademark rights or ownership of clinical questionnaire instruments. Backend, private account logic and food catalog are not included. Medical and psychological calculators retain their method limitations and are not a diagnosis.

[MIT](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/LICENSE) · [GitHub](https://github.com/nutrifit-health/nutrifit-widgets)

Branded widget headers use the official NutriFit logo: light, dark, or the system preference with `theme="auto"`. White-label integrations retain the customer brand. Native CSS embeds the PNG assets; a restrictive host CSP must allow `data:` in `img-src`. See [NOTICE](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/NOTICE) for brand attribution.


[Native React integration](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/NATIVE_REACT.md) · [Service model](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/SERVICE_MODEL.md) · [Adding widgets](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/ADDING_WIDGETS.md) · [Publishing releases](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/RELEASING.md)

The primary npm package is `@nutrifit/widgets`. GitHub Packages also provides `@nutrifit-health/widgets` linked to this repository. Its distribution comes from the published npm archive; the scope follows the GitHub repository owner. GitHub installation requires registry authentication. Standard npm users should use the command above.

[GitHub Packages](https://github.com/nutrifit-health/nutrifit-widgets/pkgs/npm/widgets)

## Local playground

Preview all 49 calculators with a fully translated interface in six languages, light/dark themes and copyable React, JavaScript and iframe examples.

Run from a clone of this repository:

```sh
npm install --prefix examples/consumer-site
npm run demo
```

Open [the playground](http://127.0.0.1:5178/?lang=en). The default local NutriFit host is `http://localhost:5100`; change it in Connection settings if needed. Keep the demo process running.

[Local playground](../../examples/consumer-site/README.md)
