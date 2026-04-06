import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BarChart3,
  Bot,
  Compass,
  LayoutTemplate,
  Megaphone,
  PenSquare,
  Rocket,
  Sparkles,
} from "lucide-react";
import agentMenuImage from "./assets/max-agents-menu.png";
import builderHelpToolsImage from "./assets/max-builder-help-tools.png";
import heroImage from "./assets/max-logo.png";
import "./App.css";

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "orchestrator", label: "Main Orchestrator" },
  { id: "find-agents", label: "Find Agents" },
  { id: "onboarding", label: "Onboarding" },
  { id: "insights", label: "Max Insights" },
  { id: "merchandiser", label: "Merchandiser" },
  { id: "copywriter", label: "Copywriter" },
  { id: "builder", label: "Builder" },
];

const tabIcons = {
  overview: Compass,
  orchestrator: Bot,
  "find-agents": Rocket,
  onboarding: Sparkles,
  insights: BarChart3,
  merchandiser: Megaphone,
  copywriter: PenSquare,
  builder: LayoutTemplate,
};

function App() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabContent = useMemo(() => {
    const views = {
      overview: (
        <section className="panel">
          <h2>Max at a glance</h2>
          <p>
            Max is your AI copilot for starting, running, and growing your
            business. Route tasks by intent, then execute from one chat box.
          </p>
          <div className="quick-grid">
            <article>
              <h3>Branding and image setup</h3>
              <p>
                Use Main Orchestrator for background removal, quality
                enhancement, lighting adjustments, and logo generation.
              </p>
            </article>
            <article>
              <h3>Product and conversion growth</h3>
              <p>
                Use Merchandiser for listings and SEO, then Insights for
                trend-based actions.
              </p>
            </article>
            <article>
              <h3>Pages and content publishing</h3>
              <p>
                Use Builder for page creation and Copywriter for blog drafting,
                rewrites, and tone updates.
              </p>
            </article>
          </div>
          <h3 className="section-title">High-signal starter prompts</h3>
          <div className="prompt-grid">
            <article>
              <p>Create a home page for a premium coffee brand with 3 sections.</p>
            </article>
            <article>
              <p>Rewrite this product title and meta description for SEO impact.</p>
            </article>
            <article>
              <p>Summarize this week's order trends and suggest next actions.</p>
            </article>
          </div>
        </section>
      ),
      orchestrator: (
        <section className="panel">
          <h2>Prosperna Main Orchestrator (Max)</h2>
          <p>
            Max is the main Prosperna orchestrator. It handles branding and
            image workflows directly, and routes you to the right specialist
            for product, blog, page, and analytics tasks.
          </p>
          <h3>Direct capabilities in Max</h3>
          <ul>
            <li>Remove image backgrounds</li>
            <li>Enhance image quality</li>
            <li>Adjust image lighting using style presets</li>
            <li>Replace image backgrounds with generated or reference scenes</li>
            <li>Generate a base logo for your store</li>
            <li>Generate favicon and wordmark logo variations</li>
            <li>Apply selected logo and favicon to store branding</li>
          </ul>
          <h3>Chained image-edit workflow</h3>
          <p>
            Image edits can be done in sequence within the same chat. After one
            edit completes, ask for the next change and Max can continue from
            the latest output instead of restarting from the original file.
          </p>
          <ol>
            <li>Start with the first edit (for example, background removal).</li>
            <li>Send a follow-up request for the next edit (for example, new background).</li>
            <li>Continue with additional refinements like lighting or quality.</li>
          </ol>
          <p className="muted">
            This step-by-step flow helps you iterate faster and keep each
            transformation consistent.
          </p>
          <h3>Where generated images go</h3>
          <p>
            Images generated or transformed by Max are automatically saved to
            your Media Library, so you can reuse them later in product listings,
            page edits, and branding updates.
          </p>
          <h3>Routing responsibilities</h3>
          <ul>
            <li>Product catalog, product SEO, and product descriptions route to Max Merchandiser</li>
            <li>Blog creation routes to Max Copywriter</li>
            <li>Static pages and menu/navigation edits route to Max Builder</li>
            <li>Analytics and performance coaching route to Max Insights</li>
          </ul>
        </section>
      ),
      "find-agents": (
        <section className="panel">
          <h2>Where to find different agents</h2>
          <ol>
            <li>Open Max chat composer.</li>
            <li>Click the current agent chip in the lower-left corner.</li>
            <li>Select the specialist based on your task.</li>
          </ol>
          <p className="muted">Available options usually include:</p>
          <div className="chips">
            <span>Max (Main Orchestrator)</span>
            <span>Max Insights</span>
            <span>Max Copywriter</span>
            <span>Max Builder</span>
            <span>Max Merchandiser</span>
          </div>
          <img
            className="guide-image"
            src={agentMenuImage}
            alt="Agent switcher menu"
            loading="lazy"
          />
        </section>
      ),
      onboarding: (
        <section className="panel">
          <h2>Onboarding Assistant</h2>
          <p>Best for first-time store setup and launch readiness.</p>
          <ul>
            <li>Store name, subdomain, slogan, and industry setup</li>
            <li>Logo generation and branding completion</li>
            <li>Initial Home, About Us, and Contact Us page setup</li>
          </ul>
        </section>
      ),
      insights: (
        <section className="panel">
          <h2>Max Insights</h2>
          <p>Best for analytics, trends, and clear action plans.</p>
          <ul>
            <li>Sales and order performance summaries</li>
            <li>Traffic and lead trend analysis</li>
            <li>Recommended next steps to improve results</li>
          </ul>
        </section>
      ),
      merchandiser: (
        <section className="panel">
          <h2>Max Merchandiser</h2>
          <p>Best for product listings and SEO improvements.</p>
          <ul>
            <li>Create or improve product descriptions</li>
            <li>Generate SEO titles and meta descriptions</li>
            <li>Update pricing, stock, and media details</li>
          </ul>
        </section>
      ),
      copywriter: (
        <section className="panel">
          <h2>Max Copywriter</h2>
          <p>
            Best for taking a blog idea from a rough theme to a structured,
            SEO-aware draft you can publish from your store.
          </p>
          <p>
            Max Copywriter uses the <strong>Blog Writer</strong> experience:
            chat guides each step, and the <strong>Blog Writer</strong> panel
            holds your topic, title, keywords, outline, and full article as
            they are filled in.
          </p>
          <h3>What you can do</h3>
          <ul>
            <li>
              <strong>Topic ideas</strong> — Start from a broad theme or name a
              specific topic; Max can brainstorm or skip straight to titles when
              your topic is already clear.
            </li>
            <li>
              <strong>Titles and format</strong> — Title options use your post
              type (how-to, listicle, opinion, case study, review, news, story,
              FAQ-style, behind-the-scenes, and similar), writing style,
              audience, and region.
            </li>
            <li>
              <strong>SEO keywords and outline</strong> — Primary and
              supporting keywords plus a section outline; review before the
              final draft is written.
            </li>
            <li>
              <strong>Full post</strong> — Article at a length you agree on in
              chat (short, medium, or long-form).
            </li>
            <li>
              <strong>Refinements</strong> — After a draft appears in the
              panel, ask Max to adjust the headline, body, or SEO title /
              description so changes stay aligned with publish fields.
            </li>
          </ul>
          <h3>How the flow usually goes</h3>
          <ol>
            <li>
              <strong>Topic</strong> — Vague idea → suggested topics, or confirm
              a topic you already chose.
            </li>
            <li>
              <strong>Title</strong> — Max gathers post type, audience, region,
              and style, then suggests titles.
            </li>
            <li>
              <strong>Keywords and outline</strong> — SEO keywords and
              structure; confirm before the next step.
            </li>
            <li>
              <strong>Full content</strong> — Complete post from the approved
              outline and keywords.
            </li>
          </ol>
          <p>
            When Max offers fixed choices (tone, length, format), use the{" "}
            <strong>tap options</strong> in chat when they appear—one main
            choice per turn keeps things accurate.
          </p>
          <h3>Finishing in the Blog Writer panel</h3>
          <p>
            Save as a <strong>draft</strong> to edit later, or{" "}
            <strong>publish</strong> when ready. You can still ask Max to revise
            wording after the draft is shown.
          </p>
          <h3>Example prompts</h3>
          <ul>
            <li>
              &quot;I want to blog about sustainable packaging for small
              shops—help me narrow it to one strong topic.&quot;
            </li>
            <li>
              &quot;Topic is fixed: home workout mistakes for beginners.
              Suggest titles as a how-to for busy professionals in the
              Philippines, friendly tone.&quot;
            </li>
            <li>
              &quot;Show me the keyword set and outline before you write the
              full article.&quot;
            </li>
            <li>
              &quot;Shorten the introduction and make the CTA stronger—update the
              blog fields.&quot;
            </li>
          </ul>
          <h3>Availability</h3>
          <p className="muted">
            Blog writing may require an eligible plan and the Blog Writer
            capability for your store. If Max Copywriter is missing from the
            agent list or Max says the feature is unavailable, check your
            subscription and marketplace apps.
          </p>
        </section>
      ),
      builder: (
        <section className="panel">
          <h2>Max Builder</h2>
          <p>
            Use Max Builder for static page work, page updates, and visual
            editing workflows.
          </p>
          <h3>Page creation</h3>
          <p>
            Ask directly: "Create a Contact Us page" or ask which page types are
            currently supported before generating.
          </p>
          <p className="muted">
            Supported page types usually include Home, About Us, Contact Us, and
            Warranty.
          </p>
          <h3>Help tools</h3>
          <ul>
            <li>
              <strong>Visual Editor:</strong> Click elements to edit text,
              styling, and attributes.
            </li>
            <li>
              <strong>Reorder:</strong> Drag and drop sections to improve flow.
            </li>
            <li>
              <strong>Select Element:</strong> Attach a selected section to your
              chat prompt for targeted edits.
            </li>
            <li>
              <strong>Page List:</strong> Visible when Builder is selected, used
              to open and edit existing supported pages.
            </li>
          </ul>
          <img
            className="guide-image"
            src={builderHelpToolsImage}
            alt="Max Builder help tools"
            loading="lazy"
          />
          <h3>Limitation</h3>
          <p>
            Legacy pages made in the old Page Builder (GrapesJS) are not
            directly supported in this workflow. If you see an unsupported-page
            message, choose a supported page or request guidance in chat.
          </p>
        </section>
      ),
    };

    return views[activeTab] || views.overview;
  }, [activeTab]);

  return (
    <main className="app">
      <motion.header
        className="hero"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <div className="hero-media">
          <img src={heroImage} alt="Max mark" className="hero-avatar" />
        </div>
        <div>
          <p className="kicker">PROSPERNA AI DOCS</p>
          <h1>
            Hi, I&apos;m Max <Sparkles className="title-icon" aria-hidden="true" />
          </h1>
          <p className="hero-subtitle">
            Your AI co-pilot for starting, running, and growing your business.
          </p>
        </div>
      </motion.header>

      <nav className="top-tabs" aria-label="Agent sections">
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            type="button"
            className={tab.id === activeTab ? "tab active" : "tab"}
            onClick={() => setActiveTab(tab.id)}
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            {(() => {
              const Icon = tabIcons[tab.id];
              return Icon ? <Icon className="tab-icon" aria-hidden="true" /> : null;
            })()}
            {tab.label}
          </motion.button>
        ))}
      </nav>

      <section className="content">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
            {tabContent}
          </motion.div>
        </AnimatePresence>
      </section>
    </main>
  );
}

export default App;
