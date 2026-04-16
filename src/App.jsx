import React from 'react';
import { usePersonality } from './hooks/usePersonality';
import LandingView from './components/LandingView';
import TestView from './components/TestView';
import ResultView from './components/ResultView';
import SynergyView from './components/SynergyView';
import './App.css';

function App() {
  const personality = usePersonality();

  return (
    <div className="App">
      <header style={{ padding: '1rem 2rem', borderBottom: '1px solid var(--glass-border)' }}>
        <h2 style={{ color: 'var(--primary)', cursor: 'pointer' }} onClick={() => personality.setView('LANDING')}>
          Sovereign AI <span style={{ fontWeight: 400, fontSize: '0.8em', color: 'var(--text-secondary)' }}>Curator</span>
        </h2>
      </header>

      <main className="container">
        {personality.view === 'LANDING' && <LandingView personality={personality} />}
        {personality.view === 'TESTING' && <TestView personality={personality} />}
        {personality.view === 'RESULT' && (
          <>
            <ResultView personality={personality} />
            <SynergyView personality={personality} />
          </>
        )}
      </main>

      <footer style={{ textAlign: 'center', padding: '3rem', opacity: 0.5, fontSize: '0.8rem' }}>
        &copy; 2026 Sovereign AI Personality Consultant. Powered by Stitch MCP.
      </footer>
    </div>
  );
}

export default App;
