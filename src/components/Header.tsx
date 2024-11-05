import React, { useState } from 'react';
import { AppBar, Toolbar, Button, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Brain, Zap, Code, Database, Mic, Video, Image, FileText, Bot, Workflow, Sparkles, Home } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
import { Language, TranslationStrings } from '../i18n/types';

interface HeaderProps {
  language: Language;
  translations: TranslationStrings;
  onLanguageChange: (language: Language) => void;
  onLogin: () => void;
}

const Header: React.FC<HeaderProps> = ({ language, translations, onLanguageChange, onLogin }) => {
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState<null | HTMLElement>(null);
  const [featuresAnchor, setFeaturesAnchor] = useState<null | HTMLElement>(null);
  const [resourcesAnchor, setResourcesAnchor] = useState<null | HTMLElement>(null);
  const location = useLocation();

  const handleMobileMenu = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setMobileMenuAnchor(null);
    setFeaturesAnchor(null);
    setResourcesAnchor(null);
  };

  const isHungarian = location.pathname.startsWith('/hu');
  const basePath = isHungarian ? '/hu' : '';

  // Main navigation items
  const mainNavItems = [
    { path: isHungarian ? '/hu/kezdolap' : '/hero', label: translations.home },
    { path: isHungarian ? '/hu/funkciok' : '/features', label: translations.features },
    { path: isHungarian ? '/hu/arak' : '/pricing', label: translations.pricing },
    { path: isHungarian ? '/hu/blog' : '/blog', label: 'Blog' },
  ];

  // Features dropdown items with icons
  const featureItems = [
    { 
      path: isHungarian ? '/hu/mukodesi-modok' : '/work-modes', 
      label: translations.workModes,
      icon: Workflow,
      description: "Choose between automated and manual AI control"
    },
    { 
      path: isHungarian ? '/hu/menedzser-modell' : '/manager-model', 
      label: translations.managerModel,
      icon: Brain,
      description: "Let AI handle complex multi-step tasks"
    },
    { 
      path: isHungarian ? '/hu/ai-bemutato' : '/ai-showcase', 
      label: translations.aiShowcase,
      icon: Sparkles,
      description: "See our AI models in action"
    },
    { 
      path: isHungarian ? '/hu/adat-megoldasok' : '/data-solutions', 
      label: translations.dataSolutions,
      icon: Database,
      description: "Process and analyze data with AI"
    },
    { 
      path: isHungarian ? '/hu/hangfelolvasas' : '/tts-demo', 
      label: translations.ttsDemo,
      icon: Mic,
      description: "Try our text-to-speech technology"
    }
  ];

  // Resources dropdown items with icons
  const resourceItems = [
    { 
      path: isHungarian ? '/hu/rolunk' : '/about', 
      label: translations.about,
      icon: Bot,
      description: "Learn more about AIPajti"
    },
    { 
      path: isHungarian ? '/hu/velemenyek' : '/testimonials', 
      label: translations.testimonials,
      icon: FileText,
      description: "Read success stories from our users"
    },
    { 
      path: isHungarian ? '/hu/gyik' : '/faq', 
      label: translations.faq,
      icon: Code,
      description: "Find answers to common questions"
    }
  ];

  const DropdownMenu = ({ items, anchorEl, onClose, title }: any) => (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={onClose}
      className="mt-2"
      PaperProps={{
        style: {
          backgroundColor: '#1a1a1a',
          border: '1px solid rgba(255, 198, 0, 0.1)',
          borderRadius: '12px',
          padding: '8px',
          minWidth: '280px'
        },
      }}
    >
      {title && (
        <div className="px-4 py-2 text-primary text-sm font-semibold">
          {title}
        </div>
      )}
      {items.map((item: any) => {
        const Icon = item.icon;
        return (
          <MenuItem
            key={item.path}
            component={Link}
            to={item.path}
            onClick={onClose}
            className={`py-3 px-4 rounded-lg my-1 ${
              location.pathname === item.path
                ? 'bg-primary/20 text-primary'
                : 'text-white hover:bg-gray-800/80'
            }`}
          >
            <div className="flex items-center gap-3">
              <Icon size={20} className="text-primary" />
              <div>
                <div className="font-medium">{item.label}</div>
                <div className="text-xs text-gray-400">{item.description}</div>
              </div>
            </div>
          </MenuItem>
        );
      })}
    </Menu>
  );

  return (
    <AppBar position="fixed" color="transparent" elevation={0} className="bg-gray-900/95 backdrop-filter backdrop-blur-lg border-b border-gray-800" style={{ zIndex: 40 }}>
      <Toolbar className="container mx-auto px-4">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div className="flex items-center">
            <Link to={basePath} className="flex items-center">
              <img 
                src="https://stackblitz.com/storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBOHpvRVE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--f9ea101dda629a4bb8fc103d25dd3adfae747a10/AIPajti_logo.png" 
                alt="AIPajti Logo" 
                className="h-16 md:h-20 w-auto transition-transform duration-300 hover:scale-105"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-4">
            {/* Main Navigation Items */}
            {mainNavItems.map((item) => (
              <Button
                key={item.path}
                component={Link}
                to={item.path}
                className={`font-medium text-base px-4 py-2 rounded-lg transition-all duration-300 ${
                  location.pathname === item.path 
                    ? 'bg-primary text-gray-900 hover:bg-primary/90' 
                    : 'text-white hover:bg-gray-800/80'
                }`}
              >
                {item.label}
              </Button>
            ))}

            {/* Features Dropdown */}
            <Button
              onClick={(e) => setFeaturesAnchor(e.currentTarget)}
              className="font-medium text-base px-4 py-2 rounded-lg transition-all duration-300 text-white hover:bg-gray-800/80 flex items-center gap-1"
            >
              Features
              <ChevronDown size={16} className={`transform transition-transform ${featuresAnchor ? 'rotate-180' : ''}`} />
            </Button>

            {/* Resources Dropdown */}
            <Button
              onClick={(e) => setResourcesAnchor(e.currentTarget)}
              className="font-medium text-base px-4 py-2 rounded-lg transition-all duration-300 text-white hover:bg-gray-800/80 flex items-center gap-1"
            >
              Resources
              <ChevronDown size={16} className={`transform transition-transform ${resourcesAnchor ? 'rotate-180' : ''}`} />
            </Button>

            {/* Home Button and Language Selector */}
            <div className="flex items-center gap-4">
              <Link 
                to={basePath}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors"
              >
                <Home size={20} />
              </Link>
              <LanguageSelector currentLanguage={language} onLanguageChange={onLanguageChange} />
            </div>

            {/* Auth Buttons */}
            <Button 
              onClick={onLogin} 
              className="text-white hover:bg-gray-800/80 font-medium text-base px-4 py-2 rounded-lg transition-all duration-300"
            >
              {translations.login}
            </Button>
            <Button 
              variant="contained" 
              onClick={onLogin} 
              className="bg-primary hover:bg-primary/90 text-gray-900 font-semibold text-base px-4 py-2 rounded-lg transition-all duration-300"
            >
              {translations.signUp}
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="xl:hidden flex items-center gap-4">
            {/* Home Button and Language Selector for Mobile */}
            <Link 
              to={basePath}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors"
            >
              <Home size={20} />
            </Link>
            <LanguageSelector currentLanguage={language} onLanguageChange={onLanguageChange} />
            
            {/* Auth Buttons */}
            <Button 
              onClick={onLogin} 
              className="text-white hover:bg-gray-800/80 font-medium text-sm px-3 py-1.5 rounded-lg transition-all duration-300"
            >
              {translations.login}
            </Button>
            <Button 
              variant="contained" 
              onClick={onLogin} 
              className="bg-primary hover:bg-primary/90 text-gray-900 font-semibold text-sm px-3 py-1.5 rounded-lg transition-all duration-300"
            >
              {translations.signUp}
            </Button>

            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              className="text-primary hover:bg-gray-800/50"
              onClick={handleMobileMenu}
            >
              <MenuIcon />
            </IconButton>
          </div>
        </div>

        {/* Dropdown Menus */}
        <DropdownMenu
          items={featureItems}
          anchorEl={featuresAnchor}
          onClose={() => setFeaturesAnchor(null)}
          title="Features"
        />
        <DropdownMenu
          items={resourceItems}
          anchorEl={resourcesAnchor}
          onClose={() => setResourcesAnchor(null)}
          title="Resources"
        />

        {/* Mobile Menu Dropdown */}
        <Menu
          anchorEl={mobileMenuAnchor}
          open={Boolean(mobileMenuAnchor)}
          onClose={handleClose}
          className="xl:hidden"
          style={{ zIndex: 35 }}
          PaperProps={{
            style: {
              maxHeight: '80vh',
              width: '280px',
              backgroundColor: '#1a1a1a',
              border: '1px solid rgba(255, 198, 0, 0.1)',
            },
          }}
        >
          {/* Main Navigation Items */}
          {mainNavItems.map((item) => (
            <MenuItem
              key={item.path}
              component={Link}
              to={item.path}
              onClick={handleClose}
              className={`py-3 px-4 ${
                location.pathname === item.path 
                  ? 'bg-primary text-gray-900' 
                  : 'text-white hover:bg-gray-800/80'
              }`}
            >
              {item.label}
            </MenuItem>
          ))}

          {/* Features Section */}
          <div className="py-2 px-4 text-primary text-sm font-semibold bg-gray-800/50">
            {translations.features}
          </div>
          {featureItems.map((item) => {
            const Icon = item.icon;
            return (
              <MenuItem
                key={item.path}
                component={Link}
                to={item.path}
                onClick={handleClose}
                className={`py-3 px-4 ${
                  location.pathname === item.path
                    ? 'bg-primary/20 text-primary'
                    : 'text-white hover:bg-gray-800/80'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon size={20} className="text-primary" />
                  <div>
                    <div className="font-medium">{item.label}</div>
                    <div className="text-xs text-gray-400">{item.description}</div>
                  </div>
                </div>
              </MenuItem>
            );
          })}

          {/* Resources Section */}
          <div className="py-2 px-4 text-primary text-sm font-semibold bg-gray-800/50">
            {translations.resources}
          </div>
          {resourceItems.map((item) => {
            const Icon = item.icon;
            return (
              <MenuItem
                key={item.path}
                component={Link}
                to={item.path}
                onClick={handleClose}
                className={`py-3 px-4 ${
                  location.pathname === item.path
                    ? 'bg-primary/20 text-primary'
                    : 'text-white hover:bg-gray-800/80'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon size={20} className="text-primary" />
                  <div>
                    <div className="font-medium">{item.label}</div>
                    <div className="text-xs text-gray-400">{item.description}</div>
                  </div>
                </div>
              </MenuItem>
            );
          })}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;