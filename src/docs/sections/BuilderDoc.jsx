import React from 'react';
import { DocPage } from '../shared/DocPage';
import { ImagePlaceholder } from '../shared/ImagePlaceholder';
import { Callout } from '../shared/Callout';

export function BuilderDoc() {
  return (
    <DocPage
      title="Max Builder"
      subtitle="Use Max Builder for static pages, navigation/menu updates, and visual editing workflows."
      badges={['Pages', 'Menus']}
    >
      <Callout title="Help tools you’ll see in the UI" variant="info">
        <ul className="doc-list">
          <li>
            <strong>Visual Editor</strong>: click an element to edit text/style
            with AI assistance
          </li>
          <li>
            <strong>Reorder</strong>: drag sections to change storytelling flow
          </li>
          <li>
            <strong>Select Element</strong>: attach a specific section to your
            message for targeted edits
          </li>
          <li>
            <strong>Page List</strong>: open and edit an existing supported page
          </li>
        </ul>
      </Callout>

      <Callout title="Menu editing (Menu Editor mode)" variant="info">
        <ul className="doc-list">
          <li>
            Menu/navigation requests open <strong>Menu Editor</strong> from
            current menu structure.
          </li>
          <li>
            Supports add/remove/update/move menu items, link-target
            replacement, layout, logo, sticky menu, and style updates.
          </li>
          <li>
            Menu edits happen on a managed preset copy; merchant review/apply is
            still required in UI.
          </li>
        </ul>
      </Callout>

      <Callout title="Footer editing (Footer mode)" variant="info">
        <ul className="doc-list">
          <li>
            Footer requests activate footer mode first, then apply footer-only
            edits.
          </li>
          <li>
            If no footer exists, Max can generate an initial footer after
            confirmation.
          </li>
          <li>
            Footer context can use deterministic links/store details and product
            link lookup when explicitly requested.
          </li>
        </ul>
      </Callout>

      <Callout title="Legacy migration behavior" variant="info">
        <ul className="doc-list">
          <li>
            Legacy GrapesJS pages are still not directly editable in Max Builder.
          </li>
          <li>
            Migration creates a new AI-editable page version with{' '}
            <strong>-max-version</strong> in the slug/name.
          </li>
          <li>
            Max asks for approval before saving extracted theme/design memory.
          </li>
        </ul>
      </Callout>

      <Callout title="Custom page and publish behavior" variant="info">
        <ul className="doc-list">
          <li>Max Builder can open custom pages by slug when supported.</li>
          <li>
            If custom-page open is blocked, Max now returns explicit guidance
            instead of continuing with invalid state.
          </li>
          <li>
            Publish success now returns a user-facing confirmation message with
            a full live URL when available.
          </li>
          <li>
            Publish validates slugs and can create a unique slug first when a
            provided existing slug is no longer valid.
          </li>
          <li>
            Functional product-listing cards support share actions with native
            share, clipboard fallback, or disabled state when URL is missing.
          </li>
        </ul>
      </Callout>

      <ImagePlaceholder
        title="Page Builder help tools"
        filenameSuggestion="builder_help-tools-menu.png"
        description="Screenshot the Builder tools menu showing Visual Editor / Reorder / Select Element / Page List."
        sourceHint="Capture source: prosperna1 UI."
      />
    </DocPage>
  );
}
