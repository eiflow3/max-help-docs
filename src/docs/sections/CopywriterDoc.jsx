import React from 'react';
import { DocPage } from '../shared/DocPage';
import { ImagePlaceholder } from '../shared/ImagePlaceholder';

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
      </ul>

      <ImagePlaceholder
        title="Blog Writer widget"
        filenameSuggestion="copywriter_blog-writer-widget.png"
        description="Screenshot the Blog Writer panel with topic/title/keywords/outline fields visible."
        sourceHint="Capture source: prosperna1 UI."
      />
    </DocPage>
  );
}

