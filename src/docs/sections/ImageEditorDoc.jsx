import React from 'react';
import { DocPage } from '../shared/DocPage';
import { ImagePlaceholder } from '../shared/ImagePlaceholder';
import { Callout } from '../shared/Callout';

export function ImageEditorDoc() {
  return (
    <DocPage
      title="Max Image Editor"
      subtitle="Dedicated image editing and enhancement specialist for product-ready visuals."
      badges={['Media', 'Image Editing']}
    >
      <p>
        Max Image Editor is the specialist for all image cleanup, enhancement,
        and creative background work. It operates on images from your{' '}
        <strong>Media Library</strong> — you must attach or select an image
        before requesting any edit.
      </p>

      <Callout title="Media Library requirement" variant="info">
        <p>
          Every Image Editor tool requires a <strong>media image URL</strong>.
          If you request an edit without attaching an image, Max will ask you to
          select one from your Media Library first. All results are automatically
          saved back to your Media Library for reuse.
        </p>
      </Callout>

      <ImagePlaceholder
        title="Media Library selection menu"
        filenameSuggestion="image-editor_media-library-menu.png"
        description="Screenshot the attachment selection menu showing the Media Library option alongside the file upload option."
        bullets={[
          'Attachment menu is open',
          'Media Library option visible',
          'Upload option visible',
        ]}
        sourceHint="Capture source: prosperna1 UI (chat composer area)."
      />

      {/* ── Background Removal ── */}
      <h3>1) Background Removal</h3>
      <p>
        Removes the background from any product or brand image, outputting a
        clean cutout. This is the most commonly used editing tool for preparing
        product photos.
      </p>
      <ul className="doc-list">
        <li>
          <strong>Use case</strong>: "Remove the background from this product
          photo", "Give me a transparent PNG of this item"
        </li>
        <li>
          <strong>Input</strong>: One image from your Media Library
        </li>
        <li>
          <strong>Output</strong>: Clean image with background removed, saved to
          Media Library
        </li>
      </ul>

      <ImagePlaceholder
        title="Background removal result"
        filenameSuggestion="image-editor_bg-removal-result.png"
        description="Screenshot showing a before/after of background removal — the original image in the chat message and the result returned by Max."
        bullets={[
          'Original image visible in message',
          'Result image visible in response',
          'Clean background visible',
        ]}
        sourceHint="Capture source: prosperna1 UI (chat message with image result)."
      />

      {/* ── Quality Enhancement ── */}
      <h3>2) Image Quality Enhancement</h3>
      <p>
        Improves the overall visual quality of an image — sharpness, clarity,
        and detail. Ideal for product photos that were taken with a phone camera
        or in less-than-ideal conditions.
      </p>
      <ul className="doc-list">
        <li>
          <strong>Use case</strong>: "Enhance the quality of this image", "Make
          this product photo look more professional"
        </li>
        <li>
          <strong>Input</strong>: One image from your Media Library
        </li>
        <li>
          <strong>Output</strong>: Enhanced image saved to Media Library
        </li>
      </ul>

      <ImagePlaceholder
        title="Quality enhancement result"
        filenameSuggestion="image-editor_quality-enhanced.png"
        description="Screenshot showing the enhanced image returned by Max compared to the original attached image."
        bullets={[
          'Before image in user message',
          'Enhanced result in assistant response',
        ]}
        sourceHint="Capture source: prosperna1 UI."
      />

      {/* ── Lighting Adjustment ── */}
      <h3>3) Lighting Adjustment</h3>
      <p>
        Applies professional lighting styles to your images. You choose the
        style, and Max adjusts the lighting accordingly.
      </p>
      <ul className="doc-list">
        <li>
          <strong>Use case</strong>: "Adjust the lighting of this image", "Apply
          warm studio lighting to this product photo"
        </li>
        <li>
          <strong>Input</strong>: One image + a lighting style preference
        </li>
        <li>
          <strong>Output</strong>: Re-lit image saved to Media Library
        </li>
      </ul>

      <Callout title="Lighting style examples" variant="info">
        <p>
          When requesting lighting changes, describe the look you want — for
          example: "warm natural lighting", "cool studio lighting", "soft
          diffused light", or "bright daylight". Max will translate your
          description into the closest supported style.
        </p>
      </Callout>

      <ImagePlaceholder
        title="Lighting adjustment result"
        filenameSuggestion="image-editor_lighting-adjusted.png"
        description="Screenshot showing a product image with adjusted lighting — ideally a visible difference from the original."
        bullets={[
          'Original in user message',
          'Adjusted image in response',
          'Lighting difference noticeable',
        ]}
        sourceHint="Capture source: prosperna1 UI."
      />

      {/* ── Background Replacement ── */}
      <h3>4) Background Replacement</h3>
      <p>
        Replaces the background of a product image with a generated scene or a
        reference image. You can describe the desired background in text, or
        provide a reference image for the new scene.
      </p>
      <ul className="doc-list">
        <li>
          <strong>Use case</strong>: "Place this product on a modern kitchen
          counter", "Replace the background with a beach scene"
        </li>
        <li>
          <strong>Input</strong>: One image + a text description of the new
          background (or a reference image URL)
        </li>
        <li>
          <strong>Output</strong>: Composited image with the new background,
          saved to Media Library
        </li>
      </ul>

      <ImagePlaceholder
        title="Background replacement result"
        filenameSuggestion="image-editor_bg-replacement.png"
        description="Screenshot showing a product placed in a new scene (e.g., kitchen counter, outdoor setting) with realistic compositing."
        bullets={[
          'Original product visible',
          'New background scene applied',
          'Result looks naturally composited',
        ]}
        sourceHint="Capture source: prosperna1 UI."
      />

      {/* ── Multi-step editing ── */}
      <h3>Multi-step editing in a single conversation</h3>
      <p>
        You can chain multiple edits in a single chat session. For example:
      </p>
      <ol className="doc-steps">
        <li>Remove the background from a product photo.</li>
        <li>Enhance the quality of the resulting image.</li>
        <li>
          Replace the background with a lifestyle scene for social media use.
        </li>
      </ol>
      <p>
        Each step uses the output from the previous one. All intermediate and
        final results are saved to your Media Library.
      </p>

      <Callout title="Cross-agent usage" variant="info">
        <p>
          Images edited here are saved to your Media Library. You can then use
          them with other Max specialists — for example, using an edited product
          photo in a <strong>Max Social Marketing</strong> campaign or applying
          it to a product listing via <strong>Max Merchandiser</strong>.
        </p>
      </Callout>

      <h3>Example prompts</h3>
      <ul className="doc-list">
        <li>"Remove the background from this product photo."</li>
        <li>"Enhance the quality of this image and make it look sharper."</li>
        <li>"Apply warm natural lighting to this product shot."</li>
        <li>
          "Place this product on a modern kitchen counter with warm natural
          lighting."
        </li>
        <li>
          "Remove the background, then replace it with a clean white studio
          backdrop."
        </li>
      </ul>
    </DocPage>
  );
}
