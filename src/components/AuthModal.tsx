import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TermsOfService from './TermsOfService';
import { TranslationStrings } from '../i18n/types';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  translations: TranslationStrings;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, translations }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLogin && !acceptTerms) {
      alert(translations.pleaseAcceptTerms);
      return;
    }
    // Handle login or signup logic here
    console.log('Form submitted', { email, password, acceptTerms });
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto"
            onClick={onClose}
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              className="bg-gray-800 p-6 rounded-lg shadow-xl w-full max-w-sm mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-xl font-bold mb-4 text-center text-primary">
                {isLogin ? translations.login : translations.signUp}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    {translations.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                    {translations.password}
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                    required
                  />
                </div>
                {!isLogin && (
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="acceptTerms"
                      checked={acceptTerms}
                      onChange={(e) => setAcceptTerms(e.target.checked)}
                      className="mt-1 mr-2"
                    />
                    <label htmlFor="acceptTerms" className="text-xs text-gray-300">
                      {translations.acceptTerms}{' '}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          setShowTerms(true);
                        }}
                        className="text-primary hover:underline"
                      >
                        {translations.termsOfService}
                      </button>
                    </label>
                  </div>
                )}
                <button
                  type="submit"
                  className="w-full bg-primary text-secondary py-2 rounded-md hover:bg-primary-light transition-colors text-sm font-medium"
                >
                  {isLogin ? translations.login : translations.signUp}
                </button>
              </form>
              <p className="mt-4 text-center text-gray-400 text-xs">
                {isLogin ? translations.dontHaveAccount : translations.alreadyHaveAccount}{' '}
                <button
                  className="text-primary hover:underline"
                  onClick={() => setIsLogin(!isLogin)}
                >
                  {isLogin ? translations.signUp : translations.login}
                </button>
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <TermsOfService open={showTerms} onClose={() => setShowTerms(false)} translations={translations} />
    </>
  );
};

export default AuthModal;