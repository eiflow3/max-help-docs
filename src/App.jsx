import React, { useState } from "react";
import {
  Sparkles,
  Zap,
  Layout,
  BarChart3,
  ShoppingBag,
  PenTool,
  Image as ImageIcon,
  ShieldAlert,
  Lightbulb,
  CheckCircle2,
  Video,
  History,
  Eye,
  FileImage,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import "./App.css";

// Asset Imports
import maxLogo from "./assets/max-logo.png";

// Doc Section Imports
import { MainOrchestratorDoc } from "./docs/sections/MainOrchestratorDoc";
import { ImageEditorDoc } from "./docs/sections/ImageEditorDoc";
import { SocialMarketingDoc } from "./docs/sections/SocialMarketingDoc";
import { MerchandiserDoc } from "./docs/sections/MerchandiserDoc";
import { CopywriterDoc } from "./docs/sections/CopywriterDoc";
import { BuilderDoc } from "./docs/sections/BuilderDoc";
import { MaxInsightsDoc } from "./docs/sections/MaxInsightsDoc";

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

const App = () => {
  const [activeTab, setActiveTab] = useState("max");

  const tabs = [
    { id: "max", label: "Max Orchestrator", icon: <Sparkles className="tab-icon" /> },
    { id: "image-editor", label: "Image Editor", icon: <FileImage className="tab-icon" /> },
    { id: "social-marketing", label: "Social Marketing", icon: <Video className="tab-icon" /> },
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
          <motion.section initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
            <MainOrchestratorDoc />
          </motion.section>
        );
      case "image-editor":
        return (
          <motion.section initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
            <ImageEditorDoc />
          </motion.section>
        );
      case "social-marketing":
        return (
          <motion.section initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
            <SocialMarketingDoc />
          </motion.section>
        );
      case "merchandiser":
        return (
          <motion.section initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
            <MerchandiserDoc />
          </motion.section>
        );
      case "copywriter":
        return (
          <motion.section initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
            <CopywriterDoc />
          </motion.section>
        );
      case "builder":
        return (
          <motion.section initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
            <BuilderDoc />
          </motion.section>
        );
      case "insights":
        return (
          <motion.section initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
            <MaxInsightsDoc />
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
                  <p className="muted">Pages built with GrapesJS (older editor) cannot be directly edited. <strong>Fix:</strong> Rebuild them as modern pages via Max Builder, or ask Max to migrate them.</p>
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
              <div className="guardrail-item">
                <ShieldAlert className="guardrail-icon" style={{ color: "#ec4899" }} />
                <div>
                  <strong>Plan-Gated Features</strong>
                  <p className="muted">Blog Writer, SEO Meta Tags Generator, and Page Builder tools are locked on the Free plan. Max will show a plan upgrade prompt when you try to use them.</p>
                </div>
              </div>
              <div className="guardrail-item">
                <ImageIcon className="guardrail-icon" style={{ color: "#6366f1" }} />
                <div>
                  <strong>Image Required for Editing</strong>
                  <p className="muted">All image editing tools (background removal, quality enhancement, lighting, background replacement) require an image from your Media Library. Max will ask you to attach one if missing.</p>
                </div>
              </div>
              <div className="guardrail-item">
                <Eye className="guardrail-icon" style={{ color: "#0ea5e9" }} />
                <div>
                  <strong>Charts Are On-Request</strong>
                  <p className="muted">Max Insights only generates chart visualizations when you explicitly ask for one or click the "Generate Charts" button.</p>
                </div>
              </div>
              <div className="guardrail-item">
                <Zap className="guardrail-icon" style={{ color: "#f97316" }} />
                <div>
                  <strong>Single-Page Editing</strong>
                  <p className="muted">Max Builder enforces one page at a time. Publish or close the current page before opening another.</p>
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
