import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { HelmetProvider } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Language } from './i18n/types';
import { translations } from './i18n/translations';
import AuthModal from './components/AuthModal';
import { theme } from './theme';
import Layout from './components/Layout';
import LanguageSelector from './components/LanguageSelector';

// English Pages
import HeroPage from './pages/en/HeroPage';
import AboutPage from './pages/en/AboutPage';
import FeaturesPage from './pages/en/FeaturesPage';
import WorkModesPage from './pages/en/WorkModesPage';
import ManagerModelPage from './pages/en/ManagerModelPage';
import AIShowcasePage from './pages/en/AIShowcasePage';
import DataSolutionsPage from './pages/en/DataSolutionsPage';
import TTSDemoPage from './pages/en/TTSDemoPage';
import PricingPage from './pages/en/PricingPage';
import TestimonialsPage from './pages/en/TestimonialsPage';
import BlogPage from './pages/en/BlogPage';
import FAQPage from './pages/en/FAQPage';
import NotFoundPage from './pages/NotFoundPage';
import MaintenancePage from './pages/MaintenancePage';

// Hungarian Pages
import HeroPageHu from './pages/hu/HeroPage';
import AboutPageHu from './pages/hu/AboutPage';
import FeaturesPageHu from './pages/hu/FeaturesPage';
import WorkModesPageHu from './pages/hu/WorkModesPage';
import ManagerModelPageHu from './pages/hu/ManagerModelPage';
import AIShowcasePageHu from './pages/hu/AIShowcasePage';
import DataSolutionsPageHu from './pages/hu/DataSolutionsPage';
import TTSDemoPageHu from './pages/hu/TTSDemoPage';
import PricingPageHu from './pages/hu/PricingPage';
import TestimonialsPageHu from './pages/hu/TestimonialsPage';
import BlogPageHu from './pages/hu/BlogPage';
import FAQPageHu from './pages/hu/FAQPage';

function App() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const [language, setLanguage] = useState<Language>(() => {
    // Kezdeti nyelv beállítása az URL alapján
    return window.location.pathname.includes('/hu/') ? 'hu' : 'en';
  });
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('hero');
  const [selectedBlogPost, setSelectedBlogPost] = useState<number | null>(null);
  const [isMaintenanceMode] = useState(false);

  // URL és nyelvi állapot szinkronizálása
  useEffect(() => {
    const currentPath = window.location.pathname;
    const shouldBeHungarian = currentPath.includes('/hu/');
    const currentLanguage = shouldBeHungarian ? 'hu' : 'en';
    
    if (currentLanguage !== language) {
      setLanguage(currentLanguage);
      i18n.changeLanguage(currentLanguage);
    }
  }, [window.location.pathname]);

  // Nyelvváltás kezelése
  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);

    const currentPath = window.location.pathname;
    const basePath = currentPath.replace(/^\/(hu\/)?/, '');
    
    if (newLanguage === 'hu') {
      navigate(`/hu/${basePath}`);
    } else {
      navigate(`/${basePath}`);
    }
  };

  if (isMaintenanceMode) {
    return <MaintenancePage />;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HelmetProvider>
        <Router>
          <Layout>
            <LanguageSelector 
              currentLanguage={language} 
              onLanguageChange={handleLanguageChange} 
            />
            <Routes>
              {/* Magyar útvonalak */}
              <Route path="/hu" element={<Navigate to="/hu/kezdolap" replace />} />
              <Route path="/hu/kezdolap" element={<HeroPageHu translations={translations.hu} />} />
              <Route path="/hu/rolunk" element={<AboutPageHu translations={translations.hu} />} />
              <Route path="/hu/funkciok" element={<FeaturesPageHu translations={translations.hu} />} />
              <Route path="/hu/mukodesi-modok" element={<WorkModesPageHu translations={translations.hu} />} />
              <Route path="/hu/menedzser-modell" element={<ManagerModelPageHu translations={translations.hu} />} />
              <Route path="/hu/ai-bemutato" element={<AIShowcasePageHu translations={translations.hu} />} />
              <Route path="/hu/adat-megoldasok" element={<DataSolutionsPageHu translations={translations.hu} />} />
              <Route path="/hu/hangfelolvasas" element={<TTSDemoPageHu translations={translations.hu} />} />
              <Route path="/hu/arak" element={<PricingPageHu translations={translations.hu} />} />
              <Route path="/hu/velemenyek" element={<TestimonialsPageHu translations={translations.hu} />} />
              <Route 
                path="/hu/blog" 
                element={
                  <BlogPageHu 
                    translations={translations.hu} 
                    initialSelectedPost={selectedBlogPost} 
                  />
                } 
              />
              <Route path="/hu/gyik" element={<FAQPageHu translations={translations.hu} />} />

              {/* Angol útvonalak */}
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path="/home" element={<HeroPage translations={translations.en} />} />
              <Route path="/about" element={<AboutPage translations={translations.en} />} />
              <Route path="/features" element={<FeaturesPage translations={translations.en} />} />
              <Route path="/work-modes" element={<WorkModesPage translations={translations.en} />} />
              <Route path="/manager-model" element={<ManagerModelPage translations={translations.en} />} />
              <Route path="/ai-showcase" element={<AIShowcasePage translations={translations.en} />} />
              <Route path="/data-solutions" element={<DataSolutionsPage translations={translations.en} />} />
              <Route path="/tts-demo" element={<TTSDemoPage translations={translations.en} />} />
              <Route path="/pricing" element={<PricingPage translations={translations.en} />} />
              <Route path="/testimonials" element={<TestimonialsPage translations={translations.en} />} />
              <Route 
                path="/blog" 
                element={
                  <BlogPage 
                    translations={translations.en} 
                    initialSelectedPost={selectedBlogPost} 
                  />
                } 
              />
              <Route path="/faq" element={<FAQPage translations={translations.en} />} />

              {/* Special Routes */}
              <Route path="/maintenance" element={<MaintenancePage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Layout>
          <AuthModal 
            isOpen={isAuthModalOpen} 
            onClose={() => setIsAuthModalOpen(false)}
            translations={translations[language]}
          />
        </Router>
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;