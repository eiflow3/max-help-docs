import React from 'react';
import { DocPage } from '../shared/DocPage';
import { ImagePlaceholder } from '../shared/ImagePlaceholder';
import { Callout } from '../shared/Callout';

export function SocialMarketingDoc() {
  return (
    <DocPage
      title="Max Social Marketing"
      subtitle="Social-ready campaign ideation and creative production specialist."
      badges={['Social', 'Campaign']}
    >
      <p>
        Max Social Marketing is your specialist for turning product assets into
        social media campaigns. It helps you create campaign concepts, post-ready
        creative angles, and channel-ready content direction tied to specific
        business goals.
      </p>

      {/* ── Campaign Creative ── */}
      <h3>Campaign creative ideation</h3>
      <p>
        Max Social Marketing can generate complete campaign concepts including
        hooks, captions, CTA angles, and content direction. Campaigns can be
        tailored to different goals:
      </p>
      <ul className="doc-list">
        <li>
          <strong>Awareness campaigns</strong>: Focused on reach, impressions,
          and brand visibility
        </li>
        <li>
          <strong>Sales/conversion campaigns</strong>: Focused on driving
          purchases, cart additions, and revenue
        </li>
        <li>
          <strong>Engagement campaigns</strong>: Focused on comments, shares,
          and community building
        </li>
      </ul>

      <Callout title="Goal-driven creative" variant="info">
        <p>
          When you tell Max Social Marketing your campaign goal (awareness,
          sales, engagement), it tailors the creative angles, copy tone, and CTA
          style accordingly. Be specific about your goal for best results.
        </p>
      </Callout>

      <ImagePlaceholder
        title="Campaign concept output"
        filenameSuggestion="social-marketing_campaign-concept.png"
        description="Screenshot showing Max Social Marketing generating a campaign concept with hooks, captions, and CTA angles for a product."
        bullets={[
          'Campaign goal visible',
          'Multiple creative angles listed',
          'CTA lines included',
        ]}
        sourceHint="Capture source: prosperna1 UI (chat response)."
      />

      {/* ── Post-ready creative ── */}
      <h3>Post-ready creative production</h3>
      <p>
        Max Social Marketing can produce content direction for individual social
        posts. This includes:
      </p>
      <ul className="doc-list">
        <li>Post captions with tone and voice alignment</li>
        <li>Hashtag suggestions relevant to your niche and audience</li>
        <li>Content angles (benefit-led, feature-led, lifestyle-led)</li>
        <li>Multi-variant post concepts from a single product asset</li>
      </ul>

      <ImagePlaceholder
        title="Social post variants"
        filenameSuggestion="social-marketing_post-variants.png"
        description="Screenshot showing multiple social post concept variants generated from a single product image."
        bullets={[
          'Multiple post concepts visible',
          'Captions included',
          'Different angles shown (e.g., benefit-led vs lifestyle)',
        ]}
        sourceHint="Capture source: prosperna1 UI."
      />

      {/* ── Tool leasing ── */}
      <h3>Image editing capabilities (tool leasing)</h3>
      <p>
        Max Social Marketing can borrow image editing capabilities from the
        Image Editor specialist when campaign assets need visual changes. This
        means you can:
      </p>
      <ul className="doc-list">
        <li>
          Remove backgrounds from product images before creating social
          creatives
        </li>
        <li>
          Enhance image quality for higher-impact social posts
        </li>
        <li>
          Replace backgrounds with lifestyle scenes that fit the campaign theme
        </li>
      </ul>
      <p>
        You do not need to switch agents — the Social Marketing specialist
        handles the image editing behind the scenes when it is part of the
        social workflow.
      </p>

      <Callout title="Media Library integration" variant="info">
        <p>
          All images used and generated during social marketing workflows are
          saved to your <strong>Media Library</strong>. This means edited product
          photos and campaign assets are reusable across other Max specialists
          and your store's pages.
        </p>
      </Callout>

      <ImagePlaceholder
        title="Social marketing with image edit"
        filenameSuggestion="social-marketing_image-edit-flow.png"
        description="Screenshot showing Max Social Marketing editing an image (e.g., removing background) as part of a social campaign workflow."
        bullets={[
          'Social Marketing agent active',
          'Image editing result inline',
          'Campaign context maintained',
        ]}
        sourceHint="Capture source: prosperna1 UI."
      />

      {/* ── Workflow ── */}
      <h3>Typical workflow</h3>
      <ol className="doc-steps">
        <li>Switch to Max Social Marketing from the agent dropdown.</li>
        <li>
          Attach a product image or reference the product you want to promote.
        </li>
        <li>
          Describe your campaign goal (e.g., "I want to increase sales for this
          product on Instagram").
        </li>
        <li>
          Review the campaign concepts, post variants, and creative angles Max
          generates.
        </li>
        <li>
          Ask Max to refine or iterate on specific variants before using them.
        </li>
      </ol>

      {/* ── Example prompts ── */}
      <h3>Example prompts</h3>
      <ul className="doc-list">
        <li>
          "Create a 7-day social campaign plan for this product with awareness
          and sales goals."
        </li>
        <li>
          "Turn this product image into 3 social post concepts with captions and
          CTA lines."
        </li>
        <li>
          "Give me Instagram-ready post ideas for my new skincare line —
          targeting young professionals."
        </li>
        <li>
          "Remove the background from this product photo and then create a
          social post concept using it."
        </li>
        <li>
          "What hashtags should I use for a Filipino audience interested in home
          cooking products?"
        </li>
      </ul>
    </DocPage>
  );
}
