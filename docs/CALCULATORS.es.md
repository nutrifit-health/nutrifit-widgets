# Catálogo completo — NutriFit

[English](../README.md) · [Русский](README.ru.md) · [Español](README.es.md) · [Українська](README.uk.md) · [Қазақша](README.kk.md) · [O‘zbekcha](README.uz.md)

Estas instrucciones reutilizan las descripciones y métodos públicos de NutriFit. Elige una calculadora y utiliza su ID exacto en el adaptador. Widget y página pública reutilizan el mismo componente.

Los widgets gratuitos pueden solicitar el PDF de marca generado por el servidor existente. Es una instantánea de entradas/resultados mostrados, no un recálculo independiente ni una validación diagnóstica. Necesita el servidor disponible. Completa el cuestionario antes de exportar.

- [Calculadora de calorías diarias (TDEE)](#tdee)
- [Calculadora de macronutrientes](#macros)
- [Calculadora de agua diaria](#water)
- [Calculadora de composición corporal](#body-composition)
- [Calculadora de carga glucémica](#glycemic-load)
- [Cribado del riesgo de déficit de nutrientes](#deficiency-risk)
- [Rueda de balance de salud y nutrición](#health-balance-wheel)
- [Calculadora HOMA-IR: índice de resistencia a la insulina](#homa-ir)
- [Calculadora del índice TyG (triglicéridos × glucosa)](#tyg-index)
- [Calculadora de perfil lipídico: LDL, no-HDL e índices aterogénicos](#lipid-profile)
- [Calculadora de TFG (eGFR) por CKD-EPI 2021](#egfr)
- [Conversor HbA1c ↔ glucosa media (eAG)](#hba1c-eag)
- [Conversor de unidades de análisis de laboratorio](#lab-unit-converter)
- [Calculadora de dosis de vitamina D según el nivel de 25(OH)D](#vitamin-d-dose)
- [Calculadora de déficit de hierro: TSAT, ferritina y déficit de Ganzoni](#iron-deficiency)
- [Calculadora de edad biológica PhenoAge (Levine)](#phenoage)
- [Calculadora FIB-4 y APRI: índices de fibrosis hepática](#fib-4)
- [Calculadora de testosterona libre (Vermeulen)](#free-testosterone)
- [Calculadora de anión gap y delta ratio](#anion-gap)
- [Calculadora de calcio corregido por albúmina](#corrected-calcium)
- [Calculadora de 1RM (repetición máxima)](#one-rep-max)
- [Calculadora de zonas de frecuencia cardíaca](#heart-rate-zones)
- [Calculadora de VO2máx (consumo máximo de oxígeno)](#vo2max)
- [Calculadora de FFMI (índice de masa libre de grasa)](#ffmi)
- [Calculadora de BMR y TDEE de Katch-McArdle](#katch-mcardle)
- [Calculadora de peso ideal (IBW y AdjBW)](#ideal-body-weight)
- [Calculadora de índices de cintura (WHtR, WHR, VAI)](#waist-ratios)
- [Calculadora de sudoración y rehidratación](#sweat-rate)
- [Calculadora de potencial muscular (Casey Butt y Martin Berkhan)](#muscle-potential)
- [Calculadora de coeficientes de powerlifting (DOTS, Wilks, IPF GL)](#powerlifting-coefficients)
- [Calculadora de ingesta diaria de proteínas (ISSN y ESPEN)](#protein-intake)
- [Calculadora de ingesta de fibra dietética (OMS y EFSA)](#fiber-intake)
- [Calculadora de Omega-3 (dosis de EPA + DHA e índice)](#omega-3)
- [Calculadora de balance sodio-potasio (Na:K y sal)](#sodium-potassium)
- [Calculadora de eliminación de alcohol (fórmula de Widmark)](#alcohol)
- [Calculadora de eliminación de cafeína y hora límite](#caffeine)
- [Calculadora de pronóstico dinámico de pérdida de peso (modelo de Kevin Hall)](#weight-loss-forecast)
- [Calculadora de ciclos de sueño](#sleep-cycles)
- [Escala de riesgo de diabetes FINDRISC](#findrisc)
- [Cuestionario Holandés de Conducta Alimentaria (DEBQ)](#debq)
- [Cuestionario de Salud del Paciente PHQ-9 (Depresión)](#phq-9)
- [Escala del Trastorno de Ansiedad Generalizada GAD-7](#gad-7)
- [Escala de Estrés Percibido (PSS-10)](#pss-10)
- [Índice de Gravedad del Insomnio (ISI)](#isi)
- [Cuestionario de Cribado de TCA SCOFF](#scoff)
- [Escala de Alimentación Intuitiva IES-2](#ies-2)
- [Escala de Adicción a la Comida de Yale mYFAS 2.0](#yfas)
- [Asistente de Diagnóstico de la Conducta Alimentaria](#eating-behavior-wizard)

<a id="tdee"></a>

## Calculadora de calorías diarias (TDEE)

`tdee` · [NutriFit](https://nutrifit.health/es/calculators/tdee)

Calcula el metabolismo basal y el gasto energético diario total, además de las calorías para perder, mantener o ganar peso.

### Cómo usar

1. Introduce tus datos corporales: Ingresa tu peso exacto, altura, sexo y edad para calcular tu tasa metabólica basal (BMR).
2. Selecciona tu nivel de actividad: Sé honesto con tu rutina semanal. Si trabajas sentado, no sobreestimes tu actividad sin deporte regular.
3. Obtén tus calorías objetivo: Consulta las calorías para mantenimiento, pérdida de grasa saludable (-500 kcal) o ganancia muscular (+300 kcal).

### Método y fórmula

El metabolismo basal (TMB) se calcula con la ecuación de Mifflin-St Jeor de 1990, el estándar actual para adultos sanos. El gasto total diario (TDEE) es la TMB multiplicada por el factor de actividad. Las calorías para perder peso son un 20% por debajo del TDEE y las de ganancia un 15% por encima: estos ritmos modifican el peso sin perder tejido muscular y sin cambios bruscos.

TMB (hombres) = 10 × peso(kg) + 6,25 × estatura(cm) − 5 × edad + 5; TMB (mujeres) = 10 × peso(kg) + 6,25 × estatura(cm) − 5 × edad − 161; TDEE = TMB × factor de actividad

### Limitaciones

La ecuación se obtuvo en adultos sanos y tiene un error de alrededor del ±10%. No considera la composición corporal: con mucha masa muscular el resultado se subestima y con obesidad se sobreestima. El embarazo, la infancia, el deporte de élite y las enfermedades tiroideas requieren métodos específicos.

### Fuentes

- [Mifflin M.D., St Jeor S.T. et al. A new predictive equation for resting energy expenditure in healthy individuals. Am J Clin Nutr, 1990;51(2):241–247](https://pubmed.ncbi.nlm.nih.gov/2305711/)
- [FAO/WHO/UNU. Human Energy Requirements. Report of a Joint Expert Consultation, 2004](https://www.fao.org/4/y5686e/y5686e00.htm)

<a id="macros"></a>

## Calculadora de macronutrientes

`macros` · [NutriFit](https://nutrifit.health/es/calculators/macros)

Reparte las calorías diarias entre proteínas, grasas e hidratos de carbono según el peso corporal y el objetivo, en gramos, calorías y porcentajes.

### Cómo usar

1. Elige el método de cálculo: Indica tu objetivo calórico actual o permite que NutriFit calcule tu Gasto Energético Diario Total (TDEE) según tu edad, sexo, altura, peso y nivel de actividad.
2. Selecciona tu objetivo y peso corporal: Elige pérdida de peso (déficit del 20%), mantenimiento o ganancia muscular (superávit del 15%). Puedes ingresar el peso en kilogramos o libras.
3. Obtén tu distribución personalizada de macros: Consulta al instante la cantidad recomendada de proteínas, grasas y carbohidratos en gramos, calorías y porcentaje de la energía total.

### Método y fórmula

Las proteínas y las grasas se calculan a partir del peso corporal y no como porcentaje de las calorías: son necesidades fisiológicas que no deben variar con la ingesta. La proteína sigue el posicionamiento de la ISSN (1,4–2,4 g/kg según el objetivo). La grasa se estima en un rango práctico de 0,8–1,2 g/kg, y el porcentaje de energía resultante se compara con el rango de referencia AMDR del 20–35%. Los hidratos reciben las calorías restantes: cubren el entrenamiento y el trabajo del cerebro.

Proteína(g) = peso × factor del objetivo; Grasa(g) = peso × 0,8…1,2; Hidratos(g) = (calorías − proteína × 4 − grasa × 9) / 4

### Limitaciones

Calcular sobre el peso total sobreestima la proteína en obesidad marcada: en ese caso conviene usar la masa magra. El esquema no contempla el reparto por comidas, la fibra ni la tolerancia individual a los hidratos.

### Fuentes

- [Jäger R. et al. International Society of Sports Nutrition Position Stand: Protein and Exercise. J Int Soc Sports Nutr, 2017;14:20](https://pubmed.ncbi.nlm.nih.gov/28642676/)
- [Institute of Medicine. Dietary Reference Intakes for Energy, Carbohydrate, Fiber, Fat, Fatty Acids, Cholesterol, Protein, and Amino Acids, 2005 (AMDR)](https://nap.nationalacademies.org/catalog/10490)

<a id="water"></a>

## Calculadora de agua diaria

`water` · [NutriFit](https://nutrifit.health/es/calculators/water)

Calcula la necesidad diaria de líquidos a partir del peso corporal, con ajustes por actividad física y clima cálido.

### Cómo usar

1. Introduce tu peso corporal: El requerimiento fisiológico base es proporcional a la masa corporal (~30–35 ml por kg de peso).
2. Añade el tiempo de ejercicio: Agrega 350–500 ml de líquido por cada 30 minutos de ejercicio que produzca sudoración.
3. Ajusta por clima y calor: El clima caluroso (>25°C) o ambientes secos aumentan las pérdidas transdérmicas en unos 500 ml adicionales.

### Método y fórmula

La base son 30 ml por kg de peso en adultos y 25 ml/kg a partir de los 60 años, cuando disminuye la capacidad de concentración renal. Cada hora de actividad intensa añade 500 ml para compensar las pérdidas por sudor, y el clima cálido o una habitación seca con calefacción suma otros 500 ml. El total es la necesidad completa de agua; entre el 20 y el 30% procede de los alimentos, por eso se muestra aparte la cantidad que debe llegar en bebidas (EFSA, 2010).

Total(ml) = peso × 30 (o × 25 a partir de los 60) + 500 × horas de actividad + 500 con calor; Bebidas(ml) = total × 0,75

### Limitaciones

Es una referencia para adultos sanos. En insuficiencia cardíaca o renal, con diuréticos, con fiebre o en trabajos con calor la pauta la fija el médico. La sed y el color de la orina siguen siendo guías más fiables que cualquier cálculo.

### Fuentes

- [EFSA Panel on Dietetic Products. Scientific Opinion on Dietary Reference Values for water, 2010](https://www.efsa.europa.eu/en/efsajournal/pub/1459)
- [Sawka M.N. et al. American College of Sports Medicine Position Stand: Exercise and Fluid Replacement, 2007](https://pubmed.ncbi.nlm.nih.gov/17277604/)

<a id="body-composition"></a>

## Calculadora de composición corporal

`body-composition` · [NutriFit](https://nutrifit.health/es/calculators/body-composition)

Estima el porcentaje de grasa por perímetros corporales y calcula la masa grasa, la masa magra y el índice de masa corporal.

### Cómo usar

1. Usa una cinta métrica flexible: Usa una cinta estándar ajustada a la piel sin apretar el tejido blando. Mídete por la mañana en ayunas.
2. Toma las circunferencias requeridas: Los hombres miden cuello y cintura. Las mujeres miden cuello, cintura y cadera. Mantén la cinta paralela al suelo.
3. Revisa tu composición corporal: Obtén tu porcentaje de grasa estimado, masa grasa en kilogramos y masa muscular magra.

### Método y fórmula

El porcentaje de grasa se estima con el método de la U.S. Navy (Hodgdon y Beckett, 1984): usa la estatura y los perímetros de cuello y cintura, y en mujeres también el de cadera. Se eligió porque no requiere equipamiento y su error es comparable al de las básculas de bioimpedancia domésticas. Además se calcula el IMC según la clasificación de la OMS: no dice nada sobre la composición corporal, pero permite compararse con las normas poblacionales.

Hombres: %grasa = 495 / (1,0324 − 0,19077 × log₁₀(cintura − cuello) + 0,15456 × log₁₀(estatura)) − 450; Mujeres: %grasa = 495 / (1,29579 − 0,35004 × log₁₀(cintura + cadera − cuello) + 0,221 × log₁₀(estatura)) − 450; IMC = peso / estatura²

### Limitaciones

El error ronda el ±3–4% frente a DXA y aumenta cuanto más atípica es la constitución. Mide por la mañana en ayunas, con la cinta ajustada sin apretar y siempre en los mismos puntos: una diferencia de 1 cm en la cintura cambia el resultado de forma apreciable. El IMC no distingue músculo de grasa y no se aplica a deportistas, embarazadas ni niños.

### Fuentes

- [Hodgdon J.A., Beckett M.B. Prediction of percent body fat for U.S. Navy men and women from body circumferences and height. Naval Health Research Center, 1984](https://apps.dtic.mil/sti/citations/ADA143890)
- [WHO. Obesity: preventing and managing the global epidemic. WHO Technical Report Series 894, 2000](https://www.who.int/publications/i/item/WHO_TRS_894)

<a id="glycemic-load"></a>

## Calculadora de carga glucémica

`glycemic-load` · [NutriFit](https://nutrifit.health/es/calculators/glycemic-load)

Calcula la carga glucémica de una ración a partir del índice glucémico y de los hidratos de carbono: refleja la respuesta real de la glucosa mejor que el índice por sí solo.

### Cómo usar

1. Elige un alimento o ingresa el IG: Selecciona de las tablas internacionales oficiales (Atkinson 2021) o escribe el índice glucémico.
2. Indica carbohidratos y porción: Introduce los carbohidratos por 100 g y el peso real de tu porción en gramos.
3. Valora el impacto metabólico: Conoce el impacto real sobre el azúcar en sangre: Bajo (≤10), Medio (11–19) o Alto (≥20).

### Método y fórmula

El índice glucémico indica con qué rapidez sube la glucosa tras una porción que contiene 50 g de hidratos, pero no dice nada del tamaño real de la ración. La carga glucémica tiene en cuenta ambas cosas: el índice se multiplica por los hidratos de la ración concreta y se divide entre 100. Por eso la sandía tiene un índice alto y una carga baja: la ración aporta pocos hidratos.

Hidratos de la ración(g) = hidratos por 100 g × peso de la ración / 100; CG = IG × hidratos de la ración / 100

### Limitaciones

Los valores de las tablas son promedios: la variedad, la maduración, la molienda, la cocción y la combinación con proteína, grasa y fibra modifican la respuesta glucémica. La reacción individual varía mucho y, en diabetes, el cálculo no sustituye a la medición de glucosa ni a los datos de monitorización.

### Fuentes

- [Atkinson F.S., Brand-Miller J.C. et al. International tables of glycemic index and glycemic load values 2021. Am J Clin Nutr, 2021;114(5):1625–1632](https://pubmed.ncbi.nlm.nih.gov/34258626/)
- [Augustin L.S.A. et al. Glycemic index, glycemic load and glycemic response: International Scientific Consensus Summit. Nutr Metab Cardiovasc Dis, 2015;25(9):795–815](https://pubmed.ncbi.nlm.nih.gov/26160327/)

<a id="deficiency-risk"></a>

## Cribado del riesgo de déficit de nutrientes

`deficiency-risk` · [NutriFit](https://nutrifit.health/es/calculators/deficiency-risk)

Marca los factores de estilo de vida y alimentación que te afectan y descubre qué déficits son probables y con qué analíticas se comprueban.

### Cómo usar

1. Indica tus hábitos dietéticos: Señala exclusiones como ausencia de carne, pescado o lácteos en tu alimentación.
2. Considera tu estilo de vida: Ten en cuenta la falta de sol, entrenamientos intensos y fármacos como antiácidos o metformina.
3. Revisa los análisis recomendados: Recibe tu puntuación de riesgo y los marcadores sanguíneos de referencia para cada nutriente.

### Método y fórmula

No es un diagnóstico, sino una lista de comprobación de factores de riesgo. Cada factor se asocia a los nutrientes para los que está reconocido como factor de riesgo en las fichas del NIH Office of Dietary Supplements y en los documentos de la EFSA sobre valores de referencia. El peso refleja la fuerza del vínculo: 3 puntos cuando el déficit es esperable sin compensación, 2 para un factor significativo y 1 para una contribución adicional. Los puntos se suman por nutriente: desde 2 puntos el riesgo es moderado y desde 4, alto.

Puntuación del nutriente = suma de los pesos de los factores marcados; 0–1 punto es riesgo bajo, 2–3 moderado y 4 o más alto

### Limitaciones

El cribado se basa solo en los factores marcados y no considera la ingesta real, el uso de suplementos, la genética ni las enfermedades asociadas. No confirma ni descarta un déficit: el estado de un nutriente se determina en el laboratorio y lo interpreta un médico o un profesional de la nutrición.

### Fuentes

- [NIH Office of Dietary Supplements. Dietary Supplement Fact Sheets (группы риска по нутриентам)](https://ods.od.nih.gov/factsheets/list-all/)
- [EFSA. Dietary Reference Values for the EU (DRV Finder)](https://multimedia.efsa.europa.eu/drvs/index.htm)

<a id="health-balance-wheel"></a>

## Rueda de balance de salud y nutrición

`health-balance-wheel` · [NutriFit](https://nutrifit.health/es/calculators/health-balance-wheel)

Gráfico radial interactivo de 8 áreas de salud y estilo de vida. Detecta cuellos de botella (Ley del Mínimo de Liebig) y conecta con herramientas de NutriFit.

### Cómo usar

1. Evalúa los 8 pilares de salud: Asigna puntuaciones de 1 a 10 para cada dimensión. Apóyate en los anclajes dinámicos bajo los controles para referencias cualitativas objetivas.
2. Identifica los factores limitantes: El test identifica los factores limitantes con las puntuaciones más bajas. Según la Ley del Mínimo de Liebig, estos determinan el bienestar general y bloquean la adaptación.
3. Ejecuta microhábitos en 48 horas: Evita intentar cambiar las 8 áreas de golpe. Enfócate en 1–2 factores limitantes, conecta las herramientas especializadas de NutriFit y da el primer paso en 48 horas.

### Método y fórmula

Basado en los principios de la Medicina del Estilo de Vida (Lifestyle Medicine) y la Ley del Mínimo de Justus von Liebig. Se evalúan 8 pilares fundamentales de la salud (calidad nutricional, energía, hidratación, sueño, actividad física, relación con la comida, salud digestiva y prevención) en una escala del 1 al 10. La puntuación global refleja el potencial vital, mientras que el índice de equilibrio mide la dispersión para evaluar la resiliencia y estabilidad biológica.

Puntuación general = (Σ Puntuaciones / 8) × 10; Índice de equilibrio = max(0, 100 − DE × 18); Cuellos de botella = min(Puntuaciones) donde valor ≤ 6

### Limitaciones

La autoevaluación tiene un carácter de cribado y refleja la percepción subjetiva de los hábitos y el bienestar. No sustituye las pruebas diagnósticas de laboratorio ni la consulta médica, pero ayuda a priorizar los cambios en el estilo de vida con mayor impacto.

### Fuentes

- [Liebig J. Die organische Chemie in ihrer Anwendung auf Agricultur und Physiologie. Vieweg, Braunschweig, 1840 (Закон минимума Либиха)](https://archive.org/details/dieorganischech01liebgoog)
- [American College of Lifestyle Medicine (ACLM). Standards and Core Competencies for Lifestyle Medicine, 2022](https://lifestylemedicine.org/)
- [Katz D.L. et al. Lifestyle Medicine: The Foundation of Health Care. Am J Prev Med, 2018;54(5):737–742](https://pubmed.ncbi.nlm.nih.gov/29571948/)

<a id="homa-ir"></a>

## Calculadora HOMA-IR: índice de resistencia a la insulina

`homa-ir` · [NutriFit](https://nutrifit.health/es/calculators/homa-ir)

HOMA-IR, HOMA-β y QUICKI a partir de glucosa e insulina en ayunas: resistencia a la insulina y función de células β con rangos de referencia e interpretación.

### Cómo usar

1. Mida glucosa e insulina en la misma muestra: Ambos marcadores deben medirse en ayunas en la misma extracción: por la mañana tras 8–12 horas sin comida, café ni ejercicio. Una insulina «de otro día» hace que el índice carezca de sentido.
2. Introduzca los valores en las unidades del informe: Los laboratorios informan la glucosa en mmol/L o mg/dL y la insulina en µUI/mL (mUI/L) o pmol/L. Cambie las unidades según su informe: la calculadora convierte automáticamente.
3. Compare los tres índices: Revise los índices junto con los análisis originales, las condiciones de extracción y las referencias del laboratorio. HOMA-β no permite concluir que exista agotamiento pancreático.

### Método y fórmula

HOMA1 (Matthews, 1985) y QUICKI (Katz, 2000) son modelos basados en glucosa e insulina en ayunas. Describen aspectos distintos de los mismos datos y se usan principalmente en investigación. HOMA-IR estima la resistencia a la insulina; HOMA-β, la secreción dentro del modelo; y QUICKI, la sensibilidad. No sustituyen los criterios clínicos para diagnosticar diabetes.

HOMA-IR = Glucosa (mmol/L) × Insulina (µUI/mL) / 22,5
HOMA-β (%) = 20 × Insulina (µUI/mL) / (Glucosa (mmol/L) − 3,5)
QUICKI = 1 / [log10(Insulina, µUI/mL) + log10(Glucosa, mg/dL)]

### Limitaciones

Los índices solo son válidos para muestras en ayunas (8–12 h) y no se aplican durante insulinoterapia, uso de secretagogos, diabetes tipo 1 descompensada ni con glucosa baja (HOMA-β no está definido con glucosa ≤ 3,5 mmol/L). Los valores de referencia de insulina dependen del método del laboratorio y los puntos de corte del HOMA-IR, de la población (2,0–3,8 según el estudio). El resultado no es un diagnóstico, sino un motivo para revisar el metabolismo de la glucosa con un médico.

### Fuentes

- [Matthews D.R. et al. Homeostasis model assessment: insulin resistance and β-cell function from fasting plasma glucose and insulin concentrations in man. Diabetologia, 1985;28(7):412–419](https://pubmed.ncbi.nlm.nih.gov/3899825/)
- [Katz A. et al. Quantitative insulin sensitivity check index (QUICKI): a simple, accurate method for assessing insulin sensitivity in humans. J Clin Endocrinol Metab, 2000;85(7):2402–2410](https://pubmed.ncbi.nlm.nih.gov/10902785/)
- [Gayoso-Diz P. et al. Insulin resistance (HOMA-IR) cut-off values and the metabolic syndrome in a general adult population. BMC Endocr Disord, 2013;13:47](https://pubmed.ncbi.nlm.nih.gov/24131857/)

<a id="tyg-index"></a>

## Calculadora del índice TyG (triglicéridos × glucosa)

`tyg-index` · [NutriFit](https://nutrifit.health/es/calculators/tyg-index)

Índice TyG y sus derivados TyG-IMC y TyG-CC: resistencia a la insulina y riesgo cardiometabólico a partir de triglicéridos y glucosa en ayunas, sin análisis de insulina.

### Cómo usar

1. Tome triglicéridos y glucosa en ayunas: Ambos forman parte de la bioquímica estándar. La extracción debe ser en ayunas: los triglicéridos posprandiales suben 1,5–2 veces e inflan el índice.
2. Indique las unidades del informe: La fórmula está definida para mg/dL. Si el laboratorio informa mmol/L, deje el selector en mmol/L: la calculadora convierte a mg/dL automáticamente.
3. Añada peso, talla y cintura: TyG-IMC y TyG-CC detectan la obesidad visceral y el hígado graso con más precisión que el TyG «puro». Mida la cintura a la altura del ombligo en espiración.

### Método y fórmula

El índice TyG (Simental-Mendía, 2008) es el logaritmo natural de la mitad del producto de triglicéridos y glucosa en ayunas en mg/dL. Refleja la lipotoxicidad y la utilización deficiente de glucosa, dos mecanismos clave de la resistencia a la insulina, y se correlaciona con el clamp euglucémico tan bien como el HOMA-IR, sin necesitar el análisis de insulina, caro y mal estandarizado. Los derivados TyG-IMC y TyG-CC añaden el peso y el perímetro de cintura y mejoran la detección de síndrome metabólico y NAFLD.

TyG = ln[ Triglicéridos (mg/dL) × Glucosa (mg/dL) / 2 ]
TyG-IMC = TyG × IMC (kg/m²)
TyG-CC = TyG × Perímetro de cintura (cm)
Conversión: TG mg/dL = mmol/L × 88,57; glucosa mg/dL = mmol/L × 18,016

### Limitaciones

No existe un punto de corte único del TyG: según la población, el umbral de alto riesgo va de 8,5 a 9,0, y en cohortes asiáticas es menor. El índice se distorsiona con hipertrigliceridemia familiar, fibratos, estatinas y alcohol la víspera, y en enfermedad aguda. Se requieren valores en ayunas (8–12 h). Es una herramienta de cribado, no un diagnóstico.

### Fuentes

- [Simental-Mendía L.E., Rodríguez-Morán M., Guerrero-Romero F. The product of fasting glucose and triglycerides as surrogate for identifying insulin resistance in apparently healthy subjects. Metab Syndr Relat Disord, 2008;6(4):299–304](https://pubmed.ncbi.nlm.nih.gov/19067533/)
- [Guerrero-Romero F. et al. The product of triglycerides and glucose, a simple measure of insulin sensitivity. Comparison with the euglycemic-hyperinsulinemic clamp. J Clin Endocrinol Metab, 2010;95(7):3347–3351](https://pubmed.ncbi.nlm.nih.gov/20484475/)
- [Sánchez-García A. et al. Diagnostic accuracy of the triglyceride and glucose index for insulin resistance: a systematic review. Int J Endocrinol, 2020;2020:4678526](https://pubmed.ncbi.nlm.nih.gov/32256572/)

<a id="lipid-profile"></a>

## Calculadora de perfil lipídico: LDL, no-HDL e índices aterogénicos

`lipid-profile` · [NutriFit](https://nutrifit.health/es/calculators/lipid-profile)

LDL calculado por dos métodos, no-HDL, colesterol remanente y cinco índices aterogénicos a partir del lipidograma estándar, con objetivos ESC/EAS.

### Cómo usar

1. Introduzca los tres marcadores básicos: Colesterol total, HDL y triglicéridos aparecen en cualquier lipidograma. Elija las unidades del informe: mmol/L (Europa, CEI) o mg/dL (EE. UU., parte de los laboratorios latinoamericanos).
2. Añada el LDL medido si lo tiene: La medición directa del LDL es más precisa que el cálculo. Si no la tiene, la calculadora usa la ecuación de Sampson y muestra en paralelo Friedewald para compararla con el informe del laboratorio.
3. Mire los cocientes, no un solo valor: Un colesterol total normal con HDL bajo y triglicéridos altos es un perfil aterogénico. El AIP y el coeficiente aterogénico lo revelan cuando «el CT está normal».

### Método y fórmula

A partir del colesterol total, el HDL y los triglicéridos, la calculadora obtiene el LDL con la fórmula clásica de Friedewald (1972) y con la ecuación de Sampson (NIH, 2020), que se mantiene precisa con triglicéridos hasta 9 mmol/L y LDL bajo. El no-HDL es todo el colesterol aterogénico (LDL + VLDL + partículas remanentes), y el colesterol remanente es no-HDL menos LDL. Los índices de Castelli (CT/HDL y LDL/HDL), el coeficiente aterogénico de Klimov y el índice aterogénico del plasma AIP = log10(TG/HDL) reflejan la proporción entre fracciones «malas» y «protectoras» y predicen el riesgo mejor que los marcadores aislados.

LDL (Friedewald, mmol/L) = CT − HDL − TG / 2,2   [con TG ≤ 4,5 mmol/L]
LDL (Sampson, mg/dL) = CT/0,948 − HDL/0,971 − (TG/8,56 + TG×no-HDL/2140 − TG²/16100) − 9,44
no-HDL = CT − HDL;  Colesterol remanente = no-HDL − LDL
CA (Klimov) = (CT − HDL) / HDL;  Castelli I = CT/HDL;  Castelli II = LDL/HDL
AIP = log10(TG / HDL), mmol/L

### Limitaciones

El LDL calculado es una estimación, no una medición: con TG > 4,5 mmol/L Friedewald no se aplica y con TG > 9 mmol/L o quilomicronemia incluso Sampson es impreciso. Los índices no sustituyen la valoración del riesgo global por SCORE2, apolipoproteína B y lipoproteína(a). Los objetivos de LDL dependen de la categoría de riesgo (de 1,4 a 3,0 mmol/L según ESC/EAS 2019) y los fija el médico. Ayuno o no según indique el laboratorio.

### Fuentes

- [Friedewald W.T., Levy R.I., Fredrickson D.S. Estimation of the concentration of low-density lipoprotein cholesterol in plasma, without use of the preparative ultracentrifuge. Clin Chem, 1972;18(6):499–502](https://pubmed.ncbi.nlm.nih.gov/4337382/)
- [Sampson M. et al. A new equation for calculation of low-density lipoprotein cholesterol in patients with normolipidemia and/or hypertriglyceridemia. JAMA Cardiol, 2020;5(5):540–548](https://pubmed.ncbi.nlm.nih.gov/32101259/)
- [Dobiášová M., Frohlich J. The plasma parameter log (TG/HDL-C) as an atherogenic index. Clin Biochem, 2001;34(7):583–588](https://pubmed.ncbi.nlm.nih.gov/11738396/)
- [Mach F. et al. 2019 ESC/EAS Guidelines for the management of dyslipidaemias. Eur Heart J, 2020;41(1):111–188](https://pubmed.ncbi.nlm.nih.gov/31504418/)

<a id="egfr"></a>

## Calculadora de TFG (eGFR) por CKD-EPI 2021

`egfr` · [NutriFit](https://nutrifit.health/es/calculators/egfr)

TFG estimada por CKD-EPI 2021 (creatinina, opcionalmente cistatina C), aclaramiento de creatinina por Cockcroft-Gault y estadio de ERC según KDIGO, con conversión µmol/L y mg/dL.

### Cómo usar

1. Busque la creatinina en el informe: La creatinina sérica forma parte de la bioquímica básica. Los laboratorios de Europa y la CEI informan µmol/L; EE. UU. y Latinoamérica, mg/dL. Elija la unidad correspondiente.
2. Indique sexo y edad: La masa muscular, y por tanto la creatinina «normal», difiere entre hombres y mujeres y baja con la edad; la ecuación lo tiene en cuenta. El coeficiente racial se eliminó en la versión de 2021.
3. Añada la cistatina C si la tiene: La cistatina C no depende de la masa muscular ni de la dieta. KDIGO 2024 recomienda la ecuación combinada para confirmar la ERC con eGFRcr 45–59 sin albuminuria.

### Método y fórmula

La tasa de filtrado glomerular es el principal indicador de la función renal. La ecuación CKD-EPI 2021 (Inker et al., NEJM) la deriva de la creatinina sérica, la edad y el sexo sin el coeficiente racial, retirado de la práctica. Si se dispone de cistatina C se usa la ecuación combinada CKD-EPI 2021 cr-cys, más precisa en personas con masa muscular atípica (deportistas, sarcopenia, amputaciones, veganos). La calculadora muestra además el aclaramiento de creatinina por Cockcroft-Gault, aún usado para dosificar fármacos, y el estadio de ERC G1–G5 según KDIGO.

eGFRcr = 142 × min(Scr/κ, 1)^α × max(Scr/κ, 1)^−1,200 × 0,9938^Edad × 1,012 [mujer]
κ = 0,7 (mujer) / 0,9 (hombre);  α = −0,241 (mujer) / −0,302 (hombre);  Scr — creatinina, mg/dL (= µmol/L / 88,4)
eGFRcr-cys = 135 × min(Scr/κ,1)^α × max(Scr/κ,1)^−0,544 × min(Scys/0,8,1)^−0,323 × max(Scys/0,8,1)^−0,778 × 0,9961^Edad × 0,963 [mujer]
Cockcroft-Gault (mL/min) = (140 − Edad) × Peso (kg) × 0,85 [mujer] / (72 × Scr, mg/dL)

### Limitaciones

La TFG estimada está validada para adultos estables desde los 18 años: en daño renal agudo, embarazo, pesos o masas musculares extremos, amputaciones y con fármacos que afectan a la secreción de creatinina (trimetoprim, cimetidina) es imprecisa. Un solo eGFR < 60 no significa ERC: el diagnóstico exige confirmación a los 3 meses y valoración de la albuminuria. Cockcroft-Gault no está normalizado a superficie corporal y sobreestima el aclaramiento en obesidad.

### Fuentes

- [Inker L.A. et al. New creatinine- and cystatin C-based equations to estimate GFR without race. N Engl J Med, 2021;385(19):1737–1749](https://pubmed.ncbi.nlm.nih.gov/34554658/)
- [KDIGO 2012 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease. Kidney Int Suppl, 2013;3(1):1–150](https://kdigo.org/guidelines/ckd-evaluation-and-management/)
- [Cockcroft D.W., Gault M.H. Prediction of creatinine clearance from serum creatinine. Nephron, 1976;16(1):31–41](https://pubmed.ncbi.nlm.nih.gov/1244564/)

<a id="hba1c-eag"></a>

## Conversor HbA1c ↔ glucosa media (eAG)

`hba1c-eag` · [NutriFit](https://nutrifit.health/es/calculators/hba1c-eag)

HbA1c a glucemia media de 3 meses según la fórmula ADAG, cálculo inverso y conversión % ↔ mmol/mol con categorías ADA.

### Cómo usar

1. Elija qué dato tiene: Si tiene un análisis de HbA1c, introdúzcalo. Si usa glucómetro o MCG y conoce su glucosa media de 2–3 meses, pase al cálculo inverso.
2. Indique las unidades del informe: La HbA1c se informa en porcentaje (NGSP, EE. UU. y CEI) o en mmol/mol (IFCC, Europa). 6,5 % equivale a 48 mmol/mol: la calculadora convierte automáticamente.
3. Compare la eAG con su glucómetro: Si la media del glucómetro es claramente inferior a la eAG, probablemente mide sobre todo en ayunas y se pierde los picos posprandiales. Una diferencia mayor de 1,5 mmol/L merece comentarse con el médico.

### Método y fórmula

La hemoglobina glicosilada refleja la glucosa media de 8–12 semanas, la vida de un glóbulo rojo. El estudio A1c-Derived Average Glucose (ADAG, Nathan 2008) comparó la HbA1c con la monitorización continua de glucosa en 507 personas y obtuvo una relación lineal: eAG (mg/dL) = 28,7 × HbA1c − 46,7. La calculadora funciona en ambos sentidos, de HbA1c a glucosa media y de una media conocida (por glucómetro o MCG) a la HbA1c esperada, y convierte el porcentaje NGSP en unidades IFCC (mmol/mol), usadas en Europa y Australia.

eAG (mg/dL) = 28,7 × HbA1c (%) − 46,7
eAG (mmol/L) = 1,59 × HbA1c (%) − 2,59
HbA1c (mmol/mol, IFCC) = (HbA1c (%, NGSP) − 2,15) × 10,929
Inverso: HbA1c (%) = (eAG, mg/dL + 46,7) / 28,7

### Limitaciones

La HbA1c es imprecisa en situaciones que alteran la vida del eritrocito o la estructura de la hemoglobina: anemia, hemoglobinopatías, embarazo, ERC, pérdida de sangre o transfusión reciente, déficit de hierro y B12. En un 10–15 % de las personas la relación individual HbA1c-glucosa difiere notablemente de la media («brecha de glicación»), por lo que la eAG es una estimación poblacional, no una medición. El diagnóstico de diabetes exige confirmación con una segunda prueba.

### Fuentes

- [Nathan D.M. et al. Translating the A1C assay into estimated average glucose values. Diabetes Care, 2008;31(8):1473–1478](https://pubmed.ncbi.nlm.nih.gov/18540046/)
- [American Diabetes Association. Diagnosis and Classification of Diabetes: Standards of Care in Diabetes — 2024. Diabetes Care, 2024;47(Suppl 1):S20–S42](https://pubmed.ncbi.nlm.nih.gov/38078589/)
- [NGSP. IFCC Standardization of HbA1c: master equation NGSP ↔ IFCC](https://ngsp.org/ifcc.asp)

<a id="lab-unit-converter"></a>

## Conversor de unidades de análisis de laboratorio

`lab-unit-converter` · [NutriFit](https://nutrifit.health/es/calculators/lab-unit-converter)

Conversión de 33 parámetros de laboratorio entre SI (mmol/L, µmol/L, nmol/L, pmol/L) y unidades convencionales (mg/dL, ng/mL, pg/mL) según la masa molar.

### Cómo usar

1. 1. Elija el parámetro: La lista incluye los 33 analitos más frecuentes: de la glucosa y el colesterol a la vitamina D, la testosterona y el cortisol. Colesterol, LDL y HDL comparten el mismo factor.
2. 2. Indique el sentido: SI → convencional si su informe está en mmol/L o nmol/L y la referencia de un artículo extranjero en mg/dL o ng/mL. Y al revés si el análisis se hizo en el extranjero.
3. 3. Convierta también el rango de referencia: Los intervalos de referencia dependen del método del laboratorio. Convierta también los límites de normalidad del informe para comparar el valor con el rango correcto.

### Método y fórmula

Los laboratorios del mundo usan dos sistemas de unidades: SI (moles por litro, adoptado en Europa, Rusia, Canadá, Australia) y el convencional de masa (miligramos por decilitro, nanogramos por mililitro: EE. UU., parte de Latinoamérica y Asia). Convertir entre ellos consiste en multiplicar o dividir por un factor igual a la masa molar de la sustancia ajustada por volumen. La calculadora usa factores del Manual de estilo de la AMA y de las recomendaciones para implantar el SI en el laboratorio clínico (Young 1987) y muestra la precisión habitual de cada parámetro.

Valor SI = Valor convencional × factor
Valor convencional = Valor SI / factor
Ejemplos de factores: glucosa 0,0555 (mg/dL → mmol/L); colesterol 0,02586; triglicéridos 0,01129; creatinina 88,4 (mg/dL → µmol/L); 25(OH)D 2,496 (ng/mL → nmol/L); insulina 6,945 (µUI/mL → pmol/L)

### Limitaciones

Los factores son válidos para sustancias puras y métodos estándar. En hormonas calibradas frente a estándares internacionales (insulina, prolactina, PTH) la conversión depende del calibrador del kit concreto y puede diferir en unos puntos porcentuales. Los rangos de referencia no se convierten automáticamente: compárelos con el informe de su laboratorio. El conversor no interpreta el resultado.

### Fuentes

- [Young D.S. Implementation of SI units for clinical laboratory data. Style specifications and conversion tables. Ann Intern Med, 1987;106(1):114–129](https://pubmed.ncbi.nlm.nih.gov/3789557/)
- [AMA Manual of Style, 11th ed. Units of Measure: Conventional Units and SI Units in Clinical Chemistry. Oxford University Press, 2020](https://academic.oup.com/amamanualofstyle/si-conversion-calculator)
- [NIST Special Publication 811. Guide for the Use of the International System of Units (SI), 2008](https://www.nist.gov/pml/special-publication-811)

<a id="vitamin-d-dose"></a>

## Calculadora de dosis de vitamina D según el nivel de 25(OH)D

`vitamin-d-dose` · [NutriFit](https://nutrifit.health/es/calculators/vitamin-d-dose)

Dosis de carga según la fórmula de van Groningen y de mantenimiento según la Endocrine Society, ajustadas por peso y obesidad; estado de 25(OH)D y plazo del control.

### Cómo usar

1. 1. Mida la 25(OH)D: Precisamente la 25-hidroxivitamina D (calcidiol), no la 1,25(OH)₂D. Las unidades del informe son nmol/L o ng/mL; elija la correcta y la calculadora convierte.
2. 2. Elija el objetivo: 75 nmol/L (30 ng/mL) es la referencia de la Endocrine Society para efectos extraóseos. 50 nmol/L basta para el hueso según el IOM. No es necesario superar 100 nmol/L.
3. 3. Indique peso y talla: La vitamina D es liposoluble y se distribuye en el tejido adiposo, por lo que la dosis depende del peso, y en obesidad la de mantenimiento se multiplica por 2–3.

### Método y fórmula

El nivel de 25-hidroxivitamina D es el único marcador válido del estado de vitamina D. La dosis de carga se calcula con la fórmula de van Groningen (2010), obtenida en 208 pacientes con déficit: en total 40 UI por cada nmol/L de diferencia entre el objetivo y el nivel actual por cada kilogramo de peso, con un máximo de 300 000 UI. La calculadora la reparte en 8 semanas de toma diaria o semanal. La dosis de mantenimiento es de 1500–2000 UI/día según la Endocrine Society, 2–3 veces mayor en obesidad (IMC ≥ 30) por el secuestro de la vitamina en el tejido adiposo. Control a las 12 semanas de la carga.

Dosis de carga (UI) = 40 × (25(OH)D objetivo − 25(OH)D actual, nmol/L) × Peso (kg), máximo 300 000 UI
Dosis diaria = Dosis de carga / 56 días;  Dosis semanal = Dosis de carga / 8
Mantenimiento = 2000 UI/día (× 2,5 con IMC ≥ 30)
Conversión: 1 ng/mL = 2,496 nmol/L; 1 µg de colecalciferol = 40 UI

### Limitaciones

La fórmula está validada en adultos sin malabsorción ni insuficiencia renal. En hipercalcemia, sarcoidosis y otras granulomatosis, ERC 4–5, malabsorción, embarazo y con tiazidas o anticonvulsivantes, solo el médico fija la dosis. Niveles por encima de 125 nmol/L no aportan beneficio adicional; por encima de 250 nmol/L hay riesgo de toxicidad. La calculadora no sustituye la prescripción médica ni tiene en cuenta la vitamina D de otros suplementos y fármacos.

### Fuentes

- [van Groningen L. et al. Cholecalciferol loading dose guideline for vitamin D-deficient adults. Eur J Endocrinol, 2010;162(4):805–811](https://pubmed.ncbi.nlm.nih.gov/20139241/)
- [Endocrine Society. Vitamin D for the Prevention of Disease: Clinical Practice Guideline, 2024](https://www.endocrine.org/clinical-practice-guidelines/vitamin-d-for-prevention-of-disease)

<a id="iron-deficiency"></a>

## Calculadora de déficit de hierro: TSAT, ferritina y déficit de Ganzoni

`iron-deficiency` · [NutriFit](https://nutrifit.health/es/calculators/iron-deficiency)

Saturación de transferrina, umbral de ferritina ajustado por PCR, estadio del déficit de hierro (latente, sin anemia, ferropénica, de inflamación) y déficit calculado por Ganzoni.

### Cómo usar

1. 1. Reúna cuatro parámetros: Ferritina, hierro sérico, CTFH (o transferrina) y hemoglobina. Todos de una misma extracción matutina en ayunas, sin tomar hierro en las 24 horas previas.
2. 2. Añada la PCR: Sin PCR, una ferritina normal puede tomarse por ausencia de déficit durante una inflamación activa. La calculadora sube el umbral de ferritina a 100 µg/L si la PCR supera 5 mg/L.
3. 3. Lea el estadio: El déficit de hierro avanza por escalones: primero se agotan los depósitos (ferritina), luego cae el transporte (TSAT) y solo después la hemoglobina. La anemia es la última etapa.

### Método y fórmula

La ferritina refleja los depósitos de hierro, pero sube con la inflamación, por lo que la OMS 2020 recomienda un umbral de 15 µg/L para depósitos agotados, un umbral clínico de 30 µg/L y 70–100 µg/L con PCR elevada. La saturación de transferrina (TSAT) es la fracción de la proteína transportadora ocupada por hierro: por debajo del 20 % indica falta de hierro para la eritropoyesis sea cual sea la causa. Combinar ferritina, TSAT y hemoglobina permite distinguir déficit latente, déficit sin anemia, anemia ferropénica y anemia de inflamación crónica. La fórmula de Ganzoni (1970) estima el hierro total necesario para recuperar la hemoglobina y los depósitos; se usa para dimensionar el hierro intravenoso.

TSAT (%) = Hierro sérico / CTFH × 100
CTFH (µmol/L) ≈ Transferrina (g/L) × 25,1
Déficit de hierro (mg, Ganzoni) = Peso (kg) × (Hb objetivo − Hb, g/dL) × 2,4 + Depósitos (500 mg con peso ≥ 35 kg)
Conversión: hierro µg/dL × 0,179 = µmol/L; Hb g/L / 10 = g/dL

### Limitaciones

El hierro sérico oscila a lo largo del día y tras las comidas: se extrae por la mañana en ayunas; la TSAT no es fiable en inflamación aguda ni tras tomar hierro la víspera. La ferritina sube con inflamación, hepatopatía, tumores y síndrome metabólico, por lo que con PCR por encima de 5 mg/L la calculadora eleva el umbral a 100 µg/L. La fórmula de Ganzoni asume una hemoglobina objetivo de 15 g/dL y depósitos de 500 mg; el médico los ajusta individualmente. El resultado no sustituye la consulta hematológica.

### Fuentes

- [WHO guideline on use of ferritin concentrations to assess iron status in individuals and populations. Geneva: World Health Organization, 2020](https://www.who.int/publications/i/item/9789240000124)
- [Ganzoni A.M. Intravenous iron-dextran: therapeutic and experimental possibilities. Schweiz Med Wochenschr, 1970;100(7):301–303](https://pubmed.ncbi.nlm.nih.gov/5413918/)
- [Venofer. Summary of Product Characteristics: Ganzoni formula and iron stores](https://www.medicines.org.uk/emc/product/5911/smpc)

<a id="phenoage"></a>

## Calculadora de edad biológica PhenoAge (Levine)

`phenoage` · [NutriFit](https://nutrifit.health/es/calculators/phenoage)

Edad fenotípica y aceleración del envejecimiento a partir de 9 biomarcadores del hemograma y la bioquímica rutinarios (Levine 2018) con estimación del riesgo a 10 años.

### Cómo usar

1. 1. Hágase un hemograma con fórmula y una bioquímica: Se necesitan: albúmina, creatinina, glucosa en ayunas, PCR (mejor ultrasensible) y fosfatasa alcalina de la bioquímica; leucocitos, linfocitos %, VCM y RDW del hemograma.
2. 2. Introduzca los valores en unidades SI: Albúmina en g/L (no g/dL), creatinina en µmol/L, glucosa en mmol/L, PCR en mg/L. Si el informe usa otras unidades, use el conversor de unidades.
3. 3. Siga la tendencia, no un número aislado: El error puntual del modelo es de varios años, pero el cambio de PhenoAge tras 6–12 meses de intervención muestra si esta funciona. Recalcule con análisis del mismo laboratorio.

### Método y fórmula

PhenoAge (Levine et al., 2018) es una medida validada de edad biológica obtenida con datos de NHANES III (9926 personas) y comprobada en NHANES IV. De 42 marcadores clínicos, el modelo seleccionó nueve que mejor predicen la mortalidad además de la edad cronológica: albúmina, creatinina, glucosa, proteína C reactiva, porcentaje de linfocitos, volumen corpuscular medio, amplitud de distribución eritrocitaria, fosfatasa alcalina y recuento de leucocitos. Una combinación lineal de estos marcadores con la edad se transforma mediante un modelo de Gompertz en riesgo de mortalidad a 10 años, y este en la «edad» a la que ese riesgo es típico en la población. La diferencia entre PhenoAge y la edad cronológica es la aceleración del envejecimiento, ligada al riesgo cardiovascular, diabetes, cáncer y demencia.

xb = −19,907 − 0,0336·Albúmina(g/L) + 0,0095·Creatinina(µmol/L) + 0,1953·Glucosa(mmol/L) + 0,0954·ln(PCR, mg/dL) − 0,0120·Linfocitos(%) + 0,0268·VCM(fL) + 0,3306·RDW(%) + 0,00188·FA(U/L) + 0,0554·Leucocitos(10⁹/L) + 0,0804·Edad
Riesgo a 120 meses = 1 − exp(−e^xb · (e^(120·0,0076927) − 1) / 0,0076927)
PhenoAge = 141,50225 + ln(−0,00553 · ln(1 − Riesgo)) / 0,09165

### Limitaciones

El modelo se obtuvo en población estadounidense de 20+ años y estima el riesgo a nivel de grupo: el error individual es de varios años. Los procesos agudos (infección, traumatismo, deshidratación) distorsionan mucho la PCR, los leucocitos y la creatinina; use análisis realizados sin enfermedad. No está validado en embarazadas, deportistas con gran masa muscular (creatinina) ni pacientes en diálisis. PhenoAge es una herramienta de seguimiento, no un diagnóstico, y no sustituye la valoración del riesgo cardiovascular por SCORE2.

### Fuentes

- [Levine M.E. et al. An epigenetic biomarker of aging for lifespan and healthspan. Aging (Albany NY), 2018;10(4):573–591](https://pubmed.ncbi.nlm.nih.gov/29676998/)
- [Liu Z. et al. A new aging measure captures morbidity and mortality risk across diverse subpopulations from NHANES IV: a cohort study. PLoS Med, 2018;15(12):e1002718](https://pubmed.ncbi.nlm.nih.gov/30596641/)

<a id="fib-4"></a>

## Calculadora FIB-4 y APRI: índices de fibrosis hepática

`fib-4` · [NutriFit](https://nutrifit.health/es/calculators/fib-4)

Valoración no invasiva de la fibrosis hepática con FIB-4 y APRI y umbrales ajustados por edad de la EASL 2021: el primer paso del cribado en NAFLD, hepatitis y hepatopatía alcohólica.

### Cómo usar

1. 1. Tome AST, ALT y plaquetas: Las transaminasas de la bioquímica; las plaquetas, del hemograma. Los análisis deben ser del mismo periodo (1–2 semanas) y fuera de una enfermedad aguda.
2. 2. Indique la edad y el LSN de AST: El FIB-4 depende de la edad: a partir de los 65 años el umbral de riesgo bajo sube a 2,0. Para el APRI hace falta el límite superior normal de AST de su laboratorio.
3. 3. Siga el algoritmo: FIB-4 bajo: seguimiento y control de factores de riesgo. Zona gris: elastografía. Alto: hepatólogo. Es la vía oficial de la EASL/AASLD para NAFLD.

### Método y fórmula

FIB-4 (Sterling, 2006) combina cuatro parámetros rutinarios (edad, AST, ALT y plaquetas) en un índice que refleja la probabilidad de fibrosis avanzada (F3–F4). Las plaquetas bajan con la hipertensión portal y el cociente AST/ALT sube a medida que progresa la enfermedad. La EASL 2021 y la AASLD 2023 recomiendan el FIB-4 como prueba de primera línea en NAFLD/MASLD: un valor por debajo de 1,3 (2,0 a partir de los 65 años) excluye la fibrosis avanzada con un valor predictivo negativo cercano al 90 %; por encima de 2,67 exige elastografía y consulta con hepatología. APRI (Wai, 2003) es un índice más simple basado en AST y plaquetas, validado en hepatitis víricas.

FIB-4 = Edad (años) × AST (U/L) / [ Plaquetas (10⁹/L) × √ALT (U/L) ]
APRI = [ AST / LSN de AST ] × 100 / Plaquetas (10⁹/L)
Umbrales FIB-4: < 1,3 (< 2,0 con edad ≥ 65) riesgo bajo; 1,3–2,67 indeterminado; > 2,67 alto
Umbrales APRI: < 0,5 bajo; > 1,5 fibrosis significativa probable

### Limitaciones

El FIB-4 excluye la fibrosis avanzada, pero la confirma mal: hasta el 30 % de los valores caen en la «zona gris» 1,3–2,67 y requieren elastografía (FibroScan) o test ELF. El índice no está validado por debajo de los 35 años (subestima) y sobreestima el riesgo a partir de los 65 sin ajustar el umbral. La trombocitopenia de otro origen (inmune, hematológica), la hepatitis aguda, el alcohol la víspera y las lesiones musculares (AST) distorsionan el resultado. El índice no sustituye la visita al hepatólogo ni establece la causa del daño hepático.

### Fuentes

- [Sterling R.K. et al. Development of a simple noninvasive index to predict significant fibrosis in patients with HIV/HCV coinfection. Hepatology, 2006;43(6):1317–1325](https://pubmed.ncbi.nlm.nih.gov/16729309/)
- [Wai C.T. et al. A simple noninvasive index can predict both significant fibrosis and cirrhosis in patients with chronic hepatitis C. Hepatology, 2003;38(2):518–526](https://pubmed.ncbi.nlm.nih.gov/12883497/)
- [EASL Clinical Practice Guidelines on non-invasive tests for evaluation of liver disease severity and prognosis — 2021 update. J Hepatol, 2021;75(3):659–689](https://pubmed.ncbi.nlm.nih.gov/34166721/)

<a id="free-testosterone"></a>

## Calculadora de testosterona libre (Vermeulen)

`free-testosterone` · [NutriFit](https://nutrifit.health/es/calculators/free-testosterone)

Testosterona libre y biodisponible calculadas con las constantes de asociación a SHBG y albúmina (Vermeulen 1999) y umbrales de déficit para hombres.

### Cómo usar

1. 1. Mida la testosterona total y la SHBG por la mañana: La testosterona alcanza el máximo entre las 7 y las 10 de la mañana y baja un 20–30 % por la tarde. Analícese en ayunas, sin enfermedad aguda, preferiblemente por LC-MS/MS.
2. 2. Añada la albúmina: La albúmina está en la bioquímica estándar. Si no se midió, deje 43 g/L: una desviación dentro de la normalidad cambia el resultado menos de un 5 %.
3. 3. Fíjese en la fracción libre si la SHBG es atípica: Con SHBG por encima de 50 o por debajo de 20 nmol/L la testosterona total engaña. Es la fracción libre la que decide si el déficit es real.

### Método y fórmula

Solo el 1–3 % de la testosterona en sangre está libre; alrededor del 40–50 % va unida con fuerza a la globulina fijadora de hormonas sexuales (SHBG) y el resto, débilmente, a la albúmina. Son biológicamente activas la fracción libre y la unida a albúmina («testosterona biodisponible»). La medición directa de la testosterona libre (diálisis de equilibrio) es cara y poco accesible, y los inmunoanálisis son imprecisos, por lo que ISSAM, la Endocrine Society y la EAU recomiendan el cálculo de Vermeulen (1999): resuelve la ecuación de equilibrio de unión con constantes de asociación de 1×10⁹ L/mol para la SHBG y 3,6×10⁴ L/mol para la albúmina. El método es clave con SHBG alta (edad, hipertiroidismo, hepatopatía, estrógenos) o baja (obesidad, resistencia a la insulina, hipotiroidismo), cuando la testosterona total engaña.

N = Kalb × [Albúmina] + 1;  a = N × Kshbg;  b = N + Kshbg × ([SHBG] − [T])
T libre = (−b + √(b² + 4·a·[T])) / (2·a)
T biodisponible = T libre × N
Kshbg = 1×10⁹ L/mol; Kalb = 3,6×10⁴ L/mol; concentraciones en mol/L; albúmina g/L / 69 000
Conversión: T ng/dL × 0,0347 = nmol/L; T libre nmol/L × 288,4 = pg/mL

### Limitaciones

El cálculo es válido si la testosterona total se mide con un método preciso (LC-MS/MS o inmunoanálisis calibrado) por la mañana entre las 7 y las 11 en ayunas, dos veces con semanas de intervalo. Una albúmina anormal desplaza el resultado; en el embarazo y con anticonceptivos orales la SHBG cambia bruscamente. Las referencias de testosterona libre dependen del método y la edad; los umbrales corresponden a hombres; para mujeres la calculadora muestra valores sin categoría. El diagnóstico de hipogonadismo requiere síntomas y estudio presencial.

### Fuentes

- [Vermeulen A., Verdonck L., Kaufman J.M. A critical evaluation of simple methods for the estimation of free testosterone in serum. J Clin Endocrinol Metab, 1999;84(10):3666–3672](https://pubmed.ncbi.nlm.nih.gov/10523012/)
- [Bhasin S. et al. Testosterone therapy in men with hypogonadism: an Endocrine Society clinical practice guideline. J Clin Endocrinol Metab, 2018;103(5):1715–1744](https://pubmed.ncbi.nlm.nih.gov/29562364/)
- [Salonia A. et al. European Association of Urology guidelines on sexual and reproductive health — 2021 update: male sexual dysfunction. Eur Urol, 2021;80(3):333–357](https://pubmed.ncbi.nlm.nih.gov/34183196/)

<a id="anion-gap"></a>

## Calculadora de anión gap y delta ratio

`anion-gap` · [NutriFit](https://nutrifit.health/es/calculators/anion-gap)

Anión gap corregido por albúmina (Figge) y delta ratio ΔAG/ΔHCO₃ para distinguir la acidosis con anión gap elevado y normal.

### Cómo usar

1. 1. Tome los electrolitos de la misma muestra: Sodio, cloro y bicarbonato (o CO₂ total) deben proceder de la misma extracción, idealmente junto con la gasometría. Muestras distintas dan un gap sin sentido.
2. 2. Añada la albúmina: En pacientes de UCI, cirrosis, síndrome nefrótico y desnutrición la albúmina suele ser de 20–30 g/L: sin corrección, un anión gap elevado se disfraza de normal.
3. 3. Interprete el delta ratio en contexto: El delta ratio ayuda a ver un segundo trastorno (pérdida de bicarbonato o alcalosis) tras una acidosis con AG elevado, pero necesita pH, lactato y cuadro clínico.

### Método y fórmula

El anión gap es la diferencia entre los cationes y aniones séricos medidos, y refleja los aniones «no medidos»: fosfatos, sulfatos, ácidos orgánicos y la albúmina con carga negativa. En la acidosis metabólica aumenta si se acumulan ácidos (lactato, cetonas, toxinas urémicas, alcoholes tóxicos) y se mantiene normal si se pierde bicarbonato (diarrea, acidosis tubular renal) y lo sustituye el cloro. Como la albúmina es el principal anión no medido, en la hipoalbuminemia el gap se reduce falsamente: Figge (1998) propuso una corrección de 2,5 mmol/L por cada 1 g/dL de descenso de la albúmina. El delta ratio compara el aumento del gap con la caída del bicarbonato y detecta trastornos mixtos.

Anión gap (AG) = Na⁺ − (Cl⁻ + HCO₃⁻), mmol/L; referencia 8–12 sin potasio
AG corregido = AG + 0,25 × (40 − Albúmina, g/L)   [= AG + 2,5 × (4 − Albúmina, g/dL)]
Delta ratio = (AG corregido − 12) / (24 − HCO₃⁻)
< 0,4 acidosis hiperclorémica; 0,4–0,8 mixta; 0,8–2,0 acidosis pura con AG elevado; > 2,0 alcalosis metabólica concomitante

### Limitaciones

La referencia del anión gap depende del analizador: los electrodos selectivos de iones modernos dan 3–11 mmol/L; los métodos antiguos, 8–16. Consulte la referencia de su laboratorio. El cálculo excluye el potasio; si su laboratorio lo incluye, la referencia es 4–5 mayor. El delta ratio es una orientación aproximada que requiere contexto (pH, pCO₂, lactato, cetonas). La calculadora está pensada para la interpretación de trastornos ácido-base por profesionales y no sustituye la gasometría.

### Fuentes

- [Kraut J.A., Madias N.E. Serum anion gap: its uses and limitations in clinical medicine. Clin J Am Soc Nephrol, 2007;2(1):162–174](https://pubmed.ncbi.nlm.nih.gov/17699401/)
- [Figge J., Jabor A., Kazda A., Fencl V. Anion gap and hypoalbuminemia. Crit Care Med, 1998;26(11):1807–1810](https://pubmed.ncbi.nlm.nih.gov/9824071/)
- [Berend K., de Vries A.P., Gans R.O. Physiological approach to assessment of acid-base disturbances. N Engl J Med, 2014;371(15):1434–1445](https://pubmed.ncbi.nlm.nih.gov/25295502/)

<a id="corrected-calcium"></a>

## Calculadora de calcio corregido por albúmina

`corrected-calcium` · [NutriFit](https://nutrifit.health/es/calculators/corrected-calcium)

Calcio total corregido por albúmina (Payne 1973): detección de la hipo- e hipercalcemia reales en la hipoalbuminemia con conversión de unidades.

### Cómo usar

1. 1. Tome el calcio total y la albúmina de la misma muestra: Ambos parámetros están en la bioquímica estándar. Unidades: calcio en mmol/L o mg/dL, albúmina en g/L o g/dL; elija como en su informe.
2. 2. Compare el medido y el corregido: Si la categoría cambió, el calcio bajo era un «artefacto» de la hipoalbuminemia o, al contrario, un valor normal ocultaba una hipercalcemia.
3. 3. Ante la duda, calcio iónico: En ERC, reanimación, albúmina por debajo de 25 g/L y alteraciones del pH la fórmula no es fiable. El calcio iónico se mide directamente en el gasómetro.

### Método y fórmula

Alrededor del 40 % del calcio sérico va unido a la albúmina, el 10 % a fosfatos y citrato y el 50 % está ionizado, es decir, biológicamente activo. Los laboratorios miden el calcio total, así que cuando baja la albúmina (desnutrición, hepatopatía, síndrome nefrótico, estado crítico, embarazo) el calcio total cae aunque el iónico siga normal: aparece una falsa hipocalcemia. La fórmula de Payne (1973) añade 0,02 mmol/L (0,8 mg/dL) por cada 1 g/L (1 g/dL) de albúmina por debajo de 40 g/L (4 g/dL). La corrección inversa en la hiperalbuminemia (deshidratación) revela una hipercalcemia oculta.

Ca corregido (mmol/L) = Ca total + 0,02 × (40 − Albúmina, g/L)
Ca corregido (mg/dL) = Ca total + 0,8 × (4,0 − Albúmina, g/dL)
Conversión: Ca mg/dL × 0,2495 = mmol/L; albúmina g/dL × 10 = g/L
Referencia del calcio total: 2,15–2,55 mmol/L (8,6–10,2 mg/dL)

### Limitaciones

La fórmula se obtuvo en pacientes ambulatorios y funciona mal en ERC, pacientes de UCI, alteraciones del pH, hiperparatiroidismo y paraproteinemia: en estos grupos el calcio iónico difiere del corregido en el 20–40 % de los pacientes. Con albúmina por debajo de 25 g/L, en acidosis/alcalosis, tras transfusiones masivas con citrato y en diálisis debe medirse directamente el calcio iónico. Los intervalos de referencia de calcio y albúmina varían entre laboratorios.

### Fuentes

- [Payne R.B., Little A.J., Williams R.B., Milner J.R. Interpretation of serum calcium in patients with abnormal serum proteins. BMJ, 1973;4(5893):643–646](https://pubmed.ncbi.nlm.nih.gov/4758544/)
- [Ladenson J.H., Lewis J.W., Boyd J.C. Failure of total calcium corrected for protein, albumin, and pH to correctly assess free calcium status. J Clin Endocrinol Metab, 1978;46(6):986–993](https://pubmed.ncbi.nlm.nih.gov/45478/)
- [Desgagnés N. et al. Use of Albumin-Adjusted Calcium Measurements in Clinical Practice. JAMA Netw Open, 2025;8(1):e2455251](https://pubmed.ncbi.nlm.nih.gov/39836424/)

<a id="one-rep-max"></a>

## Calculadora de 1RM (repetición máxima)

`one-rep-max` · [NutriFit](https://nutrifit.health/es/calculators/one-rep-max)

Determina el peso máximo que un atleta puede levantar en una sola repetición, sin riesgo de lesiones mediante pruebas submáximas de 2 a 10 repeticiones.

### Cómo usar

1. Realice un calentamiento completo: Realice movilidad articular general, seguida de 3–4 series de aproximación aumentando progresivamente la carga hasta el peso de trabajo.
2. Haga una serie de trabajo de 3 a 6 repeticiones: Seleccione un peso con el que pueda realizar de 3 a 6 repeticiones técnicamente perfectas con no más de 1 repetición en reserva (RPE 9).
3. Introduzca los datos y aplique los porcentajes: Introduzca el peso y las repeticiones en la calculadora. Con la tabla de porcentajes, determine las cargas para sesiones de fuerza (85%), hipertrofia (75%) o recuperación (60%).

### Método y fórmula

El cálculo de una repetición máxima se basa en ecuaciones de regresión que relacionan las repeticiones hasta el fallo con la fracción del peso máximo. La fórmula de Epley funciona mejor en el rango de 2 a 6 repeticiones, mientras que Brzycki ofrece estimaciones precisas de 6 a 10 repeticiones.

Epley: 1RM = Peso × (1 + 0,0333 × Reps); Brzycki: 1RM = Peso / (1,0278 − 0,0278 × Reps); Lombardi: Peso × Reps^0,10; Wathan: (100 × Peso) / (48,8 + 53,8 × e^(-0,075 × Reps)).

### Limitaciones

No validado para series de más de 10–12 repeticiones debido a la fatiga metabólica localizada. La precisión depende de la técnica y la composición fibrilar.

### Fuentes

- [Epley B. Poundage chart. Boyd Epley Workout, Lincoln, NE, 1985](https://pubmed.ncbi.nlm.nih.gov/2706858/)
- [Brzycki M. Strength testing—predicting a one-rep max from reps-to-fatigue. JOHPERD, 1993;64(1):88–90](https://doi.org/10.1080/07303084.1993.10606684)
- [Reynolds J.M. et al. Prediction of one repetition maximum strength from multiple repetition maximum testing and anthropometry. J Strength Cond Res, 2006;20(3):584–592](https://pubmed.ncbi.nlm.nih.gov/16937972/)

<a id="heart-rate-zones"></a>

## Calculadora de zonas de frecuencia cardíaca

`heart-rate-zones` · [NutriFit](https://nutrifit.health/es/calculators/heart-rate-zones)

Calcula los límites individuales de las 5 zonas de entrenamiento considerando la frecuencia cardíaca máxima y el pulso en reposo (método de la frecuencia cardíaca de reserva).

### Cómo usar

1. Mida su pulso en reposo por la mañana: Al despertar, sin levantarse de la cama, registre el pulso durante 60 segundos con pulsómetro o palpación durante 3 días y tome el promedio.
2. Calcule las zonas mediante la fórmula de Karvonen: La calculadora restará su pulso en reposo de la FCmáx para obtener su reserva cardíaca real.
3. Distribuya el volumen con la regla 80/20: Realice aproximadamente el 80% de sus entrenamientos en la Zona 2 y dedique el 20% restante a trabajos intensos en Zonas 4 y 5.

### Método y fórmula

El método de Karvonen utiliza la frecuencia cardíaca de reserva (FCR = FCmáx − FCreposo). Al considerar el pulso matutino en reposo, las zonas se adaptan al nivel real de condición aeróbica del atleta.

FCmáx (Tanaka) = 208 − 0,7 × Edad; FCR = FCmáx − FCreposo; FC objetivo = FCreposo + (% intensidad × FCR). Fórmula de Haskell: FCmáx = 220 − Edad.

### Limitaciones

Las fórmulas teóricas de FCmáx presentan una desviación estándar de ±10–12 ppm. Para deportistas de élite se recomienda una ergoespirometría directa de laboratorio.

### Fuentes

- [Tanaka H., Monahan K.D., Seals D.R. Age-predicted maximal heart rate revisited. J Am Coll Cardiol, 2001;37(1):153–156](https://pubmed.ncbi.nlm.nih.gov/11153730/)
- [Karvonen M.J., Kentala E., Mustala O. The effects of training on heart rate; a longitudinal study. Ann Med Exp Biol Fenn, 1957;35(3):307–315](https://pubmed.ncbi.nlm.nih.gov/13470504/)
- [American College of Sports Medicine. ACSM’s Guidelines for Exercise Testing and Prescription. 11th ed. Wolters Kluwer, 2021](https://www.acsm.org/education-resources/books/guidelines-exercise-testing-prescription)

<a id="vo2max"></a>

## Calculadora de VO2máx (consumo máximo de oxígeno)

`vo2max` · [NutriFit](https://nutrifit.health/es/calculators/vo2max)

Evalúa la potencia aeróbica y la capacidad cardiorrespiratoria mediante protocolos de campo validados sin necesidad de equipamiento de laboratorio.

### Cómo usar

1. Seleccione el protocolo adecuado: Para corredores habituales se recomienda el test de Cooper de 12 minutos. Para principiantes, personas mayores o en rehabilitación, el test de Rockport es el más seguro.
2. Registre los parámetros con precisión: En Cooper, mida la distancia exacta en pista de atletismo o con GPS. En Rockport, cronometre el tiempo exacto en 1.609 metros y tome el pulso al cruzar la meta.
3. Interprete el baremo y los ritmos de carrera: La calculadora clasificará su nivel según las tablas del Cooper Institute y proyectará ritmos de entrenamiento para 5K y 10K.

### Método y fórmula

La calculadora integra tres métodos científicos de campo: el test de Cooper (carrera de 12 min), el test de Rockport (caminata rápida de 1 milla) y la relación de frecuencia cardíaca de Uth et al.

Cooper: VO2máx = (Distancia, m − 504,9) / 44,73; Rockport: 132,853 − 0,0769 × Peso(lbs) − 0,3877 × Edad + 6,315 × Sexo − 3,2649 × Tiempo − 0,1565 × FC; Uth: 15 × (FCmáx / FCrep).

### Limitaciones

Las pruebas de campo son estimaciones indirectas con un error típico del 5–10%. La dosificación del ritmo, el terreno, la climatología y la cafeína pueden alterar los resultados.

### Fuentes

- [Cooper K.H. A means of assessing maximal oxygen intake. Correlation between field and treadmill testing. JAMA, 1968;203(3):201–204](https://pubmed.ncbi.nlm.nih.gov/5694044/)
- [Kline G.M. et al. Estimation of VO2max from a one-mile track walk, gender, age, and body weight. Med Sci Sports Exerc, 1987;19(3):253–259](https://pubmed.ncbi.nlm.nih.gov/3600239/)
- [Uth N. et al. Estimation of VO2max from the ratio between HRmax and HRrest--the Heart Rate Ratio Method. Eur J Appl Physiol, 2004;91(1):111–115](https://pubmed.ncbi.nlm.nih.gov/14624296/)

<a id="ffmi"></a>

## Calculadora de FFMI (índice de masa libre de grasa)

`ffmi` · [NutriFit](https://nutrifit.health/es/calculators/ffmi)

Determina la cantidad de masa muscular magra en relación con la estatura, diferenciando la hipertrofia muscular real del acúmulo de grasa.

### Cómo usar

1. Mida la estatura y el peso con exactitud: Pésese por la mañana en ayunas tras evacuar. Mida la estatura descalzo contra una superficie vertical.
2. Determine el porcentaje de grasa: Utilice un protocolo de pliegues cutáneos (3–7 pliegues), bioimpedancia multifrecuencia o exploración DEXA.
3. Interprete el índice normalizado: El índice normalizado corrige la distorsión matemática en personas altas (>1,80 m) o bajas (<1,70 m), permitiendo una comparación ecuánime.

### Método y fórmula

El IMC tradicional no distingue entre grasa y masa muscular. El índice de masa libre de grasa (FFMI) aísla el tejido magro e incorpora un factor de normalización por estatura (Kouri et al., 1995) para comparar atletas de distinta altura.

Masa magra (LBM) = Peso × (1 − % Grasa / 100); FFMI base = LBM / Altura(m)²; FFMI normalizado = FFMI base + 6,1 × (1,80 − Altura(m)).

### Limitaciones

La precisión depende directamente del método de estimación de grasa corporal. La densitometría DEXA y el pesaje hidrostático ofrecen la máxima fiabilidad.

### Fuentes

- [Kouri E.M. et al. Fat-free mass index in users and nonusers of anabolic-androgenic steroids. Clin J Sport Med, 1995;5(4):223–228](https://pubmed.ncbi.nlm.nih.gov/7496846/)
- [Trexler E.T. et al. Physiological changes after a female bodybuilding contest preparation. J Int Soc Sports Nutr, 2017;14:34](https://pubmed.ncbi.nlm.nih.gov/28878643/)

<a id="katch-mcardle"></a>

## Calculadora de BMR y TDEE de Katch-McArdle

`katch-mcardle` · [NutriFit](https://nutrifit.health/es/calculators/katch-mcardle)

Determina el metabolismo basal (BMR) y el gasto energético total (TDEE) a partir de la masa magra libre de grasa en lugar del peso total de la báscula.

### Cómo usar

1. Determine su masa magra: Introduzca su peso actual y el porcentaje de grasa. El calculador aislará la masa metabólicamente activa.
2. Seleccione un nivel de actividad real: Sea objetivo: si trabaja sentado y entrena 3 días a la semana, seleccione 'Ligera' o 'Moderada'.
3. Compare con la fórmula de Mifflin: Analice la discrepancia: si tiene un porcentaje bajo de grasa, las fórmulas clásicas pueden subestimar su gasto en 150–300 kcal/día.

### Método y fórmula

A diferencia de Mifflin-St Jeor o Harris-Benedict, que utilizan el peso total, la ecuación de Katch-McArdle se basa en la masa corporal magra (LBM) metabólicamente activa. Ofrece la máxima precisión en personas atléticas o con porcentajes de grasa no convencionales.

LBM = Peso × (1 − % Grasa / 100); BMR (Katch) = 370 + 21,6 × LBM(kg); TDEE = BMR × Factor de Actividad; BMR (Cunningham) = 500 + 22 × LBM(kg).

### Limitaciones

Requiere conocer previamente el porcentaje de grasa corporal. Una estimación errónea de la grasa afectará directamente al cálculo de calorías.

### Fuentes

- [McArdle W.D., Katch F.I., Katch V.L. Exercise Physiology: Nutrition, Energy, and Human Performance. 8th ed. Wolters Kluwer, 2014](https://pubmed.ncbi.nlm.nih.gov/15570161/)
- [Cunningham J.J. A reanalysis of balanced nutrition and the relationship to body composition and resting metabolic rate. Am J Clin Nutr, 1991;54(6):963–969](https://pubmed.ncbi.nlm.nih.gov/1957828/)
- [Mifflin M.D. et al. A new predictive equation for resting energy expenditure in healthy individuals. Am J Clin Nutr, 1990;51(2):241–247](https://pubmed.ncbi.nlm.nih.gov/2305711/)

<a id="ideal-body-weight"></a>

## Calculadora de peso ideal (IBW y AdjBW)

`ideal-body-weight` · [NutriFit](https://nutrifit.health/es/calculators/ideal-body-weight)

Calcula el peso corporal de referencia según fórmulas clínicas estandarizadas y determina el peso ajustado (AdjBW) para nutrición clínica y dietética.

### Cómo usar

1. Compare la fórmula de Devine con el IMC saludable: La fórmula de Devine suele coincidir con un IMC de 21,5–22,5 kg/m², el punto medio del rango saludable.
2. Utilice el peso ajustado (AdjBW) si presenta sobrepeso: Si su peso real supera al ideal en más de un 20% (IMC > 30), programe sus calorías y proteínas en función del AdjBW.
3. Considere la complexión ósea: Las personas de estructura ósea ancha se sitúan de manera saludable y cómoda en la franja superior del IMC normativo (23–24,9).

### Método y fórmula

Las fórmulas médicas de peso ideal se diseñaron para estandarizar dosis farmacológicas y ajustes de soporte vital. A diferencia de las tablas estéticas, definen una referencia fisiológica ligada a la menor morbimortalidad cardiometabólica.

Devine (Hombres): 50 + 2,3 × (Altura_pulg − 60); Devine (Mujeres): 45,5 + 2,3 × (Altura_pulg − 60); AdjBW = IBW + 0,4 × (Peso_Actual − IBW); Robinson: Hombres 52 + 1,9×pulg, Mujeres 49 + 1,7×pulg.

### Limitaciones

Las fórmulas no contemplan la hipertrofia muscular deportiva ni la complexión ósea individual (biotipos brevilíneo, normolíneo o longilíneo).

### Fuentes

- [Devine B.J. Gentamicin therapy. Drug Intell Clin Pharm, 1974;8:650–655](https://pubmed.ncbi.nlm.nih.gov/4611413/)
- [Robinson J.D. et al. Determination of ideal body weight for drug dosing. Am J Hosp Pharm, 1983;40(6):1016–1019](https://pubmed.ncbi.nlm.nih.gov/6869387/)
- [Miller P.F. et al. Comparison of formulas for estimating ideal body weight. Am J Hosp Pharm, 1983;40:1622](https://pubmed.ncbi.nlm.nih.gov/6638027/)
- [Hamwi G.J. Therapy: changing concepts in diabetes mellitus. In: Danowski T.S. (ed). Diabetes Mellitus: Diagnosis and Treatment. ADA, 1964:73–78](https://pubmed.ncbi.nlm.nih.gov/14207860/)

<a id="waist-ratios"></a>

## Calculadora de índices de cintura (WHtR, WHR, VAI)

`waist-ratios` · [NutriFit](https://nutrifit.health/es/calculators/waist-ratios)

Evalúa la distribución del tejido adiposo, la grasa visceral y el riesgo cardiometabólico con mucha mayor precisión que el IMC clásico.

### Cómo usar

1. Localice la línea anatómica de la cintura: La cintura no se mide sobre el ombligo ni en la cintura del pantalón, sino en el punto medio entre el borde inferior de la última costilla y la cresta ilíaca. Respire con normalidad.
2. Mida el perímetro de cadera: Pase la cinta métrica horizontalmente por la parte más prominente de los glúteos.
3. Compruebe la relación con la estatura: Divida cintura entre altura: si el valor es menor a 0,50, su nivel de grasa visceral se sitúa en la zona protectora.

### Método y fórmula

El perímetro de la cintura refleja el volumen de grasa visceral que rodea los órganos intraabdominales. La relación cintura-estatura (WHtR) y cintura-cadera (WHR) son predictores independientes de hipertensión, diabetes y esteatosis.

WHtR = Cintura / Altura; WHR = Cintura / Cadera; VAI (Hombres) = (Cintura/(39,68+1,88×IMC)) × (TG/1,03) × (1,31/HDL); VAI (Mujeres) = (Cintura/(35,58+1,89×IMC)) × (TG/0,81) × (1,52/HDL).

### Limitaciones

No aplicable durante el embarazo, ascitis clínica, hernias abdominales voluminosas o posoperatorio abdominal inmediato.

### Fuentes

- [Ashwell M., Gunn P., Gibson S. Waist-to-height ratio is a better screening tool than waist circumference and BMI for adult cardiometabolic risk factors: systematic review and meta-analysis. Obes Rev, 2012;13(3):275–286](https://pubmed.ncbi.nlm.nih.gov/22106927/)
- [World Health Organization. Waist Circumference and Waist-Hip Ratio: Report of a WHO Expert Consultation. Geneva, 2008](https://www.who.int/publications/i/item/9789241501491)
- [Amato M.C. et al. Visceral Adiposity Index: a reliable indicator of visceral fat function associated with cardiometabolic risk. Diabetes Care, 2010;33(4):920–922](https://pubmed.ncbi.nlm.nih.gov/20067971/)

<a id="sweat-rate"></a>

## Calculadora de sudoración y rehidratación

`sweat-rate` · [NutriFit](https://nutrifit.health/es/calculators/sweat-rate)

Determina la tasa individual de pérdida de sudor y calcula las necesidades personalizadas de líquidos y electrolitos tras el ejercicio.

### Cómo usar

1. Pésese antes del entrenamiento: Evacue vejiga e intestinos y regístrese en la báscula completamente desnudo antes de empezar la sesión.
2. Mida los líquidos durante la sesión: Beba de un bidón con escala en mililitros para conocer con exactitud la cantidad ingerida.
3. Pésese seco nada más terminar: Séquese concienzudamente todo el sudor de piel y cabello antes de volver a pesarse sin ropa.

### Método y fórmula

Basado en el protocolo del Colegio Americano de Medicina del Deporte (ACSM). Comparando el peso desnudo antes y después de la sesión, junto al líquido bebido y la orina evacuada, se establece la tasa horaria de sudoración.

Pérdida de sudor (ml) = (Peso_antes − Peso_después, g) + Líquido_ingerido(ml) − Orina(ml); Tasa de sudoración (l/h) = (Pérdida / Duración_min) × 60 / 1000; % Deshidratación = ((Peso_antes − Peso_después) / Peso_antes) × 100.

### Limitaciones

No contabiliza la masa de sustrato oxidado ni el vapor expirado (~100–150 g/hora en esfuerzo intenso). Constituye la mejor estimación clínica práctica disponible.

### Fuentes

- [Sawka M.N. et al. American College of Sports Medicine position stand. Exercise and fluid replacement. Med Sci Sports Exerc, 2007;39(2):377–390](https://pubmed.ncbi.nlm.nih.gov/17277604/)
- [Thomas D.T., Erdman K.A., Burke L.M. Position of the Academy of Nutrition and Dietetics, Dietitians of Canada, and the American College of Sports Medicine: Nutrition and Athletic Performance. J Acad Nutr Diet, 2016;116(3):501–528](https://pubmed.ncbi.nlm.nih.gov/26920240/)
- [Shirreffs S.M., Sawka M.N. Fluid and electrolyte needs for training, competition, and recovery. J Sports Sci, 2011;29(Suppl 1):S39–S46](https://pubmed.ncbi.nlm.nih.gov/22150427/)

<a id="muscle-potential"></a>

## Calculadora de potencial muscular (Casey Butt y Martin Berkhan)

`muscle-potential` · [NutriFit](https://nutrifit.health/es/calculators/muscle-potential)

Estima la masa libre de grasa y los perímetros musculares máximos alcanzables (pecho, brazos, muslos) sin uso de esteroides anabólicos.

### Cómo usar

1. Mida con precisión su estructura ósea: La muñeca se mide entre la mano y la apófisis estiloides cubital. El tobillo en el punto más estrecho sobre los maléolos.
2. Indique el porcentaje de grasa corporal deseado: Para mantenerse en excelente forma todo el año apunte al 10–12%; para definición de competición, al 6–8%.
3. Compare sus medidas actuales con el máximo: La calculadora mostrará los perímetros límite de bíceps, pecho y muslos, sirviendo de guía realista para su físico.

### Método y fórmula

Las investigaciones de Casey Butt, Ph.D., analizaron durante 6 años la antropometría de campeones mundiales de culturismo de la era preesteroidea (años 40 y 50). El modelo demostró que la masa muscular natural está limitada por el grosor del esqueleto óseo: los perímetros de muñeca y tobillo.

Max LBM = Altura^1,5 × [sqrt(Muñeca)/22,6670 + sqrt(Tobillo)/17,0104] × [(% Grasa/224) + 1]; Peso de competición de Berkhan (~5% GC) = Altura (cm) − 100.

### Limitaciones

Modelo desarrollado para varones. En mujeres, debido al perfil hormonal, la masa muscular límite es aproximadamente el 65–70% de los valores masculinos. Asume años de entrenamiento progresivo y nutrición óptima.

### Fuentes

- [Butt C. Your Maximum Muscular Potential (The Casey Butt Model). The WeighTrainer, 2009](https://www.weightrainer.net/potential.html)
- [Berkhan M. The Leangains Guide and Maximum Potential for Drug-Free Athletes, 2010](https://leangains.com/maximum-muscular-potential-of-drug-free-athletes-updated-version/)
- [Kouri E.M. et al. Fat-free mass index in users and nonusers of anabolic-androgenic steroids. Clin J Sport Med, 1995;5(4):223–228](https://pubmed.ncbi.nlm.nih.gov/7496846/)

<a id="powerlifting-coefficients"></a>

## Calculadora de coeficientes de powerlifting (DOTS, Wilks, IPF GL)

`powerlifting-coefficients` · [NutriFit](https://nutrifit.health/es/calculators/powerlifting-coefficients)

Compara la fuerza relativa de atletas de diferentes categorías de peso y sexo en levantamiento de potencia (sentadilla, press de banca, peso muerto) con DOTS, Wilks e IPF GL.

### Cómo usar

1. Sume sus mejores levantamientos: Sume su peso máximo alcanzado en sentadilla, press de banca y peso muerto según la normativa de competición.
2. Indique el peso corporal exacto del pesaje: Utilice el peso verificado en la báscula durante el pesaje técnico oficial antes de subir a la tarima.
3. Evalúe sus puntos DOTS e IPF GL: Compare su resultado con la escala de rendimiento: 300 puntos es intermedio sólido, 400 nivel nacional y 500 élite internacional.

### Método y fórmula

La escala alométrica demuestra que la fuerza muscular es proporcional al área de sección transversal (altura al cuadrado), mientras que el peso corporal crece con el volumen (altura al cubo). Las fórmulas usan curvas polinómicas y exponenciales para igualar a atletas ligeros y pesados.

DOTS: Coeficiente = 500 / (A×Peso^4 + B×Peso^3 + C×Peso^2 + D×Peso + E); Puntos DOTS = Total (kg) × Coeficiente; IPF GL: 100 × Total / (A − B × e^(−C × Peso)); Wilks: polinomio de 5.º grado.

### Limitaciones

Diseñado para powerlifting de tres movimientos (trofeo completo). No aplicable a halterofilia olímpica (que usa Sinclair) ni a deportes monomovimiento no reglamentados.

### Fuentes

- [Perotti L. et al. The DOTS Formula: A new formula for evaluating strength athletes across weight classes, 2019](https://pubmed.ncbi.nlm.nih.gov/31804245/)
- [Wilks R. The Wilks Formula for Powerlifting. Australian Powerlifting Federation, 1997](https://www.powerlifting.sport/)
- [International Powerlifting Federation. IPF GL Points Formula for Classic and Equipped Powerlifting, 2020](https://www.powerlifting.sport/rules/codes/info/ipf-formula)

<a id="protein-intake"></a>

## Calculadora de ingesta diaria de proteínas (ISSN y ESPEN)

`protein-intake` · [NutriFit](https://nutrifit.health/es/calculators/protein-intake)

Determina la ingesta óptima diaria de proteínas según tus objetivos (pérdida de grasa, hipertrofia, salud en mayores de 65 años), patrón dietético y síntesis proteica muscular (MPS).

### Cómo usar

1. Conoce tu cifra objetivo: Introduce tu peso y tu objetivo. La calculadora fijará los gramos diarios y la porción recomendada por comida.
2. Distribuye 25–40 g por comida: Una toma de 30 g de proteína (queso fresco, 150 g de pechuga de pollo o pescado) activa el umbral de leucina para el anabolismo muscular.
3. Diversifica tus fuentes: Combina proteínas de origen animal (huevos, ave, pescado, lácteos) con opciones vegetales de calidad (tofu, lentejas, garbanzos, tempeh).

### Método y fórmula

Basada en los consensos clínicos de la Sociedad Internacional de Nutrición Deportiva (ISSN, 2017) y ESPEN. En personas con sobrepeso (IMC > 28), se utiliza el peso corporal ajustado (AdjBW) para prevenir la hiperfiltración renal.

Mantenimiento: 1,0–1,4 g/kg; Ganancia muscular: 1,6–2,2 g/kg; Definición / déficit: 2,0–2,4 g/kg; Resistencia: 1,2–1,6 g/kg; Mayores de 65 años: 1,2–1,5 g/kg; ERC (estadios 3–4): 0,6–0,8 g/kg. Vegetarianismo: +10%.

### Limitaciones

En caso de enfermedad renal crónica (ERC) con FG < 60 ml/min, la prescripción de proteínas debe estar estrictamente supervisada por un nefrólogo.

### Fuentes

- [Jäger R. et al. International Society of Sports Nutrition Position Stand: protein and exercise. J Int Soc Sports Nutr, 2017;14:20](https://pubmed.ncbi.nlm.nih.gov/28642676/)
- [Deutz N.E. et al. Protein intake and exercise for optimal muscle function with aging: recommendations from the ESPEN Expert Group. Clin Nutr, 2014;33(6):929–936](https://pubmed.ncbi.nlm.nih.gov/24814383/)
- [Morton R.W. et al. A systematic review, meta-analysis and meta-regression of the effect of protein supplementation on gains in muscle mass and strength in healthy adults. Br J Sports Med, 2018;52(6):376–384](https://pubmed.ncbi.nlm.nih.gov/28698222/)

<a id="fiber-intake"></a>

## Calculadora de ingesta de fibra dietética (OMS y EFSA)

`fiber-intake` · [NutriFit](https://nutrifit.health/es/calculators/fiber-intake)

Determina el requerimiento diario de fibra soluble e insoluble para nutrir la microbiota intestinal, normalizar el colesterol y regular el tránsito gastrointestinal.

### Cómo usar

1. Añade verduras en cada comida: Consume al menos 400–500 g de verduras sin almidón y hortalizas al día (regla del plato de Harvard).
2. Cambia cereales refinados por integrales: Elige trigo sarraceno, quinoa, copos de avena enteros, cebada y pan integral en lugar de arroz blanco o harinas refinadas.
3. Incorpora semillas y legumbres: Una cucharada sopera de semillas de chía o lino molido, junto con una ración de lentejas, aporta de 8 a 12 g de fibra de alta calidad.

### Método y fórmula

Basada en estándares de la OMS y la EFSA (14 g de fibra por cada 1000 kcal, mínimo 25 g para mujeres y 38 g para hombres). Calcula el agua adicional requerida (+40 ml por gramo de fibra) y adapta recomendaciones en SII.

Fibra objetivo = max(25/38 g, Calorías × 0,014); Fracción soluble ~30–35%; Insoluble ~65–70%; Agua adicional = Fibra (g) × 40 ml.

### Limitaciones

En sobrecrecimiento bacteriano (SIBO) y brotes de colitis, el exceso de fibra fermentable puede agravar el meteorismo. La dosis de fibra debe aumentarse de forma gradual.

### Fuentes

- [EFSA Panel on Dietetic Products, Nutrition, and Allergies. Scientific Opinion on Dietary Reference Values for carbohydrates and dietary fibre. EFSA Journal, 2010;8(3):1462](https://doi.org/10.2903/j.efsa.2010.1462)
- [Reynolds A. et al. Carbohydrate quality and human health: a series of systematic reviews and meta-analyses. Lancet, 2019;393(10170):434–445](https://pubmed.ncbi.nlm.nih.gov/30638909/)
- [Stephen A.M. et al. Dietary fibre in Europe: current state of knowledge on definitions, sources, recommendations, intakes and relationships to health. Nutr Res Rev, 2017;30(2):149–190](https://pubmed.ncbi.nlm.nih.gov/28676135/)

<a id="omega-3"></a>

## Calculadora de Omega-3 (dosis de EPA + DHA e índice)

`omega-3` · [NutriFit](https://nutrifit.health/es/calculators/omega-3)

Determina la dosis terapéutica y de mantenimiento de ácidos grasos EPA y DHA activos según indicaciones clínicas y biomarcadores analíticos.

### Cómo usar

1. Revisa el contenido real (EPA + DHA): Una etiqueta de '1000 mg de aceite de pescado' suele contener apenas 300 mg de EPA+DHA. Suma siempre los miligramos concretos de EPA y DHA.
2. Elige la forma lipídica correcta (rTG o TG): Los triglicéridos reesterificados (rTG) presentan una biodisponibilidad muy superior a la de los ésteres etílicos (EE) sintéticos.
3. Verifica el índice de oxidación (TOTOX): Un aceite de calidad certifica un índice TOTOX < 26 y sello IFOS (International Fish Oil Standards), sin olor a pescado rancio.

### Método y fórmula

Basada en consensos de GOED, la Asociación Americana del Corazón (AHA) y la ISSFAL. Fija como objetivo un índice eritrocitario de Omega-3 > 8% para una protección cardiovascular óptima.

Salud general: 500 mg/día; Cardioprotección: 1000 mg/día; Hipertrigliceridemia: 2000–4000 mg/día; Embarazo: 600 mg (énfasis en DHA); Estado de ánimo: 1000–2000 mg (EPA:DHA ≥ 2:1); Deporte: 1500–2000 mg.

### Limitaciones

Dosis superiores a 3000–4000 mg de EPA+DHA al día ejercen un efecto antiagregante y requieren supervisión médica en pacientes bajo tratamiento anticoagulante.

### Fuentes

- [Harris W.S., Von Schacky C. The Omega-3 Index: a new risk factor for death from coronary heart disease? Prev Med, 2004;39(1):212–220](https://pubmed.ncbi.nlm.nih.gov/15207989/)
- [Global Organization for EPA and DHA Omega-3s (GOED). Clinical Practice Recommendations for EPA and DHA Omega-3 Intake, 2022](https://goedomega3.com/intake-recommendations)
- [Guu T.W. et al. International Society for Nutritional Psychiatry Research Practice Guidelines for Omega-3 Fatty Acids in the Treatment of Major Depressive Disorder. Psychother Psychosom, 2019;88(5):263–273](https://pubmed.ncbi.nlm.nih.gov/31480072/)

<a id="sodium-potassium"></a>

## Calculadora de balance sodio-potasio (Na:K y sal)

`sodium-potassium` · [NutriFit](https://nutrifit.health/es/calculators/sodium-potassium)

Evalúa el equilibrio electrolítico entre sodio y potasio en la dieta, calcula el equivalente en sal común y estima el riesgo cardiovascular.

### Cómo usar

1. Elimina la sal oculta de procesados: Hasta el 75% del sodio dietético procede de embutidos, quesos curados, aperitivos industriales, conservas y panadería comercial.
2. Aumenta el potasio con frutas y verduras: El potasio estimula la eliminación renal de sodio (natriuresis). Incluye patatas asadas, espinacas, orejones, alubias y plátanos.
3. Usa sal mineralizada con potasio: La sal baja en sodio (donde el 30% de NaCl se reemplaza por KCl) reduce la tensión entre 3 y 5 mm Hg sin mermar el punto salino.

### Método y fórmula

Basada en las guías de la OMS sobre sodio y potasio (2012) y principios de la dieta DASH. La relación molar Na:K debe ser inferior a 1,0 (óptimo 0,5–0,7). En dietas modernas el sodio suele duplicar o triplicar al potasio.

Na_mmol = Na (mg) / 23; K_mmol = K (mg) / 39,1; Ratio Na:K = Na_mmol / K_mmol; Sal NaCl (g) = Na (mg) × 2,54 / 1000.

### Limitaciones

No apta para pacientes con insuficiencia renal avanzada (ERC estadios 4–5), donde la excreción de potasio está alterada y se exige restricción estricta.

### Fuentes

- [World Health Organization. Guideline: Sodium intake for adults and children. Geneva, 2012](https://www.who.int/publications/i/item/9789241504836)
- [World Health Organization. Guideline: Potassium intake for adults and children. Geneva, 2012](https://www.who.int/publications/i/item/9789241504829)
- [O’Donnell M. et al. Urinary sodium and potassium excretion and risk of cardiovascular events. JAMA, 2011;306(20):2229–2238](https://pubmed.ncbi.nlm.nih.gov/22110105/)

<a id="alcohol"></a>

## Calculadora de eliminación de alcohol (fórmula de Widmark)

`alcohol` · [NutriFit](https://nutrifit.health/es/calculators/alcohol)

Calcula el pico máximo y la concentración actual de etanol en sangre (en ‰), el tiempo estimado hasta la sobriedad completa y las calorías aportadas.

### Cómo usar

1. Absorción estomacal e intestinal: Aproximadamente el 20% se absorbe en el estómago y el 80% en el intestino delgado. La comida sólida retrasa el vaciamiento gástrico, amortiguando el pico en sangre.
2. Oxidación por enzimas hepáticas: El hígado degrada hasta el 95% del etanol a ritmo constante mediante la alcohol deshidrogenasa (ADH) hacia acetaldehído y, posteriormente, a acetato mediante la ALDH.
3. Aclaramiento cinético lineal: Las enzimas se saturan rápido (cinética de orden cero): la tasa de sobriedad es fija, de unos 0,15 gramos por mil alcohólico cada hora, con independencia de la cantidad ingerida.

### Método y fórmula

Basada en el modelo farmacocinético de Erik Widmark (1932) actualizado por A.W. Jones (2010). Considera la distribución hídrica corporal (r = 0,68 en hombres, 0,55 en mujeres), la oxidación por la ADH gástrica y la tasa de aclaramiento lineal (0,15 ‰/hora).

Etanol puro (g) = Volumen (ml) × (Graduación % / 100) × 0,789; BAC_pico = (Etanol × Factor_absorción) / (Peso × r); BAC_actual = max(0, BAC_pico − 0,15 × Horas); Tiempo (h) = BAC_pico / 0,15.

### Limitaciones

La tasa de eliminación varía (0,10–0,20 ‰/h) según la genética (ADH, ALDH2) y el estado hepático. Esta herramienta es informativa y carece de validez pericial o jurídica.

### Fuentes

- [Widmark E.M.P. Die theoretischen Grundlagen und die praktische Verwendbarkeit der gerichtlich-medizinischen Alkoholbestimmung. Urban & Schwarzenberg, Berlin, 1932](https://doi.org/10.1007/978-3-642-91176-8)
- [Jones A.W. Evidence-based survey of the elimination rates of ethanol from blood with applications in forensic casework and pharmacokinetics. Forensic Sci Int, 2010;200(1-3):1–20](https://pubmed.ncbi.nlm.nih.gov/20434270/)
- [World Health Organization. Global status report on alcohol and health. Geneva, 2024](https://www.who.int/publications/i/item/9789240096745)

<a id="caffeine"></a>

## Calculadora de eliminación de cafeína y hora límite

`caffeine` · [NutriFit](https://nutrifit.health/es/calculators/caffeine)

Modela la farmacocinética de la cafeína en sangre, su vida media biológica y el bloqueo residual de adenosina al acostarte para proteger el sueño profundo.

### Cómo usar

1. Pospón la primera taza 60–90 minutos tras despertar: Permite que el pico matutino de cortisol despeje la adenosina residual para evitar el bajón de energía de primera hora de la tarde.
2. Respeta tu hora límite de cafeína: Con una vida media de 5 horas, una cuarta parte de la cafeína sigue activa 10–12 horas después. Evita tomar café tras las 14:00 si te acuestas a las 23:00.
3. Vigila las fuentes ocultas: El chocolate negro, refrescos de cola, té verde y analgésicos comunes contienen dosis apreciables de cafeína.

### Método y fórmula

Basada en el aclaramiento por el citocromo hepático CYP1A2 según la EFSA (2015) y la AASM. La vida media normal es de 5 horas; el tabaco la reduce a 3 horas, los anticonceptivos la extienden a 9 horas y el embarazo hasta 12 horas.

C(t) = C0 × e^(−k × t), donde k = ln(2) / t_half; Normal t_half = 5,0 h; Fumador = 3,0 h; ACO = 9,0 h; Embarazo = 12,0 h; Límite seguro EFSA = 400 mg/día.

### Limitaciones

La velocidad de aclaramiento varía entre metabolizadores rápidos (*1A) y lentos (*1F). Las personas sensibles pueden experimentar taquicardia o ansiedad con dosis bajas.

### Fuentes

- [EFSA Panel on Dietetic Products, Nutrition and Allergies. Scientific Opinion on the safety of caffeine. EFSA Journal, 2015;13(5):4102](https://doi.org/10.2903/j.efsa.2015.4102)
- [Guest N.S. et al. International society of sports nutrition position stand: caffeine and exercise performance. J Int Soc Sports Nutr, 2021;18(1):1](https://pubmed.ncbi.nlm.nih.gov/33388079/)
- [Drake C. et al. Caffeine effects on sleep taken 0, 3, or 6 hours before going to bed. J Clin Sleep Med, 2013;9(11):1195–1200](https://pubmed.ncbi.nlm.nih.gov/24235826/)

<a id="weight-loss-forecast"></a>

## Calculadora de pronóstico dinámico de pérdida de peso (modelo de Kevin Hall)

`weight-loss-forecast` · [NutriFit](https://nutrifit.health/es/calculators/weight-loss-forecast)

Genera una trayectoria no lineal y realista de pérdida de peso basada en el modelo dinámico de Kevin Hall (NIH), considerando la ralentización metabólica y la masa magra.

### Cómo usar

1. Mantén un déficit moderado (15–20%): Un déficit de 300–500 kcal resulta sostenible, protege el tejido muscular del catabolismo y minimiza los abandonos.
2. Consume suficiente proteína: Una pauta de 1,8–2,4 g/kg de proteína en déficit asegura que el 85–90% del peso perdido provenga de grasa subcutánea y visceral.
3. Planifica descansos dietéticos (Diet Breaks): Cada 8–12 semanas de déficit, pasa 1–2 semanas comiendo en mantenimiento (TDEE). Esto recupera los niveles de leptina y hormona tiroidea T3.

### Método y fórmula

Sustituye la regla estática de Wishnofsky (1958, «7700 kcal = 1 kg») por el modelo de balance energético dinámico (Hall et al., The Lancet 2011; NIH/NIDDK). Incorpora la reducción metabólica (~22 kcal/kg perdido) y la partición de Forbes.

Adaptación metabólica = 22 kcal/kg perdido + termogénesis adaptativa; Déficit efectivo = Déficit prescrito − Adaptación; Partición de grasa p = Forbes(F, W); Peso dinámico(t) iterado semana a semana.

### Limitaciones

Asume un cumplimiento estricto del déficit prescrito. Las oscilaciones de agua por cortisol o sodio pueden ocultar temporalmente la pérdida de grasa en la báscula.

### Fuentes

- [Hall K.D. et al. Quantification of the effect of energy imbalance on bodyweight. Lancet, 2011;378(9793):826–837](https://pubmed.ncbi.nlm.nih.gov/21872751/)
- [Thomas D.M. et al. Can a weight loss of one pound a week be achieved with a 3,500-kcal deficit? Commentary on a commonly accepted rule. Int J Obes, 2013;37(12):1611–1613](https://pubmed.ncbi.nlm.nih.gov/23628852/)
- [Forbes G.B. Lean body mass-body fat interrelationships in humans. Nutr Rev, 1987;45(8):225–231](https://pubmed.ncbi.nlm.nih.gov/3306482/)

<a id="sleep-cycles"></a>

## Calculadora de ciclos de sueño

`sleep-cycles` · [NutriFit](https://nutrifit.health/es/calculators/sleep-cycles)

Herramienta de cálculo del sueño basada en ciclos ultradianos de 90 minutos (fases de sueño lento y REM) y el tiempo medio de conciliación.

### Cómo usar

1. Elige el sentido del cálculo: Decide qué necesitas: saber a qué hora acostarte para despertar a una hora fija, o a qué hora poner la alarma si te acuestas ahora mismo.
2. Ajusta tu latencia de conciliación: El valor predeterminado es de 14 minutos. Si sueles tardar más en conciliar el sueño o te duermes al instante, ajusta este valor.
3. Elige una cadena de 5 o 6 ciclos: 5 ciclos (7 h 30 min) son ideales para los días laborables; 6 ciclos (9 h) son mejores para entrenamientos intensos o para recuperarte de la falta de sueño.

### Método y fórmula

El cálculo se basa en un modelo de ciclos ultradianos de 90 minutos que combinan las fases NREM (sueño no REM) y REM (movimiento ocular rápido). Despertar en el límite de un ciclo evita la inercia del sueño.

Hora de despertar = Hora de acostarse + Conciliación (14 min) + N × 90 min. Hora de acostarse = Hora de despertar − (N × 90 min) − Conciliación (14 min).

### Limitaciones

La calculadora utiliza una duración media de ciclo de 90 minutos. El ciclo individual puede variar entre 70 y 120 minutos. Los trastornos crónicos del sueño requieren polisomnografía para un diagnóstico adecuado.

### Fuentes

- [Carskadon M.A., Dement W.C. Normal Human Sleep: An Overview. Principles and Practice of Sleep Medicine, 2011;5:16–26](https://doi.org/10.1016/B978-1-4160-6645-3.00002-5)
- [Hirshkowitz M. et al. National Sleep Foundation’s sleep time duration recommendations: methodology and results summary. Sleep Health, 2015;1(1):40–43](https://pubmed.ncbi.nlm.nih.gov/29073412/)
- [Dijk D.J., Czeisler C.A. Contribution of the circadian pacemaker and the homeostatic process to the timing of human sleep. Sleep, 1995;18(5):285–304](https://pubmed.ncbi.nlm.nih.gov/7676163/)

<a id="findrisc"></a>

## Escala de riesgo de diabetes FINDRISC

`findrisc` · [NutriFit](https://nutrifit.health/es/calculators/findrisc)

Cuestionario reconocido internacionalmente por la OMS y la IDF para la detección precoz de diabetes oculta y la evaluación del riesgo de aparición de diabetes tipo 2 en 10 años.

### Cómo usar

1. Indica tu edad y datos antropométricos: Selecciona tu grupo de edad, categoría de IMC y circunferencia de cintura, medida con cinta métrica a mitad de camino entre la última costilla y la cresta ilíaca.
2. Evalúa tu estilo de vida y alimentación: Indica si realizas al menos 30 minutos de actividad física al día y si consumes verduras, frutas o bayas a diario.
3. Indica tus antecedentes médicos: Indica si tomas medicación para la presión, si has tenido azúcar elevada en el pasado y si hay diabetes en familiares de sangre.

### Método y fórmula

Suma 8 factores de riesgo probados: edad, IMC, circunferencia de cintura, actividad física, verduras en la dieta, tratamiento antihipertensivo, glucemia elevada previa y antecedentes familiares.

Puntuación FINDRISC = Edad (0–4) + IMC (0–3) + Cintura (0–4) + Actividad física (0/2) + Verduras (0/1) + Medicación para la presión (0/2) + Glucosa elevada previa (0/5) + Antecedentes familiares (0/3/5). Total: 0–26 puntos.

### Limitaciones

Esta escala es una herramienta predictiva de cribado y no reemplaza el diagnóstico de laboratorio (glucosa plasmática en ayunas, HbA1c, prueba de tolerancia oral a la glucosa).

### Fuentes

- [Lindström J., Tuomilehto J. The diabetes risk score: a practical tool to predict type 2 diabetes risk. Diabetes Care, 2003;26(3):725–731](https://pubmed.ncbi.nlm.nih.gov/12610029/)
- [International Diabetes Federation (IDF). Clinical Practice Recommendations for managing Type 2 Diabetes in Primary Care, 2017](https://www.idf.org/our-activities/care-prevention/clinical-practice-recommendations/)
- [Saaristo T. et al. FINDRISC as an early intervention tool in primary health care. Diabetes Care, 2005;28(12):2900–2907](https://pubmed.ncbi.nlm.nih.gov/16316578/)

<a id="debq"></a>

## Cuestionario Holandés de Conducta Alimentaria (DEBQ)

`debq` · [NutriFit](https://nutrifit.health/es/calculators/debq)

Instrumento psicológico clásico validado para evaluar los tres estilos predominantes de conducta alimentaria: restrictivo, emocional y externo.

### Cómo usar

1. Responda con sinceridad: Seleccione la opción que mejor describa su comportamiento habitual durante los últimos meses.
2. No medite en exceso: La primera reacción espontánea suele ser la más representativa de sus hábitos reales.
3. Analice los resultados de las tres subescalas: Compare sus puntuaciones con los umbrales normativos y consulte las recomendaciones prácticas.

### Método y fórmula

El cuestionario consta de 33 ítems evaluados en una escala Likert del 1 al 5. Analiza tres subescalas: restricción cognitiva (10 ítems), ingesta emocional (13 ítems) y estimulación externa (10 ítems).

Puntuación de subescala = Media aritmética de las respuestas (de 1,0 a 5,0). Restricción: normal ~2,4; Emocional: normal ~1,8; Externa: normal ~2,7.

### Limitaciones

Este test es una herramienta de autoevaluación psicológica y no constituye un diagnóstico clínico. En caso de malestar significativo, consulte a un profesional especializado en TCA.

### Fuentes

- [Van Strien T. et al. The Dutch Eating Behavior Questionnaire (DEBQ) for assessment of restrained, emotional, and external eating behavior. Int J Eat Disord, 1986;5(2):295–315](https://doi.org/10.1002/1098-108X(198602)5:2<295::AID-EAT2260050209>3.0.CO;2-T)
- [Wardle J. Eating style: a validation study of the Dutch Eating Behaviour Questionnaire. J Psychosom Res, 1987;31(2):161–169](https://pubmed.ncbi.nlm.nih.gov/3585818/)

<a id="phq-9"></a>

## Cuestionario de Salud del Paciente PHQ-9 (Depresión)

`phq-9` · [NutriFit](https://nutrifit.health/es/calculators/phq-9)

El estándar de oro internacional para el cribado primario de la depresión y la estimación de gravedad según criterios clínicos del DSM-5.

### Cómo usar

1. Considere las últimas dos semanas: Evalúe su bienestar general a lo largo de los últimos 14 días atendiendo a la recurrencia de los síntomas.
2. Responda a las 9 preguntas: Seleccione con qué frecuencia ha experimentado cada síntoma, desde 'Para nada' (0) hasta 'Casi todos los días' (3).
3. Examine la interpretación clínica: Revise el nivel de gravedad obtenido, las recomendaciones de autocuidado y las opciones terapéuticas pertinentes.

### Método y fórmula

9 preguntas que valoran la frecuencia de síntomas depresivos durante las últimas 2 semanas en escala de 0 ('Para nada') a 3 ('Casi todos los días').

Puntuación total PHQ-9 = Suma de los 9 ítems (0–27). 0–4: Mínima; 5–9: Leve; 10–14: Moderada; 15–19: Moderadamente grave; 20–27: Grave.

### Limitaciones

Este test no sustituye el diagnóstico realizado por un psiquiatra o psicoterapeuta. Toda respuesta afirmativa a la pregunta 9 exige atención médica profesional inmediata.

### Fuentes

- [Kroenke K. et al. The PHQ-9: validity of a brief depression severity measure. J Gen Intern Med, 2001;16(9):606–613](https://pubmed.ncbi.nlm.nih.gov/11556941/)
- [Spitzer R.L. et al. Validation and utility of a self-report version of PRIME-MD: the PHQ primary care study. JAMA, 1999;282(18):1737–1744](https://pubmed.ncbi.nlm.nih.gov/10568646/)

<a id="gad-7"></a>

## Escala del Trastorno de Ansiedad Generalizada GAD-7

`gad-7` · [NutriFit](https://nutrifit.health/es/calculators/gad-7)

Cuestionario clínico internacional diseñado para evaluar de forma ágil y precisa la intensidad de la ansiedad generalizada y la tensión somática.

### Cómo usar

1. Valore los síntomas de los últimos 14 días: Haga memoria sobre la frecuencia con la que ha sentido desasosiego, temor o tensión muscular durante las últimas dos semanas.
2. Seleccione sus respuestas: Indique la frecuencia de cada síntoma desde 'Para nada' (0) hasta 'Casi todos los días' (3).
3. Obtenga su resultado y pautas: Conozca su nivel de ansiedad y explore estrategias efectivas para recuperar el equilibrio autonómico.

### Método y fórmula

7 preguntas valoradas de 0 a 3 puntos que examinan los síntomas de ansiedad experimentados en las últimas 2 semanas.

Puntuación total GAD-7 = Suma de los 7 ítems (0–21). 0–4: mínima; 5–9: leve; 10–14: moderada; 15–21: grave.

### Limitaciones

Este cribado no constituye un diagnóstico médico formal. Si sufre crisis de pánico o malestar invalidante, consulte a un profesional de salud mental.

### Fuentes

- [Spitzer R.L. et al. A brief measure for assessing generalized anxiety disorder: the GAD-7. Arch Intern Med, 2006;166(10):1092–1097](https://pubmed.ncbi.nlm.nih.gov/16717171/)
- [Löwe B. et al. Validation and standardization of the Generalized Anxiety Disorder Screener (GAD-7). Med Care, 2008;46(3):266–274](https://pubmed.ncbi.nlm.nih.gov/18388841/)

<a id="pss-10"></a>

## Escala de Estrés Percibido (PSS-10)

`pss-10` · [NutriFit](https://nutrifit.health/es/calculators/pss-10)

La clásica escala de Sheldon Cohen diseñada para medir en qué grado las situaciones vitales son percibidas como impredecibles, incontrolables y desbordantes.

### Cómo usar

1. Enfóquese en el último mes: Valore sus pensamientos, emociones y vivencias cotidianas a lo largo de los últimos 30 días de manera global.
2. Seleccione la frecuencia de respuesta: Indique para cada afirmación una opción entre 0 ('Nunca') y 4 ('Muy a menudo') con espontaneidad.
3. Analice su perfil de estrés: Examine su nivel global de tensión percibida y aplique pautas adaptadas para fortalecer su equilibrio.

### Método y fórmula

10 preguntas valoradas en una escala del 0 al 4. Los ítems 4, 5, 7 y 8 se puntúan de forma invertida para medir la resiliencia personal y la autoeficacia percibida.

Puntuación total PSS-10 = Ítems directos (1, 2, 3, 6, 9, 10) + Ítems invertidos (4, 5, 7, 8). 0–13: Estrés bajo; 14–26: Estrés moderado; 27–40: Estrés alto.

### Limitaciones

Este test refleja la valoración subjetiva de sobrecarga y no un diagnóstico médico de patología física. Ante agotamiento persistente, consulte a un especialista.

### Fuentes

- [Cohen S. et al. A global measure of perceived stress. J Health Soc Behav, 1983;24(4):385–396](https://pubmed.ncbi.nlm.nih.gov/6668417/)
- [Cohen S., Williamson G.M. Perceived stress in a probability sample of the United States. The Social Psychology of Health, 1988:31–67](https://psycnet.apa.org/record/1988-98838-002)

<a id="isi"></a>

## Índice de Gravedad del Insomnio (ISI)

`isi` · [NutriFit](https://nutrifit.health/es/calculators/isi)

Herramienta clínica de 7 preguntas diseñada para evaluar de forma fiable la intensidad, naturaleza y repercusión diurna del insomnio.

### Cómo usar

1. Considere las últimas 2 semanas: Valore la calidad de su descanso nocturno y su grado de energía diurna a lo largo de los últimos 14 días.
2. Responda a las 7 preguntas: Puntúe cada dificultad desde 0 ('Ninguna') hasta 4 ('Muy grave') según su vivencia real.
3. Analice su resultado y recomendaciones: Identifique su categoría clínica y aplique las medidas oportunas de higiene circadiana.

### Método y fórmula

7 ítems valorados de 0 a 4 puntos. La puntuación global oscila de 0 a 28, analizando conciliación, mantenimiento, despertar precoz y malestar.

Puntuación total ISI = Suma de los 7 ítems (0–28). 0–7: Sin insomnio clínico; 8–14: Insomnio subclínico (leve); 15–21: Insomnio clínico moderado; 22–28: Insomnio clínico grave.

### Limitaciones

Este test tiene finalidad de cribado. Ante sospecha de apnea del sueño o síndrome de piernas inquietas, se requiere polisomnografía médica.

### Fuentes

- [Morin C.M. et al. The Insomnia Severity Index: psychometric indicators to detect insomnia cases. Sleep, 2011;34(5):601–608](https://pubmed.ncbi.nlm.nih.gov/21532953/)
- [Bastien C.H. et al. Validation of the Insomnia Severity Index as an outcome measure. Sleep Med, 2001;2(4):297–307](https://pubmed.ncbi.nlm.nih.gov/11438246/)

<a id="scoff"></a>

## Cuestionario de Cribado de TCA SCOFF

`scoff` · [NutriFit](https://nutrifit.health/es/calculators/scoff)

Herramienta clínica de 5 preguntas breves reconocida internacionalmente para detectar el riesgo de padecer anorexia o bulimia nerviosa.

### Cómo usar

1. Lea atentamente las 5 preguntas: Analice su conducta alimentaria habitual y su relación con su imagen corporal durante los últimos meses.
2. Responda Sí o No con franqueza: Conteste de manera honesta sin justificar ni restar importancia a sus sensaciones.
3. Examine el resultado del cribado: Compruebe si existe sospecha de riesgo clínico y revise las recomendaciones de orientación.

### Método y fórmula

Consta de 5 preguntas cerradas (Sí/No) que exploran vómito autoinducido, pérdida de control, adelgazamiento brusco, distorsión corporal y obsesión con la comida.

Puntuación total SCOFF = Número de respuestas afirmativas (0–5). Un resultado ≥ 2 indica cribado positivo y alto riesgo de TCA.

### Limitaciones

El test SCOFF es exclusivamente un cribado inicial. No formula un diagnóstico médico y precisa evaluación clínica especializada.

### Fuentes

- [Morgan J.F. et al. The SCOFF questionnaire: assessment of a new screening tool for eating disorders. BMJ, 1999;319(7223):1467–1468](https://pubmed.ncbi.nlm.nih.gov/10582927/)
- [Luck A.J. et al. The SCOFF questionnaire and clinical interview for detecting eating disorders. BMJ, 2002;325(7367):755–756](https://pubmed.ncbi.nlm.nih.gov/12364305/)

<a id="ies-2"></a>

## Escala de Alimentación Intuitiva IES-2

`ies-2` · [NutriFit](https://nutrifit.health/es/calculators/ies-2)

Herramienta psicométrica de 23 preguntas validada científicamente por Tracy Tylka para evaluar una relación saludable y autorregulada con la comida.

### Cómo usar

1. Valore su relación habitual con la comida: Responda en base a sus actitudes, sensaciones y conductas cotidianas durante los últimos meses.
2. Indique su grado de acuerdo del 1 al 5: 1 representa 'Totalmente en desacuerdo' y 5 'Totalmente de acuerdo'.
3. Examine el perfil en las 4 dimensiones: Preste especial atención a las subescalas con puntuación inferior a 3,0 para enfocar su trabajo personal.

### Método y fórmula

23 afirmaciones valoradas en escala Likert de 1 a 5 distribuidas en 4 subescalas: Permiso incondicional para comer (UPE), Comer por razones físicas (EPR), Confianza en señales de hambre/saciedad (RHSC) y Congruencia corporal (B-FCC).

Puntuación total IES-2 = Media aritmética de los 23 ítems considerando los ítems invertidos (1,0 a 5,0). Puntuaciones > 3,5 indican competencia intuitiva.

### Limitaciones

La escala evalúa patrones psicológicos de conducta alimentaria. En caso de TCA activo, el proceso debe ser guiado por profesionales clínicos especializados.

### Fuentes

- [Tylka T.L., Kroon Van Diest A.M. The Intuitive Eating Scale-2: item refinement and psychometric evaluation. J Couns Psychol, 2013;60(1):137–153](https://pubmed.ncbi.nlm.nih.gov/23356469/)
- [Tribole E., Resch E. Intuitive Eating: A Revolutionary Anti-Diet Approach. St. Martin’s Essentials, 2020](https://www.intuitiveeating.org/)

<a id="yfas"></a>

## Escala de Adicción a la Comida de Yale mYFAS 2.0

`yfas` · [NutriFit](https://nutrifit.health/es/calculators/yfas)

Cuestionario científico adaptado de la Universidad de Yale para diagnosticar patrones adictivos hacia alimentos hiperpalatables y ultraprocesados.

### Cómo usar

1. Identifique sus alimentos conflictivos: Piense en aquellos alimentos con los que le resulta más difícil parar de comer (dulces, aperitivos salados, fritos o bollería).
2. Responda a las 13 preguntas: Marque 'Sí' si ha experimentado esa conducta de forma habitual a lo largo de los últimos 12 meses.
3. Consulte el recuento de síntomas y el resultado: Conozca cuántos criterios diagnósticos cumple y el grado de repercusión clínica en su bienestar.

### Método y fórmula

13 ítems basados en los 11 criterios diagnósticos del DSM-5 para trastornos por consumo de sustancias adaptados a la alimentación, más 2 ítems de malestar clínico significativo.

El diagnóstico de adicción a la comida precisa malestar clínico o deterioro funcional (ítems 12 o 13) y al menos 2 síntomas. 2–3: leve; 4–5: moderada; ≥ 6: adicción grave.

### Limitaciones

El concepto de 'adicción a la comida' continúa siendo objeto de debate científico. La escala evalúa conductas compulsivas hacia alimentos con alta densidad de azúcar, grasa y sal.

### Fuentes

- [Schulte E.M., Gearhardt A.N. Development of the Modified Yale Food Addiction Scale Version 2.0. Eur Eat Disord Rev, 2017;25(4):302–308](https://pubmed.ncbi.nlm.nih.gov/28543787/)
- [Gearhardt A.N. et al. Preliminary validation of the Yale Food Addiction Scale. Appetite, 2009;52(2):430–436](https://pubmed.ncbi.nlm.nih.gov/19028533/)

<a id="eating-behavior-wizard"></a>

## Asistente de Diagnóstico de la Conducta Alimentaria

`eating-behavior-wizard` · [NutriFit](https://nutrifit.health/es/calculators/eating-behavior-wizard)

Asistente diagnóstico integrador de NutriFit que sintetiza las principales escalas validadas para identificar su arquetipo de alimentación y estrategia personalizada.

### Cómo usar

1. Realice el cribado de riesgos clínicos: Indique la presencia de señales vinculadas a la obsesión por el peso y el control estricto de la comida.
2. Ajuste las dimensiones de conducta alimentaria: Señale la intensidad de sus restricciones dietéticas, ingesta emocional y respuesta a estímulos externos.
3. Obtenga su arquetipo y plan de acción: Lea la descripción de su patrón dominante y descargue su informe detallado en formato PDF.

### Método y fórmula

Algoritmo multifactorial de NutriFit que relaciona marcadores de restricción dietética, ingesta emocional, reactividad externa y riesgo de TCA en un perfil único.

Matriz de clasificación psicométrica basada en la correlación cruzada de las escalas DEBQ, SCOFF, IES-2 y mYFAS 2.0.

### Limitaciones

Herramienta orientada al autoconocimiento y apoyo nutricional. No sustituye la entrevista clínica ni el diagnóstico médico formal.

### Fuentes

- [Fairburn C.G. Cognitive Behavior Therapy and Eating Disorders. Guilford Press, 2008](https://www.guilford.com/books/Cognitive-Behavior-Therapy-and-Eating-Disorders/Christopher-Fairburn/9781593857097)
- [American Psychiatric Association. Diagnostic and Statistical Manual of Mental Disorders (DSM-5-TR), 2022](https://doi.org/10.1176/appi.books.9780890425787)
- [NICE (National Institute for Health and Care Excellence). Eating disorders: recognition and treatment (NG69), 2020](https://www.nice.org.uk/guidance/ng69)
