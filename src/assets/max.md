# How to interact with Max

Max is your AI assistant inside Prosperna. It can help you run your store faster by creating content, improving product listings, analyzing store performance, and guiding setup tasks.

This guide is for merchants and team members who want to use Max effectively.

---

## Where to find different agents

You can switch agents directly in the chat input area.

1. Open Max chat.
2. Look at the bottom-left of the message box.
3. Click the current agent chip (usually labeled "Max").
4. Select the specialist you want from the dropdown list.

### Agent options you will usually see

- Max
- Max Image Editor
- Max Social Marketing
- Max Insights
- Max Copywriter
- Max Builder
- Max Merchandiser

### Visual guide

![Agent switcher dropdown](max-agents-menu)

### Quick tip

If your task changes, switch to the matching specialist before you type your next prompt. This gives you better and faster results.

---

## Max Specialists

## Prosperna Main Orchestrator (Max)
Best for routing, shared context, and branding setup.

### Direct capabilities (what Max does itself)

#### Logo and branding

- **Generate a base logo** — Max collects your brand preferences (offerings, style type, style approach, primary/secondary colors, accent colors, font preferences, and trend direction), then generates a logo using your store name and slogan from context.
  - Style type: vertical or horizontal
  - Style approaches: minimalist/flat, vintage/retro, geometric/techy, 3d/gradient, line art/outline, typography play
  - Trend preference: timeless vs trendy
- **Generate favicon and wordmark variations** — After a base logo exists, Max produces a favicon (small square icon) and a wordmark (text-only) variation from it.
- **Apply logo and favicon to store branding** — Once you confirm your choices, Max updates your store's logo and favicon in one step. Max will only apply when you explicitly say "yes" — until then, assets stay in your Media Library.

#### Image editing tools (also available via Max Image Editor)

- **Background removal** — Remove backgrounds from product or brand images.
- **Image quality enhancement** — Improve sharpness, clarity, and detail.
- **Lighting adjustment** — Apply professional lighting styles (warm, cool, studio, etc.).
- **Background replacement** — Replace backgrounds with generated scenes or reference images.

All image editing tools require an image from your Media Library. If you request an edit without attaching an image, Max will ask you to select one first.

### What Max routes to other specialists

- Image cleanup and scene generation workflows -> Max Image Editor
- Social campaign creative and channel-ready assets -> Max Social Marketing
- Product catalog, SEO, and product descriptions -> Max Merchandiser
- Blog creation and rewriting workflows -> Max Copywriter
- Static page creation/editing and menu/navigation workflows -> Max Builder
- Analytics and business performance workflows -> Max Insights

### Plan restrictions

- **Free plan**: Blog Writer, SEO Meta Tags Generator, and Page Builder tools are locked. Max will show a plan upgrade prompt instead.
- **Paid plan without Blog Writer app**: If the Blog Writer marketplace app is not installed, the Copywriter agent will not appear.
- **Free trial**: Max checks if your free trial has already been claimed and may prompt you to activate it.

### Visual Intelligence: Explaining your images

Max can now "see" and analyze the contents of your images. When you attach an image or pick one from your library, you can ask Max to explain what is in it.

This is especially helpful for:

- **Automatic Tagging**: Max identifies objects, colors, and styles.
- **SEO Alignment**: Max can suggest if an image matches your product's keywords.
- **Context Sharing**: If Max explains an image in one chat turn, other specialists can
  reuse that context when generating content.

---

## Max Image Editor
Best for dedicated image editing and enhancement workflows.

### Core tools

1. **Background removal** — Remove backgrounds from any product or brand image, outputting a clean cutout. This is the most commonly used editing tool for preparing product photos.
2. **Image quality enhancement** — Improve the overall visual quality of an image — sharpness, clarity, and detail. Ideal for phone camera photos or less-than-ideal conditions.
3. **Lighting adjustment** — Apply professional lighting styles to your images. Describe the look you want (e.g., "warm natural lighting", "cool studio lighting", "soft diffused light", "bright daylight") and Max will translate it.
4. **Background replacement** — Replace the background of a product image with a generated scene or a reference image. You can describe the desired background in text, or provide a reference image.

