import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { TranslationStrings } from '../i18n/types';
import TermsOfService from './TermsOfService';
import PrivacyPolicy from './PrivacyPolicy';
import CookiePolicy from './CookiePolicy';
import AccessibilityStatement from './AccessibilityStatement';

interface FooterProps {
  translations: TranslationStrings;
}

const Footer: React.FC<FooterProps> = ({ translations }) => {
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false);
  const [isCookiePolicyOpen, setIsCookiePolicyOpen] = useState(false);
  const [isAccessibilityStatementOpen, setIsAccessibilityStatementOpen] = useState(false);

  return (
    <footer className="relative bg-gray-900 text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-background-dark/90 to-background-light/90 backdrop-blur-lg" />
      
      <div className="relative container mx-auto px-4 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="block mb-6">
              <img 
                src="https://stackblitz.com/storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBOHpvRVE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--f9ea101dda629a4bb8fc103d25dd3adfae747a10/AIPajti_logo.png"
                alt="AIPajti Logo" 
                className="h-20 w-auto"
              />
            </Link>
            <p className="text-gray-400 mb-6">
              {translations.footerAbout}
            </p>
            <div className="flex items-center gap-3 text-gray-400">
              <Mail size={20} />
              <a href="mailto:contact@aipajti.com" className="hover:text-primary transition-colors">
                contact@aipajti.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/hero" className="text-gray-400 hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/features" className="text-gray-400 hover:text-primary transition-colors">Features</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Features</h4>
            <ul className="space-y-3">
              <li><Link to="/work-modes" className="text-gray-400 hover:text-primary transition-colors">Work Modes</Link></li>
              <li><Link to="/manager-model" className="text-gray-400 hover:text-primary transition-colors">Manager Model</Link></li>
              <li><Link to="/ai-showcase" className="text-gray-400 hover:text-primary transition-colors">AI Showcase</Link></li>
              <li><Link to="/tts-demo" className="text-gray-400 hover:text-primary transition-colors">TTS Demo</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-400 hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/testimonials" className="text-gray-400 hover:text-primary transition-colors">Testimonials</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-gray-800">
          <div className="flex flex-col items-center md:items-start gap-4 mb-4 md:mb-0">
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, href: '#' },
                { Icon: Instagram, href: '#' },
                { Icon: Linkedin, href: '#' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary/20 hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.Icon size={20} />
                </motion.a>
              ))}
            </div>
            {/* Coming Soon Platforms */}
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <div className="flex items-center gap-2">
                <MessageCircle size={16} />
                <span className="italic">Soon available...</span>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => setIsPrivacyPolicyOpen(true)}
              className="text-gray-400 hover:text-primary transition-colors"
            >
              {translations.privacyPolicy}
            </button>
            <button 
              onClick={() => setIsTermsOpen(true)}
              className="text-gray-400 hover:text-primary transition-colors"
            >
              {translations.termsOfService}
            </button>
            <button 
              onClick={() => setIsCookiePolicyOpen(true)}
              className="text-gray-400 hover:text-primary transition-colors"
            >
              {translations.cookiePolicy}
            </button>
            <button 
              onClick={() => setIsAccessibilityStatementOpen(true)}
              className="text-gray-400 hover:text-primary transition-colors"
            >
              {translations.accessibilityStatement}
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} AIPajti. {translations.footerRights}
          </p>
        </div>
      </div>

      {/* Modals */}
      <TermsOfService open={isTermsOpen} onClose={() => setIsTermsOpen(false)} translations={translations} />
      <PrivacyPolicy open={isPrivacyPolicyOpen} onClose={() => setIsPrivacyPolicyOpen(false)} translations={translations} />
      <CookiePolicy open={isCookiePolicyOpen} onClose={() => setIsCookiePolicyOpen(false)} translations={translations} />
      <AccessibilityStatement open={isAccessibilityStatementOpen} onClose={() => setIsAccessibilityStatementOpen(false)} translations={translations} />
    </footer>
  );
};

export default Footer;