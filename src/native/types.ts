import type { WidgetLocale, WidgetTheme, CalculationResult } from './calculator/types';
export interface NativeNutritionCalculatorProps {
  /** Прокси приложения получает сессию серверным ключом; ключ в браузер не передаётся. */
  getSession: (signal: AbortSignal) => Promise<unknown>;
  apiOrigin?: string;
  locale?: WidgetLocale;
  theme?: WidgetTheme;
  className?: string;
  onCalculated?: (result: CalculationResult) => void;
  onError?: (error: Error) => void;
}
export interface NativeSessionState { token: string; expiresAt: number; brandName: string | null; }
