import React from 'react';
import { DocPage } from '../shared/DocPage';
import { Callout } from '../shared/Callout';
import { ImagePlaceholder } from '../shared/ImagePlaceholder';

export function FindAgentsDoc() {
  return (
    <DocPage
      title="Where to find different agents"
      subtitle="Switch agents directly in the chat composer so Max routes your request to the right specialist."
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
    </DocPage>
  );
}

