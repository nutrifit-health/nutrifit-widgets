import { WidgetIcon } from './WidgetIcon';
import { MAX_INGREDIENTS } from './constants';
import { calculationErrorText } from './validation';
import type { IngredientEditorProps } from './types';

export function IngredientEditor({ id, t, items, query, search, onQueryChange, onAdd, onWeightChange, onRemove }: IngredientEditorProps) {
  const searchStatus = search.error ? calculationErrorText(search.error, t)
    : search.status === 'loading' ? t.searching
      : search.status === 'success' && !search.choices.length ? t.empty : t.searchHint;
  return <>
    <label className="nf-label" htmlFor={id + '-search'}>{t.search}</label>
    <div className="nf-search-field"><WidgetIcon name="search" />
    <input id={id + '-search'} type="search" value={query} maxLength={200}
      onChange={(event) => onQueryChange(event.target.value)}
      onKeyDown={(event) => { if (event.key === 'Enter') event.preventDefault(); }}
      aria-describedby={id + '-search-status'} autoComplete="off" />
    </div>
    <div id={id + '-search-status'} className="nf-muted" aria-live="polite">{searchStatus}</div>
    {search.choices.length > 0 && <ul className="nf-search">
      {search.choices.map((option) => <li key={option.category + ':' + option.reference}>
        <span>{option.label}<small>{t[option.category]}</small></span>
        <button type="button" disabled={items.length >= MAX_INGREDIENTS} onClick={() => onAdd(option)}
          aria-label={t.add + ': ' + option.label}><WidgetIcon name="plus" />{t.add}</button>
      </li>)}
    </ul>}
    <div className="nf-section-heading"><h3>{t.ingredients}</h3><span className="nf-count">{items.length} / {MAX_INGREDIENTS}</span></div>
    {items.length === 0 && <p className="nf-empty">{t.emptyIngredients}</p>}
    <ol className="nf-ingredients">
      {items.map((item, index) => <li key={item.rowId}>
        <span className="nf-ingredient-name"><span className="nf-row-number" aria-hidden="true">{index + 1}</span>{item.label}</span>
        <label htmlFor={id + '-' + item.rowId}>{t.grams}
          <input id={id + '-' + item.rowId} type="number" inputMode="decimal" min="0" step="any" required
            value={item.weight} onChange={(event) => onWeightChange(item.rowId, event.target.value)} />
        </label>
        <button className="nf-remove" type="button" onClick={() => onRemove(item.rowId)} aria-label={t.remove + ': ' + item.label} title={t.remove}><WidgetIcon name="remove" /></button>
      </li>)}
    </ol>
    {items.length >= MAX_INGREDIENTS && <p className="nf-notice">{t.limit}</p>}
  </>;
}
