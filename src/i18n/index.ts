import { generalTranslations } from './translations/general';
import { featureTranslations } from './translations/features';
import { pricingTranslations } from './translations/pricing';

export const translations = {
  en: {
    ...generalTranslations.en,
    ...featureTranslations.en,
    ...pricingTranslations.en,
  },
  // Add other languages here following the same pattern
};