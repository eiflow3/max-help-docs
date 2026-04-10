import React from 'react';
import { DocPage } from '../shared/DocPage';
import { ImagePlaceholder } from '../shared/ImagePlaceholder';

export function OnboardingDoc() {
  return (
    <DocPage
      title="Onboarding Assistant"
      subtitle="Best for first-time store setup and launch readiness."
      badges={['Onboarding']}
    >
      <ul className="doc-list">
        <li>Store name, subdomain, slogan, and industry setup</li>
        <li>Logo generation and branding completion</li>
        <li>Initial Home, About Us, and Contact Us page setup</li>
      </ul>

      <ImagePlaceholder
        title="Onboarding flow (entry)"
        filenameSuggestion="onboarding_entry.png"
        description="Screenshot the onboarding entry point where the merchant starts branding setup."
        sourceHint="Capture source: prosperna1 UI."
      />
    </DocPage>
  );
}

