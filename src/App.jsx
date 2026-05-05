import React, { useState } from "react";
import {
  Sparkles,
  Layout,
  BarChart3,
  ShoppingBag,
  PenTool,
  FileImage,
  ShieldAlert,
  Video,
  Home,
  Search,
  BookOpen,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import "./App.css";

import { Sidebar } from "./components/Sidebar";

// Doc Section Imports
import { OverviewDoc } from "./docs/sections/OverviewDoc";
import { FindAgentsDoc } from "./docs/sections/FindAgentsDoc";
import { OnboardingDoc } from "./docs/sections/OnboardingDoc";
import { MainOrchestratorDoc } from "./docs/sections/MainOrchestratorDoc";
import { ImageEditorDoc } from "./docs/sections/ImageEditorDoc";
import { SocialMarketingDoc } from "./docs/sections/SocialMarketingDoc";
import { MerchandiserDoc } from "./docs/sections/MerchandiserDoc";
import { CopywriterDoc } from "./docs/sections/CopywriterDoc";
import { BuilderDoc } from "./docs/sections/BuilderDoc";
import { MaxInsightsDoc } from "./docs/sections/MaxInsightsDoc";
import { GuardrailsDoc } from "./docs/sections/GuardrailsDoc";

const tabs = [
  {
    id: "overview",
    label: "Overview",
    iconEl: <Home size={16} />,
    keywords: ["home", "intro", "about max", "what is max", "getting started"],
  },
  {
    id: "find-agents",
    label: "Find Agents",
    iconEl: <Search size={16} />,
    keywords: ["switch agent", "agent picker", "composer", "how to switch"],
  },
  {
    id: "onboarding",
    label: "Onboarding",
    iconEl: <BookOpen size={16} />,
    keywords: ["setup", "store setup", "first steps", "getting started"],
  },
  {
    id: "max",
    label: "Max Orchestrator",
    iconEl: <Sparkles size={16} />,
    keywords: ["main orchestrator", "routing", "logo", "branding", "favicon", "wordmark"],
  },
  {
    id: "image-editor",
    label: "Image Editor",
    iconEl: <FileImage size={16} />,
    keywords: ["background removal", "quality", "lighting", "photo", "image", "bg replace"],
  },
  {
    id: "social-marketing",
    label: "Social Marketing",
    iconEl: <Video size={16} />,
    keywords: ["campaign", "post", "hashtag", "social", "instagram", "facebook", "caption"],
  },
  {
    id: "merchandiser",
    label: "Merchandiser",
    iconEl: <ShoppingBag size={16} />,
    keywords: ["product", "listing", "seo", "pricing", "promo reel", "catalog"],
  },
  {
    id: "copywriter",
    label: "Copywriter",
    iconEl: <PenTool size={16} />,
    keywords: ["blog", "article", "writing", "draft", "content", "copywriting"],
  },
  {
    id: "builder",
    label: "Builder",
    iconEl: <Layout size={16} />,
    keywords: ["page", "menu", "footer", "visual editor", "builder", "layout"],
  },
  {
    id: "insights",
    label: "Insights",
    iconEl: <BarChart3 size={16} />,
    keywords: ["analytics", "sales", "traffic", "leads", "chart", "report", "data"],
  },
  {
    id: "guardrails",
    label: "Guardrails",
    iconEl: <ShieldAlert size={16} />,
    keywords: ["safety", "rules", "limits", "plan gated", "restrictions", "best practices"],
  },
];

const App = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return <OverviewDoc onNavigate={setActiveTab} />;
      case "find-agents":
        return <FindAgentsDoc />;
      case "onboarding":
        return <OnboardingDoc />;
      case "max":
        return <MainOrchestratorDoc />;
      case "image-editor":
        return <ImageEditorDoc />;
      case "social-marketing":
        return <SocialMarketingDoc />;
      case "merchandiser":
        return <MerchandiserDoc />;
      case "copywriter":
        return <CopywriterDoc />;
      case "builder":
        return <BuilderDoc />;
      case "insights":
        return <MaxInsightsDoc />;
      case "guardrails":
        return <GuardrailsDoc />;
      default:
        return null;
    }
  };

  return (
    <div className="app-shell">
      <Sidebar tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="main-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>

        <footer className="app-footer">
          &copy; {new Date().getFullYear()} Prosperna Inc. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default App;
