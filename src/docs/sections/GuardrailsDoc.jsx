import React from 'react';
import {
  ShieldAlert,
  Lightbulb,
  CheckCircle2,
  History,
  Eye,
  Zap,
  Image as ImageIcon,
} from 'lucide-react';

export function GuardrailsDoc() {
  return (
    <section className="panel">
      <div className="kicker">Safety &amp; Pro-Tips</div>
      <h2>Max Guardrails</h2>
      <p>Ensure accurate and performant results by following these best practices.</p>

      <div className="guardrails">
        <div className="guardrail-item">
          <ShieldAlert className="guardrail-icon" />
          <div>
            <strong>Legacy Pages Removal</strong>
            <p className="muted">Pages built with GrapesJS (older editor) cannot be directly edited. <strong>Fix:</strong> Rebuild them as modern pages via Max Builder, or ask Max to migrate them.</p>
          </div>
        </div>
        <div className="guardrail-item">
          <Lightbulb className="guardrail-icon" style={{ color: '#3b82f6' }} />
          <div>
            <strong>Step-by-Step Focus</strong>
            <p className="muted">Work in steps: confirm the outline before generating the full draft for better precision.</p>
          </div>
        </div>
        <div className="guardrail-item">
          <History className="guardrail-icon" style={{ color: '#f59e0b' }} />
          <div>
            <strong>Catalog Sync Latency</strong>
            <p className="muted">Inventory updates may take a few seconds to reflect across all visual elements. Allow sync to complete.</p>
          </div>
        </div>
        <div className="guardrail-item">
          <CheckCircle2 className="guardrail-icon" style={{ color: '#10b981' }} />
          <div>
            <strong>Human Final Review</strong>
            <p className="muted">Always review financial settings (Pricing, Tax) and legal copy before publishing to live customers.</p>
          </div>
        </div>
        <div className="guardrail-item">
          <ShieldAlert className="guardrail-icon" style={{ color: '#ec4899' }} />
          <div>
            <strong>Plan-Gated Features</strong>
            <p className="muted">Blog Writer, SEO Meta Tags Generator, and Page Builder tools are locked on the Free plan. Max will show a plan upgrade prompt when you try to use them.</p>
          </div>
        </div>
        <div className="guardrail-item">
          <ImageIcon className="guardrail-icon" style={{ color: '#6366f1' }} />
          <div>
            <strong>Image Required for Editing</strong>
            <p className="muted">All image editing tools (background removal, quality enhancement, lighting, background replacement) require an image from your Media Library. Max will ask you to attach one if missing.</p>
          </div>
        </div>
        <div className="guardrail-item">
          <Eye className="guardrail-icon" style={{ color: '#0ea5e9' }} />
          <div>
            <strong>Charts Are On-Request</strong>
            <p className="muted">Max Insights only generates chart visualizations when you explicitly ask for one or click the "Generate Charts" button.</p>
          </div>
        </div>
        <div className="guardrail-item">
          <Zap className="guardrail-icon" style={{ color: '#f97316' }} />
          <div>
            <strong>Single-Page Editing</strong>
            <p className="muted">Max Builder enforces one page at a time. Publish or close the current page before opening another.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
