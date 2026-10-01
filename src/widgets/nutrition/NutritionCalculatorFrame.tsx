'use client';

import { WidgetFrame } from '../../react/WidgetFrame.js';
import type { NutritionCalculatorFrameProps } from '../../react/types.js';

export function NutritionCalculatorFrame(props: NutritionCalculatorFrameProps) {
  return <WidgetFrame {...props} widget="nutrition" />;
}
