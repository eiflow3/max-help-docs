import React from 'react';
import { DocPage } from '../shared/DocPage';
import { Callout } from '../shared/Callout';
import { ImagePlaceholder } from '../shared/ImagePlaceholder';
import imageAttachment from '../../assets/image-attachment.png';

export function FindAgentsDoc() {
  return (
    <DocPage
      title="Where to find different agents"
      subtitle="Switch agents and use composer tools so Max routes requests with the right context."
      badges={['UI']}
    >
      <ol className="doc-steps">
        <li>Open Max AI chat.</li>
        <li>Look at the bottom-left of the message composer.</li>
        <li>Click the current agent chip (usually labeled “Max”).</li>
        <li>Select a specialist from the dropdown.</li>
      </ol>

      <Callout title="Agents you will usually see" variant="info">
        <div className="chips">
          <span>Max (Main Orchestrator)</span>
          <span>Max Image Editor</span>
          <span>Max Social Marketing</span>
          <span>Max Insights</span>
          <span>Max Copywriter</span>
          <span>Max Builder</span>
          <span>Max Merchandiser</span>
        </div>
      </Callout>

      <ImagePlaceholder
        title="Agent switcher dropdown"
        filenameSuggestion="max-insights_agent-switcher.png"
        description="Screenshot the agent switcher dropdown with Max Insights highlighted/selected."
        bullets={['Agent chip is visible', 'Dropdown list is open', 'Max Insights row visible']}
        sourceHint="Capture source: prosperna1 UI."
      />

      <div className="doc-image-container">
        <img src={imageAttachment} alt="Attachment preview and quick tools menu" className="doc-image" />
        <p className="muted" style={{ fontSize: '0.85rem', marginTop: '0.75rem' }}>
          This view also shows where to open quick tools and confirm the active
          agent chip before sending your message.
        </p>
      </div>
    </DocPage>
  );
}
