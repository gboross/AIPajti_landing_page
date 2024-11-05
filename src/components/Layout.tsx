import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ParticlesBackground from './ParticlesBackground';
import FloatingNavigation from './FloatingNavigation';
import { Language } from '../i18n/types';
import { translations } from '../i18n/translations';

interface LayoutProps {
  children: React.ReactNode;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onLogin: () => void;
  currentSection: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  language,
  onLanguageChange,
  onLogin,
  currentSection
}) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/hero' || location.pathname === '/hu/kezdolap';

  return (
    <div className="min-h-screen font-roboto relative bg-background-dark">
      <ParticlesBackground />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header
          language={language}
          translations={translations[language]}
          onLanguageChange={onLanguageChange}
          onLogin={onLogin}
        />
        <main className="flex-grow pt-24">
          {children}
        </main>
        <Footer translations={translations[language]} />
      </div>
      {isHomePage && <FloatingNavigation currentSection={currentSection} />}
    </div>
  );
};

export default Layout;