### Media Library requirement

Every Image Editor tool requires an image from your Media Library. If you request an edit without attaching an image, Max will ask you to select one first. All results are automatically saved back to your Media Library for reuse.

### Multi-step editing

You can chain multiple edits in a single chat session. For example:

1. Remove the background from a product photo.
2. Enhance the quality of the resulting image.
3. Replace the background with a lifestyle scene for social media use.

Each step uses the output from the previous one.

### Cross-agent reuse

Images edited here are saved to your Media Library. You can then use them with other Max specialists — for example, using an edited product photo in a Max Social Marketing campaign or applying it to a product listing via Max Merchandiser.

### Ask this assistant when you want to

- Clean up or improve product and brand images quickly
- Run multi-step edits in a single conversation
- Prepare product-ready images before creating social posts or listings

### Example prompts

- "Remove the background from this product photo."
- "Enhance the quality of this image and make it look sharper."
- "Apply warm natural lighting to this product shot."
- "Place this product on a modern kitchen counter with warm natural lighting."
- "Remove the background, then replace it with a clean white studio backdrop."

---

## Max Social Marketing
Best for social campaign ideation and creative production flows.

### Campaign creative ideation

Max Social Marketing can generate complete campaign concepts including hooks, captions, CTA angles, and content direction. Campaigns can be tailored to different goals:

- **Awareness campaigns**: Focused on reach, impressions, and brand visibility
- **Sales/conversion campaigns**: Focused on driving purchases, cart additions, and revenue
- **Engagement campaigns**: Focused on comments, shares, and community building

When you tell Max Social Marketing your campaign goal, it tailors the creative angles, copy tone, and CTA style accordingly.

### Post-ready creative production

- Post captions with tone and voice alignment
- Hashtag suggestions relevant to your niche and audience
- Content angles (benefit-led, feature-led, lifestyle-led)
- Multi-variant post concepts from a single product asset

### Image editing capabilities (tool leasing)

Max Social Marketing can borrow image editing capabilities from the Image Editor specialist when campaign assets need visual changes. You do not need to switch agents — the Social Marketing specialist handles image editing behind the scenes when it is part of the social workflow.

### Ask this assistant when you want to

- Turn product assets into social post ideas and campaign variants
- Build goal-driven social creative tied to awareness or sales targets

### Example prompts

- "Create a 7-day social campaign plan for this product with awareness and sales goals."
- "Turn this product image into 3 social post concepts with captions and CTA lines."
- "Give me Instagram-ready post ideas for my new skincare line — targeting young professionals."
- "What hashtags should I use for a Filipino audience interested in home cooking products?"

---

### Media Library Integration & Attachments

You can attach images directly from your computer or pick them from your **Media Library** via the selection menu.

Any image Max generates or identifies is automatically saved to your Media Library. This means you can:

- **Cross-Reference**: Use a generated logo in a Builder prompt.
- **Unified Catalog**: Apply edited product photos directly to listings.
- **Persistent Context**: Sub-agents use your library as a shared visual memory.

---

## Max Insights
Best for analytics and business performance questions.

### Sales Intelligence

Max can break down your revenue using several dimensions:

- **Orders (recent listing)**: "Show my latest orders", "List unpaid orders", "How many completed orders do I have?" Default: last 30 days, page 1, limit 10. Filters: status, payment_status (when explicitly requested).
- **Status breakdown**: Order status and payment status breakdowns for any period. Default: last 30 days.
- **Total sales by channel**: Revenue breakdown by channel. Default: last 30 days.
- **Top selling products**: Ranked by quantity sold / sales (not page views). Default: last 30 days.
- **Peak sales periods**: Best day/week/month for sales. Can analyze broad history.
- **Sales by product category**: Group by `category` or `product_type` to see which segments drive the most revenue.
- **Discount code performance**: Usage counts, total discount amounts, and conversion impact per coupon.

