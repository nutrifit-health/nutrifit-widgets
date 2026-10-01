# @nutrifit/widgets

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/README.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/README.ru.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/README.es.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/README.uk.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/README.kk.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/README.uz.md)

Branded NutriFit calculators for your website: one nutrition calculator and all 48 tools in the public catalog. React, JavaScript and iframe adapters use the same hosted interfaces and calculations as NutriFit.

This source prepares version **0.3.0**. The previously published npm version is **0.2.0**. New IDs and languages require publication of 0.3.0 and a coordinated deployment of the NutriFit host. This document does not claim that publication, deployment or release checks have happened.

## Installation

After version 0.3.0 is published, install it with the command below. For React, use React 18.2 or 19. The framework-free core does not require React.

```sh
npm install @nutrifit/widgets@^0.3.0
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

[Detailed usage, method, formulas and limitations for every calculator](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/CALCULATORS.en.md).

## Complete catalog

| Widget ID | Calculator | Purpose |
|---|---|---|
| `nutrition` | Calculation NutriFit | For `nutrition`: find public foods or recipes, add their weights in grams and enter the finished dish weight. Select Calculate to see totals and values per 100 g; PDF and CSV export are available. Missing nutrient data is marked as incomplete, never silently treated as zero. Up to 50 ingredients are supported. |
| `tdee` | [Daily calorie needs calculator (TDEE)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/CALCULATORS.en.md#tdee) | Calculates basal metabolic rate and total daily energy expenditure, plus calorie targets for losing, maintaining and gaining weight. |
| `macros` | [Macronutrient calculator](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/CALCULATORS.en.md#macros) | Splits a daily calorie target into protein, fat and carbohydrates based on body weight and goal — in grams, calories and percentages. |
| `water` | [Water intake calculator](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/CALCULATORS.en.md#water) | Calculates daily fluid needs from body weight with adjustments for physical activity and hot climate. |
| `body-composition` | [Body composition calculator](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/CALCULATORS.en.md#body-composition) | Estimates body fat percentage from circumferences, calculates fat and lean mass and body mass index. |
| `glycemic-load` | [Glycemic load calculator](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/CALCULATORS.en.md#glycemic-load) | Calculates the glycemic load of a serving from its glycemic index and carbohydrate content — a measure that reflects the real glucose response better than the index alone. |
| `deficiency-risk` | [Nutrient deficiency risk screening](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/CALCULATORS.en.md#deficiency-risk) | Mark the lifestyle and diet factors that apply to you and see which nutrient deficiencies are likely and which laboratory tests confirm them. |
| `health-balance-wheel` | [Health & Nutrition Balance Wheel](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/CALCULATORS.en.md#health-balance-wheel) | Interactive radar chart of 8 health and lifestyle dimensions. Identifies bottlenecks (Liebig's Law of the Minimum) and links deficits to NutriFit tools. |
| `homa-ir` | [HOMA-IR Calculator: Insulin Resistance Index](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/CALCULATORS.en.md#homa-ir) | HOMA-IR, HOMA-β and QUICKI from fasting glucose and insulin: insulin resistance and beta-cell function with reference ranges and interpretation. |
| `tyg-index` | [TyG Index Calculator (Triglycerides × Glucose)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/CALCULATORS.en.md#tyg-index) | TyG index and its derivatives TyG-BMI and TyG-WC: insulin resistance and cardiometabolic risk from fasting triglycerides and glucose — no insulin assay needed. |
| `lipid-profile` | [Lipid Panel Calculator: LDL, non-HDL and Atherogenic Indices](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/CALCULATORS.en.md#lipid-profile) | Calculated LDL by two methods, non-HDL, remnant cholesterol and five atherogenic indices from a standard lipid panel — with ESC/EAS target values. |
| `egfr` | [eGFR Calculator (CKD-EPI 2021)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/CALCULATORS.en.md#egfr) | Estimated GFR by CKD-EPI 2021 (creatinine, optionally cystatin C), Cockcroft–Gault creatinine clearance and KDIGO CKD stage — with µmol/L and mg/dL conversion. |
| `hba1c-eag` | [HbA1c ↔ Average Glucose (eAG) Converter](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/CALCULATORS.en.md#hba1c-eag) | HbA1c to 3-month average glycemia by the ADAG formula, reverse calculation and % ↔ mmol/mol conversion with ADA categories. |
| `lab-unit-converter` | [Lab Unit Converter](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/CALCULATORS.en.md#lab-unit-converter) | Conversion of 33 lab analytes between SI (mmol/L, µmol/L, nmol/L, pmol/L) and conventional units (mg/dL, ng/mL, pg/mL) by molar mass. |
| `vitamin-d-dose` | [Vitamin D: van Groningen model estimate](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/CALCULATORS.en.md#vitamin-d-dose) | 25(OH)D in two unit systems and a weight-based research estimate. No automatic treatment schedule. |
| `iron-deficiency` | [Iron Deficiency Calculator: TSAT, Ferritin and Ganzoni Deficit](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/CALCULATORS.en.md#iron-deficiency) | TSAT, a CRP-aware ferritin reference threshold and the arithmetic Ganzoni model. Biomarker patterns are not diagnoses. |
| `phenoage` | [PhenoAge Biological Age Calculator (Levine)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/CALCULATORS.en.md#phenoage) | A research estimate using nine biomarkers and age. The result does not predict individual life expectancy. |
| `fib-4` | [FIB-4 and APRI Calculator: Liver Fibrosis Indices](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/CALCULATORS.en.md#fib-4) | FIB-4 and APRI from age, AST, ALT and platelets, with thresholds and limitations for discussion with a clinician. |
| `free-testosterone` | [Free Testosterone Calculator (Vermeulen)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/CALCULATORS.en.md#free-testosterone) | Free and bioavailable testosterone fractions from the Vermeulen 1999 binding model. Results require method-specific reference intervals and clinical context. |
| `anion-gap` | [Anion Gap and Delta Ratio Calculator](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/CALCULATORS.en.md#anion-gap) | Anion gap corrected for albumin (Figge) and the ΔAG/ΔHCO₃ delta ratio to distinguish high- and normal-anion-gap acidosis. |
| `corrected-calcium` | [Albumin-Corrected Calcium Calculator](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/CALCULATORS.en.md#corrected-calcium) | Educational calculation of albumin-adjusted total calcium using the simplified Payne formula. It does not measure ionized calcium or determine treatment. |
| `one-rep-max` | [1RM Calculator (One-Rep Max)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/CALCULATORS.en.md#one-rep-max) | Calculates the maximum load an athlete can lift for a single repetition without the injury risk of direct 1RM testing. |
| `heart-rate-zones` | [Heart Rate Training Zones Calculator](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/CALCULATORS.en.md#heart-rate-zones) | Calculates individual target heart rate zones accounting for both maximum heart rate and resting pulse (Heart Rate Reserve method). |
| `vo2max` | [VO2 Max Calculator (Cardiorespiratory Fitness)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/CALCULATORS.en.md#vo2max) | Evaluates aerobic power and cardiorespiratory fitness based on validated field protocols without specialized laboratory gas analysis equipment. |
| `ffmi` | [FFMI Calculator (Fat-Free Mass Index)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/CALCULATORS.en.md#ffmi) | Determines lean muscular mass relative to height, distinguishing genuine hypertrophy from body fat accumulation. |
| `katch-mcardle` | [Katch-McArdle BMR & TDEE Calculator](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/CALCULATORS.en.md#katch-mcardle) | Calculates basal metabolic rate (BMR) and total daily energy expenditure (TDEE) based strictly on lean muscle mass rather than total scale weight. |
| `ideal-body-weight` | [Ideal Body Weight Calculator (IBW & AdjBW)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/CALCULATORS.en.md#ideal-body-weight) | Calculates reference body weight according to recognized clinical equations and determines Adjusted Body Weight (AdjBW) for clinical nutrition and medicine. |
| `waist-ratios` | [Waist Anthropometric Index Calculator (WHtR, WHR, VAI)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/CALCULATORS.en.md#waist-ratios) | Evaluates body fat distribution, visceral adiposity, and cardiometabolic risk far more accurately than standard BMI. |
| `sweat-rate` | [Sweat Rate & Hydration Calculator](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/CALCULATORS.en.md#sweat-rate) | Determines individual sweat loss rate and calculates personalized post-exercise fluid and electrolyte replacement needs. |
| `muscle-potential` | [Maximum Muscular Potential Calculator (Casey Butt & Berkhan)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/CALCULATORS.en.md#muscle-potential) | Estimates the maximum drug-free lean body mass and muscular circumferences (chest, arms, thighs) achievable without anabolic pharmacology. |
| `powerlifting-coefficients` | [Powerlifting Coefficients Calculator (DOTS, Wilks, IPF GL)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/CALCULATORS.en.md#powerlifting-coefficients) | Evaluates and benchmarks relative strength in powerlifting (squat, bench press, deadlift) across diverse body weights and sexes using DOTS, Wilks, and IPF GL Points. |
| `protein-intake` | [Protein Intake Calculator (ISSN & ESPEN)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/CALCULATORS.en.md#protein-intake) | Determines individualized daily protein targets based on fitness goals, dietary pattern, and muscle protein synthesis (MPS) thresholds. |
| `fiber-intake` | [Dietary Fiber Intake Calculator (WHO & EFSA)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/CALCULATORS.en.md#fiber-intake) | Quantifies daily soluble and insoluble dietary fiber requirements to support gut microbiome diversity, optimize lipid profiles, and maintain healthy transit time. |
| `omega-3` | [Omega-3 Intake & Index Calculator (EPA + DHA)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/CALCULATORS.en.md#omega-3) | Determines therapeutic and maintenance dosages of active EPA and DHA fatty acids according to clinical indications and laboratory biomarkers. |
| `sodium-potassium` | [Sodium-Potassium Balance & Salt Calculator (Na:K)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/CALCULATORS.en.md#sodium-potassium) | Analyzes electrolyte balance between sodium and potassium, converting milligrams of sodium into dietary salt and identifying hypertension risk. |
| `alcohol` | [Alcohol Clearance & Sobriety Calculator (Widmark)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/CALCULATORS.en.md#alcohol) | Calculates peak and current blood alcohol concentration (BAC in ‰), precise time to complete sobriety, and empty caloric load from ethanol. |
| `caffeine` | [Caffeine Clearance & Sleep Timing Calculator](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/CALCULATORS.en.md#caffeine) | Simulates caffeine pharmacokinetics, biological half-life, and remaining bedtime adenosine blockade to safeguard deep slow-wave sleep. |
| `weight-loss-forecast` | [Dynamic Weight Loss Forecast Calculator (Kevin Hall Model)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/CALCULATORS.en.md#weight-loss-forecast) | Generates a realistic, non-linear weight loss trajectory using the NIH/NIDDK model of Kevin Hall, accounting for adaptive thermogenesis and body composition changes. |
| `sleep-cycles` | [Sleep Cycles Calculator](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/CALCULATORS.en.md#sleep-cycles) | A sleep timing tool based on 90-minute ultradian cycles (slow-wave and REM sleep phases) and average sleep onset latency. |
| `findrisc` | [FINDRISC Diabetes Risk Score](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/CALCULATORS.en.md#findrisc) | An internationally recognized WHO and IDF questionnaire for early screening of undiagnosed diabetes and estimating the 10-year risk of developing type 2 diabetes. |
| `debq` | [Dutch Eating Behavior Questionnaire (DEBQ)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/CALCULATORS.en.md#debq) | A classic validated psychological instrument designed to assess three primary eating behavior patterns: restrained eating, emotional eating, and external eating. |
| `phq-9` | [Patient Health Questionnaire-9 (PHQ-9 Depression)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/CALCULATORS.en.md#phq-9) | The international gold standard for primary depression screening and symptom severity assessment based on DSM-5 clinical criteria. |
| `gad-7` | [Generalized Anxiety Disorder 7-Item Scale (GAD-7)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/CALCULATORS.en.md#gad-7) | An international clinical screening instrument designed to rapidly evaluate the severity of generalized anxiety and emotional tension. |
| `pss-10` | [Perceived Stress Scale (PSS-10)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/CALCULATORS.en.md#pss-10) | The classic psychological scale by Sheldon Cohen designed to measure the degree to which situations in one's life are appraised as unpredictable, uncontrollable, and overloading. |
| `isi` | [Insomnia Severity Index (ISI)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/CALCULATORS.en.md#isi) | A concise 7-item clinical instrument designed to evaluate the nature, severity, and daytime impact of insomnia symptoms. |
| `scoff` | [SCOFF Eating Disorder Screening Questionnaire](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/CALCULATORS.en.md#scoff) | An internationally recognized 5-question clinical screening tool designed to identify the risk of eating disorders (anorexia nervosa and bulimia nervosa). |
| `ies-2` | [Intuitive Eating Scale-2 (IES-2)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/CALCULATORS.en.md#ies-2) | A scientifically validated 23-item psychometric instrument by Tracy Tylka designed to measure adaptive, intuitive relationships with food and body signals. |
| `yfas` | [Yale Food Addiction Scale mYFAS 2.0](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/CALCULATORS.en.md#yfas) | An adapted scientific questionnaire developed at Yale University to assess symptoms of addictive eating behavior toward highly palatable, ultra-processed foods. |
| `eating-behavior-wizard` | [Eating Behavior Diagnostic Wizard](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/CALCULATORS.en.md#eating-behavior-wizard) | An integrated diagnostic wizard by NutriFit synthesizing leading validated scales to identify your core eating behavior archetype and personalized action plan. |


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

[Native API](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/NATIVE_REACT.md) · [Service](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/SERVICE_MODEL.md) · [Account](https://nutrifit.health/widgets/integrations?lang=en)

## License and scope

Copyright (c) 2026 **NUTRIFIT LLC**. Adapter and native dish UI code are distributed under the standard MIT license. The code license does not grant hosted service quotas, white-label entitlement, NutriFit trademark rights or ownership of clinical questionnaire instruments. Backend, private account logic and food catalog are not included. Medical and psychological calculators retain their method limitations and are not a diagnosis.

[MIT](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/LICENSE) · [GitHub](https://github.com/nutrifit-health/nutrifit-widgets)

Branded widget headers use the official NutriFit logo: light, dark, or the system preference with `theme="auto"`. White-label integrations retain the customer brand. Native CSS embeds the PNG assets; a restrictive host CSP must allow `data:` in `img-src`. See [NOTICE](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/NOTICE) for brand attribution.
