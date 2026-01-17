import React, { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ValueProposition } from './components/ValueProposition';
import { ProductShowcase } from './components/ProductShowcase';
// Removed CategoryCarousel import as requested for current phase
import { GoldExchangeInfo } from './components/GoldExchangeInfo';
import { FAQ } from './components/FAQ';
import { Testimonials } from './components/Testimonials';
import { ReachOutCTA } from './components/ReachOutCTA';
import { WhatsAppConnect } from './components/WhatsAppConnect';
import { Footer } from './components/Footer';
import { QuoteRotator } from './components/QuoteRotator';
import { ScrollToTop } from './components/ui/ScrollToTop';
import { TermsAndConditions } from './components/TermsAndConditions';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { JewelleryCare } from './components/JewelleryCare';
import { BespokeDesign } from './components/BespokeDesign';
import { CuratedBy } from './components/CuratedBy';
import { AboutUs } from './components/AboutUs';
import { Materials } from './components/Materials';
import { BusinessCard } from './components/BusinessCard';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'terms' | 'privacy' | 'care' | 'bespoke' | 'about' | 'materials'>('home');

  const navigateToTerms = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setView('terms');
  };

  const navigateToPrivacy = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setView('privacy');
  };

  const navigateToHome = () => {
    setView('home');
  };

  const navigateToCare = () => {
    setView('care');
  };

  const navigateToBespoke = () => {
    setView('bespoke');
  };

  const navigateToAbout = () => {
    setView('about');
  };

  const navigateToMaterials = () => {
    setView('materials');
  };

  return (
    <div className="min-h-screen transition-colors duration-500 bg-gold-50 dark:bg-neutral-950">
      <Navbar 
        currentView={view}
        onHomeClick={navigateToHome} 
        onTermsClick={() => setView('terms')}
        onPrivacyClick={() => setView('privacy')}
        onCareClick={navigateToCare}
        onBespokeClick={navigateToBespoke}
        onAboutClick={navigateToAbout}
        onMaterialsClick={navigateToMaterials}
      />
      
      {view === 'home' && (
        <main>
          <Hero />
          <ValueProposition />
          <GoldExchangeInfo />
          {/* CategoryCarousel removed from view for now */}
          <ProductShowcase />
          <CuratedBy />
          <QuoteRotator />
          <FAQ />
          <Testimonials />
          <ReachOutCTA />
          <WhatsAppConnect />
          <BusinessCard />
        </main>
      )}

      {view === 'terms' && (
        <main>
          <TermsAndConditions onBack={navigateToHome} />
        </main>
      )}

      {view === 'privacy' && (
        <main>
          <PrivacyPolicy onBack={navigateToHome} />
        </main>
      )}

      {view === 'care' && (
        <main>
          <JewelleryCare onBack={navigateToHome} />
        </main>
      )}

      {view === 'bespoke' && (
        <main>
          <BespokeDesign onBack={navigateToHome} />
        </main>
      )}

      {view === 'about' && (
        <main>
          <AboutUs onBack={navigateToHome} />
        </main>
      )}

      {view === 'materials' && (
        <main>
          <Materials onBack={navigateToHome} />
        </main>
      )}

      <Footer onTermsClick={navigateToTerms} onPrivacyClick={navigateToPrivacy} />
      <ScrollToTop />
      <Analytics />
    </div>
  );
};

export default App;