
import React from 'react';
import { FloatingHeader } from './components/FloatingHeader';
import { PanelGroup, HeroPanel, SummaryPanel, SkillsPanel, PortfolioPanel, ContactPanel } from './components/panels';
import { Footer } from './components/Footer';
import './App.scss';

function App() {
  return (
    <div className="main">
      <FloatingHeader />
      <PanelGroup>
        <HeroPanel className="primary" />
        <SummaryPanel className="secondary" />
        <SkillsPanel className="primary" />
        <PortfolioPanel className="secondary" />
        <ContactPanel className="primary" />
      </PanelGroup>
      <Footer />
    </div>
  );
}

export default App;
