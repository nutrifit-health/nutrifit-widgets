import type { WidgetHandle, WidgetMountOptions, WidgetScanResult, WidgetScanRoot } from '../core/types.js';

export type WidgetBrowserModule = typeof import('../core/index.js');

export interface WidgetBrowserApi {
  ready: Promise<void>;
  mount: (container: HTMLElement, options: WidgetMountOptions) => Promise<WidgetHandle>;
  scan: (root?: WidgetScanRoot) => Promise<WidgetScanResult>;
}

export type WidgetWindow = Window & typeof globalThis & { NutriFitWidgets?: WidgetBrowserApi };
