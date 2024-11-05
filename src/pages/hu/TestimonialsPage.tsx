import React from 'react';
import Testimonials from '../../components/Testimonials';
import SEO from '../../components/SEO';
import { TranslationStrings } from '../../i18n/types';

interface TestimonialsPageProps {
  translations: TranslationStrings;
}

const TestimonialsPage: React.FC<TestimonialsPageProps> = ({ translations }) => {
  return (
    <>
      <SEO
        title="Sikertörténetek | AIPajti"
        description="Fedezze fel, hogyan alakítják át vállalkozások és alkotók a munkájukat az AIPajti segítségével. Olvasson sikertörténeteket és véleményeket elégedett felhasználóinktól."
        keywords="vélemények, sikertörténetek, felhasználói vélemények, AI platform értékelések, felhasználói tapasztalatok"
        canonicalUrl="https://aipajti.com/hu/velemenyek"
        lang="hu"
      />
      <Testimonials translations={translations} />
    </>
  );
};

export default TestimonialsPage;