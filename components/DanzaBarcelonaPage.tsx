import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useI18n } from '../hooks/useI18n';
import { HUB_CATEGORIES } from '../constants/danceClassesHub';
import AnimateOnScroll from './AnimateOnScroll';
import FAQSection from './FAQSection';

const DanzaBarcelonaPage: React.FC = () => {
  const { t, locale } = useI18n();
  const baseUrl = 'https://www.farrayscenter.com';

  // Get the "contemporary" category data from HUB_CATEGORIES
  const danzaCategory = HUB_CATEGORIES.find(cat => cat.key === 'contemporary');

  if (!danzaCategory) {
    throw new Error('Category "contemporary" not found in HUB_CATEGORIES');
  }

  // FAQ data for Danza
  const danzaFaqs = [
    { id: 'danza-1', question: t('danzaFaqQ1'), answer: t('danzaFaqA1') },
    { id: 'danza-2', question: t('danzaFaqQ2'), answer: t('danzaFaqA2') },
    { id: 'danza-3', question: t('danzaFaqQ3'), answer: t('danzaFaqA3') },
    { id: 'danza-4', question: t('danzaFaqQ4'), answer: t('danzaFaqA4') },
    { id: 'danza-5', question: t('danzaFaqQ5'), answer: t('danzaFaqA5') },
    { id: 'danza-6', question: t('danzaFaqQ6'), answer: t('danzaFaqA6') },
    { id: 'danza-7', question: t('danzaFaqQ7'), answer: t('danzaFaqA7') },
    { id: 'danza-8', question: t('danzaFaqQ8'), answer: t('danzaFaqA8') },
    { id: 'danza-9', question: t('danzaFaqQ9'), answer: t('danzaFaqA9') },
    { id: 'danza-10', question: t('danzaFaqQ10'), answer: t('danzaFaqA10') },
  ];

  // Why study at FIDC reasons
  const whyReasons = [
    { titleKey: 'danzaBarcelona_why_reason1_title', descKey: 'danzaBarcelona_why_reason1_desc' },
    { titleKey: 'danzaBarcelona_why_reason2_title', descKey: 'danzaBarcelona_why_reason2_desc' },
    { titleKey: 'danzaBarcelona_why_reason3_title', descKey: 'danzaBarcelona_why_reason3_desc' },
    { titleKey: 'danzaBarcelona_why_reason4_title', descKey: 'danzaBarcelona_why_reason4_desc' },
    { titleKey: 'danzaBarcelona_why_reason5_title', descKey: 'danzaBarcelona_why_reason5_desc' },
    { titleKey: 'danzaBarcelona_why_reason6_title', descKey: 'danzaBarcelona_why_reason6_desc' },
  ];

  // Schema Markup - BreadcrumbList
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: t('danzaBarcelona_breadcrumb_home'),
        item: `${baseUrl}/${locale}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: t('danzaBarcelona_breadcrumb_current'),
        item: `${baseUrl}/${locale}/clases/danza-barcelona`,
      },
    ],
  };

  // Schema Markup - ItemList (Dance Styles)
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Estilos de Danza en Barcelona - Farray\'s Center',
    itemListElement: danzaCategory.allStyles.map((style, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: t(`danceClassesHub_style_${style.key}`),
      url: `${baseUrl}/${locale}${style.url}`,
    })),
  };

  // Schema Markup - FAQPage
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: danzaFaqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  // Schema Markup - Course
  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Clases de Danza en Barcelona',
    description: t('danzaBarcelona_description'),
    provider: {
      '@type': 'Organization',
      name: 'Farray\'s International Dance Center',
      sameAs: 'https://www.farrayscenter.com',
    },
    hasCourseInstance: danzaCategory.allStyles.map(style => ({
      '@type': 'CourseInstance',
      name: t(`danceClassesHub_style_${style.key}`),
      courseMode: 'onsite',
      location: {
        '@type': 'Place',
        name: 'Farray\'s International Dance Center',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Carrer d\'Entença, 100, Local 1',
          addressLocality: 'Barcelona',
          addressRegion: 'Catalonia',
          postalCode: '08015',
          addressCountry: 'ES',
        },
      },
    })),
  };

  return (
    <>
      {/* SEO metadata (title, description, og, hreflang) is handled by the global SEO.tsx component */}
      {/* Page-specific Schema Markup */}
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(courseSchema)}</script>
      </Helmet>

      <div className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section
          id="danza-barcelona-hero"
          className="relative text-center py-32 md:py-40 overflow-hidden flex items-center justify-center min-h-[600px]"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-black">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/30 via-black to-black"></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
          </div>
          <div className="relative z-20 container mx-auto px-6">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center justify-center gap-2 text-sm text-neutral/75">
                <li>
                  <Link to={`/${locale}`} className="hover:text-primary-accent transition-colors">
                    {t('danzaBarcelona_breadcrumb_home')}
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-neutral/90" aria-current="page">
                  {t('danzaBarcelona_breadcrumb_current')}
                </li>
              </ol>
            </nav>

            {/* H1 + Intro */}
            <AnimateOnScroll>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-tight mb-6 holographic-text">
                {t('danzaBarcelona_h1')}
              </h1>
              <p className="max-w-4xl mx-auto text-xl md:text-2xl text-neutral/90 mt-8 leading-relaxed">
                {t('danzaBarcelona_intro')}
              </p>
            </AnimateOnScroll>

            {/* CTA Button */}
            <AnimateOnScroll delay={200}>
              <div className="mt-12">
                <Link
                  to={`/${locale}#enroll`}
                  className="inline-flex items-center justify-center bg-primary-accent text-white font-bold text-lg py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-accent-glow animate-glow"
                >
                  Prueba una Clase Gratis
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Dance Styles Grid Section */}
        <section aria-labelledby="styles-title" className="py-20 md:py-32 bg-primary-dark/10">
          <div className="container mx-auto px-6 text-center">
            <AnimateOnScroll>
              <h2 id="styles-title" className="text-4xl md:text-5xl font-black tracking-tighter mb-4 holographic-text">
                {t('danzaBarcelona_styles_title')}
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <p className="max-w-3xl mx-auto text-lg text-neutral/90 mb-12">
                {t('danzaBarcelona_styles_description')}
              </p>
            </AnimateOnScroll>

            {/* Grid of Dance Styles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {danzaCategory.allStyles.map((style, index) => (
                <AnimateOnScroll key={style.key} delay={index * 100}>
                  <Link
                    to={`/${locale}${style.url}`}
                    className="group block relative rounded-xl overflow-hidden shadow-lg h-80 bg-black text-white transition-all duration-500 ease-in-out hover:shadow-accent-glow hover:scale-105"
                  >
                    {/* Background Image - Using same image for all contemporary styles */}
                    <img
                      src={danzaCategory.imageUrl}
                      alt={`${t(`danceClassesHub_style_${style.key}`)} - Clases en Barcelona`}
                      className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 opacity-40 group-hover:opacity-60"
                      loading={index < 3 ? 'eager' : 'lazy'}
                      decoding="async"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

                    {/* Hover Border Effect */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-accent rounded-xl transition-all duration-300 pointer-events-none"></div>

                    {/* Content */}
                    <div className="relative flex flex-col justify-end h-full p-6 text-left">
                      <h3 className="text-2xl font-bold mb-2">{t(`danceClassesHub_style_${style.key}`)}</h3>

                      {/* CTA appears on hover */}
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-3">
                        <span className="inline-flex items-center text-sm font-bold text-primary-accent">
                          Ver más →
                        </span>
                      </div>
                    </div>
                  </Link>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Why Study Danza at FIDC Section */}
        <section aria-labelledby="why-title" className="py-20 md:py-32 bg-black">
          <div className="container mx-auto px-6">
            <AnimateOnScroll>
              <h2 id="why-title" className="text-4xl md:text-5xl font-black tracking-tighter mb-16 text-center holographic-text">
                {t('danzaBarcelona_why_title')}
              </h2>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {whyReasons.map((reason, index) => (
                <AnimateOnScroll key={reason.titleKey} delay={index * 100}>
                  <div className="group p-8 bg-primary-dark/20 border border-primary-dark/50 rounded-xl transition-all duration-300 hover:border-primary-accent hover:shadow-accent-glow hover:-translate-y-2">
                    <h3 className="text-2xl font-bold text-primary-accent mb-4 group-hover:text-white transition-colors">
                      {t(reason.titleKey)}
                    </h3>
                    <p className="text-neutral/90 leading-relaxed">
                      {t(reason.descKey)}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection
          title={t('danzaBarcelona_faq_title')}
          faqs={danzaFaqs}
          pageUrl={`${baseUrl}/${locale}/clases/danza-barcelona`}
        />
      </div>
    </>
  );
};

export default DanzaBarcelonaPage;
