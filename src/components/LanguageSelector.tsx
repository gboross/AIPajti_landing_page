// LanguageSelector.tsx

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Language } from '../i18n/types';

interface LanguageSelectorProps {
  currentLanguage: Language;
  onLanguageChange: (language: Language) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ currentLanguage, onLanguageChange }) => {
  const languages: { [key in 'en' | 'hu']: { name: string; flag: string; disabled?: boolean; comingSoonText?: string } } = {
    en: { name: 'English', flag: '🇬🇧' },
    hu: { name: 'Magyar', flag: '🇭🇺' }
  };

  return (
    <select
      value={currentLanguage}
      onChange={(e) => {
        const selectedLanguage = e.target.value as Language;
        onLanguageChange(selectedLanguage);
      }}
      className="bg-gray-800 text-white px-3 py-2 rounded-lg border border-gray-700 hover:border-primary transition-colors cursor-pointer appearance-none pr-8 relative"
      style={{
        backgroundImage:
          'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'white\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'%3E%3C/path%3E%3C/svg%3E")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right 8px center',
        backgroundSize: '16px'
      }}
    >
      {Object.entries(languages).map(([code, { name, flag }]) => (
        <option key={code} value={code} className="bg-gray-800">
          {flag} {name}
        </option>
      ))}
    </select>
  );
};

export default LanguageSelector;
