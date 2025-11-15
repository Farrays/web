import React from 'react';
import { useI18n } from '../hooks/useI18n';
import Hero from './Hero';
import HappinessStory from './HappinessStory';
import About from './About';
import Classes from './Classes';
import CategoriesSection from './home/CategoriesSection';
import WhyFIDC from './WhyFIDC';
import Services from './Services';
import Teachers from './Teachers';
import Testimonials from './Testimonials';
import HowToGetHere from './HowToGetHere';
import FinalCTA from './FinalCTA';
// import InstagramFeed from './InstagramFeed'; // TODO: Reactivar cuando esté listo
import FAQSection from './FAQSection';

const HomePage: React.FC = () => {
  const { t, locale } = useI18n();
  const baseUrl = 'https://www.farrayscenter.com';

  const homeFaqs = [
    { id: 'home-1', question: t('homeFaqQ1'), answer: t('homeFaqA1') },
    { id: 'home-2', question: t('homeFaqQ2'), answer: t('homeFaqA2') },
    { id: 'home-3', question: t('homeFaqQ3'), answer: t('homeFaqA3') },
    { id: 'home-4', question: t('homeFaqQ4'), answer: t('homeFaqA4') },
    { id: 'home-5', question: t('homeFaqQ5'), answer: t('homeFaqA5') },
    { id: 'home-6', question: t('homeFaqQ6'), answer: t('homeFaqA6') },
    { id: 'home-7', question: t('homeFaqQ7'), answer: t('homeFaqA7') },
    { id: 'home-8', question: t('homeFaqQ8'), answer: t('homeFaqA8') },
  ];

  return (
    <>
      {/* SEO metadata is handled by the global SEO.tsx component in App.tsx */}

      <Hero />
      <HappinessStory />
      <About />
      <Classes />
      <CategoriesSection />
      <WhyFIDC />
      <Services />
      <Teachers />
      <Testimonials />
      {/* <InstagramFeed /> */}
      <FAQSection title={t('faqTitle')} faqs={homeFaqs} pageUrl={`${baseUrl}/${locale}`} />
      <FinalCTA />
      <HowToGetHere />
    </>
  );
};

export default HomePage;
