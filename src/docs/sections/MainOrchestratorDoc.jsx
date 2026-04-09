import React from 'react';
import { DocPage } from '../shared/DocPage';
import { Callout } from '../shared/Callout';
import { ImagePlaceholder } from '../shared/ImagePlaceholder';

export function MainOrchestratorDoc() {
  return (
    <DocPage
      title="Prosperna Main Orchestrator (Max)"
      subtitle="Handles branding and image workflows directly, and routes you to specialists."
      badges={['Orchestrator']}
    >
      <h3>Direct capabilities</h3>
      <ul className="doc-list">
        <li>Remove image backgrounds</li>
        <li>Enhance image quality</li>
        <li>Adjust image lighting using style presets</li>
        <li>Replace image backgrounds with generated or reference scenes</li>
        <li>Generate a base logo</li>
        <li>Generate favicon and wordmark variations</li>
        <li>Apply selected logo and favicon to store branding</li>
      </ul>

      <Callout title="Routing responsibilities" variant="info">
        <ul className="doc-list">
          <li>Analytics and performance coaching → Max Insights</li>
          <li>Product catalog, SEO meta, product descriptions → Merchandiser</li>
          <li>Blog drafting workflow → Copywriter</li>
          <li>Static pages and menu editing → Builder</li>
        </ul>
      </Callout>

      <ImagePlaceholder
        title="Media Library attachment (for image tools)"
        filenameSuggestion="orchestrator_media-library-attach.png"
        description="Screenshot the Media Library modal and an image selected/attached to the Max message composer."
        bullets={['Media Library modal visible', 'Selected image highlighted', 'Composer shows attachment']}
        sourceHint="Capture source: prosperna1 UI."
      />
    </DocPage>
  );
}

