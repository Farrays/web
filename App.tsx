import React, { useEffect, useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { I18nProvider, useI18n } from './hooks/useI18n';
import ErrorBoundary from './components/ErrorBoundary';
import SEO from './components/SEO';
import Header from './components/Header';
import SkipLink from './components/SkipLink';
import HomePage from './components/HomePage';
import DanceClassesPage from './components/DanceClassesPage';
import DancehallPage from './components/DancehallPage';
import AfrobeatsPage from './components/AfrobeatsPage';
import Footer from './components/Footer';
import type { Page } from './types';

const AppContent: React.FC = () => {
  const [page, setPage] = useState<Page>('home');

  useEffect(() => {
    // Scroll to the top of the page whenever the page changes
    window.scrollTo(0, 0);
  }, [page]);

  const renderPage = () => {
    switch (page) {
      case 'classes':
        return <DanceClassesPage />;
      case 'dancehall':
        return <DancehallPage />;
      case 'afrobeats':
        return <AfrobeatsPage />;
      case 'home':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="bg-black text-neutral antialiased font-sans overflow-x-hidden">
      <SEO page={page} />
      <SkipLink />
      <Header setPage={setPage} currentPage={page} />
      <main id="main-content">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <I18nProvider>
          <AppContent />
        </I18nProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default App;