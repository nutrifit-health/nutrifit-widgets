'use client';

import { useEffect, useRef } from 'react';
import { mountWidget } from '../core/mount.js';
import type { WidgetFrameProps } from './types.js';

export function WidgetFrame({
  widget, hostUrl, locale, theme, title, campaign, className, style, onEvent,
}: WidgetFrameProps) {
  const container = useRef<HTMLDivElement>(null);
  const callback = useRef(onEvent);

  useEffect(() => { callback.current = onEvent; }, [onEvent]);
  useEffect(() => {
    if (!container.current) return;
    const handle = mountWidget(container.current, {
      widget, hostUrl, locale, theme, title, campaign,
      onEvent: (event) => callback.current?.(event),
    });
    return handle.destroy;
  }, [widget, hostUrl, locale, theme, title, campaign]);

  return <div ref={container} className={className} style={style} />;
}
