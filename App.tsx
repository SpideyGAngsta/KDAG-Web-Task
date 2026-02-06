import React from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import Simulation from './pages/Simulation';
import DocumentViewer from './pages/DocumentViewer';

const Navigation = () => {
  const location = useLocation();
  
  // Don't show nav overlay on the landing page if you want a pure experience, 
  // but for a demo, it's helpful to switch views. 
  // We'll keep it discreet at the bottom right.
  return (
    <div className="fixed bottom-4 right-4 z-[100] flex gap-2 bg-black/80 backdrop-blur text-white p-2 rounded-full shadow-2xl border border-white/10 text-xs font-medium">
      <Link 
        to="/" 
        className={`px-3 py-1.5 rounded-full transition-colors ${location.pathname === '/' ? 'bg-white text-black' : 'hover:bg-white/20'}`}
      >
        Landing
      </Link>
      <Link 
        to="/dashboard" 
        className={`px-3 py-1.5 rounded-full transition-colors ${location.pathname === '/dashboard' ? 'bg-white text-black' : 'hover:bg-white/20'}`}
      >
        Dashboard
      </Link>
      <Link 
        to="/simulation" 
        className={`px-3 py-1.5 rounded-full transition-colors ${location.pathname === '/simulation' ? 'bg-white text-black' : 'hover:bg-white/20'}`}
      >
        Simulation
      </Link>
      <Link 
        to="/document" 
        className={`px-3 py-1.5 rounded-full transition-colors ${location.pathname === '/document' ? 'bg-white text-black' : 'hover:bg-white/20'}`}
      >
        Doc Viewer
      </Link>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/simulation" element={<Simulation />} />
        <Route path="/document" element={<DocumentViewer />} />
      </Routes>
    </Router>
  );
};

export default App;