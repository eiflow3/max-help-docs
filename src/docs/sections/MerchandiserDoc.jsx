import React from 'react';
import { DocPage } from '../shared/DocPage';
import { ImagePlaceholder } from '../shared/ImagePlaceholder';

export function MerchandiserDoc() {
  return (
    <DocPage
      title="Max Merchandiser"
      subtitle="Best for product listing and catalog optimization."
      badges={['Product']}
    >
      <ul className="doc-list">
        <li>Create product entries</li>
        <li>Improve product descriptions</li>
        <li>Generate SEO titles and meta descriptions</li>
        <li>Update pricing, stock, and product media</li>
      </ul>

      <ImagePlaceholder
        title="Product list widget"
        filenameSuggestion="merchandiser_product-list-widget.png"
        description="Screenshot the MaxAI side panel showing Product List open, with at least one product selectable."
        sourceHint="Capture source: prosperna1 UI."
      />
    </DocPage>
  );
}

