# Complete catalog — NutriFit

[English](../README.md) · [Русский](README.ru.md) · [Español](README.es.md) · [Українська](README.uk.md) · [Қазақша](README.kk.md) · [O‘zbekcha](README.uz.md)

These instructions reuse the existing public NutriFit descriptions and methods. Choose a calculator below and use its exact ID in any adapter. The widget and public page reuse the same calculator component.

Free catalog widgets can request the existing branded server PDF. It is a snapshot of the displayed inputs/results, not an independent recalculation or diagnostic validation. Server availability is required. For questionnaires, finish answering before exporting.

- [Daily calorie needs calculator (TDEE)](#tdee)
- [Macronutrient calculator](#macros)
- [Water intake calculator](#water)
- [Body composition calculator](#body-composition)
- [Glycemic load calculator](#glycemic-load)
- [Nutrient deficiency risk screening](#deficiency-risk)
- [Health & Nutrition Balance Wheel](#health-balance-wheel)
- [HOMA-IR Calculator: Insulin Resistance Index](#homa-ir)
- [TyG Index Calculator (Triglycerides × Glucose)](#tyg-index)
- [Lipid Panel Calculator: LDL, non-HDL and Atherogenic Indices](#lipid-profile)
- [eGFR Calculator (CKD-EPI 2021)](#egfr)
- [HbA1c ↔ Average Glucose (eAG) Converter](#hba1c-eag)
- [Lab Unit Converter](#lab-unit-converter)
- [Vitamin D: van Groningen model estimate](#vitamin-d-dose)
- [Iron Deficiency Calculator: TSAT, Ferritin and Ganzoni Deficit](#iron-deficiency)
- [PhenoAge Biological Age Calculator (Levine)](#phenoage)
- [FIB-4 and APRI Calculator: Liver Fibrosis Indices](#fib-4)
- [Free Testosterone Calculator (Vermeulen)](#free-testosterone)
- [Anion Gap and Delta Ratio Calculator](#anion-gap)
- [Albumin-Corrected Calcium Calculator](#corrected-calcium)
- [1RM Calculator (One-Rep Max)](#one-rep-max)
- [Heart Rate Training Zones Calculator](#heart-rate-zones)
- [VO2 Max Calculator (Cardiorespiratory Fitness)](#vo2max)
- [FFMI Calculator (Fat-Free Mass Index)](#ffmi)
- [Katch-McArdle BMR & TDEE Calculator](#katch-mcardle)
- [Ideal Body Weight Calculator (IBW & AdjBW)](#ideal-body-weight)
- [Waist Anthropometric Index Calculator (WHtR, WHR, VAI)](#waist-ratios)
- [Sweat Rate & Hydration Calculator](#sweat-rate)
- [Maximum Muscular Potential Calculator (Casey Butt & Berkhan)](#muscle-potential)
- [Powerlifting Coefficients Calculator (DOTS, Wilks, IPF GL)](#powerlifting-coefficients)
- [Protein Intake Calculator (ISSN & ESPEN)](#protein-intake)
- [Dietary Fiber Intake Calculator (WHO & EFSA)](#fiber-intake)
- [Omega-3 Intake & Index Calculator (EPA + DHA)](#omega-3)
- [Sodium-Potassium Balance & Salt Calculator (Na:K)](#sodium-potassium)
- [Alcohol Clearance & Sobriety Calculator (Widmark)](#alcohol)
- [Caffeine Clearance & Sleep Timing Calculator](#caffeine)
- [Dynamic Weight Loss Forecast Calculator (Kevin Hall Model)](#weight-loss-forecast)
- [Sleep Cycles Calculator](#sleep-cycles)
- [FINDRISC Diabetes Risk Score](#findrisc)
- [Dutch Eating Behavior Questionnaire (DEBQ)](#debq)
- [Patient Health Questionnaire-9 (PHQ-9 Depression)](#phq-9)
- [Generalized Anxiety Disorder 7-Item Scale (GAD-7)](#gad-7)
- [Perceived Stress Scale (PSS-10)](#pss-10)
- [Insomnia Severity Index (ISI)](#isi)
- [SCOFF Eating Disorder Screening Questionnaire](#scoff)
- [Intuitive Eating Scale-2 (IES-2)](#ies-2)
- [Yale Food Addiction Scale mYFAS 2.0](#yfas)
- [Eating Behavior Diagnostic Wizard](#eating-behavior-wizard)

<a id="tdee"></a>

## Daily calorie needs calculator (TDEE)

`tdee` · [NutriFit](https://nutrifit.health/calculators/tdee)

Calculates basal metabolic rate and total daily energy expenditure, plus calorie targets for losing, maintaining and gaining weight.

### How to use

1. Enter body stats: Provide accurate weight, height, sex, and age to compute your Basal Metabolic Rate (BMR).
2. Select activity level: Be honest with your weekly routine. If working a desk job, do not overestimate your activity without consistent sports.
3. Get target calories: Review calories for weight maintenance, healthy fat loss (-500 kcal), or lean muscle gain (+300 kcal).

### Method and formula

Basal metabolic rate (BMR) is calculated with the Mifflin-St Jeor equation of 1990 — the current standard for healthy adults. Total daily energy expenditure (TDEE) is BMR multiplied by an activity factor. The weight-loss target is 20% below TDEE and the gain target is 15% above it: these rates change body weight without losing muscle tissue and without sharp swings.

BMR (men) = 10 × weight(kg) + 6.25 × height(cm) − 5 × age + 5; BMR (women) = 10 × weight(kg) + 6.25 × height(cm) − 5 × age − 161; TDEE = BMR × activity factor

### Limitations

The equation was derived on healthy adults and carries an error of about ±10%. It ignores body composition: with high muscle mass the result is underestimated, with obesity it is overestimated. Pregnancy, childhood, elite sport and thyroid disorders require separate methods.

### Sources

- [Mifflin M.D., St Jeor S.T. et al. A new predictive equation for resting energy expenditure in healthy individuals. Am J Clin Nutr, 1990;51(2):241–247](https://pubmed.ncbi.nlm.nih.gov/2305711/)
- [FAO/WHO/UNU. Human Energy Requirements. Report of a Joint Expert Consultation, 2004](https://www.fao.org/4/y5686e/y5686e00.htm)

<a id="macros"></a>

## Macronutrient calculator

`macros` · [NutriFit](https://nutrifit.health/calculators/macros)

Splits a daily calorie target into protein, fat and carbohydrates based on body weight and goal — in grams, calories and percentages.

### How to use

1. Choose your calculation mode: Either enter your existing calorie target, or let NutriFit calculate your Total Daily Energy Expenditure (TDEE) based on your age, sex, height, weight, and activity.
2. Select your goal and body weight: Choose fat loss (20% deficit), weight maintenance, or muscle gain (15% surplus). Body weight can be entered in kilograms or pounds.
3. Get your personalized macro targets: Instantly view your recommended protein, fat, and carbohydrate intake in grams, calories, and percentage of total energy.

### Method and formula

Protein and fat are calculated from body weight rather than as a share of calories: these are physiological requirements that should not shift with intake. Protein follows the ISSN position stand (1.4–2.4 g/kg depending on goal). Fat is estimated from body weight using a practical range of 0.8–1.2 g/kg, and the resulting percentage of energy is compared with the AMDR reference range of 20–35%. Carbohydrates take the remaining calories: they fuel training and brain function.

Protein(g) = weight × goal factor; Fat(g) = weight × 0.8…1.2; Carbs(g) = (calories − protein × 4 − fat × 9) / 4

### Limitations

Calculating from total body weight overestimates protein in marked obesity — lean body mass is the better basis there. The model does not cover meal distribution, fibre or individual carbohydrate tolerance.

### Sources

- [Jäger R. et al. International Society of Sports Nutrition Position Stand: Protein and Exercise. J Int Soc Sports Nutr, 2017;14:20](https://pubmed.ncbi.nlm.nih.gov/28642676/)
- [Institute of Medicine. Dietary Reference Intakes for Energy, Carbohydrate, Fiber, Fat, Fatty Acids, Cholesterol, Protein, and Amino Acids, 2005 (AMDR)](https://nap.nationalacademies.org/catalog/10490)

<a id="water"></a>

## Water intake calculator

`water` · [NutriFit](https://nutrifit.health/calculators/water)

Calculates daily fluid needs from body weight with adjustments for physical activity and hot climate.

### How to use

1. Enter body weight: Baseline physiological water need is directly proportional to mass (approx. 30–35 ml per kg, or ~0.5 fl oz per lb).
2. Account for physical exercise: Add 350–500 ml (12–16 fl oz) of fluid for every 30 minutes of sweat-inducing exercise.
3. Adjust for temperature & climate: Hot weather (>25°C / 77°F) or dry indoor climates increase respiratory and transdermal water loss by ~500 ml.

### Method and formula

The baseline is 30 ml per kg of body weight for adults and 25 ml/kg after 60, when renal concentrating ability declines. Each hour of intense activity adds 500 ml to cover sweat losses, and a hot climate or dry heated room adds another 500 ml. The total is full water requirement; 20–30% of it comes from food, so the amount that must come from drinks is shown separately (EFSA, 2010).

Total(ml) = weight × 30 (or × 25 after 60) + 500 × hours of activity + 500 in heat; Drinks(ml) = total × 0.75

### Limitations

A reference point for healthy adults. In heart or kidney failure, on diuretics, during fever and in hot industrial work the target is set by a physician. Thirst and urine colour remain more reliable guides than any formula.

### Sources

- [EFSA Panel on Dietetic Products. Scientific Opinion on Dietary Reference Values for water, 2010](https://www.efsa.europa.eu/en/efsajournal/pub/1459)
- [Sawka M.N. et al. American College of Sports Medicine Position Stand: Exercise and Fluid Replacement, 2007](https://pubmed.ncbi.nlm.nih.gov/17277604/)

<a id="body-composition"></a>

## Body composition calculator

`body-composition` · [NutriFit](https://nutrifit.health/calculators/body-composition)

Estimates body fat percentage from circumferences, calculates fat and lean mass and body mass index.

### How to use

1. Grab a flexible tape measure: Use a standard measuring tape snug against the skin without compressing soft tissue. Measure in the morning.
2. Take required circumferences: Men need neck and waist. Women need neck, waist, and hips. Keep the tape parallel to the floor.
3. Review your body composition: View your estimated body fat percentage, total fat mass, and lean muscle mass.

### Method and formula

Body fat is estimated with the U.S. Navy method (Hodgdon and Beckett, 1984): it uses height and the circumferences of neck and waist, plus hips for women. The method was chosen because it needs no equipment and its error is comparable to consumer bioimpedance scales. BMI is calculated as well using the WHO classification — it says nothing about composition but allows comparison with population norms.

Men: %fat = 495 / (1.0324 − 0.19077 × log₁₀(waist − neck) + 0.15456 × log₁₀(height)) − 450; Women: %fat = 495 / (1.29579 − 0.35004 × log₁₀(waist + hip − neck) + 0.221 × log₁₀(height)) − 450; BMI = weight / height²

### Limitations

The error is around ±3–4% against DXA and grows with atypical body shapes. Measure in the morning before eating, with the tape snug but not tight, at the same landmarks each time: a 1 cm difference at the waist noticeably shifts the result. BMI does not distinguish muscle from fat and does not apply to athletes, pregnancy or children.

### Sources

- [Hodgdon J.A., Beckett M.B. Prediction of percent body fat for U.S. Navy men and women from body circumferences and height. Naval Health Research Center, 1984](https://apps.dtic.mil/sti/citations/ADA143890)
- [WHO. Obesity: preventing and managing the global epidemic. WHO Technical Report Series 894, 2000](https://www.who.int/publications/i/item/WHO_TRS_894)

<a id="glycemic-load"></a>

## Glycemic load calculator

`glycemic-load` · [NutriFit](https://nutrifit.health/calculators/glycemic-load)

Calculates the glycemic load of a serving from its glycemic index and carbohydrate content — a measure that reflects the real glucose response better than the index alone.

### How to use

1. Select food or enter GI: Choose from official international tables (Atkinson 2021) or type in the Glycemic Index.
2. Specify carbs & portion size: Input carbohydrate grams per 100g and your actual serving weight in grams.
3. Evaluate metabolic impact: Determine the true blood glucose response: Low (≤10), Medium (11–19), or High (≥20).

### Method and formula

The glycemic index describes how fast glucose rises after a portion containing 50 g of carbohydrate, but says nothing about the size of a real serving. Glycemic load accounts for both: the index is multiplied by the carbohydrate in the actual serving and divided by 100. That is why watermelon has a high index yet a low load — a serving carries little carbohydrate.

Serving carbs(g) = carbs per 100 g × serving weight / 100; GL = GI × serving carbs / 100

### Limitations

Published index values are averages: variety, ripeness, milling, cooking and the presence of protein, fat and fibre all change the glucose response. Individual responses vary widely, and in diabetes this calculation does not replace glucose measurement or monitoring data.

### Sources

- [Atkinson F.S., Brand-Miller J.C. et al. International tables of glycemic index and glycemic load values 2021. Am J Clin Nutr, 2021;114(5):1625–1632](https://pubmed.ncbi.nlm.nih.gov/34258626/)
- [Augustin L.S.A. et al. Glycemic index, glycemic load and glycemic response: International Scientific Consensus Summit. Nutr Metab Cardiovasc Dis, 2015;25(9):795–815](https://pubmed.ncbi.nlm.nih.gov/26160327/)

<a id="deficiency-risk"></a>

## Nutrient deficiency risk screening

`deficiency-risk` · [NutriFit](https://nutrifit.health/calculators/deficiency-risk)

Mark the lifestyle and diet factors that apply to you and see which nutrient deficiencies are likely and which laboratory tests confirm them.

### How to use

1. Mark dietary habits: Identify dietary exclusions such as meat, seafood, or dairy avoidance.
2. Check lifestyle & medications: Factor in sunlight exposure, intense athletics, and chronic medications like metformin or antacids.
3. Review lab recommendations: Receive a tailored risk score and the gold-standard diagnostic blood markers for each nutrient.

### Method and formula

This is a risk checklist, not a diagnosis. Every factor is mapped to the nutrients for which it is listed as a risk factor in the NIH Office of Dietary Supplements fact sheets and in EFSA dietary reference value materials. The weight reflects the strength of the link: 3 points for a situation where deficiency is expected without compensation, 2 for a significant factor, 1 for an additional contribution. Points are summed per nutrient: from 2 points the risk is moderate, from 4 it is high.

Nutrient score = sum of the weights of the selected factors; 0–1 point is low risk, 2–3 moderate, 4 and above high

### Limitations

The screening relies only on the factors you selected and ignores actual intake, supplement use, genetics and comorbidities. It neither confirms nor rules out a deficiency — nutrient status is determined in the laboratory and interpreted by a physician or nutrition professional.

### Sources

- [NIH Office of Dietary Supplements. Dietary Supplement Fact Sheets (группы риска по нутриентам)](https://ods.od.nih.gov/factsheets/list-all/)
- [EFSA. Dietary Reference Values for the EU (DRV Finder)](https://multimedia.efsa.europa.eu/drvs/index.htm)

<a id="health-balance-wheel"></a>

## Health & Nutrition Balance Wheel

`health-balance-wheel` · [NutriFit](https://nutrifit.health/calculators/health-balance-wheel)

Interactive radar chart of 8 health and lifestyle dimensions. Identifies bottlenecks (Liebig's Law of the Minimum) and links deficits to NutriFit tools.

### How to use

1. Rate 8 Lifestyle Pillars: Assign scores from 1 to 10 for each dimension. Rely on dynamic anchors beneath the sliders for objective qualitative benchmarks.
2. Identify Your Bottlenecks: The test identifies lowest-scoring bottleneck pillars. According to Liebig's Law, these bottlenecks dictate overall biological resilience.
3. Execute 48-Hour Micro-Habits: Avoid overhauling all 8 areas at once. Focus on 1–2 limiting factors, connect specialized NutriFit tools, and take action within 48 hours.

### Method and formula

Based on Lifestyle Medicine principles and Justus von Liebig's Law of the Minimum. 8 fundamental pillars (nutrition quality, energy, hydration, sleep, activity, mindful eating, gut health, and prevention) are rated on a 10-point scale. The overall score reflects vitality, while the balance index evaluates variance to assess biological resilience.

Overall Score = (Σ Scores / 8) × 10; Balance Index = max(0, 100 − SD × 18); Bottlenecks = min(Scores) where value ≤ 6

### Limitations

Self-assessment serves as a screening tool reflecting subjective habits and wellness. It does not replace clinical laboratory testing or medical consultations, but helps prioritize high-yield lifestyle adjustments.

### Sources

- [Liebig J. Die organische Chemie in ihrer Anwendung auf Agricultur und Physiologie. Vieweg, Braunschweig, 1840 (Закон минимума Либиха)](https://archive.org/details/dieorganischech01liebgoog)
- [American College of Lifestyle Medicine (ACLM). Standards and Core Competencies for Lifestyle Medicine, 2022](https://lifestylemedicine.org/)
- [Katz D.L. et al. Lifestyle Medicine: The Foundation of Health Care. Am J Prev Med, 2018;54(5):737–742](https://pubmed.ncbi.nlm.nih.gov/29571948/)

<a id="homa-ir"></a>

## HOMA-IR Calculator: Insulin Resistance Index

`homa-ir` · [NutriFit](https://nutrifit.health/calculators/homa-ir)

HOMA-IR, HOMA-β and QUICKI from fasting glucose and insulin: insulin resistance and beta-cell function with reference ranges and interpretation.

### How to use

1. Test glucose and insulin from one sample: Both markers must be measured fasting from the same blood draw — in the morning after 8–12 hours without food, coffee or exercise. Insulin "from another day" makes the index meaningless.
2. Enter values in the units on your report: Labs report glucose in mmol/L or mg/dL and insulin in µIU/mL (mIU/L) or pmol/L. Switch the units to match your report — the calculator converts automatically.
3. Compare all three indices: Review the indices alongside the original results, sampling conditions and laboratory reference values. HOMA-β cannot establish pancreatic exhaustion.

### Method and formula

HOMA1 (Matthews, 1985) and QUICKI (Katz, 2000) model fasting glucose and insulin. They describe different aspects of the same data and are used mainly in research. HOMA-IR estimates insulin resistance, HOMA-β estimates secretion within the model, and QUICKI estimates insulin sensitivity. These indices do not replace clinical diagnostic criteria for diabetes.

HOMA-IR = Glucose (mmol/L) × Insulin (µIU/mL) / 22.5
HOMA-β (%) = 20 × Insulin (µIU/mL) / (Glucose (mmol/L) − 3.5)
QUICKI = 1 / [log10(Insulin, µIU/mL) + log10(Glucose, mg/dL)]

### Limitations

The indices are valid only for fasting samples (8–12 h) and do not apply during insulin therapy, secretagogue use, decompensated type 1 diabetes or low glucose (HOMA-β is undefined at glucose ≤ 3.5 mmol/L). Insulin reference values depend on the assay, and HOMA-IR cut-offs on the population (2.0–3.8 across studies). The result is not a diagnosis but a reason to discuss glucose metabolism with a physician.

### Sources

- [Matthews D.R. et al. Homeostasis model assessment: insulin resistance and β-cell function from fasting plasma glucose and insulin concentrations in man. Diabetologia, 1985;28(7):412–419](https://pubmed.ncbi.nlm.nih.gov/3899825/)
- [Katz A. et al. Quantitative insulin sensitivity check index (QUICKI): a simple, accurate method for assessing insulin sensitivity in humans. J Clin Endocrinol Metab, 2000;85(7):2402–2410](https://pubmed.ncbi.nlm.nih.gov/10902785/)
- [Gayoso-Diz P. et al. Insulin resistance (HOMA-IR) cut-off values and the metabolic syndrome in a general adult population. BMC Endocr Disord, 2013;13:47](https://pubmed.ncbi.nlm.nih.gov/24131857/)

<a id="tyg-index"></a>

## TyG Index Calculator (Triglycerides × Glucose)

`tyg-index` · [NutriFit](https://nutrifit.health/calculators/tyg-index)

TyG index and its derivatives TyG-BMI and TyG-WC: insulin resistance and cardiometabolic risk from fasting triglycerides and glucose — no insulin assay needed.

### How to use

1. Take fasting triglycerides and glucose: Both are part of a standard blood chemistry panel. The draw must be fasting: post-meal triglycerides rise 1.5–2-fold and inflate the index.
2. Set the units from your report: The formula is defined for mg/dL. If your lab reports mmol/L, leave the switch on mmol/L — the calculator converts to mg/dL automatically.
3. Add weight, height and waist: TyG-BMI and TyG-WC detect visceral obesity and fatty liver more accurately than "plain" TyG. Measure the waist at the navel on exhalation.

### Method and formula

The TyG index (Simental-Mendía, 2008) is the natural logarithm of half the product of fasting triglycerides and glucose in mg/dL. It reflects lipotoxicity and impaired glucose utilization — two key mechanisms of insulin resistance — and correlates with the euglycemic clamp as well as HOMA-IR, without the expensive and poorly standardized insulin assay. The derivatives TyG-BMI and TyG-WC add body weight and waist circumference, improving detection of metabolic syndrome and NAFLD.

TyG = ln[ Triglycerides (mg/dL) × Glucose (mg/dL) / 2 ]
TyG-BMI = TyG × BMI (kg/m²)
TyG-WC = TyG × Waist circumference (cm)
Conversion: TG mg/dL = mmol/L × 88.57; glucose mg/dL = mmol/L × 18.016

### Limitations

There is no single TyG cut-off: across populations the high-risk threshold ranges from 8.5 to 9.0, and is lower in East Asian cohorts. The index is distorted by familial hypertriglyceridemia, fibrates, statins and alcohol the day before, and by acute illness. Fasting values (8–12 h) are required. It is a screening tool, not a diagnosis.

### Sources

- [Simental-Mendía L.E., Rodríguez-Morán M., Guerrero-Romero F. The product of fasting glucose and triglycerides as surrogate for identifying insulin resistance in apparently healthy subjects. Metab Syndr Relat Disord, 2008;6(4):299–304](https://pubmed.ncbi.nlm.nih.gov/19067533/)
- [Guerrero-Romero F. et al. The product of triglycerides and glucose, a simple measure of insulin sensitivity. Comparison with the euglycemic-hyperinsulinemic clamp. J Clin Endocrinol Metab, 2010;95(7):3347–3351](https://pubmed.ncbi.nlm.nih.gov/20484475/)
- [Sánchez-García A. et al. Diagnostic accuracy of the triglyceride and glucose index for insulin resistance: a systematic review. Int J Endocrinol, 2020;2020:4678526](https://pubmed.ncbi.nlm.nih.gov/32256572/)

<a id="lipid-profile"></a>

## Lipid Panel Calculator: LDL, non-HDL and Atherogenic Indices

`lipid-profile` · [NutriFit](https://nutrifit.health/calculators/lipid-profile)

Calculated LDL by two methods, non-HDL, remnant cholesterol and five atherogenic indices from a standard lipid panel — with ESC/EAS target values.

### How to use

1. Enter the three basic markers: Total cholesterol, HDL and triglycerides are on every lipid panel. Choose the units on your report: mmol/L (Europe, CIS) or mg/dL (USA, some Latin American labs).
2. Add measured LDL if available: Direct LDL measurement is more accurate than calculation. If absent, the calculator uses the Sampson equation and shows Friedewald in parallel for comparison with your lab report.
3. Look at ratios, not a single number: Normal total cholesterol with low HDL and high triglycerides is an atherogenic profile. AIP and the atherogenic coefficient reveal it when "TC is normal".

### Method and formula

From total cholesterol, HDL and triglycerides the calculator derives LDL with the classic Friedewald formula (1972) and with the Sampson equation (NIH, 2020), which stays accurate at triglycerides up to 9 mmol/L and at low LDL. Non-HDL is all atherogenic cholesterol (LDL + VLDL + remnant particles), and remnant cholesterol is non-HDL minus LDL. The Castelli indices (TC/HDL and LDL/HDL), Klimov’s atherogenic coefficient and the atherogenic index of plasma AIP = log10(TG/HDL) reflect the balance of "bad" and "protective" fractions and predict risk better than single markers.

LDL (Friedewald, mmol/L) = TC − HDL − TG / 2.2   [when TG ≤ 4.5 mmol/L]
LDL (Sampson, mg/dL) = TC/0.948 − HDL/0.971 − (TG/8.56 + TG×non-HDL/2140 − TG²/16100) − 9.44
non-HDL = TC − HDL;  Remnant-C = non-HDL − LDL
AC (Klimov) = (TC − HDL) / HDL;  Castelli I = TC/HDL;  Castelli II = LDL/HDL
AIP = log10(TG / HDL), mmol/L

### Limitations

Calculated LDL is an estimate, not a measurement: at TG > 4.5 mmol/L Friedewald does not apply, and at TG > 9 mmol/L or chylomicronemia even Sampson is inaccurate. The indices do not replace overall risk assessment by SCORE2, apolipoprotein B and lipoprotein(a). LDL targets depend on the risk category (1.4 to 3.0 mmol/L per ESC/EAS 2019) and are set by a physician. Fasting or non-fasting per your lab’s instructions.

### Sources

- [Friedewald W.T., Levy R.I., Fredrickson D.S. Estimation of the concentration of low-density lipoprotein cholesterol in plasma, without use of the preparative ultracentrifuge. Clin Chem, 1972;18(6):499–502](https://pubmed.ncbi.nlm.nih.gov/4337382/)
- [Sampson M. et al. A new equation for calculation of low-density lipoprotein cholesterol in patients with normolipidemia and/or hypertriglyceridemia. JAMA Cardiol, 2020;5(5):540–548](https://pubmed.ncbi.nlm.nih.gov/32101259/)
- [Dobiášová M., Frohlich J. The plasma parameter log (TG/HDL-C) as an atherogenic index. Clin Biochem, 2001;34(7):583–588](https://pubmed.ncbi.nlm.nih.gov/11738396/)
- [Mach F. et al. 2019 ESC/EAS Guidelines for the management of dyslipidaemias. Eur Heart J, 2020;41(1):111–188](https://pubmed.ncbi.nlm.nih.gov/31504418/)

<a id="egfr"></a>

## eGFR Calculator (CKD-EPI 2021)

`egfr` · [NutriFit](https://nutrifit.health/calculators/egfr)

Estimated GFR by CKD-EPI 2021 (creatinine, optionally cystatin C), Cockcroft–Gault creatinine clearance and KDIGO CKD stage — with µmol/L and mg/dL conversion.

### How to use

1. Find creatinine on your report: Serum creatinine is part of basic chemistry. Labs in Europe and the CIS report µmol/L; the USA and Latin America report mg/dL. Pick the matching unit.
2. Set sex and age: Muscle mass — and therefore "normal" creatinine — differs between men and women and declines with age; the equation accounts for this. The race coefficient was removed in the 2021 version.
3. Add cystatin C if available: Cystatin C does not depend on muscle mass or diet. The combined equation is recommended by KDIGO 2024 to confirm CKD at eGFRcr 45–59 without albuminuria.

### Method and formula

Glomerular filtration rate is the key measure of kidney function. The CKD-EPI 2021 equation (Inker et al., NEJM) derives it from serum creatinine, age and sex without the race coefficient, which has been removed from practice. When cystatin C is available the combined CKD-EPI 2021 cr-cys equation is used — more accurate in people with atypical muscle mass (athletes, sarcopenia, amputation, vegans). The calculator also shows Cockcroft–Gault creatinine clearance, still used for drug dosing, and the KDIGO CKD stage G1–G5.

eGFRcr = 142 × min(Scr/κ, 1)^α × max(Scr/κ, 1)^−1.200 × 0.9938^Age × 1.012 [female]
κ = 0.7 (female) / 0.9 (male);  α = −0.241 (female) / −0.302 (male);  Scr — creatinine, mg/dL (= µmol/L / 88.4)
eGFRcr-cys = 135 × min(Scr/κ,1)^α × max(Scr/κ,1)^−0.544 × min(Scys/0.8,1)^−0.323 × max(Scys/0.8,1)^−0.778 × 0.9961^Age × 0.963 [female]
Cockcroft–Gault (mL/min) = (140 − Age) × Weight (kg) × 0.85 [female] / (72 × Scr, mg/dL)

### Limitations

Estimated GFR is validated for stable adults aged 18+: in acute kidney injury, pregnancy, extreme body weight or muscle mass, amputation and with drugs that affect creatinine secretion (trimethoprim, cimetidine) it is inaccurate. A single eGFR < 60 does not mean CKD — the diagnosis requires confirmation after 3 months and albuminuria assessment. Cockcroft–Gault is not indexed to body surface area and overestimates clearance in obesity.

### Sources

- [Inker L.A. et al. New creatinine- and cystatin C-based equations to estimate GFR without race. N Engl J Med, 2021;385(19):1737–1749](https://pubmed.ncbi.nlm.nih.gov/34554658/)
- [KDIGO 2012 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease. Kidney Int Suppl, 2013;3(1):1–150](https://kdigo.org/guidelines/ckd-evaluation-and-management/)
- [Cockcroft D.W., Gault M.H. Prediction of creatinine clearance from serum creatinine. Nephron, 1976;16(1):31–41](https://pubmed.ncbi.nlm.nih.gov/1244564/)

<a id="hba1c-eag"></a>

## HbA1c ↔ Average Glucose (eAG) Converter

`hba1c-eag` · [NutriFit](https://nutrifit.health/calculators/hba1c-eag)

HbA1c to 3-month average glycemia by the ADAG formula, reverse calculation and % ↔ mmol/mol conversion with ADA categories.

### How to use

1. Choose what you have: If you have an HbA1c result, enter it. If you keep a meter or CGM and know your 2–3-month average glucose, switch to the reverse calculation.
2. Set the units on your report: HbA1c is reported in percent (NGSP, USA and CIS) or mmol/mol (IFCC, Europe). 6.5% equals 48 mmol/mol — the calculator converts automatically.
3. Compare eAG with your meter readings: If your meter average is noticeably below eAG, you are probably testing mostly fasting and missing post-meal peaks. A gap over 1.5 mmol/L is worth discussing with a physician.

### Method and formula

Glycated hemoglobin reflects average glucose over 8–12 weeks — the lifespan of a red blood cell. The A1c-Derived Average Glucose study (ADAG, Nathan 2008) matched HbA1c against continuous glucose monitoring in 507 people and derived a linear relationship: eAG (mg/dL) = 28.7 × HbA1c − 46.7. The calculator works both ways — from HbA1c to average glucose and from a known average (e.g. from a meter or CGM) to the expected HbA1c — and converts NGSP percent to IFCC units (mmol/mol) used in Europe and Australia.

eAG (mg/dL) = 28.7 × HbA1c (%) − 46.7
eAG (mmol/L) = 1.59 × HbA1c (%) − 2.59
HbA1c (mmol/mol, IFCC) = (HbA1c (%, NGSP) − 2.15) × 10.929
Reverse: HbA1c (%) = (eAG, mg/dL + 46.7) / 28.7

### Limitations

HbA1c is inaccurate in conditions that alter red-cell lifespan or hemoglobin structure: anemia, hemoglobinopathies, pregnancy, CKD, recent blood loss or transfusion, iron and B12 deficiency. In 10–15% of people the individual HbA1c–glucose relationship differs noticeably from the average (the "glycation gap"), so eAG is a population estimate, not a measurement. A diabetes diagnosis requires confirmation by a repeat test.

### Sources

- [Nathan D.M. et al. Translating the A1C assay into estimated average glucose values. Diabetes Care, 2008;31(8):1473–1478](https://pubmed.ncbi.nlm.nih.gov/18540046/)
- [American Diabetes Association. Diagnosis and Classification of Diabetes: Standards of Care in Diabetes — 2024. Diabetes Care, 2024;47(Suppl 1):S20–S42](https://pubmed.ncbi.nlm.nih.gov/38078589/)
- [NGSP. IFCC Standardization of HbA1c: master equation NGSP ↔ IFCC](https://ngsp.org/ifcc.asp)

<a id="lab-unit-converter"></a>

## Lab Unit Converter

`lab-unit-converter` · [NutriFit](https://nutrifit.health/calculators/lab-unit-converter)

Conversion of 33 lab analytes between SI (mmol/L, µmol/L, nmol/L, pmol/L) and conventional units (mg/dL, ng/mL, pg/mL) by molar mass.

### How to use

1. Choose the analyte: The list has the 33 most common analytes — from glucose and cholesterol to vitamin D, testosterone and cortisol. Cholesterol, LDL and HDL share one factor.
2. Set the direction: SI → conventional if your report is in mmol/L or nmol/L and the reference from a foreign paper is in mg/dL or ng/mL. And vice versa if the test was done abroad.
3. Convert the reference range, not just the number: Reference intervals depend on the lab method. Convert the normal limits from your report too, so you compare the value against the right range.

### Method and formula

A factor converts mass concentration into molar concentration using molar mass and volume units. The tool uses common laboratory factors from AMA and Labcorp. Insulin and prolactin factors depend on assay calibration: you can enter your laboratory’s factor. For urea, mg/dL refers to BUN, the mass of urea nitrogen, not the mass of the whole urea molecule.

SI = conventional value × factor. Reverse conversion: SI ÷ factor. Check your laboratory’s factor for insulin and prolactin; mg/dL BUN and mg/dL urea are not interchangeable.

### Limitations

Unit conversion does not interpret results or diagnose. Reference intervals depend on the laboratory and method; convert their limits separately. Verify insulin and prolactin factors with the laboratory. BUN conversion is not suitable for a result labelled urea in mg/dL.

### Sources

- [Young D.S. Implementation of SI units for clinical laboratory data. Style specifications and conversion tables. Ann Intern Med, 1987;106(1):114–129](https://pubmed.ncbi.nlm.nih.gov/3789557/)
- [AMA Manual of Style, 11th ed. Units of Measure: Conventional Units and SI Units in Clinical Chemistry. Oxford University Press, 2020](https://academic.oup.com/amamanualofstyle/si-conversion-calculator)
- [NIST Special Publication 811. Guide for the Use of the International System of Units (SI), 2008](https://www.nist.gov/pml/special-publication-811)

<a id="vitamin-d-dose"></a>

## Vitamin D: van Groningen model estimate

`vitamin-d-dose` · [NutriFit](https://nutrifit.health/calculators/vitamin-d-dose)

25(OH)D in two unit systems and a weight-based research estimate. No automatic treatment schedule.

### How to use

1. Enter measured 25(OH)D: 25-hydroxyvitamin D (calcidiol) specifically, not 1,25(OH)₂D. Report units are nmol/L or ng/mL; pick the right one and the calculator converts.
2. Check applicability: The 75 nmol/L target is fixed by the study, not selected as a universal normal value. This tool does not calculate the model at baseline levels of 50 nmol/L or above.
3. Enter body weight: Discuss the estimate with a clinician. The number does not determine a product, single dose or dosing frequency.

### Method and formula

The van Groningen (2010) model relates total cholecalciferol dose to weight and baseline 25(OH)D. This tool uses the fixed research target of 75 nmol/L, baseline below 50 nmol/L and weight 35–125 kg. The lower weight limit restricts this interface to an adult context; age and clinical exclusions require clinician assessment. It does not select a dosing schedule, maintenance dose or follow-up interval. Endocrine Society 2024 does not establish a universal target 25(OH)D for disease prevention in healthy people.

Total model estimate (IU) = 40 × (75 − 25(OH)D, nmol/L) × weight (kg). 1 ng/mL = 2.496 nmol/L.

### Limitations

A research calculation for discussion with a clinician, not an individual prescription. Do not use it for self-treatment during pregnancy, in children, or with calcium disorders, kidney disease, malabsorption or granulomatous disease. The model does not account for medicines or supplements; the total must not be taken as a single dose.

### Sources

- [van Groningen L. et al. Cholecalciferol loading dose guideline for vitamin D-deficient adults. Eur J Endocrinol, 2010;162(4):805–811](https://pubmed.ncbi.nlm.nih.gov/20139241/)
- [Endocrine Society. Vitamin D for the Prevention of Disease: Clinical Practice Guideline, 2024](https://www.endocrine.org/clinical-practice-guidelines/vitamin-d-for-prevention-of-disease)

<a id="iron-deficiency"></a>

## Iron Deficiency Calculator: TSAT, Ferritin and Ganzoni Deficit

`iron-deficiency` · [NutriFit](https://nutrifit.health/calculators/iron-deficiency)

TSAT, a CRP-aware ferritin reference threshold and the arithmetic Ganzoni model. Biomarker patterns are not diagnoses.

### How to use

1. Prepare your laboratory results: Use results from one laboratory assessment: ferritin, iron, TIBC or transferrin, Hb and CRP. Ask the laboratory about test preparation.
2. Add CRP: At measured CRP above 5 mg/L, the ferritin reference changes from 15 to 70 µg/L. This does not eliminate all interpretive uncertainty.
3. Discuss the biomarker pattern: Low Hb is not always caused by iron deficiency, and absence of a flag does not exclude deficiency. Interpret results with symptoms and clinical context.

### Method and formula

TSAT is serum iron divided by TIBC in matching units. TIBC derived from transferrin is approximate. Ferritin comparison uses WHO 2020 references: 15 µg/L without inflammation and 70 µg/L at CRP > 5 mg/L. Diseases and clinical context may require different thresholds. The pattern does not establish the cause of anemia. Ganzoni is shown below Hb 120 g/L in women or 130 g/L in men, using a fixed target of 150 g/L and 500 mg stores, only at weight ≥ 35 kg.

TSAT (%) = Serum iron / TIBC × 100
TIBC (µmol/L) ≈ Transferrin (g/L) × 25.1
Iron deficit (mg, Ganzoni) = Weight (kg) × (Target Hb − Hb, g/dL) × 2.4 + Stores (500 mg at weight ≥ 35 kg)
Conversion: iron µg/dL × 0.179 = µmol/L; Hb g/L / 10 = g/dL

### Limitations

For nonpregnant adults. Enter measured CRP; an unknown test must not be treated as zero. Ferritin and TSAT depend on inflammation, laboratory methods and recent treatment. Ganzoni does not select an administration route, product, dose per administration or treatment duration.

### Sources

- [WHO guideline on use of ferritin concentrations to assess iron status in individuals and populations. Geneva: World Health Organization, 2020](https://www.who.int/publications/i/item/9789240000124)
- [Ganzoni A.M. Intravenous iron-dextran: therapeutic and experimental possibilities. Schweiz Med Wochenschr, 1970;100(7):301–303](https://pubmed.ncbi.nlm.nih.gov/5413918/)
- [Venofer. Summary of Product Characteristics: Ganzoni formula and iron stores](https://www.medicines.org.uk/emc/product/5911/smpc)

<a id="phenoage"></a>

## PhenoAge Biological Age Calculator (Levine)

`phenoage` · [NutriFit](https://nutrifit.health/calculators/phenoage)

A research estimate using nine biomarkers and age. The result does not predict individual life expectancy.

### How to use

1. Get a CBC with differential and a chemistry panel: Needed: albumin, creatinine, fasting glucose, CRP (preferably high-sensitivity), alkaline phosphatase — from chemistry; white cells, lymphocyte %, MCV, RDW — from the blood count.
2. Enter values in SI units: Albumin in g/L (not g/dL), creatinine in µmol/L, glucose in mmol/L, CRP in mg/L. If your report uses other units, use the unit converter.
3. Track the trend, not a single number: Interpret the laboratory results with a clinician. A change in the number does not prove rejuvenation or intervention effectiveness.

### Method and formula

The Levine 2018 model combines nine biomarkers and chronological age. Coefficients were trained on NHANES; a Gompertz transformation expresses the profile as an age equivalent of population risk. No individual mortality forecast is shown. The difference from chronological age is simple subtraction, not the statistical PhenoAgeAccel residual or a rate of aging.

xb = −19.907 − 0.0336·Albumin(g/L) + 0.0095·Creatinine(µmol/L) + 0.1953·Glucose(mmol/L) + 0.0954·ln(CRP, mg/dL) − 0.0120·Lymphocytes(%) + 0.0268·MCV(fL) + 0.3306·RDW(%) + 0.00188·ALP(U/L) + 0.0554·WBC(10⁹/L) + 0.0804·Age
120-month risk = 1 − exp(−e^xb · (e^(120·0.0076927) − 1) / 0.0076927)
PhenoAge = 141.50225 + ln(−0.00553 · ln(1 − Risk)) / 0.09165

### Limitations

Research tool for ages 20–84. Acute illness changes biomarkers and the result. The number is not a diagnosis, lifespan or proof of rejuvenation. CRP below the detection limit requires a quantitative result rather than substituting zero.

### Sources

- [Levine M.E. et al. An epigenetic biomarker of aging for lifespan and healthspan. Aging (Albany NY), 2018;10(4):573–591](https://pubmed.ncbi.nlm.nih.gov/29676998/)
- [Liu Z. et al. A new aging measure captures morbidity and mortality risk across diverse subpopulations from NHANES IV: a cohort study. PLoS Med, 2018;15(12):e1002718](https://pubmed.ncbi.nlm.nih.gov/30596641/)

<a id="fib-4"></a>

## FIB-4 and APRI Calculator: Liver Fibrosis Indices

`fib-4` · [NutriFit](https://nutrifit.health/calculators/fib-4)

FIB-4 and APRI from age, AST, ALT and platelets, with thresholds and limitations for discussion with a clinician.

### How to use

1. Take AST, ALT and platelets: Transaminases from chemistry, platelets from the blood count. The tests should be from the same period (within 1–2 weeks) and outside acute illness.
2. Enter age and the AST ULN: FIB-4 depends on age: after 65 the low-risk cut-off rises to 2.0. APRI needs your lab’s AST upper limit of normal.
3. Follow the algorithm: Low FIB-4 — monitoring and risk-factor control. Gray zone — elastography. High — hepatologist. This is the official EASL/AASLD pathway for NAFLD.

### Method and formula

FIB-4 (Sterling, 2006) combines age, AST, ALT and platelets. In metabolic fatty liver disease pathways, a low result helps identify a lower likelihood of advanced fibrosis; intermediate or high results need further assessment. It is neither a fibrosis stage nor a diagnosis. APRI (Wai, 2003) was developed for chronic hepatitis C; its thresholds do not automatically transfer to other diseases.

FIB-4 = Age (years) × AST (U/L) / [ Platelets (10⁹/L) × √ALT (U/L) ]
APRI = [ AST / AST ULN ] × 100 / Platelets (10⁹/L)
FIB-4 cut-offs: < 1.3 (< 2.0 at age ≥ 65) low risk; 1.3–2.67 indeterminate; > 2.67 high
APRI cut-offs: < 0.5 low; > 1.5 significant fibrosis likely

### Limitations

FIB-4 helps estimate the likelihood of advanced fibrosis but cannot confirm or exclude it in every individual. Accuracy is low below age 35; do not interpret it during acute illness. Non-liver causes of low platelets and muscle-related AST elevation can distort the result. Thresholds depend on age, disease cause and clinical context.

### Sources

- [Sterling R.K. et al. Development of a simple noninvasive index to predict significant fibrosis in patients with HIV/HCV coinfection. Hepatology, 2006;43(6):1317–1325](https://pubmed.ncbi.nlm.nih.gov/16729309/)
- [Wai C.T. et al. A simple noninvasive index can predict both significant fibrosis and cirrhosis in patients with chronic hepatitis C. Hepatology, 2003;38(2):518–526](https://pubmed.ncbi.nlm.nih.gov/12883497/)
- [EASL Clinical Practice Guidelines on non-invasive tests for evaluation of liver disease severity and prognosis — 2021 update. J Hepatol, 2021;75(3):659–689](https://pubmed.ncbi.nlm.nih.gov/34166721/)

<a id="free-testosterone"></a>

## Free Testosterone Calculator (Vermeulen)

`free-testosterone` · [NutriFit](https://nutrifit.health/calculators/free-testosterone)

Free and bioavailable testosterone fractions from the Vermeulen 1999 binding model. Results require method-specific reference intervals and clinical context.

### How to use

1. Test total testosterone and SHBG in the morning: Testosterone peaks between 7 and 10 a.m. and falls 20–30% by evening. Test fasting, outside acute illness, preferably by LC-MS/MS.
2. Add albumin: Use measured albumin in g/L. The initial 43 g/L is an example; substituting it for a measurement adds uncertainty.
3. Look at the free fraction when SHBG is atypical: When SHBG changes, total testosterone and its free fraction may suggest different interpretations. Consider both alongside symptoms, the assay method and repeated measurements.

### Method and formula

Only 1–3% of blood testosterone is free, about 40–50% is tightly bound to sex hormone-binding globulin (SHBG), and the rest loosely to albumin. The free and albumin-bound fractions ("bioavailable testosterone") are biologically active. Direct measurement of free testosterone (equilibrium dialysis) is expensive and scarce, and immunoassays are inaccurate, so ISSAM, the Endocrine Society and the EAU recommend the Vermeulen calculation (1999): it solves the binding equilibrium with association constants of 1×10⁹ L/mol for SHBG and 3.6×10⁴ L/mol for albumin. The method matters most when SHBG is high (age, hyperthyroidism, liver disease, estrogens) or low (obesity, insulin resistance, hypothyroidism), when total testosterone misleads.

N = Kalb × [Albumin] + 1;  a = N × Kshbg;  b = N + Kshbg × ([SHBG] − [T])
Free T = (−b + √(b² + 4·a·[T])) / (2·a)
Bioavailable T = Free T × N
Kshbg = 1×10⁹ L/mol; Kalb = 3.6×10⁴ L/mol; concentrations in mol/L; albumin g/L / 69,000
Conversion: T ng/dL × 0.0347 = nmol/L; free T nmol/L × 288.4 = pg/mL

### Limitations

The calculation is valid when total testosterone is measured by an accurate method (LC-MS/MS or a calibrated immunoassay) in the morning between 7 and 11 a.m. fasting, twice several weeks apart. Abnormal albumin shifts the result; in pregnancy and on oral contraceptives SHBG changes sharply. Free testosterone references depend on method and age; the thresholds below apply to men — for women the calculator shows values without a category. A diagnosis of hypogonadism requires symptoms and an in-person work-up.

### Sources

- [Vermeulen A., Verdonck L., Kaufman J.M. A critical evaluation of simple methods for the estimation of free testosterone in serum. J Clin Endocrinol Metab, 1999;84(10):3666–3672](https://pubmed.ncbi.nlm.nih.gov/10523012/)
- [Bhasin S. et al. Testosterone therapy in men with hypogonadism: an Endocrine Society clinical practice guideline. J Clin Endocrinol Metab, 2018;103(5):1715–1744](https://pubmed.ncbi.nlm.nih.gov/29562364/)
- [Salonia A. et al. European Association of Urology guidelines on sexual and reproductive health — 2021 update: male sexual dysfunction. Eur Urol, 2021;80(3):333–357](https://pubmed.ncbi.nlm.nih.gov/34183196/)

<a id="anion-gap"></a>

## Anion Gap and Delta Ratio Calculator

`anion-gap` · [NutriFit](https://nutrifit.health/calculators/anion-gap)

Anion gap corrected for albumin (Figge) and the ΔAG/ΔHCO₃ delta ratio to distinguish high- and normal-anion-gap acidosis.

### How to use

1. Take electrolytes from one sample: Sodium, chloride and bicarbonate (or total CO₂) must come from one draw, ideally alongside blood gases. Different samples give a meaningless gap.
2. Add albumin: In ICU patients, cirrhosis, nephrotic syndrome and wasting albumin is often 20–30 g/L: without correction a high anion gap masquerades as normal.
3. Interpret the delta ratio in context: The delta ratio helps spot a second disorder (bicarbonate loss or alkalosis) behind a high-AG acidosis, but needs pH, lactate and the clinical picture.

### Method and formula

The anion gap is the difference between measured serum cations and anions, reflecting "unmeasured" anions: phosphates, sulfates, organic acids and negatively charged albumin. In metabolic acidosis it rises if acids accumulate (lactate, ketones, uremic toxins, toxic alcohols) and stays normal if bicarbonate is lost (diarrhea, renal tubular acidosis) and replaced by chloride. Since albumin is the main unmeasured anion, hypoalbuminemia falsely lowers the gap: Figge (1998) proposed a correction of 2.5 mmol/L per 1 g/dL fall in albumin. The delta ratio compares the rise in the gap with the fall in bicarbonate and reveals mixed disorders.

AG = Na − (Cl + HCO₃), mmol/L, without potassium.
Figge adjustment: AG + 0.25 × (40 − albumin, g/L).
Delta ratio = (adjusted AG − 12) / (24 − HCO₃).
Calculated only if AG > 12 and HCO₃ < 24. Delta-ratio bands suggest possible mixed disturbances; they are not diagnoses.

### Limitations

The anion gap reference depends on the analyzer: modern ion-selective electrodes give 3–11 mmol/L, older methods 8–16. Check your lab’s reference. The calculation excludes potassium; if your lab includes it, the reference is 4–5 higher. The delta ratio is a rough guide that needs context (pH, pCO₂, lactate, ketones). The calculator is meant for interpretation of acid-base disorders by professionals and does not replace blood gas analysis.

### Sources

- [Kraut J.A., Madias N.E. Serum anion gap: its uses and limitations in clinical medicine. Clin J Am Soc Nephrol, 2007;2(1):162–174](https://pubmed.ncbi.nlm.nih.gov/17699401/)
- [Figge J., Jabor A., Kazda A., Fencl V. Anion gap and hypoalbuminemia. Crit Care Med, 1998;26(11):1807–1810](https://pubmed.ncbi.nlm.nih.gov/9824071/)
- [Berend K., de Vries A.P., Gans R.O. Physiological approach to assessment of acid-base disturbances. N Engl J Med, 2014;371(15):1434–1445](https://pubmed.ncbi.nlm.nih.gov/25295502/)

<a id="corrected-calcium"></a>

## Albumin-Corrected Calcium Calculator

`corrected-calcium` · [NutriFit](https://nutrifit.health/calculators/corrected-calcium)

Educational calculation of albumin-adjusted total calcium using the simplified Payne formula. It does not measure ionized calcium or determine treatment.

### How to use

1. Take total calcium and albumin from one sample: Both are part of standard chemistry. Units: calcium in mmol/L or mg/dL, albumin in g/L or g/dL — choose as on your report.
2. Compare measured and corrected: A category change reflects only the mathematical adjustment. It does not prove that the original test was false or that treatment is unnecessary.
3. When in doubt — ionized calcium: Adjustment is especially unreliable with low albumin, CKD, critical illness and pH disturbances. A clinician selects the measurements needed for clarification.

### Method and formula

The simplified Payne formula adds 0.02 mmol/L per 1 g/L decrease in albumin below 40 g/L. It is a historical adjustment of total calcium to an assumed albumin level, not a calculation of ionized calcium. A 2025 study found a risk of misclassification, especially at low albumin; unadjusted total calcium agreed better with ionized calcium in that study.

Adjusted Ca (mmol/L) = total Ca + 0.02 × (40 − albumin, g/L)
Ca entered in mg/dL is first multiplied by 0.2495; the result is converted back by dividing by 0.2495.
Albumin g/dL × 10 = g/L. Common approximate expression: Ca (mg/dL) + 0.8 × (4 − albumin, g/dL).
Assumed total-calcium comparison interval: 2.15–2.55 mmol/L.

### Limitations

Adjustment may worsen calcium-status classification, particularly with albumin below 30 g/L. It is unreliable in CKD, critical illness and pH disturbances. If clinically uncertain, a clinician may request ionized calcium, which also depends on correct sample collection and handling. This formula does not establish a diagnosis or a supplement prescription.

### Sources

- [Payne R.B., Little A.J., Williams R.B., Milner J.R. Interpretation of serum calcium in patients with abnormal serum proteins. BMJ, 1973;4(5893):643–646](https://pubmed.ncbi.nlm.nih.gov/4758544/)
- [Ladenson J.H., Lewis J.W., Boyd J.C. Failure of total calcium corrected for protein, albumin, and pH to correctly assess free calcium status. J Clin Endocrinol Metab, 1978;46(6):986–993](https://pubmed.ncbi.nlm.nih.gov/45478/)
- [Desgagnés N. et al. Use of Albumin-Adjusted Calcium Measurements in Clinical Practice. JAMA Netw Open, 2025;8(1):e2455251](https://pubmed.ncbi.nlm.nih.gov/39836424/)

<a id="one-rep-max"></a>

## 1RM Calculator (One-Rep Max)

`one-rep-max` · [NutriFit](https://nutrifit.health/calculators/one-rep-max)

Calculates the maximum load an athlete can lift for a single repetition without the injury risk of direct 1RM testing.

### How to use

1. Perform a thorough warm-up: Perform general joint mobility drills, followed by 3–4 warm-up sets progressively ramping up to your working weight.
2. Perform a working set of 3–6 reps: Select a load with which you can complete 3 to 6 clean repetitions leaving no more than 1 rep in reserve (RPE 9).
3. Input data and apply percentages: Enter the weight and reps into the calculator. Use the percentage chart to prescribe weights for strength (85%), hypertrophy (75%), or recovery (60%) workouts.

### Method and formula

One-rep max estimation utilizes regression equations modeling repetitions-to-fatigue against percentage of maximal effort. The Epley formula excels in the 2–6 repetition range, while the Brzycki equation provides high accuracy across 6–10 repetitions.

Epley: 1RM = Weight × (1 + 0.0333 × Reps); Brzycki: 1RM = Weight / (1.0278 − 0.0278 × Reps); Lombardi: Weight × Reps^0.10; Wathan: (100 × Weight) / (48.8 + 53.8 × e^(−0.075 × Reps)).

### Limitations

Not validated for sets beyond 10–12 repetitions due to localized metabolic fatigue. Precision depends on technical execution and muscle fiber composition.

### Sources

- [Epley B. Poundage chart. Boyd Epley Workout, Lincoln, NE, 1985](https://pubmed.ncbi.nlm.nih.gov/2706858/)
- [Brzycki M. Strength testing—predicting a one-rep max from reps-to-fatigue. JOHPERD, 1993;64(1):88–90](https://doi.org/10.1080/07303084.1993.10606684)
- [Reynolds J.M. et al. Prediction of one repetition maximum strength from multiple repetition maximum testing and anthropometry. J Strength Cond Res, 2006;20(3):584–592](https://pubmed.ncbi.nlm.nih.gov/16937972/)

<a id="heart-rate-zones"></a>

## Heart Rate Training Zones Calculator

`heart-rate-zones` · [NutriFit](https://nutrifit.health/calculators/heart-rate-zones)

Calculates individual target heart rate zones accounting for both maximum heart rate and resting pulse (Heart Rate Reserve method).

### How to use

1. Measure morning resting heart rate: Upon waking and while still in bed, measure your pulse for 60 seconds with a heart rate monitor or fingertip count over 3 consecutive days and take the average.
2. Calculate zones using the Karvonen formula: The calculator subtracts resting pulse from HRmax to establish your true functional heart rate reserve.
3. Distribute volume according to the 80/20 rule: Dedicate approximately 80% of total weekly endurance training volume to Zone 2, reserving 20% for high-intensity work in Zones 4 and 5.

### Method and formula

The Karvonen method utilizes Heart Rate Reserve (HRR = HRmax − HRrest). By accounting for resting pulse, target zones dynamically adapt to the athlete's aerobic fitness level and cardiovascular conditioning.

HRmax (Tanaka) = 208 − 0.7 × Age; HRR = HRmax − HRrest; Target HR = HRrest + (% intensity × HRR). Haskell formula: HRmax = 220 − Age.

### Limitations

Standard maximum heart rate formulas have a ±10–12 bpm standard error. For clinical or competitive precision, laboratory CPET gas-exchange testing is recommended.

### Sources

- [Tanaka H., Monahan K.D., Seals D.R. Age-predicted maximal heart rate revisited. J Am Coll Cardiol, 2001;37(1):153–156](https://pubmed.ncbi.nlm.nih.gov/11153730/)
- [Karvonen M.J., Kentala E., Mustala O. The effects of training on heart rate; a longitudinal study. Ann Med Exp Biol Fenn, 1957;35(3):307–315](https://pubmed.ncbi.nlm.nih.gov/13470504/)
- [American College of Sports Medicine. ACSM’s Guidelines for Exercise Testing and Prescription. 11th ed. Wolters Kluwer, 2021](https://www.acsm.org/education-resources/books/guidelines-exercise-testing-prescription)

<a id="vo2max"></a>

## VO2 Max Calculator (Cardiorespiratory Fitness)

`vo2max` · [NutriFit](https://nutrifit.health/calculators/vo2max)

Evaluates aerobic power and cardiorespiratory fitness based on validated field protocols without specialized laboratory gas analysis equipment.

### How to use

1. Choose the right test protocol: Active runners should opt for the Cooper 12-minute run test. For older individuals or those returning from injury, the Rockport 1-mile walking test is the safest option.
2. Record your performance metrics: For the Cooper test, track total meters covered on a standard 400m track or calibrated GPS. For Rockport, record exact finish time and immediate 60-second heart rate.
3. Interpret your category and training paces: The calculator compares your score to Cooper Institute epidemiological percentiles and projects benchmark 5K and 10K training paces.

### Method and formula

The calculator features three scientifically validated field methods: the Cooper 12-minute run test, the Rockport 1-mile walking test, and the resting-to-maximum heart rate ratio equation (Uth et al.).

Cooper: VO2max = (Distance, m − 504.9) / 44.73; Rockport: 132.853 − 0.0769 × W(lbs) − 0.3877 × Age + 6.315 × Gender − 3.2649 × Time − 0.1565 × HR; Uth: 15 × (HRmax / HRrest).

### Limitations

Field protocols provide an indirect estimate with an average error of 5–10%. Pacing discipline, running surface, weather conditions, and caffeine intake can influence test outcomes.

### Sources

- [Cooper K.H. A means of assessing maximal oxygen intake. Correlation between field and treadmill testing. JAMA, 1968;203(3):201–204](https://pubmed.ncbi.nlm.nih.gov/5694044/)
- [Kline G.M. et al. Estimation of VO2max from a one-mile track walk, gender, age, and body weight. Med Sci Sports Exerc, 1987;19(3):253–259](https://pubmed.ncbi.nlm.nih.gov/3600239/)
- [Uth N. et al. Estimation of VO2max from the ratio between HRmax and HRrest--the Heart Rate Ratio Method. Eur J Appl Physiol, 2004;91(1):111–115](https://pubmed.ncbi.nlm.nih.gov/14624296/)

<a id="ffmi"></a>

## FFMI Calculator (Fat-Free Mass Index)

`ffmi` · [NutriFit](https://nutrifit.health/calculators/ffmi)

Determines lean muscular mass relative to height, distinguishing genuine hypertrophy from body fat accumulation.

### How to use

1. Accurately measure height and weight: Weigh yourself in the morning fasted after using the restroom. Measure barefoot standing height against a stadiometer.
2. Determine your body fat percentage: Use a 3–7 site caliper protocol, calibrated multi-frequency bioimpedance, or ideally a DEXA dual-energy X-ray scan.
3. Interpret the normalized score: The normalized score eliminates mathematical distortion for taller (>180 cm) or shorter (<170 cm) individuals, allowing fair comparison to normative tables.

### Method and formula

Standard BMI cannot differentiate between muscle mass and adipose tissue. The Fat-Free Mass Index (FFMI) isolates lean tissue and introduces a height-normalization factor (Kouri et al., 1995) to benchmark muscularity across varying statures.

Lean Body Mass (LBM) = Weight × (1 − % Body Fat / 100); Baseline FFMI = LBM / Height(m)²; Normalized FFMI = Baseline FFMI + 6.1 × (1.80 − Height(m)).

### Limitations

Calculation accuracy depends directly on the precision of body fat measurement. DEXA scans and hydrostatic weighing provide the highest reliability.

### Sources

- [Kouri E.M. et al. Fat-free mass index in users and nonusers of anabolic-androgenic steroids. Clin J Sport Med, 1995;5(4):223–228](https://pubmed.ncbi.nlm.nih.gov/7496846/)
- [Trexler E.T. et al. Physiological changes after a female bodybuilding contest preparation. J Int Soc Sports Nutr, 2017;14:34](https://pubmed.ncbi.nlm.nih.gov/28878643/)

<a id="katch-mcardle"></a>

## Katch-McArdle BMR & TDEE Calculator

`katch-mcardle` · [NutriFit](https://nutrifit.health/calculators/katch-mcardle)

Calculates basal metabolic rate (BMR) and total daily energy expenditure (TDEE) based strictly on lean muscle mass rather than total scale weight.

### How to use

1. Determine your lean body mass: Enter your current weight and body fat percentage. The calculator will isolate your metabolically active lean mass.
2. Select an honest activity level: Be realistic: if you work a desk job and lift weights 3 times a week, choose 'Light' or 'Moderate' to avoid overestimating TDEE.
3. Compare with the Mifflin formula: Analyze the difference: if you are lean and muscular, standard formulas underestimate your caloric expenditure by 150–300 kcal/day.

### Method and formula

Unlike the Mifflin-St Jeor or Harris-Benedict formulas which rely on total body weight, the Katch-McArdle equation isolates metabolically active lean body mass (LBM). This provides unmatched precision for lean athletes and individuals with non-standard body fat levels.

LBM = Weight × (1 − % Body Fat / 100); BMR (Katch) = 370 + 21.6 × LBM(kg); TDEE = BMR × Activity Factor; BMR (Cunningham) = 500 + 22 × LBM(kg).

### Limitations

Requires prior knowledge of body fat percentage. Inaccurate body fat estimation introduces direct error into the calorie calculation.

### Sources

- [McArdle W.D., Katch F.I., Katch V.L. Exercise Physiology: Nutrition, Energy, and Human Performance. 8th ed. Wolters Kluwer, 2014](https://pubmed.ncbi.nlm.nih.gov/15570161/)
- [Cunningham J.J. A reanalysis of balanced nutrition and the relationship to body composition and resting metabolic rate. Am J Clin Nutr, 1991;54(6):963–969](https://pubmed.ncbi.nlm.nih.gov/1957828/)
- [Mifflin M.D. et al. A new predictive equation for resting energy expenditure in healthy individuals. Am J Clin Nutr, 1990;51(2):241–247](https://pubmed.ncbi.nlm.nih.gov/2305711/)

<a id="ideal-body-weight"></a>

## Ideal Body Weight Calculator (IBW & AdjBW)

`ideal-body-weight` · [NutriFit](https://nutrifit.health/calculators/ideal-body-weight)

Calculates reference body weight according to recognized clinical equations and determines Adjusted Body Weight (AdjBW) for clinical nutrition and medicine.

### How to use

1. Compare the Devine formula with healthy BMI: The Devine formula typically aligns with a BMI of 21.5–22.5 kg/m²—the statistical center of the healthy weight continuum.
2. Use AdjBW if overweight: If your actual weight exceeds your ideal weight by more than 20% (BMI > 30), calculate your diet and protein intake using AdjBW rather than actual weight.
3. Account for skeletal bone structure: Individuals with broad bone frames (hypersthenic) naturally sit comfortably near the upper boundary of the WHO BMI range (23–24.9).

### Method and formula

Medical ideal body weight equations were developed to standardize medication dosages, renal clearance clearance rates, and mechanical ventilation parameters. Unlike cosmetic weight charts, they benchmark physiological homeostasis and baseline metabolic function.

Devine (Men): 50 + 2.3 × (Height_in − 60); Devine (Women): 45.5 + 2.3 × (Height_in − 60); AdjBW = IBW + 0.4 × (Actual_Weight − IBW); Robinson: Men 52 + 1.9×in, Women 49 + 1.7×in.

### Limitations

Formulas do not account for athletic muscular development or skeletal bone frame variation (hypersthenic vs. asthenic body types).

### Sources

- [Devine B.J. Gentamicin therapy. Drug Intell Clin Pharm, 1974;8:650–655](https://pubmed.ncbi.nlm.nih.gov/4611413/)
- [Robinson J.D. et al. Determination of ideal body weight for drug dosing. Am J Hosp Pharm, 1983;40(6):1016–1019](https://pubmed.ncbi.nlm.nih.gov/6869387/)
- [Miller P.F. et al. Comparison of formulas for estimating ideal body weight. Am J Hosp Pharm, 1983;40:1622](https://pubmed.ncbi.nlm.nih.gov/6638027/)
- [Hamwi G.J. Therapy: changing concepts in diabetes mellitus. In: Danowski T.S. (ed). Diabetes Mellitus: Diagnosis and Treatment. ADA, 1964:73–78](https://pubmed.ncbi.nlm.nih.gov/14207860/)

<a id="waist-ratios"></a>

## Waist Anthropometric Index Calculator (WHtR, WHR, VAI)

`waist-ratios` · [NutriFit](https://nutrifit.health/calculators/waist-ratios)

Evaluates body fat distribution, visceral adiposity, and cardiometabolic risk far more accurately than standard BMI.

### How to use

1. Locate the correct anatomical waistline: Waist is not measured at the navel or belt line, but at the midpoint between the lower edge of the lowest rib and the top of the iliac crest (hip bone). Breathe out normally.
2. Measure hip circumference: Wrap the measuring tape horizontally around the widest, most prominent point of the gluteal buttocks.
3. Evaluate the ratio to height: Divide waist by height: if the ratio is under 0.50, your visceral fat levels remain within the optimal physiological protective zone.

### Method and formula

Waist circumference directly reflects intra-abdominal visceral adipose tissue surrounding vital internal organs. The Waist-to-Height Ratio (WHtR) and Waist-to-Hip Ratio (WHR) are validated epidemiological predictors of type 2 diabetes and hypertension.

WHtR = Waist / Height; WHR = Waist / Hip; VAI (Men) = (Waist/(39.68+1.88×BMI)) × (TG/1.03) × (1.31/HDL); VAI (Women) = (Waist/(35.58+1.89×BMI)) × (TG/0.81) × (1.52/HDL).

### Limitations

Not applicable during pregnancy, active ascites, severe abdominal hernia, or immediate post-abdominal surgery recovery.

### Sources

- [Ashwell M., Gunn P., Gibson S. Waist-to-height ratio is a better screening tool than waist circumference and BMI for adult cardiometabolic risk factors: systematic review and meta-analysis. Obes Rev, 2012;13(3):275–286](https://pubmed.ncbi.nlm.nih.gov/22106927/)
- [World Health Organization. Waist Circumference and Waist-Hip Ratio: Report of a WHO Expert Consultation. Geneva, 2008](https://www.who.int/publications/i/item/9789241501491)
- [Amato M.C. et al. Visceral Adiposity Index: a reliable indicator of visceral fat function associated with cardiometabolic risk. Diabetes Care, 2010;33(4):920–922](https://pubmed.ncbi.nlm.nih.gov/20067971/)

<a id="sweat-rate"></a>

## Sweat Rate & Hydration Calculator

`sweat-rate` · [NutriFit](https://nutrifit.health/calculators/sweat-rate)

Determines individual sweat loss rate and calculates personalized post-exercise fluid and electrolyte replacement needs.

### How to use

1. Weigh yourself before the workout: Empty your bladder and record your nude weight on a calibrated digital scale immediately before beginning exercise.
2. Track fluid intake during exercise: Drink from a dedicated bottle with milliliter markings so you know exactly how much fluid you consumed.
3. Weigh yourself completely dry at the finish: Towel off all sweat from your skin and hair before stepping back onto the scale unclothed.

### Method and formula

Based on the American College of Sports Medicine (ACSM) fluid replacement protocol. Pre- and post-workout nude body mass, along with fluid consumed and urine produced, establishes hourly sweat loss under specific environmental conditions.

Sweat Loss (mL) = (Pre_Weight − Post_Weight, g) + Fluid_Consumed(mL) − Urine(mL); Sweat Rate (L/h) = (Sweat Loss / Duration_min) × 60 / 1000; Dehydration % = ((Pre_Weight − Post_Weight) / Pre_Weight) × 100.

### Limitations

Does not account for substrate mass loss from glycogen depletion or respiratory water vapor (~100–150 g/hour during heavy exertion). Provides a reliable clinical proxy for fluid deficit.

### Sources

- [Sawka M.N. et al. American College of Sports Medicine position stand. Exercise and fluid replacement. Med Sci Sports Exerc, 2007;39(2):377–390](https://pubmed.ncbi.nlm.nih.gov/17277604/)
- [Thomas D.T., Erdman K.A., Burke L.M. Position of the Academy of Nutrition and Dietetics, Dietitians of Canada, and the American College of Sports Medicine: Nutrition and Athletic Performance. J Acad Nutr Diet, 2016;116(3):501–528](https://pubmed.ncbi.nlm.nih.gov/26920240/)
- [Shirreffs S.M., Sawka M.N. Fluid and electrolyte needs for training, competition, and recovery. J Sports Sci, 2011;29(Suppl 1):S39–S46](https://pubmed.ncbi.nlm.nih.gov/22150427/)

<a id="muscle-potential"></a>

## Maximum Muscular Potential Calculator (Casey Butt & Berkhan)

`muscle-potential` · [NutriFit](https://nutrifit.health/calculators/muscle-potential)

Estimates the maximum drug-free lean body mass and muscular circumferences (chest, arms, thighs) achievable without anabolic pharmacology.

### How to use

1. Accurately Measure Skeletal Frame: Measure wrist between hand and ulnar styloid process. Measure ankle at the narrowest section directly above the ankle bones.
2. Specify Desired Body Fat Level: For year-round lean athletic shape, target 10–12% body fat; for competitive stage conditioning, aim for 6–8%.
3. Compare Current Circumferences to Ceilings: The calculator computes maximum potential for biceps, chest, and thighs. These provide realistic benchmarks for your physique.

### Method and formula

Casey Butt, Ph.D. analyzed the anthropometry of elite drug-free bodybuilders from the pre-steroid era (1940s–1950s) over a 6-year study. The model demonstrates that natural muscle mass is mechanically limited by skeletal dimensions—wrist and ankle circumferences.

Max LBM = Height^1.5 × [sqrt(Wrist)/22.6670 + sqrt(Ankle)/17.0104] × [(BodyFat%/224) + 1]; Berkhan Contest Weight (~5% BF) = Height (cm) − 100.

### Limitations

Designed for biological males. For biological females, maximum lean muscle mass is approximately 65–70% of male values due to endocrine profile. Assumes years of progressive overload and optimal nutrition.

### Sources

- [Butt C. Your Maximum Muscular Potential (The Casey Butt Model). The WeighTrainer, 2009](https://www.weightrainer.net/potential.html)
- [Berkhan M. The Leangains Guide and Maximum Potential for Drug-Free Athletes, 2010](https://leangains.com/maximum-muscular-potential-of-drug-free-athletes-updated-version/)
- [Kouri E.M. et al. Fat-free mass index in users and nonusers of anabolic-androgenic steroids. Clin J Sport Med, 1995;5(4):223–228](https://pubmed.ncbi.nlm.nih.gov/7496846/)

<a id="powerlifting-coefficients"></a>

## Powerlifting Coefficients Calculator (DOTS, Wilks, IPF GL)

`powerlifting-coefficients` · [NutriFit](https://nutrifit.health/calculators/powerlifting-coefficients)

Evaluates and benchmarks relative strength in powerlifting (squat, bench press, deadlift) across diverse body weights and sexes using DOTS, Wilks, and IPF GL Points.

### How to use

1. Sum Best Lifts in the Three Disciplines: Sum your top successful attempts in squat, bench press, and deadlift executed under competition rules.
2. Enter Exact Official Weigh-In Body Mass: Use your verified scale weight recorded at the morning technical weigh-in before lifting.
3. Evaluate Your DOTS and IPF GL Points: Compare your score against athletic standards: 300 points is solid intermediate, 400 is national contender, 500+ is international elite.

### Method and formula

Allometric scaling dictates that muscular strength scales with cross-sectional area (height squared), while body mass scales with volume (height cubed). Powerlifting formulas utilize polynomial and exponential curves to neutralize body mass advantages.

DOTS: Coefficient = 500 / (A×Weight^4 + B×Weight^3 + C×Weight^2 + D×Weight + E); Points = Total (kg) × Coefficient; IPF GL Points: 100 × Total / (A − B × e^(−C × Weight)); Wilks: 5th-order polynomial.

### Limitations

Calibrated for competitive three-lift powerlifting. Not applicable to Olympic weightlifting (which uses the Sinclair coefficient) or single-joint strength sports.

### Sources

- [Perotti L. et al. The DOTS Formula: A new formula for evaluating strength athletes across weight classes, 2019](https://pubmed.ncbi.nlm.nih.gov/31804245/)
- [Wilks R. The Wilks Formula for Powerlifting. Australian Powerlifting Federation, 1997](https://www.powerlifting.sport/)
- [International Powerlifting Federation. IPF GL Points Formula for Classic and Equipped Powerlifting, 2020](https://www.powerlifting.sport/rules/codes/info/ipf-formula)

<a id="protein-intake"></a>

## Protein Intake Calculator (ISSN & ESPEN)

`protein-intake` · [NutriFit](https://nutrifit.health/calculators/protein-intake)

Determines individualized daily protein targets based on fitness goals, dietary pattern, and muscle protein synthesis (MPS) thresholds.

### How to use

1. Identify your target number: Enter your weight and goal. The calculator establishes your daily gram target and optimal per-meal serving size.
2. Aim for 25–40 g per meal: A single serving of 30 g protein (cottage cheese, 150 g chicken breast or fish) activates the leucine trigger for myofibrillar anabolism.
3. Diversify your protein sources: Combine animal proteins (eggs, poultry, fish, dairy) with wholesome plant-based sources (tofu, lentils, chickpeas, tempeh).

### Method and formula

Grounded in clinical consensus statements from the International Society of Sports Nutrition (ISSN, 2017) and ESPEN. In patients with overweight (BMI > 28), Adjusted Body Weight (AdjBW) is applied to protect renal hemodynamics.

Maintenance: 1.0–1.4 g/kg; Muscle Gain: 1.6–2.2 g/kg; Fat Loss / Deficit: 2.0–2.4 g/kg; Endurance: 1.2–1.6 g/kg; Age 65+: 1.2–1.5 g/kg; CKD: 0.6–0.8 g/kg. Vegetarian: +10%.

### Limitations

In chronic kidney disease (eGFR < 60 mL/min), protein prescriptions must be medically supervised by a nephrologist.

### Sources

- [Jäger R. et al. International Society of Sports Nutrition Position Stand: protein and exercise. J Int Soc Sports Nutr, 2017;14:20](https://pubmed.ncbi.nlm.nih.gov/28642676/)
- [Deutz N.E. et al. Protein intake and exercise for optimal muscle function with aging: recommendations from the ESPEN Expert Group. Clin Nutr, 2014;33(6):929–936](https://pubmed.ncbi.nlm.nih.gov/24814383/)
- [Morton R.W. et al. A systematic review, meta-analysis and meta-regression of the effect of protein supplementation on gains in muscle mass and strength in healthy adults. Br J Sports Med, 2018;52(6):376–384](https://pubmed.ncbi.nlm.nih.gov/28698222/)

<a id="fiber-intake"></a>

## Dietary Fiber Intake Calculator (WHO & EFSA)

`fiber-intake` · [NutriFit](https://nutrifit.health/calculators/fiber-intake)

Quantifies daily soluble and insoluble dietary fiber requirements to support gut microbiome diversity, optimize lipid profiles, and maintain healthy transit time.

### How to use

1. Include vegetables in every meal: Aim for at least 400–500 g of non-starchy vegetables and leafy greens daily (Harvard Healthy Eating Plate principle).
2. Swap refined grains for whole grains: Choose buckwheat, quinoa, steel-cut oats, barley, and whole-wheat sourdough over white rice and refined flour.
3. Incorporate seeds and legumes: One tablespoon of chia or ground flaxseeds, plus a serving of cooked lentils, instantly delivers 8–12 g of premium fiber.

### Method and formula

Based on WHO and EFSA standards (14 g fiber per 1,000 kcal, minimum 25 g for women and 38 g for men). Automatically calculates required compensatory hydration (+40 mL water per gram of fiber) and adjusts for IBS.

Target Fiber = max(25/38 g, Calories × 0.014); Soluble fraction ~30–35%; Insoluble fraction ~65–70%; Extra water = Fiber (g) × 40 mL.

### Limitations

In small intestinal bacterial overgrowth (SIBO) or active IBD flares, high fermentable fiber may exacerbate gas and pain. Fiber titration must be gradual.

### Sources

- [EFSA Panel on Dietetic Products, Nutrition, and Allergies. Scientific Opinion on Dietary Reference Values for carbohydrates and dietary fibre. EFSA Journal, 2010;8(3):1462](https://doi.org/10.2903/j.efsa.2010.1462)
- [Reynolds A. et al. Carbohydrate quality and human health: a series of systematic reviews and meta-analyses. Lancet, 2019;393(10170):434–445](https://pubmed.ncbi.nlm.nih.gov/30638909/)
- [Stephen A.M. et al. Dietary fibre in Europe: current state of knowledge on definitions, sources, recommendations, intakes and relationships to health. Nutr Res Rev, 2017;30(2):149–190](https://pubmed.ncbi.nlm.nih.gov/28676135/)

<a id="omega-3"></a>

## Omega-3 Intake & Index Calculator (EPA + DHA)

`omega-3` · [NutriFit](https://nutrifit.health/calculators/omega-3)

Determines therapeutic and maintenance dosages of active EPA and DHA fatty acids according to clinical indications and laboratory biomarkers.

### How to use

1. Inspect the active label (EPA + DHA): A front label reading '1,000 mg fish oil' frequently contains a mere 300 mg of combined EPA+DHA. Always sum the specific milligram amounts of EPA and DHA.
2. Select the optimal lipid form (rTG or TG): Re-esterified triglycerides (rTG) provide superior bioavailability compared to generic synthetic ethyl esters (EE).
3. Verify the oxidation index (TOTOX): High-grade fish oil maintains a TOTOX score < 26 and carries IFOS (International Fish Oil Standards) certification, free from rancid fishy odors.

### Method and formula

Built upon GOED, AHA, and ISSFAL consensus standards. Targets an erythrocyte membrane Omega-3 Index > 8% for optimal cardioprotection.

General Health: 500 mg; Cardiovascular: 1000 mg; Hypertriglyceridemia: 2000–4000 mg; Pregnancy: 600 mg (high DHA); Mood: 1000–2000 mg (EPA:DHA ≥ 2:1); Athlete: 1500–2000 mg.

### Limitations

Dosages exceeding 3000–4000 mg/day have antiplatelet effects and require medical supervision in patients on anticoagulants.

### Sources

- [Harris W.S., Von Schacky C. The Omega-3 Index: a new risk factor for death from coronary heart disease? Prev Med, 2004;39(1):212–220](https://pubmed.ncbi.nlm.nih.gov/15207989/)
- [Global Organization for EPA and DHA Omega-3s (GOED). Clinical Practice Recommendations for EPA and DHA Omega-3 Intake, 2022](https://goedomega3.com/intake-recommendations)
- [Guu T.W. et al. International Society for Nutritional Psychiatry Research Practice Guidelines for Omega-3 Fatty Acids in the Treatment of Major Depressive Disorder. Psychother Psychosom, 2019;88(5):263–273](https://pubmed.ncbi.nlm.nih.gov/31480072/)

<a id="sodium-potassium"></a>

## Sodium-Potassium Balance & Salt Calculator (Na:K)

`sodium-potassium` · [NutriFit](https://nutrifit.health/calculators/sodium-potassium)

Analyzes electrolyte balance between sodium and potassium, converting milligrams of sodium into dietary salt and identifying hypertension risk.

### How to use

1. Eliminate hidden industrial sodium: Up to 75% of dietary sodium comes not from the salt shaker, but from processed deli meats, hard cheeses, chips, canned items, and bakery goods.
2. Boost potassium from whole plants: Potassium triggers renal sodium excretion (natriuresis). Prioritize jacket potatoes, spinach, dried apricots, white beans, and bananas.
3. Switch to mineralized potassium salt: Reduced-sodium salt blends (where 30% of NaCl is replaced with KCl) lower systolic blood pressure by 3–5 mm Hg without losing flavor.

### Method and formula

Applies WHO and AHA DASH diet guidelines. The Na:K molar ratio should ideally remain below 1.00 (optimal 0.50–0.70). High ratios drive fluid retention and arterial stiffness.

Na_mmol = Na_mg / 23; K_mmol = K_mg / 39.1; Na:K Ratio = Na_mmol / K_mmol; Salt NaCl (g) = Na_mg × 2.54 / 1000.

### Limitations

Inapplicable to end-stage renal disease (CKD stage 4–5) where impaired potassium excretion requires dietary potassium restriction.

### Sources

- [World Health Organization. Guideline: Sodium intake for adults and children. Geneva, 2012](https://www.who.int/publications/i/item/9789241504836)
- [World Health Organization. Guideline: Potassium intake for adults and children. Geneva, 2012](https://www.who.int/publications/i/item/9789241504829)
- [O’Donnell M. et al. Urinary sodium and potassium excretion and risk of cardiovascular events. JAMA, 2011;306(20):2229–2238](https://pubmed.ncbi.nlm.nih.gov/22110105/)

<a id="alcohol"></a>

## Alcohol Clearance & Sobriety Calculator (Widmark)

`alcohol` · [NutriFit](https://nutrifit.health/calculators/alcohol)

Calculates peak and current blood alcohol concentration (BAC in ‰), precise time to complete sobriety, and empty caloric load from ethanol.

### How to use

1. Gastric and intestinal absorption: Approximately 20% of alcohol is absorbed through gastric mucosa, while 80% is rapidly absorbed in the duodenum and jejunum. Food delays gastric emptying, flattening peak BAC.
2. Hepatic enzymatic breakdown: The liver metabolizes up to 95% of ethanol at a constant rate via alcohol dehydrogenase (ADH) into toxic acetaldehyde, which aldehyde dehydrogenase (ALDH) rapidly converts to acetate.
3. Zero-order linear elimination: Hepatic clearance saturates quickly (zero-order kinetics): the rate of blood alcohol decline is strictly ~0.15 ‰ per hour regardless of how much was consumed.

### Method and formula

Based on Erik Widmark’s pharmacokinetic model (1932) with updates by A.W. Jones (2010). Factors in gender-specific body water distribution (r = 0.68 for men, 0.55 for women), gastric ADH oxidation, and linear elimination rate (0.15 ‰/h).

Pure Ethanol (g) = Volume (mL) × (ABV% / 100) × 0.789; Peak BAC = (Ethanol × Absorption) / (Weight × r); Current BAC = max(0, Peak BAC − 0.15 × Hours); Time = Peak BAC / 0.15.

### Limitations

Metabolic rate varies (0.10–0.20 ‰/h) based on liver function and genetics. Results are educational and do not serve as legal evidence for operating motor vehicles.

### Sources

- [Widmark E.M.P. Die theoretischen Grundlagen und die praktische Verwendbarkeit der gerichtlich-medizinischen Alkoholbestimmung. Urban & Schwarzenberg, Berlin, 1932](https://doi.org/10.1007/978-3-642-91176-8)
- [Jones A.W. Evidence-based survey of the elimination rates of ethanol from blood with applications in forensic casework and pharmacokinetics. Forensic Sci Int, 2010;200(1-3):1–20](https://pubmed.ncbi.nlm.nih.gov/20434270/)
- [World Health Organization. Global status report on alcohol and health. Geneva, 2024](https://www.who.int/publications/i/item/9789240096745)

<a id="caffeine"></a>

## Caffeine Clearance & Sleep Timing Calculator

`caffeine` · [NutriFit](https://nutrifit.health/calculators/caffeine)

Simulates caffeine pharmacokinetics, biological half-life, and remaining bedtime adenosine blockade to safeguard deep slow-wave sleep.

### How to use

1. Delay your first cup 60–90 minutes post-wake: Allow your natural morning cortisol surge to clear lingering adenosine, preventing the dreaded afternoon energy crash.
2. Enforce a strict caffeine curfew: With a 5-hour half-life, 25% of caffeine remains in the brain 10–12 hours later. Cease intake by 14:00 if bedtime is 23:00.
3. Account for hidden caffeine sources: Dark chocolate, cola, green tea, and OTC headache medications contain significant pharmacologically active doses.

### Method and formula

Simulates CYP1A2 metabolic clearance per EFSA (2015) and AASM parameters. Normal half-life is 5 hours; smoking accelerates it to 3 hours, oral contraceptives prolong it to 9 hours, and pregnancy extends it up to 12 hours.

C(t) = C0 × e^(−k × t), where k = ln(2) / t_half; Normal t_half = 5.0 h; Smoker = 3.0 h; OCP = 9.0 h; Pregnancy = 12.0 h; EFSA safe threshold = 400 mg/day.

### Limitations

Clearance varies widely between CYP1A2 *1A (fast) and *1F (slow) metabolizers. Sensitive individuals experience tachycardia or anxiety at low doses.

### Sources

- [EFSA Panel on Dietetic Products, Nutrition and Allergies. Scientific Opinion on the safety of caffeine. EFSA Journal, 2015;13(5):4102](https://doi.org/10.2903/j.efsa.2015.4102)
- [Guest N.S. et al. International society of sports nutrition position stand: caffeine and exercise performance. J Int Soc Sports Nutr, 2021;18(1):1](https://pubmed.ncbi.nlm.nih.gov/33388079/)
- [Drake C. et al. Caffeine effects on sleep taken 0, 3, or 6 hours before going to bed. J Clin Sleep Med, 2013;9(11):1195–1200](https://pubmed.ncbi.nlm.nih.gov/24235826/)

<a id="weight-loss-forecast"></a>

## Dynamic Weight Loss Forecast Calculator (Kevin Hall Model)

`weight-loss-forecast` · [NutriFit](https://nutrifit.health/calculators/weight-loss-forecast)

Generates a realistic, non-linear weight loss trajectory using the NIH/NIDDK model of Kevin Hall, accounting for adaptive thermogenesis and body composition changes.

### How to use

1. Maintain a moderate deficit (15–20%): A 300–500 kcal deficit preserves psychological adherence, spares lean muscle mass, and minimizes metabolic resistance.
2. Consume adequate protein: Consuming 1.8–2.4 g/kg of protein during caloric restriction guarantees that 85–90% of weight lost comes from adipose tissue.
3. Plan structured diet breaks: Every 8–12 weeks of dieting, spend 1–2 weeks eating at maintenance calories (TDEE). This resets leptin and thyroid hormones (T3), attenuating adaptation.

### Method and formula

Replaces the flawed static 3,500-kcal rule with the validated dynamic energy balance model (Hall et al., Lancet 2011). Incorporates metabolic slowdown (~22 kcal/kg lost) and Forbes body fat partitioning.

Metabolic adaptation = 22 kcal/kg lost + adaptive thermogenesis; Effective Deficit = Prescribed Deficit − Adaptation; Fat loss partition p = Forbes(F, W); Numerical iteration week-by-week.

### Limitations

Assumes strict adherence to the prescribed caloric deficit. Transient water fluctuations from cortisol or sodium can mask fat loss on scale weight.

### Sources

- [Hall K.D. et al. Quantification of the effect of energy imbalance on bodyweight. Lancet, 2011;378(9793):826–837](https://pubmed.ncbi.nlm.nih.gov/21872751/)
- [Thomas D.M. et al. Can a weight loss of one pound a week be achieved with a 3,500-kcal deficit? Commentary on a commonly accepted rule. Int J Obes, 2013;37(12):1611–1613](https://pubmed.ncbi.nlm.nih.gov/23628852/)
- [Forbes G.B. Lean body mass-body fat interrelationships in humans. Nutr Rev, 1987;45(8):225–231](https://pubmed.ncbi.nlm.nih.gov/3306482/)

<a id="sleep-cycles"></a>

## Sleep Cycles Calculator

`sleep-cycles` · [NutriFit](https://nutrifit.health/calculators/sleep-cycles)

A sleep timing tool based on 90-minute ultradian cycles (slow-wave and REM sleep phases) and average sleep onset latency.

### How to use

1. Choose the calculation direction: Decide what you need: find out when to go to bed to wake up at a set time, or when to set your alarm if you're going to bed right now.
2. Set your sleep onset latency: The default is 14 minutes. If you usually toss and turn longer, or fall asleep instantly, adjust this value.
3. Choose a chain of 5 or 6 cycles: 5 cycles (7h 30m) are ideal for workdays, while 6 cycles (9h) are better for intense training days or recovering from sleep debt.

### Method and formula

The calculation is based on a model of 90-minute ultradian cycles combining NREM (non-rapid eye movement) and REM (rapid eye movement) sleep stages. Waking up at a cycle boundary prevents sleep inertia.

Wake time = Bedtime + Sleep onset (14 min) + N × 90 min. Bedtime = Wake time − (N × 90 min) − Sleep onset (14 min).

### Limitations

The calculator uses an average cycle length of 90 minutes. Individual cycles can vary from 70 to 120 minutes. Chronic sleep disorders require polysomnography for proper diagnosis.

### Sources

- [Carskadon M.A., Dement W.C. Normal Human Sleep: An Overview. Principles and Practice of Sleep Medicine, 2011;5:16–26](https://doi.org/10.1016/B978-1-4160-6645-3.00002-5)
- [Hirshkowitz M. et al. National Sleep Foundation’s sleep time duration recommendations: methodology and results summary. Sleep Health, 2015;1(1):40–43](https://pubmed.ncbi.nlm.nih.gov/29073412/)
- [Dijk D.J., Czeisler C.A. Contribution of the circadian pacemaker and the homeostatic process to the timing of human sleep. Sleep, 1995;18(5):285–304](https://pubmed.ncbi.nlm.nih.gov/7676163/)

<a id="findrisc"></a>

## FINDRISC Diabetes Risk Score

`findrisc` · [NutriFit](https://nutrifit.health/calculators/findrisc)

An internationally recognized WHO and IDF questionnaire for early screening of undiagnosed diabetes and estimating the 10-year risk of developing type 2 diabetes.

### How to use

1. Enter your age and body measurements: Select your age group, BMI category, and waist circumference measured with a tape halfway between the lowest rib and the top of the hip bone.
2. Assess your lifestyle and diet: Indicate whether you get at least 30 minutes of physical activity daily and whether you eat vegetables, fruit, or berries every day.
3. Provide your medical history: Note whether you take blood pressure medication, have had elevated blood sugar in the past, and whether blood relatives have diabetes.

### Method and formula

Sums 8 evidence-based risk factors: age, BMI, waist circumference, physical activity, vegetable intake, antihypertensive therapy, prior high blood glucose, and family history.

FINDRISC score = Age (0–4) + BMI (0–3) + Waist (0–4) + Physical activity (0/2) + Vegetables (0/1) + BP medication (0/2) + Prior high glucose (0/5) + Family history (0/3/5). Total: 0–26 points.

### Limitations

This scale is a predictive screening tool and does not replace laboratory diagnostics (fasting plasma glucose, HbA1c, oral glucose tolerance test).

### Sources

- [Lindström J., Tuomilehto J. The diabetes risk score: a practical tool to predict type 2 diabetes risk. Diabetes Care, 2003;26(3):725–731](https://pubmed.ncbi.nlm.nih.gov/12610029/)
- [International Diabetes Federation (IDF). Clinical Practice Recommendations for managing Type 2 Diabetes in Primary Care, 2017](https://www.idf.org/our-activities/care-prevention/clinical-practice-recommendations/)
- [Saaristo T. et al. FINDRISC as an early intervention tool in primary health care. Diabetes Care, 2005;28(12):2900–2907](https://pubmed.ncbi.nlm.nih.gov/16316578/)

<a id="debq"></a>

## Dutch Eating Behavior Questionnaire (DEBQ)

`debq` · [NutriFit](https://nutrifit.health/calculators/debq)

A classic validated psychological instrument designed to assess three primary eating behavior patterns: restrained eating, emotional eating, and external eating.

### How to use

1. Answer honestly: Select the option that best reflects your typical behavior and attitudes over recent months.
2. Do not overthink: Your immediate spontaneous reaction is usually the most accurate reflection of your habitual patterns.
3. Review your three subscale scores: Compare your scores with clinical normative thresholds and review customized strategies.

### Method and formula

The questionnaire contains 33 items rated on a 5-point Likert scale (1 to 5). It evaluates three subscales: cognitive restraint (10 items), emotional eating (13 items), and external stimulation (10 items).

Subscale Score = Arithmetic mean of item responses (range 1.0 to 5.0). Restrained: norm ~2.4; Emotional: norm ~1.8; External: norm ~2.7.

### Limitations

This questionnaire serves as a psychological self-assessment tool and does not constitute a clinical diagnosis. In case of significant distress, consult an eating disorder professional.

### Sources

- [Van Strien T. et al. The Dutch Eating Behavior Questionnaire (DEBQ) for assessment of restrained, emotional, and external eating behavior. Int J Eat Disord, 1986;5(2):295–315](https://doi.org/10.1002/1098-108X(198602)5:2<295::AID-EAT2260050209>3.0.CO;2-T)
- [Wardle J. Eating style: a validation study of the Dutch Eating Behaviour Questionnaire. J Psychosom Res, 1987;31(2):161–169](https://pubmed.ncbi.nlm.nih.gov/3585818/)

<a id="phq-9"></a>

## Patient Health Questionnaire-9 (PHQ-9 Depression)

`phq-9` · [NutriFit](https://nutrifit.health/calculators/phq-9)

The international gold standard for primary depression screening and symptom severity assessment based on DSM-5 clinical criteria.

### How to use

1. Reflect on the past 2 weeks: Evaluate how you have felt over the last 14 days, taking into account the frequency of each described sensation.
2. Answer all 9 items: Choose the most accurate frequency for each symptom from 'Not at all' (0) to 'Nearly every day' (3).
3. Review clinical interpretation: Examine your severity category, self-care guidelines, and recommended healthcare resources.

### Method and formula

9 questions assessing the frequency of depressive symptoms over the past 2 weeks on a scale from 0 ('Not at all') to 3 ('Nearly every day').

Total PHQ-9 Score = Sum of all 9 item scores (range 0–27). 0–4: Minimal; 5–9: Mild; 10–14: Moderate; 15–19: Moderately severe; 20–27: Severe depression.

### Limitations

This screening tool does not replace clinical evaluation by a psychiatrist or psychotherapist. An affirmative answer to question 9 requires immediate clinical support.

### Sources

- [Kroenke K. et al. The PHQ-9: validity of a brief depression severity measure. J Gen Intern Med, 2001;16(9):606–613](https://pubmed.ncbi.nlm.nih.gov/11556941/)
- [Spitzer R.L. et al. Validation and utility of a self-report version of PRIME-MD: the PHQ primary care study. JAMA, 1999;282(18):1737–1744](https://pubmed.ncbi.nlm.nih.gov/10568646/)

<a id="gad-7"></a>

## Generalized Anxiety Disorder 7-Item Scale (GAD-7)

`gad-7` · [NutriFit](https://nutrifit.health/calculators/gad-7)

An international clinical screening instrument designed to rapidly evaluate the severity of generalized anxiety and emotional tension.

### How to use

1. Assess symptoms over the last 14 days: Recall how frequently you have been bothered by nervousness, worrying, or inner restlessness over the past two weeks.
2. Select your response options: Mark the frequency for each symptom from 0 ('Not at all') to 3 ('Nearly every day').
3. Review your score and recommendations: Discover your anxiety severity level and explore structured strategies to restore nervous system balance.

### Method and formula

7 items scored from 0 to 3 points assessing anxiety symptoms over the preceding 2 weeks.

Total GAD-7 Score = Sum of all 7 items (range 0–21). 0–4: Minimal; 5–9: Mild; 10–14: Moderate; 15–21: Severe anxiety.

### Limitations

This screening test does not constitute a formal psychiatric diagnosis. If you experience panic attacks, phobias, or debilitating distress, consult a qualified mental health clinician.

### Sources

- [Spitzer R.L. et al. A brief measure for assessing generalized anxiety disorder: the GAD-7. Arch Intern Med, 2006;166(10):1092–1097](https://pubmed.ncbi.nlm.nih.gov/16717171/)
- [Löwe B. et al. Validation and standardization of the Generalized Anxiety Disorder Screener (GAD-7). Med Care, 2008;46(3):266–274](https://pubmed.ncbi.nlm.nih.gov/18388841/)

<a id="pss-10"></a>

## Perceived Stress Scale (PSS-10)

`pss-10` · [NutriFit](https://nutrifit.health/calculators/pss-10)

The classic psychological scale by Sheldon Cohen designed to measure the degree to which situations in one's life are appraised as unpredictable, uncontrollable, and overloading.

### How to use

1. Focus on the last month: Reflect upon your thoughts and feelings over the preceding 30 days as an integrated continuum.
2. Select your response frequency: Rate each statement from 0 ('Never') to 4 ('Very often'), answering spontaneously.
3. Analyze your stress profile: Review your score, understand your coping reserve status, and implement restorative interventions.

### Method and formula

10 questions rated on a 5-point Likert scale (0 to 4). Items 4, 5, 7, and 8 are reverse-scored to assess psychological resilience and perceived coping efficacy.

Total PSS-10 Score = Direct items (1, 2, 3, 6, 9, 10) + Inverted items (4, 5, 7, 8). 0–13: Low stress; 14–26: Moderate stress; 27–40: High perceived stress.

### Limitations

The test measures subjective cognitive appraisal of stress rather than objective physical pathology. In case of chronic burnout or depression, consult a licensed clinician.

### Sources

- [Cohen S. et al. A global measure of perceived stress. J Health Soc Behav, 1983;24(4):385–396](https://pubmed.ncbi.nlm.nih.gov/6668417/)
- [Cohen S., Williamson G.M. Perceived stress in a probability sample of the United States. The Social Psychology of Health, 1988:31–67](https://psycnet.apa.org/record/1988-98838-002)

<a id="isi"></a>

## Insomnia Severity Index (ISI)

`isi` · [NutriFit](https://nutrifit.health/calculators/isi)

A concise 7-item clinical instrument designed to evaluate the nature, severity, and daytime impact of insomnia symptoms.

### How to use

1. Reflect on the past 2 weeks: Evaluate how you have been sleeping and how rested you have felt during the day over the last 14 days.
2. Answer all 7 questions: Rate the severity of each issue from 0 ('None') to 4 ('Very severe').
3. Review your score and sleep recommendations: Check your severity category and implement targeted sleep hygiene strategies.

### Method and formula

7 questions rated from 0 to 4 points. Total score ranges from 0 to 28, covering sleep onset, sleep maintenance, early morning awakenings, and daytime impairment.

Total ISI Score = Sum of all 7 items (0–28). 0–7: No clinically significant insomnia; 8–14: Subthreshold (mild); 15–21: Clinical insomnia (moderate); 22–28: Severe clinical insomnia.

### Limitations

This index is intended for screening. If obstructive sleep apnea, restless legs syndrome, or chronic parasomnia is suspected, polysomnography is required.

### Sources

- [Morin C.M. et al. The Insomnia Severity Index: psychometric indicators to detect insomnia cases. Sleep, 2011;34(5):601–608](https://pubmed.ncbi.nlm.nih.gov/21532953/)
- [Bastien C.H. et al. Validation of the Insomnia Severity Index as an outcome measure. Sleep Med, 2001;2(4):297–307](https://pubmed.ncbi.nlm.nih.gov/11438246/)

<a id="scoff"></a>

## SCOFF Eating Disorder Screening Questionnaire

`scoff` · [NutriFit](https://nutrifit.health/calculators/scoff)

An internationally recognized 5-question clinical screening tool designed to identify the risk of eating disorders (anorexia nervosa and bulimia nervosa).

### How to use

1. Read each of the 5 questions carefully: Reflect on your habitual eating behaviors, body image feelings, and relationship with food over recent months.
2. Answer Yes or No honestly: Provide candid answers without rationalizing behaviors or minimizing personal distress.
3. Review your screening result: Learn whether your responses suggest clinical risk and examine recommended next steps.

### Method and formula

The tool contains 5 binary (Yes/No) questions reflecting key diagnostic criteria: self-induced vomiting, loss of control, rapid weight loss, distorted body image, and food preoccupation.

Total SCOFF Score = Number of affirmative answers (0–5). A score of ≥ 2 indicates a positive screen and high risk of an eating disorder.

### Limitations

The SCOFF questionnaire is exclusively an initial screening tool. It does not establish a definitive medical diagnosis and requires clinical evaluation by an ED specialist.

### Sources

- [Morgan J.F. et al. The SCOFF questionnaire: assessment of a new screening tool for eating disorders. BMJ, 1999;319(7223):1467–1468](https://pubmed.ncbi.nlm.nih.gov/10582927/)
- [Luck A.J. et al. The SCOFF questionnaire and clinical interview for detecting eating disorders. BMJ, 2002;325(7367):755–756](https://pubmed.ncbi.nlm.nih.gov/12364305/)

<a id="ies-2"></a>

## Intuitive Eating Scale-2 (IES-2)

`ies-2` · [NutriFit](https://nutrifit.health/calculators/ies-2)

A scientifically validated 23-item psychometric instrument by Tracy Tylka designed to measure adaptive, intuitive relationships with food and body signals.

### How to use

1. Assess your habitual eating mindset: Answer according to your genuine attitudes and everyday behaviors over recent months.
2. Rate your level of agreement from 1 to 5: 1 represents 'Strongly disagree', and 5 represents 'Strongly agree'.
3. Review your 4 subscale scores: Identify areas with scores below 3.0, as they indicate targets for nutritional and psychological healing.

### Method and formula

23 items scored on a 5-point Likert scale across 4 subscales: Unconditional Permission to Eat (UPE), Eating for Physical Rather than Emotional Reasons (EPR), Reliance on Hunger and Satiety Cues (RHSC), and Body-Food Choice Congruence (B-FCC).

Overall IES-2 Score = Arithmetic mean of all 23 items taking reverse scoring into account (1.0 to 5.0). Scores > 3.5 indicate intuitive eating competence.

### Limitations

The scale evaluates psychological eating patterns. In the presence of active clinical eating disorders, intuitive eating principles must be guided by specialized clinicians.

### Sources

- [Tylka T.L., Kroon Van Diest A.M. The Intuitive Eating Scale-2: item refinement and psychometric evaluation. J Couns Psychol, 2013;60(1):137–153](https://pubmed.ncbi.nlm.nih.gov/23356469/)
- [Tribole E., Resch E. Intuitive Eating: A Revolutionary Anti-Diet Approach. St. Martin’s Essentials, 2020](https://www.intuitiveeating.org/)

<a id="yfas"></a>

## Yale Food Addiction Scale mYFAS 2.0

`yfas` · [NutriFit](https://nutrifit.health/calculators/yfas)

An adapted scientific questionnaire developed at Yale University to assess symptoms of addictive eating behavior toward highly palatable, ultra-processed foods.

### How to use

1. Identify your trigger foods: Think about specific foods with which you frequently lose control (such as sweets, salty snacks, fast food, or baked goods).
2. Answer all 13 questions: Select 'Yes' if you have regularly experienced the behavior or feeling over the past 12 months.
3. Review your symptom criteria and diagnosis: See your total count of met DSM-5 symptom criteria and whether clinical impairment is present.

### Method and formula

13 items based on 11 DSM-5 substance use disorder diagnostic criteria applied to food, plus 2 items evaluating clinically significant distress and functional impairment.

A food addiction diagnosis requires the presence of clinical distress/impairment (items 12 or 13) plus at least 2 symptoms. 2–3: mild; 4–5: moderate; ≥ 6: severe food addiction.

### Limitations

The concept of 'food addiction' remains a subject of ongoing scientific debate. The scale screens for compulsive, addictive-like eating behaviors toward hyperpalatable foods (sugar, fat, salt).

### Sources

- [Schulte E.M., Gearhardt A.N. Development of the Modified Yale Food Addiction Scale Version 2.0. Eur Eat Disord Rev, 2017;25(4):302–308](https://pubmed.ncbi.nlm.nih.gov/28543787/)
- [Gearhardt A.N. et al. Preliminary validation of the Yale Food Addiction Scale. Appetite, 2009;52(2):430–436](https://pubmed.ncbi.nlm.nih.gov/19028533/)

<a id="eating-behavior-wizard"></a>

## Eating Behavior Diagnostic Wizard

`eating-behavior-wizard` · [NutriFit](https://nutrifit.health/calculators/eating-behavior-wizard)

An integrated diagnostic wizard by NutriFit synthesizing leading validated scales to identify your core eating behavior archetype and personalized action plan.

### How to use

1. Complete clinical risk screening: Note critical indicators regarding food preoccupation and rigid body weight control.
2. Configure eating behavior dimensions: Indicate your tendencies toward dietary restriction, stress-driven eating, and external cues.
3. Receive your archetype and strategy: Review your primary pattern description and download your detailed PDF report.

### Method and formula

NutriFit multi-factor algorithm correlating markers of dietary restraint, emotional eating, external cues, and eating disorder risk into an eating profile.

Comprehensive classification matrix based on cross-scale correlations among DEBQ, SCOFF, IES-2, and mYFAS 2.0.

### Limitations

This tool is designed for self-discovery and nutritional counseling guidance. It does not replace a clinical psychiatric diagnostic interview.

### Sources

- [Fairburn C.G. Cognitive Behavior Therapy and Eating Disorders. Guilford Press, 2008](https://www.guilford.com/books/Cognitive-Behavior-Therapy-and-Eating-Disorders/Christopher-Fairburn/9781593857097)
- [American Psychiatric Association. Diagnostic and Statistical Manual of Mental Disorders (DSM-5-TR), 2022](https://doi.org/10.1176/appi.books.9780890425787)
- [NICE (National Institute for Health and Care Excellence). Eating disorders: recognition and treatment (NG69), 2020](https://www.nice.org.uk/guidance/ng69)
