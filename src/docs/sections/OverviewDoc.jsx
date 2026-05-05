import React from 'react';
import { DocPage } from '../shared/DocPage';
import { Callout } from '../shared/Callout';
import {
  Sparkles,
  FileImage,
  Video,
  ShoppingBag,
  PenTool,
  Layout,
  BarChart3,
  ShieldAlert,
  ArrowRight,
} from 'lucide-react';

const agents = [
  {
    id: 'max',
    icon: <Sparkles size={16} />,
    name: 'Max Orchestrator',
    desc: 'Your main entry point — routes to specialists, generates logos, and handles branding tasks.',
  },
  {
    id: 'image-editor',
    icon: <FileImage size={16} />,
    name: 'Image Editor',
    desc: 'Remove backgrounds, enhance quality, adjust lighting, and replace backdrops on product photos.',
  },
  {
    id: 'social-marketing',
    icon: <Video size={16} />,
    name: 'Social Marketing',
    desc: 'Plan campaigns, generate post captions, hashtags, and promo video scripts.',
  },
  {
    id: 'merchandiser',
    icon: <ShoppingBag size={16} />,
    name: 'Merchandiser',
    desc: 'Create product listings with SEO-optimized titles, tags, pricing, and promotional reels.',
  },
  {
    id: 'copywriter',
    icon: <PenTool size={16} />,
    name: 'Copywriter',
    desc: 'Write long-form blog articles through a structured 4-stage drafting workflow.',
  },
  {
    id: 'builder',
    icon: <Layout size={16} />,
    name: 'Builder',
    desc: 'Generate and visually edit store pages, menus, and footers — with AI-assisted layout.',
  },
  {
    id: 'insights',
    icon: <BarChart3 size={16} />,
    name: 'Insights',
    desc: 'Analyze sales, traffic, and leads — with charts, trend summaries, and action plans.',
  },
  {
    id: 'guardrails',
    icon: <ShieldAlert size={16} />,
    name: 'Guardrails',
    desc: 'Safety rules, plan-gated features, and best practices to get the most out of Max.',
  },
];

export function OverviewDoc({ onNavigate }) {
  return (
    <DocPage
      title="Max at a glance"
      subtitle="Max is your AI business partner inside Prosperna — from branding to analytics, Max handles the heavy lifting."
      badges={['Merchant-facing', 'Prosperna']}
    >
      <div className="agent-list">
        {agents.map((agent) => (
          <div key={agent.id} className="agent-row">
            <div className="agent-row__icon">{agent.icon}</div>
            <div className="agent-row__body">
              <div className="agent-row__name">{agent.name}</div>
              <div className="agent-row__desc">{agent.desc}</div>
              {onNavigate && (
                <button className="agent-row__link" onClick={() => onNavigate(agent.id)}>
                  Learn more <ArrowRight size={12} />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <Callout title="High-signal starter prompts" variant="tip">
        <ul className="doc-list">
          <li>"Summarize this week's order trends and suggest next actions."</li>
          <li>"Where is my website traffic coming from? Last 30 days."</li>
          <li>"Show me my top selling products this month."</li>
          <li>"Create a product listing for my new item with SEO-optimized tags."</li>
          <li>"Write a blog post about the benefits of my product line."</li>
        </ul>
      </Callout>
    </DocPage>
  );
}
