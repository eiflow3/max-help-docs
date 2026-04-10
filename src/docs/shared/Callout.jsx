import React from 'react';

const join = (...parts) => parts.filter(Boolean).join(' ');

export function Callout({ title, children, variant = 'info', className }) {
  return (
    <aside className={join('callout', `callout--${variant}`, className)}>
      {title ? <h3 className="callout__title">{title}</h3> : null}
      <div className="callout__content">{children}</div>
    </aside>
  );
}

