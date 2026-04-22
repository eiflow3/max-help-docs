import React from 'react';
import { DocPage } from '../shared/DocPage';
import { ImagePlaceholder } from '../shared/ImagePlaceholder';
import { Callout } from '../shared/Callout';
import imageAttachment from '../../assets/image-attachment.png';

export function CopywriterDoc() {
  return (
    <DocPage
      title="Max Copywriter"
      subtitle="Best for turning a blog idea into an SEO-aware draft you can publish."
      badges={['Blog']}
    >
      <h3>What you can do</h3>
      <ul className="doc-list">
        <li>Topic ideas, titles, and structure</li>
        <li>SEO keywords and outline before writing</li>
        <li>Full blog draft generation</li>
        <li>Refinements aligned to Blog Writer fields</li>
        <li>Direct widget field updates (no manual copy-paste required)</li>
      </ul>

      <Callout title="Post-generation edits" variant="info">
        When revising title, body, or SEO text after generation, Max applies
        updates directly to Blog Writer widget fields.
      </Callout>

      <Callout title="Image reference usage" variant="info">
        Reuse the shared attach-image screenshot in this section to show that
        users can attach a visual and point out what they want before asking for
        blog copy refinements.
      </Callout>

      <div className="doc-image-container">
        <img src={imageAttachment} alt="Image attachment before copy refinement request" className="doc-image" />
        <p className="muted" style={{ fontSize: '0.85rem', marginTop: '0.75rem' }}>
          Attach first, then ask Copywriter what to rewrite based on what you
          pointed out in the image.
        </p>
      </div>

      <ImagePlaceholder
        title="Blog Writer widget"
        filenameSuggestion="copywriter_blog-writer-widget.png"
        description="Screenshot the Blog Writer panel with topic/title/keywords/outline fields visible."
        sourceHint="Capture source: prosperna1 UI."
      />
    </DocPage>
  );
}
