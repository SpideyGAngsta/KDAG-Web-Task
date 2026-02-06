import React from 'react';
import { Link } from 'react-router-dom';

const DocumentViewer: React.FC = () => {
  return (
    <div className="bg-landing-bg font-display text-zinc-900 h-screen overflow-hidden flex flex-col">
      {/* Top Header */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-zinc-200 bg-white px-6 py-3 z-20 shrink-0">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="size-8 text-app-primary flex items-center justify-center">
              <span className="material-symbols-outlined !text-3xl icon-fill">analytics</span>
            </div>
            <h2 className="text-zinc-900 text-lg font-bold leading-tight tracking-tight">StrategyLens AI</h2>
          </div>
          <div className="hidden md:flex items-center gap-2 text-sm">
            <Link to="/dashboard" className="text-zinc-500">Dashboard</Link>
            <span className="text-zinc-300">/</span>
            <span className="font-medium">Financial Filings</span>
            <span className="text-zinc-300">/</span>
            <span className="text-app-primary font-medium">Q3 2026 Report</span>
          </div>
        </div>
        <div className="flex-1 max-w-lg mx-8 hidden lg:block">
          <label className="flex w-full items-center h-10 rounded-lg bg-zinc-100 border border-transparent focus-within:border-app-primary/50 transition-colors">
            <div className="pl-3 text-zinc-500">
              <span className="material-symbols-outlined">search</span>
            </div>
            <input className="w-full bg-transparent border-none text-sm px-3 text-zinc-900 placeholder-zinc-500 focus:ring-0" placeholder="Search within document..." />
            <div className="pr-3 text-zinc-400 text-xs font-mono">⌘K</div>
          </label>
        </div>
        <div className="flex items-center gap-6">
          <Link to="/dashboard" className="text-zinc-500 hover:text-app-primary text-sm font-medium transition-colors">Back to Dashboard</Link>
          <div className="flex items-center gap-3 border-l border-zinc-200 pl-6">
            <button className="text-zinc-500 hover:text-zinc-900">
              <span className="material-symbols-outlined">settings</span>
            </button>
            <div className="h-8 w-8 rounded-full bg-app-primary/20 text-app-primary flex items-center justify-center font-bold text-xs cursor-pointer">JD</div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 overflow-hidden relative">
        {/* Document Preview */}
        <section className="flex-1 relative bg-zinc-100 flex flex-col min-w-0">
          <div className="h-12 bg-white border-b border-zinc-200 flex items-center justify-between px-4 shrink-0">
            <div className="flex items-center gap-1">
              <button className="p-1.5 rounded hover:bg-zinc-100 text-zinc-500"><span className="material-symbols-outlined">side_navigation</span></button>
              <div className="h-4 w-px bg-zinc-300 mx-2"></div>
              <button className="p-1.5 rounded hover:bg-zinc-100 text-zinc-500"><span className="material-symbols-outlined">zoom_out</span></button>
              <span className="text-xs font-medium px-2 text-zinc-600">100%</span>
              <button className="p-1.5 rounded hover:bg-zinc-100 text-zinc-500"><span className="material-symbols-outlined">zoom_in</span></button>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-1.5 rounded hover:bg-zinc-100 text-zinc-500"><span className="material-symbols-outlined">print</span></button>
              <button className="p-1.5 rounded hover:bg-zinc-100 text-zinc-500"><span className="material-symbols-outlined">download</span></button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-8 flex justify-center relative">
            <div className="w-full max-w-[850px] bg-white text-zinc-900 min-h-[1100px] paper-shadow p-[60px] text-[15px] leading-relaxed relative selection:bg-app-primary/20">
              <div className="flex justify-between items-end border-b-2 border-zinc-900 pb-4 mb-10">
                <h1 className="text-3xl font-bold tracking-tight text-zinc-900">Quarterly Financial Report</h1>
                <span className="text-zinc-500 font-medium">Q3 2026</span>
              </div>
              <div className="space-y-6 text-zinc-800 text-justify">
                <p>
                  <span className="font-bold">Forward-Looking Statements:</span> This report contains forward-looking statements within the meaning of the federal securities laws. These statements include, but are not limited to, statements regarding our future financial performance, market trends, and strategic initiatives.
                </p>
                <h3 className="text-lg font-bold text-zinc-900 mt-8 mb-2">1. Executive Overview</h3>
                <p>
                  Despite global supply chain headwinds, the company delivered a robust performance in the third quarter. <span className="bg-app-primary/20 text-indigo-900 px-1 rounded-sm border-b-2 border-app-primary cursor-pointer hover:bg-app-primary/30 transition-colors" title="AI Insight Available">Revenue increased by 12% year-over-year to $4.2 billion</span>, driven primarily by strong adoption of our cloud services platform. Operating margins expanded by 150 basis points, reflecting our continued focus on operational efficiency and cost discipline.
                </p>
                <p>
                  We successfully launched three new product lines in the APAC region, which contributed $150 million to the quarter's top-line growth. Customer retention rates remained at an all-time high of 98%, underscoring the mission-critical nature of our solutions.
                </p>
                <h3 className="text-lg font-bold text-zinc-900 mt-8 mb-2">2. Risk Factors</h3>
                <p>
                  While our outlook remains positive, we face several risks that could materially affect our results. <span className="bg-amber-100 text-amber-900 px-1 rounded-sm border-b-2 border-amber-500 cursor-pointer hover:bg-amber-200 transition-colors">Regulatory scrutiny in the European market has intensified</span>, potentially leading to delayed approvals for our upcoming merger. Additionally, currency fluctuations in emerging markets pose a short-term headwind to reported earnings.
                </p>
                <p>
                  <span className="bg-app-primary/20 text-indigo-900 px-1 rounded-sm border-b-2 border-app-primary cursor-pointer hover:bg-app-primary/30 transition-colors">The semiconductor shortage continues to impact our hardware division</span>, although we have secured long-term supply agreements to mitigate severe disruptions. We anticipate these constraints to ease by the second half of 2027.
                </p>
                <div className="my-8 p-6 bg-zinc-50 border border-zinc-200 rounded-lg">
                  <h4 className="font-bold text-sm text-zinc-500 uppercase tracking-wider mb-4">Consolidated Statement of Operations</h4>
                  <div className="space-y-2 text-sm font-mono">
                    <div className="flex justify-between border-b border-zinc-200 pb-1"><span>Total Revenue</span><span className="font-bold">$4,230 M</span></div>
                    <div className="flex justify-between border-b border-zinc-200 pb-1"><span>Cost of Revenue</span><span>$1,850 M</span></div>
                    <div className="flex justify-between border-b border-zinc-200 pb-1 pt-1"><span>Gross Profit</span><span className="text-green-700 font-bold">$2,380 M</span></div>
                  </div>
                </div>
                <p>
                  Our liquidity position remains strong, with $1.8 billion in cash and cash equivalents. This balance sheet strength provides us with the flexibility to pursue strategic acquisitions and return capital to shareholders through our share repurchase program.
                </p>
              </div>
              <div className="absolute bottom-10 left-0 right-0 text-center">
                <span className="text-xs text-zinc-400">Page 42 of 560</span>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10 pointer-events-none">
            <button className="pointer-events-auto flex items-center gap-2 bg-zinc-900 text-white px-5 py-3 rounded-full shadow-xl hover:scale-105 transition-transform border border-zinc-700">
              <span className="material-symbols-outlined text-[20px]">auto_awesome</span>
              <span className="text-sm font-semibold">Summarize Selection</span>
            </button>
            <button className="pointer-events-auto flex items-center gap-2 bg-white text-zinc-900 px-5 py-3 rounded-full shadow-xl hover:scale-105 transition-transform border border-zinc-200">
              <span className="material-symbols-outlined text-[20px]">add_circle</span>
              <span className="text-sm font-semibold">Add to Knowledge Base</span>
            </button>
          </div>
          <div className="absolute bottom-8 right-8 bg-zinc-900/90 backdrop-blur text-white px-3 py-1.5 rounded-full text-xs font-mono shadow-lg border border-zinc-700 flex items-center gap-2">
            <button className="hover:text-app-primary"><span className="material-symbols-outlined text-sm">chevron_left</span></button>
            <span>42 / 560</span>
            <button className="hover:text-app-primary"><span className="material-symbols-outlined text-sm">chevron_right</span></button>
          </div>
        </section>

        {/* Insights Sidebar */}
        <aside className="w-[400px] border-l border-zinc-200 bg-[#f6f6f8] flex flex-col shrink-0">
          <div className="p-4 border-b border-zinc-200 bg-white">
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-bold text-zinc-900">StrategyLens Insights</h3>
              <span className="bg-app-primary/20 text-app-primary text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">Analysis Ready</span>
            </div>
            <p className="text-xs text-zinc-500">AI-generated analysis of current page context.</p>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {/* Executive Summary Card */}
            <div className="bg-white rounded-lg border border-zinc-200 overflow-hidden shadow-sm">
              <div className="px-4 py-3 border-b border-zinc-100 flex items-center gap-2 bg-zinc-50/50">
                <span className="material-symbols-outlined text-app-primary text-xl">summarize</span>
                <h4 className="font-semibold text-sm text-zinc-800">Executive Summary</h4>
                <button className="ml-auto text-zinc-400 hover:text-app-primary"><span className="material-symbols-outlined">expand_less</span></button>
              </div>
              <div className="p-4">
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Q3 results show strong 12% revenue growth driven by cloud adoption. While operational efficiency improved margins, supply chain issues in hardware persist. Regulatory headwinds in Europe are a developing concern for the upcoming merger.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-zinc-100 text-zinc-600 text-xs rounded border border-zinc-200">#RevenueGrowth</span>
                  <span className="px-2 py-1 bg-zinc-100 text-zinc-600 text-xs rounded border border-zinc-200">#CloudServices</span>
                </div>
              </div>
            </div>
            {/* Financial Moats Card */}
            <div className="bg-white rounded-lg border border-zinc-200 overflow-hidden shadow-sm group">
              <div className="px-4 py-3 border-b border-zinc-100 flex items-center gap-2 bg-zinc-50/50">
                <span className="material-symbols-outlined text-emerald-500 text-xl">shield</span>
                <h4 className="font-semibold text-sm text-zinc-800">Financial Moats</h4>
                <button className="ml-auto text-zinc-400 hover:text-emerald-500"><span className="material-symbols-outlined">expand_less</span></button>
              </div>
              <div className="p-4 space-y-3">
                <div className="flex gap-3">
                  <div className="mt-0.5 min-w-1 h-full rounded-full bg-emerald-500/30"></div>
                  <div>
                    <p className="text-xs font-bold text-zinc-800">High Switching Costs</p>
                    <p className="text-sm text-zinc-600 mt-1">98% customer retention rate indicates deeply embedded solutions that are difficult for competitors to displace.</p>
                  </div>
                </div>
                <div className="flex gap-3 pt-2 border-t border-zinc-100">
                  <div className="mt-0.5 min-w-1 h-full rounded-full bg-emerald-500/30"></div>
                  <div>
                    <p className="text-xs font-bold text-zinc-800">Cost Advantage</p>
                    <p className="text-sm text-zinc-600 mt-1">Operational margins expanded by 150bps due to proprietary automation tech.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Key Risks Card */}
            <div className="bg-white rounded-lg border border-zinc-200 overflow-hidden shadow-sm">
              <div className="px-4 py-3 border-b border-zinc-100 flex items-center gap-2 bg-zinc-50/50">
                <span className="material-symbols-outlined text-amber-500 text-xl icon-fill">warning</span>
                <h4 className="font-semibold text-sm text-zinc-800">Key Risks Detected</h4>
                <span className="ml-2 bg-amber-500/10 text-amber-600 text-[10px] font-bold px-1.5 py-0.5 rounded">HIGH PRIORITY</span>
                <button className="ml-auto text-zinc-400 hover:text-amber-500"><span className="material-symbols-outlined">expand_less</span></button>
              </div>
              <div className="p-4 space-y-3">
                <div className="flex items-start gap-3 p-2 rounded bg-amber-50 border border-amber-100">
                  <span className="material-symbols-outlined text-amber-600 text-lg mt-0.5">gavel</span>
                  <div>
                    <p className="text-xs font-bold text-amber-900">Regulatory Scrutiny (EU)</p>
                    <p className="text-xs text-amber-800/80 mt-1">Potential delays in merger approvals could impact Q4 projections.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-2 rounded bg-zinc-50 border border-zinc-100">
                  <span className="material-symbols-outlined text-zinc-500 text-lg mt-0.5">memory</span>
                  <div>
                    <p className="text-xs font-bold text-zinc-700">Component Shortage</p>
                    <p className="text-xs text-zinc-500 mt-1">Hardware division revenue at risk until mid-2025.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Chat Input */}
          <div className="p-4 border-t border-zinc-200 bg-white">
            <div className="relative">
              <input className="w-full pl-4 pr-12 py-3 rounded-lg bg-zinc-100 border-none text-sm text-zinc-900 placeholder-zinc-500 focus:ring-1 focus:ring-app-primary" placeholder="Ask StrategyLens about this document..." type="text" />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-app-primary hover:bg-app-primary/10 rounded transition-colors">
                <span className="material-symbols-outlined icon-fill">arrow_upward</span>
              </button>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default DocumentViewer;