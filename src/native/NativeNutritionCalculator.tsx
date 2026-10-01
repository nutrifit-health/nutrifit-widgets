'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import { NutritionCalculator } from './calculator/NutritionCalculator';
import { translations } from './calculator/i18n';
import { createNativeClient } from './client';
import type { NativeNutritionCalculatorProps } from './types';
import './calculator/styles.css';

const retryLabels = { en: 'Retry', ru: 'Повторить', es: 'Reintentar', uk: 'Повторити', kk: 'Қайталау', uz: 'Qayta urinish' };

export function NativeNutritionCalculator({ getSession, apiOrigin = 'https://api.nutrifit.health', locale = 'en', theme = 'light', className, onCalculated, onError }: NativeNutritionCalculatorProps) {
  const provider = useRef(getSession); const errorCallback = useRef(onError);
  const [brand, setBrand] = useState<string | null>(null); const [ready, setReady] = useState(false); const [failed, setFailed] = useState(false);
  const [retry, setRetry] = useState(0);
  useEffect(() => { provider.current = getSession; errorCallback.current = onError; }, [getSession, onError]);
  const runtime = useMemo(() => createNativeClient(apiOrigin, signal => provider.current(signal), session => setBrand(session.brandName)), [apiOrigin, retry]);
  useEffect(() => {
    const controller = new AbortController(); setReady(false); setFailed(false);
    void runtime.connect(controller.signal).then(() => { if (!controller.signal.aborted) setReady(true); }).catch((cause: unknown) => {
      if (controller.signal.aborted) return;
      setFailed(true); errorCallback.current?.(cause instanceof Error ? cause : new Error('NUTRIFIT_SESSION_FAILED'));
    });
    return () => controller.abort();
  }, [runtime]);
  if (!ready) return <section className="nf-widget" data-theme={theme} lang={locale}>
    <p role={failed ? 'alert' : 'status'}>{failed ? translations[locale].error : translations[locale].searching}</p>
    {failed && <button type="button" onClick={() => setRetry(value => value + 1)}>{retryLabels[locale]}</button>}
  </section>;
  return <NutritionCalculator client={runtime.client} locale={locale} theme={theme} className={className}
    brandName={brand ?? undefined} showContinue={!brand} onCalculated={onCalculated} onError={onError} />;
}
