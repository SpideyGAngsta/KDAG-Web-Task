import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <div className="bg-landing-bg font-display text-zinc-900 overflow-x-hidden antialiased min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex size-8 items-center justify-center rounded-lg bg-landing-primary text-white">
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>pie_chart</span>
            </div>
            <span className="text-lg font-bold tracking-tight text-zinc-900">StrategyLens AI</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium text-zinc-600 hover:text-landing-primary transition-colors">Landing</Link>
            <Link to="/dashboard" className="text-sm font-medium text-zinc-600 hover:text-landing-primary transition-colors">Dashboard</Link>
            <Link to="/simulation" className="text-sm font-medium text-zinc-600 hover:text-landing-primary transition-colors">Simulation</Link>
            <Link to="/document" className="text-sm font-medium text-zinc-600 hover:text-landing-primary transition-colors">Doc Viewer</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link to="/dashboard" className="text-sm font-medium text-zinc-600 hover:text-landing-primary transition-colors hidden sm:block">Login</Link>
            <Link to="/dashboard" className="flex h-9 items-center justify-center rounded-lg bg-landing-primary px-4 text-sm font-bold text-white shadow-sm hover:bg-blue-700 transition-colors">
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative isolate overflow-hidden pt-14 lg:pt-24 pb-20 lg:pb-32">
        <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#1313ec] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-black tracking-tight text-zinc-900 sm:text-6xl lg:text-7xl">
              Analyze 1,000-page filings in seconds
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-600">
              The ultimate research assistant for strategy consultants and private equity firms. Process complex data, simulate market scenarios, and extract insights faster than ever before.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link to="/dashboard" className="rounded-lg bg-landing-primary px-5 py-3 text-base font-bold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-landing-primary transition-all">
                Get Started
              </Link>
              <a href="#" className="text-base font-semibold leading-6 text-zinc-900 flex items-center gap-1 group">
                Book a demo <span aria-hidden="true" className="group-hover:translate-x-0.5 transition-transform">→</span>
              </a>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="mt-16 flow-root sm:mt-24">
            <div className="-m-2 rounded-xl bg-zinc-900/5 p-2 ring-1 ring-inset ring-zinc-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <div className="relative rounded-lg bg-white shadow-2xl ring-1 ring-zinc-900/10 overflow-hidden min-h-[400px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuANTwyngb1FbxlzGS52z_ubwHgFqK-ex76znNPFBDrJpXRzcqKDcwrwS2ga3qxhAZRw_1zSwcytMZZgAF1aN5ioBZ8z9M8A5CqLcxcPfJjal84Tzqh3aL9ZT0hFYn2nRx8FZGoZ5k8SjXBSw9YmLhrh-35gEbmq_2p1Xj7fy9_VEXfMuTj9tCl73edybVrkce5m6fXfC6WzwadgmwAfKLdrqnaK97RbOdPwN9Xr2GsefJn18fct1lOWXsamV2n0CBpNz0k0yjDi91w')` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-landing-bg via-transparent to-transparent"></div>
                <div className="z-10 text-center p-8 bg-white/90 backdrop-blur rounded-xl border border-zinc-200 max-w-lg shadow-xl">
                  <h3 className="text-xl font-bold text-zinc-900 mb-2">Instant Analysis Complete</h3>
                  <div className="flex items-center justify-between text-sm text-zinc-500 mb-4 border-b border-zinc-200 pb-2">
                    <span>Target: Apple Inc (10-K)</span>
                    <span className="text-green-600 font-medium">98% Accuracy</span>
                  </div>
                  <div className="space-y-3">
                    <div className="h-2 bg-zinc-200 rounded w-full">
                      <div className="h-2 bg-landing-primary rounded w-[85%]"></div>
                    </div>
                    <div className="h-2 bg-zinc-200 rounded w-3/4">
                      <div className="h-2 bg-landing-primary rounded w-[60%]"></div>
                    </div>
                    <div className="h-2 bg-zinc-200 rounded w-5/6">
                      <div className="h-2 bg-landing-primary rounded w-[75%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#1313ec] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-landing-primary">Powerful Features</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">Advanced analysis for modern strategy</p>
            <p className="mt-6 text-lg leading-8 text-zinc-600">Leverage AI to simulate scenarios and generate executive summaries instantly. Built for speed and accuracy.</p>
          </div>
          <div className="mx-auto mt-16 max-w-7xl sm:mt-20 lg:mt-24">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
              {[
                { icon: 'analytics', title: 'Scenario Simulation', desc: 'Run complex market simulations in real-time. Test hypotheses against historical data and future projections instantly.' },
                { icon: 'summarize', title: 'Executive Summaries', desc: 'Turn 100-page reports into 1-page briefs. Our AI distills key findings, risks, and opportunities without hallucination.' },
                { icon: 'bolt', title: 'Rapid Extraction', desc: 'Instant data extraction from SEC filings (10-K, 10-Q), earnings calls, and expert interview transcripts.' },
              ].map((feature, i) => (
                <div key={i} className="relative flex flex-col gap-6 rounded-2xl border border-zinc-200 bg-landing-bg p-8 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-landing-primary">
                    <span className="material-symbols-outlined text-white">{feature.icon}</span>
                  </div>
                  <div className="flex flex-col">
                    <dt className="text-xl font-bold leading-7 text-zinc-900">{feature.title}</dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-zinc-600">
                      <p className="flex-auto">{feature.desc}</p>
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Audience Section */}
      <section className="py-24 bg-zinc-50 pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl mb-6">Designed for high-stakes decisions</h2>
              <p className="text-lg text-zinc-600 mb-10">
                StrategyLens is trusted by top-tier firms to deliver accuracy when it matters most. We understand the rigor required in professional services.
              </p>
              <div className="space-y-8">
                {[
                  { icon: 'corporate_fare', title: 'Private Equity Firms', desc: 'Accelerate due diligence. Screen more targets in less time and identify red flags in data rooms automatically.' },
                  { icon: 'lightbulb', title: 'Strategy Consultants', desc: 'Automate the grunt work of market research. Focus your time on high-value synthesis and client recommendations.' },
                  { icon: 'query_stats', title: 'Investment Bankers', desc: 'Quickly parse historical financials and industry reports to build robust pitch decks and models.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-landing-primary/10 text-landing-primary">
                        <span className="material-symbols-outlined">{item.icon}</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-900">{item.title}</h3>
                      <p className="mt-2 text-zinc-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl bg-zinc-900 p-8 shadow-2xl">
                <div className="absolute -top-4 -right-4 -z-10 h-full w-full rounded-2xl bg-zinc-200"></div>
                <div className="flex items-center gap-4 mb-8 border-b border-zinc-700 pb-4">
                  <div className="h-10 w-10 rounded-full bg-landing-primary flex items-center justify-center text-white font-bold">SL</div>
                  <div>
                    <div className="text-white font-semibold">StrategyLens Analyst</div>
                    <div className="text-zinc-400 text-sm">AI Agent • Active Now</div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="h-8 w-8 rounded-full bg-zinc-700 flex-shrink-0"></div>
                    <div className="bg-zinc-800 rounded-lg p-3 text-zinc-300 text-sm border border-zinc-700">
                      Can you summarize the risks from Tesla's latest 10-K regarding supply chain constraints?
                    </div>
                  </div>
                  <div className="flex gap-4 flex-row-reverse">
                    <div className="h-8 w-8 rounded-full bg-landing-primary flex-shrink-0 flex items-center justify-center text-white text-xs">AI</div>
                    <div className="bg-landing-primary/10 rounded-lg p-3 text-white text-sm border border-landing-primary/20">
                      <p className="mb-2 font-semibold text-landing-primary">Analysis Complete (0.4s)</p>
                      <p>Based on the 2023 10-K, key risks include:</p>
                      <ul className="list-disc list-inside mt-2 space-y-1 text-zinc-300">
                        <li>Reliance on lithium and nickel availability.</li>
                        <li>Potential delays in Gigafactory expansions.</li>
                        <li>Volatility in raw material pricing affecting margins.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="h-8 w-8 rounded-full bg-zinc-700 flex-shrink-0"></div>
                    <div className="bg-zinc-800 rounded-lg p-3 text-zinc-300 text-sm border border-zinc-700">
                      Generate a sensitivity analysis table for these material costs.
                    </div>
                  </div>
                </div>
                <div className="mt-8 relative">
                  <div className="h-10 w-full bg-zinc-800 rounded border border-zinc-600 px-4 flex items-center text-zinc-500 text-sm">
                    Processing request...
                  </div>
                  <div className="absolute right-3 top-3">
                    <span className="material-symbols-outlined animate-spin text-landing-primary" style={{ fontSize: '18px' }}>progress_activity</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;