import type { widgets } from './registry.js';

export type WidgetId = keyof typeof widgets;
export type WidgetLocale = 'en' | 'ru' | 'es' | 'uk' | 'kk' | 'uz';
export type WidgetTheme = 'light' | 'dark' | 'auto';
export type WidgetEvent = 'ready' | 'calculated' | 'error';

export interface WidgetAppearance {
  background?: string;
  surface?: string;
  text?: string;
  muted?: string;
  accent?: string;
  border?: string;
  radius?: number;
}

export interface WidgetDefinition {
  path: string;
  titles: Record<WidgetLocale, string>;
  height: number;
}

export interface WidgetMountOptions {
  widget: WidgetId;
  hostUrl?: string;
  integrationId?: string;
  locale?: WidgetLocale;
  theme?: WidgetTheme;
  appearance?: WidgetAppearance;
  title?: string;
  campaign?: string;
  onEvent?: (event: WidgetEvent) => void;
}

export type WidgetMessage =
  | { event: WidgetEvent }
  | { event: 'resize'; height: number };

export interface WidgetHandle {
  iframe: HTMLIFrameElement;
  destroy: () => void;
}

export interface WidgetScanError {
  element: HTMLElement;
  error: Error;
}

export interface WidgetScanResult {
  widgets: WidgetHandle[];
  errors: WidgetScanError[];
}

export type WidgetScanRoot = Document | HTMLElement | DocumentFragment;