### Traffic & Content Analysis

Understand how users find and interact with your store:

- **Traffic sources**: Where visitors come from (Direct, Social, Search). Default: last 30 days.
- **Traffic trend**: Daily visits/sessions trend. Default: last 30 days.
- **New vs returning visitors**: Cohort breakdown. Default: last 30 days.
- **Most visited product**: Ranked by page views. Links shown are customer-facing storefront links.
- **Most visited blog**: Ranked by page views. Links shown are customer-facing storefront links.
- **Products list**: Paginated list of products from your catalog for reference.
- **Contacts list**: List of contacts/leads from your CRM for reference.

### CRM (Leads)

- **Latest leads**: "Show my last 10 leads" (maps to a `limit` parameter).
- **Leads summary**: "How many new leads this week?" (reports how many became customers-with-orders). Channel/source filters: `store`, `guest_checkout`, `facebook`, `google`.

### SQL exploratory mode

Max Insights can run SQL queries against approved datasets for advanced exploratory analysis:

- **Approved datasets**:
  - `orders.sales_daily` — Daily sales aggregates
  - `orders.status_daily` — Daily order status counts
  - `orders.sales_by_channel_daily` — Daily sales broken down by channel
- **Limitations**: SELECT queries only, no data modification, no joins across datasets, results limited in row count.
- **Use case**: "Run a query to show me daily sales totals for the last 14 days", "Show me order status counts grouped by week."

### Visual Data & Charting

Max doesn't just give you numbers; it generates visual reports.

- **Dynamic charts**: Ask Max to "show me a chart of my sales this month" to get a visual representation.
- **Chart types**: Bar, horizontal bar, area, line, donut — Max selects the best type based on the data shape.
- **Date range filtering**: Every insight can be filtered by specific date ranges (7, 30, 90 days, or custom).
- **Generate Charts button**: When Max returns chartable data, a "Generate Charts" button appears under the message. Clicking it sends a follow-up prompt that produces an inline Apex chart.

### Hard rules

- Max Insights is a business coach. It should not generate product descriptions, SEO meta tags, blog content, or edit pages — those belong to other agents.
- Charts are generated on request only (when you explicitly ask for a chart/visualization or click Generate Charts).
- List-style formatting (bullets/numbered lines) is preferred over markdown tables.
- "Users" can mean website visitors or registered customers — Max will clarify if ambiguous.

### Ask this assistant when you want to

- Understand what is working in your store
- Decide what to improve next based on data
- Run advanced SQL queries against your store's data

---

## Max Merchandiser
Best for product listing and catalog optimization.

### Product creation workflow

Max Merchandiser guides you through creating a new product from scratch:

1. **Start creation** — Tell Max you want to create a new product. It asks whether physical or digital, and collects basic info (name, brand, description).
2. **Category** — Max helps you select or create the right product category.
3. **Identity fields** — SKU, brand name, and URL slug are set up (auto-generated when appropriate).
4. **Descriptions** — Max generates product descriptions tailored to your target audience and key benefits.
5. **Media** — Upload and organize product images and videos directly.
6. **Pricing and stock** — Set price, compare-at price, unit cost, available stock, and low-stock threshold.
7. **Measurements** — Dimensions (length, width, height) and weight with unit support (kg, g, lb, oz, cm, mm, in, ft).
8. **SEO meta tags** — Generate optimized meta title and meta description for search visibility.
9. **Submit** — The product is created in your catalog with all details filled in.

### Product editing tools (when a product is in context)

