import { useEffect, useRef, useState } from 'react';
import { WidgetIcon } from './WidgetIcon';
import { calculationErrorText } from './validation';
import { downloadNutritionCsv } from './export';
import type { CalculationBasis, CalculationResultsProps } from './types';

export function CalculationResults({ id, t, locale, result, client, draft, brandName }: CalculationResultsProps) {
  const [pdfBusy, setPdfBusy] = useState(false);
  const [pdfError, setPdfError] = useState<Error | null>(null);
  const pdfRequest = useRef<AbortController | null>(null);
  useEffect(() => {
    setPdfError(null); setPdfBusy(false);
    return () => { pdfRequest.current?.abort(); pdfRequest.current = null; };
  }, [result, client, locale]);
  async function downloadPdf() {
    if (!client.downloadPdf || pdfRequest.current) return;
    const controller = new AbortController(); pdfRequest.current = controller;
    setPdfBusy(true); setPdfError(null);
    try {
      const blob = await client.downloadPdf(draft.items, Number(draft.outputWeight), locale, controller.signal);
      if (controller.signal.aborted) return;
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a'); link.href = url; link.download = brandName ? 'nutrition.pdf' : 'nutrifit-nutrition.pdf';
      document.body.appendChild(link); link.click(); link.remove();
      window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    } catch (cause: unknown) {
      if (!controller.signal.aborted) setPdfError(cause instanceof Error ? cause : new Error('NUTRIFIT_PDF_FAILED'));
    } finally {
      if (pdfRequest.current === controller) { pdfRequest.current = null; setPdfBusy(false); }
    }
  }
  const [basis, setBasis] = useState<CalculationBasis>('total');
  const format = new Intl.NumberFormat(locale, { maximumFractionDigits: 1 });
  return <section className="nf-results" aria-labelledby={id + '-results'}>
    <h3 id={id + '-results'}>{t.results}</h3>
    <div className="nf-basis" role="group" aria-label={t.results}>
      <button type="button" aria-pressed={basis === 'total'} onClick={() => setBasis('total')}>{t.total}</button>
      <button type="button" aria-pressed={basis === 'per100g'} onClick={() => setBasis('per100g')}>{t.per100g}</button>
    </div>
    {result.completeness !== 'complete' && <p className="nf-notice">{result.completeness === 'unknown' ? t.unknown : t.partial}</p>}
    <dl className="nf-metrics">
      {result.metrics.map((metric) => {
        const value = basis === 'total' ? metric.total : metric.per100g;
        return <div key={metric.key} className={metric.key === 'calories' ? 'nf-metric nf-metric-energy' : 'nf-metric'}><dt>{t[metric.key]}</dt>
          <dd>{value === null ? '—' : format.format(value)} <small>{metric.key === 'calories' ? 'kcal' : 'g'}</small></dd>
          {metric.incomplete && <small>{t.missing}</small>}
        </div>;
      })}
    </dl>
    <p className="nf-muted">{t.checked}: <time dateTime={result.checkedAt}>{new Date(result.checkedAt).toLocaleString(locale)}</time></p>
    {client.downloadPdf && <button className="nf-download" type="button" disabled={pdfBusy} onClick={() => { void downloadPdf(); }}>
      <WidgetIcon name="download" />{pdfBusy ? t.pdfBusy : t.pdf}
    </button>}
    {pdfError && <p role="alert" className="nf-notice">{calculationErrorText(pdfError, t)}</p>}
    <button className="nf-download" type="button" onClick={() => downloadNutritionCsv(result, brandName, locale)}><WidgetIcon name="download" />{t.download}</button>
  </section>;
}
