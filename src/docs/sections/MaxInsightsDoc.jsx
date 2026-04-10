import React, { useMemo, useState } from 'react';
import { DocPage } from '../shared/DocPage';
import { ImagePlaceholder } from '../shared/ImagePlaceholder';
import { Callout } from '../shared/Callout';
import { InlineCode } from '../shared/InlineCode';

const insightsTabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'capabilities', label: 'Capabilities' },
  { id: 'limitations', label: 'Limitations' },
  { id: 'user-flows', label: 'User flows' },
];

function InsightsSubnav({ active, onChange }) {
  return (
    <nav className="subtabs" aria-label="Max Insights sections">
      {insightsTabs.map((t) => (
        <button
          key={t.id}
          type="button"
          className={t.id === active ? 'subtab active' : 'subtab'}
          onClick={() => onChange(t.id)}
        >
          {t.label}
        </button>
      ))}
    </nav>
  );
}

function InsightsOverview() {
  return (
    <>
      <p>
        <strong>Max Insights</strong> is the performance and analytics specialist
        in Max AI. It’s designed to answer questions using your store’s live
        data (orders, traffic, leads), then turn those numbers into actionable
        next steps.
      </p>

      <Callout title="What it’s best for" variant="info">
        <ul className="doc-list">
          <li>“How are my sales this month?”</li>
          <li>“Where is my website traffic coming from?”</li>
          <li>“What are my top selling products in the last 30 days?”</li>
          <li>“How many new leads did I get this week, and how many became customers?”</li>
        </ul>
      </Callout>

      <Callout title="How it’s selected in the UI" variant="info">
        <p>
          In Prosperna1, Max Insights corresponds to agent type{' '}
          <InlineCode>smb_agent</InlineCode>. The agent switcher and the MaxAI
          experience config use this ID behind the scenes.
        </p>
      </Callout>

      <ImagePlaceholder
        title="Max Insights selected"
        filenameSuggestion="max-insights_agent-switcher.png"
        description="Screenshot the agent switcher dropdown with Max Insights selected."
        bullets={['Agent chip visible', 'Max Insights row visible/selected']}
        sourceHint="Capture source: prosperna1 UI."
      />
    </>
  );
}

