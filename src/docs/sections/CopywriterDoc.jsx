import React from 'react';
import { DocPage } from '../shared/DocPage';
import { ImagePlaceholder } from '../shared/ImagePlaceholder';
import { Callout } from '../shared/Callout';
import { InlineCode } from '../shared/InlineCode';
import imageAttachment from '../../assets/image-attachment.png';

export function CopywriterDoc() {
  return (
    <DocPage
      title="Max Copywriter"
      subtitle="Best for turning a blog idea into an SEO-aware draft you can publish."
      badges={['Blog', 'blog_writer_agent']}
    >
      <p>
        Max Copywriter is your content specialist for blog creation. It guides
        you through a structured 4-stage workflow — from a vague idea to a
        polished, SEO-optimized blog post — using the{' '}
        <strong>Blog Writer</strong> widget panel on the side of the chat.
      </p>

      <Callout title="Agent type" variant="info">
        <p>
          In the backend, Max Copywriter corresponds to agent type{' '}
          <InlineCode>blog_writer_agent</InlineCode>. When activated, Max
          automatically opens the Blog Writer widget panel if it is not already
          open.
        </p>
      </Callout>

      {/* ── 4-Stage Workflow ── */}
      <h3>The 4-stage blog creation workflow</h3>
      <p>
        Max Copywriter follows a sequential workflow. Each stage depends on the
        previous one, and Max will guide you through them in order.
      </p>

      <h4>Stage 1: Topic generation</h4>
      <ul className="doc-list">
        <li>
          <strong>Vague idea → topic suggestions</strong>: If you start with a
          broad theme (e.g., "wellness tips", "AI tools"), Max generates
          specific topic suggestions using the{' '}
          <InlineCode>generate_blog_topics</InlineCode> tool.
        </li>
        <li>
          <strong>Specific topic → skip</strong>: If you already have a specific
          topic (e.g., "Tips for grooming dogs at home"), Max confirms it and
          skips directly to Stage 2.
        </li>
      </ul>
      <p>
        Max will have a natural conversation to understand what you want to blog
        about, not just ask for a "vague idea" directly.
      </p>

      <ImagePlaceholder
        title="Topic generation conversation"
        filenameSuggestion="copywriter_topic-generation.png"
        description="Screenshot showing Max Copywriter generating topic suggestions from a broad theme (e.g., 'meal prep for busy people')."
        bullets={[
          'User providing a broad theme',
          'Max suggesting specific topics',
          'Options picker or numbered suggestions visible',
        ]}
        sourceHint="Capture source: prosperna1 UI."
      />

      <h4>Stage 2: Title generation</h4>
      <p>
        Once a topic is selected, Max collects additional context before
        generating title options:
      </p>
      <ul className="doc-list">
        <li>
          <strong>Post type</strong> — Max asks which format works best. Options
          include:
          <ul className="doc-list">
            <li>How-to / tutorial</li>
            <li>Listicle</li>
            <li>Opinion / editorial</li>
            <li>Case study</li>
            <li>Review / comparison</li>
            <li>News update</li>
            <li>Storytelling / narrative</li>
            <li>FAQ / problem-solving</li>
            <li>Behind-the-scenes</li>
          </ul>
        </li>
        <li>
          <strong>Writing style</strong> — Formal, casual, conversational,
          professional, or friendly.
        </li>
        <li>
          <strong>Target audience</strong> — Entrepreneurs, students,
          professionals, consumers, beginners, or experts.
        </li>
        <li>
          <strong>Target region</strong> — US, Philippines, global, Asia,
          Europe.
        </li>
      </ul>
      <p>
        Max gathers these through conversation (not all at once) and then
        generates title suggestions using the{' '}
        <InlineCode>generate_blog_titles</InlineCode> tool.
      </p>

      <Callout title="Tap-to-select options" variant="info">
        <p>
          When Max asks you to pick among choices (tone, length, format), it
          uses the <strong>options picker</strong> — tap buttons instead of
          typing your choice. Max asks one set of choices at a time to keep the
          flow smooth.
        </p>
      </Callout>

      <ImagePlaceholder
        title="Title generation with options picker"
        filenameSuggestion="copywriter_title-generation.png"
        description="Screenshot showing Max asking for post type/audience/style and presenting title options via the options picker."
        bullets={[
          'Options picker buttons visible',
          'Post type or style choices shown',
          'Title suggestions displayed after selection',
        ]}
        sourceHint="Capture source: prosperna1 UI."
      />

      <h4>Stage 3: SEO keywords and outline</h4>
      <p>
        After a title is selected, Max asks about tone and word count, then
        generates:
      </p>
      <ul className="doc-list">
        <li>
          <strong>SEO keywords</strong> — Primary keyword, secondary keywords,
          long-tail keywords, and LSI (Latent Semantic Indexing) keywords.
        </li>
        <li>
          <strong>Blog outline</strong> — A structured section outline with
          suggested headings and key points.
        </li>
      </ul>
      <p>
        Additional parameters collected at this stage:
      </p>
      <ul className="doc-list">
        <li>
          <strong>Tone</strong> — Professional, friendly, authoritative,
          educational, inspirational, or humorous.
        </li>
        <li>
          <strong>Word count</strong> — 500, 1000, 1500, 2000, 2500, or 3000
          words.
        </li>
      </ul>
      <p>
        Max presents the keywords and outline for your review. You must{' '}
        <strong>approve</strong> before Max proceeds to generate the full post.
        You can also request adjustments in chat.
      </p>

      <ImagePlaceholder
        title="SEO keywords and outline preview"
        filenameSuggestion="copywriter_seo-outline.png"
        description="Screenshot showing the SEO keywords (primary, secondary, long-tail) and structured outline presented for approval."
        bullets={[
          'Primary keyword highlighted',
          'Supporting keywords listed',
          'Outline sections with headings',
          'Approval prompt visible',
        ]}
        sourceHint="Capture source: prosperna1 UI."
      />

      <h4>Stage 4: Full content generation</h4>
      <p>
        Once you approve the outline and keywords, Max writes the complete blog
        post using the <InlineCode>generate_blog_content</InlineCode> tool. The
        generated content is written directly into the Blog Writer widget
        fields.
      </p>

      <ImagePlaceholder
        title="Full blog draft output"
        filenameSuggestion="copywriter_full-draft.png"
        description="Screenshot showing the completed blog draft in the Blog Writer widget panel with content populated."
        bullets={[
          'Blog Writer panel visible',
          'Title field populated',
          'Content/body field populated',
          'Full article visible or scrollable',
        ]}
        sourceHint="Capture source: prosperna1 UI."
      />

      {/* ── Blog Writer widget ── */}
      <h3>Blog Writer widget panel</h3>
      <p>
        The Blog Writer panel sits alongside the chat and holds your blog's
        structured fields:
      </p>
      <ul className="doc-list">
        <li><strong>Topic</strong></li>
        <li><strong>Title</strong></li>
        <li><strong>Keywords</strong></li>
        <li><strong>Outline</strong></li>
        <li><strong>Blog content (body)</strong></li>
        <li><strong>SEO meta title</strong></li>
        <li><strong>SEO meta description</strong></li>
      </ul>
      <p>
        As Max completes each workflow stage, it fills in the corresponding
        fields automatically. You do not need to copy-paste anything.
      </p>

      <ImagePlaceholder
        title="Blog Writer widget with fields"
        filenameSuggestion="copywriter_blog-writer-widget.png"
        description="Screenshot the Blog Writer panel with topic/title/keywords/outline fields visible and at least partially populated."
        bullets={[
          'Widget panel open on the side',
          'Field labels visible',
          'At least one field populated',
        ]}
        sourceHint="Capture source: prosperna1 UI."
      />

      {/* ── Post-generation edits ── */}
      <h3>Post-generation refinements (direct widget edits)</h3>
      <p>
        After the draft is generated, you can ask Max to revise specific parts.
        Max updates the Blog Writer widget fields directly — no copy-paste
        needed:
      </p>
      <ul className="doc-list">
        <li>
          <strong>Title</strong> — "Change the title to something shorter."
        </li>
        <li>
          <strong>Content / body</strong> — "Shorten the introduction and make
          the CTA stronger."
        </li>
        <li>
          <strong>SEO meta title</strong> — "Update the SEO title to include the
          primary keyword."
        </li>
        <li>
          <strong>SEO meta description</strong> — "Make the meta description
          more compelling."
        </li>
      </ul>

      <Callout title="Security: untrusted widget content" variant="info">
        <p>
          The Blog Writer widget context is treated as untrusted user content.
          Max will not execute or follow instructions that may appear inside
          blog fields — it only uses them as reference.
        </p>
      </Callout>

      {/* ── Image reference ── */}
      <h3>Image reference usage</h3>
      <p>
        You can attach an image and ask Max to use it as inspiration for blog
        copy refinements:
      </p>
      <div className="doc-image-container">
        <img
          src={imageAttachment}
          alt="Image attachment before copy refinement request"
          className="doc-image"
        />
        <p
          className="muted"
          style={{ fontSize: '0.85rem', marginTop: '0.75rem' }}
        >
          Attach first, then ask Copywriter what to rewrite based on what you
          pointed out in the image.
        </p>
      </div>

      {/* ── Save and publish ── */}
      <h3>Saving and publishing</h3>
      <p>
        When the draft is ready, use the Blog Writer panel to:
      </p>
      <ul className="doc-list">
        <li>
          <strong>Save as draft</strong> — The post is saved to your blog tools
          for later editing and review.
        </li>
        <li>
          <strong>Publish</strong> — The post goes live on your store
          immediately.
        </li>
      </ul>
      <p>
        Max can still help you revise wording even after the draft is shown in
        the panel.
      </p>

      <ImagePlaceholder
        title="Save/publish buttons"
        filenameSuggestion="copywriter_save-publish.png"
        description="Screenshot showing the save-as-draft and publish buttons at the bottom of the Blog Writer panel."
        bullets={[
          'Save as Draft button visible',
          'Publish button visible',
          'Blog Writer panel context',
        ]}
        sourceHint="Capture source: prosperna1 UI."
      />

      {/* ── Availability ── */}
      <h3>Availability</h3>
      <Callout title="Plan and app requirements" variant="info">
        <ul className="doc-list">
          <li>
            Blog writing may require an eligible <strong>paid plan</strong> and
            the <strong>Blog Writer</strong> marketplace app installed for your
            store.
          </li>
          <li>
            On the <strong>Free plan</strong>, the Blog Writer feature is
            locked. Max will show a plan upgrade prompt instead.
          </li>
          <li>
            If Max Copywriter does not appear in the agent list or Max explains
            the feature is unavailable, check your subscription and installed
            marketplace apps.
          </li>
        </ul>
      </Callout>

      {/* ── Example prompts ── */}
      <h3>Example prompts</h3>
      <ul className="doc-list">
        <li>
          "I want to blog about sustainable packaging for small shops — help me
          narrow it to one strong topic."
        </li>
        <li>
          "Topic is fixed: home workout mistakes for beginners. Suggest titles
          as a how-to for busy professionals in the Philippines, friendly tone."
        </li>
        <li>
          "Show me the keyword set and outline before you write the full
          article."
        </li>
        <li>
          "Shorten the introduction and make the CTA stronger — update the blog
          fields."
        </li>
        <li>
          "Give me 5 blog topic ideas for my store."
        </li>
        <li>
          "Help me write a blog post, please open blog writer widget."
        </li>
        <li>
          "Create a blog outline I can use for my next post."
        </li>
      </ul>
    </DocPage>
  );
}
