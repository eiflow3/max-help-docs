import React, { useState } from "react";
import {
  Sparkles,
  Zap,
  Layout,
  MessageSquare,
  BarChart3,
  ShoppingBag,
  PenTool,
  Image as ImageIcon,
  ArrowRight,
  ShieldAlert,
  Lightbulb,
  CheckCircle2,
  Video,
  Search,
  MousePointer2,
  Move,
  History,
  HardDrive,
  Eye,
  FileImage,
  TrendingUp,
  PieChart,
  Users,
  Calendar,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

// Asset Imports
import maxLogo from "./assets/max-logo.png";
import agentsMenu from "./assets/max-agents-menu.png";
import builderTools from "./assets/max-builder-help-tools.png";
import mediaLibraryMenu from "./assets/max-media-library-dropdown.png";

const SparkleBg = () => (
  <>
    <div className="sparkle" style={{ top: "10%", left: "5%", width: "300px", height: "300px" }} />
    <div className="sparkle" style={{ top: "60%", right: "5%", width: "400px", height: "400px" }} />
  </>
);

const PromptCard = ({ tag, text }) => (
  <motion.div 
    className="prompt-card"
    whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.05)" }}
    whileTap={{ scale: 0.98 }}
  >
    <span className="prompt-tag">{tag}</span>
    <p>{text}</p>
  </motion.div>
);

const MaxFlow = () => (
  <div className="max-behavior" style={{ marginBottom: "2rem" }}>
    <h3>The Max Intelligence Flow</h3>
    <p className="muted">How Max coordinates your requests across specialist models.</p>
    <div className="flow-container">
      <div className="flow-step">
        <MessageSquare className="tab-icon" />
        <div>Orchestrator</div>
      </div>
      <ArrowRight className="muted" />
      <div className="flow-step">
        <Zap className="tab-icon" />
        <div>Intent Analysis</div>
      </div>
      <ArrowRight className="muted" />
      <div className="flow-step" style={{ background: "var(--primary)" }}>
        <PenTool className="tab-icon" />
        <div>Specialist Execution</div>
      </div>
    </div>
  </div>
);

const FeatureItem = ({ icon: Icon, title, desc }) => (
  <li className="feature-item">
    <Icon size={18} color="var(--primary)" style={{ flexShrink: 0, marginTop: "0.25rem" }} />
    <div>
      <strong>{title}</strong>
      <p className="muted" style={{ margin: 0, fontSize: "0.9rem" }}>{desc}</p>
    </div>
  </li>
);

