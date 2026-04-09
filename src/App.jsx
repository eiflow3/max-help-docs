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
import heroImage from "./assets/logo-sm-purple.svg";
import "./App.css";
import {
  BuilderDoc,
  CopywriterDoc,
  FindAgentsDoc,
  MainOrchestratorDoc,
  MaxInsightsDoc,
  MerchandiserDoc,
  OnboardingDoc,
  OverviewDoc,
} from "./docs";

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
      overview: <OverviewDoc />,
      orchestrator: <MainOrchestratorDoc />,
      "find-agents": <FindAgentsDoc />,
      onboarding: <OnboardingDoc />,
      insights: <MaxInsightsDoc />,
      merchandiser: <MerchandiserDoc />,
      copywriter: <CopywriterDoc />,
      builder: <BuilderDoc />,
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
