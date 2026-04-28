import React from 'react';
import { DocPage } from '../shared/DocPage';
import { Callout } from '../shared/Callout';
import { ImagePlaceholder } from '../shared/ImagePlaceholder';
import { InlineCode } from '../shared/InlineCode';
import imageAttachment from '../../assets/image-attachment.png';
import agentsMenu from '../../assets/max-agents-menu.png';
import mediaLibraryMenu from '../../assets/max-media-library-dropdown.png';

export function MainOrchestratorDoc() {
  return (
    <DocPage
      title="Prosperna Main Orchestrator (Max)"
      subtitle="Coordinates intent routing and branding setup, then delegates to specialists."
      badges={['Orchestrator']}
    >
      <p>
        The Main Orchestrator is the default agent you land on when you open Max
        AI. It manages <strong>routing</strong> (sending your request to the
        right specialist), <strong>shared context</strong> (carrying information
        across handoffs), and <strong>branding/image workflows</strong> that it
        executes directly.
      </p>

      <div className="doc-image-container">
        <img src={agentsMenu} alt="Agent Switcher" className="doc-image" />
        <p className="muted" style={{ fontSize: '0.85rem', marginTop: '0.75rem' }}>Switch specialists directly in the chat input area.</p>
      </div>

      {/* ── Direct capabilities ── */}
      <h3>Direct capabilities (what the Orchestrator does itself)</h3>
      <p>
        These are the tools the Orchestrator executes directly — it does not
        delegate these to any sub-agent:
      </p>

      <h4>Logo and branding</h4>
      <ul className="doc-list">
        <li>
          <strong>Generate a base logo</strong> — Max collects your brand
          preferences (offerings, style type, style approach, primary/secondary
          colors, accent colors, font preferences, and trend direction), then
          generates a logo using your store name and slogan from context.
        </li>
        <li>
          <strong>Generate favicon and wordmark variations</strong> — After a
          base logo exists, Max can produce a favicon (small square icon) and a
          wordmark (text-only) variation from it.
        </li>
        <li>
          <strong>Apply logo and favicon to store branding</strong> — Once you
          confirm your choices, Max updates your store's logo and favicon in one
          step. Max will only apply when you explicitly say "yes" — until then,
          assets stay in your Media Library.
        </li>
      </ul>

      <Callout title="Logo generation flow" variant="info">
        <p>Before generating, Max asks a few quick questions to understand your
          preferences:</p>
        <ul className="doc-list">
          <li>Brand offerings / products</li>
          <li>Logo style type (vertical or horizontal)</li>
          <li>
            Style approach (minimalist/flat, vintage/retro, geometric/techy,
            3d/gradient, line art/outline, typography play)
          </li>
          <li>Primary color, secondary colors</li>
          <li>Optional: accent colors, font preferences, trend preference
            (timeless vs trendy)
          </li>
        </ul>
      </Callout>

      <ImagePlaceholder
        title="Logo generation conversation"
        filenameSuggestion="orchestrator_logo-generation.png"
        description="Screenshot showing the logo generation flow — Max asking brand preference questions and then displaying the generated logo."
        bullets={[
          'Max asking for brand offerings or style',
          'Generated logo visible in response',
          'Media Library save confirmation',
        ]}
        sourceHint="Capture source: prosperna1 UI."
      />

      <ImagePlaceholder
        title="Favicon and wordmark variations"
        filenameSuggestion="orchestrator_logo-variations.png"
        description="Screenshot showing favicon and wordmark variations generated from a base logo."
        bullets={[
          'Base logo reference visible',
          'Favicon variation visible',
          'Wordmark variation visible',
        ]}
        sourceHint="Capture source: prosperna1 UI."
      />

      <ImagePlaceholder
        title="Branding applied confirmation"
        filenameSuggestion="orchestrator_branding-applied.png"
        description="Screenshot showing Max confirming that the logo and favicon have been applied to the store branding."
        bullets={[
          'Success message visible',
          'Applied logo/favicon referenced',
        ]}
        sourceHint="Capture source: prosperna1 UI."
      />

      <h4>Image editing tools</h4>
      <p>
        The Orchestrator also has direct access to image editing capabilities.
        These same tools are available to the dedicated{' '}
        <strong>Max Image Editor</strong> specialist:
      </p>
      <ul className="doc-list">
        <li>
          <strong>Background removal</strong> — Remove backgrounds from product
          or brand images.
        </li>
        <li>
          <strong>Image quality enhancement</strong> — Improve sharpness,
          clarity, and detail.
        </li>
        <li>
          <strong>Lighting adjustment</strong> — Apply professional lighting
          styles (warm, cool, studio, etc.).
        </li>
        <li>
          <strong>Background replacement</strong> — Replace backgrounds with
          generated scenes or reference images.
        </li>
      </ul>

      <Callout title="Image required" variant="info">
        <p>
          All image editing tools require an image from your Media Library. If
          you request an edit without attaching an image, Max will ask you to
          select one first. You can use the attachment menu in the chat composer
          to pick from your Media Library or upload a new file.
        </p>
      </Callout>

      <div className="doc-image-container">
        <img src={mediaLibraryMenu} alt="Media Library Menu" className="doc-image" />
        <p className="muted" style={{ fontSize: '0.85rem', marginTop: '0.75rem' }}>Access the Media Library via the attachment selection menu.</p>
      </div>

      <div className="doc-image-container">
        <img
          src={imageAttachment}
          alt="Composer with attached image and tools menu"
          className="doc-image"
        />
        <p
          className="muted"
          style={{ fontSize: '0.85rem', marginTop: '0.75rem' }}
        >
          Attached-image reference: preview thumbnail, filename chip, tools
          menu, and active agent chip in one view.
        </p>
      </div>

      {/* ── Visual Intelligence ── */}
      <h3>Visual Intelligence: image analysis</h3>
      <p>
        Max can "see" and analyze the contents of your images. When you attach
        an image or pick one from your Media Library, you can ask Max to explain
        what is in it. This is especially helpful for:
      </p>
      <ul className="doc-list">
        <li>
          <strong>Automatic tagging</strong> — Max identifies objects, colors,
          and styles in your image.
        </li>
        <li>
          <strong>SEO alignment</strong> — Max can suggest whether an image
          matches your product's keywords.
        </li>
        <li>
          <strong>Context sharing</strong> — If Max explains an image in one
          turn, other specialists can reuse that context when generating content
          (descriptions, social posts, blog images).
        </li>
      </ul>

      <ImagePlaceholder
        title="Image analysis in chat"
        filenameSuggestion="orchestrator_image-analysis.png"
        description="Screenshot showing Max analyzing an attached image and providing a detailed description of its contents."
        bullets={[
          'Attached image visible',
          'Max description of image contents',
          'Tags or style notes mentioned',
        ]}
        sourceHint="Capture source: prosperna1 UI."
      />

      {/* ── Routing table ── */}
      <h3>Routing responsibilities</h3>
      <p>
        When your request belongs to a specialist, the Orchestrator routes you
        to the correct agent. Here is the complete routing table:
      </p>

      <Callout title="Routing table" variant="info">
        <ul className="doc-list">
          <li>
            Image editing and cleanup workflows →{' '}
            <strong>Max Image Editor</strong>
          </li>
          <li>
            Social marketing creative workflows →{' '}
            <strong>Max Social Marketing</strong>
          </li>
          <li>
            Analytics and performance coaching →{' '}
            <strong>Max Insights</strong> (<InlineCode>smb_agent</InlineCode>)
          </li>
          <li>
            Product catalog, SEO meta, product descriptions →{' '}
            <strong>Max Merchandiser</strong> (
            <InlineCode>product_agent</InlineCode>)
          </li>
          <li>
            Blog drafting workflow →{' '}
            <strong>Max Copywriter</strong> (
            <InlineCode>blog_writer_agent</InlineCode>)
          </li>
          <li>
            Static pages, menu editing, footer editing →{' '}
            <strong>Max Builder</strong> (
            <InlineCode>page_builder_agent</InlineCode>)
          </li>
        </ul>
      </Callout>

      <Callout title="How to switch agents" variant="info">
        <p>
          If the Orchestrator tells you to switch to a specialist, use the agent
          dropdown at the bottom-left of the chat composer. Click the current
          agent chip (usually "Max") and select the specialist you need.
        </p>
      </Callout>

      {/* ── Plan restrictions ── */}
      <h3>Plan restrictions and upgrade prompts</h3>
      <p>
        Some features are gated by your subscription plan:
      </p>
      <ul className="doc-list">
        <li>
          <strong>Free plan</strong>: Blog Writer, SEO Meta Tags Generator, and
          Page Builder tools are locked. Max will show a plan upgrade prompt
          instead.
        </li>
        <li>
          <strong>Paid plan without Blog Writer app</strong>: If the Blog Writer
          marketplace app is not installed, the Copywriter agent will not appear.
        </li>
        <li>
          <strong>Free trial</strong>: Max checks if your free trial has already
          been claimed and may prompt you to activate it.
        </li>
      </ul>

      <ImagePlaceholder
        title="Plan upgrade prompt"
        filenameSuggestion="orchestrator_plan-upgrade.png"
        description="Screenshot showing the plan upgrade modal that appears when a Free plan user requests a locked feature (e.g., page generation)."
        bullets={[
          'Upgrade modal visible',
          'Feature name mentioned',
          'Upgrade CTA button visible',
        ]}
        sourceHint="Capture source: prosperna1 UI."
      />

      {/* ── What Max cannot do directly ── */}
      <h3>What the Orchestrator cannot do directly</h3>
      <p>
        The Orchestrator explicitly does <strong>not</strong> handle:
      </p>
      <ul className="doc-list">
        <li>
          Product listings, product creation, SEO generation, or description
          writing — these belong to <strong>Max Merchandiser</strong>.
        </li>
        <li>
          Blog content creation or editing — belongs to{' '}
          <strong>Max Copywriter</strong>.
        </li>
        <li>
          Page building, page editing, or menu/footer editing — belongs to{' '}
          <strong>Max Builder</strong>.
        </li>
        <li>
          Store analytics or performance reports — belongs to{' '}
          <strong>Max Insights</strong>.
        </li>
      </ul>
      <p>
        If you ask for any of these, Max will politely redirect you to the
        correct specialist and explain how to switch.
      </p>

      {/* ── Example prompts ── */}
      <h3>Example prompts</h3>
      <ul className="doc-list">
        <li>"Create a logo for my brand and generate favicon + wordmark variations."</li>
        <li>"What is in this product image and what specialist should I use next?"</li>
        <li>"Remove the background from this image."</li>
        <li>"Apply warm lighting to this product photo."</li>
        <li>"I approved the logo — apply it and the favicon to my store."</li>
        <li>"What can you do? List all your capabilities and which agents handle them."</li>
      </ul>
    </DocPage>
  );
}