function InsightsCapabilities() {
  return (
    <>
      <h3>What it can do (capabilities)</h3>
      <p className="muted">
        This section is intentionally concrete. Each capability maps to a
        specific data fetch on the backend and a specific UI behavior in
        Prosperna1 (including chart UI).
      </p>

      <h3>1) Orders (recent orders listing)</h3>
      <ul className="doc-list">
        <li>
          Use case: “Show my latest orders”, “List unpaid orders”, “How many
          completed orders do I have?”
        </li>
        <li>
          Default: <InlineCode>days=30</InlineCode>,{' '}
          <InlineCode>page=1</InlineCode>, <InlineCode>limit=10</InlineCode>
        </li>
        <li>
          Filters (when explicitly requested): <InlineCode>status</InlineCode>,{' '}
          <InlineCode>payment_status</InlineCode>
        </li>
      </ul>

      <ImagePlaceholder
        title="Orders listing answer"
        filenameSuggestion="max-insights_orders-list.png"
        description="Screenshot a Max Insights reply listing recent orders (with amounts + statuses) and showing the Generate Charts button under the message."
        bullets={['At least 5 orders shown', 'Statuses visible', 'Generate Charts visible']}
        sourceHint="Capture source: prosperna1 UI."
      />

      <h3>2) Status breakdown (order + payment)</h3>
      <ul className="doc-list">
        <li>
          Use case: “How many orders were canceled?”, “Give me my payment status
          breakdown this month.”
        </li>
        <li>
          Default: last 30 days unless you specify a date window.
        </li>
      </ul>

      <ImagePlaceholder
        title="Status breakdown + donut chart"
        filenameSuggestion="max-insights_status-breakdown_donut.png"
        description="Screenshot a status breakdown reply and a donut chart visualization (only after explicitly asking for a chart)."
        bullets={['Status counts + percentages visible', 'Donut legend visible']}
        sourceHint="Capture source: prosperna1 UI."
      />

      <h3>3) Total sales by channel</h3>
      <ul className="doc-list">
        <li>
          Use case: “Show me my total sales by channel”, “How much total sales
          did I get this month?”
        </li>
        <li>Default: last 30 days unless you specify a date window.</li>
      </ul>

      <ImagePlaceholder
        title="Sales by channel (ranking)"
        filenameSuggestion="max-insights_sales-by-channel.png"
        description="Screenshot a sales-by-channel breakdown and (optional) a horizontal bar chart after you request visualization."
        sourceHint="Capture source: prosperna1 UI."
      />

      <h3>4) Top selling products (sales performance)</h3>
      <ul className="doc-list">
        <li>
          Use case: “What are my top selling products?”, “Rank my best sellers
          this month.”
        </li>
        <li>Default: last 30 days unless you specify a date window.</li>
        <li>
          Important: <strong>Top selling</strong> means quantity sold / sales,
          not page views. For traffic popularity, use “most visited product”.
        </li>
      </ul>

      <ImagePlaceholder
        title="Top selling products + horizontal bar chart"
        filenameSuggestion="max-insights_top-selling_horizontal-bar.png"
        description="Screenshot a ranked top-selling-products reply and the horizontal bar chart after you explicitly ask for a chart."
        bullets={['Product names + quantity_sold visible', 'Chart labels readable']}
        sourceHint="Capture source: prosperna1 UI."
      />

      <h3>5) Peak sales periods (best day / week / month)</h3>
      <ul className="doc-list">
        <li>
          Use case: “What was my best sales week?”, “Which month had the highest
          sales?”
        </li>
        <li>
          If you don’t provide a range, the tool can analyze broad history (do
          not assume a 30-day window).
        </li>
      </ul>

      <ImagePlaceholder
        title="Peak sales periods"
        filenameSuggestion="max-insights_peak-periods.png"
        description="Screenshot an answer that reports best day/week/month, including gross sales and order counts."
        sourceHint="Capture source: prosperna1 UI."
      />

      <h3>6) Website analytics</h3>
      <ul className="doc-list">
        <li>
          <strong>Traffic sources</strong>: where visitors come from (defaults
          last 30 days)
        </li>
        <li>
          <strong>Traffic trend</strong>: daily visits/sessions trend (defaults
          last 30 days)
        </li>
        <li>
          <strong>New vs returning visitors</strong>: cohort breakdown (defaults
          last 30 days)
        </li>
        <li>
          <strong>Most visited product/blog</strong>: ranked by page views (UI
          should show clickable storefront links)
        </li>
      </ul>

      <Callout title="Chart support (button-driven)" variant="info">
        <p>
          When Max Insights returns chartable data, it appends a hidden tag{' '}
          <InlineCode>{'<show_generate_chart />'}</InlineCode>. Prosperna1 strips
          the tag and shows a <strong>Generate Charts</strong> button on that
          message.
        </p>
        <p className="muted">
          The agent should only generate charts when you explicitly request a
          chart/visualization.
        </p>
      </Callout>

      <ImagePlaceholder
        title="Traffic sources"
        filenameSuggestion="max-insights_traffic-sources.png"
        description="Screenshot an answer that breaks down traffic sources (Facebook/Instagram/direct/other) and shows the Generate Charts button."
        sourceHint="Capture source: prosperna1 UI."
      />

      <ImagePlaceholder
        title="Website traffic trend"
        filenameSuggestion="max-insights_traffic-trend.png"
        description="Screenshot the website visitors trend answer, then capture the line/area chart after you request a visualization."
        sourceHint="Capture source: prosperna1 UI."
      />

      <ImagePlaceholder
        title="New vs returning visitors"
        filenameSuggestion="max-insights_new-vs-returning.png"
        description="Screenshot an answer that shows total users, new users, returning users for website visitors (not customer signups)."
        sourceHint="Capture source: prosperna1 UI."
      />

      <ImagePlaceholder
        title="Most visited product (clickable link)"
        filenameSuggestion="max-insights_most-visited-product.png"
        description="Screenshot a most-visited-product answer where the product title is a clickable storefront link."
        bullets={['Clickable title', 'Page views / sessions / unique visitors visible']}
        sourceHint="Capture source: prosperna1 UI (chat link rendering)."
      />

      <ImagePlaceholder
        title="Most visited blog (clickable link)"
        filenameSuggestion="max-insights_most-visited-blog.png"
        description="Screenshot a most-visited-blog answer where the blog title is a clickable storefront link."
        bullets={['Clickable title', 'Page views / sessions / unique visitors visible']}
        sourceHint="Capture source: prosperna1 UI (chat link rendering)."
      />

      <h3>7) CRM (leads)</h3>
      <ul className="doc-list">
        <li>
          <strong>Latest leads</strong>: “show my last 10 leads” (maps to a
          <InlineCode>limit</InlineCode> parameter)
        </li>
        <li>
          <strong>Leads summary</strong>: “how many new leads this week?” (uses a
          date range and reports how many became customers-with-orders)
        </li>
        <li>
          Channel/source filters are limited to:
          <InlineCode> store</InlineCode>, <InlineCode> guest_checkout</InlineCode>,{' '}
          <InlineCode> facebook</InlineCode>, <InlineCode> google</InlineCode>
        </li>
      </ul>

      <ImagePlaceholder
        title="Leads list (latest N)"
        filenameSuggestion="max-insights_leads-list.png"
        description="Screenshot a reply listing the latest N leads with created date + source, using bullets or numbered lines (no tables)."
        sourceHint="Capture source: prosperna1 UI."
      />

      <ImagePlaceholder
        title="Leads summary by date range"
        filenameSuggestion="max-insights_leads-summary.png"
        description="Screenshot a reply summarizing new leads vs customers-with-orders for a specific period."
        bullets={['Date range visible', 'Both counts visible', '1–2 coaching actions visible']}
        sourceHint="Capture source: prosperna1 UI."
      />

      <ImagePlaceholder
        title="Chart-eligible response (Generate Charts shown)"
        filenameSuggestion="max-insights_generate-charts-button.png"
        description="Screenshot an Insights assistant message that shows the “Generate Charts” button."
        bullets={['Agent type is Max Insights', 'Button visible under the message']}
        sourceHint="Capture source: prosperna1 UI (Assistant message extras)."
      />

      <ImagePlaceholder
        title="Rendered chart inside chat"
        filenameSuggestion="max-insights_rendered-chart.png"
        description="After clicking Generate Charts (or explicitly asking for a chart), screenshot the inline chart (Apex chart) rendered inside the chat message."
        bullets={['Chart title visible', 'Axes/legend visible', 'Message text summary above chart']}
        sourceHint="Capture source: prosperna1 UI (ChatChart)."
      />
    </>
  );
}

