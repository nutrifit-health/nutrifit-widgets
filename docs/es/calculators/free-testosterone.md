# Calculadora de testosterona libre (Vermeulen)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/free-testosterone.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/free-testosterone.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/free-testosterone.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/free-testosterone.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/free-testosterone.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/free-testosterone.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

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

## Cómo integrar esta calculadora

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="free-testosterone" locale="es" theme="auto" />;
}
```

### Cargador JavaScript

```html
<div data-nutrifit-widget="free-testosterone" data-locale="es" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Iframe directo

```html
<iframe
  src="https://nutrifit.health/embed/calculators/free-testosterone?lang=es&theme=auto"
  title="Calculadora de testosterona libre (Vermeulen)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
