import { useEffect, useId, useRef, useState } from 'react';
import { MAX_INGREDIENTS } from './constants';
import { canCalculateDraft } from './validation';
import type { CalculatorDraft, CalculationResult, FoodOption, NutritionControllerOptions } from './types';

export function useNutritionCalculator({ client, locale, initialDraft, onCalculated, onError }: NutritionControllerOptions) {
  const id = useId();
  const nextId = useRef(0);
  const [draft, setDraft] = useState<CalculatorDraft>(() => initialDraft ?? { items: [], outputWeight: '' });
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const request = useRef<AbortController | null>(null);
  const callbacks = useRef({ onCalculated, onError });
  useEffect(() => { callbacks.current = { onCalculated, onError }; }, [onCalculated, onError]);
  useEffect(() => {
    request.current?.abort();
    request.current = null;
    setBusy(false);
    setResult(null);
    setError(null);
    return () => request.current?.abort();
  }, [client, locale]);

  function invalidate() {
    request.current?.abort();
    request.current = null;
    setBusy(false);
    setResult(null);
    setError(null);
  }

  function add(option: FoodOption) {
    if (draft.items.length >= MAX_INGREDIENTS) return;
    const ingredient = { ...option, rowId: id + '-' + nextId.current++, weight: '100' };
    invalidate();
    // Updater чистый: StrictMode не изменяет счётчик и не запускает побочные действия.
    setDraft((current) => current.items.length >= MAX_INGREDIENTS ? current :
      { ...current, items: [...current.items, ingredient] });
  }

  function changeWeight(rowId: string, weight: string) {
    invalidate();
    setDraft((current) => ({ ...current, items: current.items.map((item) => item.rowId === rowId ? { ...item, weight } : item) }));
  }

  function remove(rowId: string) {
    invalidate();
    setDraft((current) => ({ ...current, items: current.items.filter((item) => item.rowId !== rowId) }));
  }

  function changeOutputWeight(outputWeight: string) {
    invalidate();
    setDraft((current) => ({ ...current, outputWeight }));
  }

  async function calculate() {
    // Ref блокирует второй submit синхронно, до следующего render.
    if (!canCalculateDraft(draft) || request.current) return;
    const controller = new AbortController();
    request.current = controller;
    setBusy(true);
    setError(null);
    setResult(null);
    try {
      const next = await client.calculate(draft.items, Number(draft.outputWeight), locale, controller.signal);
      if (controller.signal.aborted || request.current !== controller) return;
      setResult(next);
      callbacks.current.onCalculated?.(next);
    } catch (cause: unknown) {
      if (controller.signal.aborted || request.current !== controller) return;
      const failure = cause instanceof Error ? cause : new Error('NUTRIFIT_CALCULATION_FAILED');
      setError(failure);
      callbacks.current.onError?.(failure);
    } finally {
      if (request.current === controller) {
        request.current = null;
        if (!controller.signal.aborted) setBusy(false);
      }
    }
  }

  return { draft, busy, result, error, canCalculate: canCalculateDraft(draft), add, changeWeight, remove, changeOutputWeight, calculate };
}
