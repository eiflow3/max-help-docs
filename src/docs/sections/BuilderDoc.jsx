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

      <ImagePlaceholder
        title="Page Builder help tools"
        filenameSuggestion="builder_help-tools-menu.png"
        description="Screenshot the Builder tools menu showing Visual Editor / Reorder / Select Element / Page List."
        sourceHint="Capture source: prosperna1 UI."
      />
    </DocPage>
  );
}