function InsightsLimitations() {
  return (
    <>
      <h3>Hard rules and common constraints</h3>
      <ul className="doc-list">
        <li>
          <strong>Scope</strong>: Max Insights is a business coach. It should not
          generate product descriptions, SEO meta tags, blog content, or edit
          pages—those belong to other agents.
        </li>
        <li>
          <strong>Charts are on request</strong>: chart generation should only
          happen when you explicitly ask for a chart/visualization.
        </li>
        <li>
          <strong>No tables</strong>: list-style formatting (bullets/numbered
          lines) is preferred over markdown tables for merchant readability.
        </li>
        <li>
          <strong>“Users” ambiguity</strong>: “users” can mean website visitors
          (analytics) or registered customers (signups). If unclear, Max Insights
          should ask a quick clarification.
        </li>
        <li>
          <strong>Customer signup breakdown window</strong>: customer signup
          breakdown is limited to the <strong>current week</strong>.
        </li>
        <li>
          <strong>Most visited blog/product links</strong>: links shown should be
          customer-facing storefront links (no internal IDs).
        </li>
      </ul>

      <Callout title="Common causes of confusing results" variant="info">
        <ul className="doc-list">
          <li>
            “Top selling” vs “most visited” are different questions (sales vs
            traffic).
          </li>
          <li>
            “Website visits” trend vs “unique visitors” cohorts are different
            metrics.
          </li>
          <li>
            “Customers” can mean registered signups or leads-with-orders; specify
            which you mean.
          </li>
        </ul>
      </Callout>

      <ImagePlaceholder
        title="Empty-data notice"
        filenameSuggestion="max-insights_empty-data.png"
        description="Screenshot a response where Insights reports no available data for the requested period (or shows a ‘details unavailable’ notice)."
        sourceHint="Capture source: prosperna1 UI."
      />

      <ImagePlaceholder
        title="Agent out-of-scope redirect"
        filenameSuggestion="max-insights_out-of-scope.png"
        description="Screenshot a moment where the user asks for out-of-scope work (e.g., product description writing) and the assistant redirects to the correct agent."
        sourceHint="Capture source: prosperna1 UI."
      />
    </>
  );
}

