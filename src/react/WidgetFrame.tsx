'use client';

import { useEffect, useRef } from 'react';
import { mountWidget } from '../core/mount.js';
import type { WidgetFrameProps } from './types.js';

export function WidgetFrame({
  widget, hostUrl, locale, theme, appearance, title, campaign, integrationId, className, style, onEvent,
}: WidgetFrameProps) {
  const container = useRef<HTMLDivElement>(null);
  const callback = useRef(onEvent);
  const { background, surface, text, muted, accent, border, radius } = appearance ?? {};

  useEffect(() => { callback.current = onEvent; }, [onEvent]);
  useEffect(() => {
    if (!container.current) return;
    const handle = mountWidget(container.current, {
      widget, hostUrl, locale, theme, appearance: { background, surface, text, muted, accent, border, radius }, title, campaign, integrationId,
      onEvent: (event) => callback.current?.(event),
    });
    return handle.destroy;
  }, [widget, hostUrl, locale, theme, background, surface, text, muted, accent, border, radius, title, campaign, integrationId]);

  return <div ref={container} className={className} style={style} />;
}
