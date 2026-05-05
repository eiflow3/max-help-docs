import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Search } from './Search';
import maxLogo from '../assets/max-logo.png';

const groups = [
  {
    label: 'Getting Started',
    ids: ['overview', 'find-agents', 'onboarding'],
  },
  {
    label: 'AI Agents',
    ids: ['max', 'image-editor', 'social-marketing', 'merchandiser', 'copywriter', 'builder', 'insights'],
  },
];

const bottomIds = ['guardrails'];

function NavItem({ tab, active, onClick }) {
  return (
    <li>
      <button
        className={`sidebar-link ${active ? 'active' : ''}`}
        onClick={onClick}
      >
        <span className="sidebar-link__icon">{tab.iconEl}</span>
        <span className="sidebar-link__label">{tab.label}</span>
      </button>
    </li>
  );
}

function SidebarContent({ tabs, activeTab, setActiveTab, onClose }) {
  const tabMap = Object.fromEntries(tabs.map((t) => [t.id, t]));

  const handleNav = (id) => {
    setActiveTab(id);
    onClose?.();
  };

  return (
    <div className="sidebar-inner">
      <div className="sidebar-header">
        <img src={maxLogo} alt="Max" className="sidebar-logo" />
        <div>
          <div className="sidebar-brand">Max</div>
          <div className="sidebar-tagline">Help &amp; Documentation</div>
        </div>
        {onClose && (
          <button className="sidebar-close" onClick={onClose} aria-label="Close menu">
            <X size={18} />
          </button>
        )}
      </div>

      <div className="sidebar-search">
        <Search tabs={tabs} onNavigate={handleNav} />
      </div>

      <nav className="sidebar-nav">
        {groups.map((group) => {
          const groupTabs = group.ids.map((id) => tabMap[id]).filter(Boolean);
          if (!groupTabs.length) return null;
          return (
            <div key={group.label} className="sidebar-group">
              <div className="sidebar-group__label">{group.label}</div>
              <ul className="sidebar-group__list">
                {groupTabs.map((tab) => (
                  <NavItem
                    key={tab.id}
                    tab={tab}
                    active={activeTab === tab.id}
                    onClick={() => handleNav(tab.id)}
                  />
                ))}
              </ul>
            </div>
          );
        })}
      </nav>

      <div className="sidebar-bottom">
        <ul className="sidebar-group__list">
          {bottomIds.map((id) => {
            const tab = tabMap[id];
            if (!tab) return null;
            return (
              <NavItem
                key={tab.id}
                tab={tab}
                active={activeTab === tab.id}
                onClick={() => handleNav(tab.id)}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export function Sidebar({ tabs, activeTab, setActiveTab }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="sidebar sidebar--desktop">
        <SidebarContent tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      </aside>

      {/* Mobile toggle button */}
      <button
        className="sidebar-hamburger"
        onClick={() => setMobileOpen(true)}
        aria-label="Open menu"
      >
        <Menu size={20} />
      </button>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="sidebar-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              className="sidebar sidebar--mobile"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.25 }}
            >
              <SidebarContent
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                onClose={() => setMobileOpen(false)}
              />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
