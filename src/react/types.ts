import type { CSSProperties } from 'react';
import type { WidgetMountOptions } from '../core/types.js';

export interface WidgetFrameProps extends WidgetMountOptions {
  className?: string;
  style?: CSSProperties;
}

export type NutritionCalculatorFrameProps = Omit<WidgetFrameProps, 'widget'>;

export type CalculatorId = Exclude<WidgetMountOptions['widget'], 'nutrition'>;
export interface CalculatorFrameProps extends Omit<WidgetFrameProps, 'widget'> {
  calculator: CalculatorId;
}
