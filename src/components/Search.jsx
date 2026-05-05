import React, { useState, useRef, useEffect } from 'react';
import { Search as SearchIcon } from 'lucide-react';

export function Search({ tabs, onNavigate }) {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const results = query.trim()
    ? tabs.filter((t) => {
        const q = query.toLowerCase();
        return (
          t.label.toLowerCase().includes(q) ||
          (t.keywords || []).some((k) => k.toLowerCase().includes(q))
        );
      })
    : [];

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleSelect = (id) => {
    onNavigate(id);
    setQuery('');
    setOpen(false);
  };

  return (
    <div className="search-wrap" ref={ref}>
      <div className="search-input-row">
        <SearchIcon size={14} className="search-icon" />
        <input
          className="search-input"
          placeholder="Search docs…"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
        />
      </div>
      {open && results.length > 0 && (
        <ul className="search-dropdown">
          {results.map((t) => (
            <li key={t.id}>
              <button className="search-result" onClick={() => handleSelect(t.id)}>
                {t.iconEl}
                <span>{t.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
