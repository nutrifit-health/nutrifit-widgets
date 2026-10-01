import type { WidgetLocale, WidgetTheme } from '../../core/types.js';
export type { WidgetLocale, WidgetTheme } from '../../core/types.js';
export type NutrientKey = 'calories' | 'protein' | 'fat' | 'carbs';
export type CalculationBasis = 'total' | 'per100g';

/** Представление выбора в форме; не копия серверного DTO. */
export interface FoodOption {
  reference: string;
  category: 'food' | 'recipe';
  label: string;
}
export interface Ingredient extends FoodOption {
  rowId: string;
  weight: string;
}
export interface Metric {
  key: NutrientKey;
  total: number | null;
  per100g: number | null;
  incomplete: boolean;
}
/** UI-проекция результата; неизвестное значение сохраняется как null. */
export interface CalculationResult {
  metrics: Metric[];
  checkedAt: string;
  completeness: 'complete' | 'partial' | 'unknown';
  outputWeight: number;
}
export interface CalculatorClient {
  downloadPdf?: (items: Ingredient[], outputWeight: number, locale: WidgetLocale, signal: AbortSignal) => Promise<Blob>;
  search: (query: string, locale: WidgetLocale, signal: AbortSignal) => Promise<FoodOption[]>;
  calculate: (items: Ingredient[], outputWeight: number, locale: WidgetLocale, signal: AbortSignal) => Promise<CalculationResult>;
}
export interface CalculatorDraft { items: Ingredient[]; outputWeight: string; }
export interface NutritionCalculatorProps {
  brandName?: string;
  locale?: WidgetLocale;
  theme?: WidgetTheme;
  className?: string;
  client: CalculatorClient;
  onCalculated?: (result: CalculationResult) => void;
  onError?: (error: Error) => void;
  initialDraft?: CalculatorDraft;
  sourceSite?: string;
  campaign?: string;
  showContinue?: boolean;
}
export type WidgetTranslations = Record<
  'title' | 'intro' | 'search' | 'searchHint' | 'searching' | 'empty' | 'add' | 'food' | 'recipe' |
  'grams' | 'remove' | 'output' | 'outputHint' | 'calculate' | 'calculating' | 'limit' | 'total' |
  'per100g' | 'results' | 'partial' | 'unknown' | 'checked' | 'source' | 'open' | 'error' |
  'limited' | 'missing' | 'calories' | 'protein' | 'fat' | 'carbs' | 'continueHint' | 'download' | 'integrate' | 'transferTooLarge' | 'ingredients' | 'emptyIngredients' | 'pdf' | 'pdfBusy' | 'whiteSource',
  string
>;

export type NutritionControllerOptions = Pick<NutritionCalculatorProps,
  'client' | 'initialDraft' | 'onCalculated' | 'onError'> & { locale: WidgetLocale };

export interface IngredientSearchOptions {
  client: CalculatorClient;
  locale: WidgetLocale;
  query: string;
  onError?: (error: Error) => void;
}

export interface IngredientSearchState {
  query: string;
  client: CalculatorClient;
  locale: WidgetLocale;
  choices: FoodOption[];
  status: 'idle' | 'loading' | 'success' | 'error';
  error: Error | null;
}

export interface IngredientEditorProps {
  id: string;
  t: WidgetTranslations;
  items: Ingredient[];
  query: string;
  search: IngredientSearchState;
  onQueryChange: (query: string) => void;
  onAdd: (option: FoodOption) => void;
  onWeightChange: (rowId: string, weight: string) => void;
  onRemove: (rowId: string) => void;
}

export interface CalculationResultsProps {
  id: string;
  t: WidgetTranslations;
  locale: WidgetLocale;
  result: CalculationResult;
  brandName?: string;
  client: CalculatorClient;
  draft: CalculatorDraft;
}

export interface WidgetIconProps { name: 'search' | 'plus' | 'remove' | 'download' | 'arrow'; }
