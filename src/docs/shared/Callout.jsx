import React from 'react';

const join = (...parts) => parts.filter(Boolean).join(' ');

const variantLabel = {
  tip: 'Tip',
  info: 'Note',
  warning: 'Warning',
  success: 'Done',
};

export function Callout({ title, children, variant = 'tip', className }) {
  return (
    <aside className={join('callout', `callout--${variant}`, className)}>
      <div className="callout__label">{variantLabel[variant] ?? variant}</div>
      {title ? <h3 className="callout__title">{title}</h3> : null}
      <div className="callout__content">{children}</div>
    </aside>
  );
}
