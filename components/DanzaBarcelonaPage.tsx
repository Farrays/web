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

            {/* Trust Badges */}
            <AnimateOnScroll delay={200}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-neutral/90">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span>Acreditados por CID-UNESCO</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>+8 años de experiencia</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                  <span>Escuela Cubana Oficial</span>
                </div>
              </div>
            </AnimateOnScroll>

            {/* CTA Buttons */}
            <AnimateOnScroll delay={300}>
              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to={`/${locale}#enroll`}
                  className="inline-flex items-center justify-center bg-primary-accent text-white font-bold text-lg py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-accent-glow animate-glow"
                >
                  {t('enrollNow')}
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  to={`/${locale}#enroll`}
                  className="inline-flex items-center justify-center bg-transparent border-2 border-primary-accent text-primary-accent font-bold text-lg py-4 px-10 rounded-full transition-all duration-300 hover:bg-primary-accent hover:text-white"
                >
                  {t('heroCTA1')}
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

        {/* Stats Widget Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary-dark/30 to-black">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <AnimateOnScroll delay={0}>
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-black text-primary-accent mb-2">8+</div>
                  <div className="text-lg md:text-xl text-neutral/90 font-medium">AÑOS DE EXPERIENCIA</div>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll delay={100}>
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-black text-primary-accent mb-2">1500+</div>
                  <div className="text-lg md:text-xl text-neutral/90 font-medium">ESTUDIANTES ACTIVOS</div>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll delay={200}>
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-black text-primary-accent mb-2">15000+</div>
                  <div className="text-lg md:text-xl text-neutral/90 font-medium">ALUMNOS SATISFECHOS</div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection
          title={t('danzaBarcelona_faq_title')}
          faqs={danzaFaqs}
          pageUrl={`${baseUrl}/${locale}/clases/danza-barcelona`}
        />

        {/* Final CTA Section - Conversion Optimized */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-primary-dark via-black to-black">
          <div className="container mx-auto px-6 text-center">
            <AnimateOnScroll>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 holographic-text">
                Tu Primera Clase Te Está Esperando
              </h2>
              <p className="max-w-2xl mx-auto text-xl text-neutral/90 mb-4">
                No dejes pasar más tiempo. Cada semana que esperas es una semana menos bailando.
              </p>
              <p className="max-w-xl mx-auto text-lg text-neutral/75 mb-10">
                Únete a decenas de bailarines que ya están transformando su técnica, postura y expresión con nosotros.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to={`/${locale}#enroll`}
                  className="inline-flex items-center justify-center bg-primary-accent text-white font-bold text-xl py-5 px-12 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-accent-glow animate-glow"
                >
                  {t('enrollNow')}
                  <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  to={`/${locale}#enroll`}
                  className="inline-flex items-center justify-center bg-transparent border-2 border-primary-accent text-primary-accent font-bold text-xl py-5 px-12 rounded-full transition-all duration-300 hover:bg-primary-accent hover:text-white"
                >
                  {t('heroCTA1')}
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      </div>
    </>
  );
};

export default DanzaBarcelonaPage;