const App = () => {
  const [activeTab, setActiveTab] = useState("max");

  const tabs = [
    { id: "max", label: "Max Orchestrator", icon: <Sparkles className="tab-icon" /> },
    { id: "merchandiser", label: "Merchandiser", icon: <ShoppingBag className="tab-icon" /> },
    { id: "copywriter", label: "Copywriter", icon: <PenTool className="tab-icon" /> },
    { id: "builder", label: "Builder", icon: <Layout className="tab-icon" /> },
    { id: "insights", label: "Insights", icon: <BarChart3 className="tab-icon" /> },
    { id: "guardrails", label: "Guardrails", icon: <ShieldAlert className="tab-icon" /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "max":
        return (
          <motion.section initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="panel">
            <div className="kicker">Main Hub</div>
            <h2>Prosperna Orchestrator</h2>
            <p>
              Max is the central intelligence of your store. It handles core branding, image workflows, and routes complex tasks to specialists.
            </p>

            <div className="doc-image-container">
              <img src={agentsMenu} alt="Agent Switcher" className="doc-image" />
              <p className="muted" style={{ fontSize: "0.85rem", marginTop: "0.75rem" }}>Switch specialists directly in the chat input area.</p>
            </div>

            <MaxFlow />

            <h3 className="section-title">Core Branding & Images</h3>
            <div className="quick-grid">
              <article>
                <Eye className="tab-icon" style={{ color: "var(--primary)" }} />
                <h3>Visual Intelligence</h3>
                <p>Max can analyze and explain the contents of any image you attach or pick from your library.</p>
              </article>
              <article>
                <FileImage className="tab-icon" style={{ color: "#3b82f6" }} />
                <h3>Media Library Integration</h3>
                <p>Attach assets directly from your library to use in complex prompts.</p>
              </article>
            </div>

            <div className="doc-image-container">
              <img src={mediaLibraryMenu} alt="Media Library Menu" className="doc-image" />
              <p className="muted" style={{ fontSize: "0.85rem", marginTop: "0.75rem" }}>Access the Media Library via the attachment selection menu.</p>
            </div>

            <div className="quick-grid" style={{ marginTop: "1rem" }}>
              <article>
                <ImageIcon className="tab-icon" style={{ color: "#ec4899" }} />
                <h3>Chained Content</h3>
                <p>Refine the same image across multiple turns (e.g., remove background, then add lifestyle scene).</p>
              </article>
              <article>
                <HardDrive className="tab-icon" style={{ color: "#10b981" }} />
                <h3>Media Library Sync</h3>
                <p>Every generated asset is automatically saved and indexed for reuse across your store.</p>
              </article>
            </div>

            <h3 className="section-title">Try These Prompts</h3>
            <div className="prompt-grid">
              <PromptCard tag="Analysis" text="What is in this product image and how can I describe it for professional buyers?" />
              <PromptCard tag="Editing" text="Clean up this product image and place it in a minimalist kitchen scene." />
            </div>
          </motion.section>
        );
      case "merchandiser":
        return (
          <motion.section initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="panel">
            <div className="kicker">Catalog Specialist</div>
            <h2>Max Merchandiser</h2>
            <p>Max Merchandiser is your engine for automated catalog growth and high-performance product listings.</p>

            <div className="quick-grid">
              <article>
                <Video className="tab-icon" />
                <h3>Product Reels</h3>
                <p>AI-powered 8-second video synthesis for social awareness, sales, or direct engagement.</p>
              </article>
              <article>
                <Search className="tab-icon" />
                <h3>SEO Mastery</h3>
                <p>Define primary/secondary keywords for meta-tags that actually rank in search results.</p>
              </article>
            </div>

            <h3 className="section-title">Detailed Capabilities</h3>
            <ul className="feature-list">
              <FeatureItem icon={Eye} title="Visual References" desc="Reference explained image contents from Orchestrator in descriptions or reels." />
              <FeatureItem icon={PenTool} title="Descriptions" desc="Tailor copy based on specific features, benefits, and target demographics." />
              <FeatureItem icon={History} title="Inventory Sync" desc="Update pricing, unit costs, and stock levels in a single conversational turn." />
              <FeatureItem icon={Move} title="Physical Specs" desc="Adjust dimensions and weight with unit support (kg, cm, lb, etc.)." />
              <FeatureItem icon={Layout} title="Catalog Setup" desc="Build new listings from scratch with AI-guided categories and identity fields." />
              <FeatureItem icon={ImageIcon} title="Media Control" desc="Synchronize media and categories across your entire collection." />
            </ul>

            <h3 className="section-title">Try These Prompts</h3>
            <div className="prompt-grid">
              <PromptCard tag="Contextual" text="Use the details from the image I just uploaded to write a premium product description." />
              <PromptCard tag="Inventory" text="Update pricing for SKU-99 to $120 and set available stock to 50." />
            </div>
          </motion.section>
        );
      case "copywriter":
        return (
          <motion.section initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="panel">
            <div className="kicker">Content Specialist</div>
            <h2>Max Copywriter</h2>
            <p>Guided step-by-step blog creation. Max handles the heavy lifting, from brainstorming to SEO outlines.</p>

            <div className="max-behavior" style={{ background: "rgba(139, 92, 246, 0.05)", padding: "1.5rem", borderRadius: "16px", border: "1px solid rgba(139, 92, 246, 0.1)", marginBottom: "2rem" }}>
              <h3 style={{ marginTop: 0 }}>Guided Workflow (4 Phases)</h3>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li style={{ display: "flex", gap: "0.5rem", marginBottom: "0.5rem" }}><CheckCircle2 size={16} color="var(--primary)" /> <strong>Phase 1: Topic Selection:</strong> Brainstorm from a broad theme or confirm a fixed topic.</li>
                <li style={{ display: "flex", gap: "0.5rem", marginBottom: "0.5rem" }}><CheckCircle2 size={16} color="var(--primary)" /> <strong>Phase 2: Audience & Style:</strong> Define post type, audience, region, and conversational style.</li>
                <li style={{ display: "flex", gap: "0.5rem", marginBottom: "0.5rem" }}><CheckCircle2 size={16} color="var(--primary)" /> <strong>Phase 3: SEO & Outline:</strong> Receive proposed keywords and post structure for approval.</li>
                <li style={{ display: "flex", gap: "0.5rem" }}><CheckCircle2 size={16} color="var(--primary)" /> <strong>Phase 4: Full Draft:</strong> Generation of short, medium, or long-form articles.</li>
              </ul>
            </div>

            <h3 className="section-title">What You Can Do</h3>
            <div className="quick-grid">
              <article>
                <h3>Refinement Loops</h3>
                <p>Adjust headlines, body copy, or SEO metadata directly after generation.</p>
              </article>
              <article>
                <h3>Draft Management</h3>
                <p>Save directly to your store's blog tools or publish instantly.</p>
              </article>
            </div>

            <h3 className="section-title">Try These Prompts</h3>
            <div className="prompt-grid">
              <PromptCard tag="Ideas" text="Suggest 5 blog topics about sustainable meal prep for busy shops." />
              <PromptCard tag="SEO" text="Generate a long-form SEO outline for 'Top 10 home workout mistakes'." />
            </div>
          </motion.section>
        );
      case "builder":
        return (
          <motion.section initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="panel">
            <div className="kicker">Site Specialist</div>
            <h2>Max Builder</h2>
            <p>The architect of your online presence. Manage page structure and site navigation effortlessly.</p>

            <div className="doc-image-container">
              <img src={builderTools} alt="Builder Tools" className="doc-image" />
              <p className="muted" style={{ fontSize: "0.85rem", marginTop: "0.75rem" }}>Visual Editor, Reorder, and Select Element tools.</p>
            </div>

            <div className="quick-grid">
              <article>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                  <MousePointer2 size={18} color="var(--primary)" />
                  <h3 style={{ margin: 0 }}>Visual Editor</h3>
                </div>
                <p>Click elements to edit text, styling, and attributes with AI support.</p>
              </article>
              <article>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                  <Move size={18} color="var(--primary)" />
                  <h3 style={{ margin: 0 }}>Reorder</h3>
                </div>
                <p>Drag-and-drop sections (Testimonials, Hero, Pricing) to optimize story flow.</p>
              </article>
            </div>

            <h3 className="section-title">New: Page List Navigation</h3>
            <p className="muted">Switch between any existing store page directly from the Builder Menu to continue editing.</p>

            <h3 className="section-title">Try These Prompts</h3>
            <div className="prompt-grid">
              <PromptCard tag="Creation" text="Build a 'Return Policy' page for my electronics store with a formal tone." />
              <PromptCard tag="Navigation" text="Add a new 'Special Offers' link to my header menu." />
            </div>
          </motion.section>
        );
      case "insights":
        return (
          <motion.section initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="panel">
            <div className="kicker">Data Specialist</div>
            <h2>Max Insights</h2>
            <p>Transform your store's raw data into actionable growth priorities. Max analyzes sales, traffic, and content engagement.</p>

            <div className="quick-grid">
              <article>
                <TrendingUp className="tab-icon" style={{ color: "#10b981" }} />
                <h3>Sales Intelligence</h3>
                <p>Analyze sales by category, top selling products, and discount code performance.</p>
              </article>
              <article>
                <PieChart className="tab-icon" style={{ color: "#3b82f6" }} />
                <h3>Traffic Sources</h3>
                <p>Identify where your visitors come from and see your most visited blogs and products.</p>
              </article>
            </div>

            <h3 className="section-title">Detailed Analytics Tools</h3>
            <ul className="feature-list">
              <FeatureItem icon={Zap} title="Chart Generation" desc="Max can generate dynamic visual representations of your sales and traffic trends." />
              <FeatureItem icon={Users} title="User Breakdowns" desc="Differentiate between broader visitors and converted customers for better targeting." />
              <FeatureItem icon={Calendar} title="Date Filtering" desc="Filter any insight by 7, 30, or 90-day periods, or define a custom range." />
              <FeatureItem icon={ShoppingBag} title="Discount Analytics" desc="See which discount codes drive the most conversion and measure their ROI." />
            </ul>

            <h3 className="section-title">Try These Prompts</h3>
            <div className="prompt-grid">
              <PromptCard tag="Sales" text="Show me a chart of my sales by product category for the last 30 days." />
              <PromptCard tag="Traffic" text="Which of my blog posts got the most traffic from social media this week?" />
              <PromptCard tag="Discounts" text="Which discount codes performed best last month and what was their total ROI?" />
            </div>
          </motion.section>
        );
      case "guardrails":
        return (
          <motion.section initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="panel">
            <div className="kicker">Safety & Pro-Tips</div>
            <h2>Max Guardrails</h2>
            <p>Ensure accurate and performant results by following these best practices.</p>

            <div className="guardrails">
              <div className="guardrail-item">
                <ShieldAlert className="guardrail-icon" />
                <div>
                  <strong>Legacy Pages Removal</strong>
                  <p className="muted">Pages built with GrapesJS (older editor) cannot be directly edited. <strong>Fix:</strong> Rebuild them as modern pages via Max Builder.</p>
                </div>
              </div>
              <div className="guardrail-item">
                <Lightbulb className="guardrail-icon" style={{ color: "#3b82f6" }} />
                <div>
                  <strong>Step-by-Step Focus</strong>
                  <p className="muted">Work in steps: confirm the outline before generating the full draft for better precision.</p>
                </div>
              </div>
              <div className="guardrail-item">
                <History className="guardrail-icon" style={{ color: "#f59e0b" }} />
                <div>
                  <strong>Catalog Sync Latency</strong>
                  <p className="muted">Inventory updates may take a few seconds to reflect across all visual elements. Allow sync to complete.</p>
                </div>
              </div>
              <div className="guardrail-item">
                <CheckCircle2 className="guardrail-icon" style={{ color: "#10b981" }} />
                <div>
                  <strong>Human Final Review</strong>
                  <p className="muted">Always review financial settings (Pricing, Tax) and legal copy before publishing to live customers.</p>
                </div>
              </div>
            </div>
          </motion.section>
        );
      default:
        return null;
    }
  };

  return (
    <main className="app">
      <SparkleBg />
      <header className="hero">
        <div className="hero-media">
          <motion.img 
            src={maxLogo} 
            alt="Max AI Logo" 
            className="hero-avatar"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{ borderRadius: "20px" }}
          />
        </div>
        <div>
          <div className="kicker">Intelligent Assistance</div>
          <h1>Meet Max.</h1>
          <p className="hero-subtitle">
            Your conversational partner for building and growing your store.
          </p>
        </div>
      </header>

      <nav className="top-tabs">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveTab(t.id)}
            className={`tab ${activeTab === t.id ? "active" : ""}`}
            style={{ border: "none", outline: "none" }}
          >
            {t.icon}
            {t.label}
          </button>
        ))}
      </nav>

      <AnimatePresence mode="wait">
        <motion.div 
          className="content" 
          key={activeTab}
        >
          {renderContent()}
        </motion.div>
      </AnimatePresence>

      <footer style={{ marginTop: "4rem", textAlign: "center", opacity: 0.5, fontSize: "0.8rem", paddingBottom: "2rem" }}>
        &copy; {new Date().getFullYear()} Prosperna Inc. All rights reserved.
      </footer>
    </main>
  );
};

export default App;
