export type Language = 'en' | 'hu';

export interface TranslationStrings {
  // Header
  headerTitle: string;
  headerSubtitle: string;
  getStarted: string;
  viewPricing: string;
  features: string;
  howItWorks: string;
  pricing: string;
  login: string;
  signUp: string;

  // Welcome message
  welcomeMessage: string;

  // Navigation
  home: string;
  features: string;
  howItWorks: string;
  pricing: string;
  contact: string;
  login: string;
  signUp: string;

  // About Section
  aboutTitle: string;
  aboutDescription: string;

  // Footer
  footerAbout: string;
  footerLinks: string;
  footerLegal: string;
  footerFollowUs: string;
  privacyPolicy: string;
  termsOfService: string;
  cookiePolicy: string;
  dataProtection: string;
  accessibilityStatement: string;
  footerRights: string;

  // Common Actions
  close: string;
  tryNow: string;
  learnMore: string;
  getStarted: string;
  viewPricing: string;
}

export type Translations = {
  [key in Language]: TranslationStrings;
};