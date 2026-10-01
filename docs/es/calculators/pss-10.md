# Escala de Estrés Percibido (PSS-10)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/pss-10.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/pss-10.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/pss-10.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/pss-10.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/pss-10.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/pss-10.md)

[← Catálogo de calculadoras](../CALCULATORS.md)

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

## Cómo integrar esta calculadora

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="pss-10" locale="es" theme="auto" />;
}
```

### Cargador JavaScript

```html
<div data-nutrifit-widget="pss-10" data-locale="es" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Iframe directo

```html
<iframe
  src="https://nutrifit.health/embed/calculators/pss-10?lang=es&theme=auto"
  title="Escala de Estrés Percibido (PSS-10)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Temas: light, dark y auto. JavaScript y React ajustan la altura automáticamente; el iframe directo tiene altura fija. Los datos permanecen en el iframe. Consulta la guía de instalación para CSP, eventos e integración de pago.