- **Update product identity** — Change name, brand, SKU, and slug.
- **Update product category** — Move the product to a different category.
- **Generate product descriptions** — AI-generated descriptions tailored to audience, features, and benefits.
- **Update product descriptions** — Directly modify short or long description.
- **Generate SEO meta tags** — Optimized meta title and description with keyword targeting. Requires explicit approval.
- **Update SEO meta tags** — Directly modify existing meta title and description.
- **Update pricing and stock** — Adjust price, compare-at price, unit cost, available stock, low-stock threshold.
- **Update measurements** — Set physical dimensions and weight with multiple unit systems.
- **Update product media** — Upload, add, or replace product images and videos.

### Promotional reel creation

- **Image quality pre-check** — Max validates that product images are suitable for reel generation.
- **Reel generation** — A short promotional video generated using product images, name, and description.
- **Background job** — Reels generate in the background. You can continue chatting and Max notifies you when ready.

### Product list panel

Open the product list panel to browse existing products and select one to work on. Accessible from the welcome screen card or the widget menu in the chat composer.

### Tool switching

Max Merchandiser uses different tool sets depending on context:
- **Before product selection**: Only creation tools are available.
- **After product selection**: Full editing tools become available.

### Ask this assistant when you want to

- Improve conversion on product pages by tailoring descriptions for specific audiences
- Prepare better listings faster by automating SEO keyword research and meta-tagging
- Launch a new product line with brand-consistent details and automatic SKU generation
- Keep your catalog updated with precise measurements and inventory details from chat
- Create short promotional reels for your products

### Example prompts

- "I want to create a new product. Walk me through it from the beginning."
- "Help me improve the title and description for this product listing."
- "Create a short promotional reel for this product."
- "Generate SEO meta tags for this product."
- "Update the price to ₱1,200 and set available stock to 50."
- "Write a product description targeting young professionals who value convenience."
- "Set the weight to 0.5 kg and dimensions to 10cm × 5cm × 3cm."

---

## Max Copywriter
Best for taking a blog idea from a rough theme to a structured, SEO-aware draft you can publish from your store.

Max Copywriter is backed by the **Blog Writer** experience: chat guides the steps, and the **Blog Writer** panel on the side holds your topic, title, keywords, outline, and the full article as they are filled in.

### The 4-stage blog creation workflow

#### Stage 1: Topic generation

- **Vague idea → topic suggestions**: Start with a broad theme (e.g., "wellness tips", "AI tools") and Max generates specific topic suggestions.
- **Specific topic → skip**: If you already have a specific topic (e.g., "Tips for grooming dogs at home"), Max confirms it and skips to Stage 2.

#### Stage 2: Title generation

Max collects additional context:
- **Post type**: how-to/tutorial, listicle, opinion/editorial, case study, review/comparison, news update, storytelling/narrative, FAQ/problem-solving, behind-the-scenes
- **Writing style**: formal, casual, conversational, professional, friendly
- **Target audience**: entrepreneurs, students, professionals, consumers, beginners, experts
- **Target region**: US, Philippines, global, Asia, Europe

Then generates title suggestions.

#### Stage 3: SEO keywords and outline

Max generates:
- **SEO keywords**: Primary keyword, secondary keywords, long-tail keywords, LSI (Latent Semantic Indexing) keywords
- **Blog outline**: Structured section outline with suggested headings and key points

Additional parameters:
- **Tone**: professional, friendly, authoritative, educational, inspirational, humorous
- **Word count**: 500, 1000, 1500, 2000, 2500, or 3000 words

You must **approve** before Max proceeds to Stage 4.

#### Stage 4: Full content generation

Max writes the complete blog post. The generated content is written directly into the Blog Writer widget fields.

### Blog Writer widget panel fields

- Topic
- Title
- Keywords
- Outline
- Blog content (body)
- SEO meta title
- SEO meta description

As Max completes each stage, it fills in the corresponding fields automatically.

### Post-generation refinements (direct widget edits)

After the draft is generated, ask Max to revise specific parts — updates go directly to Blog Writer fields:
- Title, content/body, SEO meta title, SEO meta description

### Tap-to-select options picker

