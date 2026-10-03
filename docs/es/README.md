# NutriFit Widgets — Calculadoras de nutrición y fitness para tu sitio

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/README.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/README.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/README.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/README.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/README.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/README.md)

[![npm](https://img.shields.io/npm/v/@nutrifit/widgets)](https://www.npmjs.com/package/@nutrifit/widgets) [![GitHub Release](https://img.shields.io/github/v/release/nutrifit-health/nutrifit-widgets)](https://github.com/nutrifit-health/nutrifit-widgets/releases) [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/LICENSE)

Integra 49 calculadoras de nutrición, fitness, valores de laboratorio y estilo de vida con componentes React, JavaScript o un iframe. Empieza con TDEE y calorías, macronutrientes, agua diaria, composición corporal o nutrición de platos.

**[Probar los widgets](https://nutrifit.health/embed/calculators/tdee?lang=es&theme=auto)** · [Macronutrientes](https://nutrifit.health/embed/calculators/macros?lang=es&theme=auto) · [Agua diaria](https://nutrifit.health/embed/calculators/water?lang=es&theme=auto) · [Las 49 calculadoras](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/CALCULATORS.md) · [Diseño](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/APPEARANCE.md)

![Resumen de calculadoras, opciones de integración y funciones](https://raw.githubusercontent.com/nutrifit-health/nutrifit-widgets/main/docs/assets/widget-overview-es.svg)

- Seis idiomas; temas claro, oscuro y del sistema.
- Personaliza el fondo, los colores y las esquinas para tu sitio.
- Los visitantes calculan en tu página sin una cuenta de NutriFit y pueden descargar informes PDF con la marca.

Los widgets gratuitos mantienen la marca NutriFit. Las calculadoras están alojadas en NutriFit y necesitan conexión a la red.

## Instalación

Instala el paquete. Los adaptadores admiten React 18.2 y 19; el módulo JavaScript independiente no necesita React.

```sh
npm install @nutrifit/widgets
```

## Integración con React

Usa `CalculatorFrame` con cualquier ID del catálogo. `NutritionCalculatorFrame` integra la calculadora del plato. `WidgetFrame widget="tdee"` es la alternativa genérica. Los cálculos permanecen dentro del iframe; este componente no copia fórmulas en tu aplicación.

```tsx
import { CalculatorFrame, NutritionCalculatorFrame } from '@nutrifit/widgets';

export function Calculators() {
  return <>
    <CalculatorFrame calculator="tdee" locale="es" theme="auto" title="NutriFit TDEE" />
    <NutritionCalculatorFrame locale="es" theme="light" />
  </>;
}
```

## JavaScript sin framework

Publica el cargador junto con sus módulos `core/*.js`. Cada contenedor puede tener su calculadora, idioma y tema. El cargador ajusta la altura automáticamente. Para gestionar el ciclo de vida, importa `mountWidget` de `@nutrifit/widgets/core` y llama a `handle.destroy()` al retirarlo.

```html
<div data-nutrifit-widget="tdee" data-locale="es" data-theme="auto" data-title="NutriFit TDEE"></div>
<div data-nutrifit-widget="nutrition" data-locale="es"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

```js
import { mountWidget } from '@nutrifit/widgets/core';
const handle = mountWidget(document.getElementById('calculator'), {
  widget: 'water', locale: 'es', theme: 'light',
});
// handle.destroy()
```

## Iframe directo

El iframe directo tiene altura fija y desplazamiento interno. Usa React o JavaScript para ajustar la altura automáticamente. Sustituye `tdee` por un ID del catálogo. La calculadora de platos usa `/embed/nutrition-calculator`.

```html
<iframe
  src="https://nutrifit.health/embed/calculators/tdee?lang=es&theme=light"
  title="NutriFit TDEE" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

## Idiomas y apariencia

Usa `locale` en React o el módulo, `data-locale` en HTML o `lang` en la URL del iframe. Códigos: **en, ru, es, uk, kk, uz**. Temas: `light`, `dark`, `auto`; auto sigue la preferencia del navegador. Añade un título descriptivo en el idioma de la página mediante `title` o `data-title`.

## Cómo utilizar las calculadoras

Elige ID, idioma y tema e introduce los valores en las unidades indicadas. Las calculadoras de fórmulas actualizan el resultado al editar; los cuestionarios requieren respuestas antes de mostrarlo. Método, límites y fuentes están dentro del widget. El resultado completo está disponible en tu sitio sin cuenta NutriFit. El enlace opcional abre la página completa en otra pestaña; no transfiere los datos de calculadoras del catálogo.

Para `nutrition`: busca alimentos o recetas públicas, añade sus pesos en gramos e indica el peso del plato terminado. Calcula para ver totales y valores por 100 g; hay exportación PDF y CSV. Los nutrientes desconocidos se marcan como incompletos y nunca se convierten silenciosamente en cero. Máximo: 50 ingredientes.

Los widgets gratuitos pueden solicitar el PDF de marca generado por el servidor existente. Es una instantánea de entradas/resultados mostrados, no un recálculo independiente ni una validación diagnóstica. Necesita el servidor disponible. Completa el cuestionario antes de exportar.

[Instrucciones, métodos, fórmulas y límites de cada calculadora](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/CALCULATORS.md).

## Catálogo completo

| ID del widget | Calculadora | Objetivo |
|---|---|---|
| `nutrition` | [Calculadora nutricional de platos](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/nutrition.md) | Para `nutrition`: busca alimentos o recetas públicas, añade sus pesos en gramos e indica el peso del plato terminado. Calcula para ver totales y valores por 100 g; hay exportación PDF y CSV. Los nutrientes desconocidos se marcan como incompletos y nunca se convierten silenciosamente en cero. Máximo: 50 ingredientes. |
| `tdee` | [Estimación del gasto energético diario TDEE](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/tdee.md) | Mifflin–St Jeor estima el gasto en reposo. TDEE = estimación × factor de actividad elegido. −20% y +15% son escenarios de déficit y superávit elegidos por el autor. |
| `macros` | [Planificador de macronutrientes del autor](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/macros.md) | Proteína: 1,8–2,2 g/kg para perder, 1,4–1,8 para mantener, 1,8–2,4 para ganar; grasa 0,8–1,2 g/kg. Usa puntos medios; carbohidratos del resto calórico con factores 4/9/4 kcal/g. |
| `water` | [Estimación heurística del agua diaria](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/water.md) | Modelo elegido: 30 mL/kg + 500 mL por hora de actividad + 500 mL con calor. Se supone 75% de bebidas; vaso = 250 mL. No disminuye por edad. |
| `body-composition` | [Composición corporal por perímetros e IMC](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/body-composition.md) | Modelo histórico Hodgdon–Beckett (1984) con altura y perímetros. Hombres: abdomen a nivel del ombligo y cuello; mujeres: cintura natural más estrecha, cadera más ancha y cuello. IMC = peso / altura². |
| `glycemic-load` | [Carga glucémica de una porción](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/glycemic-load.md) | CG = IG × carbohidratos disponibles de la porción / 100. Introduzca IG del producto y preparación específicos en escala glucosa = 100, carbohidratos disponibles por 100 g y peso de porción. Los valores iniciales son un ejemplo. |
| `deficiency-risk` | [Lista de alimentación y estilo de vida](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/deficiency-risk.md) | Lista informativa propia: marque sus circunstancias actuales de alimentación y estilo de vida para ver temas relacionados con nutrientes. |
| `health-balance-wheel` | [Rueda de autoevaluación del autor](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/health-balance-wheel.md) | Valore satisfacción con ocho áreas durante los últimos 14 días de 1 a 10. Total = media × 10; uniformidad = max(0, 100 − 18 × desviación estándar), redondeada. |
| `homa-ir` | [Calculadora HOMA-IR: índice de resistencia a la insulina](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/homa-ir.md) | HOMA-IR, HOMA-β y QUICKI a partir de glucosa e insulina en ayunas: resistencia a la insulina y función de células β con rangos de referencia e interpretación. |
| `tyg-index` | [Calculadora del índice TyG (triglicéridos × glucosa)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/tyg-index.md) | Índice de investigación basado en triglicéridos y glucosa en ayunas, con las variantes TyG-BMI y TyG-WC. |
| `lipid-profile` | [Perfil lipídico: indicadores calculados](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/lipid-profile.md) | Calcula LDL por Friedewald y Sampson, colesterol no HDL, colesterol remanente y relaciones lipídicas. |
| `egfr` | [Calculadora de TFG (eGFR) por CKD-EPI 2021](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/egfr.md) | TFG estimada por CKD-EPI 2021 (creatinina, opcionalmente cistatina C), aclaramiento de creatinina por Cockcroft-Gault y estadio de ERC según KDIGO, con conversión µmol/L y mg/dL. |
| `hba1c-eag` | [Conversión de HbA1c y glucosa media](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/hba1c-eag.md) | Estimación de glucosa media durante unos 2–3 meses a partir de HbA1c de laboratorio, o estimación inversa aproximada. |
| `lab-unit-converter` | [Conversor de unidades de análisis de laboratorio](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/lab-unit-converter.md) | Conversión de 33 parámetros de laboratorio entre SI (mmol/L, µmol/L, nmol/L, pmol/L) y unidades convencionales (mg/dL, ng/mL, pg/mL) según la masa molar. |
| `vitamin-d-dose` | [Vitamina D: estimación del modelo van Groningen](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/vitamin-d-dose.md) | 25(OH)D en dos unidades y una estimación de investigación basada en el peso. No se prescribe una pauta automática. |
| `iron-deficiency` | [Calculadora de déficit de hierro: TSAT, ferritina y déficit de Ganzoni](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/iron-deficiency.md) | TSAT = hierro / capacidad total de fijación × 100%. Modelo de Ganzoni: peso × (15 − Hb en g/dL) × 2,4 + 500 mg para peso ≥ 35 kg. Solo aparece si Hb y ferritina están por debajo de los umbrales seleccionados. |
| `phenoage` | [Calculadora de edad biológica PhenoAge (Levine)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/phenoage.md) | El modelo Levine 2018 combina nueve biomarcadores y la edad cronológica. PhenoAge es una edad equivalente del riesgo poblacional en el modelo NHANES, no la edad de los órganos ni la esperanza de vida individual. La diferencia respecto a la edad es una resta, no una velocidad de envejecimiento ni el residuo estadístico PhenoAgeAccel. |
| `fib-4` | [Calculadora FIB-4 y APRI: índices de fibrosis hepática](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/fib-4.md) | FIB-4 (Sterling 2006) usa edad, AST, ALT y plaquetas. Los umbrales AASLD 2023 evalúan la probabilidad de fibrosis avanzada en la enfermedad hepática grasa metabólica, no su estadio. Edades 35–65: umbral inferior 1,3; mayores de 65: 2,0; umbral superior 2,67. No se asigna categoría por debajo de 35 años; no se interpreta durante una enfermedad aguda. APRI (Wai 2003) y los umbrales 0,5/1,5 se refieren a fibrosis significativa en hepatitis C crónica y no se trasladan automáticamente a otras enfermedades. |
| `free-testosterone` | [Testosterona libre calculada por Vermeulen](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/free-testosterone.md) | Calcula las fracciones libre y no unida a SHBG a partir de testosterona total, SHBG y albúmina. |
| `anion-gap` | [Calculadora de anión gap y delta ratio](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/anion-gap.md) | Brecha aniónica = Na − Cl − HCO₃; ajuste por albúmina = 0,25 × (40 − albúmina en g/L). Relación delta = (brecha corregida − referencia seleccionada) / (bicarbonato de referencia − HCO₃). |
| `corrected-calcium` | [Calculadora de calcio corregido por albúmina](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/corrected-calcium.md) | Calcio corregido = calcio total + 0,02 × (40 − albúmina), con calcio en mmol/L y albúmina en g/L. Es la ecuación simplificada de Payne. |
| `one-rep-max` | [Estimación del máximo de una repetición (1RM)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/one-rep-max.md) | El resultado principal es la media de Epley y Brzycki elegida por el autor. Se muestran las ecuaciones individuales y porcentajes aritméticos de esa media. |
| `heart-rate-zones` | [Zonas según reserva de frecuencia cardiaca](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/heart-rate-zones.md) | FC objetivo = FC en reposo + fracción × (FC máxima − FC en reposo). Se eligen cinco bandas: 50–60, 60–70, 70–80, 80–90 y 90–100% de reserva. |
| `vo2max` | [Estimaciones de campo del VO2max](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/vo2max.md) | Cooper: distancia en 12 minutos. Rockport: caminata rápida de 1 milla (1609,344 m), tiempo y frecuencia cardiaca final; validación original en adultos sanos de 30–69 años. Uth: 15,3 × FCmáx / FCreposo; estudiado en hombres bien entrenados de 21–51 años. |
| `ffmi` | [Índice de masa libre de grasa (FFMI)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/ffmi.md) | Masa libre de grasa = peso × (1 − porcentaje de grasa / 100); FFMI = masa libre de grasa / altura², en metros. Para hombres: FFMI normalizado = FFMI + 6,3 × (1,8 − altura), según el resumen de Kouri (1995). |
| `katch-mcardle` | [Estimaciones energéticas según masa libre de grasa](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/katch-mcardle.md) | Masa libre de grasa = peso × (1 − grasa / 100). Katch–McArdle: 370 + 21,6 × masa libre de grasa; Cunningham: 500 + 22 × masa libre de grasa. La estimación diaria de Katch se multiplica por el factor de actividad elegido. |
| `ideal-body-weight` | [Ecuaciones históricas de peso de referencia](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/ideal-body-weight.md) | Devine, Robinson, Miller y Hamwi aproximada para altura ≥ 152,4 cm. La media de cuatro ecuaciones es una elección del autor; AdjBW = Devine + 0,4 × (peso actual − Devine), solo si supera Devine. |
| `waist-ratios` | [Índices de cintura WHR, WHtR y VAI](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/waist-ratios.md) | WHR = cintura / cadera; WHtR = cintura / altura. Mida cintura entre la última costilla y la parte superior de la pelvis tras una espiración natural, y cadera en su parte más ancha. VAI añade peso, triglicéridos y HDL en mmol/L según Amato (2010). |
| `sweat-rate` | [Estimación de sudor perdido durante ejercicio](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/sweat-rate.md) | Sudor (L) ≈ peso antes − peso después (kg) + bebida (L) − orina (L); tasa = sudor / duración en horas. Pésese en condiciones equivalentes, sin ropa mojada. |
| `muscle-potential` | [Modelo antropométrico de Casey Butt](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/muscle-potential.md) | Estimaciones heurísticas de masa y perímetros según altura, muñeca, tobillo y grasa supuesta. Los perímetros originales describen hombres culturistas con aproximadamente 8–10% de grasa. Berkhan: referencia aparte de altura (cm) − 100 kg. |
| `powerlifting-coefficients` | [Coeficientes de powerlifting DOTS, Wilks e IPF GL](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/powerlifting-coefficients.md) | Introduzca el peso del pesaje y la suma de mejores intentos válidos de sentadilla, press de banca y peso muerto en kilogramos. DOTS, Wilks clásico e IPF GL 2020 para powerlifting clásico. |
| `protein-intake` | [Valores de referencia de proteínas](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/protein-intake.md) | Para adultos sanos, la PRI de EFSA es 0,83 g/kg/día. ISSN indica 1,4–2,0 g/kg/día para adultos sanos que entrenan; ESPEN propone 1,0–1,2 para personas mayores sanas. El cálculo utiliza el peso corporal real introducido. El intervalo no es un límite superior de seguridad. |
| `fiber-intake` | [Valores de referencia de fibra](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/fiber-intake.md) | Se muestran por separado: EFSA establece 25 g/día para adultos; IOM/NASEM, 14 g/1000 kcal. IA de IOM por edad y sexo: 19–50 años, 38 g para hombres y 25 g para mujeres; mayores de 50, 30 y 21 g. El cálculo energético no sustituye automáticamente las otras referencias. |
| `omega-3` | [Valores de referencia de EPA y DHA](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/omega-3.md) | La IA de EFSA para adultos es 250 mg de EPA+DHA al día, sumando alimentos y suplementos. En embarazo y lactancia se indican además 100–200 mg de DHA al día. No es una proporción fija EPA:DHA ni el peso total del aceite de pescado. |
| `sodium-potassium` | [Sodio y potasio en la dieta diaria](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/sodium-potassium.md) | Para adultos, la OMS recomienda menos de 2000 mg de sodio y al menos 3510 mg de potasio al día. Relación molar: (Na, mg / 23) / (K, mg / 39,1). Equivalente aproximado de sal: sodio, mg × 2,5 / 1000. La relación se muestra sin categoría de riesgo individual. |
| `alcohol` | [Etanol y estimación ilustrativa de Widmark](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/alcohol.md) | Calcula la cantidad de etanol, sus calorías y una concentración aproximada mediante un modelo simplificado. |
| `caffeine` | [Cafeína restante: estimación del modelo](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/caffeine.md) | Estima la cafeína restante ahora y al acostarse según la semivida de eliminación elegida. |
| `weight-loss-forecast` | [Escenario de cambio de peso Hall–Chow](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/weight-loss-forecast.md) | Un modelo simplificado con parámetros medios ilustra el cambio de peso tras reducir de forma constante el consumo energético inicial, sin cambiar la actividad. |
| `sleep-cycles` | [Planificador del horario de sueño](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/sleep-cycles.md) | Opciones para acostarse o despertarse tras 7, 8 o 9 horas de sueño, contando el tiempo para dormirse. |
| `findrisc` | [Escala de riesgo de diabetes FINDRISC](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/findrisc.md) | Riesgo de referencia de diabetes tipo 2 a 10 años según 8 factores FINDRISC; total de 0 a 26. Los porcentajes corresponden a la población del estudio original y no son una probabilidad individual precisa. |
| `debq` | [Conducta alimentaria: adaptación modificada de DEBQ](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/debq.md) | 33 preguntas sobre la conducta alimentaria habitual. Se muestran tres medias de respuestas, sin categorías de normalidad ni diagnóstico. |
| `phq-9` | [Cuestionario de Salud del Paciente PHQ-9 (Depresión)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/phq-9.md) | Intensidad de síntomas depresivos durante las últimas 2 semanas: 9 respuestas de frecuencia de 0 a 3; total de 0 a 27. |
| `gad-7` | [Escala del Trastorno de Ansiedad Generalizada GAD-7](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/gad-7.md) | Intensidad de síntomas de ansiedad durante las últimas 2 semanas: 7 respuestas de frecuencia de 0 a 3; total de 0 a 21. |
| `pss-10` | [Escala de Estrés Percibido (PSS-10)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/pss-10.md) | Estrés percibido durante el último mes, evaluado con los 10 ítems de PSS-10. |
| `isi` | [Índice de Gravedad del Insomnio (ISI)](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/isi.md) | Evaluación del sueño durante las últimas 2 semanas: 7 ítems con escalas distintas de 0 a 4; total de 0 a 28. Satisfacción, visibilidad de problemas, preocupación e impacto diario tienen respuestas propias. |
| `scoff` | [Cuestionario de Cribado de TCA SCOFF](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/scoff.md) | Herramienta clínica de 5 preguntas breves reconocida internacionalmente para detectar el riesgo de padecer anorexia o bulimia nerviosa. |
| `ies-2` | [Escala de Alimentación Intuitiva IES-2](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/ies-2.md) | IES-2: 23 afirmaciones sobre las actitudes alimentarias y las señales corporales, con cuatro subescalas. |
| `yfas` | [Escala de Adicción a la Comida de Yale mYFAS 2.0](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/yfas.md) | mYFAS 2.0: 13 preguntas sobre problemas con la alimentación durante los últimos 12 meses. |
| `eating-behavior-wizard` | [Autoevaluación de la conducta alimentaria](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/eating-behavior-wizard.md) | Cinco preguntas de SCOFF y cuatro preguntas propias para reflexionar sobre la conducta alimentaria. |


## Opciones y eventos

`hostUrl` selecciona el origen HTTP(S) de un despliegue de prueba correspondiente, sin ruta, credenciales ni consulta. `campaign` identifica una referencia. `integrationId` selecciona una integración de cuenta; el servidor comprueba dominio y acceso. Cambiar calculadora, origen, idioma, tema o integración recrea el iframe y borra el estado no guardado.

`onEvent` recibe `ready`, `calculated` o `error`. Ready indica que la interfaz se montó, no que la API esté disponible. Las calculadoras del catálogo emiten calculated al cambiar los resultados, incluido el cálculo inicial. Los eventos no comparten entradas, respuestas ni resultados con el sitio anfitrión. PostMessage valida origen, ventana, instancia y protocolo. La CSP debe permitir `frame-src https://nutrifit.health` y, para el cargador, `script-src https://nutrifit.health`.

## Servicio alojado y React nativo

Los widgets gratuitos conservan la marca NutriFit y enlaces opcionales. La marca blanca requiere un plan de widgets configurado, una integración y un dominio HTTPS exacto verificado; Premium personal no la incluye. Los widgets del catálogo pueden mostrar la marca verificada; su botón PDF de NutriFit se omite en modo marca blanca. La calculadora de platos de pago permite PDF/CSV con la marca del cliente.

`NativeNutritionCalculator` de `@nutrifit/widgets/native` muestra la calculadora del plato dentro de tu página. Importa `@nutrifit/widgets/native.css`. Necesita una sesión breve obtenida por tu servidor; guarda la clave permanente solo en ese servidor. Las demás calculadoras utilizan adaptadores React iframe, no componentes DOM nativos. Las fórmulas locales no consumen la cuota API de nutrición; el cálculo del plato y su PDF sí.

```tsx
import { NativeNutritionCalculator } from '@nutrifit/widgets/native';
import '@nutrifit/widgets/native.css';

export function NativeCalculator() {
  return <NativeNutritionCalculator locale="es" getSession={async (signal) => {
    const response = await fetch('/api/nutrifit-session', { method: 'POST', signal });
    if (!response.ok) throw new Error('Widget session unavailable');
    return response.json();
  }} />;
}
```

En la cuenta de integraciones, activa un plan configurado con acceso nativo, añade el origen HTTPS exacto, publica el registro TXT DNS, verifica el dominio y emite una clave de servidor. Guarda `NUTRIFIT_WIDGET_KEY` y `NUTRIFIT_SITE_ORIGIN` solo en tu servidor. El intermediario siguiente intercambia la clave por una sesión de cinco minutos y devuelve el sobre completo a getSession. Aplica controles de acceso y límites de solicitudes; nunca registres la clave ni la sesión.

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

[Native API](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/NATIVE_REACT.md) · [Service](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/SERVICE_MODEL.md) · [Account](https://nutrifit.health/widgets/integrations?lang=es)

## Licencia y alcance

Copyright (c) 2026 **NUTRIFIT LLC**. Los adaptadores y la interfaz nativa del plato se distribuyen con la licencia MIT estándar. La licencia del código no concede cuotas del servicio, marca blanca, derechos de marca NutriFit ni propiedad de instrumentos clínicos. No se incluyen backend, cuenta privada ni catálogo de alimentos. Las calculadoras médicas y psicológicas conservan sus límites y no constituyen un diagnóstico.

[MIT](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/LICENSE) · [GitHub](https://github.com/nutrifit-health/nutrifit-widgets)

Los widgets con marca usan el logotipo oficial de NutriFit: claro, oscuro o según el sistema con `theme="auto"`. White-label conserva la marca del cliente. El CSS nativo incluye los PNG; una CSP estricta debe permitir `data:` en `img-src`. Consulta [NOTICE](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/NOTICE).


[Integración React nativa](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/NATIVE_REACT.md) · [Modelo de servicio](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/SERVICE_MODEL.md) · [Añadir widgets](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/ADDING_WIDGETS.md) · [Publicar versiones](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/RELEASING.md)

El paquete npm principal es `@nutrifit/widgets`. GitHub Packages ofrece también `@nutrifit-health/widgets`, vinculado al repositorio y obtenido del archivo npm publicado. El scope coincide con el propietario del repositorio GitHub. La instalación desde GitHub requiere autenticación; para npm usa el comando anterior.

[GitHub Packages](https://github.com/nutrifit-health/nutrifit-widgets/pkgs/npm/widgets)

## Demostración local

Explora las 49 calculadoras con una interfaz traducida a seis idiomas, temas claro y oscuro y ejemplos de React, JavaScript e iframe listos para copiar.

Desde un clon del repositorio, ejecuta:

```sh
npm install --prefix examples/consumer-site
npm run demo
```

Abre [la demostración](http://127.0.0.1:5178/?lang=es). El servidor local de NutriFit predeterminado es `http://localhost:5100`; puedes cambiarlo en la configuración de conexión. Mantén el proceso de demostración en ejecución.

[Demostración local](../../examples/consumer-site/README.md)
