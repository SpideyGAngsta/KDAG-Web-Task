import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  return (
    <div className="bg-app-bg text-zinc-900 font-display min-h-screen flex overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-zinc-200 flex flex-col h-screen shrink-0 z-20 transition-all duration-300">
        <div className="p-6 flex items-center gap-3">
          <div className="bg-app-primary/10 rounded-lg p-2 text-app-primary">
            <span className="material-symbols-outlined text-2xl">grid_view</span>
          </div>
          <div>
            <h1 className="text-zinc-900 font-bold text-base tracking-tight">StrategyLens</h1>
            <p className="text-zinc-500 text-xs font-medium">Consultant Dashboard</p>
          </div>
        </div>
        <nav className="flex-1 overflow-y-auto px-4 py-2 flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <div className="px-3 py-2 rounded-lg bg-zinc-100 text-app-primary flex items-center gap-3 font-medium text-sm transition-colors cursor-pointer group">
              <span className="material-symbols-outlined icon-fill text-[20px]">schedule</span>
              Recent Projects
            </div>
            <div className="px-3 py-2 rounded-lg text-zinc-600 hover:bg-zinc-50 flex items-center gap-3 font-medium text-sm transition-colors cursor-pointer group">
              <span className="material-symbols-outlined text-[20px] group-hover:text-zinc-900">group</span>
              Shared with Team
            </div>
            <div className="px-3 py-2 rounded-lg text-zinc-600 hover:bg-zinc-50 flex items-center gap-3 font-medium text-sm transition-colors cursor-pointer group">
              <span className="material-symbols-outlined text-[20px] group-hover:text-zinc-900">description</span>
              Drafts
            </div>
            <div className="px-3 py-2 rounded-lg text-zinc-600 hover:bg-zinc-50 flex items-center gap-3 font-medium text-sm transition-colors cursor-pointer group">
              <span className="material-symbols-outlined text-[20px] group-hover:text-zinc-900">star</span>
              Favorites
            </div>
          </div>
          <div className="h-px bg-zinc-200 mx-2"></div>
          <div className="flex flex-col gap-1">
            <p className="px-3 text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Workspaces</p>
            <div className="px-3 py-2 rounded-lg text-zinc-600 hover:bg-zinc-50 flex items-center gap-3 font-medium text-sm transition-colors cursor-pointer group">
              <span className="material-symbols-outlined text-[20px] text-zinc-400">folder</span>
              Due Diligence
            </div>
            <div className="px-3 py-2 rounded-lg text-zinc-600 hover:bg-zinc-50 flex items-center gap-3 font-medium text-sm transition-colors cursor-pointer group">
              <span className="material-symbols-outlined text-[20px] text-zinc-400">folder</span>
              Market Research
            </div>
            <div className="px-3 py-2 rounded-lg text-zinc-600 hover:bg-zinc-50 flex items-center gap-3 font-medium text-sm transition-colors cursor-pointer group">
              <span className="material-symbols-outlined text-[20px] text-zinc-400">folder</span>
              Q4 Strategy
            </div>
          </div>
        </nav>
        <div className="p-4 border-t border-zinc-200">
          <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-app-primary hover:bg-app-primary/90 text-white h-10 px-4 text-sm font-bold shadow-sm transition-all active:scale-[0.98]">
            <span className="material-symbols-outlined text-[20px]">upload_file</span>
            <span>Upload Document</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden bg-app-bg">
        {/* Header */}
        <header className="h-16 bg-white border-b border-zinc-200 flex items-center justify-between px-6 shrink-0 z-10">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-bold text-zinc-900 tracking-tight">Dashboard</h2>
            <div className="h-4 w-px bg-zinc-300 mx-2"></div>
            <div className="flex items-center text-zinc-500 text-sm">
              <span className="material-symbols-outlined text-[18px] mr-1">calendar_today</span>
              <span>Jan 31, 2026</span>
            </div>
          </div>
          <div className="flex-1 max-w-xl px-8">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-400 group-focus-within:text-app-primary transition-colors">
                <span className="material-symbols-outlined">search</span>
              </div>
              <input className="block w-full pl-10 pr-3 py-2 border-none rounded-lg leading-5 bg-zinc-100 text-zinc-900 placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-app-primary sm:text-sm transition-all" placeholder="Search projects, clients, or documents..." type="text" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-zinc-500 hover:text-zinc-700 transition-colors rounded-full hover:bg-zinc-100">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 block h-2 w-2 rounded-full ring-2 ring-white bg-red-500"></span>
            </button>
            <button className="p-2 text-zinc-500 hover:text-zinc-700 transition-colors rounded-full hover:bg-zinc-100">
              <span className="material-symbols-outlined">settings</span>
            </button>
            <div className="h-8 w-px bg-zinc-200 mx-1"></div>
            <div className="flex items-center gap-3 pl-2 cursor-pointer group">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-medium text-zinc-900 group-hover:text-app-primary transition-colors">John Doe</p>
                <p className="text-xs text-zinc-500">Senior Partner</p>
              </div>
              <div className="h-9 w-9 rounded-full bg-zinc-200 bg-cover bg-center ring-2 ring-white shadow-sm" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCWpwxerf9jLm5JcLoZhiYS0MovG4tQyCnNJON70JsAWERKajNsw3URH89iTkeob7JgQqgH7L8GQJx9NqKC8XE2e9Z6DKN7IuRAul2KKixDtbjdq-1JnUqD5QaXknU8EZeNNsVKS8_KP-RJpHRMNSr1u7xCnPkw7Em9gIBIoh7ZYQ4bAItDf2mExA3tQNioAN8FY9bb1STSadAWhtg2J2JJig9a3EmEFV5f_G8_QYXpqJ49OdjVCPQhM_L2phFcbWBh4Be63UkVVf0')` }}></div>
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-[1280px] mx-auto flex flex-col gap-8">
            {/* Active Project */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-zinc-900">Active Priority</h3>
                <Link to="/simulation" className="text-sm font-medium text-app-primary hover:text-app-primary/80 flex items-center gap-1">
                  View Roadmap <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
              <div className="rounded-xl overflow-hidden bg-white shadow-sm border border-zinc-200 flex flex-col md:flex-row h-auto md:h-64 transition-all hover:shadow-md">
                <div className="w-full md:w-2/5 bg-cover bg-center relative" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBD8Hh5ESZZ4KUDVYgZdgDBHWGs0xIWeEa3C5Fzc3eCsmaPA3qs4pfRm5gOQm40dWuNn8pUrVQaN9jtfok-WpzhP5G3EqLl9_Zx4Pu9qVEhahnEgRhfeKQUerRA9KsyHOD3kxCHURkbAFG74T9BzriBXqG89hU1M4dFap5ZWTPXeihTn7VMEseJqSJ_RHoduzPLx24oUwxvtZP-59vUAFtV2oTDzMTU7cW4OeGuiKQu7FiS-CBoU6TmoMSYr6NAw5kl9IdBPm1E_9Q')` }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 w-fit mb-2 border border-red-200">
                      Urgent
                    </span>
                    <h2 className="text-2xl font-bold text-white mb-1">Global Market Entry Analysis</h2>
                    <p className="text-zinc-300 text-sm">Client: TechGiant Corp</p>
                  </div>
                </div>
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm text-zinc-500 mb-1">Current Phase</p>
                        <h4 className="text-lg font-semibold text-zinc-900">Competitive Landscape Mapping</h4>
                      </div>
                      <div className="flex -space-x-2">
                        <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9-D3rjo9KYyDZo8zZuASS6DKuK7JdJbNNAwQVoal4cgfd5n0J7xGlOF64ocy63VpyNzdsa0HPBCpMap6Q3pcQoBTCo2I4JxnS_vMty35fSESFrb0xxcinr0fh4Kl5be0UpqYoVnFyZrozuYi5UOIOmhzJj7THS9AEEgEq4Dp4gytCFZCZKIdc-XEUutI8fVhCcMQLRr64eZ6oFCsRO_Zp423uHZ6tMTCaz0Re_L4mlidgfAFSbz5EhsKxWuJWPzM2wlWcLdj6qx4" alt="" />
                        <div className="h-8 w-8 rounded-full ring-2 ring-white bg-zinc-100 flex items-center justify-center text-xs font-medium text-zinc-500">+3</div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-zinc-600 font-medium">Progress</span>
                        <span className="text-app-primary font-bold">75%</span>
                      </div>
                      <div className="w-full bg-zinc-100 rounded-full h-2">
                        <div className="bg-app-primary h-2 rounded-full transition-all duration-500" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-t border-zinc-100 pt-4 mt-2">
                    <span className="text-xs text-zinc-400 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">schedule</span>
                      Updated 2 hours ago
                    </span>
                    <Link to="/simulation" className="px-4 py-2 bg-zinc-900 text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity">
                      Continue Working
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Grid */}
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
                <button className="px-4 py-1.5 rounded-full bg-zinc-900 text-white text-sm font-medium whitespace-nowrap shadow-sm">All Projects</button>
                <button className="px-4 py-1.5 rounded-full bg-white border border-zinc-200 text-zinc-600 hover:bg-zinc-50 text-sm font-medium whitespace-nowrap transition-colors">In Progress</button>
                <button className="px-4 py-1.5 rounded-full bg-white border border-zinc-200 text-zinc-600 hover:bg-zinc-50 text-sm font-medium whitespace-nowrap transition-colors">Completed</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Cards */}
                <div className="group bg-white border border-zinc-200 rounded-xl p-5 hover:border-app-primary/50 hover:shadow-lg hover:shadow-app-primary/5 transition-all duration-300 flex flex-col h-full cursor-pointer">
                    <div className="flex justify-between items-start mb-4">
                        <div className="h-10 w-10 rounded-lg bg-indigo-50 flex items-center justify-center text-app-primary"><span className="material-symbols-outlined">analytics</span></div>
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-zinc-100 text-zinc-600 border border-zinc-200">Draft</span>
                    </div>
                    <h3 className="text-lg font-bold text-zinc-900 mb-1 group-hover:text-app-primary transition-colors">Q4 Due Diligence</h3>
                    <p className="text-sm text-zinc-500 mb-6 line-clamp-2">Financial auditing and risk assessment for the upcoming merger acquisition target.</p>
                    <div className="mt-auto">
                        <div className="w-full bg-zinc-100 rounded-full h-1.5 mb-4"><div className="bg-zinc-400 h-1.5 rounded-full" style={{width: '35%'}}></div></div>
                        <div className="flex items-center justify-between border-t border-zinc-100 pt-3"><span className="text-xs text-zinc-400">Edited 1d ago</span></div>
                    </div>
                </div>

                <div className="group bg-white border border-zinc-200 rounded-xl p-5 hover:border-app-primary/50 hover:shadow-lg hover:shadow-app-primary/5 transition-all duration-300 flex flex-col h-full cursor-pointer">
                    <div className="flex justify-between items-start mb-4">
                        <div className="h-10 w-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600"><span className="material-symbols-outlined">pie_chart</span></div>
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700 border border-emerald-200">On Track</span>
                    </div>
                    <h3 className="text-lg font-bold text-zinc-900 mb-1 group-hover:text-app-primary transition-colors">Consumer Trends Report</h3>
                    <p className="text-sm text-zinc-500 mb-6 line-clamp-2">Analysis of Gen Z purchasing behaviors in the APAC region for Q3 2023.</p>
                    <div className="mt-auto">
                        <div className="w-full bg-zinc-100 rounded-full h-1.5 mb-4"><div className="bg-emerald-500 h-1.5 rounded-full" style={{width: '62%'}}></div></div>
                        <div className="flex items-center justify-between border-t border-zinc-100 pt-3"><span className="text-xs text-zinc-400">Edited 4h ago</span></div>
                    </div>
                </div>

                <div className="group bg-white border border-zinc-200 rounded-xl p-5 hover:border-app-primary/50 hover:shadow-lg hover:shadow-app-primary/5 transition-all duration-300 flex flex-col h-full cursor-pointer">
                    <div className="flex justify-between items-start mb-4">
                        <div className="h-10 w-10 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600"><span className="material-symbols-outlined">warning</span></div>
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 border border-orange-200">Review</span>
                    </div>
                    <h3 className="text-lg font-bold text-zinc-900 mb-1 group-hover:text-app-primary transition-colors">Supply Chain Opt.</h3>
                    <p className="text-sm text-zinc-500 mb-6 line-clamp-2">Restructuring logistics for European distribution centers to reduce overhead.</p>
                    <div className="mt-auto">
                        <div className="w-full bg-zinc-100 rounded-full h-1.5 mb-4"><div className="bg-orange-500 h-1.5 rounded-full" style={{width: '90%'}}></div></div>
                        <div className="flex items-center justify-between border-t border-zinc-100 pt-3"><span className="text-xs text-zinc-400">Edited 15m ago</span></div>
                    </div>
                </div>

                {/* Add New */}
                <div className="group bg-zinc-50 border border-dashed border-zinc-300 rounded-xl p-5 hover:border-app-primary hover:bg-app-primary/5 transition-all duration-300 flex flex-col items-center justify-center h-full min-h-[220px] cursor-pointer text-center">
                    <div className="h-12 w-12 rounded-full bg-white shadow-sm flex items-center justify-center text-app-primary mb-3 group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-2xl">add</span>
                    </div>
                    <h3 className="text-base font-bold text-zinc-900 mb-1">Create New Project</h3>
                </div>
            </div>
            <div className="h-8"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;