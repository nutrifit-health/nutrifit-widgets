'use client';

import { useId, useState } from 'react';
import { WidgetIcon } from './WidgetIcon';
import { NutriFitLogo } from './NutriFitLogo';
import { translations } from './i18n';
import { buildContinueUrl } from './handoff';
import { calculationErrorText } from './validation';
import { useNutritionCalculator } from './useNutritionCalculator';
import { useIngredientSearch } from './useIngredientSearch';
import { IngredientEditor } from './IngredientEditor';
import { CalculationResults } from './CalculationResults';
import type { NutritionCalculatorProps } from './types';

export function NutritionCalculator({
  locale = 'en', theme = 'light', brandName, client, initialDraft,
  sourceSite = '', campaign, showContinue = true, className = '', onCalculated, onError,
}: NutritionCalculatorProps) {
  const id = useId();
  const t = translations[locale];
  const [query, setQuery] = useState('');
  const calculator = useNutritionCalculator({ client, locale, initialDraft, onCalculated, onError });
  const search = useIngredientSearch({ client, locale, query, onError });
  const continuation = showContinue && calculator.canCalculate
    ? buildContinueUrl(calculator.draft, locale, sourceSite, campaign) : null;

  return <section className={`nf-widget ${className}`} data-theme={theme} lang={locale} aria-labelledby={id + '-title'}>
    <header className="nf-header">
      {brandName ? <span className="nf-brand">{brandName}</span> : <a href="https://nutrifit.health/?utm_source=nutrifit_widget&utm_medium=referral" target="_blank" rel="noopener noreferrer" className="nf-brand"><NutriFitLogo theme={theme} /></a>}
      <h2 id={id + '-title'}>{t.title}</h2><p>{t.intro}</p>
    </header>
    <form onSubmit={(event) => { event.preventDefault(); void calculator.calculate(); }}>
      <IngredientEditor id={id} t={t} items={calculator.draft.items} query={query} search={search}
        onQueryChange={setQuery} onAdd={(option) => { calculator.add(option); setQuery(''); }}
        onWeightChange={calculator.changeWeight} onRemove={calculator.remove} />
      <label className="nf-label" htmlFor={id + '-output'}>{t.output}</label>
      <input id={id + '-output'} type="number" inputMode="decimal" min="0" step="any" required
        value={calculator.draft.outputWeight} onChange={(event) => calculator.changeOutputWeight(event.target.value)}
        aria-describedby={id + '-output-hint'} />
      <p id={id + '-output-hint'} className="nf-muted">{t.outputHint}</p>
      <button className="nf-primary" type="submit" disabled={!calculator.canCalculate || calculator.busy}>{calculator.busy ? t.calculating : t.calculate}</button>
      {calculator.error && <p role="alert" className="nf-notice">{calculationErrorText(calculator.error, t)}</p>}
    </form>
    <div aria-live="polite" aria-busy={calculator.busy}>
      {calculator.result && <CalculationResults id={id} t={t} locale={locale} result={calculator.result} client={client} draft={calculator.draft} brandName={brandName} />}
    </div>
    <footer className="nf-footer">
      <p className="nf-muted">{brandName ? t.whiteSource : t.source}</p>
      {continuation && <>
        <a className="nf-continue" target="_blank" rel="noopener noreferrer" href={continuation}>{t.open}<WidgetIcon name="arrow" /></a>
        <p className="nf-muted">{t.continueHint}</p>
      </>}
      {showContinue && calculator.canCalculate && !continuation && <p className="nf-muted">{t.transferTooLarge}</p>}
      {!brandName && <a className="nf-integration" target="_blank" rel="noopener noreferrer"
        href="https://nutrifit.health/widgets/integrations?utm_source=nutrifit_widget&utm_medium=referral">{t.integrate}</a>}
    </footer>
  </section>;
}
