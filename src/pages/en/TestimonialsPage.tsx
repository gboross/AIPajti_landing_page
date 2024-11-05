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
        title="Customer Success Stories | AIPajti"
        description="Discover how businesses and creators are transforming their work with AIPajti. Read success stories and testimonials from our satisfied users."
        keywords="testimonials, success stories, customer reviews, AI platform reviews, user experiences"
        canonicalUrl="https://aipajti.com/testimonials"
      />
      <Testimonials translations={translations} />
    </>
  );
};

export default TestimonialsPage;