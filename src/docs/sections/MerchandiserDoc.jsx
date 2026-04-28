import React from 'react';
import { DocPage } from '../shared/DocPage';
import { ImagePlaceholder } from '../shared/ImagePlaceholder';
import { Callout } from '../shared/Callout';
import { InlineCode } from '../shared/InlineCode';

export function MerchandiserDoc() {
  return (
    <DocPage
      title="Max Merchandiser"
      subtitle="Your merchandising partner for catalog listings, new products, and short promo reels."
      badges={['Product', 'product_agent']}
    >
      <p>
        Max Merchandiser is the specialist for everything in your product
        catalog. It can create new products from scratch, improve existing
        listings, generate SEO meta tags, update pricing/stock/measurements,
        manage product media, and even produce short promotional reels.
      </p>

      <Callout title="Agent type" variant="info">
        <p>
          In the backend, Max Merchandiser corresponds to agent type{' '}
          <InlineCode>product_agent</InlineCode>. The agent switcher dropdown
          uses this ID behind the scenes.
        </p>
      </Callout>

      {/* ── Welcome capabilities ── */}
      <h3>Quick start capabilities</h3>
      <p>
        When you switch to Max Merchandiser, the welcome screen shows these
        quick-start cards:
      </p>
      <ul className="doc-list">
        <li>
          <strong>Create a new product</strong> — Start a draft product in chat
          (physical or digital) and fill in details step by step.
        </li>
        <li>
          <strong>Improve a product listing</strong> — Polish descriptions and
          listing copy when you open Max from a product.
        </li>
        <li>
          <strong>Promotional reel</strong> — Generate a short promotional reel
          when a product is in context.
        </li>
        <li>
          <strong>View your product list</strong> — Browse your catalog and pick
          a product to work on.
        </li>
        <li>
          <strong>Fix product photos</strong> — Remove backgrounds, enhance
          quality, or adjust lighting (opens Media Library).
        </li>
      </ul>

      <ImagePlaceholder
        title="Max Merchandiser welcome screen"
        filenameSuggestion="merchandiser_welcome-screen.png"
        description="Screenshot the MaxAI page when Merchandiser is selected, showing the welcome tagline and capability cards."
        bullets={[
          'Agent chip shows Max Merchandiser',
          'Welcome tagline visible',
          'At least 3 capability cards visible',
        ]}
        sourceHint="Capture source: prosperna1 UI."
      />

      {/* ── Product creation ── */}
      <h3>Product creation workflow</h3>
      <p>
        Max Merchandiser guides you through creating a new product from scratch.
        The workflow proceeds through these steps:
      </p>
      <ol className="doc-steps">
        <li>
          <strong>Start creation</strong> — Tell Max you want to create a new
          product. It will ask whether it is physical or digital, and collect
          basic info (name, brand, description).
        </li>
        <li>
          <strong>Category</strong> — Max helps you select or create the right
          product category.
        </li>
        <li>
          <strong>Identity fields</strong> — SKU, brand name, and URL slug are
          set up (with auto-generation when appropriate).
        </li>
        <li>
          <strong>Descriptions</strong> — Max generates product descriptions
          tailored to your target audience and key benefits.
        </li>
        <li>
          <strong>Media</strong> — Upload and organize product images and videos
          directly.
        </li>
        <li>
          <strong>Pricing and stock</strong> — Set price, compare-at price, unit
          cost, available stock, and low-stock threshold.
        </li>
        <li>
          <strong>Measurements</strong> — Dimensions (length, width, height) and
          weight with unit support (kg, cm, lb, in, etc.).
        </li>
        <li>
          <strong>SEO meta tags</strong> — Generate optimized meta title and meta
          description for search visibility.
        </li>
        <li>
          <strong>Submit</strong> — The product is created in your catalog with
          all the details filled in.
        </li>
      </ol>

      <Callout title="Tool switching" variant="info">
        <p>
          Max Merchandiser uses different tool sets depending on whether you
          have an active product selected. Before a product is created or
          selected, only the creation tools are available. Once a product is in
          context, the full set of editing tools becomes available.
        </p>
      </Callout>

      <ImagePlaceholder
        title="Product creation chat flow"
        filenameSuggestion="merchandiser_product-creation.png"
        description="Screenshot showing the product creation conversation — Max asking for product details and confirming each step."
        bullets={[
          'Max asking product questions',
          'Step-by-step responses visible',
          'Product name or category visible',
        ]}
        sourceHint="Capture source: prosperna1 UI."
      />

      {/* ── Product editing tools ── */}
      <h3>Product editing tools</h3>
      <p>
        Once a product is in context (either just created or selected from the
        product list), Max Merchandiser can update any aspect of it:
      </p>

      <h4>Identity and catalog</h4>
      <ul className="doc-list">
        <li>
          <strong>Update product identity</strong> — Change name, brand, SKU,
          and slug.
        </li>
        <li>
          <strong>Update product category</strong> — Move the product to a
          different category.
        </li>
      </ul>

      <h4>Content</h4>
      <ul className="doc-list">
        <li>
          <strong>Generate product descriptions</strong> — AI-generated
          descriptions tailored to your target audience, key features, and
          benefits. You define the audience and benefits; Max writes the copy.
        </li>
        <li>
          <strong>Update product descriptions</strong> — Directly modify the
          short or long description.
        </li>
        <li>
          <strong>Generate SEO meta tags</strong> — Generate optimized meta
          title and meta description with primary/secondary keyword targeting.
          Requires explicit approval before applying.
        </li>
        <li>
          <strong>Update SEO meta tags</strong> — Directly modify existing meta
          title and description.
        </li>
      </ul>

      <ImagePlaceholder
        title="Product description generation"
        filenameSuggestion="merchandiser_description-gen.png"
        description="Screenshot showing Max generating a product description with audience targeting and key benefits."
        bullets={[
          'Generated description visible',
          'Target audience mentioned',
          'Key benefits reflected in copy',
        ]}
        sourceHint="Capture source: prosperna1 UI."
      />

      <ImagePlaceholder
        title="SEO meta tag generation"
        filenameSuggestion="merchandiser_seo-gen.png"
        description="Screenshot showing Max generating SEO meta tags for a product with the approval step visible."
        bullets={[
          'Meta title visible',
          'Meta description visible',
          'Approval prompt from Max',
        ]}
        sourceHint="Capture source: prosperna1 UI."
      />

      <h4>Pricing, stock, and measurements</h4>
      <ul className="doc-list">
        <li>
          <strong>Update pricing and stock</strong> — Adjust price, compare-at
          price, unit cost, available stock, and low-stock threshold in a single
          request. Currency is resolved from your store settings.
        </li>
        <li>
          <strong>Update measurements</strong> — Set physical dimensions
          (length, width, height) and weight. Supports multiple unit systems
          (kg, g, lb, oz, cm, mm, in, ft).
        </li>
      </ul>

      <h4>Media</h4>
      <ul className="doc-list">
        <li>
          <strong>Update product media</strong> — Upload, add, or replace
          product images and videos directly through chat.
        </li>
      </ul>

      <ImagePlaceholder
        title="Product detail editing"
        filenameSuggestion="merchandiser_detail-editing.png"
        description="Screenshot showing Max updating pricing/stock or measurements for a product, with the confirmation response."
        bullets={[
          'Updated values visible in response',
          'Product name referenced',
          'Confirmation message from Max',
        ]}
        sourceHint="Capture source: prosperna1 UI."
      />

      {/* ── Product reels ── */}
      <h3>Promotional reel creation</h3>
      <p>
        Max Merchandiser can generate a short promotional reel for a product.
        Before creating the reel, Max performs an image quality check on the
        product's photos to ensure the reel output meets visual standards.
      </p>
      <ul className="doc-list">
        <li>
          <strong>Image quality pre-check</strong> — Max validates that the
          product images are suitable for reel generation.
        </li>
        <li>
          <strong>Reel generation</strong> — A short promotional video is
          generated using the product's images, name, and description.
        </li>
        <li>
          <strong>Background job</strong> — Reels are generated as background
          jobs. You can continue chatting while the reel is being created, and
          Max will notify you when it is ready.
        </li>
      </ul>

      <ImagePlaceholder
        title="Product reel output"
        filenameSuggestion="merchandiser_product-reel.png"
        description="Screenshot showing a generated product reel preview or the reel-ready notification in chat."
        bullets={[
          'Reel preview or notification visible',
          'Product name referenced',
          'Status indicator (generating / ready)',
        ]}
        sourceHint="Capture source: prosperna1 UI."
      />

      {/* ── Product list panel ── */}
      <h3>Product list panel</h3>
      <p>
        You can open the product list panel to browse your existing products and
        select one to work on. This is accessible from:
      </p>
      <ul className="doc-list">
        <li>
          The "View your product list" capability card on the welcome screen.
        </li>
        <li>
          The widget menu in the chat composer (Product List option).
        </li>
      </ul>
      <p>
        Once you select a product, Max Merchandiser loads its current details
        (name, description, pricing, stock) into context, so you can ask for
        updates without re-identifying the product.
      </p>

      <ImagePlaceholder
        title="Product list panel"
        filenameSuggestion="merchandiser_product-list-panel.png"
        description="Screenshot the MaxAI side panel showing Product List open, with at least one product selectable."
        bullets={[
          'Product list panel visible',
          'Products listed with names',
          'Select/click action available',
        ]}
        sourceHint="Capture source: prosperna1 UI."
      />

      {/* ── Example prompts ── */}
      <h3>Example prompts</h3>
      <ul className="doc-list">
        <li>
          "I want to create a new product. Walk me through it from the
          beginning."
        </li>
        <li>
          "Help me improve the title and description for this product listing."
        </li>
        <li>"Create a short promotional reel for this product."</li>
        <li>"Generate SEO meta tags for this product."</li>
        <li>
          "Update the price to ₱1,200 and set available stock to 50."
        </li>
        <li>
          "Write a product description targeting young professionals who value
          convenience."
        </li>
        <li>
          "Set the weight to 0.5 kg and dimensions to 10cm × 5cm × 3cm."
        </li>
        <li>"Open my product list so I can pick a product to work on."</li>
      </ul>
    </DocPage>
  );
}
