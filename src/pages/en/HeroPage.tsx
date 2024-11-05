import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../../components/Hero';
import ImageStrip from '../../components/ImageStrip';
import About from '../../components/About';
import WorkModes from '../../components/WorkModes';
import TextCascade from '../../components/TextCascade';
import ManagerModel from '../../components/ManagerModel';
import AIStudio from '../../components/AIStudio';
import Features from '../../components/Features';
import HowItWorks from '../../components/HowItWorks';
import AIShowcase from '../../components/AIShowcase';
import DataSolutions from '../../components/DataSolutions';
import TTSDemo from '../../components/TTSDemo';
import PricingPlans from '../../components/PricingPlans';
import CallToAction from '../../components/CallToAction';
import Testimonials from '../../components/Testimonials';
import Blog from '../../components/Blog';
import FAQ from '../../components/FAQ';
import AuthModal from '../../components/AuthModal';
import { translations } from '../../i18n/translations';
import { useLoginModal } from '../../hooks/useLoginModal';

const HeroPage: React.FC = () => {
  const { isLoginModalOpen, openLoginModal, closeLoginModal } = useLoginModal();
  const [selectedBlogPost, setSelectedBlogPost] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>AIPajti - The Ultimate AI Platform | Home</title>
        <meta name="description" content="AIPajti is your all-in-one AI platform for text, image, audio, and video generation. Experience the power of artificial intelligence with our intuitive tools." />
        <meta name="keywords" content="AI platform, artificial intelligence, text generation, image generation, audio processing, video creation" />
        <link rel="canonical" href="https://aipajti.com/hero" />
        <meta property="og:title" content="AIPajti - The Ultimate AI Platform" />
        <meta property="og:description" content="Generate text, images, audio, and videos with advanced AI models. Transform your creative process with AIPajti." />
        <meta property="og:url" content="https://aipajti.com/hero" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* 1. Hero Section */}
      <section id="hero">
        <Hero translations={translations.en} onGetStarted={openLoginModal} />
      </section>

      {/* 2. Image Strip */}
      <section id="image-strip">
        <ImageStrip />
      </section>

      {/* 3. About Section */}
      <section id="about">
        <About translations={translations.en} />
      </section>

      {/* 4. Work Modes Section */}
      <section id="work-modes">
        <WorkModes onTryNow={openLoginModal} />
      </section>

      {/* 5. Text Cascade Animation */}
      <section id="text-cascade">
        <TextCascade />
      </section>

      {/* 6. Manager Model Section */}
      <section id="manager-model">
        <ManagerModel translations={translations.en} />
      </section>

      {/* 7. AI Studio Section */}
      <section id="ai-studio">
        <AIStudio onLogin={openLoginModal} />
      </section>

      {/* 8. TTS Demo Section */}
      <section id="tts-demo">
        <TTSDemo onLogin={openLoginModal} />
      </section>

      {/* 9. Features Section */}
      <section id="features">
        <Features translations={translations.en} />
      </section>

      {/* 10. Call to Action */}
      <section id="call-to-action">
        <CallToAction translations={translations.en} onLogin={openLoginModal} />
      </section>

      {/* 11. How It Works Section */}
      <section id="how-it-works">
        <HowItWorks translations={translations.en} onTryNow={openLoginModal} />
      </section>

      {/* 12. AI Showcase Section */}
      <section id="ai-showcase">
        <AIShowcase translations={translations.en} onTryNow={openLoginModal} />
      </section>

      {/* 13. Data Solutions Section */}
      <section id="data-solutions">
        <DataSolutions translations={translations.en} onLogin={openLoginModal} />
      </section>

      {/* 14. Pricing Plans Section */}
      <section id="pricing">
        <PricingPlans translations={translations.en} onLogin={openLoginModal} />
      </section>

      {/* 15. Testimonials Section */}
      <section id="testimonials">
        <Testimonials translations={translations.en} />
      </section>

      {/* 16. Blog Section */}
      <section id="blog">
        <Blog 
          translations={translations.en} 
          initialSelectedPost={selectedBlogPost}
          onPostSelect={setSelectedBlogPost}
        />
      </section>

      {/* 17. FAQ Section */}
      <section id="faq">
        <FAQ translations={translations.en} />
      </section>

      {/* Auth Modal */}
      <AuthModal 
        isOpen={isLoginModalOpen} 
        onClose={closeLoginModal} 
        translations={translations.en}
      />
    </>
  );
};

export default HeroPage;