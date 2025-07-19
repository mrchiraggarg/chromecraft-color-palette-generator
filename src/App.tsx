import React, { useState, useEffect } from 'react';
import { PaletteProvider } from './contexts/PaletteContext';
import Header from './components/Header';
import PaletteGenerator from './components/PaletteGenerator';
import SavedPalettes from './components/SavedPalettes';
import TrendingPalettes from './components/TrendingPalettes';

function App() {
  const [activeTab, setActiveTab] = useState('generator');

  useEffect(() => {
    const handleSwitchTab = (event: any) => {
      setActiveTab(event.detail);
    };

    window.addEventListener('switchTab', handleSwitchTab);
    return () => window.removeEventListener('switchTab', handleSwitchTab);
  }, []);

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'saved':
        return <SavedPalettes />;
      case 'trending':
        return <TrendingPalettes />;
      case 'generator':
      default:
        return <PaletteGenerator />;
    }
  };

  return (
    <PaletteProvider>
      <div className="min-h-screen bg-gray-50">
        <Header activeTab={activeTab} onTabChange={setActiveTab} />
        <main className="py-8">
          {renderActiveTab()}
        </main>
      </div>
    </PaletteProvider>
  );
}

export default App;