import React from 'react';

export function SelectControl({ children, ...props }) {
  return (
    <span className="select-control">
      <select {...props}>{children}</select>
      <svg className="select-chevron" aria-hidden="true" focusable="false" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="m2 5 6 6 6-6" />
      </svg>
    </span>
  );
}
