import { useEffect, useRef, useState } from 'react';
import type { IngredientSearchOptions, IngredientSearchState } from './types';

export function useIngredientSearch({ client, locale, query, onError }: IngredientSearchOptions) {
  const normalizedQuery = query.trim();
  const onFailure = useRef(onError);
  const [state, setState] = useState<IngredientSearchState>({
    query: normalizedQuery, client, locale, choices: [], status: 'idle', error: null,
  });
  useEffect(() => { onFailure.current = onError; }, [onError]);
  useEffect(() => {
    const controller = new AbortController();
    const context = { query: normalizedQuery, client, locale };
    if (normalizedQuery.length < 2) {
      setState({ ...context, choices: [], status: 'idle', error: null });
      return () => controller.abort();
    }
    setState({ ...context, choices: [], status: 'loading', error: null });
    const timer = window.setTimeout(async () => {
      try {
        const choices = await client.search(normalizedQuery, locale, controller.signal);
        if (!controller.signal.aborted) setState({ ...context, choices, status: 'success', error: null });
      } catch (cause: unknown) {
        if (controller.signal.aborted) return;
        const error = cause instanceof Error ? cause : new Error('NUTRIFIT_SEARCH_FAILED');
        setState({ ...context, choices: [], status: 'error', error });
        onFailure.current?.(error);
      }
    }, 300);
    return () => { controller.abort(); window.clearTimeout(timer); };
  }, [client, locale, normalizedQuery]);

  // Старые варианты не показываются даже до выполнения cleanup предыдущего effect.
  const current: IngredientSearchState = state.query === normalizedQuery && state.client === client && state.locale === locale
    ? state
    : { query: normalizedQuery, client, locale, choices: [], status: normalizedQuery.length < 2 ? 'idle' : 'loading', error: null };
  return current;
}
