import type { NutriFitLogoProps } from './types';

export function NutriFitLogo({ theme }: NutriFitLogoProps) {
  return (
    <span className="nf-brand-identity" data-theme={theme} role="img" aria-label="NutriFit" />
  );
}
