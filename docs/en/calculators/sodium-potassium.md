# Sodium-Potassium Balance & Salt Calculator (Na:K)

[English](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/en/calculators/sodium-potassium.md) · [Русский](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/ru/calculators/sodium-potassium.md) · [Español](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/es/calculators/sodium-potassium.md) · [Українська](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uk/calculators/sodium-potassium.md) · [Қазақша](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/kk/calculators/sodium-potassium.md) · [O‘zbekcha](https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/uz/calculators/sodium-potassium.md)

[← Calculator catalog](../CALCULATORS.md)

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

## Embed this calculator

```sh
npm install @nutrifit/widgets
```

### React

```tsx
'use client';
import { CalculatorFrame } from '@nutrifit/widgets';

export function Calculator() {
  return <CalculatorFrame calculator="sodium-potassium" locale="en" theme="auto" />;
}
```

### JavaScript loader

```html
<div data-nutrifit-widget="sodium-potassium" data-locale="en" data-theme="auto"></div>
<script src="https://nutrifit.health/widgets/v1/embed.js" defer></script>
```

### Plain iframe

```html
<iframe
  src="https://nutrifit.health/embed/calculators/sodium-potassium?lang=en&theme=auto"
  title="Sodium-Potassium Balance &amp; Salt Calculator (Na:K)" loading="lazy" referrerpolicy="no-referrer"
  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
  style="width:100%;height:880px;border:0"
></iframe>
```

Use light, dark or auto for theme. The JavaScript loader and React frame adjust height automatically; plain iframe uses a fixed height. Inputs stay inside the frame. See the installation guide for CSP, events and paid integration.
