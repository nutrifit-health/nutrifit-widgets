'use client';

import { useId, useState } from 'react';
import type { CSSProperties } from 'react';
import { appearanceStyle } from '../../core/appearance.js';
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
  locale = 'en',
  theme = 'light',
  appearance,
  brandName,
  client,
  initialDraft,
  sourceSite = '',
  campaign,
  showContinue = true,
  className = '',
  onCalculated,
  onError,
}: NutritionCalculatorProps) {
  const id = useId();
  const t = translations[locale];
  const [query, setQuery] = useState('');
  const calculator = useNutritionCalculator({ client, locale, initialDraft, onCalculated, onError });
  const search = useIngredientSearch({ client, locale, query, onError });
  const continuation =
    showContinue && calculator.canCalculate ? buildContinueUrl(calculator.draft, locale, sourceSite, campaign) : null;

  return (
    <section
      aria-labelledby={id + '-title'}
      className={`nf-widget ${className}`}
      data-theme={theme}
      lang={locale}
      style={appearanceStyle(appearance) as CSSProperties}
    >
      <header className='nf-header'>
        {brandName ? (
          <span className='nf-brand'>{brandName}</span>
        ) : (
          <a
            className='nf-brand'
            href='https://nutrifit.health/?utm_source=nutrifit_widget&utm_medium=referral'
            rel='noopener noreferrer'
            target='_blank'
          >
            <NutriFitLogo theme={theme} />
          </a>
        )}
        <h2 id={id + '-title'}>{t.title}</h2>
        <p>{t.intro}</p>
      </header>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          void calculator.calculate();
        }}
      >
        <IngredientEditor
          id={id}
          items={calculator.draft.items}
          onAdd={(option) => {
            calculator.add(option);
            setQuery('');
          }}
          onQueryChange={setQuery}
          onRemove={calculator.remove}
          onWeightChange={calculator.changeWeight}
          query={query}
          search={search}
          t={t}
        />
        <label className='nf-label' htmlFor={id + '-output'}>
          {t.output}
        </label>
        <input
          aria-describedby={id + '-output-hint'}
          id={id + '-output'}
          inputMode='decimal'
          min='0'
          onChange={(event) => calculator.changeOutputWeight(event.target.value)}
          required
          step='any'
          type='number'
          value={calculator.draft.outputWeight}
        />
        <p className='nf-muted' id={id + '-output-hint'}>
          {t.outputHint}
        </p>
        <button className='nf-primary' disabled={!calculator.canCalculate || calculator.busy} type='submit'>
          {calculator.busy ? t.calculating : t.calculate}
        </button>
        {calculator.error && (
          <p className='nf-notice' role='alert'>
            {calculationErrorText(calculator.error, t)}
          </p>
        )}
      </form>
      <div aria-busy={calculator.busy} aria-live='polite'>
        {calculator.result && (
          <CalculationResults
            brandName={brandName}
            client={client}
            draft={calculator.draft}
            id={id}
            key={locale + calculator.result.checkedAt}
            locale={locale}
            result={calculator.result}
            t={t}
          />
        )}
      </div>
      <footer className='nf-footer'>
        <p className='nf-muted'>{brandName ? t.whiteSource : t.source}</p>
        {continuation && (
          <>
            <a className='nf-continue' href={continuation} rel='noopener noreferrer' target='_blank'>
              {t.open}
              <WidgetIcon name='arrow' />
            </a>
            <p className='nf-muted'>{t.continueHint}</p>
          </>
        )}
        {showContinue && calculator.canCalculate && !continuation && <p className='nf-muted'>{t.transferTooLarge}</p>}
        {!brandName && (
          <a
            className='nf-integration'
            href='https://nutrifit.health/widgets/integrations?utm_source=nutrifit_widget&utm_medium=referral'
            rel='noopener noreferrer'
            target='_blank'
          >
            {t.integrate}
          </a>
        )}
      </footer>
    </section>
  );
}
