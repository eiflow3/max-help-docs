import React from 'react';
import { DocPage } from '../shared/DocPage';
import { ImagePlaceholder } from '../shared/ImagePlaceholder';
import { Callout } from '../shared/Callout';
import { InlineCode } from '../shared/InlineCode';
import builderTools from '../../assets/max-builder-help-tools.png';

export function BuilderDoc() {
  return (
    <DocPage
      title="Max Builder"
      subtitle="Your store designer for pages, navigation menus, and footer editing."
      badges={['Pages', 'Menus', 'page_builder_agent']}
    >
      <p>
        Max Builder is the specialist for building and editing your store's
        pages, navigation menus, and footer. It combines AI-assisted visual
        editing with a full suite of page generation, menu management, and
        footer editing tools.
      </p>

      <Callout title="Agent type" variant="info">
        <p>
          In the backend, Max Builder corresponds to agent type{' '}
          <InlineCode>page_builder_agent</InlineCode>. It also handles{' '}
          <InlineCode>Menu Editor</InlineCode> widget context for menu/navigation
          workflows.
        </p>
      </Callout>

      {/* ── Welcome capabilities ── */}
      <h3>Quick start capabilities</h3>
      <p>
        When you switch to Max Builder, the welcome screen shows these
        quick-start cards:
      </p>
      <ul className="doc-list">
        <li>
          <strong>Edit existing page</strong> — Open your page list and choose
          a page to edit with AI assistance.
        </li>
        <li>
          <strong>Generate home page</strong> — Create a homepage structure and
          content tailored to your store.
        </li>
        <li>
          <strong>Generate about page</strong> — Draft an About page that
          explains your brand and value proposition.
        </li>
        <li>
          <strong>Generate contact page</strong> — Create a contact page with
          clear CTAs and trust-building details.
        </li>
      </ul>

      <ImagePlaceholder
        title="Max Builder welcome screen"
        filenameSuggestion="builder_welcome-screen.png"
        description="Screenshot the MaxAI page when Builder is selected, showing the welcome tagline and capability cards."
        bullets={[
          'Agent chip shows Max Builder',
          'Welcome tagline visible',
          'At least 3 capability cards visible',
        ]}
        sourceHint="Capture source: prosperna1 UI."
      />

      {/* ── Page generation ── */}
      <h3>Page generation</h3>
      <p>
        Max Builder can generate complete pages from scratch. Supported page
        types include:
      </p>
      <ul className="doc-list">
        <li>Home page</li>
        <li>About Us page</li>
        <li>Contact Us page</li>
        <li>Warranty page</li>
        <li>Products page</li>
        <li>Privacy Policy page</li>
        <li>Return Policy page</li>
        <li>Terms of Service page</li>
        <li>Custom pages (by slug)</li>
      </ul>

      <Callout title="Page validation" variant="info">
        <p>
          Before generating a page, Max validates the request against your
          current store state (existing pages, plan restrictions, slug
          availability). If a page cannot be generated, Max returns explicit
          guidance.
        </p>
      </Callout>

      <ImagePlaceholder
        title="Page generation in progress"
        filenameSuggestion="builder_page-generation.png"
        description="Screenshot showing Max Builder generating a page — the progress indicator and/or the resulting page preview."
        bullets={[
          'Page type mentioned in chat',
          'Progress indicator or generation message',
          'Generated page preview visible',
        ]}
        sourceHint="Capture source: prosperna1 UI."
      />

      {/* ── Help tools ── */}
      <h3>Page Builder help tools</h3>

      <div className="doc-image-container">
        <img src={builderTools} alt="Builder Tools" className="doc-image" />
        <p className="muted" style={{ fontSize: '0.85rem', marginTop: '0.75rem' }}>Visual Editor, Reorder, Select Element, and Page List tools.</p>
      </div>

      <p>
        When editing a page, Max Builder provides 4 editing modes accessible
        from the builder menu:
      </p>

      <h4>1) Visual Editor</h4>
      <ul className="doc-list">
        <li>
          <strong>What it does</strong>: Click any element on the page and edit
          text, styling, and attributes with AI support.
        </li>
        <li>
          <strong>When to use</strong>: You want to quickly change copy,
          spacing, colors, or style of a specific block.
        </li>
        <li>
          <strong>How to use</strong>: Open Max Builder → Click Visual Editor →
          Click the element → Send a clear instruction (e.g., "Make this
          headline shorter and bolder").
        </li>
        <li>
          <strong>Pro tip</strong>: Edit one area at a time for cleaner results
          and easier undo/redo.
        </li>
      </ul>

      <ImagePlaceholder
        title="Visual Editor active"
        filenameSuggestion="builder_visual-editor.png"
        description="Screenshot showing the Visual Editor mode active with an element selected and the chat instruction input."
        bullets={[
          'Visual Editor mode active',
          'An element highlighted/selected on the page',
          'Chat input ready for instruction',
        ]}
        sourceHint="Capture source: prosperna1 UI."
      />

      <h4>2) Reorder</h4>
      <ul className="doc-list">
        <li>
          <strong>What it does</strong>: Drag-and-drop reordering of sections
          or elements on the page.
        </li>
        <li>
          <strong>When to use</strong>: You want to change storytelling flow
          (e.g., move testimonials above product grid) or improve conversion by
          changing page sequence.
        </li>
        <li>
          <strong>How to use</strong>: Click Reorder → Drag the element → Drop
          → Review spacing/visual flow → Undo/redo if needed.
        </li>
        <li>
          <strong>Pro tip</strong>: Start with major blocks first (hero,
          benefits, testimonials, CTA), then fine-tune smaller parts.
        </li>
      </ul>

      <ImagePlaceholder
        title="Reorder mode"
        filenameSuggestion="builder_reorder-mode.png"
        description="Screenshot showing the Reorder mode with draggable sections visible on the page."
        bullets={[
          'Reorder mode active',
          'Drag handles visible on sections',
          'Page sections clearly separated',
        ]}
        sourceHint="Capture source: prosperna1 UI."
      />

      <h4>3) Select Element</h4>
      <ul className="doc-list">
        <li>
          <strong>What it does</strong>: Attaches a selected page element to
          your chat message so Max can use it as reference for targeted edits.
        </li>
        <li>
          <strong>When to use</strong>: You want precise edits to one specific
          section, or need analysis/rewrite based on a selected element.
        </li>
        <li>
          <strong>How to use</strong>: Click Select Element → Click the target
          on your page → Confirm it is attached → Prompt Max with the action
          (e.g., "Rewrite this section to sound more premium").
        </li>
        <li>
          <strong>Pro tip</strong>: If Max edits the wrong area, re-select the
          exact element and resend your prompt.
        </li>
      </ul>

      <ImagePlaceholder
        title="Select Element attached"
        filenameSuggestion="builder_select-element.png"
        description="Screenshot showing an element selected and attached to a chat message as context."
        bullets={[
          'Select Element mode active',
          'Element highlighted on page',
          'Attachment indicator in chat',
        ]}
        sourceHint="Capture source: prosperna1 UI."
      />

      <h4>4) Page List</h4>
      <p>
        When Max Builder is your selected agent, the <strong>Page List</strong>{' '}
        option becomes visible in the builder menu. It lets you:
      </p>
      <ul className="doc-list">
        <li>
          Browse and open your existing pages directly.
        </li>
        <li>
          Switch between pages for editing within Max Builder.
        </li>
        <li>
          Continue editing with Visual Editor, Reorder, or Select Element.
        </li>
      </ul>

      <ImagePlaceholder
        title="Page List panel"
        filenameSuggestion="builder_page-list.png"
        description="Screenshot showing the Page List panel open with existing store pages listed."
        bullets={[
          'Page List panel visible',
          'Multiple pages listed',
          'Select/click action available',
        ]}
        sourceHint="Capture source: prosperna1 UI."
      />

      <ImagePlaceholder
        title="Page Builder help tools menu"
        filenameSuggestion="builder_help-tools-menu.png"
        description="Screenshot the Builder tools menu showing Visual Editor / Reorder / Select Element / Page List options."
        bullets={[
          'All 4 tool options visible',
          'Builder menu open',
          'Active page context shown',
        ]}
        sourceHint="Capture source: prosperna1 UI."
      />

      {/* ── Menu Editor ── */}
      <h3>Menu Editor mode</h3>
      <p>
        For menu and navigation requests, Max Builder opens the{' '}
        <strong>Menu Editor</strong> and can update your navigation using
        natural language. The full menu tool surface includes:
      </p>

      <h4>Structure management</h4>
      <ul className="doc-list">
        <li>
          <strong>Add menu items</strong> — Add new links to your navigation.
        </li>
        <li>
          <strong>Remove menu items</strong> — Remove existing links.
        </li>
        <li>
          <strong>Move menu items</strong> — Reorder items in your navigation.
        </li>
        <li>
          <strong>Update menu items</strong> — Change label text or other item
          properties.
        </li>
        <li>
          <strong>Replace link targets</strong> — Point an existing menu item
          to a different page, product, or category.
        </li>
        <li>
          <strong>Search link targets</strong> — Find available pages,
          products, and categories to link to.
        </li>
      </ul>

      <h4>Design and styling</h4>
      <ul className="doc-list">
        <li>
          <strong>Layout</strong> — Change the overall menu layout style.
        </li>
        <li>
          <strong>Logo</strong> — Update the logo displayed in the menu.
        </li>
        <li>
          <strong>Colors</strong> — Adjust background, text, and hover colors.
        </li>
        <li>
          <strong>Spacing</strong> — Control padding and margins between menu
          items.
        </li>
        <li>
          <strong>Typography</strong> — Change font family, size, weight, and
          letter spacing.
        </li>
        <li>
          <strong>Sticky behavior</strong> — Toggle whether the menu stays
          fixed when scrolling.
        </li>
      </ul>

      <h4>Advanced menu features</h4>
      <ul className="doc-list">
        <li>
          <strong>Menu modals</strong> — Create, update, delete, attach, and
          detach modal overlays from the menu (e.g., mega menus or promotional
          panels).
        </li>
        <li>
          <strong>Undo</strong> — Revert the last menu change.
        </li>
      </ul>

      <Callout title="Menu edits are previewed first" variant="info">
        <p>
          Menu edits happen on a managed preset copy. You review changes in the
          Menu Editor before they go live. Max will not apply menu changes
          directly to your storefront without your confirmation.
        </p>
      </Callout>

      <ImagePlaceholder
        title="Menu Editor open"
        filenameSuggestion="builder_menu-editor.png"
        description="Screenshot showing the Menu Editor open with the current navigation structure visible and editable."
        bullets={[
          'Menu Editor panel/mode active',
          'Current menu items visible',
          'Edit controls available',
        ]}
        sourceHint="Capture source: prosperna1 UI."
      />

      {/* ── Footer mode ── */}
      <h3>Footer editing mode</h3>
      <p>
        For footer requests, Max Builder activates footer mode first, then
        applies footer-only edits:
      </p>
      <ul className="doc-list">
        <li>
          If no footer exists yet, Max can generate an initial footer after
          asking for your confirmation.
        </li>
        <li>
          Footer context can use deterministic links (store details, social
          links) and product link lookups when explicitly requested.
        </li>
        <li>
          Footer edits are isolated — they do not affect your page content.
        </li>
      </ul>

      <ImagePlaceholder
        title="Footer editing"
        filenameSuggestion="builder_footer-editing.png"
        description="Screenshot showing the footer editing mode with footer content visible and Max making edits."
        bullets={[
          'Footer mode active',
          'Footer content visible',
          'Max response with footer edit',
        ]}
        sourceHint="Capture source: prosperna1 UI."
      />

      {/* ── Pexel images ── */}
      <h3>Stock image search for pages</h3>
      <p>
        When building pages, Max Builder can search for stock photos from Pexels
        to use in your page sections. If Max needs a visual for a hero banner,
        product showcase, or about section, it can find relevant images
        automatically.
      </p>

      {/* ── Legacy migration ── */}
      <h3>Legacy page migration</h3>
      <p>
        Pages built with the old Page Builder (GrapesJS) cannot be directly
        edited in Max Builder. When migration is available:
      </p>
      <ul className="doc-list">
        <li>
          Max creates a <strong>separate migrated page</strong> with a{' '}
          <InlineCode>-max-version</InlineCode> suffix to avoid slug/name
          conflicts.
        </li>
        <li>
          Max proposes extracted theme/design memory first before persisting it.
        </li>
        <li>
          Max waits for your <strong>explicit approval</strong> before saving
          migration-related memory changes.
        </li>
      </ul>

      <Callout title="Legacy pages notice" variant="info">
        <p>
          If you attach a page and Max replies that it is not supported, this
          means the page is a legacy GrapesJS page. Your options:
        </p>
        <ul className="doc-list">
          <li>Open Page List and pick a supported page.</li>
          <li>
            Ask Max to migrate the legacy page to a new AI-editable version.
          </li>
          <li>
            Ask Max for copy/layout guidance, then apply changes manually.
          </li>
        </ul>
      </Callout>

      <ImagePlaceholder
        title="Legacy migration dialog"
        filenameSuggestion="builder_legacy-migration.png"
        description="Screenshot showing Max offering to migrate a legacy page, including the -max-version suffix explanation and approval prompt."
        bullets={[
          'Legacy page warning visible',
          'Migration offer from Max',
          'Approval prompt visible',
        ]}
        sourceHint="Capture source: prosperna1 UI."
      />

      {/* ── Custom pages and publish ── */}
      <h3>Custom page support and publish behavior</h3>
      <ul className="doc-list">
        <li>
          Max Builder can open supported custom pages by slug (e.g.,{' '}
          <InlineCode>summer-sale</InlineCode>).
        </li>
        <li>
          If custom-page open is blocked, Max returns explicit guidance so you
          can recover.
        </li>
        <li>
          Publish validates slugs. If a provided slug is stale or missing, Max
          can create a unique slug first, then continue.
        </li>
        <li>
          On publish success, Max returns a clearer success message with the
          full live page URL when available.
        </li>
        <li>
          Product-listing cards in pages support share actions (native share,
          clipboard fallback, or disabled when no URL exists).
        </li>
      </ul>

      <ImagePlaceholder
        title="Publish success with URL"
        filenameSuggestion="builder_publish-success.png"
        description="Screenshot showing the publish success message with the full live page URL displayed."
        bullets={[
          'Success message visible',
          'Live URL displayed',
          'Page name/slug referenced',
        ]}
        sourceHint="Capture source: prosperna1 UI."
      />

      {/* ── Single page editing ── */}
      <h3>Single-page editing enforcement</h3>
      <Callout title="One page at a time" variant="info">
        <p>
          Max Builder enforces single-page editing. You can only edit one page
          at a time. If you try to switch to another page while one is active,
          Max will ask you to publish or close the current page first.
        </p>
      </Callout>

      {/* ── Example prompts ── */}
      <h3>Example prompts</h3>
      <ul className="doc-list">
        <li>"Build a homepage for my store."</li>
        <li>"Create an About page for my store."</li>
        <li>"Create a Contact page for my store."</li>
        <li>
          "Build a 'Return Policy' page for my electronics store with a formal
          tone."
        </li>
        <li>"Open my custom page with slug summer-sale and improve the hero."</li>
        <li>"Add a new 'Special Offers' link to my header menu."</li>
        <li>
          "Remove the 'Blog' link from my navigation menu."
        </li>
        <li>
          "Change the menu colors to match my brand — dark navy background with
          white text."
        </li>
        <li>
          "Make my menu sticky so it stays visible when scrolling."
        </li>
        <li>
          "Open my footer editor and add contact details plus social links."
        </li>
        <li>
          "Migrate my legacy About page to a Max-editable version."
        </li>
        <li>
          "Rewrite this section to sound more premium." (with Select Element)
        </li>
      </ul>
    </DocPage>
  );
}
