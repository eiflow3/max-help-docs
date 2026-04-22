import React from 'react';
import { DocPage } from '../shared/DocPage';
import { Callout } from '../shared/Callout';
import imageAttachment from '../../assets/image-attachment.png';

export function MainOrchestratorDoc() {
  return (
    <DocPage
      title="Prosperna Main Orchestrator (Max)"
      subtitle="Coordinates intent routing and branding setup, then delegates to specialists."
      badges={['Orchestrator']}
    >
      <h3>Direct capabilities</h3>
      <ul className="doc-list">
        <li>Classify request intent and route to the correct specialist</li>
        <li>Carry context between specialist handoffs in one conversation</li>
        <li>Analyze attached images for visual context and product cues</li>
        <li>Generate a base logo</li>
        <li>Generate favicon and wordmark variations</li>
        <li>Apply selected logo and favicon to store branding</li>
      </ul>

      <Callout title="Routing responsibilities" variant="info">
        <ul className="doc-list">
          <li>Image editing and cleanup workflows → Max Image Editor</li>
          <li>Social marketing creative workflows → Max Social Marketing</li>
          <li>Analytics and performance coaching → Max Insights</li>
          <li>Product catalog, SEO meta, product descriptions → Merchandiser</li>
          <li>Blog drafting workflow → Copywriter</li>
          <li>Static pages and menu editing → Builder</li>
        </ul>
      </Callout>

      <div className="doc-image-container">
        <img src={imageAttachment} alt="Composer with attached image and tools menu" className="doc-image" />
        <p className="muted" style={{ fontSize: '0.85rem', marginTop: '0.75rem' }}>
          Attached-image reference: preview thumbnail, filename chip, tools menu,
          and active agent chip in one view.
        </p>
      </div>
    </DocPage>
  );
}
