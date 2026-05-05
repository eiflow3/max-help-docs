import React from 'react';

const join = (...parts) => parts.filter(Boolean).join(' ');

export function DocPage({
  title,
  subtitle,
  children,
  className,
  footer,
  badges = [],
}) {
  return (
    <section className={join('doc-page', className)}>
      <header className="doc-page__header">
        <div className="doc-page__titleRow">
          <h2 className="doc-page__title">{title}</h2>
          {badges?.length ? (
            <div className="doc-page__badges" aria-label="Badges">
              {badges.map((badge) => (
                <span key={badge} className="doc-badge">
                  {badge}
                </span>
              ))}
            </div>
          ) : null}
        </div>
        {subtitle ? <p className="doc-page__subtitle muted">{subtitle}</p> : null}
      </header>

      <div className="doc-page__content">{children}</div>

      {footer ? <footer className="doc-page__footer muted">{footer}</footer> : null}
    </section>
  );
}

