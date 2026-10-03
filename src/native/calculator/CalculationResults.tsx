import { useEffect, useRef, useState } from 'react';
import { WidgetIcon } from './WidgetIcon';
import { calculationErrorText } from './validation';
import { downloadNutritionCsv } from './export';
import type { CalculationBasis, CalculationResultsProps } from './types';

export function CalculationResults({ id, t, locale, result, client, draft, brandName }: CalculationResultsProps) {
  const [pdfBusy, setPdfBusy] = useState(false);
  const [pdfError, setPdfError] = useState<Error | null>(null);
  const pdfRequest = useRef<AbortController | null>(null);
  useEffect(
    () => () => {
      pdfRequest.current?.abort();
      pdfRequest.current = null;
    },
    [],
  );

  async function downloadPdf() {
    if (!client.downloadPdf || pdfRequest.current) return;
    const controller = new AbortController();
    pdfRequest.current = controller;
    setPdfBusy(true);
    setPdfError(null);
    try {
      const blob = await client.downloadPdf(draft.items, Number(draft.outputWeight), locale, controller.signal);
      if (controller.signal.aborted) return;
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = brandName ? 'nutrition.pdf' : 'nutrifit-nutrition.pdf';
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    } catch (cause: unknown) {
      if (!controller.signal.aborted) setPdfError(cause instanceof Error ? cause : new Error('NUTRIFIT_PDF_FAILED'));
    } finally {
      if (pdfRequest.current === controller) {
        pdfRequest.current = null;
        setPdfBusy(false);
      }
    }
  }
  const [basis, setBasis] = useState<CalculationBasis>('total');
  const format = new Intl.NumberFormat(locale, { maximumFractionDigits: 1 });
  return (
    <section aria-labelledby={id + '-results'} className='nf-results'>
      <h3 id={id + '-results'}>{t.results}</h3>
      <div aria-label={t.results} className='nf-basis' role='group'>
        <button aria-pressed={basis === 'total'} onClick={() => setBasis('total')} type='button'>
          {t.total}
        </button>
        <button aria-pressed={basis === 'per100g'} onClick={() => setBasis('per100g')} type='button'>
          {t.per100g}
        </button>
      </div>
      {result.completeness !== 'complete' && (
        <p className='nf-notice'>{result.completeness === 'unknown' ? t.unknown : t.partial}</p>
      )}
      <dl className='nf-metrics'>
        {result.metrics.map((metric) => {
          const value = basis === 'total' ? metric.total : metric.per100g;
          return (
            <div className={metric.key === 'calories' ? 'nf-metric nf-metric-energy' : 'nf-metric'} key={metric.key}>
              <dt>{t[metric.key]}</dt>
              <dd>
                {value === null ? '—' : format.format(value)}{' '}
                <small>{metric.key === 'calories' ? t.unitEnergy : t.unitMass}</small>
              </dd>
              {metric.incomplete && <small>{t.missing}</small>}
            </div>
          );
        })}
      </dl>
      <p className='nf-muted'>
        {t.checked}: <time dateTime={result.checkedAt}>{new Date(result.checkedAt).toLocaleString(locale)}</time>
      </p>
      {client.downloadPdf && (
        <button
          className='nf-download'
          disabled={pdfBusy}
          onClick={() => {
            void downloadPdf();
          }}
          type='button'
        >
          <WidgetIcon name='download' />
          {pdfBusy ? t.pdfBusy : t.pdf}
        </button>
      )}
      {pdfError && (
        <p className='nf-notice' role='alert'>
          {calculationErrorText(pdfError, t)}
        </p>
      )}
      <button className='nf-download' onClick={() => downloadNutritionCsv(result, brandName, locale)} type='button'>
        <WidgetIcon name='download' />
        {t.download}
      </button>
    </section>
  );
}
