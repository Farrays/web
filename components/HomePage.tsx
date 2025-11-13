import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useI18n } from '../hooks/useI18n';
import Hero from './Hero';
import Philosophy from './Philosophy';
import About from './About';
import Classes from './Classes';
import CategoriesSection from './home/CategoriesSection';
import WhyFIDC from './WhyFIDC';
import Services from './Services';
import Teachers from './Teachers';
import Testimonials from './Testimonials';
import HowToGetHere from './HowToGetHere';
import FinalCTA from './FinalCTA';
import InstagramFeed from './InstagramFeed';
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
      <Helmet>
        <title>{t('pageTitle')}</title>
        <meta name="description" content={t('metaDescription')} />
        <link rel="canonical" href={`${baseUrl}/${locale}`} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${baseUrl}/${locale}`} />
        <meta property="og:title" content={t('pageTitle')} />
        <meta property="og:description" content={t('metaDescription')} />
        <meta property="og:image" content={`${baseUrl}/images/og-image.jpg`} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`${baseUrl}/${locale}`} />
        <meta name="twitter:title" content={t('pageTitle')} />
        <meta name="twitter:description" content={t('metaDescription')} />
        <meta name="twitter:image" content={`${baseUrl}/images/twitter-image.jpg`} />

        {/* Hreflang tags */}
        <link rel="alternate" hrefLang="es" href={`${baseUrl}/es`} />
        <link rel="alternate" hrefLang="ca" href={`${baseUrl}/ca`} />
        <link rel="alternate" hrefLang="en" href={`${baseUrl}/en`} />
        <link rel="alternate" hrefLang="fr" href={`${baseUrl}/fr`} />
        <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/es`} />
      </Helmet>

      <Hero />
      <Philosophy />
      <About />
      <Classes />
      <CategoriesSection />
      <WhyFIDC />
      <Services />
      <Teachers />
      <Testimonials />
      <InstagramFeed />
      <FAQSection title={t('faqTitle')} faqs={homeFaqs} pageUrl={`${baseUrl}/${locale}`} />
      <FinalCTA />
      <HowToGetHere />
    </>
  );
};

export default HomePage;
