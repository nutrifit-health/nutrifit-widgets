# Calculadora FIB-4 y APRI: índices de fibrosis hepática

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/fib-4.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/fib-4.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/fib-4.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/fib-4.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/fib-4.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/fib-4.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

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

## Cómo integrar esta calculadora

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="fib-4" locale="es" theme="auto" />;
}
```

### Cargador JavaScript

```html
<div data-nutrifit-widget="fib-4" data-locale="es" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Iframe directo

```html
<iframe
  src="https://nutrifit.health/embed/calculators/fib-4?lang=es&theme=auto"
  title="Calculadora FIB-4 y APRI: índices de fibrosis hepática" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
