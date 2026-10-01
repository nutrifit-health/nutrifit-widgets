'use client';

import { WidgetFrame } from '../react/WidgetFrame.js';
import type { CalculatorFrameProps } from '../react/types.js';

/** Встраивает калькулятор публичного каталога с его канонической логикой NutriFit. */
export function CalculatorFrame({ calculator, ...props }: CalculatorFrameProps) {
  return <WidgetFrame {...props} widget={calculator} />;
}
