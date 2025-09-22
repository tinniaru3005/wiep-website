import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import HowToJoin from './HowToJoin';
import Resources from './Resources';
import FAQ from './FAQ';
import CodeOfConduct from './CodeOfConduct';

const WiEPWebsite = () => {
  const [activeSection, setActiveSection] = useState('home');

  const renderContent = () => {
    switch (activeSection) {
      case 'home': return <Home setActiveSection={setActiveSection} />;
      case 'about': return <About />;
      case 'join': return <HowToJoin />;
      case 'resources': return <Resources />;
      case 'faq': return <FAQ />;
      case 'conduct': return <CodeOfConduct />;
      default: return <Home setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {renderContent()}
      </main>

      <Footer setActiveSection={setActiveSection} />
    </div>
  );
};

export default WiEPWebsite;