import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Simulation: React.FC = () => {
  const [inflation, setInflation] = useState(2.0);
  const [interest, setInterest] = useState(-0.5);
  const [marketGrowth, setMarketGrowth] = useState(50);
  
  return (
    <div className="bg-zinc-50 text-zinc-900 font-display h-screen flex flex-col overflow-hidden selection:bg-indigo-100 selection:text-indigo-900">
      {/* Header */}
      <header className="flex shrink-0 items-center justify-between whitespace-nowrap border-b border-solid border-zinc-200 bg-white px-6 py-3 z-20">
        <div className="flex items-center gap-4">
          <Link to="/dashboard" className="size-6 text-app-primary flex items-center justify-center hover:text-indigo-700 transition-colors">
            <span className="material-symbols-outlined text-3xl">token</span>
          </Link>
          <h2 className="text-zinc-900 text-lg font-bold leading-tight tracking-[-0.015em]">StrategyLens AI</h2>
          <div className="h-6 w-px bg-zinc-200 mx-2"></div>
          <div className="hidden md:flex items-center gap-2 text-sm">
            <Link to="/dashboard" className="text-zinc-500 hover:text-zinc-900 transition-colors font-medium">Projects</Link>
            <span className="text-zinc-300 font-medium">/</span>
            <span className="text-zinc-500 font-medium">Market Entry Analysis</span>
            <span className="text-zinc-300 font-medium">/</span>
            <span className="text-app-primary font-medium">Simulation</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center justify-center rounded h-9 bg-white border border-zinc-200 hover:bg-zinc-50 transition-colors text-zinc-700 gap-2 text-sm font-medium px-4">
            <span className="material-symbols-outlined text-[18px]">share</span>
            <span className="hidden sm:inline">Share</span>
          </button>
          <div className="h-6 w-px bg-zinc-200 mx-1"></div>
          <button className="flex size-9 cursor-pointer items-center justify-center rounded bg-transparent hover:bg-zinc-100 text-zinc-500 hover:text-zinc-900 transition-colors">
            <span className="material-symbols-outlined text-[20px]">notifications</span>
          </button>
          <button className="flex size-9 cursor-pointer items-center justify-center rounded bg-app-primary text-white font-bold text-sm shadow-sm hover:bg-indigo-700 transition-colors">JD</button>
        </div>
      </header>

      {/* Main Workspace */}
      <main className="flex flex-1 overflow-hidden relative">
        {/* Chat Interface */}
        <section className="flex-1 flex flex-col relative min-w-0 bg-zinc-50">
          <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-8 scroll-smooth pb-32">
            <div className="flex justify-center">
              <span className="text-xs font-medium text-zinc-500 bg-zinc-200/50 px-3 py-1 rounded-full border border-zinc-200">Today, 10:42 AM</span>
            </div>
            {/* User Message */}
            <div className="flex justify-end w-full">
              <div className="max-w-[80%] md:max-w-[600px] bg-white text-zinc-900 border border-zinc-200 rounded-2xl rounded-tr-sm p-4 shadow-sm">
                <p className="text-base leading-relaxed">Run a 12-month simulation for the APAC market entry assuming a <span className="text-app-primary font-semibold">+2.0% inflation spike</span> in Q2 and aggressive competitor pricing response.</p>
              </div>
              <div className="ml-3 mt-1 flex-shrink-0">
                <div className="size-8 rounded-full bg-app-primary flex items-center justify-center text-xs font-bold text-white shadow-sm">JD</div>
              </div>
            </div>
            
            {/* AI Response */}
            <div className="flex w-full group">
              <div className="mr-4 mt-1 flex-shrink-0">
                <div className="size-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
                  <span className="material-symbols-outlined text-sm">smart_toy</span>
                </div>
              </div>
              <div className="flex-1 max-w-[800px] space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-zinc-900">StrategyLens Agent</span>
                </div>
                <div className="text-zinc-700 text-base leading-relaxed space-y-4">
                  <p>I've initialized the simulation model with the requested parameters. The inflation spike in Q2 creates margin pressure, which is compounded by the competitor pricing war.</p>
                  <p>Here is the projected financial impact over the next 12 months:</p>
                </div>
                
                {/* Data Table */}
                <div className="border border-zinc-200 rounded-lg overflow-hidden bg-white shadow-sm">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-zinc-50 text-zinc-500 font-medium uppercase text-xs tracking-wider border-b border-zinc-200">
                      <tr>
                        <th className="px-4 py-3">Metric</th>
                        <th className="px-4 py-3 text-right">Base Case</th>
                        <th className="px-4 py-3 text-right">Simulated</th>
                        <th className="px-4 py-3 text-right">Variance</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100 text-zinc-700">
                      <tr className="hover:bg-zinc-50 transition-colors">
                        <td className="px-4 py-3 font-medium text-zinc-900">Annual Revenue</td>
                        <td className="px-4 py-3 text-right font-mono text-zinc-500">$42.5M</td>
                        <td className="px-4 py-3 text-right font-mono font-semibold text-zinc-900">$45.2M</td>
                        <td className="px-4 py-3 text-right font-mono text-emerald-600 font-medium">+6.3%</td>
                      </tr>
                      <tr className="hover:bg-zinc-50 transition-colors">
                        <td className="px-4 py-3 font-medium text-zinc-900">EBITDA</td>
                        <td className="px-4 py-3 text-right font-mono text-zinc-500">$10.2M</td>
                        <td className="px-4 py-3 text-right font-mono font-semibold text-zinc-900">$8.9M</td>
                        <td className="px-4 py-3 text-right font-mono text-red-600 font-medium">-12.7%</td>
                      </tr>
                      <tr className="hover:bg-zinc-50 transition-colors">
                        <td className="px-4 py-3 font-medium text-zinc-900">Gross Margin</td>
                        <td className="px-4 py-3 text-right font-mono text-zinc-500">24.0%</td>
                        <td className="px-4 py-3 text-right font-mono font-semibold text-zinc-900">19.4%</td>
                        <td className="px-4 py-3 text-right font-mono text-red-600 font-medium">-4.6pp</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Logic Reasoning */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-medium text-zinc-500 uppercase tracking-wide">
                    <span className="material-symbols-outlined text-[16px]">code</span>
                    <span>Logic Reasoning</span>
                  </div>
                  <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 font-mono text-xs md:text-sm text-zinc-300 overflow-x-auto shadow-sm">
                    <div className="opacity-60 mb-2 italic">// Simulating price elasticity impact</div>
                    <div><span className="text-purple-400">const</span> <span className="text-blue-400">inflationImpact</span> = <span className="text-yellow-400">0.02</span>;</div>
                    <div><span className="text-purple-400">if</span> (quarter === <span className="text-green-400">'Q2'</span>) {'{'}</div>
                    <div className="pl-4">cogsRatio += inflationImpact;</div>
                    <div className="pl-4"><span className="text-zinc-500 italic">// Competitor response triggers price suppression</span></div>
                    <div className="pl-4">marketPrice *= <span className="text-yellow-400">0.95</span>;</div>
                    <div>{'}'}</div>
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <button className="px-4 py-2 bg-white border border-zinc-200 hover:bg-zinc-50 hover:border-zinc-300 rounded text-sm font-medium text-zinc-700 transition-all shadow-sm">
                    Drill Down by Region
                  </button>
                  <button className="px-4 py-2 bg-white border border-zinc-200 hover:bg-zinc-50 hover:border-zinc-300 rounded text-sm font-medium text-zinc-700 transition-all shadow-sm">
                    Adjust Pricing Strategy
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-zinc-50 via-zinc-50 to-transparent z-10">
            <div className="max-w-[900px] mx-auto relative group">
              <div className="absolute inset-0 bg-app-primary/10 rounded-lg blur opacity-0 group-focus-within:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white border border-zinc-200 rounded-lg shadow-lg flex flex-col gap-2 p-2 focus-within:border-app-primary/50 focus-within:ring-1 focus-within:ring-app-primary/20 transition-all">
                <textarea className="w-full bg-transparent border-none text-zinc-900 placeholder-zinc-400 resize-none focus:ring-0 p-3 h-14" placeholder="Ask a follow-up question or adjust variables..."></textarea>
                <div className="flex items-center justify-between px-2 pb-1">
                  <div className="flex gap-1">
                    <button className="p-2 text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 rounded transition-colors"><span className="material-symbols-outlined text-[20px]">add_circle</span></button>
                    <button className="p-2 text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 rounded transition-colors"><span className="material-symbols-outlined text-[20px]">folder_open</span></button>
                  </div>
                  <button className="bg-app-primary hover:bg-indigo-700 text-white rounded p-2 px-4 text-sm font-bold flex items-center gap-2 transition-colors shadow-sm">
                    <span>Simulate</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_upward</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sidebar: Variables */}
        <aside className="w-80 bg-white border-l border-zinc-200 flex flex-col z-20 shrink-0 hidden lg:flex shadow-sm">
          <div className="p-5 border-b border-zinc-200 flex items-center justify-between">
            <h3 className="text-zinc-900 text-base font-bold tracking-tight">Scenario Variables</h3>
            <button className="text-zinc-400 hover:text-app-primary transition-colors" title="Reset to Defaults">
              <span className="material-symbols-outlined text-[20px]">restart_alt</span>
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-5 space-y-8">
            {/* Macro Group */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-app-primary text-xs font-bold uppercase tracking-wider mb-2">
                <span className="material-symbols-outlined text-[16px]">public</span> Macroeconomics
              </div>
              <div className="group">
                <div className="flex w-full items-center justify-between mb-2">
                  <label className="text-zinc-700 text-sm font-medium">Inflation Rate</label>
                  <span className="text-app-primary text-sm font-mono font-bold bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">+{inflation.toFixed(1)}%</span>
                </div>
                <input 
                  type="range" min="0" max="10" step="0.1" value={inflation} onChange={(e) => setInflation(parseFloat(e.target.value))}
                  className="w-full h-1 bg-zinc-200 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-app-primary [&::-webkit-slider-thumb]:shadow-md hover:[&::-webkit-slider-thumb]:scale-110 transition-all" 
                />
              </div>
              <div className="group">
                <div className="flex w-full items-center justify-between mb-2">
                  <label className="text-zinc-700 text-sm font-medium">Interest Rate</label>
                  <span className="text-zinc-500 text-sm font-mono bg-zinc-100 px-2 py-0.5 rounded border border-zinc-200">{interest}%</span>
                </div>
                <input 
                  type="range" min="-2" max="5" step="0.5" value={interest} onChange={(e) => setInterest(parseFloat(e.target.value))}
                  className="w-full h-1 bg-zinc-200 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-zinc-400 [&::-webkit-slider-thumb]:shadow-sm hover:[&::-webkit-slider-thumb]:border-zinc-600 transition-all" 
                />
              </div>
            </div>
            
            <div className="h-px w-full bg-zinc-200"></div>

            {/* Market Group */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-app-primary text-xs font-bold uppercase tracking-wider mb-2">
                <span className="material-symbols-outlined text-[16px]">storefront</span> Market Conditions
              </div>
              <div className="group">
                <div className="flex w-full items-center justify-between mb-2">
                  <label className="text-zinc-700 text-sm font-medium">Market Growth</label>
                  <span className="text-zinc-500 text-sm font-mono bg-zinc-100 px-2 py-0.5 rounded border border-zinc-200">Stable</span>
                </div>
                <input 
                  type="range" value={marketGrowth} onChange={(e) => setMarketGrowth(parseInt(e.target.value))}
                  className="w-full h-1 bg-zinc-200 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-zinc-400 [&::-webkit-slider-thumb]:shadow-sm hover:[&::-webkit-slider-thumb]:border-zinc-600 transition-all" 
                />
              </div>
              <div className="flex items-center justify-between py-2">
                <label className="text-zinc-700 text-sm font-medium flex flex-col">
                  <span>Competitor Response</span>
                  <span className="text-xs text-zinc-500 font-normal">Aggressive pricing war</span>
                </label>
                <button className="relative w-11 h-6 bg-app-primary rounded-full transition-colors">
                  <span className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform transform translate-x-5 shadow-sm"></span>
                </button>
              </div>
              <div className="flex items-center justify-between py-2 opacity-60 hover:opacity-100 transition-opacity">
                <label className="text-zinc-700 text-sm font-medium flex flex-col">
                  <span>Supply Chain Shock</span>
                  <span className="text-xs text-zinc-500 font-normal">Disruption {'>'} 2 weeks</span>
                </label>
                <button className="relative w-11 h-6 bg-zinc-200 rounded-full transition-colors">
                  <span className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform transform translate-x-0 shadow-sm border border-zinc-200"></span>
                </button>
              </div>
            </div>

            <div className="p-4 bg-indigo-50 rounded border border-indigo-100 mt-4">
              <div className="flex gap-2 text-app-primary mb-2">
                <span className="material-symbols-outlined text-[18px]">info</span>
                <span className="text-xs font-bold uppercase">Impact Forecast</span>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Current variable configuration predicts a <span className="text-red-600 font-bold">-12%</span> hit to EBITDA compared to base projections.
              </p>
            </div>
          </div>
          <div className="p-4 border-t border-zinc-200 bg-zinc-50">
            <button className="w-full h-10 flex items-center justify-center gap-2 bg-zinc-900 text-white hover:bg-zinc-800 font-bold text-sm rounded transition-colors shadow-sm hover:shadow">
              <span className="material-symbols-outlined text-[20px]">play_circle</span>
              Run New Simulation
            </button>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default Simulation;