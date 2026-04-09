import React from 'react';

const join = (...parts) => parts.filter(Boolean).join(' ');

export function ImagePlaceholder({
  filenameSuggestion,
  title,
  description,
  bullets = [],
  sourceHint,
  className,
}) {
  return (
    <figure className={join('img-ph', className)}>
      <div className="img-ph__frame" role="img" aria-label={title || 'Screenshot placeholder'}>
        <div className="img-ph__label">
          <strong>{title || 'Screenshot placeholder'}</strong>
          {filenameSuggestion ? (
            <span className="img-ph__filename">{filenameSuggestion}</span>
          ) : null}
        </div>
        <div className="img-ph__body">
          {description ? <p className="img-ph__desc">{description}</p> : null}
          {bullets?.length ? (
            <ul className="img-ph__bullets">
              {bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          ) : null}
          {sourceHint ? <p className="img-ph__hint muted">{sourceHint}</p> : null}
        </div>
      </div>
    </figure>
  );
}

