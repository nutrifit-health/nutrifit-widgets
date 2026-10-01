import type { WidgetIconProps } from './types';

const paths = {
  search: <><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 4 4" /></>,
  plus: <path d="M12 5v14M5 12h14" />,
  remove: <><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13M10 10v7M14 10v7" /></>,
  download: <><path d="M12 3v12m-5-5 5 5 5-5M5 16v4h14v-4" /></>,
  arrow: <path d="M6 18 18 6M6 6h12v12" />,
};

export function WidgetIcon({ name }: WidgetIconProps) {
  return <svg className="nf-icon" width="18" height="18" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true" focusable="false">{paths[name]}</svg>;
}
