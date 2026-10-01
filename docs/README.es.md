# @nutrifit/widgets

[English](../README.md) · [Русский](README.ru.md) · [Español](README.es.md) · [Українська](README.uk.md) · [Қазақша](README.kk.md) · [O‘zbekcha](README.uz.md)

Calculadoras de NutriFit para tu sitio: una calculadora de platos y las 48 herramientas del catálogo público. Los adaptadores React, JavaScript e iframe usan las mismas interfaces y cálculos alojados que NutriFit.

Este código prepara la versión **0.3.0**. La versión npm publicada anteriormente es **0.2.0**. Los nuevos tipos e idiomas requieren publicar 0.3.0 y actualizar el sitio NutriFit de forma coordinada. Este documento no confirma publicación, despliegue ni verificaciones del lanzamiento.

## Instalación

Después de publicar 0.3.0, instala el paquete con el comando siguiente. React admite las versiones 18.2 y 19. El módulo JavaScript independiente no necesita React.

```sh
npm install @nutrifit/widgets@^0.3.0
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

[Instrucciones, métodos, fórmulas y límites de cada calculadora](CALCULATORS.es.md).

## Catálogo completo

| ID del widget | Calculadora | Objetivo |
|---|---|---|
| `nutrition` | Cálculo NutriFit | Para `nutrition`: busca alimentos o recetas públicas, añade sus pesos en gramos e indica el peso del plato terminado. Calcula para ver totales y valores por 100 g; hay exportación PDF y CSV. Los nutrientes desconocidos se marcan como incompletos y nunca se convierten silenciosamente en cero. Máximo: 50 ingredientes. |
| `tdee` | [Calculadora de calorías diarias (TDEE)](CALCULATORS.es.md#tdee) | Calcula el metabolismo basal y el gasto energético diario total, además de las calorías para perder, mantener o ganar peso. |
| `macros` | [Calculadora de macronutrientes](CALCULATORS.es.md#macros) | Reparte las calorías diarias entre proteínas, grasas e hidratos de carbono según el peso corporal y el objetivo, en gramos, calorías y porcentajes. |
| `water` | [Calculadora de agua diaria](CALCULATORS.es.md#water) | Calcula la necesidad diaria de líquidos a partir del peso corporal, con ajustes por actividad física y clima cálido. |
| `body-composition` | [Calculadora de composición corporal](CALCULATORS.es.md#body-composition) | Estima el porcentaje de grasa por perímetros corporales y calcula la masa grasa, la masa magra y el índice de masa corporal. |
| `glycemic-load` | [Calculadora de carga glucémica](CALCULATORS.es.md#glycemic-load) | Calcula la carga glucémica de una ración a partir del índice glucémico y de los hidratos de carbono: refleja la respuesta real de la glucosa mejor que el índice por sí solo. |
| `deficiency-risk` | [Cribado del riesgo de déficit de nutrientes](CALCULATORS.es.md#deficiency-risk) | Marca los factores de estilo de vida y alimentación que te afectan y descubre qué déficits son probables y con qué analíticas se comprueban. |
| `health-balance-wheel` | [Rueda de balance de salud y nutrición](CALCULATORS.es.md#health-balance-wheel) | Gráfico radial interactivo de 8 áreas de salud y estilo de vida. Detecta cuellos de botella (Ley del Mínimo de Liebig) y conecta con herramientas de NutriFit. |
| `homa-ir` | [Calculadora HOMA-IR: índice de resistencia a la insulina](CALCULATORS.es.md#homa-ir) | HOMA-IR, HOMA-β y QUICKI a partir de glucosa e insulina en ayunas: resistencia a la insulina y función de células β con rangos de referencia e interpretación. |
| `tyg-index` | [Calculadora del índice TyG (triglicéridos × glucosa)](CALCULATORS.es.md#tyg-index) | Índice TyG y sus derivados TyG-IMC y TyG-CC: resistencia a la insulina y riesgo cardiometabólico a partir de triglicéridos y glucosa en ayunas, sin análisis de insulina. |
| `lipid-profile` | [Calculadora de perfil lipídico: LDL, no-HDL e índices aterogénicos](CALCULATORS.es.md#lipid-profile) | LDL calculado por dos métodos, no-HDL, colesterol remanente y cinco índices aterogénicos a partir del lipidograma estándar, con objetivos ESC/EAS. |
| `egfr` | [Calculadora de TFG (eGFR) por CKD-EPI 2021](CALCULATORS.es.md#egfr) | TFG estimada por CKD-EPI 2021 (creatinina, opcionalmente cistatina C), aclaramiento de creatinina por Cockcroft-Gault y estadio de ERC según KDIGO, con conversión µmol/L y mg/dL. |
| `hba1c-eag` | [Conversor HbA1c ↔ glucosa media (eAG)](CALCULATORS.es.md#hba1c-eag) | HbA1c a glucemia media de 3 meses según la fórmula ADAG, cálculo inverso y conversión % ↔ mmol/mol con categorías ADA. |
| `lab-unit-converter` | [Conversor de unidades de análisis de laboratorio](CALCULATORS.es.md#lab-unit-converter) | Conversión de 33 parámetros de laboratorio entre SI (mmol/L, µmol/L, nmol/L, pmol/L) y unidades convencionales (mg/dL, ng/mL, pg/mL) según la masa molar. |
| `vitamin-d-dose` | [Calculadora de dosis de vitamina D según el nivel de 25(OH)D](CALCULATORS.es.md#vitamin-d-dose) | Dosis de carga según la fórmula de van Groningen y de mantenimiento según la Endocrine Society, ajustadas por peso y obesidad; estado de 25(OH)D y plazo del control. |
| `iron-deficiency` | [Calculadora de déficit de hierro: TSAT, ferritina y déficit de Ganzoni](CALCULATORS.es.md#iron-deficiency) | Saturación de transferrina, umbral de ferritina ajustado por PCR, estadio del déficit de hierro (latente, sin anemia, ferropénica, de inflamación) y déficit calculado por Ganzoni. |
| `phenoage` | [Calculadora de edad biológica PhenoAge (Levine)](CALCULATORS.es.md#phenoage) | Edad fenotípica y aceleración del envejecimiento a partir de 9 biomarcadores del hemograma y la bioquímica rutinarios (Levine 2018) con estimación del riesgo a 10 años. |
| `fib-4` | [Calculadora FIB-4 y APRI: índices de fibrosis hepática](CALCULATORS.es.md#fib-4) | Valoración no invasiva de la fibrosis hepática con FIB-4 y APRI y umbrales ajustados por edad de la EASL 2021: el primer paso del cribado en NAFLD, hepatitis y hepatopatía alcohólica. |
| `free-testosterone` | [Calculadora de testosterona libre (Vermeulen)](CALCULATORS.es.md#free-testosterone) | Testosterona libre y biodisponible calculadas con las constantes de asociación a SHBG y albúmina (Vermeulen 1999) y umbrales de déficit para hombres. |
| `anion-gap` | [Calculadora de anión gap y delta ratio](CALCULATORS.es.md#anion-gap) | Anión gap corregido por albúmina (Figge) y delta ratio ΔAG/ΔHCO₃ para distinguir la acidosis con anión gap elevado y normal. |
| `corrected-calcium` | [Calculadora de calcio corregido por albúmina](CALCULATORS.es.md#corrected-calcium) | Calcio total corregido por albúmina (Payne 1973): detección de la hipo- e hipercalcemia reales en la hipoalbuminemia con conversión de unidades. |
| `one-rep-max` | [Calculadora de 1RM (repetición máxima)](CALCULATORS.es.md#one-rep-max) | Determina el peso máximo que un atleta puede levantar en una sola repetición, sin riesgo de lesiones mediante pruebas submáximas de 2 a 10 repeticiones. |
| `heart-rate-zones` | [Calculadora de zonas de frecuencia cardíaca](CALCULATORS.es.md#heart-rate-zones) | Calcula los límites individuales de las 5 zonas de entrenamiento considerando la frecuencia cardíaca máxima y el pulso en reposo (método de la frecuencia cardíaca de reserva). |
| `vo2max` | [Calculadora de VO2máx (consumo máximo de oxígeno)](CALCULATORS.es.md#vo2max) | Evalúa la potencia aeróbica y la capacidad cardiorrespiratoria mediante protocolos de campo validados sin necesidad de equipamiento de laboratorio. |
| `ffmi` | [Calculadora de FFMI (índice de masa libre de grasa)](CALCULATORS.es.md#ffmi) | Determina la cantidad de masa muscular magra en relación con la estatura, diferenciando la hipertrofia muscular real del acúmulo de grasa. |
| `katch-mcardle` | [Calculadora de BMR y TDEE de Katch-McArdle](CALCULATORS.es.md#katch-mcardle) | Determina el metabolismo basal (BMR) y el gasto energético total (TDEE) a partir de la masa magra libre de grasa en lugar del peso total de la báscula. |
| `ideal-body-weight` | [Calculadora de peso ideal (IBW y AdjBW)](CALCULATORS.es.md#ideal-body-weight) | Calcula el peso corporal de referencia según fórmulas clínicas estandarizadas y determina el peso ajustado (AdjBW) para nutrición clínica y dietética. |
| `waist-ratios` | [Calculadora de índices de cintura (WHtR, WHR, VAI)](CALCULATORS.es.md#waist-ratios) | Evalúa la distribución del tejido adiposo, la grasa visceral y el riesgo cardiometabólico con mucha mayor precisión que el IMC clásico. |
| `sweat-rate` | [Calculadora de sudoración y rehidratación](CALCULATORS.es.md#sweat-rate) | Determina la tasa individual de pérdida de sudor y calcula las necesidades personalizadas de líquidos y electrolitos tras el ejercicio. |
| `muscle-potential` | [Calculadora de potencial muscular (Casey Butt y Martin Berkhan)](CALCULATORS.es.md#muscle-potential) | Estima la masa libre de grasa y los perímetros musculares máximos alcanzables (pecho, brazos, muslos) sin uso de esteroides anabólicos. |
| `powerlifting-coefficients` | [Calculadora de coeficientes de powerlifting (DOTS, Wilks, IPF GL)](CALCULATORS.es.md#powerlifting-coefficients) | Compara la fuerza relativa de atletas de diferentes categorías de peso y sexo en levantamiento de potencia (sentadilla, press de banca, peso muerto) con DOTS, Wilks e IPF GL. |
| `protein-intake` | [Calculadora de ingesta diaria de proteínas (ISSN y ESPEN)](CALCULATORS.es.md#protein-intake) | Determina la ingesta óptima diaria de proteínas según tus objetivos (pérdida de grasa, hipertrofia, salud en mayores de 65 años), patrón dietético y síntesis proteica muscular (MPS). |
| `fiber-intake` | [Calculadora de ingesta de fibra dietética (OMS y EFSA)](CALCULATORS.es.md#fiber-intake) | Determina el requerimiento diario de fibra soluble e insoluble para nutrir la microbiota intestinal, normalizar el colesterol y regular el tránsito gastrointestinal. |
| `omega-3` | [Calculadora de Omega-3 (dosis de EPA + DHA e índice)](CALCULATORS.es.md#omega-3) | Determina la dosis terapéutica y de mantenimiento de ácidos grasos EPA y DHA activos según indicaciones clínicas y biomarcadores analíticos. |
| `sodium-potassium` | [Calculadora de balance sodio-potasio (Na:K y sal)](CALCULATORS.es.md#sodium-potassium) | Evalúa el equilibrio electrolítico entre sodio y potasio en la dieta, calcula el equivalente en sal común y estima el riesgo cardiovascular. |
| `alcohol` | [Calculadora de eliminación de alcohol (fórmula de Widmark)](CALCULATORS.es.md#alcohol) | Calcula el pico máximo y la concentración actual de etanol en sangre (en ‰), el tiempo estimado hasta la sobriedad completa y las calorías aportadas. |
| `caffeine` | [Calculadora de eliminación de cafeína y hora límite](CALCULATORS.es.md#caffeine) | Modela la farmacocinética de la cafeína en sangre, su vida media biológica y el bloqueo residual de adenosina al acostarte para proteger el sueño profundo. |
| `weight-loss-forecast` | [Calculadora de pronóstico dinámico de pérdida de peso (modelo de Kevin Hall)](CALCULATORS.es.md#weight-loss-forecast) | Genera una trayectoria no lineal y realista de pérdida de peso basada en el modelo dinámico de Kevin Hall (NIH), considerando la ralentización metabólica y la masa magra. |
| `sleep-cycles` | [Calculadora de ciclos de sueño](CALCULATORS.es.md#sleep-cycles) | Herramienta de cálculo del sueño basada en ciclos ultradianos de 90 minutos (fases de sueño lento y REM) y el tiempo medio de conciliación. |
| `findrisc` | [Escala de riesgo de diabetes FINDRISC](CALCULATORS.es.md#findrisc) | Cuestionario reconocido internacionalmente por la OMS y la IDF para la detección precoz de diabetes oculta y la evaluación del riesgo de aparición de diabetes tipo 2 en 10 años. |
| `debq` | [Cuestionario Holandés de Conducta Alimentaria (DEBQ)](CALCULATORS.es.md#debq) | Instrumento psicológico clásico validado para evaluar los tres estilos predominantes de conducta alimentaria: restrictivo, emocional y externo. |
| `phq-9` | [Cuestionario de Salud del Paciente PHQ-9 (Depresión)](CALCULATORS.es.md#phq-9) | El estándar de oro internacional para el cribado primario de la depresión y la estimación de gravedad según criterios clínicos del DSM-5. |
| `gad-7` | [Escala del Trastorno de Ansiedad Generalizada GAD-7](CALCULATORS.es.md#gad-7) | Cuestionario clínico internacional diseñado para evaluar de forma ágil y precisa la intensidad de la ansiedad generalizada y la tensión somática. |
| `pss-10` | [Escala de Estrés Percibido (PSS-10)](CALCULATORS.es.md#pss-10) | La clásica escala de Sheldon Cohen diseñada para medir en qué grado las situaciones vitales son percibidas como impredecibles, incontrolables y desbordantes. |
| `isi` | [Índice de Gravedad del Insomnio (ISI)](CALCULATORS.es.md#isi) | Herramienta clínica de 7 preguntas diseñada para evaluar de forma fiable la intensidad, naturaleza y repercusión diurna del insomnio. |
| `scoff` | [Cuestionario de Cribado de TCA SCOFF](CALCULATORS.es.md#scoff) | Herramienta clínica de 5 preguntas breves reconocida internacionalmente para detectar el riesgo de padecer anorexia o bulimia nerviosa. |
| `ies-2` | [Escala de Alimentación Intuitiva IES-2](CALCULATORS.es.md#ies-2) | Herramienta psicométrica de 23 preguntas validada científicamente por Tracy Tylka para evaluar una relación saludable y autorregulada con la comida. |
| `yfas` | [Escala de Adicción a la Comida de Yale mYFAS 2.0](CALCULATORS.es.md#yfas) | Cuestionario científico adaptado de la Universidad de Yale para diagnosticar patrones adictivos hacia alimentos hiperpalatables y ultraprocesados. |
| `eating-behavior-wizard` | [Asistente de Diagnóstico de la Conducta Alimentaria](CALCULATORS.es.md#eating-behavior-wizard) | Asistente diagnóstico integrador de NutriFit que sintetiza las principales escalas validadas para identificar su arquetipo de alimentación y estrategia personalizada. |


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

[Native API](NATIVE_REACT.md) · [Service](../SERVICE_MODEL.md) · [Account](https://nutrifit.health/widgets/integrations?lang=es)

## Licencia y alcance

Copyright (c) 2026 **NUTRIFIT LLC**. Los adaptadores y la interfaz nativa del plato se distribuyen con la licencia MIT estándar. La licencia del código no concede cuotas del servicio, marca blanca, derechos de marca NutriFit ni propiedad de instrumentos clínicos. No se incluyen backend, cuenta privada ni catálogo de alimentos. Las calculadoras médicas y psicológicas conservan sus límites y no constituyen un diagnóstico.

[MIT](../LICENSE) · [GitHub](https://github.com/nutrifit-health/nutrifit-widgets)

Los widgets con marca usan el logotipo oficial de NutriFit: claro, oscuro o según el sistema con `theme="auto"`. White-label conserva la marca del cliente. El CSS nativo incluye los PNG; una CSP estricta debe permitir `data:` en `img-src`. Consulta [NOTICE](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/NOTICE).
