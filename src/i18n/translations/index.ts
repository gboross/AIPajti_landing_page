import { generalTranslations } from './general';
import { featureTranslations } from './features';
import { pricingTranslations } from './pricing';
import { managerModelTranslations } from './managerModel';

export const translations = {
  en: {
    ...generalTranslations.en,
    ...featureTranslations.en,
    ...pricingTranslations.en,
    ...managerModelTranslations.en,
  },
  // Add other languages here following the same pattern
};