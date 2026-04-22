import React from 'react';
import { DocPage } from '../shared/DocPage';
import { Callout } from '../shared/Callout';
import { ImagePlaceholder } from '../shared/ImagePlaceholder';

export function OverviewDoc() {
  return (
    <DocPage
      title="Max at a glance"
      subtitle="Max is Prosperna’s AI copilot for starting, running, and growing your business."
      badges={['Merchant-facing', 'Prosperna']}
    >
      <div className="quick-grid">
        <article>
          <h3>Branding and media setup</h3>
          <p>
            Use <strong>Main Orchestrator</strong> to set intent and keep context.
            It now routes image editing to <strong>Max Image Editor</strong> and
            social content tasks to <strong>Max Social Marketing</strong>, while
            still handling logo generation and branding application.
          </p>
        </article>
        <article>
          <h3>Analytics and performance coaching</h3>
          <p>
            Use <strong>Max Insights</strong> when you want answers grounded in
            your store’s numbers: orders, traffic, leads, and action plans.
          </p>
        </article>
        <article>
          <h3>Products, blogs, pages</h3>
          <p>
            Use specialized agents for deep workflows: <strong>Merchandiser</strong>{' '}
            for products, <strong>Copywriter</strong> for blogs, and{' '}
            <strong>Builder</strong> for pages/menus.
          </p>
        </article>
      </div>

      <Callout title="High-signal starter prompts" variant="info">
        <ul className="doc-list">
          <li>“Summarize this week’s order trends and suggest next actions.”</li>
          <li>“Where is my website traffic coming from? Last 30 days.”</li>
          <li>“Show me my top selling products this month.”</li>
        </ul>
      </Callout>

      <ImagePlaceholder
        title="MaxAI landing (Prosperna1)"
        filenameSuggestion="max-overview_maxai-landing.png"
        description="Screenshot the Max AI page in Prosperna1 (Dashboard → MaxAI) showing the welcome header and the Tools & Capabilities section."
        bullets={[
          'Left nav + page title visible',
          'Welcome tagline visible',
          'At least 3 capability cards visible',
        ]}
        sourceHint="Capture source: prosperna1 UI."
      />
    </DocPage>
  );
}
