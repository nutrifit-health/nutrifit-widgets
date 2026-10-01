# Conversor HbA1c ↔ glucosa media (eAG)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/hba1c-eag.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/hba1c-eag.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/hba1c-eag.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/hba1c-eag.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/hba1c-eag.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/hba1c-eag.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

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

## Cómo integrar esta calculadora

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="hba1c-eag" locale="es" theme="auto" />;
}
```

### Cargador JavaScript

```html
<div data-nutrifit-widget="hba1c-eag" data-locale="es" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Iframe directo

```html
<iframe
  src="https://nutrifit.health/embed/calculators/hba1c-eag?lang=es&theme=auto"
  title="Conversor HbA1c ↔ glucosa media (eAG)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