When Max asks you to pick among set choices (tone, length, format), use the tap options in the chat — one main choice per turn keeps the workflow smooth.

### Finishing in the Blog Writer panel

Use the panel to **save as a draft** (edit later) or **publish** when satisfied. Max can still help revise wording after the draft is shown.

### Availability

Blog writing may require an eligible **plan** and the **Blog Writer** capability for your store. If Max Copywriter does not appear in the agent list or Max explains the feature is unavailable, check your subscription and installed marketplace apps.

### Example prompts

- "I want to blog about sustainable packaging for small shops—help me narrow it to one strong topic."
- "Topic is fixed: home workout mistakes for beginners. Suggest titles as a how-to for busy professionals in the Philippines, friendly tone."
- "Show me the keyword set and outline before you write the full article."
- "Shorten the introduction and make the CTA stronger—update the blog fields."
- "Give me 5 blog topic ideas for my store."
- "Help me write a blog post, please open blog writer widget."

---

## Max Builder
Best for static pages, menu/navigation, and footer editing.

### Page generation

Available page types:

- Home page
- About Us page
- Contact Us page
- Warranty page
- Products page
- Privacy Policy page
- Return Policy page
- Terms of Service page
- Custom pages (by slug)

Before generating, Max validates the request against your store state (existing pages, plan restrictions, slug availability).

### Page Builder help tools

![Page Builder help tools menu](max-builder-help-tools)

#### 1) Visual Editor

- **What it does**: Click any element on the page and edit text, styling, and attributes with AI support.
- **When to use**: You want to quickly change copy, spacing, colors, or style of a specific block.
- **How to use**: Open Max Builder → Click Visual Editor → Click the element → Send a clear instruction.
- **Pro tip**: Edit one area at a time for cleaner results and easier undo/redo.

#### 2) Reorder

- **What it does**: Drag-and-drop reordering of sections or elements on the page.
- **When to use**: Change storytelling flow or improve conversion by changing page sequence.
- **How to use**: Click Reorder → Drag the element → Drop → Review → Undo/redo if needed.
- **Pro tip**: Start with major blocks first (hero, benefits, testimonials, CTA).

#### 3) Select Element

- **What it does**: Attaches a selected page element to your chat message so Max can use it as reference.
- **When to use**: You want precise edits to one specific section.
- **How to use**: Click Select Element → Click the target → Confirm attachment → Prompt Max.
- **Pro tip**: If Max edits the wrong area, re-select and resend.

#### 4) Page List

- Open your existing pages and choose which page to edit.
- Switch between pages for editing within Max Builder.
- Visible when Max Builder is the selected agent.

### Menu Editor mode

For menu/navigation requests, Max opens the Menu Editor. The full tool surface includes:

**Structure management**:
- Add, remove, move, and update menu items
- Replace link targets (point items to different pages, products, or categories)
- Search available link targets

**Design and styling**:
- Layout changes
- Logo update
- Colors (background, text, hover)
- Spacing (padding, margins)
- Typography (font family, size, weight, letter spacing)
- Sticky behavior toggle

**Advanced**:
- Menu modals (create, update, delete, attach, detach)
- Undo last change

Menu edits happen on a managed preset copy. You review changes before they go live.

### Footer editing mode

- Max activates footer mode first, then applies footer-only edits.
- If no footer exists, Max asks for confirmation before generating one.
- Footer edits are isolated from page content.
- Footer can use deterministic links (store details, social links) and product lookups.

### Stock image search

Max Builder can search for stock photos from Pexels when building pages — for hero banners, product showcases, or about sections.

### Legacy page migration

- Creates a separate migrated page with a **`-max-version`** suffix.
- Proposes extracted theme/design memory first before persisting.
- Waits for your explicit approval before saving migration changes.

### Custom page support

- Max Builder can open supported custom pages by slug.
- Publish validates slugs; Max can create a unique slug if needed.
- On publish success, Max returns the full live page URL.
- Product-listing cards support share actions.

