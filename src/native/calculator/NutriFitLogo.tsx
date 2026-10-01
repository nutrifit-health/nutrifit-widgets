import type { NutriFitLogoProps } from './types';

export function NutriFitLogo({ theme }: NutriFitLogoProps) {
  return (
    <span className="nf-brand-identity" data-theme={theme}>
      <span aria-hidden="true" className="nf-brand-mark" />
      <span>NutriFit</span>
    </span>
  );
}