function InsightsUserFlows() {
  return (
    <>
      <h3>Flow: ask → data → (optional) chart</h3>
      <ol className="doc-steps">
        <li>Switch to Max Insights.</li>
        <li>Ask a question with an explicit time window when you can (e.g., “last 30 days”).</li>
        <li>Review the numbers + recommendations in the reply.</li>
        <li>
          If you want a visualization, click <strong>Generate Charts</strong> or
          ask “show me a chart”.
        </li>
      </ol>

      <h3>Flow: “Generate Charts” button (what actually happens)</h3>
      <ul className="doc-list">
        <li>
          The assistant includes a hidden tag{' '}
          <InlineCode>{'<show_generate_chart />'}</InlineCode> on chartable
          messages.
        </li>
        <li>
          Prosperna1 shows a <strong>Generate Charts</strong> button only for Max
          Insights messages with that tag.
        </li>
        <li>
          Clicking it sends a follow-up prompt: “Please create a chart to
          visualize the data you just showed me.”
        </li>
        <li>
          If the assistant responds with{' '}
          <InlineCode>{'<chart_data>{...}</chart_data>'}</InlineCode>, the UI
          renders it as an inline Apex chart.
        </li>
      </ul>

      <ImagePlaceholder
        title="Flow sequence (screens)"
        filenameSuggestion="max-insights_flow-sequence.png"
        description="Create a 3-panel screenshot collage: (1) agent switcher on Insights, (2) Insights numeric answer, (3) inline chart."
        bullets={['Three panels clearly labeled', 'Same question context across panels']}
        sourceHint="Capture source: prosperna1 UI."
      />

      <ImagePlaceholder
        title="Generate Charts click → follow-up message"
        filenameSuggestion="max-insights_generate-charts_click.png"
        description="Screenshot the moment you click Generate Charts and the follow-up message is sent (or appears in the input)."
        sourceHint="Capture source: prosperna1 UI."
      />
    </>
  );
}

export function MaxInsightsDoc() {
  const [active, setActive] = useState('overview');

  const body = useMemo(() => {
    switch (active) {
      case 'capabilities':
        return <InsightsCapabilities />;
      case 'limitations':
        return <InsightsLimitations />;
      case 'user-flows':
        return <InsightsUserFlows />;
      case 'overview':
      default:
        return <InsightsOverview />;
    }
  }, [active]);

  return (
    <DocPage
      title="Max Insights"
      subtitle="Best for analytics, trends, and action plans based on your store’s data."
      badges={['Agent', 'smb_agent']}
      className="max-insights-doc"
    >
      <InsightsSubnav active={active} onChange={setActive} />
      {body}
    </DocPage>
  );
}