### Single-page editing

Max Builder enforces one page at a time. Switch or close the current page before opening another.

### Example prompts

- "Build a homepage for my store."
- "Create an About page for my store."
- "Build a 'Return Policy' page for my electronics store with a formal tone."
- "Add a new 'Special Offers' link to my header menu."
- "Remove the 'Blog' link from my navigation menu."
- "Change the menu colors to match my brand — dark navy background with white text."
- "Make my menu sticky so it stays visible when scrolling."
- "Open my footer editor and add contact details plus social links."
- "Migrate my legacy About page to a Max-editable version."

---

## Onboarding Assistant
Best for first-time store setup.

- Set store name and subdomain
- Add slogan and industry
- Generate or upload your logo
- Build your first Home, About, Contact, and key policy pages

### Ask this assistant when you want to

- Launch your store quickly from scratch
- Complete required setup steps in order

---

## How to ask Max for better results

Use clear prompts with context. Include your goal, your audience, and any constraints.

### Prompt formula

"Help me [goal] for [audience] with [tone/style/constraints]."

### Better prompt examples

- "Create a product description for handmade soy candles for first-time buyers. Keep it warm and concise."
- "Analyze my last 7 days of traffic and tell me 3 actions to increase conversions."
- "Write a blog outline about skin-care routines for busy moms. Tone: friendly and expert."
- "Generate a simple About page for a local coffee roaster focused on sustainability."

---

## Quick start by task

### If you want more sales

1. Ask Max Insights for top-performing products and traffic sources.
2. Ask Max Merchandiser to improve weak product pages.
3. Ask Max Copywriter for supporting blog content to drive traffic.

### If you are launching a new store

1. Complete branding details with Max.
2. Generate or upload a logo.
3. Approve your theme/structure suggestions.
4. Generate your first core pages.

### If a product page is not converting

1. Ask for a product description rewrite focused on benefits.
2. Ask for an SEO meta title and description.
3. Ask for clearer CTA suggestions and product highlights.

---

## Tips for smoother conversations

- Be specific: mention product type, customer type, and tone.
- Work in steps: ask Max to do one clear task at a time.
- Use follow-ups: "Make it shorter", "Use a premium tone", "Add 3 bullet points".
- Confirm outputs before moving on to the next task.

---

## Known limits (so expectations are clear)

- Some features depend on your current plan (free, trial, paid).
- **Max Copywriter / Blog Writer** may be limited on Free plans or when the Blog Writer app is not enabled for your store—even on a paid plan.
- Some specialist modes may only appear when enabled in your store setup.
- In onboarding, Max may require approvals before continuing page generation.
- Max can guide and generate, but your final review is still important before publishing.

---

## Troubleshooting

### Max says it cannot continue

Try these steps:

1. Complete any pending UI action (option picker or approval).
2. Make sure you are in the correct specialist mode.
3. Rephrase your request in one clear sentence.

### Max response is too generic

Add context:

- Who is your target customer?
- What is your preferred tone (friendly, premium, technical)?
- What is your exact goal (conversion, SEO, clarity, engagement)?

---

## Sample prompts you can copy

- "Give me 5 product title options for a minimalist leather wallet."
- "Rewrite this description for higher conversion and simpler language: [paste text]."
- "Summarize this week's store performance and suggest my top 3 priorities."
- "Help me create a blog from start to finish about meal prep for busy professionals—friendly, expert tone."
- "I approve the outline; generate the full post at medium length."
- "Draft a clean Contact page for a custom furniture shop in Cebu."
- "Run a SQL query to show me daily sales totals for the last 14 days."
- "Create a 7-day social campaign plan for this product with awareness and sales goals."
- "Remove the background from this product photo and place it on a kitchen counter."

---

## Final reminder

Max works best as a collaborator: give context, review outputs, and iterate quickly. The more specific your prompt, the better the result.
